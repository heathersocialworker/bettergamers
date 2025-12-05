import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Linkedin, Link2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  compact?: boolean;
}

export const SocialShare = ({ 
  url = "https://bettergamersapp.com", 
  title = "Better Gamers - Video Game Addiction Recovery",
  description = "Find video game addiction therapists, detox programs, and 24/7 crisis support. Help yourself or someone you love.",
  compact = false
}: SocialShareProps) => {
  const { toast } = useToast();
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2] hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
      color: "hover:bg-[#0A66C2] hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-[#25D366] hover:text-white"
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Share it with someone who might need help.",
      });
    } catch {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className={`p-2 rounded-full border border-border transition-all ${link.color}`}
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          aria-label="Copy link"
          className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
            <Share2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Know Someone Who Needs Help?
          </h3>
          <p className="text-muted-foreground mb-6">
            Share these resources. Your share could change someone's life.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {shareLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                asChild
                className={`gap-2 ${link.color}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.name}`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={copyToClipboard}
              className="gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <Link2 className="w-4 h-4" />
              Copy Link
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
