import { ThemeProvider } from "@/components/ThemeProvider";
import { Bebas_Neue} from 'next/font/google'
import { RootLayoutProps } from "@/types";
import metadata from "./metadata";
import "@/styles/globals.css";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={bebasNeue.variable}>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
