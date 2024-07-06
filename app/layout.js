import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/_components/footer";
import { AOSInit } from "@/components/ui/aos-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Comm",
  description: "Welcome to shopping application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AOSInit />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
