export interface SignupPayload {
  name: string;
  email: string;
  whatsapp: string;
  phone: string;
  document: string;
  password: string;
}

/**
 * Placeholder para futura integração com backend.
 * Substituir por chamada à API/Lovable Cloud quando disponível.
 */
export async function submitSignup(data: SignupPayload): Promise<{ ok: true }> {
  // Simula latência de rede.
  await new Promise((r) => setTimeout(r, 900));
  if (typeof window !== "undefined" && "fbq" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.("track", "Lead");
  }
  console.info("[Bet Waba] Cadastro recebido (mock):", { ...data, password: "***" });
  return { ok: true };
}