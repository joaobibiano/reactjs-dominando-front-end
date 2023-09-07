import { UserButton } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <UserButton />
      {children}
    </main>
  );
}
