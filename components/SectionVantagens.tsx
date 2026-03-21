"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const hoverLift = { y: -7 };
const hoverTransition = { duration: 0.22, ease: "easeOut" as const };

function BanksRow() {
  return (
    <svg width="236" height="84" viewBox="0 0 236 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="f0_sec5" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
          <feOffset dy="6"/><feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="f1_sec5" x="38" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
          <feOffset dy="6"/><feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="f2_sec5" x="76" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
          <feOffset dy="6"/><feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="f3_sec5" x="114" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
          <feOffset dy="6"/><feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="f4_sec5" x="152" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
          <feOffset dy="6"/><feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>

      {/* Bank 1 — Bradesco */}
      <motion.g filter="url(#f0_sec5)" whileHover={hoverLift} transition={hoverTransition} style={{ cursor: "pointer" }}>
        <rect x="13" y="7" width="58" height="58" rx="8" fill="white"/>
        <rect x="14" y="8" width="56" height="56" rx="7" stroke="#E9F2F7" strokeWidth="2"/>
        <path d="M41.8074 21.0731C42.6718 20.9347 47.4494 21.0317 48.5478 21.0511C52.9119 21.1285 57.684 20.9745 62 21.1957C58.2597 32.6932 55.549 31.3085 43.8355 31.2913C41.8986 31.2885 40.166 31.2367 38.4474 32.337C37.6724 32.8262 37.0613 33.5279 36.6901 34.3547C36.0102 35.8575 35.3238 42.2443 34.8039 44.6749C34.4522 46.2267 34.1232 47.2459 32.9756 48.4876C30.5692 51.092 25.4503 51.8743 22 52C22.2854 49.2379 23.0538 45.6198 23.4709 42.7572C24.1469 39.684 24.1464 35.8589 25.2639 32.9305C27.724 26.4833 35.1391 21.6633 41.8074 21.0731Z" fill="#FE7A00"/>
        <path d="M42.7516 34.0967C45.0969 34.0405 47.5211 33.9929 49.8586 34.1048C50.4146 34.2458 50.2443 35.0396 50.1104 35.3445C48.9376 38.0138 47.6319 40.4301 44.8978 41.7526C42.8719 42.368 39.6784 42.2516 37.5201 42.1532C38.6446 38.3652 37.9568 35.2952 42.7516 34.0967Z" fill="#006598"/>
      </motion.g>

      {/* Bank 2 — Nubank / N+ */}
      <motion.g filter="url(#f1_sec5)" whileHover={hoverLift} transition={hoverTransition} style={{ cursor: "pointer" }}>
        <rect x="51" y="7" width="58" height="58" rx="8" fill="white"/>
        <rect x="52" y="8" width="56" height="56" rx="7" stroke="#E9F2F7" strokeWidth="2"/>
        <path d="M87.1935 27H84.8387C84.6452 27 84.5 27.0662 84.4194 27.1986L75.2097 39.1315C75.0484 39.3301 74.8065 39.4129 74.5806 39.3301C74.3387 39.2474 74.1774 38.9991 74.1774 38.7343V27.7779C74.1774 27.5627 74.1129 27.3641 73.9677 27.2152C73.8387 27.0662 73.6774 27 73.5161 27H71.1452C70.9516 27 70.8065 27.0662 70.7258 27.1986L60.3226 40.4059C60.1613 40.6211 60.0645 40.9024 60.0484 41.1838L60 45.3545C60 45.6028 60.0968 45.8014 60.2742 45.8676C60.4194 45.9172 60.5645 45.8841 60.6774 45.7352L69.8387 33.9016C70 33.703 70.2419 33.6202 70.4677 33.703C70.7097 33.7857 70.871 34.034 70.871 34.2988V45.189C70.871 45.3876 70.9194 45.5862 71.0161 45.7186C71.1452 45.9007 71.3065 46 71.5 46H73.871C74.1129 46 74.2097 45.9007 74.3387 45.7517L83.5323 33.8685C83.6774 33.6699 83.9355 33.5871 84.1613 33.6699C84.4032 33.7526 84.5645 34.0009 84.5645 34.2657V45.1559C84.5645 45.4042 84.6452 45.6359 84.7742 45.7848C84.9032 45.9172 85.0484 45.9834 85.2258 45.9834H87.1452C87.3065 45.9834 87.4677 45.9172 87.5806 45.8179C87.7581 45.669 87.8387 45.4538 87.8387 45.189V27.7779C87.8387 27.5627 87.7742 27.3641 87.629 27.2152C87.5323 27.0662 87.371 27 87.1935 27Z" fill="#1526FF"/>
        <path d="M99.5 35.2753C99.7903 35.2753 100 35.5401 100 35.8876V37.0958C100 37.4103 99.7903 37.6916 99.5 37.6916H96.129C96 37.6916 95.9355 37.7578 95.9516 37.9068V40.6873C95.9516 41.0348 95.7419 41.2997 95.4516 41.2997H94.1774C93.8871 41.2997 93.6774 41.0348 93.6774 40.6873V37.9068C93.6774 37.7578 93.6129 37.6916 93.5 37.6916H90.129C89.8387 37.6916 89.629 37.4103 89.629 37.0958V35.8876C89.629 35.5401 89.8387 35.2753 90.129 35.2753H93.5C93.629 35.2753 93.6935 35.1925 93.6774 35.0601V32.2962C93.6774 31.9486 93.8871 31.7003 94.1774 31.7003H95.4516C95.7419 31.7003 95.9516 31.9486 95.9516 32.2962V35.0601C95.9516 35.2091 96.0161 35.2753 96.129 35.2753H99.5Z" fill="#1526FF"/>
      </motion.g>

      {/* Bank 3 — PagBank */}
      <motion.g filter="url(#f2_sec5)" whileHover={hoverLift} transition={hoverTransition} style={{ cursor: "pointer" }}>
        <rect x="89" y="7" width="58" height="58" rx="8" fill="white"/>
        <rect x="90" y="8" width="56" height="56" rx="7" stroke="#E9F2F7" strokeWidth="2"/>
        <path d="M117.058 25.7305C118.167 25.4994 120.503 25.891 121.595 26.2326C124.636 27.1864 127.174 29.3088 128.649 32.1327C130.115 34.9535 130.401 38.2406 129.443 41.2719C128.474 44.3152 126.332 46.8471 123.489 48.3075C120.961 49.6014 118.055 49.9581 115.289 49.314C114.62 49.1552 113.981 48.9543 113.356 48.6765C113.23 48.6205 113.215 48.6409 113.127 48.6891L113.116 48.8794L113.114 55.9994L106.038 56C105.981 51.9896 106.036 47.8454 106.034 43.8238L106.032 39.6307C106.031 38.0791 105.974 36.7175 106.296 35.181C106.693 33.3099 107.533 31.5611 108.745 30.0813C110.881 27.4632 113.727 26.0634 117.058 25.7305ZM118.597 42.5206C121.281 42.2027 123.201 39.7732 122.889 37.0901C122.576 34.407 120.149 32.4832 117.463 32.7898C114.769 33.0974 112.837 35.5317 113.15 38.2228C113.464 40.9139 115.904 42.8396 118.597 42.5206Z" fill="#424242"/>
        <path d="M106.015 16C108.336 16.0487 110.797 16.0072 113.129 16.0069C113.091 18.3474 113.12 20.7632 113.119 23.1097C110.819 23.0674 108.326 23.0907 106.025 23.1117C105.968 20.8265 106.028 18.3077 106.015 16Z" fill="#00C5FE"/>
      </motion.g>

      {/* Bank 4 — Pix/outro */}
      <motion.g filter="url(#f3_sec5)" whileHover={hoverLift} transition={hoverTransition} style={{ cursor: "pointer" }}>
        <rect x="127" y="7" width="58" height="58" rx="8" fill="white"/>
        <rect x="128" y="8" width="56" height="56" rx="7" stroke="#E9F2F7" strokeWidth="2"/>
        <path d="M146.004 26.3061C148.182 26.3324 150.395 26.2826 152.556 26.3086C155.7 26.3466 158.416 25.9555 161.26 27.5807C163.984 29.1374 165.473 31.2155 166.325 34.1364C169.455 34.0834 172.699 34.1406 175.846 34.1229C175.954 34.6115 175.993 35.6554 175.998 36.1551C176.079 41.4111 174.018 46.4785 170.28 50.2172C167.166 53.3284 163.082 55.3119 158.688 55.8476C157.571 55.9843 156.549 55.9884 155.43 55.9983C155.348 54.6377 155.407 52.6922 155.405 51.2879C163.293 51.4822 169.508 46.4955 171.036 38.8641C169.48 38.8269 167.852 38.8535 166.291 38.8579C166.172 39.4113 166.044 39.7553 165.846 40.2846C165.258 41.6113 164.699 42.5124 163.69 43.552C159.905 47.4514 155.751 46.5918 150.806 46.6785L150.804 55.985C147.748 56.027 144.657 55.9626 141.588 56C141.553 54.4779 141.582 52.8211 141.582 51.289L146.011 51.2934C145.92 48.4108 146.004 44.9011 146.005 41.9763L155.438 41.9848C157.376 41.9758 158.777 41.7092 160.2 40.2834C161.24 39.2625 161.823 37.8724 161.818 36.4239C161.799 34.3816 160.567 32.5574 158.761 31.6226C157.326 30.8804 155.808 30.9921 154.247 30.9949L150.803 31.0134L150.806 37.6844C149.256 37.6285 147.564 37.6562 146.01 37.6752C145.908 34.0577 146.004 29.9619 146.004 26.3061Z" fill="#00E6B3"/>
        <path d="M155.408 17.002C156.163 16.9962 157.081 17.0003 157.839 17.0543C162.926 17.4165 167.737 19.8472 171.084 23.6277C172.425 25.1442 173.531 26.8501 174.364 28.689C174.459 28.9044 174.673 29.3285 174.659 29.547C172.924 29.527 171.189 29.5262 169.454 29.5444C168.488 27.8965 167.616 26.7319 166.167 25.4473C163.225 22.8497 159.364 21.5058 155.424 21.7081C155.352 20.3583 155.409 18.3978 155.408 17.002Z" fill="#00E6B3"/>
        <path d="M136.3 46.0048L140.987 45.9874L140.981 51.0165L140.871 51.0545L136.007 51.059C136.007 50.6097 135.974 46.1512 136.05 46.0419L136.3 46.0048Z" fill="#111938"/>
      </motion.g>

      {/* Bank 5 — C6 Bank */}
      <motion.g filter="url(#f4_sec5)" whileHover={hoverLift} transition={hoverTransition} style={{ cursor: "pointer" }}>
        <rect x="165" y="7" width="58" height="58" rx="8" fill="white"/>
        <rect x="166" y="8" width="56" height="56" rx="7" stroke="#E9F2F7" strokeWidth="2"/>
        <path d="M188.154 39.2107C187.525 39.7511 186.796 40.0214 185.967 40.0214C184.902 40.0214 184.04 39.6504 183.378 38.9096C182.715 38.1677 182.384 37.1979 182.384 35.9991C182.384 34.7935 182.714 33.8192 183.371 33.0773C184.028 32.3365 184.894 31.9643 185.967 31.9643C186.746 31.9643 187.451 32.2105 188.078 32.7005C188.707 33.1906 189.151 33.8375 189.411 34.6423H195.532C195.213 32.2036 194.174 30.2332 192.415 28.7287C190.655 27.2242 188.497 26.4731 185.942 26.4731C184.048 26.4731 182.343 26.8809 180.826 27.6984C179.31 28.5147 178.126 29.6505 177.275 31.1034C176.425 32.5575 176 34.1901 176 35.9991C176 37.8093 176.425 39.4408 177.275 40.8949C178.126 42.3489 179.31 43.4837 180.826 44.3011C182.343 45.1186 184.048 45.5261 185.942 45.5261C188.539 45.5261 190.726 44.7464 192.502 43.1894C194.279 41.6299 195.309 39.5942 195.595 37.08H189.386C189.193 37.9604 188.782 38.6703 188.154 39.2107Z" fill="black"/>
        <path d="M210.19 34.2568C208.983 33.121 207.427 32.5542 205.52 32.5542C205.324 32.5542 205.058 32.5634 204.722 32.5806L208.098 27.0814L202.068 27.0825L199.213 31.7424C198.406 33.0637 197.81 34.2808 197.424 35.3948C197.038 36.5077 196.844 37.6148 196.844 38.714C196.844 40.728 197.547 42.3664 198.953 43.6304C200.359 44.8944 202.184 45.5263 204.428 45.5263C206.699 45.5263 208.529 44.8967 209.917 43.6373C211.305 42.3778 212 40.7188 212 38.6613C212 36.8603 211.397 35.3925 210.19 34.2568ZM206.118 40.3501C205.683 40.7853 205.121 41.0028 204.428 41.0028C203.737 41.0028 203.174 40.7853 202.74 40.3501C202.305 39.9162 202.087 39.3529 202.087 38.6613C202.087 37.9687 202.305 37.4019 202.74 36.9577C203.174 36.5146 203.737 36.2925 204.428 36.2925C205.121 36.2925 205.683 36.5146 206.118 36.9577C206.552 37.4019 206.77 37.9687 206.77 38.6613C206.77 39.3529 206.552 39.9162 206.118 40.3501Z" fill="black"/>
      </motion.g>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.1 + i * 0.07, ease: "easeOut" as const },
  }),
};

