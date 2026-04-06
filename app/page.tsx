import Nav from "@/components/nav";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Science from "@/components/science";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Team from "@/components/team";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <Science />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
