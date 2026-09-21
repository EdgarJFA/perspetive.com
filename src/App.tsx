import { useState, useEffect, createContext, useContext } from 'react'
import {
  Buildings,
  ChartBar,
  TrendUp,
  Bank,
  Briefcase,
  Users,
  Lightbulb,
  Gear,
  Megaphone,
  ShieldCheck,
  Globe,
  CurrencyDollar,
  Factory,
  WifiHigh,
  ShoppingCart,
  Hammer,
  ArrowRight,
  X,
  List,
  MagnifyingGlass,
  CheckCircle,
  MapPin,
  Envelope,
  LinkedinLogo,
  CaretRight,
  Quotes,
} from '@phosphor-icons/react'

// ─── i18n ────────────────────────────────────────────────────────────────────

type Lang = 'pt' | 'en'

const t = {
  pt: {
    nav: {
      about: 'Quem Somos',
      program: 'Aureum Performance',
      modules: '12 Programas',
      sectors: 'Setores',
      model: 'Modelo Operacional',
      simulator: 'Simulador',
      cta: 'Agendar Diagnóstico',
    },
    hero: {
      label: 'Aureum Capital · Perspective',
      h1a: 'Acelere a',
      h1b: 'Performance',
      h1c: 'e o Crescimento do Seu Negócio',
      sub: 'Transformamos empresas em entidades bancáveis, rentáveis e prontas para captar capital global. Da estratégia à execução, entregamos resultados mensuráveis.',
      cta1: 'Agendar Diagnóstico',
      cta2: 'Explorar Módulos',
      s1: 'Programas Especializados',
      s2: 'Fases de Implementação',
      s3: 'Anos de Experiência',
    },
    about: {
      label: 'Quem Somos',
      h2a: 'Ponte Estratégica Entre a Europa',
      h2b: 'e os Mercados Internacionais',
      body1: 'A PERSPECTIVE é a representante da Aureum Capital para a Europa — focada em transformar a performance de empresas e posicioná-las para acesso a capital local e internacional a partir de Lisboa.',
      body2: 'Combinamos inteligência de mercado, metodologias de classe mundial e uma rede de capital global para entregar transformação real — não apenas recomendações.',
      vision: 'Visão',
      visionText: 'Ser a principal plataforma europeia de aceleração empresarial com ligação a mercados emergentes, tornando as empresas clientes referências globais de performance e atratividade para o capital internacional.',
      mission: 'Missão',
      missionText: 'Implementar programas de transformação que aumentem a bancabilidade, a rentabilidade e a capacidade de captação de investimento das empresas com que trabalhamos.',
      values: 'Valores',
      valuesText: 'Rigor analítico, integridade absoluta, impacto mensurável e parceria genuína — guiam cada engagement da PERSPECTIVE, do diagnóstico à monitoria contínua.',
    },
    perf: {
      label: 'O Programa Integrado',
      h2: 'Aureum Performance',
      sub: 'O programa mais completo de transformação empresarial — integrando inteligência de negócio, crescimento comercial, bancabilidade e preparação para investidores.',
      c1t: 'Inteligência de Negócio',
      c1d: 'Dashboards executivos, KPIs estratégicos e modelos de previsão que transformam dados em decisões de alto impacto.',
      c2t: 'Aceleração Comercial',
      c2d: 'Metodologias de crescimento de vendas, expansão de mercado e estratégias de go-to-market para mercados emergentes.',
      c3t: 'Bancabilidade',
      c3d: 'Construção do perfil financeiro e de crédito exigido por bancos e instituições para aprovação de financiamentos.',
      c4t: 'Investor Readiness',
      c4d: 'Estruturação completa para receber capital privado, venture capital ou investimento institucional.',
      cta: 'Iniciar com Diagnóstico Gratuito',
      badge: 'Programa Integrado · 12 Módulos · Implementação Acompanhada',
      badgeSub: 'Cada empresa recebe um plano personalizado com os módulos mais relevantes para a sua realidade e objetivos estratégicos.',
    },
    programs: {
      label: 'Módulos Especializados',
      h2: '12 Programas Especializados',
      sub: 'Cada módulo é um programa de transformação focado, com metodologia comprovada e resultados mensuráveis.',
      all: 'Todos',
      search: 'Pesquisar módulos…',
      details: 'Ver Detalhes Completos',
      outcomes: 'Resultados Esperados',
      duration: 'Duração estimada',
      request: 'Solicitar Módulo',
      noResults: 'Nenhum módulo encontrado',
      noResultsSub: 'Tente outro filtro ou termo de pesquisa',
    },
    sectors: {
      label: 'Expertise Sectorial',
      h2: 'Setores que Servimos',
      sub: 'Profundo conhecimento setorial em 6 indústrias críticas.',
    },
    model: {
      label: 'Como Trabalhamos',
      h2: 'Modelo Operacional em 5 Fases',
      sub: 'Um processo estruturado e rigoroso que garante transformação real — não apenas diagnósticos sem seguimento.',
    },
    simulator: {
      label: 'Ferramenta de Avaliação',
      h2: 'Simulador de Score Executivo',
      sub: 'Avalie a posição da sua empresa em 5 dimensões críticas e descubra a sua classe de bancabilidade em tempo real.',
      score: 'Score Final / 100',
      class: 'Classe de Bancabilidade',
      cta: 'Obter Diagnóstico Real',
      note: 'Este simulador fornece uma estimativa indicativa. O diagnóstico completo inclui análise documental e entrevistas com a equipa de gestão.',
      classA: 'Classe A',
      classADesc: 'Alta bancabilidade. Elegível para financiamentos e capital de investimento.',
      classB: 'Classe B',
      classBDesc: 'Bancabilidade média. Acesso condicionado a crédito com melhorias recomendadas.',
      classC: 'Classe C',
      classCDesc: 'Bancabilidade baixa. Transformação estrutural recomendada antes de avançar.',
    },
    cta: {
      label: 'Próximo Passo',
      h2a: 'Agende o Seu',
      h2b: 'Diagnóstico',
      h2c: 'Estratégico',
      body: 'Uma sessão de 90 minutos com a nossa equipa para avaliar a situação atual da sua empresa, identificar as principais oportunidades e desenhar um plano de intervenção personalizado.',
      btn1: 'Agendar Diagnóstico',
      btn2: 'Falar com Consultor',
      disclaimer: 'Sem compromisso · Confidencial · Resposta em 24h',
    },
    footer: {
      nav: 'Navegação',
      offices: 'Escritório',
      contact: 'Contactos',
      lisbon: 'Lisboa, Portugal',
      lisbonRole: 'Representante Aureum Capital para a Europa',
      lisbonAddr: 'Av. da Liberdade, Lisboa',
      email: 'E-mail',
      emailDiag: 'Diagnóstico',
      linkedin: 'LinkedIn',
      rights: 'Todos os direitos reservados.',
      aureum: 'Representante Aureum Capital para a Europa',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      program: 'Aureum Performance',
      modules: '12 Programmes',
      sectors: 'Sectors',
      model: 'Operating Model',
      simulator: 'Simulator',
      cta: 'Schedule Diagnosis',
    },
    hero: {
      label: 'Aureum Capital · Perspective',
      h1a: 'Accelerate Your Business',
      h1b: 'Performance',
      h1c: 'and Growth',
      sub: 'We transform companies into bankable, profitable entities ready to attract global capital. From strategy to execution, we deliver measurable results.',
      cta1: 'Schedule Diagnosis',
      cta2: 'Explore Modules',
      s1: 'Specialist Programmes',
      s2: 'Implementation Phases',
      s3: 'Years of Experience',
    },
    about: {
      label: 'About Us',
      h2a: 'Strategic Bridge Between Europe',
      h2b: 'and International Markets',
      body1: 'PERSPECTIVE is Aureum Capital\'s representative for Europe — focused on transforming company performance and positioning them for access to local and international capital from Lisbon.',
      body2: 'We combine market intelligence, world-class methodologies and a global capital network to deliver real transformation — not just recommendations.',
      vision: 'Vision',
      visionText: 'To be the leading European business acceleration platform bridging emerging markets, making our client companies global benchmarks of performance and attractiveness to international capital.',
      mission: 'Mission',
      missionText: 'To implement transformation programmes that increase the bankability, profitability and capital-raising capacity of the companies we work with.',
      values: 'Values',
      valuesText: 'Analytical rigour, absolute integrity, measurable impact and genuine partnership — guiding every PERSPECTIVE engagement from diagnosis to continuous monitoring.',
    },
    perf: {
      label: 'The Integrated Programme',
      h2: 'Aureum Performance',
      sub: 'The most comprehensive business transformation programme — integrating business intelligence, commercial growth, bankability and investor readiness.',
      c1t: 'Business Intelligence',
      c1d: 'Executive dashboards, strategic KPIs and forecast models that turn data into high-impact decisions.',
      c2t: 'Commercial Acceleration',
      c2d: 'Sales growth methodologies, market expansion and go-to-market strategies for emerging markets.',
      c3t: 'Bankability',
      c3d: 'Building the financial and credit profile required by banks and institutions for financing approval.',
      c4t: 'Investor Readiness',
      c4d: 'Full structuring to attract private equity, venture capital or institutional investment.',
      cta: 'Start with a Free Diagnosis',
      badge: 'Integrated Programme · 12 Modules · Guided Implementation',
      badgeSub: 'Each company receives a personalised plan with the most relevant modules for their reality and strategic objectives.',
    },
    programs: {
      label: 'Specialist Modules',
      h2: '12 Specialist Programmes',
      sub: 'Each module is a focused transformation programme with proven methodology and measurable results.',
      all: 'All',
      search: 'Search modules…',
      details: 'View Full Details',
      outcomes: 'Expected Outcomes',
      duration: 'Estimated duration',
      request: 'Request Module',
      noResults: 'No modules found',
      noResultsSub: 'Try a different filter or search term',
    },
    sectors: {
      label: 'Sector Expertise',
      h2: 'Sectors We Serve',
      sub: 'Deep sector knowledge across 6 critical industries.',
    },
    model: {
      label: 'How We Work',
      h2: '5-Phase Operating Model',
      sub: 'A structured and rigorous process that guarantees real transformation — not just recommendations without follow-through.',
    },
    simulator: {
      label: 'Assessment Tool',
      h2: 'Executive Score Simulator',
      sub: 'Evaluate your company\'s position across 5 critical dimensions and discover your bankability class in real time.',
      score: 'Final Score / 100',
      class: 'Bankability Class',
      cta: 'Get a Real Diagnosis',
      note: 'This simulator provides an indicative estimate. The full diagnosis includes document analysis and management team interviews.',
      classA: 'Class A',
      classADesc: 'High bankability. Eligible for financing and investment capital.',
      classB: 'Class B',
      classBDesc: 'Medium bankability. Conditional credit access with recommended improvements.',
      classC: 'Class C',
      classCDesc: 'Low bankability. Structural transformation recommended before proceeding.',
    },
    cta: {
      label: 'Next Step',
      h2a: 'Schedule Your',
      h2b: 'Strategic',
      h2c: 'Diagnosis',
      body: 'A 90-minute session with our team to assess your company\'s current situation, identify the main opportunities and design a personalised intervention plan.',
      btn1: 'Schedule Diagnosis',
      btn2: 'Talk to a Consultant',
      disclaimer: 'No commitment · Confidential · Response within 24h',
    },
    footer: {
      nav: 'Navigation',
      offices: 'Office',
      contact: 'Contacts',
      lisbon: 'Lisbon, Portugal',
      lisbonRole: 'Aureum Capital Representative for Europe',
      lisbonAddr: 'Av. da Liberdade, Lisbon',
      email: 'E-mail',
      emailDiag: 'Diagnosis',
      linkedin: 'LinkedIn',
      rights: 'All rights reserved.',
      aureum: 'Aureum Capital Representative for Europe',
    },
  },
}

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'pt', setLang: () => {} })
const useLang = () => useContext(LangCtx)

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = 'Todos' | 'Desenvolvimento' | 'Comercial' | 'Financeiro' | 'Financiamento' | 'Operacional'

