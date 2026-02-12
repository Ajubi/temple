import { Seo } from "@/components/seo/Seo";
import { MandalaBackdrop } from "@/components/sections/MandalaBackdrop";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { templePlaceholderSvg } from "@/lib/placeholders";
import { BookHeart, Flower2, ShieldCheck, Users } from "lucide-react";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="History, significance, and traditions of Shree Temple—presented with modern clarity and calm."
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-saffron-sunrise" aria-hidden />
        <div className="absolute inset-0 bg-saffron-glow opacity-90" aria-hidden />
        <MandalaBackdrop className="mix-blend-soft-light" opacity={0.22} />

        <Container className="relative py-14 sm:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-[0.22em] text-white/85">
                ABOUT THE TEMPLE
              </div>
              <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Timeless tradition, expressed with modern calm.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                This page is a ready-to-customize template for your temple’s
                story: origin, deities, rituals, and community impact—written in
                a clean, respectful tone.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-saffron-500/10 shadow-glow backdrop-blur">
              <img
                src={templePlaceholderSvg({
                  title: "History & Significance",
                  subtitle: "Replace with real imagery in src/assets/"
                })}
                alt="Temple-inspired abstract artwork"
                className="aspect-[16/7] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Story"
              title="History, significance, and traditions"
              description="Use this structure to communicate meaning without overwhelming the visitor: clear sections, short paragraphs, and gentle emphasis."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full">
                <div className="font-heading text-xl font-semibold">
                  History
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75">
                  Share the origin story: founding year, spiritual lineage, and
                  key milestones. Keep it human and concise—link deeper details
                  if needed.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="h-full">
                <div className="font-heading text-xl font-semibold">
                  Significance
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75">
                  Explain who the presiding deity is and what the temple
                  represents. Add one short shloka or a central teaching.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="h-full">
                <div className="font-heading text-xl font-semibold">
                  Traditions
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75">
                  Mention daily aarti, seasonal festivals, and seva. Use calm
                  language and avoid clutter—this should feel welcoming.
                </p>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                    <BookHeart className="size-5" aria-hidden />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold">
                      Devotion-first content
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-saffron-900/75">
                      Headings are serif (spiritual elegance), while body text
                      is modern sans-serif for readability on all screens.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                    <ShieldCheck className="size-5" aria-hidden />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold">
                      Accessibility-aware motion
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-saffron-900/75">
                      Scroll reveals are subtle and respect reduced-motion
                      preferences.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                    <Users className="size-5" aria-hidden />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold">
                      Community-first design
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-saffron-900/75">
                      Clear structure helps elders, first-time visitors, and
                      global devotees quickly find timings and events.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                    <Flower2 className="size-5" aria-hidden />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold">
                      Minimal, warm palette
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-saffron-900/75">
                      Saffron gradients + warm sand background + subtle gold
                      accents. Dark mode keeps the glow, without harsh contrast.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}


