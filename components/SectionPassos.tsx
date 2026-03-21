"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POPPINS = "Poppins, sans-serif";
const DARK = "#303A3E";

const steps = [
  {
    icon: "/images/sec8-step1.svg",
    title: "1. Fale pelo WhatsApp",
    body: "Você inicia o atendimento de forma rápida e prática.",
  },
  {
    icon: "/images/sec8-step2.svg",
    title: "2. Envie seus dados",
    body: "Analisamos seu perfil e verificamos as possibilidades.",
  },
  {
    icon: "/images/sec8-step3.svg",
    title: "3. Buscamos opções",
    body: "Comparamos em diferentes instituições para encontrar a condição ideal.",
  },
  {
    icon: "/images/sec8-step4.svg",
    title: "4. Receba propostas",
    body: "Você entende as alternativas e avalia qual faz mais sentido.",
  },
  {
    icon: "/images/sec8-step5.svg",
    title: "5. Siga com contratação",
    body: "Com apoio da nossa equipe, você avança com segurança e clareza.",
  },
];

/* ── Animation variants ─────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

// Stagger parent: each child step fires in sequence
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};

// Each step wrapper fades + slides up
const stepWrap = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

// Icon bounces in with spring
const iconPop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 280, damping: 18 },
  },
};

// Connector line grows from left
const lineGrow = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 0.3,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.18 },
  },
};

// Text fades up after icon
const textReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.25 },
  },
};

export default function SectionPassos() {
  return (
    <section className="relative w-full bg-white">
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px] pb-16 lg:pb-[76px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── COPY ──────────────────────────────────────────── */}
        <div
          className="flex flex-col items-center gap-4 mx-auto"
          style={{ maxWidth: "808px" }}
        >
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="inline-flex items-center justify-center px-4 py-[10px] rounded-lg w-fit"
            style={{ backgroundColor: "#E9F2F7" }}
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
              PASSO A PASSO DA SOLICITAÇÃO
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-center text-balance"
            style={{
              fontFamily: POPPINS,
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 600,
              lineHeight: "1.2",
              color: DARK,
            }}
          >
            <span style={{ fontWeight: 400 }}>Veja </span>
            <span style={{ fontWeight: 600, color: "#24ACE4" }}>como funciona</span>
            <span style={{ fontWeight: 400 }}> sua solicitação com a CF Soluções Financeiras</span>
          </motion.h2>
        </div>

        {/* ── STEPS CARD ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="mt-12 lg:mt-[60px] rounded-xl px-6 py-12 lg:px-[76px] lg:py-[76px]"
          style={{ backgroundColor: "#E9F2F7" }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:flex-row lg:gap-0 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={stepWrap}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2, ease: "easeOut" as const } }}
                className="flex-1 relative cursor-default"
              >
                {/* ── Desktop: icon row with connector ── */}
                <div className="hidden lg:block relative">
                  <motion.div variants={iconPop} className="relative z-10 w-fit">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={61}
                      height={61}
                    />
                  </motion.div>

                  {/* Connector line to next step */}
                  {i < steps.length - 1 && (
                    <motion.div
                      variants={lineGrow}
                      style={{ transformOrigin: "left" }}
                      className="absolute top-[28px] left-[61px] right-0 h-[2px] bg-[#C2C6C8]"
                    />
                  )}
                </div>

                {/* ── Mobile: icon + text side by side ── */}
                <div className="lg:hidden flex flex-row items-start gap-4">
                  <motion.div variants={iconPop} className="shrink-0">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={52}
                      height={52}
                    />
                  </motion.div>
                  <motion.div variants={textReveal} className="flex flex-col gap-1 pt-1">
                    <p
                      style={{
                        fontFamily: POPPINS,
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "1.2",
                        color: DARK,
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontFamily: POPPINS,
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.4",
                        color: DARK,
                      }}
                    >
                      {step.body}
                    </p>
                  </motion.div>
                </div>

                {/* ── Desktop text below icon ── */}
                <motion.div
                  variants={textReveal}
                  className="hidden lg:flex flex-col gap-2 mt-5 pr-4"
                >
                  <p
                    style={{
                      fontFamily: POPPINS,
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "1.2",
                      color: DARK,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: POPPINS,
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      color: DARK,
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
