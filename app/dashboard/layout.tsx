import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <SideBar />
      <div className="md:pl-64">
        <Header />
        <main className="container p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
