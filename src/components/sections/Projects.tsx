import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ImageLightbox } from "@/components/ImageLightbox";

const toneClass: Record<Project["tags"][number]["tone"], string> = {
  brand: "bg-brand/15 text-brand",
  accent: "bg-accent/15 text-accent",
  mint: "bg-mint/15 text-mint",
  sun: "bg-sun/25 text-foreground",
};

function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const total = project.images.length;
  const image = project.images[index]!;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <article className="rounded-3xl border-2 border-foreground bg-card p-3 transition-transform hover:-translate-y-1">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-soft">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block size-full cursor-zoom-in"
          aria-label={`Ampliar imagem de ${project.title}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={1024}
            height={768}
            loading="lazy"
            className="size-full object-cover"
          />
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute top-1/2 left-2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-2 border-foreground bg-background/90 transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-2 border-foreground bg-background/90 transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-background/85 px-2 py-1">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`size-2 cursor-pointer rounded-full transition-colors ${i === index ? "bg-brand" : "bg-foreground/30"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <h3 className="mt-4 px-1 font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-1 px-1 text-sm text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-2 px-1 py-3">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass[tag.tone]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {open && (
        <ImageLightbox
          images={project.images}
          index={index}
          onClose={() => setOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Meus <span className="text-brand">projetos</span>
        </h2>
        <span className="text-sm font-medium text-muted-foreground">Clique na imagem para ampliar</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
