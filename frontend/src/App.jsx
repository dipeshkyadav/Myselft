import { useEffect, useState } from 'react'
import './App.css'

const apiUrl = import.meta.env.VITE_API_URL || '/backend/api.php'

function App() {
  const [data, setData] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        setData(payload.content ?? '')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      }
    }

    loadData()
  }, [])

  return (
    <main className="app">
      <h1>Myselft</h1>
      <p>
        <strong>Data:</strong> {data || 'Loading...'}
      </p>
      {error ? <p className="error">{error}</p> : null}
    </main>
  )
}

export default App
