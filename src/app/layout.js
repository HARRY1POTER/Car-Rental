import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.webmanifest",
  title: "Car Rental",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 bg-white z-[50]">
          <Navbar />
        </div>

        <div>{children}</div>
        <div className="  ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
