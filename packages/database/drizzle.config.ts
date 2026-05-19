import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv"

dotenv.config({
  path: "../../apps/api/.env",
});


export default defineConfig({
  schema: "./src/schema.ts",

  out: "./migrations",

  dialect: "postgresql",

  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});