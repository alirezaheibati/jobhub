import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import "./lib/fontawesome";
import TopNav from "./components/nav/TopNav";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Job Board app",
  description: "Search and find the job that fits your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