const cardTextBase = {
  fontFamily: "Poppins, sans-serif",
  color: "#303A3E",
} as const;

export default function SectionVantagens() {
  return (
    <section className="relative w-full bg-white" style={{ minHeight: "1260px" }}>
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-0 pb-16 lg:pb-[104px]"
        style={{ maxWidth: "1216px" }}
      >
        {/* COPY */}
        <div className="flex flex-col items-center pt-16 lg:pt-[104px]">
          <div
            className="flex flex-col items-center gap-4 w-full"
            style={{ maxWidth: "753px" }}
          >
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.4",
                  textTransform: "uppercase",
                  color: "#24ACE4",
                  letterSpacing: "0.05em",
                }}
              >
                VANTAGENS DO EMPRÉSTIMO CLT
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: "1.2",
                color: "#303A3E",
              }}
            >
              <span style={{ fontWeight: 400 }}>Por que solicitar seu </span>
              <span style={{ fontWeight: 600, color: "#24ACE4" }}>Empréstimo CLT</span>
              <span style={{ fontWeight: 400 }}> com a CF Soluções Financeiras?</span>
            </motion.h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 lg:mt-[64px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-8 lg:gap-y-[26px]">

          {/* ── Card 1: Simulação (Large) ─────────────────── lg: 8 cols × 405px */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-8 flex flex-col p-[25px] lg:p-[34px] rounded-lg lg:h-[405px]"
            style={{ backgroundColor: "#E9F2F7", gap: "25px" }}
          >
            {/* Top row: icon + badge */}
            <div className="flex justify-between items-start shrink-0">
              <Image
                src="/images/sec5-icon-simulacao.svg"
                alt=""
                width={58}
                height={58}
              />
              <div
                className="flex items-center px-3 py-1"
                style={{ backgroundColor: "#92D6F2", borderRadius: "6.33px" }}
              >
                <span
                  className="text-[12px] lg:text-[14px]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    lineHeight: "1.4",
                    textTransform: "uppercase",
                    color: "#10607F",
                    letterSpacing: "0.05em",
                  }}
                >
                  Análise Ampla
                </span>
              </div>
            </div>

            {/* Text — pushed to bottom on desktop via flex-1 + justify-end */}
            <div className="flex flex-col gap-[8px] lg:flex-1 lg:justify-end">
              <h3
                style={{
                  ...cardTextBase,
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "1.2",
                }}
              >
                Simulação em vários bancos
              </h3>
              <p
                style={{
                  ...cardTextBase,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.4",
                }}
              >
                Mais opções para você escolher. Sua solicitação pode ser analisada em
                diferentes bancos parceiros, aumentando as chances de encontrar a condição
                ideal para o seu perfil.
              </p>
            </div>

            {/* Bank logos row */}
            <div className="shrink-0">
              <BanksRow />
            </div>
          </motion.div>

          {/* ── Card 2: Melhor Taxa (Tall, Blue) ──────────── lg: 4 cols × 405px */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="relative lg:col-span-4 flex flex-col p-[25px] lg:p-[34px] rounded-lg overflow-hidden lg:h-[405px]"
            style={{ backgroundColor: "#24ACE4", gap: "25px" }}
          >
            {/* Blurred overlay circle */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "135px",
                height: "135px",
                top: "-17px",
                right: "0px",
                backgroundColor: "rgba(36, 172, 228, 0.1)",
                borderRadius: "50%",
                filter: "blur(42px)",
              }}
            />

            {/* Icon */}
            <div className="shrink-0">
              <Image
                src="/images/sec5-icon-taxa.svg"
                alt=""
                width={57}
                height={57}
              />
            </div>

            {/* Text — pushed to bottom on desktop */}
            <div className="flex flex-col gap-[7px] lg:flex-1 lg:justify-end">
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.4",
                  color: "#FFFFFF",
                }}
              >
                Busca pela melhor taxa
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.4",
                  color: "#FFFFFF",
                }}
              >
                Ao comparar diferentes possibilidades, você não fica preso a uma única
                proposta e pode avançar com a opção mais vantajosa.
              </p>
            </div>
          </motion.div>

          {/* ── Card 3: Parcelamento ──────────────────────── lg: 4 cols × 190px */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-4 flex flex-col justify-between gap-[21px] p-[25px] rounded-lg lg:h-[190px]"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <div className="w-[42px] h-[42px] shrink-0">
              <Image src="/images/sec5-icon-parcelamento.svg" alt="" width={42} height={42} />
            </div>
            <div className="flex flex-col gap-[3px]">
              <p style={{ ...cardTextBase, fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                Parcelamento em até 36x
              </p>
              <p style={{ ...cardTextBase, fontSize: "14px", fontWeight: 400, lineHeight: "1.4" }}>
                Organize melhor seu orçamento com parcelas que cabem no bolso e prazo estendido.
              </p>
            </div>
          </motion.div>

          {/* ── Card 4: Processo Digital ──────────────────── lg: 4 cols × 190px */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-4 flex flex-col justify-between gap-[21px] p-[25px] rounded-lg lg:h-[190px]"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <div className="w-[42px] h-[42px] shrink-0">
              <Image src="/images/sec5-icon-digital.svg" alt="" width={42} height={42} />
            </div>
            <div className="flex flex-col gap-[3px]">
              <p style={{ ...cardTextBase, fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                Processo 100% digital
              </p>
              <p style={{ ...cardTextBase, fontSize: "14px", fontWeight: 400, lineHeight: "1.4" }}>
                Tudo com mais praticidade. Inicie e siga pelo WhatsApp de forma rápida.
              </p>
            </div>
          </motion.div>

          {/* ── Card 5: Desconto em Folha ─────────────────── lg: 4 cols × 190px */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-4 flex flex-col justify-between gap-[21px] p-[25px] rounded-lg lg:h-[190px]"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <div className="w-[42px] h-[42px] shrink-0">
              <Image src="/images/sec5-icon-folha.svg" alt="" width={42} height={42} />
            </div>
            <div className="flex flex-col gap-[3px]">
              <p style={{ ...cardTextBase, fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                Desconto em folha
              </p>
              <p style={{ ...cardTextBase, fontSize: "14px", fontWeight: 400, lineHeight: "1.4" }}>
                Parcelas descontadas do salário, sem boletos e com previsibilidade.
              </p>
            </div>
          </motion.div>

          {/* ── Card 6: Negativados (Wide) ────────────────── lg: 7 cols × 190px */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-7 flex flex-col lg:flex-row lg:items-center gap-[21px] lg:gap-[25px] p-[25px] lg:p-[34px] rounded-lg lg:h-[190px]"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <div className="w-[58px] h-[58px] shrink-0">
              <Image src="/images/sec5-icon-negativados.svg" alt="" width={58} height={58} />
            </div>
            <div className="flex flex-col gap-[8px]" style={{ maxWidth: "480px" }}>
              <p style={{ ...cardTextBase, fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                Chance para negativados
              </p>
              <p style={{ ...cardTextBase, fontSize: "14px", fontWeight: 400, lineHeight: "1.4" }}>
                Dependendo da análise, essa modalidade pode abrir portas para quem encontra mais
                dificuldade em outras linhas de crédito. Possibilidade de contratação mesmo com restrições.
              </p>
            </div>
          </motion.div>

          {/* ── Card 7: Atendimento Consultivo ───────────── lg: 5 cols × 190px */}
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardFade}
            whileHover={{ y: -6, scale: 1.018, transition: { duration: 0.2, ease: "easeOut" as const } }}
            className="lg:col-span-5 flex flex-col justify-between gap-[21px] p-[25px] rounded-lg lg:h-[190px]"
            style={{ backgroundColor: "#E9F2F7" }}
          >
            <div className="w-[42px] h-[42px] shrink-0">
              <Image src="/images/sec5-icon-atendimento.svg" alt="" width={42} height={42} />
            </div>
            <div className="flex flex-col gap-[3px]" style={{ maxWidth: "405px" }}>
              <p style={{ ...cardTextBase, fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                Atendimento consultivo
              </p>
              <p style={{ ...cardTextBase, fontSize: "14px", fontWeight: 400, lineHeight: "1.4" }}>
                Nossa equipe ajuda você a entender as opções e tomar uma decisão com mais segurança.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
