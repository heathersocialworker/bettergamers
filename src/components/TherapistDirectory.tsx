import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Video, Phone } from "lucide-react";

const therapists = [
  {
    name: "Psychology Today - Gaming Addiction Specialists",
    description: "Comprehensive directory of licensed therapists who specialize in gaming addiction and technology overuse.",
    specializations: ["Gaming Addiction", "Internet Addiction", "Behavioral Addictions", "Teen Therapy"],
    availability: ["In-person", "Online therapy", "Multiple locations"],
    website: "https://www.psychologytoday.com/us/therapists/video-game-addiction"
  },
  {
    name: "BetterHelp Online Therapy",
    description: "Access licensed therapists specializing in gaming addiction through convenient online sessions.",
    specializations: ["Gaming Addiction", "Anxiety", "Depression", "Life Transitions"],
    availability: ["Video sessions", "Chat", "Phone", "Available 24/7"],
    website: "https://www.betterhelp.com"
  },
  {
    name: "Talkspace",
    description: "Online therapy platform connecting you with licensed therapists experienced in treating gaming and internet addiction.",
    specializations: ["Behavioral Addictions", "Mental Health", "Relationship Issues"],
    availability: ["Text therapy", "Video sessions", "Flexible scheduling"],
    website: "https://www.talkspace.com"
  },
  {
    name: "SAMHSA Treatment Locator",
    description: "Find local treatment facilities and therapists specializing in behavioral health including gaming addiction.",
    specializations: ["Addiction Treatment", "Mental Health", "Behavioral Health"],
    availability: ["National directory", "Filter by location", "Insurance accepted"],
    website: "https://www.samhsa.gov/find-help/national-helpline"
  }
];

const findingTherapistTips = [
  {
    title: "Look for Gaming Addiction Specialization",
    description: "Ensure the therapist has specific experience with gaming or internet addiction, not just general addiction therapy."
  },
  {
    title: "Consider the Approach",
    description: "Common effective approaches include CBT (Cognitive Behavioral Therapy), DBT (Dialectical Behavior Therapy), and family therapy."
  },
  {
    title: "Check Credentials",
    description: "Verify the therapist is licensed (LCSW, LPC, LMFT, or Psychologist) and in good standing."
  },
  {
    title: "Ask About Experience",
    description: "Inquire about their experience treating gaming addiction and their success rates."
  },
  {
    title: "Verify Insurance",
    description: "Check if they accept your insurance or offer sliding scale fees."
  }
];

export const TherapistDirectory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find a Therapist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with licensed mental health professionals who specialize in gaming addiction treatment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {therapists.map((therapist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <CardDescription className="text-base">
                    {therapist.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="secondary">{spec}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold mb-2">Available Services:</p>
                    <ul className="space-y-1">
                      {therapist.availability.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          {item.includes("Video") || item.includes("Online") ? (
                            <Video className="h-3 w-3 text-primary" />
                          ) : item.includes("Phone") ? (
                            <Phone className="h-3 w-3 text-primary" />
                          ) : (
                            <MapPin className="h-3 w-3 text-primary" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" asChild>
                    <a href={therapist.website} target="_blank" rel="noopener noreferrer">
                      Visit Directory
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl">Tips for Finding the Right Therapist</CardTitle>
              <CardDescription>
                Finding the right therapist is crucial for successful treatment. Here's what to look for:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {findingTherapistTips.map((tip, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {tip.title}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
