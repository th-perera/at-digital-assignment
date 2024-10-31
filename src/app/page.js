import Image from "next/image";
import MainLayout from "@/components/Layout/main";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Accordion from "@/components/Accordion/Accordion";

export default function Home() {
  return (
    <>
    <MainLayout>
      <Hero />
      <Services />
      <Accordion />
    </MainLayout>
    </>
  );
}
