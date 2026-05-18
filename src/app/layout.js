import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "SUS Group - Startup Founders",
  description: "A directory of startup founders from our community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased`}>
      <body className="bg-black text-white font-sans min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
