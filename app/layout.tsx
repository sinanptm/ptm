import { RootLayoutProps } from "@/types/props";
import { metadata } from "./metadata";
import "@/styles/globals.css";
import NavBar from "@/components/layout/NavBar";
import { bebas, russoOne, inter, outfit, spaceGrotesk } from "./fonts";


const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${russoOne.variable} ${bebas.variable} ${spaceGrotesk.variable} ${outfit.variable} ${inter.variable}`}
    >
      <body className={`antialiased font-russo-one`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export { metadata };

export default RootLayout;
