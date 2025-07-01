import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-quill/dist/quill.snow.css';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Product Details Project",
  description: "SteadFast cart e-commerce"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
     </Providers>
        </body>
    </html>
  );
}
