import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sampleEvents } from "@/content/events";
import { CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function EventsSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Festivals"
            title="Festivals & events"
            description="A clean grid with subtle hover glow—focused on dates and clarity."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sampleEvents.map((e, idx) => (
            <Reveal key={e.title} delay={idx * 0.04}>
              <Card className="group h-full transition hover:-translate-y-0.5 hover:shadow-glow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-heading text-lg font-semibold">
                      {e.title}
                    </div>
                    <p className="mt-1 text-sm text-saffron-900/75">
                      {e.subtitle}
                    </p>
                  </div>
                  <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-saffron-500/10 text-saffron-700">
                    {e.highlight ? (
                      <Sparkles className="size-5" aria-hidden />
                    ) : (
                      <CalendarDays className="size-5" aria-hidden />
                    )}
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center rounded-full bg-saffron-500/10 px-3 py-1 text-xs font-semibold text-saffron-800">
                  {e.date}
                  {e.highlight ? (
                    <span className="ml-2 text-[11px] font-medium text-saffron-800/80">
                      Important
                    </span>
                  ) : null}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center justify-between gap-4 rounded-3xl border border-saffron-500/20 bg-temple-surface p-6 shadow-gold backdrop-blur">
            <p className="text-sm text-saffron-900/75">
              Looking for the full calendar and special darshan schedules?
            </p>
            <Link to="/events" className="text-sm font-semibold text-saffron-700 hover:text-saffron-800">
              View all events →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


