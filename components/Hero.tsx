"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FONT, C } from "@/lib/tokens";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const },
  },
};

const cardSlide = (delay: number) => ({
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay, ease: "easeOut" as const },
  },
});

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden lg:h-[780px]"
      style={{ backgroundColor: C.primaryBg, minHeight: "780px" }}
    >
      {/* Tiled background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/hero-bg-pattern.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "14px 14px",
          opacity: 0.03,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full h-full px-4 sm:px-6 lg:px-0" style={{ maxWidth: "1216px" }}>
        <div className="flex flex-col lg:flex-row lg:h-full">

          {/* ── LEFT: COPY ─────────────────────────────────────── */}
          <div
            className="flex flex-col gap-8 w-full lg:w-[551px] shrink-0 pt-12 pb-12 lg:pt-[143px] lg:pb-0"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                {/* Badge */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="inline-flex items-center justify-center px-4 py-[10px] rounded-lg w-fit"
                  style={{ backgroundColor: C.white }}
                >
                  <span
                    className="font-semibold tracking-wider text-[12px] lg:text-[14px]"
                    style={{
                      fontFamily: FONT,
                      lineHeight: "1.4",
                      textTransform: "uppercase",
                      color: C.primary,
                      letterSpacing: "0.05em",
                    }}
                  >
                    EMPRÉSTIMO CLT
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-center lg:text-left text-balance"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(26px, 4vw, 48px)",
                    fontWeight: 600,
                    lineHeight: "1.2",
                    color: C.dark,
                  }}
                >
                  <span style={{ fontWeight: 400 }}>Dinheiro para organizar sua vida com </span>
                  <span style={{ fontWeight: 600, color: C.primary }}>mais praticidade e menos burocracia</span>
                </motion.h1>
              </div>

              {/* Body */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-center lg:text-left text-[16px] lg:text-[20px]"
                style={{ fontFamily: FONT, fontWeight: 400, lineHeight: "1.4", color: C.dark }}
              >
                Analisamos seu perfil em diferentes bancos para buscar a melhor condição, com contratação simples, atendimento rápido e pagamento em até 36x.
              </motion.p>
            </div>

            {/* CTA + disclaimer */}
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
                <WhatsAppButton />
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-[10px]"
              >
                <div className="relative flex items-center justify-center w-[10px] h-[10px]">
                  {[0, 0.8, 1.6].map((delay) => (
                    <motion.span
                      key={delay}
                      className="absolute w-full h-full rounded-full"
                      style={{ backgroundColor: C.orange }}
                      animate={{ scale: [1, 1.1, 2.8], opacity: [0, 0.38, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" as const, times: [0, 0.08, 1], delay }}
                    />
                  ))}
                  <Image src="/icons/icon-dot.svg" alt="" width={10} height={10} className="relative z-10" />
                </div>
                <span style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.dark }}>
                  Chance para negativados mediante análise
                </span>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: PHOTO + CARDS ─────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative w-full shrink-0 mt-8 lg:mt-0 lg:ml-auto lg:self-end mx-auto lg:mx-0"
            style={{ maxWidth: "605px" }}
          >
            <div className="relative w-full lg:h-[716px]" style={{ aspectRatio: "605 / 716" }}>
              <Image
                src="/images/hero-photo.png"
                alt="Pessoa sorrindo com smartphone"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />

              {/* Card 1 */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardSlide(0.55)}
                className="absolute top-[65.4%] left-[1%]"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                  className="flex flex-row items-center gap-2"
                  style={{ backgroundColor: C.white, boxShadow: "0px 2px 6px 0px rgba(16, 24, 40, 0.06)", padding: "8px", borderRadius: "8px" }}
                >
                  <Image src="/icons/icon-digital.svg" alt="" width={28} height={28} />
                  <span style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.dark, whiteSpace: "nowrap" }}>
                    Processo 100% digital
                  </span>
                </motion.div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardSlide(0.65)}
                className="absolute top-[79%] lg:top-[74.6%] left-[1%]"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 }}
                  className="flex flex-row items-center gap-2"
                  style={{ backgroundColor: C.white, boxShadow: "0px 2px 6px 0px rgba(16, 24, 40, 0.06)", padding: "8px", borderRadius: "8px" }}
                >
                  <Image src="/icons/icon-parcelamento.svg" alt="" width={28} height={28} />
                  <span style={{ fontFamily: FONT, fontSize: "12px", fontWeight: 400, lineHeight: "1.4", color: C.dark, whiteSpace: "nowrap" }}>
                    Parcelamento em até 36x
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
