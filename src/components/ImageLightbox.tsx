import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: { src: string; full: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ImageLightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  const current = images[index];
  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização da imagem do projeto"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-fit" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.full}
          alt={current.alt}
          loading="lazy"
          decoding="async"
          className="max-h-[80vh] max-w-[min(90vw,64rem)] rounded-2xl border-2 border-foreground object-contain"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-4 -right-2 grid size-11 cursor-pointer place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              aria-label="Imagem anterior"
              className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Próxima imagem"
              className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <p className="mt-3 text-center font-display text-sm font-bold text-background">
              {index + 1} / {images.length}
            </p>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
