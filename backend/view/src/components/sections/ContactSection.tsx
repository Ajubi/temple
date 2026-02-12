import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={t("sections.contactTitle")}
            description={t("sections.contactDesc")}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-saffron-500/20 bg-temple-surface shadow-gold backdrop-blur">
              <div className="absolute inset-0 bg-saffron-glow opacity-60" />
              <div className="relative p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-saffron-900">
                  <MapPin className="size-4 text-saffron-700" />
                  Map placeholder
                </div>
                <p className="mt-2 max-w-xl text-sm text-saffron-900/75">
                  Embed Google Maps or OpenStreetMap here. For best performance,
                  load it on demand (after user interaction).
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-saffron-500/10 p-4 text-sm shadow-soft backdrop-blur">
                    <div className="font-semibold text-saffron-900">
                      Address
                    </div>
                    <div className="mt-1 text-saffron-900/75">
                      City · Country · Postal Code
                    </div>
                  </div>
                  <a
                    href="#"
                    className="rounded-2xl bg-saffron-500/10 p-4 text-sm shadow-soft backdrop-blur transition hover:brightness-[1.03]"
                    aria-label="Open directions (placeholder)"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-saffron-900">
                        Directions
                      </div>
                      <ExternalLink className="size-4 text-saffron-900/60" />
                    </div>
                    <div className="mt-1 text-saffron-900/75">
                      Open in maps
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-5">
              <Card>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-saffron-700" />
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-sm text-saffron-900/75">
                      +00 0000 000 000
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-saffron-700" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm text-saffron-900/75">
                      info@shreetemple.org
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="text-sm font-semibold">Social</div>
                <div className="mt-2 text-sm text-saffron-900/75">
                  Add social links here (Instagram, YouTube, Facebook).
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


