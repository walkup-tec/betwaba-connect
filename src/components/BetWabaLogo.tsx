import { Link } from "@tanstack/react-router";
import draxBetsLogo from "../assets/drax-bets-logo.png";

export function BetWabaLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "nav";
}) {
  const height = size === "nav" ? "h-[2.5875rem]" : "h-9";
  const width = size === "nav" ? 207 : 180;
  const imgHeight = size === "nav" ? 41 : 36;

  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Drax Bets — Início">
      <img
        src={draxBetsLogo}
        alt="Drax Bets"
        className={`${height} w-auto`}
        width={width}
        height={imgHeight}
        decoding="async"
      />
    </Link>
  );
}
