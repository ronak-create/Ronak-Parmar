import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import bgVideo from "./bg-video.mp4";
import { Button } from "@/components/ui/button";

export function Hero() {
  // Create a reference to the Featured Projects section
  const featuredProjectsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the Featured Projects section
  const scrollToFeaturedProjects = () => {
    if (featuredProjectsRef.current) {
      featuredProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          {/* Fallback content if the video doesn't load */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Hi, I'm Ronak Parmar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer | AI/ML Enthusiast | Full Stack Developer
          </p>
          <Button size="lg" className="group" onClick={scrollToFeaturedProjects}>
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
