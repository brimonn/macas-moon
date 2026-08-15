import { Container } from "@/components/ui/Container";
import { icons } from "@/lib/icons";
import type { Dome } from "@/types/dome";

export function DomeStats({ dome }: { dome: Dome }) {
  return (
    <section className="bg-warm-white">
      <Container className="py-14 sm:py-16">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {dome.stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <li key={stat.label} className="flex flex-col gap-3">
                <Icon className="h-6 w-6 text-olive-500" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow text-[0.72rem] text-muted">{stat.label}</p>
                  <p className="mt-1 font-medium text-ink">{stat.value}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
