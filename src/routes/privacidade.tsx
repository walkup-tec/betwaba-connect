import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Política de Privacidade — Bet Waba";
const DESCRIPTION = "Como o Bet Waba coleta, utiliza e protege seus dados.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight">Política de Privacidade</h1>
        <div className="prose prose-invert mt-8 space-y-6 text-muted-foreground">
          <p>
            Esta Política descreve como o Bet Waba coleta, utiliza, armazena e protege os dados
            pessoais dos usuários da plataforma, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD).
          </p>
          <h2 className="text-xl font-semibold text-foreground">Dados coletados</h2>
          <p>
            Coletamos dados de cadastro (nome, e-mail, WhatsApp, telefone, CPF/CNPJ) e dados de uso
            da plataforma necessários para prestação do serviço de disparo de mensagens.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Finalidade</h2>
          <p>
            Utilizamos seus dados para autenticação, prestação do serviço, faturamento e suporte,
            além de comunicações relacionadas à sua conta.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Compartilhamento</h2>
          <p>
            Não vendemos dados pessoais. Compartilhamos apenas o necessário com provedores de
            infraestrutura e parceiros de pagamento, sob obrigações contratuais de sigilo.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção, portabilidade ou exclusão de seus dados a
            qualquer momento entrando em contato com nosso suporte.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});