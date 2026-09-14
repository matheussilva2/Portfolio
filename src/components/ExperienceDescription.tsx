import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

function splitItems(description: string) {
  return description
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ExperienceDescription({ description }: { description: string }) {
  const [open, setOpen] = useState(false);
  const items = splitItems(description);

  if (items.length < 3) {
    return (
      <ul className="mt-3 max-w-xl list-disc space-y-1.5 pl-4 text-muted-foreground">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  const [first, second, ...rest] = items;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mt-3 max-w-xl">
      <ul className="list-disc space-y-1.5 pl-4 text-muted-foreground">
        <li>{first}</li>
        <li className={open ? undefined : "line-clamp-1"}>{second}</li>
      </ul>
      <CollapsibleContent>
        <ul className="list-disc space-y-1.5 pl-4 text-muted-foreground">
          {rest.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CollapsibleContent>
      <CollapsibleTrigger className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-brand hover:underline">
        {open ? "Mostrar menos" : "Mostrar mais"}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </CollapsibleTrigger>
    </Collapsible>
  );
}
