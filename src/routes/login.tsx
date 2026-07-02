import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const TITLE = "Entrar — Bet Waba";
const DESCRIPTION = "Acesse sua conta Bet Waba.";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Entrar</h1>
        <p className="mt-4 text-muted-foreground">
          O login estará disponível em breve. Enquanto isso, crie sua conta gratuitamente.
        </p>
        <Button asChild className="mt-8 bg-turquoise-gradient text-primary-foreground">
          <Link to="/cadastro">Criar Conta</Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  ),
});