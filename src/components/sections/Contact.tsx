import { Mail, Phone, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: "matheuss1853@gmail.com",
    href: "mailto:matheuss1853@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(82) 9 9818-5456",
    href: "https://wa.me/5582998185456",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/matheus-silva1",
    href: "https://www.linkedin.com/in/matheus-silva1/",
  },
];

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <div className="rounded-[2.5rem] border-2 border-foreground bg-sun/20 p-8 md:p-14">
        <span className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">
          Contato
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Vamos construir algo <span className="text-brand">grande</span>?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Tem interesse? Me chama em um dos canais abaixo.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="shadow-hard-sm flex items-center gap-4 rounded-2xl border-2 border-foreground bg-background p-4 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </span>
                <span className="block truncate font-display font-semibold text-foreground">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
