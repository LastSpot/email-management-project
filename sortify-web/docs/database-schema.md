# Database Schema

This document outlines all PostgreSQL tables that should be defined in this project based on the codebase.

## Tables

### 1. `folders`

Stores user-created email folders/labels that sync with Gmail labels.

**Columns:**

-   `id` (integer, primary key, auto-increment)
-   `user_id` (string/uuid, foreign key to auth.users.id)
-   `name` (string) - Folder name
-   `description` (string) - Optional folder description
-   `provider_folder_id` (string) - Gmail label ID that this folder corresponds to

**Usage:**

-   Referenced in: `src/app/actions/folders.ts`, `src/app/actions/core-action.ts`, `src/components/protected/inbox/folder-table.tsx`
-   Operations: CREATE, READ, UPDATE, DELETE
-   Real-time subscriptions enabled (see `folder-table.tsx`)

**SQL Schema:**

```sql
CREATE TABLE folders (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  provider_folder_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_folders_user_id ON folders(user_id);
CREATE INDEX idx_folders_provider_folder_id ON folders(provider_folder_id);
```

---

### 2. `mail_accounts`

Stores OAuth provider tokens and account information for email providers (Gmail, etc.).

**Columns:**

-   `user_id` (string/uuid, primary key, foreign key to auth.users.id)
-   `provider` (string) - OAuth provider name (e.g., "google")
-   `access_token` (text) - OAuth access token
-   `refresh_token` (text) - OAuth refresh token
-   `email_address` (string) - User's email address
-   `expires_at` (timestamp) - Token expiration time

**Usage:**

-   Referenced in: `src/app/api/auth/callback/route.ts`, `src/lib/auth.ts`
-   Operations: UPSERT (with conflict on user_id), READ
-   Unique constraint on `user_id` (one account per user)

**SQL Schema:**

```sql
CREATE TABLE mail_accounts (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  email_address TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## Notes

1. **Supabase Auth Integration**: Both tables reference `auth.users(id)` which is managed by Supabase Auth. The `user_id` columns should be UUIDs matching Supabase's auth user IDs.

2. **Row Level Security (RLS)**: Consider enabling RLS policies on both tables to ensure users can only access their own data:

    - `folders`: Users should only see/modify their own folders
    - `mail_accounts`: Users should only see/modify their own account

3. **Not Stored in Database**:

    - `suggestions` - Sent via email (nodemailer), not stored
    - `contacts` - Sent via email (nodemailer), not stored
    - `emails` - Fetched from Gmail API, not stored locally

4. **Real-time Features**: The `folders` table has real-time subscriptions enabled for live updates in the UI.
