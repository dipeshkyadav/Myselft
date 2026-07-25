# Myselft

This repository now uses:
- **React (Vite)** for the frontend (`/home/runner/work/Myselft/Myselft/frontend`)
- **PHP** for the backend API (`/home/runner/work/Myselft/Myselft/backend/api.php`)
- Existing content is preserved in `/home/runner/work/Myselft/Myselft/data/data.json`

## Run frontend

```bash
cd /home/runner/work/Myselft/Myselft/frontend
npm install
npm run dev
```

## Run PHP backend

```bash
cd /home/runner/work/Myselft/Myselft/backend
php -S localhost:8000
```

Optional frontend API override:

```bash
cd /home/runner/work/Myselft/Myselft/frontend
VITE_API_URL=http://localhost:8000/api.php npm run dev
```
