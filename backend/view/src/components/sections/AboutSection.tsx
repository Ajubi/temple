import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookOpen, Flower2, Gem, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: BookOpen,
    title: "Living History",
    body: "A lineage of tradition—shared with clarity and calm, for modern visitors."
  },
  {
    icon: HandHeart,
    title: "Daily Seva",
    body: "Simple, consistent rituals that anchor the day with devotion and discipline."
  },
  {
    icon: Flower2,
    title: "Community",
    body: "Festivals, volunteering, and seva opportunities designed for all ages."
  },
  {
    icon: Gem,
    title: "Premium Simplicity",
    body: "Minimal design, subtle glow, and micro-interactions—never clutter."
  }
] as const;

export function AboutSection() {
  return (
    <section id="visit" className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Tradition, clarity, and spiritual warmth"
            description="A modern presentation of timeless practices—designed for a global community, across mobile, tablet, and desktop."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={idx * 0.04}>
                <Card className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <div className="font-heading text-lg font-semibold">
                        {h.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-saffron-900/75">
                        {h.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-3xl border border-saffron-500/20 bg-temple-surface p-6 shadow-gold backdrop-blur sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center">
              <div>
                <div className="font-heading text-2xl font-semibold tracking-tight">
                  A space designed for calm
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75 sm:text-base">
                  Every detail is intentional: clear typography, warm gradients,
                  and soft motion that respects accessibility preferences. This
                  helps visitors find what they need—timings, events, location,
                  and ways to contribute—without distraction.
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 md:justify-end">
                <Link
                  to="/about"
                  className="text-sm font-semibold text-saffron-700 hover:text-saffron-800"
                >
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