interface Program {
  code: string
  title: { pt: string; en: string }
  category: Exclude<Category, 'Todos'>
  tagline: { pt: string; en: string }
  description: { pt: string; en: string }
  outcomes: { pt: string[]; en: string[] }
  duration: string
  icon: React.ReactNode
}

const PROGRAMS: Program[] = [
  {
    code: 'MOD-01', category: 'Desenvolvimento',
    title: { pt: 'Inteligência de Negócio', en: 'Business Intelligence' },
    tagline: { pt: 'Dados como vantagem competitiva', en: 'Data as competitive advantage' },
    description: { pt: 'Transforme dados operacionais e de mercado em decisões estratégicas com painéis executivos, KPIs críticos e modelos de previsão adaptados à realidade do mercado.', en: 'Transform operational and market data into strategic decisions with executive dashboards, critical KPIs and forecast models.' },
    outcomes: { pt: ['Dashboard executivo operacional', 'Sistema de KPIs estratégicos', 'Modelos de previsão de receita', 'Relatórios para conselho de administração'], en: ['Operational executive dashboard', 'Strategic KPI system', 'Revenue forecast models', 'Board reporting templates'] },
    duration: '6 sem / wks', icon: <ChartBar size={22} weight="duotone" />,
  },
  {
    code: 'MOD-02', category: 'Comercial',
    title: { pt: 'Estratégia Comercial', en: 'Commercial Strategy' },
    tagline: { pt: 'Crescimento estruturado de vendas', en: 'Structured sales growth' },
    description: { pt: 'Redesenhe a sua força comercial com metodologias de alto desempenho, segmentação de mercado e estratégias de entrada em novos mercados.', en: 'Redesign your commercial force with high-performance methodologies, market segmentation and market entry strategies.' },
    outcomes: { pt: ['Playbook comercial estruturado', 'Segmentação e ICP definidos', 'Pipeline e forecast de vendas', 'Formação da força de vendas'], en: ['Structured commercial playbook', 'Segmentation and ICP defined', 'Sales pipeline and forecast', 'Sales team training'] },
    duration: '8 sem / wks', icon: <TrendUp size={22} weight="duotone" />,
  },
  {
    code: 'MOD-03', category: 'Financeiro',
    title: { pt: 'Gestão Financeira Avançada', en: 'Advanced Financial Management' },
    tagline: { pt: 'Controlo e rentabilidade', en: 'Control and profitability' },
    description: { pt: 'Implementação de sistemas de controlo financeiro, otimização de margens, gestão de tesouraria e modelação financeira para decisões de investimento.', en: 'Implementation of financial control systems, margin optimisation, treasury management and financial modelling for investment decisions.' },
    outcomes: { pt: ['Modelo financeiro consolidado', 'Sistema de controlo de custos', 'Plano de otimização de margens', 'Relatórios financeiros IFRS-ready'], en: ['Consolidated financial model', 'Cost control system', 'Margin optimisation plan', 'IFRS-ready financial reports'] },
    duration: '8 sem / wks', icon: <CurrencyDollar size={22} weight="duotone" />,
  },
  {
    code: 'MOD-04', category: 'Financiamento',
    title: { pt: 'Bancabilidade & Crédito', en: 'Bankability & Credit' },
    tagline: { pt: 'Preparação para financiamento bancário', en: 'Preparation for bank financing' },
    description: { pt: 'Construa o perfil de crédito que os bancos exigem. Estruturação de dossier bancário, gestão de colaterais e negociação de linhas de crédito.', en: 'Build the credit profile banks require. Structuring bank dossiers, collateral management and negotiation of credit lines.' },
    outcomes: { pt: ['Dossier bancário completo', 'Scoring de crédito melhorado', 'Estratégia de colaterais', 'Relacionamento com bancos parceiros'], en: ['Complete bank dossier', 'Improved credit scoring', 'Collateral strategy', 'Partner bank relationships'] },
    duration: '10 sem / wks', icon: <Bank size={22} weight="duotone" />,
  },
  {
    code: 'MOD-05', category: 'Financiamento',
    title: { pt: 'Preparação para Investidores', en: 'Investor Readiness' },
    tagline: { pt: 'Capital pronto para captar', en: 'Ready to raise capital' },
    description: { pt: 'Estruture a sua empresa para receber capital privado, venture capital ou investimento institucional. Pitch deck, data room, valuation e due diligence.', en: 'Structure your company to receive private equity, venture capital or institutional investment. Pitch deck, data room, valuation and due diligence.' },
    outcomes: { pt: ['Pitch deck investor-ready', 'Data room estruturado', 'Modelo de valuation defensável', 'Estratégia de captação de capital'], en: ['Investor-ready pitch deck', 'Structured data room', 'Defensible valuation model', 'Capital raising strategy'] },
    duration: '12 sem / wks', icon: <Briefcase size={22} weight="duotone" />,
  },
  {
    code: 'MOD-06', category: 'Desenvolvimento',
    title: { pt: 'Liderança & Desenvolvimento Executivo', en: 'Leadership & Executive Development' },
    tagline: { pt: 'Líderes que entregam resultados', en: 'Leaders who deliver results' },
    description: { pt: 'Programa intensivo de desenvolvimento de competências de liderança executiva, gestão de equipas de alto desempenho e cultura organizacional orientada para resultados.', en: 'Intensive programme developing executive leadership skills, high-performance team management and a results-oriented organisational culture.' },
    outcomes: { pt: ['Assessment de liderança individual', 'Plano de desenvolvimento executivo', 'Framework de gestão de equipas', 'Cultura de performance instalada'], en: ['Individual leadership assessment', 'Executive development plan', 'Team management framework', 'Performance culture embedded'] },
    duration: '16 sem / wks', icon: <Users size={22} weight="duotone" />,
  },
  {
    code: 'MOD-07', category: 'Operacional',
    title: { pt: 'Transformação Digital', en: 'Digital Transformation' },
    tagline: { pt: 'Digitalização com impacto real', en: 'Digitalisation with real impact' },
    description: { pt: 'Roadmap de transformação digital pragmático: automação de processos, sistemas ERP, CRM, presença digital e capacitação das equipas.', en: 'Pragmatic digital transformation roadmap: process automation, ERP/CRM systems, digital presence and team upskilling.' },
    outcomes: { pt: ['Diagnóstico de maturidade digital', 'Roadmap de transformação', 'Implementação de ferramentas-chave', 'Formação digital das equipas'], en: ['Digital maturity diagnosis', 'Transformation roadmap', 'Key tool implementation', 'Digital team training'] },
    duration: '14 sem / wks', icon: <Lightbulb size={22} weight="duotone" />,
  },
  {
    code: 'MOD-08', category: 'Operacional',
    title: { pt: 'Excelência Operacional', en: 'Operational Excellence' },
    tagline: { pt: 'Processos que escalam', en: 'Processes that scale' },
    description: { pt: 'Mapeamento e redesenho de processos críticos com metodologias Lean e Six Sigma. Redução de desperdícios e aumento de produtividade.', en: 'Mapping and redesigning critical processes using Lean and Six Sigma methodologies. Waste reduction and productivity improvement.' },
    outcomes: { pt: ['Mapeamento de processos core', 'Plano de otimização operacional', 'Manual de procedimentos', 'Sistema de melhoria contínua'], en: ['Core process mapping', 'Operational optimisation plan', 'Procedures manual', 'Continuous improvement system'] },
    duration: '10 sem / wks', icon: <Gear size={22} weight="duotone" />,
  },
  {
    code: 'MOD-09', category: 'Comercial',
    title: { pt: 'Marketing & Posicionamento', en: 'Marketing & Positioning' },
    tagline: { pt: 'Marca que abre portas', en: 'A brand that opens doors' },
    description: { pt: 'Construção de posicionamento de marca premium, estratégia de marketing integrada e presença digital que gera credibilidade junto de parceiros e investidores.', en: 'Building premium brand positioning, integrated marketing strategy and digital presence that generates credibility with partners and investors.' },
    outcomes: { pt: ['Estratégia de marca definida', 'Plano de marketing integrado', 'Presença digital otimizada', 'Materiais de comunicação corporativa'], en: ['Brand strategy defined', 'Integrated marketing plan', 'Optimised digital presence', 'Corporate communication materials'] },
    duration: '8 sem / wks', icon: <Megaphone size={22} weight="duotone" />,
  },
  {
    code: 'MOD-10', category: 'Desenvolvimento',
    title: { pt: 'Governação Corporativa', en: 'Corporate Governance' },
    tagline: { pt: 'Estrutura que inspira confiança', en: 'Structure that inspires trust' },
    description: { pt: 'Implementação de boas práticas de governação: conselho de administração, compliance, gestão de risco, políticas internas e reporte institucional.', en: 'Implementation of good governance practices: board of directors, compliance, risk management, internal policies and institutional reporting.' },
    outcomes: { pt: ['Estrutura de governance formalizada', 'Políticas e procedimentos internos', 'Framework de gestão de risco', 'Relatório de sustentabilidade ESG'], en: ['Formalised governance structure', 'Internal policies and procedures', 'Risk management framework', 'ESG sustainability report'] },
    duration: '12 sem / wks', icon: <ShieldCheck size={22} weight="duotone" />,
  },
  {
    code: 'MOD-11', category: 'Comercial',
    title: { pt: 'Expansão de Mercado', en: 'Market Expansion' },
    tagline: { pt: 'Crescimento além das fronteiras', en: 'Growth beyond borders' },
    description: { pt: 'Estratégia de internacionalização e expansão geográfica. Análise de mercado, parceiros locais, estruturas legais e operacionalização.', en: 'Internationalisation and geographic expansion strategy. Market analysis, local partners, legal structures and operationalisation.' },
    outcomes: { pt: ['Análise de atratividade de mercados', 'Estratégia de entrada definida', 'Rede de parceiros locais', 'Plano de operacionalização'], en: ['Market attractiveness analysis', 'Market entry strategy defined', 'Local partner network', 'Operationalisation plan'] },
    duration: '10 sem / wks', icon: <Globe size={22} weight="duotone" />,
  },
  {
    code: 'MOD-12', category: 'Financiamento',
    title: { pt: 'Estruturação de Capital', en: 'Capital Structuring' },
    tagline: { pt: 'A estrutura certa para cada etapa', en: 'The right structure for each stage' },
    description: { pt: 'Otimização da estrutura de capital, acesso a instrumentos de financiamento alternativos, garantias internacionais e mercados de capitais.', en: 'Capital structure optimisation, access to alternative financing instruments, international guarantees and capital markets.' },
    outcomes: { pt: ['Análise da estrutura de capital', 'Mapeamento de fontes de financiamento', 'Dossier para garantias internacionais', 'Acesso a instrumentos alternativos'], en: ['Capital structure analysis', 'Financing source mapping', 'International guarantee dossier', 'Access to alternative instruments'] },
    duration: '12 sem / wks', icon: <Buildings size={22} weight="duotone" />,
  },
]

