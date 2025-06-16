# Project Structure

This document outlines the folder structure of the frontend application, explaining the purpose of each key directory and file.

## Folder Structure Tree

```
frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── signin/
│   │   │   ├── signup/
│   │   │   └── forgot-password/
│   │   ├── (home)/
│   │   ├── (protected)/
│   │   │   ├── dashboard/
│   │   │   └── account/
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── protected/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   └── ...
│   │
│   ├── utils/
│   └── middleware.ts
│
├── public/
├── docs/
├── package.json
└── next.config.ts
```

---

## Directory Explanations

### `src/`

The `src` directory contains all the source code for the Next.js application.

### `src/app/`

This is the core of the **Next.js App Router**. It contains all the application's routes, pages, layouts, and UI.

- **Route Groups**: The folders in parentheses, like `(auth)` and `(protected)`, are route groups. They organize the application into logical sections without affecting the URL structure.
  - `(auth)`: Holds all pages related to authentication, such as signing in and signing up.
  - `(protected)`: Contains all pages and layouts that require a user to be logged in. Access is controlled by the middleware.
- `layout.tsx`: The root layout for the entire application.

### `src/components/`

This directory stores all the reusable React components.

- `ui/`: Contains primitive UI components from the `shadcn/ui` library, such as `Button.tsx` and `Input.tsx`.
- `auth/`, `home/`, `protected/`: These folders contain more complex components that are composed of the UI primitives and are specific to a certain part of the application.

### `src/lib/`

This directory is for core application logic, helper functions, and server-side code.

- `supabase/`: Contains essential helper files for initializing the Supabase client in different environments:
  - `client.ts`: For use in client-side components (`"use client"`).
  - `server.ts`: For use in Server Components and Server Actions.
  - `middleware.ts`: For use in the application's middleware.
- `auth.ts`: Contains the server actions for authentication, like `signin` and `signup`.
- `backend-api.ts`: Provides the `authorizedFetch` function, a wrapper around `fetch` that automatically includes the user's auth token for making requests to the external backend.

### `src/utils/`

This directory holds client-side utility functions.

- `auth.ts`: Contains the client-side `signout` function.

### `src/middleware.ts`

This is the main Next.js middleware file. It runs before a request is completed. In this project, it's used to manage the user's session and protect routes by redirecting unauthenticated users from protected pages.

### `public/`

This directory is for static assets that are publicly accessible, such as images, icons, and fonts.

### `docs/`

Contains all the documentation for the project.
