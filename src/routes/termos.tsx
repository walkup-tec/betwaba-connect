import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Termos de Uso — Bet Waba";
const DESCRIPTION = "Termos e condições de uso da plataforma Bet Waba.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight">Termos de Uso</h1>
        <div className="prose prose-invert mt-8 space-y-6 text-muted-foreground">
          <p>
            Ao criar uma conta e utilizar o Bet Waba, você concorda com estes Termos de Uso.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Objeto</h2>
          <p>
            O Bet Waba é uma plataforma de disparo de mensagens via WhatsApp em larga escala. O
            serviço é prestado sob o modelo de pagamento por uso, sem mensalidade e sem
            fidelidade.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Uso responsável</h2>
          <p>
            O usuário é responsável pelo conteúdo enviado e pela base de contatos utilizada,
            comprometendo-se a respeitar a legislação aplicável e as boas práticas de comunicação.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Pagamentos</h2>
          <p>
            Os valores são debitados por envio realizado, conforme tabela vigente. Não há
            reembolso de saldo utilizado.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Suspensão</h2>
          <p>
            O Bet Waba pode suspender contas que violem estes Termos ou apresentem risco à
            operação da plataforma.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});