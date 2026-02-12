import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ShlokaBlock } from "@/components/ui/ShlokaBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AartiVisualSection() {
  const imgUrl = "/aarti.jpg";

  return (
    <section className="relative py-10 sm:py-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-saffron-500/20 shadow-gold">
            {/* Background image + warm overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(255,229,180,0.78) 0%, rgba(255,179,71,0.34) 55%, rgba(255,229,180,0.78) 100%), linear-gradient(135deg, rgba(255,106,0,0.18) 0%, rgba(255,211,106,0.16) 60%, rgba(255,229,180,0.28) 100%), url(${imgUrl})`
              }}
              aria-hidden
            />

            {/* Flickering diya glow */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <motion.div
                className="absolute left-[18%] top-[55%] size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/35 blur-3xl"
                animate={{ opacity: [0.25, 0.55, 0.35, 0.6, 0.3] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-saffron-glow opacity-55" />
            </div>

            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="inline-flex items-center rounded-full border border-saffron-500/25 bg-saffron-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-saffron-900 backdrop-blur">
                  AARTI
                </div>
                <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-saffron-900 sm:text-4xl">
                  A flame of devotion, every day.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-saffron-900/80 sm:text-base">
                  Minimal words. Maximum feeling. Let imagery and gentle light do
                  the storytelling.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/#timings">
                    <Button size="lg">View Aarti Timings</Button>
                  </Link>
                  <Link to="/#gallery">
                    <Button variant="secondary" size="lg">
                      See Temple Moments
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:justify-self-end">
                <ShlokaBlock
                  lines={[
                    "ॐ नमो भगवते वासुदेवाय",
                    "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्"
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


