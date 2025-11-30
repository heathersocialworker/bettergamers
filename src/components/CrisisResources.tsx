import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ExternalLink } from "lucide-react";

export const CrisisResources = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Crisis & Support Resources</h2>
            <p className="text-xl text-muted-foreground">
              Immediate help is available 24/7. You're not alone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">988 Suicide & Crisis Lifeline</CardTitle>
                </div>
                <CardDescription className="text-base">
                  24/7 confidential support for people in distress, prevention and crisis resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">Available 24/7:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Call or text 988</li>
                    <li>• Chat online at 988lifeline.org</li>
                    <li>• Confidential and free</li>
                    <li>• Available in English and Spanish</li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 988
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Text 988
                  </Button>
                </div>
                <Button variant="link" className="w-full" asChild>
                  <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">
                    Visit 988lifeline.org
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary bg-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">NAMI (National Alliance on Mental Illness)</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Support, education, and advocacy for individuals and families affected by mental illness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">Resources Available:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• NAMI HelpLine: 1-800-950-NAMI (6264)</li>
                    <li>• Text "HELPLINE" to 62640</li>
                    <li>• Free educational programs</li>
                    <li>• Support groups nationwide</li>
                    <li>• Information and resources</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">
                    Visit NAMI.org
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.nami.org/Support-Education/Support-Groups" target="_blank" rel="noopener noreferrer">
                    Find a Support Group
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6 bg-muted">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong>If you or someone you know is in immediate danger, call 911 or go to the nearest emergency room.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
