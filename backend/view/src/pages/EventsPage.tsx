import { Seo } from "@/components/seo/Seo";
import { sampleEvents, type TempleEvent } from "@/content/events";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarDays, Sparkles } from "lucide-react";

const extended: TempleEvent[] = [
  ...sampleEvents,
  { title: "Guru Purnima", date: "Jul 10", subtitle: "Guru vandana · Kirtan" },
  {
    title: "Diwali Lakshmi Puja",
    date: "Nov 01",
    subtitle: "Lakshmi aarti · Deepotsav",
    highlight: true
  },
  {
    title: "Hanuman Jayanti",
    date: "Apr 23",
    subtitle: "Sundar kand · Prasad distribution"
  }
].sort((a, b) => a.date.localeCompare(b.date));

export function EventsPage() {
  return (
    <>
      <Seo
        title="Events"
        description="Festivals and events calendar—important dates, rituals, and special darshan schedules."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Calendar"
              title="Festivals & Events"
              description="A timeline-style list that stays readable on mobile, with clear emphasis on important dates."
            />
          </Reveal>

          <div className="mt-10 grid gap-4">
            {extended.map((e, idx) => (
              <Reveal key={`${e.title}-${e.date}`} delay={idx * 0.02}>
                <Card className="group">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                        {e.highlight ? (
                          <Sparkles className="size-5" aria-hidden />
                        ) : (
                          <CalendarDays className="size-5" aria-hidden />
                        )}
                      </div>
                      <div>
                        <div className="font-heading text-lg font-semibold">
                          {e.title}
                        </div>
                        <div className="mt-1 text-sm text-saffron-900/75">
                          {e.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:justify-end">
                      <div className="rounded-full bg-saffron-500/10 px-3 py-1 text-xs font-semibold text-saffron-800">
                        {e.date}
                      </div>
                      {e.highlight ? (
                        <div className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-800">
                          Important
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-saffron-500/20 bg-temple-surface p-6 text-sm text-saffron-900/75 shadow-gold backdrop-blur">
              Tip: You can convert this list into a true date-based calendar once
              you have exact dates for the current year and time zone.
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}


