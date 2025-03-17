# LensX Website

A modern website for LensX, featuring AI-powered glasses that enhance vision and provide assistance.

## Development

```bash
# Install dependencies
npm install

# Set up the database
npm run db:setup

# Run the development server
npm run dev
```

## Deployment to Vercel

### Prerequisites

1. Create a Vercel account and install the Vercel CLI
2. Create a Vercel Postgres database

### Steps

1. Connect your GitHub repository to Vercel
2. Add the following environment variables in the Vercel dashboard:

   - `POSTGRES_PRISMA_URL` - Connection string with connection pooling
   - `POSTGRES_URL_NON_POOLING` - Direct connection string
   - `ADMIN_USERNAME` - Username for admin access
   - `ADMIN_PASSWORD` - Password for admin access

3. Deploy the project:

```bash
vercel
```

### Database Migrations

The project uses Prisma's `db push` for production deployments, which is safer for serverless environments. The database schema will be automatically pushed to the Postgres database during the build process.

## Features

- Modern, responsive design
- Waitlist registration
- Contact form
- Admin dashboard for managing waitlist entries and contact submissions
- API routes for handling form submissions
- Database integration with Prisma

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma
- PostgreSQL (production) / SQLite (development)
- Vercel
