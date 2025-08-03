import { Github, Twitter, MessageCircle, Heart, Beaker } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "#",
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-background to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Open Research Registry
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Empowering researchers worldwide to share, discover, and build
              upon each other's work. Because the best science happens when
              knowledge flows freely.
            </p>

            {/* Cute science quote */}
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 max-w-md">
              <p className="text-sm text-accent-foreground italic">
                "In science, there is only physics; all the rest is stamp
                collecting."
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                — Ernest Rutherford (probably rolling in his grave about
                journals)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Browse Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Upload Paper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Contracts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links and bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              Connect with us:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-background border border-border/50 rounded-lg transition-all duration-200 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>for open science • © 2024 ORR</span>
          </div>
        </div>

        {/* Fun easter egg */}
        <div className="text-center mt-8 pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground/70">
            🧬 No peer reviewers were harmed in the making of this platform 🧬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
