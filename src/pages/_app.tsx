import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <div className={poppins.variable}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
