"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const faqs = [
  {
    question: "O que é o Empréstimo CLT?",
    answer:
      "É uma modalidade de crédito para trabalhadores com carteira assinada, com parcelas descontadas direto na folha de pagamento.",
  },
  {
    question: "Qual o diferencial da CF Soluções Financeiras?",
    answer:
      "Aqui, sua solicitação pode ser analisada em diferentes bancos parceiros, aumentando suas chances de encontrar uma condição mais vantajosa.",
  },
  {
    question: "Posso comparar propostas?",
    answer:
      "Sim. Quando houver mais de uma possibilidade disponível para o seu perfil, você pode avaliar as opções e seguir com a que fizer mais sentido.",
  },
  {
    question: "Quem pode contratar?",
    answer:
      "Trabalhadores CLT, maiores de idade e sujeitos à análise de crédito.",
  },
  {
    question: "Quem está negativado pode solicitar?",
    answer:
      "Pode solicitar. A aprovação depende da análise e das condições de cada banco parceiro.",
  },
  {
    question: "Como sei quanto posso contratar?",
    answer:
      "Isso depende do seu perfil, da sua renda, da sua margem disponível e das condições oferecidas pelos bancos parceiros.",
  },
  {
    question: "Preciso sair de casa para contratar?",
    answer:
      "Não. O atendimento pode ser feito de forma digital, com suporte da nossa equipe pelo WhatsApp.",
  },
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Decorative BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ left: "-220px", top: "1px", width: "1879px", height: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sec11-bg.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
      </div>

      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[104px] pb-16 lg:pb-[104px] flex flex-col items-center gap-16"
        style={{ maxWidth: "687px" }}
      >
        {/* ── COPY ──────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-4 w-full">
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
              PERGUNTAS FREQUENTES
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
              fontWeight: 400,
              lineHeight: "1.2",
              color: DARK,
            }}
          >
            <span style={{ fontWeight: 600, color: "#24ACE4" }}>Tire suas dúvidas</span>
            <span style={{ fontWeight: 400 }}> sobre o Empréstimo CLT</span>
          </motion.h2>
        </div>

        {/* ── FAQ ACCORDION ─────────────────────────────────── */}
        <div className="flex flex-col gap-8 w-full">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
                className="rounded-lg overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: isOpen ? "#E9F2F7" : "#FFFFFF",
                  border: "0.5px solid #5CC2EB",
                  transition: "background-color 0.3s ease",
                }}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {/* Question row */}
                <div
                  className="flex items-center justify-between gap-4 p-4 lg:p-8"
                >
                  <span
                    className="text-[15px] lg:text-[20px]"
                    style={{
                      fontFamily: POPPINS,
                      fontWeight: 400,
                      lineHeight: "1.4",
                      color: DARK,
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron — rotates 180° when closed */}
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                    className="shrink-0"
                  >
                    <Image
                      src="/images/sec11-chevron.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </motion.div>
                </div>

                {/* Answer — animates height */}
                <AnimatePresence initial={false}>
                  {isOpen && faq.answer && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" as const }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-4 pb-4 lg:px-8 lg:pb-8"
                        style={{
                          fontFamily: POPPINS,
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "1.4",
                          color: DARK,
                          maxWidth: "550px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
