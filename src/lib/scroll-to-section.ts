export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export const NAV_ITEMS = [
  { id: "projetos", label: "Projetos" },
  { id: "resumo", label: "Resumo" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
] as const;
