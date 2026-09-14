import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-foreground px-3 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background ${className}`}
    >
      {mounted && theme === "dark" ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">Tema</span>
    </button>
  );
}
