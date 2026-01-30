import { Container } from "@/components/ui/Container";
import { Heart, Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#800000f0] text-[#fff7e6] border-[3px] border-[#800000] [border-style:groove] rounded-t-2xl shadow-[0_-10px_24px_rgba(128,0,0,0.30)]">
      {/* Decorative corner bells (from /public/bells.png) */}
      <img
        src="/bells.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-2 z-0 w-24 opacity-95 sm:w-28 md:w-36 [-translate-x-3] [filter:drop-shadow(0_18px_18px_rgba(0,0,0,0.28))_drop-shadow(0_3px_0_rgba(255,255,255,0.12))_contrast(1.08)_saturate(1.08)]"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/bells.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-2 z-0 w-24 opacity-95 sm:w-28 md:w-36 [translate-x-3] [-webkit-transform:scaleX(-1)] [transform:scaleX(-1)] [filter:drop-shadow(0_18px_18px_rgba(0,0,0,0.28))_drop-shadow(0_3px_0_rgba(255,255,255,0.12))_contrast(1.08)_saturate(1.08)]"
        loading="lazy"
        decoding="async"
      />
      <Container className="relative z-10 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
          <div className="pl-28 sm:pl-32 md:pl-12 lg:pl-14">
            <div className="font-heading text-2xl font-semibold tracking-tight">
              Shree Temple
            </div>
            <p className="mt-2 max-w-sm text-sm text-white/85">
              A calm, modern sanctuary for devotion—crafted with care for
              visitors across the world.
            </p>
            <p className="mt-5 text-sm text-white/85">
              <span className="font-heading text-base font-semibold">
                “ॐ सर्वे भवन्तु सुखिनः”
              </span>
              <span className="ml-2 text-white/75">
                (May all beings be happy.)
              </span>
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/90 md:pl-4">
            <div className="font-semibold text-white">Quick Links</div>
            <Link to="/about" className="hover:text-white">
              About the Temple
            </Link>
            <Link to="/events" className="hover:text-white">
              Festivals & Events
            </Link>
            <Link to="/#timings" className="hover:text-white">
              Aarti Timings
            </Link>
            <Link to="/#gallery" className="hover:text-white">
              Gallery
            </Link>
            <Link to="/#donate" className="hover:text-white">
              Donate
            </Link>
          </div>

          <div className="grid gap-3 text-sm text-white/90">
            <div className="font-semibold text-white">Contact</div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-white/90" aria-hidden />
              <span>City · Country (map placeholder)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-white/90" aria-hidden />
              <span>+00 0000 000 000</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="size-4 text-white/90" aria-hidden />
              <span>@shreetemple</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/80">
              <Heart className="size-4" aria-hidden />
              Built for calm, clarity, and accessibility.
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/80">
          © {new Date().getFullYear()} Shree Temple. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}


