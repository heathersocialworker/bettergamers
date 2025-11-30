import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { CrisisResources } from "@/components/CrisisResources";
import { DetoxPrograms } from "@/components/DetoxPrograms";
import { TherapistDirectory } from "@/components/TherapistDirectory";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <InfoSection />
        </div>
        <div id="resources">
          <CrisisResources />
        </div>
        <div id="programs">
          <DetoxPrograms />
        </div>
        <div id="therapist">
          <TherapistDirectory />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
