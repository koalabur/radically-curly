// Google Fonts
import { Allura, Lora } from "next/font/google";

// Context API
import { MenuContextProvider } from "@/context/menu";

// Components
import Nav from "@/components/nav/StandardNav";
import Footer from "@/components/footer/StandardFooter";
import Menu from "@/components/menu/StandardMenu";

// Global Styles
import "@/styles/global.scss";

const lora = Lora({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--lora",
  preload: true,
  
});

const allura = Allura({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--allura",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MenuContextProvider>
        <body className={`${lora.variable} ${allura.variable}`}>
          <Menu />
          <Nav />
          {children}
          <Footer />
        </body>
      </MenuContextProvider>
    </html>
  );
}
