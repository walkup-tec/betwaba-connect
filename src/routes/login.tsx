import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Loader2 } from "lucide-react";
import { resolveWabaAppLoginUrl } from "@/lib/waba-api";

const TITLE = "Entrar — Bet Waba";
const DESCRIPTION = "Acesse o painel WABA com sua conta Bet Waba.";

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
  component: LoginPage,
});

function LoginPage() {
  const loginUrl = resolveWabaAppLoginUrl();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = loginUrl;
    }, 400);
    return () => window.clearTimeout(timer);
  }, [loginUrl]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center sm:px-6">
        <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Entrar</h1>
        <p className="mt-4 text-muted-foreground">
          Redirecionando para o painel WABA…
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Se não abrir automaticamente,{" "}
          <a href={loginUrl} className="text-primary underline hover:opacity-90">
            clique aqui para acessar
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
