import { Instagram, Mail, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12" role="contentinfo">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Better Gamers App Logo" className="h-8 w-8 object-contain" />
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Better Gamers
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Supporting recovery and healthy relationships with gaming through education, resources, and professional help.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About Gaming Addiction</a></li>
                <li><a href="#resources" className="hover:text-foreground transition-colors">Crisis Resources</a></li>
                <li><a href="#programs" className="hover:text-foreground transition-colors">Treatment Programs</a></li>
                <li><a href="#therapist" className="hover:text-foreground transition-colors">Find a Therapist</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergency Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">988</strong> - Suicide & Crisis Lifeline
                </li>
                <li>
                  <strong className="text-foreground">1-800-950-NAMI (6264)</strong> - NAMI HelpLine
                </li>
                <li>
                  <strong className="text-foreground">911</strong> - Emergency Services
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 Better Gamers App. All rights reserved.</p>
              <p className="mt-1">Serving video game addiction recovery nationwide | Telehealth available</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/bettergamersapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562010930851"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@bettergamers.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This website provides educational information and resources. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
