import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useNow } from "@/hooks/useNow";
import { cn } from "@/lib/cn";
import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

type Aarti = {
  name: string;
  time24: string; // "HH:MM"
  note?: string;
};

const timings: Aarti[] = [
  { name: "Mangala Aarti", time24: "05:30", note: "Opening prayers" },
  { name: "Shringar Darshan", time24: "08:00", note: "Morning darshan" },
  { name: "Madhyan Aarti", time24: "12:30", note: "Midday offering" },
  { name: "Sandhya Aarti", time24: "18:30", note: "Evening lamp ritual" },
  { name: "Shayan Aarti", time24: "21:00", note: "Closing prayers" }
];

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map((v) => Number(v));
  return (h ?? 0) * 60 + (m ?? 0);
}

function formatLocalTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map((v) => Number(v));
  const d = new Date();
  d.setHours(h ?? 0, m ?? 0, 0, 0);
  return d.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit"
  });
}

export function TimingsSection() {
  const { t } = useTranslation();
  const now = useNow({ intervalMs: 15_000 });
  const nowMin = now.getHours() * 60 + now.getMinutes();

  const nextIndex = (() => {
    const idx = timings.findIndex((t) => toMinutes(t.time24) > nowMin);
    return idx === -1 ? 0 : idx;
  })();

  const currentIndex = (() => {
    for (let i = timings.length - 1; i >= 0; i--) {
      const start = toMinutes(timings[i]!.time24);
      if (nowMin >= start) return i;
    }
    return -1;
  })();

  return (
    <section id="timings" className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Timings"
            title={t("sections.timingsTitle")}
            description={t("sections.timingsDesc")}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="p-0">
              <div className="border-b border-saffron-500/10 px-5 py-4 dark:border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="grid size-9 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                      <Clock className="size-4" aria-hidden />
                    </div>
                    <div>
                      <div className="font-heading text-lg font-semibold">
                        Today
                      </div>
                      <div className="text-xs text-saffron-900/65">
                        Local time:{" "}
                        {now.toLocaleTimeString(undefined, {
                          hour: "numeric",
                          minute: "2-digit"
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-saffron-500/10 px-3 py-1 text-xs font-semibold text-saffron-800">
                    Next: {timings[nextIndex]!.name} ·{" "}
                    {formatLocalTime(timings[nextIndex]!.time24)}
                  </div>
                </div>
              </div>

              <ul className="divide-y divide-saffron-500/10 dark:divide-white/10">
                {timings.map((t, idx) => {
                  const isNext = idx === nextIndex;
                  const isCurrent = idx === currentIndex;
                  return (
                    <li
                      key={t.name}
                      className={cn(
                        "flex items-center justify-between gap-4 px-5 py-4",
                        isNext && "bg-saffron-500/5",
                        isCurrent && "bg-gold-500/5"
                      )}
                    >
                      <div>
                        <div className="font-heading text-base font-semibold">
                          {t.name}
                        </div>
                        {t.note ? (
                          <div className="mt-0.5 text-xs text-saffron-900/65">
                            {t.note}
                          </div>
                        ) : null}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-saffron-900">
                          {formatLocalTime(t.time24)}
                        </div>
                        <div className="mt-1 text-[11px] text-saffron-900/60">
                          {isNext ? "Upcoming" : isCurrent ? "In progress" : "—"}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-5">
              <Card>
                <div className="font-heading text-lg font-semibold">
                  Visitor Guidance
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75">
                  Please arrive 10–15 minutes early for aarti. Maintain silence
                  during rituals and keep phones on silent mode.
                </p>
              </Card>

              <Card>
                <div className="font-heading text-lg font-semibold">
                  Darshan Windows
                </div>
                <p className="mt-2 text-sm leading-relaxed text-saffron-900/75">
                  Darshan may pause briefly during seva. Special festival
                  schedules are announced in the Events section.
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


