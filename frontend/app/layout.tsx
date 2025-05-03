import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./component/nav";
const inter = Inter({ subsets: ["latin"] });
import { UserProvider } from "./context/context";
import { usePathname } from "next/navigation";
import NavWrapper from "./component/NavWrapper";
import Footer from "./component/footer";

export const metadata: Metadata = {
  title: "TLShop - Premium Mobile Devices",
  description:
    "Your premium destination for the latest smartphones and accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <UserProvider>
          <main className="">
            <div className="mx-auto">
              <Nav/>
              <NavWrapper/>
            </div>
            <div className="">{children}</div>
            <Footer/>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
