import db from "@/db/config";
import { historySchema } from "@/db/schema";
import moment from "moment";

export const handleDbSave = async (
  formData: string,
  aiOutput: string,
  templateSlug: string,
  user: string
) => {
  const result = await db
    .insert(historySchema)
    .values({
      formData: formData,
      aiResponse: aiOutput,
      templateSlug: templateSlug,
      createdBy: user,
      createdAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    })
    .returning();

  console.log(result);
};
