import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata = {
  title: "Clinical Bioinformatics Training",
  description: "Beginner learning app for STP Clinical Bioinformatics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}