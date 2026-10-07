import limpeza from "../assets/t-limpeza.png";
import harmonizacao from "../assets/t-harmonizacao.png";
import laser from "../assets/t-laser.png";
import corporal from "../assets/t-corporal.png";
import sobrancelha from "../assets/t-sombrancelha.png";

export const WHATSAPP_URL =
  "https://wa.me/5585999990000?text=" +
  encodeURIComponent("Olá! Gostaria de agendar uma avaliação na AURA Estética.");

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export const TREATMENTS = [
  { title: "Limpeza de pele", category: "Facial", img: limpeza, text: "Higienização profunda, extração cuidadosa e hidratação para uma pele luminosa e equilibrada." },
  { title: "Harmonização facial", category: "Facial", img: harmonizacao, text: "Contornos realçados com sutileza, respeitando a proporção e a identidade do seu rosto." },
  { title: "Depilação a laser", category: "Laser", img: laser, text: "Tecnologia de alta precisão para reduzir os pelos com conforto e segurança em todos os fototipos." },
  { title: "Tratamentos corporais", category: "Corporal", img: corporal, text: "Protocolos de drenagem, modelagem e firmeza pensados para o seu corpo e a sua rotina." },
  { title: "Design de sobrancelhas", category: "Facial", img: sobrancelha, text: "Desenho personalizado que valoriza o olhar com naturalidade e simetria." },
];

export const RESULTS = [
  { title: "Textura e viço", category: "Facial", img: limpeza, sessions: "4 sessões" },
  { title: "Contorno mandibular", category: "Facial", img: harmonizacao, sessions: "1 sessão" },
  { title: "Redução de pelos", category: "Laser", img: laser, sessions: "8 sessões" },
  { title: "Firmeza corporal", category: "Corporal", img: corporal, sessions: "10 sessões" },
  { title: "Olhar definido", category: "Facial", img: sobrancelha, sessions: "1 sessão" },
];

export const STEPS = [
  { n: "01", title: "Agende sua avaliação", text: "Escolha o melhor horário pelo WhatsApp, em poucos minutos." },
  { n: "02", title: "Conheça suas necessidades", text: "Uma conversa atenta e uma análise detalhada da sua pele e do seu corpo." },
  { n: "03", title: "Monte seu protocolo", text: "Um plano exclusivo, com tratamentos, frequência e cuidados em casa." },
  { n: "04", title: "Acompanhe sua evolução", text: "Registros periódicos para ajustar cada etapa e celebrar os resultados." },
];

export const FEATURES = [
  { title: "Atendimento personalizado", text: "Cada protocolo nasce de uma escuta cuidadosa. Nada é padronizado." },
  { title: "Profissionais especializados", text: "Equipe formada por biomédicas e esteticistas em constante atualização." },
  { title: "Tecnologia de ponta", text: "Equipamentos certificados e técnicas reconhecidas internacionalmente." },
  { title: "Ambiente confortável", text: "Um espaço sereno, pensado para que você desacelere e se sinta acolhida." },
];

export const FAQ = [
  { q: "Como funciona a avaliação?", a: "A avaliação dura cerca de 40 minutos. Conversamos sobre seus objetivos, analisamos sua pele ou região de interesse e apresentamos um protocolo personalizado, sem compromisso." },
  { q: "A avaliação tem custo?", a: "A primeira avaliação é cortesia. Caso decida iniciar o tratamento, montamos juntas o plano mais adequado ao seu momento." },
  { q: "Como faço para agendar?", a: "Todo o agendamento é feito pelo WhatsApp. Basta clicar em “Agendar avaliação” e nossa equipe responde em até uma hora no horário comercial." },
  { q: "Quanto tempo dura cada sessão?", a: "Depende do tratamento: um design de sobrancelhas leva cerca de 40 minutos, enquanto protocolos corporais podem chegar a 90 minutos." },
  { q: "Em quanto tempo vejo resultados?", a: "Alguns tratamentos mostram efeito imediato; outros evoluem ao longo das sessões. Na avaliação, explicamos com transparência o que esperar." },
  { q: "Posso remarcar um horário?", a: "Sim. Pedimos apenas que avise com 24 horas de antecedência para reorganizarmos a agenda." },
];
