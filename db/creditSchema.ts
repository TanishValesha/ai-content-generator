import { pgTable, serial, numeric, varchar } from "drizzle-orm/pg-core";

export const creditSchema = pgTable("credits", {
  id: serial("id").primaryKey(),
  credits: numeric().notNull().default("0"),
  createdBy: varchar("createdBy").notNull(),
});
