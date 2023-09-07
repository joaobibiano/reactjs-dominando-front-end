import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Button>Começar</Button>
      <Button variant="link">Saiba mais</Button>
    </main>
  );
}
