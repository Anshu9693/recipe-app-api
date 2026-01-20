import { ENV } from "./src/config/env";
import { defineConfig } from "drizzle-kit";

if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in the .env file");
}

export default defineConfig({
  schema: "./src/db/schema.js", // Your schema file path
  out: "./src/db/migrations", // Your migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
});
