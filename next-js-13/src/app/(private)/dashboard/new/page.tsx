import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { H3 } from "@/components/ui/typography";
import database from "@/lib/database";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import SubmitButton from "./submit-button";

export default function New() {
  async function create(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const originalUrl = formData.get("originalUrl") as string;
    const slug = formData.get("slug") as string;

    await database.link.create({
      data: {
        title,
        originalUrl,
        slug,
      },
    });

    revalidatePath("/dashboard");
    redirect("/dashboard");
  }

  return (
    <>
      <section className="flex justify-between">
        <H3>Novo link</H3>

        <Link href="/dashboard">
          <Button variant="link">Voltar</Button>
        </Link>
      </section>

      <section className="my-6">
        <form action={create} className="space-y-3">
          <Input required name="title" placeholder="Qual o título?" />
          <Input
            required
            name="originalUrl"
            placeholder="URL original"
            type="url"
          />
          <Input required name="slug" placeholder="Digite o slug" />

          <SubmitButton />
        </form>
      </section>
    </>
  );
}
