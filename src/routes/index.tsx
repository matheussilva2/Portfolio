import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Summary } from "@/components/sections/Summary";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const title = "Matheus Silva — Desenvolvedor Fullstack PHP/Laravel + React";
const description =
  "Matheus Silva — desenvolvedor pleno fullstack PHP/Laravel e React com 6 anos de experiência. Entre em contato para tirar projeto do papel ou contratação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-body text-foreground">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Summary />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
            <span className="font-display font-bold text-foreground">
              Matheus Silva
            </span>
            <div className="flex gap-4">
              <a href="https://github.com/matheussilva2" className="hover:text-brand">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/matheus-silva1/" className="hover:text-brand">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
