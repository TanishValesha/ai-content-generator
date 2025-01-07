import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

// Initialize the Neon client
const sql = neon(
  "postgresql://responses_owner:0svt1MXzGrbA@ep-sweet-breeze-a52v21tb.us-east-2.aws.neon.tech/responses?sslmode=require"
);

// Pass the Neon client directly to drizzle
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db = drizzle(sql as any, { schema });
export default db;
