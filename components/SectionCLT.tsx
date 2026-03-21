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
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.2, ease: "easeOut" as const },
  },
};

export default function SectionCLT() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#E9F2F7", minHeight: "540px" }}
    >
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-[62px] py-16 lg:py-[104px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* ── LEFT: COPY ─────────────────────────────────────── */}
        <div className="flex flex-col gap-8 w-full lg:w-[562px] shrink-0">
          {/* Badge + Heading */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            {/* Caption badge */}
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.4",
                  textTransform: "uppercase",
                  color: "#24ACE4",
                  letterSpacing: "0.05em",
                }}
              >
                ENTENDA COMO FUNCIONA
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
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: "1.2",
                color: "#303A3E",
              }}
            >
              <span style={{ fontWeight: 400 }}>O que é o </span>
              <span style={{ fontWeight: 600, color: "#24ACE4" }}>Empréstimo CLT?</span>
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
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              lineHeight: "1.4",
              color: "#303A3E",
            }}
          >
            O Empréstimo CLT, também conhecido como Crédito do Trabalhador, é
            uma modalidade voltada para quem trabalha com carteira assinada.
            Nela, as parcelas são descontadas diretamente da folha de pagamento,
            o que traz mais praticidade para o dia a dia e pode tornar essa
            opção mais vantajosa do que outras modalidades de crédito.
          </motion.p>
        </div>

        {/* ── RIGHT: CARD ─────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="w-full lg:w-[592px] shrink-0"
        >
          {/* Card */}
          <div
            className="flex flex-col lg:flex-row rounded-lg bg-white overflow-hidden"
            style={{
              borderTop: "2px solid #24ACE4",
              minHeight: "325px",
            }}
          >
            {/* Photo — mobile: centered webp, desktop: portrait png */}
            <div className="w-full h-[220px] lg:w-[173px] lg:h-auto shrink-0">
              <Image
                src="/images/mulhermobile1.webp"
                alt="Mulher sorrindo"
                width={600}
                height={400}
                className="w-full h-full object-cover object-[center_top] lg:hidden"
              />
              <Image
                src="/images/sec4-photo.png"
                alt="Mulher sorrindo"
                width={173}
                height={350}
                className="hidden lg:block w-full h-full object-cover object-top"
              />
            </div>

            {/* Text */}
            <div
              className="flex flex-col gap-3 p-6 lg:pt-[63px] lg:pl-8 lg:pr-8 lg:pb-8"
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.4",
                  color: "#303A3E",
                  maxWidth: "241px",
                }}
              >
                Mais previsibilidade para o seu orçamento
              </p>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.4",
                  color: "#303A3E",
                  maxWidth: "359px",
                }}
              >
                Como o pagamento acontece direto na folha, você evita boletos e
                tem mais organização financeira. E com a CF Soluções Financeiras,
                além dessa praticidade, você ainda pode comparar possibilidades
                entre diferentes bancos parceiros.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
