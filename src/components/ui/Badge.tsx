import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "olive" | "plum";
  className?: string;
};

export function Badge({ children, tone = "olive", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.72rem] font-bold tracking-[0.2em] uppercase",
        tone === "olive" && "bg-olive-100 text-olive-800",
        tone === "plum" && "bg-sand-100 text-plum-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
