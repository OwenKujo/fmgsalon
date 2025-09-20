# Blog API Backend

A Node.js Express backend for blog CRUD with MongoDB.

## Features
- REST API for create, read (all and by slug), update, delete blog posts
- Blog post fields: title, excerpt, image, date, slug, content
- Admin password protected (via dotenv)

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in the root with:
   ```env
   MONGO_URI=mongodb://localhost:27017/fmgsalon
   ADMIN_PASS=your_admin_password
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints
- `POST /api/blog` (admin only)
- `GET /api/blog` (all posts)
- `GET /api/blog/:slug` (single post)
- `PUT /api/blog/:slug` (admin only)
- `DELETE /api/blog/:slug` (admin only)

## Notes
- Requires local MongoDB running on default port.
- Replace `ADMIN_PASS` in `.env` with a secure password.
