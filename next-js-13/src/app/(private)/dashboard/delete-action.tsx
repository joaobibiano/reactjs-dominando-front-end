"use server";

import database from "@/lib/database";
import { revalidatePath } from "next/cache";

export default async function deleteLink(id: number) {
  await database.link.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard");
}
