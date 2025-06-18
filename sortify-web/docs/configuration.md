# Configuration and Environment Variables

This document explains the environment variables required to run the frontend application.

## Environment File Template

Create a `.env.local` file in the root of the `/frontend` directory and use the template below to configure your application.

```
# =============================
# SUPABASE CLIENT CONFIGURATION
# =============================
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
NEXT_PUBLIC_SUPABASE_URL=""

# ========================
# NODEMAILER CONFIGURATION
# ========================
SMTP_HOST=""
SMTP_PORT=
SMTP_USER=""
SMTP_PASSWORD=""

# =========================
# NEXTJS CONFIGURATION
# =========================
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ====================
# GOOGLE CONFIGURATION
# ====================
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GEMINI_API_KEY=

# =================
# APP CONFIGURATION
# =================
PREFIX=""
```

---

## Variable Explanations

### Supabase Client Configuration

- `NEXT_PUBLIC_SUPABASE_URL`: Your project's public-facing Supabase URL. This is used to connect to your Supabase instance.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your project's anonymous key. This is a public key that is safe to expose in the browser.

### Nodemailer Configuration

These variables are for connecting to an SMTP server to send emails, used by the contact form.

- `SMTP_HOST`: The hostname of your SMTP provider (e.g., `smtp.gmail.com`).
- `SMTP_PORT`: The port your SMTP provider uses (e.g., 465 or 587).
- `SMTP_USER`: The username or email address for authenticating with the SMTP server.
- `SMTP_PASSWORD`: The password or app-specific password for the SMTP user.

### Next.js Configuration

- `NEXT_PUBLIC_APP_URL`: The base URL of your application. This is used to construct absolute URLs, such as for the OAuth callback. In development, this should be `http://localhost:3000`. In production, it should be your public domain.

### Google Configuration

These variables are required for Google OAuth and for using Google's services like Gmail and Gemini.

- `GOOGLE_CLIENT_ID`: The client ID for your Google OAuth application.
- `GOOGLE_CLIENT_SECRET`: The client secret for your Google OAuth application.
- `GEMINI_API_KEY`: The API key for using the Google Gemini (or generative language) model, which powers the AI email sorting.

### App Configuration

- `PREFIX`: A unique prefix used to identify labels created by Sortify within the user's Gmail account (e.g., `[SORTIFY]`). This helps distinguish app-managed labels from user-created ones.
