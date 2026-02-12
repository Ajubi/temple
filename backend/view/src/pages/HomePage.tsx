import { Seo } from "@/components/seo/Seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AartiVisualSection } from "@/components/sections/AartiVisualSection";
import { TimingsSection } from "@/components/sections/TimingsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { RitualsVisualSection } from "@/components/sections/RitualsVisualSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DonationsSection } from "@/components/sections/DonationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <Seo
        title="Shree Temple"
        description="A modern Hindu temple website: darshan timings, festivals, gallery, and donation information."
      />
      <HeroSection />
      <AartiVisualSection />
      <TimingsSection />
      <RitualsVisualSection />
      <EventsSection />
      <AboutSection />
      <GallerySection />
      <DonationsSection />
      <ContactSection />
    </>
  );
}


