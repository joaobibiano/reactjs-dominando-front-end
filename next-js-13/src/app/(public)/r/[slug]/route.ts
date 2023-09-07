import database from "@/lib/database";
import { NextResponse } from "next/server";

type Context = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, context: Context) {
  const { slug } = context.params;

  const found = await database.link.findFirst({
    where: {
      slug,
    },
  });

  if (!found) {
    return NextResponse.redirect("/404");
  }

  return NextResponse.redirect(found.originalUrl);
}
