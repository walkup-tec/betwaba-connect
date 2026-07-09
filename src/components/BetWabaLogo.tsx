import { Link } from "@tanstack/react-router";
import draxBetsLogo from "../assets/drax-bets-logo.png";

export function BetWabaLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "nav" | "footer";
}) {
  const height = size === "nav" ? "h-[3.36375rem]" : size === "footer" ? "h-[2.925rem]" : "h-[2.925rem]";
  const width = size === "nav" ? 269 : size === "footer" ? 234 : 234;
  const imgHeight = size === "nav" ? 53 : 47;

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
