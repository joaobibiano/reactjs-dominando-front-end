import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import database from "@/lib/database";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Dashboard() {
  const links = await database.link.findMany();

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
  return (
    <>
      <section className="flex justify-between">
        <H3>Seus links</H3>

        <Link href="/dashboard/new">
          <Button className="bg-indigo-600">Adicionar</Button>
        </Link>
      </section>

      <section className="mt-12">
        <Table>
          <TableCaption>Links que você cadastrou.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>URL original</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.id}>
                <TableCell className="font-medium">{link.title}</TableCell>
                <TableCell>{formatter.format(link.createdAt)}</TableCell>
                <TableCell className="text-right">{link.viewsCount}</TableCell>
                <TableCell>{link.slug}</TableCell>
                <TableCell>{link.originalUrl}</TableCell>
                <TableCell>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
