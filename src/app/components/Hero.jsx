import { Button } from "@/components/ui/button";
import { Microscope, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Icon cluster */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
            <Microscope className="w-8 h-8 text-primary" />
          </div>
          <div className="p-3 bg-accent/10 rounded-full border border-accent/20">
            <Globe className="w-8 h-8 text-accent-foreground" />
          </div>
          <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent mb-6 leading-tight">
          Reclaim Science.
          <br />
          <span className="text-accent-foreground">Share Openly.</span>
          <br />
          <span className="text-primary">Own Your Work.</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          The first decentralized research registry where scientists upload
          their work to IPFS, prove ownership on-chain, and let the community
          curate breakthrough discoveries.
          <span className="text-primary font-semibold">
            {" "}
            No gatekeepers, just good science.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            🔗 Connect Wallet
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
          >
            🔬 Explore Research
          </Button>
        </div>

        {/* Stats or badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>1,247 researchers onboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>3,891 papers uploaded</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>∞ possibilities unlocked</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
