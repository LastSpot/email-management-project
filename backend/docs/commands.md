# Project Commands

This document lists the essential commands for managing and running the backend application.

---

## Environment Setup

### Windows PowerShell

To set up the development environment on Windows:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements-windows.txt
```

### Linux/macOS

To set up the development environment on Linux or macOS:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-unix.txt
```

---

## Running the Application

### Development Server

This command starts the FastAPI development server with hot-reloading enabled. The application will be available at `http://localhost:8000`.

```bash
fastapi dev
```

### Production Server

To start the FastAPI server in production mode:

```bash
fastapi run
```

### Custom Server Configuration

For custom server configurations using uvicorn directly:

```bash
uvicorn main:app --host 0.0.0.0 --reload
```
