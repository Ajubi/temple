import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useTheme } from "@/hooks/useTheme";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages, type SupportedLanguage } from "@/i18n";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/events", key: "nav.events" }
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { t, i18n } = useTranslation();

  const ThemeIcon = useMemo(() => (theme === "dark" ? Sun : Moon), [theme]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-[#800000f0] text-[#fff7e6]",
        "border-[3px] border-[#800000] [border-style:groove]",
        "rounded-b-2xl",
        "shadow-[0_10px_24px_rgba(128,0,0,0.35)]"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 focus-visible:outline-none"
          aria-label="Temple home"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-[#fbbf24]/50 bg-[#800000] text-[#fff7e6] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),_0_10px_18px_rgba(128,0,0,0.28)]">
            <span className="font-heading text-lg font-semibold">ॐ</span>
          </span>
          <div className="leading-tight">
            <div className="font-heading text-lg font-semibold tracking-tight text-[#fff7e6]">
              Harinath Temple
            </div>
            <div className="text-xs text-[#fff7e6]/85">
              Spiritual · Modern · Minimal
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative rounded-lg px-2 py-1 text-sm font-semibold tracking-wide text-[#fff7e6] transition",
                  "hover:bg-[#8f0000f0]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  isActive &&
                    "after:absolute after:left-2 after:right-2 after:top-full after:mt-1 after:h-[2px] after:rounded-full after:bg-[#fbbf24]"
                )
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <label className="sr-only" htmlFor="lang">
            Language
          </label>
          <div className="relative">
            <Globe
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#fff7e6]/90"
              aria-hidden
            />
            <select
              id="lang"
              value={(i18n.language as SupportedLanguage) || "en"}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={cn(
                "h-11 rounded-xl border border-[#fbbf24]/35 bg-[#800000] pl-10 pr-9 text-sm font-semibold text-[#fff7e6]",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24]/70"
              )}
            >
              {supportedLanguages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            variant="ghost"
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-[#fff7e6] hover:bg-[#8f0000f0]"
          >
            <ThemeIcon className="size-4" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link to="/#visit">
            <Button
              variant="secondary"
              className="border border-[#fbbf24]/45 bg-[#fbbf24] text-[#800000] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_18px_rgba(128,0,0,0.22)] hover:bg-[#fcd34d]"
            >
              {t("cta.visit")}
            </Button>
          </Link>
          <Link to="/#donate">
            <Button className="border border-[#fbbf24]/45 bg-[#f59e0b] text-[#800000] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),_0_12px_20px_rgba(128,0,0,0.24)] hover:bg-[#fbbf24]">
              {t("cta.donate")}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-[#fff7e6] hover:bg-[#8f0000f0]"
          >
            <ThemeIcon className="size-4" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="border border-[#fbbf24]/35 bg-[#8f0000f0] text-[#fff7e6] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] hover:bg-[#9b111ef0]"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
          "border-t border-[#800000] bg-[#800000f0]"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            <div className="mb-2">
              <label className="sr-only" htmlFor="lang-mobile">
                Language
              </label>
              <div className="relative">
                <Globe
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#fff7e6]/90"
                  aria-hidden
                />
                <select
                  id="lang-mobile"
                  value={(i18n.language as SupportedLanguage) || "en"}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border border-[#fbbf24]/35 bg-[#800000] pl-10 pr-9 text-sm font-semibold text-[#fff7e6]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24]/70"
                  )}
                >
                  {supportedLanguages.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold tracking-wide text-[#fff7e6] hover:bg-[#8f0000f0]",
                    isActive &&
                      "text-white underline decoration-[#fbbf24] decoration-2 underline-offset-4"
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link to="/#visit" onClick={() => setOpen(false)}>
                <Button
                  className="w-full border border-[#fbbf24]/45 bg-[#fbbf24] text-[#800000] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_18px_rgba(128,0,0,0.22)]"
                  variant="secondary"
                >
                  {t("cta.visit")}
                </Button>
              </Link>
              <Link to="/#donate" onClick={() => setOpen(false)}>
                <Button className="w-full border border-[#fbbf24]/45 bg-[#f59e0b] text-[#800000] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),_0_12px_20px_rgba(128,0,0,0.24)]">
                  {t("cta.donate")}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}


