import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, DollarSign } from "lucide-react";

const programs = [
  {
    name: "reSTART Life",
    location: "Fall City, WA & Online",
    description: "Residential treatment program specifically designed for internet and gaming addiction. Offers intensive therapy, outdoor activities, and life skills training.",
    duration: "45-90 days residential",
    features: ["Individual therapy", "Group therapy", "Family therapy", "Outdoor therapy", "Life skills training"],
    website: "https://www.restartlife.com"
  },
  {
    name: "Game Quitters",
    location: "Online & Worldwide",
    description: "Online support community and coaching program founded by former gaming addict. Offers courses, forums, and one-on-one coaching.",
    duration: "Self-paced online program",
    features: ["Online courses", "Community forum", "Daily accountability", "Coaching available", "Free resources"],
    website: "https://gamequitters.com"
  },
  {
    name: "OLGANON",
    location: "Online & In-Person Groups",
    description: "12-step recovery program for family and friends of individuals with gaming addiction. Support groups meet online and in-person.",
    duration: "Ongoing support groups",
    features: ["12-step program", "Family support", "Weekly meetings", "Sponsor system", "Free to attend"],
    website: "https://www.olganon.org"
  },
  {
    name: "The Center for Internet and Technology Addiction",
    location: "West Hartford, CT & Virtual",
    description: "Clinical treatment and consulting services for internet and technology addiction. Offers both in-person and virtual counseling.",
    duration: "Customized treatment plans",
    features: ["Clinical assessment", "Individual therapy", "Family counseling", "Virtual sessions", "Consulting services"],
    website: "https://virtual-addiction.com"
  },
  {
    name: "SMART Recovery",
    location: "Online & Worldwide Meetings",
    description: "Science-based addiction recovery support group with specific resources for behavioral addictions including gaming.",
    duration: "Ongoing support meetings",
    features: ["Evidence-based approach", "Online meetings", "Free tools", "Self-empowerment focus", "Global community"],
    website: "https://www.smartrecovery.org"
  },
  {
    name: "Outback Therapeutic Expeditions",
    location: "Various wilderness locations",
    description: "Wilderness therapy program for teens and young adults struggling with behavioral issues including gaming addiction.",
    duration: "3-12 weeks",
    features: ["Wilderness therapy", "Adventure-based", "Teen programs", "Young adult programs", "Family involvement"],
    website: "https://outbacktreatment.com"
  }
];

export const DetoxPrograms = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Video Game Detox Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized treatment programs designed to help individuals break free from gaming addiction and rebuild their lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{program.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{program.duration}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold mb-2">Program Features:</p>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="mt-auto" asChild>
                    <a href={program.website} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Note:</strong> Program availability, costs, and insurance coverage vary. Contact programs directly for the most current information and to discuss your specific needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
