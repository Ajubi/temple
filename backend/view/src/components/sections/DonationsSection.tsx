import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { HeartHandshake, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export function DonationsSection() {
  const { t } = useTranslation();
  const amounts = useMemo(() => [11, 51, 101, 501, 1001], []);
  const [selected, setSelected] = useState<number>(101);

  return (
    <section id="donate" className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Donations"
            title={t("sections.donateTitle")}
            description={t("sections.donateDesc")}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                  <HeartHandshake className="size-5" aria-hidden />
                </div>
                <div>
                  <div className="font-heading text-xl font-semibold">
                    Choose an offering amount
                  </div>
                  <p className="mt-1 text-sm text-saffron-900/75">
                    Your support helps maintain daily rituals, prasad, and
                    community service.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {amounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setSelected(a)}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-left transition",
                      "border-saffron-500/20 bg-temple-surface hover:brightness-[1.03] shadow-soft",
                      selected === a &&
                        "border-saffron-500/45 bg-saffron-500/5 shadow-glow"
                    )}
                    aria-pressed={selected === a}
                  >
                    <div className="text-xs font-semibold text-saffron-900/65">
                      Preset
                    </div>
                    <div className="mt-1 font-heading text-lg font-semibold">
                      ₹{a}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-saffron-900/75">
                  Selected:{" "}
                  <span className="font-semibold text-saffron-900">
                    ₹{selected}
                  </span>
                </div>
                <Button>
                  Donate ₹{selected} <Sparkles className="size-4" aria-hidden />
                </Button>
              </div>

              <p className="mt-4 text-xs text-saffron-900/65">
                Note: This is UI-only. Integrate a payment gateway later if
                needed.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <Card className="h-full">
              <div className="font-heading text-xl font-semibold">
                Where your support goes
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-saffron-900/75">
                <li className="rounded-2xl bg-saffron-500/5 p-4">
                  <div className="font-semibold text-saffron-900">
                    Daily Aarti & Seva
                  </div>
                  <div className="mt-1">
                    Oil, flowers, incense, and preparations for rituals.
                  </div>
                </li>
                <li className="rounded-2xl bg-saffron-500/5 p-4">
                  <div className="font-semibold text-saffron-900">
                    Prasad & Annadan
                  </div>
                  <div className="mt-1">
                    Food offerings and community meals on special days.
                  </div>
                </li>
                <li className="rounded-2xl bg-saffron-500/5 p-4">
                  <div className="font-semibold text-saffron-900">
                    Maintenance & Care
                  </div>
                  <div className="mt-1">
                    Upkeep of the premises and visitor facilities.
                  </div>
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


