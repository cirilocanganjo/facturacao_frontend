import {
  faArrowRight,
  faBell,
  faBolt,
  faChartLine,
  faCheck,
  faFileInvoiceDollar,
  faGlobe,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stats = [
  { value: "12,4k", label: "faturas processadas" },
  { value: "98,7%", label: "taxa de pagamento" },
  { value: "Kz 4,8M", label: "em faturamento" },
];

const brandLogos = ["Asteria", "Nexa", "Kwanda", "Bengo", "Atlas"];

const features = [
  {
    icon: faFileInvoiceDollar,
    title: "Emissão inteligente",
    description:
      "Crie facturas, recibos e relatórios com rapidez, sem perder controlo da rotina financeira da empresa.",
  },
  {
    icon: faChartLine,
    title: "Cobrança em tempo real",
    description:
      "Acompanhe vencimentos, receitas e indicadores de desempenho em um painel executivo do mercado angolano.",
  },
  {
    icon: faShieldHalved,
    title: "Segurança institucional",
    description:
      "Proteja dados fiscais e mantenha processos alinhados às melhores práticas de compliance e controlo interno.",
  },
  {
    icon: faBell,
    title: "Alertas estratégicos",
    description:
      "Receba notificações sobre pagamentos, atrasos e oportunidades de melhoria na gestão financeira.",
  },
  {
    icon: faBolt,
    title: "Automação operacional",
    description:
      "Elimine tarefas manuais e acelere a rotina com maior eficiência, previsibilidade e controlo.",
  },
  {
    icon: faGlobe,
    title: "Operação nacional",
    description:
      "Gerencie clientes, filiais e canais em Angola com visibilidade centralizada e organização total.",
  },
];

const benefits = [
  "Dashboard executivo com visão completa do negócio angolano",
  "Fluxo de cobrança adaptado ao contexto empresarial local",
  "Controle financeiro em uma plataforma integrada e moderna",
  "Relatórios que apoiam decisões rápidas e mais seguras",
];

const plans = [
  {
    name: "Essentials",
    price: "Kz 29.900",
    description: "Para negócios que precisam profissionalizar a faturação e a gestão financeira local.",
    popular: false,
    items: ["Emissão de faturas", "Cobrança básica", "Relatórios simples"],
  },
  {
    name: "Growth",
    price: "Kz 59.900",
    description: "Para empresas em expansão e necessidade de controlo financeiro mais avançado.",
    popular: true,
    items: ["Tudo do Essentials", "Automação de cobranças", "Alertas inteligentes"],
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizações que exigem escalabilidade, suporte e integrações específicas.",
    popular: false,
    items: ["SLA premium", "Integrações customizadas", "Suporte dedicado"],
  },
];

const steps = [
  "Cadastre clientes, produtos e regras de faturação da sua operação.",
  "Automatize a emissão, cobrança e acompanhamento de pagamentos.",
  "Monitore indicadores com relatórios estratégicos e decisões em tempo real.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-8 rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.55)] backdrop-blur-xl">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex min-w-[160px] items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                <span className="text-lg font-black tracking-tight text-white">Y</span>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                  YETU
                </p>
                <p className="text-xs text-slate-300">Finance</p>
              </div>
            </div>

            <div className="hidden flex-1 items-center justify-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#solucoes" className="transition hover:text-white">
                Soluções
              </a>
              <a href="#funcionalidades" className="transition hover:text-white">
                Funcionalidades
              </a>
              <a href="#precos" className="transition hover:text-white">
                Preços
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Login
              </a>
              <a
                href="/register"
                className="rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.25)] transition hover:translate-y-[-1px]"
              >
                Criar conta
              </a>
            </div>
          </nav>
        </header>

        <section className="grid items-center gap-12 pb-12 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-200">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-sm" />
              Sistema de faturação inteligente para Angola
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-white md:text-5xl lg:text-6xl">
              O sistema financeiro que impulsiona o crescimento da sua empresa em Angola.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Centralize cobranças, automatize emissões e acompanhe a saúde financeira do seu negócio
              com mais precisão, produtividade e controlo para crescer com confiança.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.25)] transition hover:translate-y-[-1px]">
                Começar agora
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
                Ver demonstração
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-10 right-4 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.7)]">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                    Fluxo financeiro
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-white">Kz 148.240</h2>
                </div>
                <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                  <FontAwesomeIcon icon={faChartLine} className="text-xl" />
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/75 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Faturas emitidas</span>
                  <span className="font-semibold text-white">236</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-2.5 w-[78%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-500" />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
                    <p className="text-xs text-slate-400">Pagamentos</p>
                    <p className="mt-2 text-xl font-bold text-blue-300">92%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
                    <p className="text-xs text-slate-400">Atrasos</p>
                    <p className="mt-2 text-xl font-bold text-amber-300">4,8%</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                <div className="flex items-center justify-between gap-3">
                  <span>Receita acumulada</span>
                  <span className="font-bold">+18,4%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-slate-400 md:gap-12">
            {brandLogos.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>

        <section id="solucoes" className="py-20">
          <div className="mb-12 flex flex-col gap-4 text-center md:items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Soluções
            </p>
            <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl">
              Uma plataforma financeira para decisões mais rápidas e resultados mais consistentes.
            </h2>
          </div>

          <div id="funcionalidades" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:border-emerald-400/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-500 text-lg text-slate-950">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-base leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20 pt-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Por que escolher a YETU
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white">
                Estrutura premium para empresas que querem crescer com controle.
              </h3>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                    </div>
                    <p className="text-slate-200">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-500/10 p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Performance</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">+42% em eficiência</h3>
                </div>
                <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                  <FontAwesomeIcon icon={faUsers} className="text-xl" />
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Receita líquida</span>
                    <span className="font-semibold text-white">84%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-2.5 w-[84%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Produtividade</span>
                    <span className="font-semibold text-white">91%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-2.5 w-[91%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Segurança</span>
                    <span className="font-semibold text-white">99.9%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-2.5 w-[99%] rounded-full bg-gradient-to-r from-violet-400 to-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="py-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Planos
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Escale com o plano que combina com o seu momento.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map(({ name, price, description, popular, items }) => (
              <div
                key={name}
                className={`rounded-[2rem] border p-6 ${
                  popular
                    ? "border-emerald-400/50 bg-gradient-to-b from-emerald-500/10 to-slate-900 shadow-[0_30px_70px_rgba(16,185,129,0.18)]"
                    : "border-white/10 bg-slate-900/80"
                }`}
              >
                {popular && (
                  <span className="mb-6 inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Mais popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{price}</span>
                  {price !== "Custom" && <span className="pb-2 text-slate-400">/mês</span>}
                </div>
                <p className="mt-4 text-slate-300">{description}</p>

                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200">
                      <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] text-emerald-300">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full px-5 py-3 font-semibold ${
                    popular
                      ? "bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-500 text-slate-950"
                      : "border border-slate-700 bg-slate-950 text-white hover:border-slate-500"
                  }`}
                >
                  {popular ? "Escolher Growth" : "Falar com vendas"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-8 pt-20">
          <div className="rounded-[2rem] border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-slate-900 to-cyan-500/15 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              YETU Finance
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Estruture uma operação financeira mais inteligente, moderna e preparada para Angola.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Desenvolvido para empresas que valorizam simplicidade, controlo e crescimento sem perder
              agilidade no dia a dia de operação local.
            </p>
            <a
              href="/admin"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Acessar painel admin
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </a>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30">
                  <span className="text-base font-black tracking-tight text-slate-950">Y</span>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    YETU
                  </p>
                  <p className="text-xs text-slate-300">Finance</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Plataforma de faturação e gestão financeira para empresas angolanas que querem controlar
                operações com mais conforto, visão e eficiência.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                Empresa
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li><a href="#solucoes" className="hover:text-white">Soluções</a></li>
                <li><a href="#funcionalidades" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#precos" className="hover:text-white">Planos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                Recursos
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li><a href="/login" className="hover:text-white">Login</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Suporte</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                Contato
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>contato@yetu.finance</li>
                <li>+244 923 000 000</li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 YETU Finance. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-300">Privacidade</a>
              <a href="#" className="hover:text-slate-300">Termos</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
