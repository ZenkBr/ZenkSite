import roast from "@/assets/roast.jpg";
import mareAlta from "@/assets/mare-alta.jpg";
import altura from "@/assets/altura.jpg";
import ambar from "@/assets/ambar.jpg";
import northCapital from "@/assets/north-capital.jpg";

export type Project = {
  id: string;
  name: string;
  category: string;
  concept: string;
  description: string;
  traits: string[];
  image: string;
  span: "wide" | "tall" | "regular";
};

export const projects: Project[] = [
  {
    id: "roast",
    name: "ROAST",
    category: "Cafeteria",
    concept: "Conceito de site para cafeteria",
    description:
      "Estética industrial, acolhedora e contemporânea. A composição usa uma fotografia ampla do ambiente como plano de fundo do hero, com tipografia condensada em caixa alta e um menu enxuto sobre fundo claro.",
    traits: [
      "Tipografia sans condensada em caixa alta",
      "Paleta de tons quentes, creme e madeira",
      "Hero fotográfico de tela cheia",
      "Botão de ação em formato pill",
    ],
    image: roast,
    span: "wide",
  },
  {
    id: "mare-alta",
    name: "MARÉ ALTA",
    category: "Resort / Hotelaria",
    concept: "Conceito de experiência digital para resort à beira-mar",
    description:
      "Direção serena e cinematográfica. O texto ocupa a margem esquerda em serifa clara, deixando a paisagem respirar, com navegação leve e um rodapé de hero que sugere continuidade de rolagem.",
    traits: [
      "Serifa clara de alto contraste",
      "Paleta de verdes, areia e off-white",
      "Layout com grandes áreas de respiro",
      "Botão contornado discreto",
    ],
    image: mareAlta,
    span: "tall",
  },
  {
    id: "altura",
    name: "ALTURA",
    category: "Imobiliária premium",
    concept: "Conceito de site para imobiliária de alto padrão",
    description:
      "Arquitetura e paisagem como protagonistas. Hero centralizado em serifa ampla sobre fotografia de entardecer, com uma barra de busca discreta ancorada na base da tela.",
    traits: [
      "Serifa ampla centralizada",
      "Paleta de entardecer: âmbar, malva e branco",
      "Fotografia arquitetônica em grande escala",
      "Barra de busca integrada ao hero",
    ],
    image: altura,
    span: "regular",
  },
  {
    id: "ambar",
    name: "ÂMBAR",
    category: "Restaurante contemporâneo",
    concept: "Conceito de site para restaurante contemporâneo",
    description:
      "Direção escura e sensorial. O prato ocupa o centro da composição enquanto o texto se alinha à esquerda, criando contraste entre sombra profunda e acentos em âmbar.",
    traits: [
      "Fundo escuro com acentos em âmbar",
      "Fotografia gastronômica em close",
      "Tipografia mista: serifa e sans",
      "Composição assimétrica",
    ],
    image: ambar,
    span: "regular",
  },
  {
    id: "north-capital",
    name: "NORTH CAPITAL",
    category: "Gestão patrimonial",
    concept: "Conceito de site para gestão patrimonial",
    description:
      "Sobriedade corporativa com acabamento premium. Azul profundo, detalhes em dourado e um traçado gráfico contínuo sobre a fotografia reforçam a ideia de estratégia e longo prazo.",
    traits: [
      "Paleta azul-noite com dourado",
      "Linha gráfica sobreposta à imagem",
      "Serifa institucional com destaque colorido",
      "Navegação com área de cliente",
    ],
    image: northCapital,
    span: "wide",
  },
];
