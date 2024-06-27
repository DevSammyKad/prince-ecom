import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Comm",
  description: "Welcome to shopping application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
