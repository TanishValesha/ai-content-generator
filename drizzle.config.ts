import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: ["./db/schema.ts", "./db/creditSchema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://responses_owner:0svt1MXzGrbA@ep-sweet-breeze-a52v21tb.us-east-2.aws.neon.tech/responses?sslmode=require",
  },
});
