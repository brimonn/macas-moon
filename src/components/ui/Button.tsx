import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-olive-500 text-white hover:bg-olive-700 active:bg-olive-800",
  secondary:
    "bg-sand-500 text-ink hover:bg-sand-600 active:bg-sand-700",
  outline:
    "border border-olive-500 bg-transparent text-olive-500 hover:bg-olive-50",
  ghost: "bg-transparent text-ink hover:bg-sand-100",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.005em] transition-colors duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white";

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isHash = href.startsWith("#");
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("https://wa.me");

    if (isHash || isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
