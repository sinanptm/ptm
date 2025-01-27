import { centerSchemas, organizationSchema, websiteSchema } from "./schema";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/layout/Footer";
import { RootLayoutProps } from "@/types/props";
import NavBar from "@/components/layout/NavBar";
import { bebas, russoOne } from "./fonts";
import { metadata } from "./metadata";
import "@/styles/globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${russoOne.variable} ${bebas.variable}`}
    >
      <body className={`antialiased font-russo-one`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                organizationSchema,
                websiteSchema,
                centerSchemas
              ]
            })
          }}
        />
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
