import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { Dome, Space } from "@/types/dome";

function SpaceBlock({ space, className, imageClassName }: { space: Space; className?: string; imageClassName?: string }) {
  return (
    <article className={className}>
      <div className={cn("relative overflow-hidden rounded-[24px]", imageClassName)}>
        <Image
          src={space.image}
          alt={space.name}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="heading-card mt-5 text-2xl text-ink sm:text-3xl">{space.name}</h3>
      <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-muted">{space.description}</p>
    </article>
  );
}

export function SpacesSection({ dome }: { dome: Dome }) {
  const [first, ...rest] = dome.spaces;
  const pairs: Space[][] = [];
  const leftover: Space[] = [];

  rest.forEach((space) => {
    if (space.layout === "full" || space.layout === "wide") {
      leftover.push(space);
    } else {
      const last = pairs[pairs.length - 1];
      if (last && last.length === 1) last.push(space);
      else pairs.push([space]);
    }
  });

  const trailingHalves = pairs.filter((pair) => pair.length === 1).flat();
  const completePairs = pairs.filter((pair) => pair.length === 2);

  return (
    <section className="bg-warm-white">
      <Container className="py-24 sm:py-28">
        <SectionHeading title="Conoce cada espacio" />
        <div className="mt-14 space-y-16">
          {first ? (
            <SpaceBlock space={first} imageClassName="aspect-[16/9] min-h-[280px] sm:min-h-[420px]" />
          ) : null}

          {completePairs.map((pair) => (
            <div key={pair.map((item) => item.id).join("-")} className="grid gap-10 lg:grid-cols-2">
              {pair.map((space) => (
                <SpaceBlock key={space.id} space={space} imageClassName="aspect-[4/3] min-h-[240px]" />
              ))}
            </div>
          ))}

          {leftover.map((space) => (
            <SpaceBlock
              key={space.id}
              space={space}
              className="lg:max-w-[85%]"
              imageClassName="aspect-[21/9] min-h-[240px] sm:min-h-[320px]"
            />
          ))}

          {trailingHalves.length > 0 ? (
            <div className="grid gap-10 lg:grid-cols-2 lg:pt-4">
              {trailingHalves.map((space) => (
                <SpaceBlock
                  key={space.id}
                  space={space}
                  className="lg:col-start-2"
                  imageClassName="aspect-[4/3] min-h-[220px]"
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
