import { Link } from "@tanstack/react-router";

export function BetWabaLogo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Bet Waba — Início">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-turquoise-gradient text-primary-foreground font-display font-bold text-sm shadow-[0_0_20px_-4px_var(--primary)]">
        BW
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Bet<span className="text-primary">Waba</span>
      </span>
    </Link>
  );
}