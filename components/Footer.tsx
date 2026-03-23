"use client";

import { motion } from "framer-motion";
import { FONT, C } from "@/lib/tokens";

export default function Footer() {
  return (
    <footer className="relative w-full" style={{ backgroundColor: C.footerBg }}>
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[64px] pb-16 lg:pb-[64px] flex flex-col gap-8 lg:gap-0"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── TOP ROW: disclaimer + logo ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0"
          style={{ marginBottom: "82px" }}
        >
          <div style={{ maxWidth: "567px" }}>
            <p style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.white, marginBottom: "12px" }}>
              A concessão de crédito está sujeita à análise e aprovação. As condições, taxas, prazos e valores podem variar conforme o perfil do solicitante e as políticas de cada banco parceiro.
            </p>
            <p style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.white }}>
              A CF Soluções Financeiras atua com atendimento comercial e intermediação da solicitação, buscando opções em diferentes instituições parceiras conforme o perfil do cliente.
            </p>
          </div>

          <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer-logo.svg" alt="CF Soluções Financeiras" style={{ width: "176px", height: "53px" }} />
          </div>
        </motion.div>

        {/* ── DIVIDER ─────────────────────────────────────────── */}
        <div style={{ width: "100%", height: "1px", backgroundColor: C.primaryBg }} />

        {/* ── COPYRIGHT ───────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
          style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.white, marginTop: "40px" }}
        >
          © 2026 CF Soluções Financeiras. Todos os direitos reservados
        </motion.p>
      </div>
    </footer>
  );
}
