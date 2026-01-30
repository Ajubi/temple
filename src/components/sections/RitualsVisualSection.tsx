import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { templePlaceholderSvg } from "@/lib/placeholders";
import { cn } from "@/lib/cn";
import { useTranslation } from "react-i18next";
import { SmartVideo } from "@/components/ui/SmartVideo";

const ritualCards = [
  {
    titleKey: "Ritual Aarti",
    caption: "Warm light · calm focus",
    videoSrc: "/aarti.mp4"
  },
  {
    titleKey: "Devotees praying",
    caption: "Silence · devotion · togetherness",
    videoSrc: "/devotees.mp4"
  },
  {
    titleKey: "Festival celebrations",
    caption: "Color · music · community",
    videoSrc: "/celebration.mp4"
  }
] as const;

export function RitualsVisualSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Rituals"
            title={t("sections.festivalsTitle")}
            description={t("sections.festivalsDesc")}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {ritualCards.map((c, idx) => {
            const fallbackPoster = templePlaceholderSvg({
              title: "Temple",
              subtitle: c.titleKey
            });

            return (
              <Reveal key={c.titleKey} delay={idx * 0.05}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-saffron-500/20 shadow-gold",
                    "bg-temple-surface backdrop-blur"
                  )}
                >
                  <div className="absolute inset-0" aria-hidden>
                    <div className="absolute inset-0 bg-saffron-glow opacity-55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/45 via-saffron-700/15 to-transparent" />
                  </div>

                  <SmartVideo
                    src={c.videoSrc}
                    // Poster is important: ensures a visible frame even before video loads
                    // and when autoplay is restricted or reduced-motion is enabled.
                    poster={fallbackPoster}
                    title={c.titleKey}
                    className="pointer-events-none aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Always-available poster fallback (data URI). */}
                  <img src={fallbackPoster} alt="" aria-hidden="true" className="hidden" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="font-heading text-xl font-semibold text-[#FFF3E3]">
                      {c.titleKey}
                    </div>
                    <div className="mt-1 text-sm text-white/80">{c.caption}</div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden>
                    <div className="absolute inset-0 ring-1 ring-gold-300/30" />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(245,158,11,0.30)_0%,rgba(245,158,11,0)_60%)]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


