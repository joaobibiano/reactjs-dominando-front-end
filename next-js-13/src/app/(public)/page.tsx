import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as Typography from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="ml-24 mt-24">
      <section>
        <Typography.H1>NextShort</Typography.H1>
        <Typography.H3>Aumente sua produtividade hoje mesmo.</Typography.H3>
        <Typography.P className="text-slate-600">
          Seus links, sempre à mão.
        </Typography.P>
      </section>

      <section className="mt-12">
        <Link href="/dashboard">
          <Button className="bg-indigo-600">Começar</Button>
        </Link>

        <Button className="group" variant="link">
          Saiba mais <ArrowRight className="group-hover:animate-pulse" />
        </Button>
      </section>
    </main>
  );
}
