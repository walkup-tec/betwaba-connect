import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { maskPhone, maskCpfCnpj, onlyDigits, validCpfCnpj } from "@/lib/masks";
import { submitSignup } from "@/lib/signup";

const TITLE = "Criar Conta — Bet Waba";
const DESCRIPTION =
  "Crie sua conta no Bet Waba e comece a disparar mensagens de WhatsApp em larga escala para o mercado de Bets. Sem mensalidade, sem fidelidade.";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/cadastro" },
    ],
    links: [{ rel: "canonical", href: "/cadastro" }],
  }),
  component: CadastroPage,
});

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe o nome (mínimo 2 caracteres)")
    .max(120, "Máximo 120 caracteres"),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido")
    .max(255, "Máximo 255 caracteres"),
  whatsapp: z
    .string()
    .refine((v) => onlyDigits(v).length >= 10 && onlyDigits(v).length <= 11, {
      message: "WhatsApp inválido",
    }),
  phone: z
    .string()
    .refine((v) => onlyDigits(v).length >= 10 && onlyDigits(v).length <= 11, {
      message: "Telefone inválido",
    }),
  document: z.string().refine(validCpfCnpj, { message: "CPF ou CNPJ inválido" }),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(72, "Máximo 72 caracteres"),
});

type FormData = z.infer<typeof schema>;

function passwordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", whatsapp: "", phone: "", document: "", password: "" },
  });

  const password = watch("password");
  const strength = passwordStrength(password || "");

  const onSubmit = async (data: FormData) => {
    try {
      await submitSignup(data);
      setSuccess(true);
      toast.success("Cadastro enviado com sucesso! Em breve entraremos em contato.");
    } catch {
      toast.error("Não foi possível enviar seu cadastro. Tente novamente.");
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Cadastro recebido</h1>
          <p className="mt-4 text-muted-foreground">
            Recebemos seus dados. Nosso time entrará em contato em breve para ativar sua conta e
            iniciar sua operação no Bet Waba.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a home
            </Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Toaster theme="dark" position="top-center" />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          {/* Copy */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                Criar Conta
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Comece a disparar em{" "}
                <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  larga escala
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Preencha o formulário para criar sua conta no Bet Waba. Cadastro rápido, sem
                mensalidade e sem fidelidade.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Sem mensalidade e sem fidelidade",
                "A partir de R$ 0,32 por envio",
                "Disparos em larga escala com alta estabilidade",
                "Suporte especializado incluso",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <Field label="Nome da empresa ou pessoa" error={errors.name?.message}>
                <Input
                  {...register("name")}
                  autoComplete="name"
                  placeholder="Ex.: Sua Empresa Ltda"
                />
              </Field>

              <Field label="E-mail" error={errors.email?.message}>
                <Input
                  type="email"
                  {...register("email")}
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                />
              </Field>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="WhatsApp" error={errors.whatsapp?.message}>
                  <Input
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    {...register("whatsapp", {
                      onChange: (e) => setValue("whatsapp", maskPhone(e.target.value), { shouldValidate: true }),
                    })}
                  />
                </Field>
                <Field label="Telefone" error={errors.phone?.message}>
                  <Input
                    inputMode="tel"
                    placeholder="(00) 0000-0000"
                    {...register("phone", {
                      onChange: (e) => setValue("phone", maskPhone(e.target.value), { shouldValidate: true }),
                    })}
                  />
                </Field>
              </div>

              <Field label="CPF ou CNPJ" error={errors.document?.message}>
                <Input
                  inputMode="numeric"
                  placeholder="000.000.000-00 ou 00.000.000/0000-00"
                  {...register("document", {
                    onChange: (e) => setValue("document", maskCpfCnpj(e.target.value), { shouldValidate: true }),
                  })}
                />
              </Field>

              <Field label="Senha de acesso" error={errors.password?.message}>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Mínimo 8 caracteres"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {password && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex flex-1 gap-1">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className={`h-1 flex-1 rounded-full ${
                            i < strength ? "bg-primary" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {strength <= 1 ? "Fraca" : strength <= 2 ? "Média" : strength <= 3 ? "Boa" : "Forte"}
                    </span>
                  </div>
                )}
              </Field>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !isValid}
                className="w-full bg-turquoise-gradient text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Criar Conta"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Ao criar sua conta você concorda com nossos{" "}
                <Link to="/termos" className="underline hover:text-foreground">
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link to="/privacidade" className="underline hover:text-foreground">
                  Política de Privacidade
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm text-foreground/90">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}