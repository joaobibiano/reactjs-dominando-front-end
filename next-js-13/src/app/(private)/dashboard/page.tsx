import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <section className="flex justify-between">
        <H3>Seus links</H3>

        <Link href="/dashboard/new">
          <Button className="bg-indigo-600">Adicionar</Button>
        </Link>
      </section>
    </>
  );
}
