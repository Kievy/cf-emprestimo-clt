"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const POPPINS = "Poppins, sans-serif";
const DARK = "#303A3E";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function SectionCTA() {
  return (
    <section className="relative w-full bg-white">
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px] pb-16 lg:pb-[104px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── CARD ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="rounded-xl flex flex-col px-6 pt-12 pb-12 lg:px-[39px] lg:pt-[77px] lg:pb-[78px] gap-12 lg:gap-[108px]"
          style={{ backgroundColor: "#24ACE4" }}
        >
          {/* ── TOP: COPY ROW ─────────────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-[75px]">
            {/* Left: badge + heading */}
            <div
              className="flex flex-col items-center lg:items-start gap-4 shrink-0 mb-6 lg:mb-0"
              style={{ maxWidth: "527px" }}
            >
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="inline-flex items-center justify-center px-4 py-[10px] rounded-lg w-fit"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[12px] lg:text-[14px]"
                  style={{
                    fontFamily: POPPINS,
                    fontWeight: 600,
                    lineHeight: "1.4",
                    textTransform: "uppercase",
                    color: "#24ACE4",
                    letterSpacing: "0.05em",
                  }}
                >
                  FAÇA SUA SIMULAÇÃO AGORA
                </span>
              </motion.div>

              <motion.h2
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-center lg:text-left text-balance"
                style={{
                  fontFamily: POPPINS,
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 400,
                  lineHeight: "1.2",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ fontWeight: 400 }}>Solicite sua simulação e veja qual banco oferece a </span>
                <span style={{ fontWeight: 600 }}>melhor opção para você</span>
              </motion.h2>
            </div>

            {/* Right: body text */}
            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center lg:text-left text-[16px] lg:text-[20px] mx-auto lg:mx-0"
              style={{
                fontFamily: POPPINS,
                fontWeight: 400,
                lineHeight: "1.4",
                color: "#FFFFFF",
                maxWidth: "536px",
              }}
            >
              Fale agora com a equipe da CF Soluções Financeiras e descubra suas
              possibilidades de contratação. Analisamos seu perfil em diferentes
              bancos parceiros para buscar a melhor condição, com atendimento
              rápido, simples e sem complicação.
            </motion.p>
          </div>

          {/* ── BOTTOM: CTA ───────────────────────────────── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col items-center gap-4"
          >
            <WhatsAppButton />

            <p
              className="text-center"
              style={{
                fontFamily: POPPINS,
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "1.4",
                color: "#FFFFFF",
              }}
            >
              Atendimento rápido | Comparação entre bancos | Sujeito à análise
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
