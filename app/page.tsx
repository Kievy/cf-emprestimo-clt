import Hero from "@/components/Hero";
import SectionBanks from "@/components/SectionBanks";
import SectionCLT from "@/components/SectionCLT";
import SectionVantagens from "@/components/SectionVantagens";
import SectionComparacao from "@/components/SectionComparacao";
import SectionQuem from "@/components/SectionQuem";
import SectionPassos from "@/components/SectionPassos";
import SectionMargem from "@/components/SectionMargem";
import SectionPorque from "@/components/SectionPorque";
import SectionFAQ from "@/components/SectionFAQ";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionBanks />
      <SectionCLT />
      <SectionVantagens />
      <SectionComparacao />
      <SectionQuem />
      <SectionPassos />
      <SectionMargem />
      <SectionPorque />
      <SectionFAQ />
      <SectionCTA />
      <Footer />
    </main>
  );
}
