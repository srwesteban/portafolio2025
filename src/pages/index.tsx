import Hero from "@/components/home/hero/Hero";
import PhotoFrame from "@/components/home/hero/PhotoFrame";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      {/* <PhotoFrame photoUrl="/images/avatar/avatarCentrado.png" /> */}
      <Hero />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});
