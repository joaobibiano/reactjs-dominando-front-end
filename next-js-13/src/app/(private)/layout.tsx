import { H1 } from "@/components/ui/typography";
import { UserButton } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex justify-between mx-24 mt-6">
        <H1>NextShort</H1>

        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <section className="rounded-lg shadow-2xl px-24 py-12 mx-3 my-12 h-3/5">
        {children}
      </section>
    </>
  );
}
