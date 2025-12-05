import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden pt-[calc(4rem+env(safe-area-inset-top))]" role="banner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--teal-glow)/0.15),transparent_50%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--sea-green)/0.15),transparent_50%)]" aria-hidden="true" />
      
      <div className="container relative z-10 px-4 py-20">
        <article className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <img src={logo} alt="Better Gamers App - Video Game Addiction Recovery" className="h-32 w-32 mx-auto mb-6 object-contain" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Better Gamers
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Recovery & Support for{" "}
            <span className="text-primary">Video Game Addiction</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Professional resources, expert therapists, and supportive communities to help you or your loved ones build a healthier relationship with gaming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="text-lg group" asChild>
              <a href="#resources">
                Get Help Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="#therapist">Find a Therapist</a>
            </Button>
          </div>
          
          <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              In crisis? Call or text 988 for 24/7 support
            </p>
            <a 
              href="tel:988" 
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="Call or text 988 Suicide and Crisis Lifeline"
            >
              988
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
