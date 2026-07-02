import { Link } from "@tanstack/react-router";
import { BetWabaLogo } from "./BetWabaLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div className="space-y-3">
          <BetWabaLogo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Plataforma especializada em disparos de WhatsApp em larga escala para o mercado de Bets.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm md:items-end" aria-label="Rodapé">
          <Link to="/privacidade" className="text-muted-foreground hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="text-muted-foreground hover:text-foreground">
            Termos de Uso
          </Link>
          <span className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Bet Waba. Todos os direitos reservados.
          </span>
        </nav>
      </div>
    </footer>
  );
}