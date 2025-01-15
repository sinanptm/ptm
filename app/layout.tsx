import { RootLayoutProps } from "@/types/props";
import { metadata } from "./metadata";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavBar from "@/components/layout/NavBar";
import { bebas, russoOne } from "./fonts";
import Footer from "@/components/layout/Footer";


const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${russoOne.variable} ${bebas.variable}`}
    >
      <body className={`antialiased font-russo-one`}>
        <NavBar />
        {children}
        <Footer />
        <Analytics debug={false} />
      </body>
    </html>
  );
};

export { metadata };

export default RootLayout;
