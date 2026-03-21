"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const },
  },
};

export default function SectionBanks() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: "1081px" }}
    >
      {/* Section background grid */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/section2-bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-0 flex flex-col items-center pb-16 lg:pb-0"
        style={{ maxWidth: "1216px" }}
      >
        {/* COPY */}
        <div
          className="flex flex-col items-center gap-8 pt-16 lg:pt-[104px] w-full"
          style={{ maxWidth: "856px" }}
        >
          {/* Badge + Heading */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Caption badge */}
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.4",
                  textTransform: "uppercase",
                  color: "#24ACE4",
                  letterSpacing: "0.05em",
                }}
              >
                CONTRATAÇÃO FACILITADA
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center text-balance"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: "1.2",
                color: "#303A3E",
              }}
            >
              <span style={{ fontWeight: 400 }}>Você não recebe só uma proposta.</span>
              <br className="hidden lg:block" />
              {" "}
              <span style={{ fontWeight: 400 }}>Você recebe </span>
              <span style={{ fontWeight: 600, color: "#24ACE4" }}>possibilidades.</span>
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
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              lineHeight: "1.4",
              color: "#303A3E",
            }}
          >
            Na CF Soluções Financeiras, nosso papel é{" "}
            <span style={{ fontWeight: 600 }}>facilitar sua jornada e aumentar suas chances de encontrar uma condição realmente interessante para o seu perfil</span>
            . Por isso, sua solicitação pode ser analisada em diferentes bancos parceiros, permitindo comparar alternativas e escolher a que melhor atende sua necessidade.
          </motion.p>
        </div>

        {/* BANK SVG */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mt-8 flex justify-center w-full"
        >
          <Image
            src="/images/imagens_bancos.svg"
            alt="Bancos parceiros"
            width={576}
            height={569}
            className="w-full max-w-[576px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
