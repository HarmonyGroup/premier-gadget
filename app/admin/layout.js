import { Poppins, Syne } from "next/font/google";
import ToasterProvider from "@/utils/ToasterProvider";
import "@/app/globals.css";
import { AppProvider } from "@/Context";
import AdminMiddleware from "@/middleware/adminMiddleware";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Premier Gadgets",
  description: "Premier Gadgets",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className}  antialiased`}>
        <AppProvider>
          <AdminMiddleware>
            <ToasterProvider />
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow">
                <Header />
                <div className="">{children}</div>
              </div>
            </div>
          </AdminMiddleware>
        </AppProvider>
      </body>
    </html>
  );
}
