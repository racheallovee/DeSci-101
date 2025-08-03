import { Shield, Database, ThumbsUp, Lock, Globe2, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Ownership Proof",
      description:
        "Cryptographically prove authorship with blockchain timestamps. Your research, your rights, forever verifiable.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Database,
      title: "IPFS Storage",
      description:
        "Decentralized, permanent storage on IPFS. Your research can't be censored, deleted, or held hostage by journals.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: ThumbsUp,
      title: "Community Curation",
      description:
        "Let fellow scientists upvote and validate research. True peer review by the people who actually understand your work.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ];

  const secondaryFeatures = [
    {
      icon: Lock,
      title: "Zero Knowledge Proofs",
      description: "Share findings without revealing sensitive data",
    },
    {
      icon: Globe2,
      title: "Global Access",
      description: "Research available to anyone, anywhere, anytime",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Connect with researchers worldwide instantly",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Science, <span className="text-primary">Unleashed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for researchers who believe knowledge belongs to humanity, not
            corporations.
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-xl border ${feature.borderColor} ${feature.bgColor} hover:scale-105 transition-all duration-300 hover:shadow-lg`}
              >
                <div
                  className={`p-4 ${feature.bgColor} rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Secondary features */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Plus More Goodies 🎁
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
