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

const carouselImages = [
  { src: "/images/sec7-recepcionista.png", alt: "Recepcionista" },
  { src: "/images/sec7-vendedor.png", alt: "Vendedor" },
  { src: "/images/sec7-enfermeiro.png", alt: "Enfermeiro" },
  { src: "/images/sec7-atendente.png", alt: "Atendente" },
  { src: "/images/sec7-entregador.png", alt: "Entregador" },
  { src: "/images/sec7-garcom.png", alt: "Garçom" },
];

const pills = [
  ["•Trabalhadores CLT", "•Maiores de idade"],
  [
    "•Pessoas com margem disponível para contratação",
    "•Clientes sujeitos à análise de crédito",
  ],
];

const CARD_W = 280;
const GAP = 32;
// Distance to shift = width of one full set (6 cards + 6 gaps) for seamless loop
const SHIFT = (CARD_W + GAP) * carouselImages.length; // 1872px

export default function SectionQuem() {
  return (
    <section
      className="relative w-full overflow-hidden lg:min-h-[1135px]"
      style={{ backgroundColor: C.primaryBg }}
    >
      {/* Decorative BG */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "-60px", left: "92px", width: "1256px", height: "1256px", opacity: 0.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sec7-bg.svg" alt="" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* ── COPY ──────────────────────────────────────────────── */}
      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px]"
        style={{ maxWidth: "1216px" }}
      >
        <div
          className="flex flex-col items-center gap-8 mx-auto"
          style={{ maxWidth: "808px" }}
        >
          {/* Badge + Heading */}
          <div className="flex flex-col items-center gap-4 w-full">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="inline-flex items-center justify-center px-4 py-[10px] rounded-lg w-fit"
              style={{ backgroundColor: C.white }}
            >
              <span
                className="text-[12px] lg:text-[14px]"
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  lineHeight: "1.4",
                  textTransform: "uppercase",
                  color: C.primary,
                  letterSpacing: "0.05em",
                }}
              >
                VEJA SE É PARA VOCÊ
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
                fontFamily: FONT,
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 400,
                lineHeight: "1.2",
                color: C.dark,
              }}
            >
              <span style={{ fontWeight: 400 }}>Quem </span>
              <span style={{ fontWeight: 600, color: C.primary }}>pode solicitar</span>
              <span style={{ fontWeight: 400 }}> o Empréstimo CLT?</span>
            </motion.h2>
          </div>

          {/* Body */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-center text-[16px] lg:text-[20px]"
            style={{
              fontFamily: FONT,
              fontWeight: 400,
              lineHeight: "1.4",
              color: C.dark,
            }}
          >
            Essa modalidade é destinada a trabalhadores com carteira assinada
            que desejam contratar crédito com desconto das parcelas em folha. A
            aprovação depende de análise e das condições disponíveis para cada
            perfil.
          </motion.p>
        </div>
      </div>

      {/* ── CARROSSEL — full viewport width ────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full overflow-hidden mt-14 lg:mt-[62px]"
      >
        <motion.div
          animate={{ x: [0, -SHIFT] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop" as const,
          }}
          className="flex"
          style={{ gap: `${GAP}px`, width: "max-content" }}
        >
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" as const } }}
              className="shrink-0 rounded-xl overflow-hidden cursor-pointer w-[180px] h-[179px] lg:w-[280px] lg:h-[279px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={280}
                height={279}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── REQUIREMENTS + DISCLAIMER ─────────────────────────── */}
      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-0 mt-14 lg:mt-[62px] pb-16 lg:pb-[107px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* Pills */}
        <div
          className="flex flex-col gap-8 mx-auto"
          style={{ maxWidth: "714px" }}
        >
          {pills.map((row, ri) => (
            <div
              key={ri}
              className="flex flex-col sm:flex-row gap-8"
            >
              {row.map((text, ti) => (
                <motion.div
                  key={ti}
                  custom={ri * 2 + ti}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  className="flex items-center rounded-lg px-[22px] py-4 flex-1"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: `1px solid ${C.white}`,
                  }}
                >
                  <span className="text-[16px] lg:text-[20px]" style={{ fontFamily: FONT, fontWeight: 400, lineHeight: "1.4", color: C.dark }}>
                    <span style={{ color: C.primary }}>{text[0]}</span>
                    {text.includes("disponível")
                      ? <>Pessoas com margem <span className="hidden lg:inline">disponível </span>para contratação</>
                      : text.slice(1)
                    }
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="text-center mx-auto mt-14 lg:mt-[62px] text-[16px] lg:text-[20px]"
          style={{
            fontFamily: FONT,
            fontWeight: 400,
            lineHeight: "1.4",
            color: C.dark,
            maxWidth: "558px",
          }}
        >
          A condição final pode variar conforme o perfil do cliente e o banco
          parceiro responsável pela análise.
        </motion.p>
      </div>
    </section>
  );
}
