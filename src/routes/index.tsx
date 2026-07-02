import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers,
  Sparkles,
  Send,
  BarChart3,
  Clock,
  Infinity as InfinityIcon,
  X,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Bet Waba — Disparo de WhatsApp em larga escala para Bets";
const DESCRIPTION =
  "Plataforma de disparo de WhatsApp em massa para casas de apostas. Envio em larga escala, alta estabilidade, sem mensalidade. Pague apenas pelos envios, a partir de R$ 0,32.";

const FAQ = [
  {
    q: "Como funciona a plataforma Bet Waba?",
    a: "Você cria sua conta, importa seus contatos, configura sua mensagem e dispara em poucos cliques. Toda a infraestrutura de envio em larga escala fica por nossa conta — você acompanha entregas em tempo real pelo painel.",
  },
  {
    q: "Preciso pagar mensalidade ou taxa de adesão?",
    a: "Não. O Bet Waba não cobra mensalidade, não exige fidelidade e não tem taxa de adesão. Você paga apenas pelos envios que realizar, a partir de R$ 0,32 por mensagem.",
  },
  {
    q: "A plataforma é indicada para o segmento de apostas?",
    a: "Sim. O Bet Waba foi construído especificamente para o mercado de Bets, com infraestrutura preparada para o volume, a cadência e a continuidade que operações de apostas exigem.",
  },
  {
    q: "Qual a capacidade de envios da plataforma?",
    a: "Nossa infraestrutura suporta disparos em larga escala com alta capacidade de processamento, mantendo estabilidade e continuidade mesmo em campanhas massivas.",
  },
  {
    q: "O cadastro é rápido?",
    a: "Sim. Você cria sua conta em poucos minutos preenchendo um formulário simples e já pode começar a operar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O modelo é pré-pago: você adiciona saldo à conta e cada envio é debitado do saldo. Sem surpresas, sem cobrança recorrente.",
  },
  {
    q: "A plataforma tem alta disponibilidade?",
    a: "Sim. Operamos com arquitetura redundante e monitoramento contínuo para garantir alta disponibilidade e continuidade dos envios.",
  },
  {
    q: "Vocês oferecem suporte?",
    a: "Sim. Nosso time de suporte especializado acompanha sua operação e está pronto para auxiliar em cada etapa.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "disparo de WhatsApp, WhatsApp para bets, envio em massa, automação WhatsApp, plataforma de disparo, disparo em massa bets",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Bet Waba",
          description: DESCRIPTION,
          brand: { "@type": "Brand", name: "Bet Waba" },
          offers: {
            "@type": "Offer",
            price: "0.32",
            priceCurrency: "BRL",
            description: "A partir de R$ 0,32 por envio. Sem mensalidade. Sem fidelidade.",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function CTA({ children = "Criar Conta", size = "default" as "default" | "lg" }: { children?: React.ReactNode; size?: "default" | "lg" }) {
  return (
    <Button
      asChild
      size={size}
      className="group bg-turquoise-gradient text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] hover:opacity-90 hover:shadow-[0_0_60px_-8px_var(--primary)]"
    >
      <Link to="/cadastro">
        {children}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* ============= HERO ============= */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" aria-hidden />
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 md:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3 w-3" />
                Feito para o mercado de Bets
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
                Disparo de WhatsApp em larga escala para{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  casas de apostas
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Plataforma especializada em envio em massa via WhatsApp para o
                segmento de Bets. Alta estabilidade, grande capacidade
                operacional e continuidade nos envios — pague apenas pelo que
                enviar.
              </p>

              <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {[
                  "Disparos em larga escala",
                  "Alta estabilidade e continuidade",
                  "Sem mensalidade e sem fidelidade",
                  "A partir de R$ 0,32 por envio",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTA size="lg" />
                <a
                  href="#como-funciona"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ver como funciona →
                </a>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-3xl bg-primary/20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-border glass shadow-elegant">
                <img
                  src={heroDashboard}
                  alt="Painel do Bet Waba mostrando campanhas de disparo de WhatsApp com estatísticas de entrega em tempo real"
                  width={1600}
                  height={1024}
                  fetchPriority="high"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============= METRICS STRIP ============= */}
        <section className="border-y border-border/40 bg-secondary/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
            {[
              { k: "Milhões", v: "de envios/mês" },
              { k: "99,9%", v: "de disponibilidade" },
              { k: "24/7", v: "operação contínua" },
              { k: "R$ 0,32", v: "por envio" },
            ].map((m) => (
              <div key={m.v} className="text-center">
                <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {m.k}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{m.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============= BENEFÍCIOS ============= */}
        <section id="beneficios" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Benefícios"
            title="Por que escolher o Bet Waba"
            description="A infraestrutura que operações de apostas precisam para escalar com segurança e previsibilidade."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "Larga escala", desc: "Envios massivos com alta capacidade de processamento e cadência otimizada." },
              { icon: ShieldCheck, title: "Alta estabilidade", desc: "Arquitetura robusta com redundância para manter suas campanhas operando sem interrupções." },
              { icon: Rocket, title: "Cadastro rápido", desc: "Crie sua conta em minutos e comece a disparar no mesmo dia." },
              { icon: Gauge, title: "Grande capacidade", desc: "Processamento de alto volume com controle total sobre cada campanha." },
              { icon: Layers, title: "Interface simples", desc: "Painel moderno e intuitivo, feito para times de marketing sem conhecimento técnico." },
              { icon: InfinityIcon, title: "Operação contínua", desc: "Continuidade dos envios com monitoramento 24/7 e alta disponibilidade." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/0 transition-all group-hover:from-primary/5" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============= COMO FUNCIONA ============= */}
        <section id="como-funciona" className="border-y border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading
              eyebrow="Como funciona"
              title="Do cadastro ao primeiro disparo em minutos"
              description="Um fluxo simples desenhado para operar em escala desde o primeiro dia."
            />
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { n: "01", title: "Crie sua conta", desc: "Preencha o cadastro em poucos minutos." },
                { n: "02", title: "Configure sua operação", desc: "Ajuste sua conta ao volume que você opera." },
                { n: "03", title: "Importe seus contatos", desc: "Suba sua base e organize seus públicos." },
                { n: "04", title: "Dispare em escala", desc: "Envie e acompanhe entregas em tempo real." },
              ].map((s) => (
                <div key={s.n} className="relative">
                  <div className="font-display text-4xl font-bold text-primary/50">{s.n}</div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <CTA />
            </div>
          </div>
        </section>

        {/* ============= RECURSOS ============= */}
        <section id="recursos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo o que você precisa para escalar"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Send, title: "Disparo em larga escala", desc: "Envie milhares de mensagens com performance previsível." },
              { icon: ShieldCheck, title: "Alta estabilidade", desc: "Infraestrutura redundante para operação sem quedas." },
              { icon: Gauge, title: "Capacidade operacional", desc: "Processamento massivo com controle fino da cadência." },
              { icon: Layers, title: "Plataforma intuitiva", desc: "Interface limpa, hierarquia clara, curva de aprendizado curta." },
              { icon: BarChart3, title: "Controle dos envios", desc: "Acompanhamento em tempo real de entregas e falhas." },
              { icon: Clock, title: "Operação contínua", desc: "24/7 com monitoramento e alta disponibilidade." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============= COMPARATIVO ============= */}
        <section className="border-y border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Bet Waba vs. soluções genéricas"
              description="Feito para o volume, a cadência e a continuidade que o mercado de Bets exige."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-3 border-b border-border bg-card/50 text-sm font-medium">
                <div className="p-4 text-muted-foreground">Critério</div>
                <div className="p-4 text-center text-primary">Bet Waba</div>
                <div className="p-4 text-center text-muted-foreground">Genéricas</div>
              </div>
              {[
                ["Estabilidade em grandes volumes", true, false],
                ["Escalabilidade sob demanda", true, false],
                ["Interface simples e clara", true, false],
                ["Sem mensalidade / sem fidelidade", true, false],
                ["Especializada em Bets", true, false],
                ["Operação contínua 24/7", true, false],
              ].map(([label, a, b], i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-border/60 text-sm last:border-b-0"
                >
                  <div className="p-4 text-foreground/90">{label}</div>
                  <div className="flex items-center justify-center p-4">
                    {a ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/60" />
                    )}
                  </div>
                  <div className="flex items-center justify-center p-4">
                    {b ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/60" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============= PLANO ============= */}
        <section id="plano" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Plano"
            title="Pague apenas pelo que enviar"
            description="Sem mensalidade. Sem fidelidade. Sem taxa de adesão."
          />
          <div className="relative mx-auto mt-16 max-w-lg">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-8 glow-turquoise">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                Pagamento por uso
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">A partir de</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-foreground">R$ 0,32</span>
                <span className="text-muted-foreground">/ envio</span>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Sem mensalidade",
                  "Sem fidelidade",
                  "Sem taxa de adesão",
                  "Pague apenas pelos envios realizados",
                  "Recarga simples e transparente",
                  "Suporte especializado incluso",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTA size="lg">Criar Conta</CTA>
              </div>
            </div>
          </div>
        </section>

        {/* ============= FAQ ============= */}
        <section id="faq" className="border-t border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
            <Accordion type="single" collapsible className="mt-12">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============= CTA FINAL ============= */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Comece a disparar em{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                larga escala
              </span>{" "}
              hoje mesmo
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Cadastro rápido. Sem mensalidade. Sem fidelidade. Você paga apenas pelos envios.
            </p>
            <div className="mt-10">
              <CTA size="lg" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