const SECTORS = [
  { labelPt: 'Banca & Serviços Financeiros', labelEn: 'Banking & Financial Services', icon: <Bank size={32} weight="duotone" /> },
  { labelPt: 'Petróleo & Gás', labelEn: 'Oil & Gas', icon: <Factory size={32} weight="duotone" /> },
  { labelPt: 'Indústria & Manufactura', labelEn: 'Industry & Manufacturing', icon: <Gear size={32} weight="duotone" /> },
  { labelPt: 'Telecomunicações', labelEn: 'Telecommunications', icon: <WifiHigh size={32} weight="duotone" /> },
  { labelPt: 'Retalho & FMCG', labelEn: 'Retail & FMCG', icon: <ShoppingCart size={32} weight="duotone" /> },
  { labelPt: 'Infraestruturas & Construção', labelEn: 'Infrastructure & Construction', icon: <Hammer size={32} weight="duotone" /> },
]

const PHASES = {
  pt: [
    { num: '01', label: 'Diagnóstico Integrado', desc: 'Avaliação profunda da situação atual — financeira, comercial, operacional e estratégica — com benchmarking sectorial.' },
    { num: '02', label: 'Priorização Estratégica', desc: 'Identificação das alavancas de maior impacto e elaboração de um roadmap priorizado por urgência e retorno esperado.' },
    { num: '03', label: 'Programas Especializados', desc: 'Ativação dos módulos mais relevantes para a realidade da empresa, com equipa dedicada e metodologia comprovada.' },
    { num: '04', label: 'Implementação Acompanhada', desc: 'Execução lado a lado com as equipas do cliente, garantindo transferência de conhecimento e adaptação contínua.' },
    { num: '05', label: 'Monitoria Contínua', desc: 'Dashboard de acompanhamento pós-implementação com revisões periódicas e suporte permanente para resultados duradouros.' },
  ],
  en: [
    { num: '01', label: 'Integrated Diagnosis', desc: 'In-depth assessment of the current situation — financial, commercial, operational and strategic — with sector benchmarking.' },
    { num: '02', label: 'Strategic Prioritisation', desc: 'Identification of highest-impact levers and creation of a roadmap prioritised by urgency and expected return.' },
    { num: '03', label: 'Specialist Programmes', desc: 'Activation of the most relevant modules for the company\'s reality, with a dedicated team and proven methodology.' },
    { num: '04', label: 'Guided Implementation', desc: 'Side-by-side execution with client teams, ensuring knowledge transfer and continuous adaptation.' },
    { num: '05', label: 'Continuous Monitoring', desc: 'Post-implementation dashboard with periodic reviews and permanent support to ensure lasting results.' },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#a8863a] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{children}</p>
}

function GoldLine() {
  return <div className="w-12 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#d9bc6e] mb-6" />
}

const catColors: Record<string, { text: string; bg: string }> = {
  Desenvolvimento: { text: '#16a34a', bg: '#dcfce7' },
  Comercial: { text: '#2563eb', bg: '#dbeafe' },
  Financeiro: { text: '#d97706', bg: '#fef3c7' },
  Financiamento: { text: '#a8863a', bg: '#fef9ec' },
  Operacional: { text: '#7c3aed', bg: '#ede9fe' },
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProgramModal({ program, onClose }: { program: Program; onClose: () => void }) {
  const { lang } = useLang()
  const tr = t[lang].programs

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [onClose])

  const cc = catColors[program.category]

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm" onClick={onClose}>
      <div className="modal-panel bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-navy-900 px-7 py-5 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"><X size={20} /></button>
          <div className="flex items-start gap-3">
            <div className="bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-lg p-2 text-[#c9a84c] mt-0.5 shrink-0">{program.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-[#c9a84c] bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded px-1.5 py-0.5">{program.code}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: cc.text, backgroundColor: `${cc.bg}33` }}>{program.category}</span>
              </div>
              <h3 className="text-white font-semibold text-xl leading-tight">{program.title[lang]}</h3>
              <p className="text-[#c9a84c] text-sm mt-1 italic">{program.tagline[lang]}</p>
            </div>
          </div>
        </div>
        <div className="px-7 py-5">
          <p className="text-slate-600 text-sm leading-relaxed mb-5">{program.description[lang]}</p>
          <p className="text-xs font-semibold text-navy-800 uppercase tracking-widest mb-3">{tr.outcomes}</p>
          <ul className="space-y-2 mb-5">
            {program.outcomes[lang].map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle size={16} weight="fill" className="text-[#c9a84c] mt-0.5 shrink-0" />{o}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div>
              <p className="text-xs text-slate-400">{tr.duration}</p>
              <p className="font-semibold text-navy-800 text-sm">{program.duration}</p>
            </div>
            <button className="bg-[#c9a84c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#a8863a] transition-colors">{tr.request}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const { lang, setLang } = useLang()
  const tr = t[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const navLinks = [
    { label: tr.about, href: '#quem-somos' },
    { label: tr.program, href: '#aureum-performance' },
    { label: tr.modules, href: '#programas' },
    { label: tr.sectors, href: '#setores' },
    { label: tr.model, href: '#modelo' },
    { label: tr.simulator, href: '#simulador' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex flex-col leading-none shrink-0">
          <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>PERSPECTIVE</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors duration-150 hover:text-[#c9a84c] ${scrolled ? 'text-navy-700' : 'text-white/90'}`}>{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className={`text-xs font-semibold px-2.5 py-1 rounded border transition-colors ${scrolled ? 'border-slate-200 text-navy-700 hover:border-[#c9a84c] hover:text-[#c9a84c]' : 'border-white/30 text-white/80 hover:border-[#c9a84c] hover:text-[#c9a84c]'}`}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <a href="#diagnostico" className="hidden md:inline-flex items-center gap-1.5 bg-[#c9a84c] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#a8863a] transition-colors">
            {tr.cta}
          </a>
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <X size={20} className={scrolled ? 'text-navy-800' : 'text-white'} />
              : <List size={20} className={scrolled ? 'text-navy-800' : 'text-white'} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-lg">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="block text-navy-700 hover:text-[#c9a84c] py-2.5 text-sm font-medium border-b border-slate-50 last:border-0 transition-colors" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#diagnostico" className="block bg-[#c9a84c] text-white text-sm font-semibold px-4 py-3 rounded-lg text-center mt-3" onClick={() => setMenuOpen(false)}>{tr.cta}</a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&h=1000&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">{tr.label}</p>
          <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] mb-6">
            {lang === 'pt' ? (
              <>Acelere a <span className="text-gold-gradient">Performance</span><br />e o Crescimento do Seu Negócio</>
            ) : (
              <>Accelerate Your Business<br /><span className="text-gold-gradient">Performance</span> and Growth</>
            )}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">{tr.sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#a8863a] transition-colors text-sm">
              {tr.cta1} <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#programas" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-sm">
              {tr.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              ['12+', tr.s1],
              ['5', tr.s2],
              ['10+', tr.s3],
            ].map(([n, l]) => (
              <div key={l} className="flex items-center gap-3">
                <span className="font-bold text-3xl text-[#c9a84c]">{n}</span>
                <span className="text-white/60 text-sm max-w-[100px] leading-snug">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom brand tag */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-950/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-white/50 text-xs font-medium tracking-wide">Business Performance & Growth · An Aureum Capital Company</p>
          <p className="text-[#c9a84c] text-xs font-medium tracking-wide hidden sm:block">{lang === 'pt' ? 'Representante Aureum Capital para a Europa · Lisboa' : 'Aureum Capital Representative for Europe · Lisbon'}</p>
        </div>
      </div>
    </section>
  )
}

// ─── Quem Somos ───────────────────────────────────────────────────────────────

function QuemSomos() {
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="quem-somos" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>{tr.label}</SectionLabel>
            <GoldLine />
            <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 leading-tight mb-6">
              {tr.h2a}<br /><span className="text-gold-gradient">{tr.h2b}</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">{tr.body1}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{tr.body2}</p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Quotes size={20} weight="fill" />, label: tr.vision, text: tr.visionText },
              { icon: <TrendUp size={20} weight="duotone" />, label: tr.mission, text: tr.missionText },
              { icon: <ShieldCheck size={20} weight="duotone" />, label: tr.values, text: tr.valuesText },
            ].map(item => (
              <div key={item.label} className="card-hover bg-cream-50 border border-[#c9a84c]/20 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#c9a84c] mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1.5 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Aureum Performance ───────────────────────────────────────────────────────

function AureumPerformance() {
  const { lang } = useLang()
  const tr = t[lang].perf

  const cards = [
    { icon: <ChartBar size={28} weight="duotone" />, title: tr.c1t, desc: tr.c1d },
    { icon: <TrendUp size={28} weight="duotone" />, title: tr.c2t, desc: tr.c2d },
    { icon: <Bank size={28} weight="duotone" />, title: tr.c3t, desc: tr.c3d },
    { icon: <Briefcase size={28} weight="duotone" />, title: tr.c4t, desc: tr.c4d },
  ]

  return (
    <section id="aureum-performance" className="section-pad bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>{tr.label}</SectionLabel>
          <GoldLine />
          <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 mb-4">{tr.h2}</h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">{tr.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map(c => (
            <div key={c.title} className="card-hover bg-white border border-[#c9a84c]/15 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-4">{c.icon}</div>
              <h3 className="font-semibold text-navy-900 mb-2 text-base">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <p className="font-bold text-white text-lg mb-2">{tr.badge}</p>
            <p className="text-white/60 text-sm">{tr.badgeSub}</p>
          </div>
          <a href="#diagnostico" className="shrink-0 inline-flex items-center gap-2 bg-[#c9a84c] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a8863a] transition-colors text-sm whitespace-nowrap">
            {tr.cta} <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── 12 Programas ─────────────────────────────────────────────────────────────

function Programas() {
  const { lang } = useLang()
  const tr = t[lang].programs

  const CATS: Category[] = ['Todos', 'Desenvolvimento', 'Comercial', 'Financeiro', 'Financiamento', 'Operacional']
  const [activeCat, setActiveCat] = useState<Category>('Todos')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Program | null>(null)

  const filtered = PROGRAMS.filter(p => {
    const matchCat = activeCat === 'Todos' || p.category === activeCat
    const matchSearch = search === '' ||
      p.title[lang].toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section id="programas" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>{tr.label}</SectionLabel>
          <GoldLine />
          <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 mb-4">{tr.h2}</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{tr.sub}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2 flex-1">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                  activeCat === c
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'border-slate-200 text-slate-600 hover:border-[#c9a84c] hover:text-[#a8863a]'
                }`}
              >{c === 'Todos' ? tr.all : c}</button>
            ))}
          </div>
          <div className="relative w-full sm:w-56 shrink-0">
            <MagnifyingGlass size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={tr.search}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm placeholder-slate-400 rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => {
            const cc = catColors[p.category]
            return (
              <div key={p.code} className="card-hover bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md flex flex-col overflow-hidden">
                {/* Card header strip */}
                <div className="bg-navy-900 px-5 pt-5 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-lg p-2 text-[#c9a84c]">{p.icon}</div>
                    <span className="font-mono text-[10px] bg-white/10 text-white/70 border border-white/20 rounded px-2 py-1">{p.code}</span>
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug">{p.title[lang]}</h3>
                  <p className="text-[#c9a84c] text-xs italic mt-1">{p.tagline[lang]}</p>
                </div>
                {/* Card body */}
                <div className="px-5 py-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: cc.text, backgroundColor: cc.bg }}>{p.category}</span>
                    <span className="text-xs text-slate-400 font-medium">{p.duration}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">{p.description[lang]}</p>
                  <button
                    onClick={() => setSelected(p)}
                    className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#a8863a] border border-[#c9a84c]/30 rounded-lg px-3 py-2.5 hover:bg-[#c9a84c]/8 hover:border-[#c9a84c] transition-colors font-semibold group"
                  >
                    {tr.details} <CaretRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-16 text-slate-400">
              <MagnifyingGlass size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">{tr.noResults}</p>
              <p className="text-sm mt-1">{tr.noResultsSub}</p>
            </div>
          )}
        </div>
      </div>
      {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

// ─── Setores ──────────────────────────────────────────────────────────────────

function Setores() {
  const { lang } = useLang()
  const tr = t[lang].sectors

  return (
    <section id="setores" className="section-pad bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>{tr.label}</SectionLabel>
          <GoldLine />
          <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 mb-4">{tr.h2}</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{tr.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SECTORS.map(s => (
            <div key={s.labelPt} className="card-hover bg-white border border-[#c9a84c]/15 rounded-xl p-6 flex flex-col items-center text-center gap-3">
              <div className="text-[#c9a84c]">{s.icon}</div>
              <p className="font-medium text-navy-800 text-sm">{lang === 'pt' ? s.labelPt : s.labelEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Modelo Operacional ───────────────────────────────────────────────────────

function ModeloOperacional() {
  const { lang } = useLang()
  const tr = t[lang].model
  const phases = PHASES[lang]

  return (
    <section id="modelo" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>{tr.label}</SectionLabel>
          <GoldLine />
          <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 mb-4">{tr.h2}</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{tr.sub}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 relative">
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#c9a84c]/10 via-[#c9a84c]/40 to-[#c9a84c]/10 hidden lg:block" />
          {phases.map((ph, i) => (
            <div key={ph.num} className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#c9a84c] bg-white flex items-center justify-center mb-4 shadow-sm">
                <span className="font-mono text-[#c9a84c] text-sm font-bold">{ph.num}</span>
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-2 leading-snug">{ph.label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{ph.desc}</p>
              {i < phases.length - 1 && <div className="lg:hidden w-px h-8 bg-[#c9a84c]/30 my-2" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Simulador ────────────────────────────────────────────────────────────────

function Simulador() {
  const { lang } = useLang()
  const tr = t[lang].simulator
  const [scores, setScores] = useState({ Comercial: 60, Financeiro: 50, Operacional: 55, Digital: 40, Governação: 65 })

  const total = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 5)

  const getClass = (s: number) => {
    if (s >= 75) return { label: tr.classA, desc: tr.classADesc, color: '#16a34a', bg: '#dcfce7' }
    if (s >= 50) return { label: tr.classB, desc: tr.classBDesc, color: '#d97706', bg: '#fef3c7' }
    return { label: tr.classC, desc: tr.classCDesc, color: '#dc2626', bg: '#fee2e2' }
  }

  const cls = getClass(total)

  const sliderKeys = lang === 'pt'
    ? ['Comercial', 'Financeiro', 'Operacional', 'Digital', 'Governação']
    : ['Commercial', 'Financial', 'Operational', 'Digital', 'Governance']

  const scoreKeys = Object.keys(scores) as Array<keyof typeof scores>

  return (
    <section id="simulador" className="section-pad bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>{tr.label}</SectionLabel>
          <GoldLine />
          <h2 className="font-bold text-4xl lg:text-5xl text-navy-900 mb-4">{tr.h2}</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{tr.sub}</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-2xl shadow-sm p-8">
          <div className="space-y-6 mb-8">
            {scoreKeys.map((key, i) => (
              <div key={key}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-navy-800">{sliderKeys[i]}</span>
                  <span className="font-mono text-[#c9a84c] text-sm font-bold w-8 text-right">{scores[key]}</span>
                </div>
                <input
                  type="range" min={0} max={100} value={scores[key]}
                  onChange={e => setScores(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                />
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-bold text-6xl" style={{ color: cls.color }}>{total}</p>
                  <p className="text-slate-400 text-xs mt-1">{tr.score}</p>
                </div>
                <div className="h-14 w-px bg-slate-100" />
                <div>
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-widest font-semibold">{tr.class}</p>
                  <span className="inline-block font-bold text-xl px-3 py-1 rounded-lg" style={{ color: cls.color, backgroundColor: cls.bg }}>{cls.label}</span>
                  <p className="text-slate-500 text-xs mt-2 max-w-[200px] leading-relaxed">{cls.desc}</p>
                </div>
              </div>
              <a href="#diagnostico" className="bg-[#c9a84c] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#a8863a] transition-colors whitespace-nowrap flex items-center gap-2">
                {tr.cta} <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-400 text-xs mt-4 max-w-xl mx-auto">{tr.note}</p>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  const { lang } = useLang()
  const tr = t[lang].cta

  return (
    <section id="diagnostico" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&h=700&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="cta-overlay absolute inset-0" />
      </div>
      <div className="relative section-pad">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>{tr.label}</SectionLabel>
          <h2 className="font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight">
            {tr.h2a} <span className="text-gold-gradient">{tr.h2b}</span> {tr.h2c}
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">{tr.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="mailto:diagnostico@perspective.pt" className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-white font-semibold px-7 py-4 rounded-lg hover:bg-[#a8863a] transition-colors">
              <Envelope size={18} /> {tr.btn1}
            </a>
            <a href="tel:+351000000000" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              {tr.btn2}
            </a>
          </div>
          <p className="text-white/40 text-sm">{tr.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer
  const year = new Date().getFullYear()

  const navLinks = [
    { label: t[lang].nav.about, href: '#quem-somos' },
    { label: t[lang].nav.program, href: '#aureum-performance' },
    { label: t[lang].nav.modules, href: '#programas' },
    { label: t[lang].nav.sectors, href: '#setores' },
    { label: t[lang].nav.model, href: '#modelo' },
    { label: t[lang].nav.simulator, href: '#simulador' },
  ]

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-xl mb-1">PERSPECTIVE</p>
            <p className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase mb-1">Business Performance & Growth</p>
            <p className="text-white/30 text-[10px] tracking-wide mb-4">{tr.aureum}</p>
            <p className="text-white/40 text-xs leading-relaxed">Lisboa, Portugal</p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">{tr.nav}</p>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">{tr.offices}</p>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#c9a84c] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#c9a84c] text-sm font-semibold">{tr.lisbon}</p>
                <p className="text-white/40 text-xs mt-0.5">{tr.lisbonRole}</p>
                <p className="text-white/30 text-xs mt-0.5">{tr.lisbonAddr}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-4">{tr.contact}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Envelope size={14} className="text-[#c9a84c] shrink-0" />
                <a href="mailto:info@perspective.pt" className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors">info@perspective.pt</a>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={14} className="text-[#c9a84c] shrink-0" />
                <a href="mailto:diagnostico@perspective.pt" className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors">diagnostico@perspective.pt</a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinLogo size={14} className="text-[#c9a84c] shrink-0" />
                <a href="#" className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors">PERSPECTIVE · Aureum Capital</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">© {year} PERSPECTIVE — Business Performance & Growth. {tr.rights}</p>
          <p className="text-white/25 text-xs">An Aureum Capital Company</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>('pt')

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <Hero />
        <QuemSomos />
        <AureumPerformance />
        <Programas />
        <Setores />
        <ModeloOperacional />
        <Simulador />
        <CTA />
        <Footer />
      </div>
    </LangCtx.Provider>
  )
}
