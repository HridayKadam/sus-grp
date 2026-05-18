import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SUS Group - Startup Founders",
  description: "A directory of startup founders from our community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-[#FFFFFF] text-[#333333] font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
