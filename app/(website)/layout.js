import { Poppins, Syne, Lexend_Deca } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { AppProvider } from "@/Context";
import ToasterProvider from "@/utils/ToasterProvider";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@/assets/whatsapp-icon.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Premier Gadgets NG",
  description: "Premier Gadgets NG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className} mb-[77px] lg:mb-0 antialiased relative`}>
        <AppProvider>
          <ToasterProvider />
          <Header />
          <Navbar />
          <div className="bg-gray-100">{children}</div>
          <Footer />
          <MobileNav />
        </AppProvider>
        <Link target="_blank" href={"https://wa.me/+2348182012345/"} className="fixed bottom-8 right-4 z-50">
          <Image src={WhatsappIcon} width={60} height={60} alt="icon" />
          <span className="absolute -top-1 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">1</span>
        </Link>
      </body>
    </html>
  );
}
