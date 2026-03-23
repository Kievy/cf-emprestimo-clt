"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.2, ease: "easeOut" as const },
  },
};

const cardEntrance = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.65, ease: "easeOut" as const },
  },
};

const compCard = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  },
});

const POPPINS = "Poppins, sans-serif";
const DARK = "#303A3E";

const checkItems = [
  "Simulação em vários bancos parceiros",
  "Comparação de condições",
  "Mais chance de encontrar boa taxa",
  "Atendimento para escolher melhor",
  "Processo simples e digital",
];

const xItems = [
  "Apenas uma proposta disponível",
  "Menos margem para comparação",
  "Menor flexibilidade na escolha",
  "Condição limitada ao que um único banco oferece",
];

export default function SectionComparacao() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px] pb-16 lg:pb-[107px]"
        style={{ maxWidth: "1216px" }}
      >

        {/* ── TOP ROW: COPY + FOTO ───────────────────────────────── */}
        {/*
          Photo uses natural height (w-full h-auto) so full image is visible.
          Cards sit below with negative margin to overlap photo's bottom area.
        */}
        <div className="flex flex-col lg:flex-row lg:gap-[125px] lg:items-start">

          {/* COPY */}
          <div className="flex flex-col gap-8 mb-8 lg:mb-0 lg:w-[592px] shrink-0">
            <div className="flex flex-col gap-4 items-center lg:items-start">

              {/* Badge */}
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
                  COMPARE ANTES DE CONTRATAR
                </span>
              </motion.div>

              {/* Heading */}
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
                  color: DARK,
                }}
              >
                <span style={{ fontWeight: 400 }}>Aqui você </span>
                <span style={{ fontWeight: 600, color: "#24ACE4" }}>não depende</span>
                <span style={{ fontWeight: 400 }}> de uma única proposta</span>
              </motion.h2>
            </div>

            {/* Body */}
            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center lg:text-left text-[16px] lg:text-[20px]"
              style={{
                fontFamily: POPPINS,
                fontWeight: 400,
                lineHeight: "1.4",
                color: DARK,
              }}
            >
              Muitas vezes, quem procura crédito recebe apenas uma condição e
              precisa decidir com base em poucas opções. Na CF Soluções
              Financeiras, o processo é diferente: avaliamos possibilidades em
              diferentes bancos parceiros para que você tenha mais liberdade de
              escolha.
            </motion.p>
          </div>

          {/* FOTO + floating card — natural aspect ratio so full image is visible */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideRight}
            className="relative flex-1 w-full flex justify-center lg:block"
          >
            <Image
              src="/images/sec6-mulher.png"
              alt="Mulher sorrindo ao telefone"
              width={499}
              height={620}
              className="w-[65%] md:w-[50%] lg:w-full h-auto rounded-lg block"
            />

            {/* Floating card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardEntrance}
              className="absolute left-3 lg:-left-[20px] top-[48%] lg:top-[38%]"
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                className="flex flex-row items-center gap-1.5 lg:gap-2"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 2px 6px 0px rgba(16, 24, 40, 0.06)",
                  borderRadius: "8px",
                }}
              >
                <Image src="/images/sec6-icon-approved.svg" alt="" width={22} height={22} className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" style={{ padding: "6px 0 6px 6px" }} />
                <span className="text-[10px] lg:text-[12px]" style={{ fontFamily: POPPINS, fontWeight: 400, lineHeight: "1.4", color: DARK, whiteSpace: "nowrap", paddingRight: "8px", paddingTop: "6px", paddingBottom: "6px" }}>
                  Empréstimo Aprovado
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── COMPARISON CARDS ──────────────────────────────────────
            Mobile:  mt-0 → cards connect right below photo
            Desktop: -mt-[240px] → cards overlap the photo's bottom portion
                     z-10 + relative → cards render in front of photo
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-0 lg:-mt-[240px] lg:relative lg:z-10 flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Blue card — CF Soluções (flex-1, destaque) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={compCard(0.1)}
            className="flex-1 flex flex-col gap-4 p-[22px] rounded-lg"
            style={{ backgroundColor: "#24ACE4" }}
          >
            <p className="text-[15px] lg:text-[20px]" style={{ fontFamily: POPPINS, fontWeight: 400, lineHeight: "1.4", color: "#FFFFFF" }}>
              Com a CF Soluções Financeiras
            </p>
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3 lg:gap-4">
                <Image src="/images/sec6-icon-check.svg" alt="" width={32} height={32} className="shrink-0 w-6 h-6 lg:w-8 lg:h-8" />
                <span className="text-[13px] lg:text-[18px]" style={{ fontFamily: POPPINS, fontWeight: 400, lineHeight: "1.4", color: "#FFFFFF" }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Gray card — única instituição (narrow, secondary) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={compCard(0.2)}
            className="flex-1 flex flex-col gap-4 p-[22px] rounded-lg"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <p className="text-[15px] lg:text-[20px]" style={{ fontFamily: POPPINS, fontWeight: 400, lineHeight: "1.4", color: DARK }}>
              Em uma única instituição
            </p>
            {xItems.map((item) => (
              <div key={item} className="flex items-center gap-3 lg:gap-4">
                <Image src="/images/sec6-icon-xcircle.svg" alt="" width={32} height={32} className="shrink-0 w-6 h-6 lg:w-8 lg:h-8" />
                <span className="text-[13px] lg:text-[18px]" style={{ fontFamily: POPPINS, fontWeight: 400, lineHeight: "1.4", color: DARK }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── CTA BUTTON ────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={compCard(0.2)}
          className="mt-8 lg:mt-10 flex justify-center lg:relative lg:z-10"
        >
          <WhatsAppButton />
        </motion.div>

      </div>
    </section>
  );
}
