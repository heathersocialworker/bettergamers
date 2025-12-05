import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail("");
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive recovery tips and resources in your inbox.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Recovery Tips & Resources
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of people on their journey to healthier gaming habits. 
            Get weekly tips, expert advice, and exclusive resources delivered to your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">You're subscribed! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base"
                aria-label="Email address for newsletter"
              />
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="h-12 px-8"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Subscribe Free"
                )}
              </Button>
            </form>
          )}
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Your privacy is protected.
          </p>
        </div>
      </div>
    </section>
  );
};
