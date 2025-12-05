import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael R.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Better Gamers helped me find a therapist who truly understood gaming addiction. After 3 months, I've regained control of my life and my relationships.",
    role: "Former MMO Player"
  },
  {
    name: "Sarah T.",
    location: "Austin, TX",
    rating: 5,
    text: "The resources here connected me with a detox program that changed everything. I went from 12+ hours of gaming daily to a healthy balance.",
    role: "Parent of Teen Gamer"
  },
  {
    name: "James K.",
    location: "Seattle, WA",
    rating: 5,
    text: "I was skeptical at first, but the 988 crisis line they recommended saved my life during my darkest moment. Now I'm 6 months into recovery.",
    role: "Recovery Journey"
  },
  {
    name: "Emily C.",
    location: "Chicago, IL",
    rating: 5,
    text: "Finding a therapist who specialized in gaming addiction made all the difference. The directory here is comprehensive and easy to use.",
    role: "College Student"
  }
];

export const Testimonials = () => {
  return (
    <section 
      className="py-16 bg-gradient-to-b from-background to-muted"
      aria-labelledby="testimonials-heading"
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Recovery Stories From Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who found help through Better Gamers App. 
              Your recovery journey can start today.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />
                    <div className="space-y-4">
                      <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-foreground/90 italic">
                        "{testimonial.text}"
                      </blockquote>
                      <footer className="pt-2 border-t border-border/50">
                        <cite className="not-italic">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </cite>
                      </footer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Join hundreds of others who have found help through Better Gamers App.{" "}
              <span className="font-semibold text-primary">Average rating: 4.8/5</span> from 127+ reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};