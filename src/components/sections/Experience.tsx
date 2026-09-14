import { experiences } from "@/data/portfolio";
import { ExperienceDescription } from "@/components/ExperienceDescription";

const markerTone = {
  brand: "bg-brand",
  accent: "bg-accent",
  sun: "bg-sun",
} as const;

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
      <h2 className="mb-10 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Minha <span className="text-accent">experiência</span>
      </h2>
      <div className="relative pl-8 md:pl-10">
        <div className="absolute top-2 bottom-2 left-2.5 w-0.5 bg-foreground/15 md:left-3.5" />

        {experiences.map((exp, i) => (
          <div key={exp.company} className={`relative ${i === experiences.length - 1 ? "" : "mb-10"}`}>
            <span
              className={`absolute top-1.5 -left-8 size-5 rounded-full border-4 border-background md:-left-9 ${markerTone[exp.marker]}`}
            />
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              {exp.company} — {exp.role}
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              {exp.start} — {exp.end ?? "Atualmente"}
            </p>
            <ExperienceDescription description={exp.description} />
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-soft px-3 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
