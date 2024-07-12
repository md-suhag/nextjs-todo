import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App - Next js",
  description: "nextjs todo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "10px" }} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
