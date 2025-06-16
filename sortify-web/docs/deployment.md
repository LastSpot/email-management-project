# Deployment Guide

This guide provides simple, step-by-step instructions for deploying the frontend application to two popular platforms: Vercel and Railway.

---

## Deploying on Vercel (Recommended for Next.js)

Vercel is the company that created Next.js, and it offers the easiest and most optimized deployment experience for Next.js applications.

### Step 1: Sign Up and Connect Your Repository

1.  Go to [vercel.com](https://vercel.com/) and sign up for a free account. It's best to sign up using your GitHub, GitLab, or Bitbucket account.
2.  After signing up, click "Add New..." and select "Project".
3.  Import the Git repository that contains this project.

### Step 2: Configure Your Project

1.  Vercel will automatically detect that this is a Next.js project and set the build and output settings for you. You usually don't need to change anything here.
2.  Go to the "Environment Variables" section. Here, you need to add the same variables you have in your local `.env.local` file. Copy and paste each variable one by one:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    - `BACKEND_API_URL`
    - `EMAIL_HOST`
    - `EMAIL_USER`
    - `EMAIL_PASSWORD`

### Step 3: Deploy

1.  Click the "Deploy" button.
2.  Vercel will build and deploy your application. After a few moments, you will get a public URL for your live site.

That's it! Vercel will automatically redeploy your application every time you push a new change to your Git repository.

---

## Deploying on Railway

Railway is another excellent platform that is great for deploying full-stack applications.

### Step 1: Sign Up and Create a Project

1.  Go to [railway.app](https://railway.app/) and sign up for an account, preferably with GitHub.
2.  From your dashboard, click "New Project".
3.  Select "Deploy from GitHub repo" and choose the repository for this project.

### Step 2: Configure Your Service

1.  Railway will automatically create a "service" for your application and detect that it's a Next.js app.
2.  Click on your new service and go to the "Variables" tab.
3.  Add the same environment variables that you would for Vercel. Click "Add New Variable" and add each one:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    - `BACKEND_API_URL`
    - `EMAIL_HOST`
    - `EMAIL_USER`
    - `EMAIL_PASSWORD`

### Step 3: Check Build and Start Commands

1.  Go to the "Settings" tab for your service.
2.  Railway's automatic build system (Nixpacks) is very good at detecting how to build and start a Next.js app. You usually don't need to change anything.
3.  If you need to, you can set the "Build Command" to `pnpm build` and the "Start Command" to `pnpm start`.

### Step 4: Get Your Public URL

1.  Once Railway finishes deploying, go to the "Settings" tab and under the "Domains" section, you will find the public URL for your deployed application. You can also add a custom domain here.

Just like Vercel, Railway will automatically redeploy your application every time you push a change to your connected branch.
