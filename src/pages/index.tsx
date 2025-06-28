import Hero from "@/components/home/hero/Hero";
import FullPageSlider from "@/components/ui/FullPageSlider";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <FullPageSlider
      sections={[
        <Hero key="hero1" />,
        <Hero key="hero2" />,
        <Hero key="hero3" />,
      ]}
    />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});
