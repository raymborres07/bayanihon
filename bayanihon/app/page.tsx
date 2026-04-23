import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Using the exact image */}
      <section className="relative w-full">
        <Image
          src="/images/hero.png"
          alt="Bayanihon - A network of Filipino scholars in Japan"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
        
        {/* Interactive overlay for navigation */}
        <div className="absolute inset-0">
          {/* About link */}
          <Link 
            href="#about" 
            className="absolute top-[3%] left-[37%] w-[5%] h-[4%] cursor-pointer"
            aria-label="About"
          />
          {/* Projects link */}
          <Link 
            href="#projects" 
            className="absolute top-[3%] left-[44%] w-[6%] h-[4%] cursor-pointer"
            aria-label="Projects"
          />
          {/* Community link */}
          <Link 
            href="#community" 
            className="absolute top-[3%] left-[52%] w-[8%] h-[4%] cursor-pointer"
            aria-label="Community"
          />
          {/* Connect button */}
          <Link 
            href="#connect" 
            className="absolute top-[2.5%] left-[75%] w-[8%] h-[5%] cursor-pointer"
            aria-label="Connect"
          />
        </div>
      </section>

      {/* Content sections below the hero */}
      <AboutSection />
      <ProjectsSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
