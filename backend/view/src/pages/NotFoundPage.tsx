import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl rounded-3xl border border-saffron-500/20 bg-temple-surface p-8 text-center shadow-gold backdrop-blur">
              <div className="font-heading text-3xl font-semibold">
                Page not found
              </div>
              <p className="mt-3 text-sm text-saffron-900/75">
                The page you’re looking for doesn’t exist or has moved.
              </p>
              <div className="mt-6 flex justify-center">
                <Link to="/">
                  <Button>Back to Home</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}


