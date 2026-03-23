/** Fonte padrão do projeto */
export const FONT = "Poppins, sans-serif";

/** Paleta de cores centralizada */
export const C = {
  primary:      "#24ACE4",  // azul principal
  primaryLight: "#92D6F2",  // azul claro
  primaryMid:   "#5CC2EB",  // azul médio (bg foto sec10, borda FAQ)
  primaryBg:    "#E9F2F7",  // fundo azul clarinho (badges, cards)
  footerBg:     "#10607F",  // azul escuro do rodapé
  orange:       "#FFA333",  // botão CTA laranja
  orangeBorder: "#FFBF70",  // borda do botão laranja
  dark:         "#303A3E",  // texto principal
  white:        "#FFFFFF",  // branco
  line:         "#C2C6C8",  // linhas conectoras (steps)
} as const;

/** Border radius padrão */
export const R = {
  sm: "8px",   // badges, floating cards
  md: "12px",  // cards maiores
} as const;
