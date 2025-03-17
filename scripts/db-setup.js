#!/usr/bin/env node

/**
 * This script handles database setup for both development and production environments.
 * In development, it uses SQLite.
 * In production, it uses Vercel Postgres.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Determine environment
const isProd = process.env.NODE_ENV === "production";

// Function to run shell commands
function runCommand(command) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    process.exit(1);
  }
}

// Main function
async function main() {
  console.log(
    `Setting up database for ${
      isProd ? "production" : "development"
    } environment...`
  );

  // Generate Prisma client
  console.log("Generating Prisma client...");
  runCommand("npx prisma generate");

  if (isProd) {
    // In production, we use Vercel Postgres
    console.log("Setting up production database...");

    // Check if we have the required environment variables
    if (
      !process.env.POSTGRES_PRISMA_URL ||
      !process.env.POSTGRES_URL_NON_POOLING
    ) {
      console.error(
        "Missing required environment variables for Postgres. Make sure POSTGRES_PRISMA_URL and POSTGRES_URL_NON_POOLING are set."
      );
      process.exit(1);
    }

    // Push the schema to the database (safer than migrations in serverless environments)
    console.log("Pushing schema to Postgres...");
    runCommand("npx prisma db push");
  } else {
    // In development, we use SQLite
    console.log("Setting up development database...");

    // Create migrations if they don't exist
    const migrationsDir = path.join(__dirname, "../prisma/migrations");
    if (
      !fs.existsSync(migrationsDir) ||
      fs.readdirSync(migrationsDir).length === 0
    ) {
      console.log("Creating initial migration...");
      runCommand("npx prisma migrate dev --name init");
    } else {
      console.log("Running existing migrations...");
      runCommand("npx prisma migrate dev");
    }
  }

  console.log("Database setup complete!");
}

main().catch((error) => {
  console.error("Database setup failed:", error);
  process.exit(1);
});
