"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FONT, C } from "@/lib/tokens";

const WHATSAPP_URL = "https://wa.me/5519997099266";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex items-center justify-center gap-[10px] rounded-lg cursor-pointer w-fit overflow-hidden px-6 py-4 lg:px-[46px] lg:py-[22px] text-[15px] lg:text-[18px]"
      style={{
        backgroundColor: C.orange,
        border: `1px solid ${C.orangeBorder}`,
        fontFamily: FONT,
        fontWeight: 600,
        lineHeight: "1.4",
        color: C.white,
        textDecoration: "none",
      }}
    >
      {/* Left arrow — slides in from the right on hover */}
      <motion.span
        style={{ display: "flex", width: 24, height: 24, flexShrink: 0 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image src="/icons/icon-arrow.svg" alt="" width={24} height={24} />
      </motion.span>

      <span style={{ whiteSpace: "nowrap" }}>Simular no whatsapp</span>

      {/* Right arrow — slides out to the right on hover */}
      <motion.span
        style={{ display: "flex", width: 24, height: 24, flexShrink: 0 }}
        animate={{ opacity: hovered ? 0 : 1, x: hovered ? 40 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image src="/icons/icon-arrow.svg" alt="" width={24} height={24} />
      </motion.span>
    </motion.a>
  );
}
