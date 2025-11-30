import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Brain, Users, TrendingDown } from "lucide-react";

const infoCards = [
  {
    icon: Brain,
    title: "What is Video Game Addiction?",
    description: "Video game addiction, also known as Internet Gaming Disorder, is a behavioral addiction characterized by excessive or compulsive use of video games that interferes with daily life.",
    details: [
      "Preoccupation with gaming",
      "Withdrawal symptoms when not gaming",
      "Tolerance - need to spend increasing amounts of time gaming",
      "Loss of interest in other activities",
      "Continued gaming despite negative consequences"
    ]
  },
  {
    icon: AlertCircle,
    title: "Warning Signs",
    description: "Recognizing the signs early can help prevent serious consequences and begin the path to recovery.",
    details: [
      "Neglecting personal hygiene and health",
      "Declining academic or work performance",
      "Strained relationships with family and friends",
      "Sleep deprivation and irregular eating patterns",
      "Lying about gaming time or hiding gaming habits",
      "Using gaming to escape problems or negative feelings"
    ]
  },
  {
    icon: TrendingDown,
    title: "Impact on Mental Health",
    description: "Gaming addiction can significantly affect mental health and overall well-being.",
    details: [
      "Increased anxiety and depression",
      "Social isolation and loneliness",
      "Poor self-esteem and self-worth",
      "Difficulty with emotional regulation",
      "Higher risk of other addictive behaviors"
    ]
  },
  {
    icon: Users,
    title: "Recovery is Possible",
    description: "With proper support and treatment, individuals can develop healthy gaming habits and improve their quality of life.",
    details: [
      "Professional therapy and counseling",
      "Support groups and community programs",
      "Family involvement and education",
      "Developing healthy coping mechanisms",
      "Building new hobbies and interests",
      "Structured treatment programs"
    ]
  }
];

export const InfoSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Understanding Video Game Addiction
          </h2>
          <p className="text-xl text-muted-foreground">
            Education is the first step toward recovery. Learn about the signs, impacts, and pathways to healing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
                      <CardDescription className="text-base">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
