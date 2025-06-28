import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <div className={`${poppins.variable} font-sans`}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
