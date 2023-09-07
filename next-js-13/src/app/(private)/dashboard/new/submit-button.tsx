"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={clsx({
        "animate-bounce": pending,
      })}
    >
      {pending ? "Carregando..." : "Enviar"}
    </Button>
  );
}
