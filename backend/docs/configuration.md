# Configuration and Environment Variables

This document explains the environment variables required to run the backend application.

## Environment File Template

Create a `.env` file in the root of the `/backend` directory and use the template below to configure your application.

```
# =====================
# BACKEND CONFIGURATION
# =====================
API_NAME="Template Backend"
API_VERSION="0.1.0"

# ======================
# POSTGRES CONFIGURATION
# ======================
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_HOST=""
POSTGRES_PORT=0
POSTGRES_DBNAME=""
POSTGRES_SCHEMA=""

# ========================
# JWT SECRET CONFIGURATION
# ========================
JWT_SECRET="secret"
```

---

## Variable Explanations

### Backend Configuration

- `API_NAME`: The name of your API application displayed in documentation and info endpoints.
- `API_VERSION`: The version number of your API application.

### PostgreSQL Database Configuration

- `POSTGRES_USER`: The username for connecting to your PostgreSQL database.
- `POSTGRES_PASSWORD`: The password for the PostgreSQL user.
- `POSTGRES_HOST`: The hostname or IP address of your PostgreSQL server.
- `POSTGRES_PORT`: The port number your PostgreSQL server is running on (typically 5432).
- `POSTGRES_DBNAME`: The name of the database to connect to.
- `POSTGRES_SCHEMA`: The database schema to use (typically "public").

### JWT Secret Configuration

- `JWT_SECRET`: The secret key used for verifying JWT tokens for authentication. This should be a secure, randomly generated string.
