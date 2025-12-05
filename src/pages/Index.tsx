import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { CrisisResources } from "@/components/CrisisResources";
import { DetoxPrograms } from "@/components/DetoxPrograms";
import { TherapistDirectory } from "@/components/TherapistDirectory";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { BlogCTA } from "@/components/BlogCTA";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SocialShare } from "@/components/SocialShare";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>
        <section id="about" aria-label="About video game addiction">
          <InfoSection />
        </section>
        <section id="resources" aria-label="Crisis resources and hotlines">
          <CrisisResources />
        </section>
        <section id="programs" aria-label="Video game detox and treatment programs">
          <DetoxPrograms />
        </section>
        <section id="therapist" aria-label="Find video game addiction therapists near you">
          <TherapistDirectory />
        </section>
        <section id="testimonials" aria-label="Recovery success stories and testimonials">
          <Testimonials />
        </section>
        <FAQSection />
        <BlogCTA />
        <SocialShare />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
