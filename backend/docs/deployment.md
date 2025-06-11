# Deployment Guide

This guide provides simple, step-by-step instructions for deploying the FastAPI backend application to two popular platforms: Railway and Render.

---

## Deploying on Railway

Railway is an excellent platform for deploying full-stack applications with automatic deployments.

### Step 1: Sign Up and Create a Project

1. Go to [railway.app](https://railway.app/) and sign up for an account, preferably with GitHub.
2. From your dashboard, click "New Project".
3. Select "Deploy from GitHub repo" and choose the repository for this project.

### Step 2: Configure Your Service

1. Railway will automatically create a "service" for your application and detect that it's a Python app.
2. Click on your new service and go to the "Variables" tab.
3. Add all the environment variables from your `.env` file. Click "Add New Variable" and add each one.

### Step 3: Configure Build and Start Commands

1. Go to the "Settings" tab for your service.
2. Set the "Build Command" to: `pip install -r requirements-unix.txt`
3. Set the "Start Command" to: `fastapi run --host 0.0.0.0 --port $PORT`
4. Make sure the "Root Directory" is set to `/backend` if your backend is in a subfolder.

### Step 4: Get Your Public URL

1. Once Railway finishes deploying, go to the "Settings" tab and under the "Domains" section, you will find the public URL for your deployed API.
2. You can also add a custom domain here if needed.

---

## Deploying on Render

Render is another great platform that offers easy deployment for web services and databases.

### Step 1: Sign Up and Create a Web Service

1. Go to [render.com](https://render.com/) and sign up for a free account, preferably with GitHub.
2. From your dashboard, click "New +" and select "Web Service".
3. Connect your GitHub repository and select the repository containing this project.

### Step 2: Configure Your Web Service

1. **Name**: Give your service a name (e.g., "my-fastapi-backend").
2. **Environment**: Select "Python".
3. **Region**: Choose the region closest to your users.
4. **Branch**: Select the branch you want to deploy (usually `main` or `master`).
5. **Root Directory**: Set to `backend` if your backend is in a subfolder.

### Step 3: Set Build and Start Commands

1. **Build Command**: `pip install -r requirements-unix.txt`
2. **Start Command**: `fastapi run --host 0.0.0.0 --port $PORT`

### Step 4: Add Environment Variables

1. In the "Environment Variables" section, add all the variables from your `.env` file:
   - `API_NAME`
   - `API_VERSION`
   - `POSTGRES_USER`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_HOST`
   - `POSTGRES_PORT`
   - `POSTGRES_DBNAME`
   - `POSTGRES_SCHEMA`
   - `JWT_SECRET`

### Step 5: Deploy

1. Click "Create Web Service".
2. Render will build and deploy your FastAPI application.
3. Once deployed, you'll get a public URL ending in `.onrender.com`.

---

## Important Notes

- Both platforms will automatically redeploy your application when you push changes to your connected Git branch.
- Make sure your PostgreSQL database is accessible from the internet if you're using an external database.
- For production deployments, consider using managed database services like Railway's PostgreSQL or Render's PostgreSQL.
- Your FastAPI documentation will be available at `your-app-url/docs` once deployed.
