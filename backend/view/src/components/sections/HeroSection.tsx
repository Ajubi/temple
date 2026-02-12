import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 48]);

  // Put the Krishna hero image in: public/krishna-hero.jpg
  // (Using public URL avoids build-time missing-file errors.)
  const bgUrl = "/krishna.jpg";
  // Fallbacks (helps during setup if the filename differs)
  const bgFallback0 = "/krishna.jpg";
  const bgFallback1 = "/krishna.jpg";
  const bgFallback2 = "/harinath-temple.jpg";

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full hero background image (single image, full width/height). */}
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          y,
          // Browser will try the first URL; if it 404s, it will try the next.
          backgroundImage: `url(${bgUrl}), url(${bgFallback0}), url(${bgFallback1}), url(${bgFallback2})`,
          backgroundColor: "#FFE5B4"
        }}
        aria-hidden
      />

      {/* Light saffron/beige tint (subtle, not dark; helps harmony) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(255,229,180,0.22) 0%, rgba(255,229,180,0.12) 55%, rgba(255,229,180,0.06) 100%)"
        }}
      />

      <Container className="relative">
        <div className="flex min-h-[58vh] items-center py-10 sm:py-12">
          <div className="relative flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Left hero content (shifted a bit more left) */}
            <div className="w-full max-w-2xl md:-ml-3 lg:-ml-6">
            <Reveal>
              <div className="relative mx-auto md:mx-0 text-center md:text-left">
                {/* Light tint only behind content (NO blur). */}
                <div
                  aria-hidden
                  className={[
                    "pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10",
                    "rounded-[2rem]",
                    "bg-gradient-to-br from-[#ffe5b4]/28 via-[#ffe5b4]/14 to-transparent"
                  ].join(" ")}
                />
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#800000]/35 px-3 py-1 text-xs font-semibold tracking-wide text-[#fff1dc]">
                  <Sparkles className="size-4" aria-hidden />
                  {t("hero.badge")}
                </div>

                <Reveal delay={0.05}>
                  <h1 className="mt-5 text-balance font-hero text-2xl font-semibold tracking-tight text-[#fff1dc] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] sm:text-3xl">
                    {t("hero.title")}
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-4 mx-auto max-w-xl text-xs leading-relaxed text-[#fff1dc]/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.20)] md:mx-0 sm:text-sm">
                    {t("hero.subtitle")}
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                    <Link to="/#visit">
                      <Button size="lg">
                        {t("cta.visit")}{" "}
                        <ArrowRight className="size-4" aria-hidden />
                      </Button>
                    </Link>
                    <Link to="/#donate">
                      <Button variant="secondary" size="lg" className="text-[#fff1dc]">
                        {t("cta.donate")}
                      </Button>
                    </Link>
                    <Link to="/#timings">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="text-[#fff1dc] hover:bg-[#800000]/25"
                      >
                        <Clock className="size-4" aria-hidden />
                        {t("cta.timings")}
                      </Button>
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#fff1dc]/85 md:justify-start">
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#800000]/28 px-3 py-2">
                      <MapPin className="size-4" aria-hidden />
                      Harinath Temple
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#800000]/28 px-3 py-2">
                      <Clock className="size-4" aria-hidden />
                      {t("sections.timingsTitle")}
                    </div>
                  </div>
                </Reveal>

              </div>
            </Reveal>
          </div>
          </div>
        </div>

        {/* Shloka anchored bottom-right (no blur/tint behind it) */}
        <div className="pointer-events-none absolute bottom-6 right-6 hidden md:block">
          <div className="text-right font-devanagari text-2xl font-semibold leading-snug text-[#b11226] drop-shadow-[0_1px_10px_rgba(245,158,11,0.35)]">
            <div>ॐ नमः शिवाय</div>
            <div className="mt-1 text-xl font-medium">वक्रतुंड महाकाय सूर्यकोटि समप्रभः</div>
          </div>
        </div>
      </Container>
    </section>
  );
}


