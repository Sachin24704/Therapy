import "./globals.css";
import { Inter } from "next/font/google";
import { AuthUserProvider } from "@/firebase/auth";
import Dashboard from "@/components/dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenexa",
  description: "Mental health App",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <AuthUserProvider>
          <body className={inter.className}>{children}</body>
        </AuthUserProvider>
      </html>
    </>
  );
}
