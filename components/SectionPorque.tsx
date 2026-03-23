"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const slideRight = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.15, ease: "easeOut" as const },
  },
};

const staggerCards = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const col1 = [
  "Simulação em vários bancos",
  "Mais liberdade para comparar",
  "Busca por melhores condições",
];

const col2 = [
  "Atendimento Automatizado",
  "Suporte em todas as etapas",
];

export default function SectionPorque() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#24ACE4" }}
    >
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px] pb-16 lg:pb-[120px] flex flex-col lg:flex-row lg:items-start lg:gap-[82px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── LEFT: FOTO + logo girando ────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideRight}
          className="relative shrink-0 rounded-lg overflow-hidden order-2 lg:order-1 mt-10 lg:mt-[42px] mx-auto lg:mx-0 w-[72%] lg:w-full"
          style={{
            maxWidth: "384px",
            height: "420px",
            backgroundColor: "#5CC2EB",
          }}
        >
          <Image
            src="/images/sec10-foto.png"
            alt="Carol CF Soluções Financeiras"
            fill
            className="object-cover object-top"
          />

          {/* Spinning logo */}
          <div
            className="absolute w-[72px] h-[72px] lg:w-[109px] lg:h-[109px]"
            style={{ right: "14px", top: "130px" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <Image
                src="/images/sec10-logo.svg"
                alt="CF Soluções Financeiras"
                width={109}
                height={109}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: COPY ──────────────────────────────────────── */}
        <div className="flex flex-col gap-8 flex-1 order-1 lg:order-2">
          {/* Badge + Heading + Body */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              {/* Badge */}
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
                  POR QUE ESCOLHER A CF
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
                  color: "#FFFFFF",
                }}
              >
                <span style={{ fontWeight: 400 }}>Seu crédito com </span>
                <span style={{ fontWeight: 600 }}>mais<br />comparação</span>
                <span style={{ fontWeight: 400 }}> e mais clareza</span>
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
                color: "#FFFFFF",
              }}
            >
              Na CF Soluções Financeiras, você não fica preso a uma única
              análise. Nosso diferencial é buscar possibilidades em diferentes
              bancos parceiros, para que você tenha acesso a mais alternativas e
              possa escolher a opção que realmente faz sentido para o seu
              perfil.
            </motion.p>
          </div>

          {/* Check cards */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            {/* Col 1 */}
            <div className="flex flex-col gap-8 flex-1">
              {col1.map((text) => (
                <motion.div
                  key={text}
                  variants={cardItem}
                  className="flex items-center gap-[10px] rounded-lg px-[22px] py-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                  }}
                >
                  <Image
                    src="/images/sec10-check.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <span
                    style={{
                      fontFamily: POPPINS,
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      color: DARK,
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-8 flex-1 justify-center">
              {col2.map((text) => (
                <motion.div
                  key={text}
                  variants={cardItem}
                  className="flex items-center gap-[10px] rounded-lg px-[22px] py-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                  }}
                >
                  <Image
                    src="/images/sec10-check.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <span
                    style={{
                      fontFamily: POPPINS,
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      color: DARK,
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
