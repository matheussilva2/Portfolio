import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, scrollToSection } from "@/lib/scroll-to-section";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <>
      <header
        className={`z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm ${
          stuck ? "fixed top-0 left-0 animate-in slide-in-from-top-4 duration-300" : "relative"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="min-w-0 cursor-pointer truncate text-left font-display text-lg font-bold tracking-tight"
          >
            Matheus Silva
          </button>

          <div className="flex shrink-0 items-center gap-2">
            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className="cursor-pointer rounded-full px-3 py-2 transition-colors hover:bg-soft"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => go("projetos")}
                className="ml-2 cursor-pointer rounded-full bg-foreground px-4 py-2 text-background transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                Ver projetos
              </button>
            </nav>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="grid size-10 cursor-pointer place-items-center rounded-full border-2 border-foreground md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {stuck && <div aria-hidden="true" className="h-16" />}

      {/* Drawer mobile */}
      <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute top-0 right-0 flex h-full w-72 flex-col gap-2 border-l border-border bg-background p-6 transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="mb-4 grid size-10 shrink-0 cursor-pointer place-items-center self-end rounded-full border-2 border-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="cursor-pointer border-b border-border py-2 text-left font-display text-2xl"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("projetos")}
            className="mt-4 cursor-pointer rounded-full bg-foreground px-4 py-3 font-medium text-background"
          >
            Ver projetos
          </button>
        </aside>
      </div>
    </>
  );
}
