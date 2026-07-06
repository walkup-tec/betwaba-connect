import { Link } from "@tanstack/react-router";
import { BetWabaLogo } from "./BetWabaLogo";
import { Button } from "./ui/button";

const NAV = [
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Recursos", href: "/#recursos" },
  { label: "Plano", href: "/#plano" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BetWabaLogo size="nav" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Entrar
          </Link>
          <Button asChild size="sm" className="bg-turquoise-gradient text-primary-foreground hover:opacity-90">
            <Link to="/cadastro">Criar Conta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}