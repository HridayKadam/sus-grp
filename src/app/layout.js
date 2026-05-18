import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className="bg-[#FFFFFF] text-[#333333] font-sans min-h-screen flex flex-col selection:bg-[#F26522] selection:text-white">
        <nav className="border-b border-[#EAEAEA] py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F26522] text-white flex items-center justify-center font-bold text-lg leading-none">
              S
            </div>
            <span className="font-semibold text-lg tracking-tight">SUS Group</span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-[#666666]">
            <Link href="/" className="hover:text-black transition-colors">Directory</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
          </div>
        </nav>

        <div className="flex-grow">
          {children}
        </div>

        <footer className="border-t border-[#EAEAEA] py-8 px-6 md:px-12 text-sm text-[#666666]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>&copy; 2026 SUS Group.</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-black">Guidelines</Link>
              <Link href="#" className="hover:text-black">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
