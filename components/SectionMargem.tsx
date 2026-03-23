"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FONT, C } from "@/lib/tokens";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.25, ease: "easeOut" as const },
  },
};

export default function SectionMargem() {
  return (
    <section className="relative w-full bg-white">
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 py-16 lg:py-[85px] flex flex-col lg:flex-row lg:items-center lg:gap-[88px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── LEFT: COPY ──────────────────────────────────────── */}
        <div
          className="flex flex-col items-center lg:items-start gap-8 shrink-0 mb-8 lg:mb-0 w-full"
          style={{ maxWidth: "536px" }}
        >
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="inline-flex items-center justify-center px-4 py-[10px] rounded-lg w-fit"
              style={{ backgroundColor: C.primaryBg }}
            >
              <span
                className="text-[12px] lg:text-[14px]"
                style={{ fontFamily: FONT, fontWeight: 600, lineHeight: "1.4", textTransform: "uppercase", color: C.primary, letterSpacing: "0.05em" }}
              >
                COMO A PARCELA É DEFINIDA
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center lg:text-left text-balance"
              style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 400, lineHeight: "1.2", color: C.dark }}
            >
              <span style={{ fontWeight: 400 }}>Entenda a </span>
              <span style={{ fontWeight: 600, color: C.primary }}>margem consignável</span>
            </motion.h2>
          </div>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-center lg:text-left text-[16px] lg:text-[20px]"
            style={{ fontFamily: FONT, fontWeight: 400, lineHeight: "1.4", color: C.dark }}
          >
            A margem consignável é o percentual da sua renda que pode ser
            comprometido com as parcelas do empréstimo. Isso ajuda a manter o
            valor da prestação dentro de um limite mais seguro para o seu
            orçamento.
          </motion.p>
        </div>

        {/* ── RIGHT: INFO CARD ─────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeft}
          className="flex-1 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: C.primaryBg, borderTop: `2px solid ${C.primary}`, minHeight: "325px" }}
        >
          <div className="flex flex-col items-center gap-4 px-6 py-10 lg:px-[75px] lg:py-[47px]">
            {/* Icon + wave rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.4 }}
              className="relative flex items-center justify-center"
              style={{ width: 66, height: 66 }}
            >
              {[0, 0.8, 1.6].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute rounded-full"
                  style={{ width: 66, height: 66, backgroundColor: C.primary }}
                  animate={{ scale: [1, 1.05, 1.9], opacity: [0, 0.18, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" as const, times: [0, 0.08, 1], delay }}
                />
              ))}
              <Image src="/images/sec9-icon.svg" alt="" width={66} height={66} className="relative z-10" />
            </motion.div>

            <p
              className="text-center"
              style={{ fontFamily: FONT, fontSize: "20px", fontWeight: 600, lineHeight: "1.4", color: C.dark }}
            >
              Por que isso é importante?
            </p>

            <p
              className="text-center"
              style={{ fontFamily: FONT, fontSize: "16px", fontWeight: 400, lineHeight: "1.4", color: C.dark }}
            >
              Porque o valor liberado e a parcela disponível dependem do seu
              perfil e da sua margem. E ao comparar diferentes bancos parceiros,
              a CF Soluções Financeiras pode te ajudar a encontrar a alternativa
              que melhor se encaixa dentro dessa realidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
