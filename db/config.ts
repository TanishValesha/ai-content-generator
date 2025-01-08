// filepath: /home/tanish/Web/ai-generator/db/config.ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { creditSchema } from "./creditSchema";

// if (!process.env.NEXT_DB_URL) {
//   throw new Error(
//     "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?"
//   );
// }

// Initialize the Neon client
const sql = neon(
  "postgresql://responses_owner:0svt1MXzGrbA@ep-sweet-breeze-a52v21tb.us-east-2.aws.neon.tech/responses?sslmode=require"
);

// Pass the Neon client directly to drizzle
const db = drizzle(sql, { schema: { history: schema, credit: creditSchema } });

export default db;
