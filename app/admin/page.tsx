import {
  faArrowRight,
  faBell,
  faBriefcase,
  faBuilding,
  faChartLine,
  faCheck,
  faChevronDown,
  faCreditCard,
  faFileInvoiceDollar,
  faGaugeHigh,
  faGear,
  faHouse,
  faReceipt,
  faSearch,
  faShieldHalved,
  faUser,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const summaryCards = [
  { label: "Receita total", value: "R$ 148.240", trend: "+12.8%", tone: "emerald" },
  { label: "Pagamentos", value: "R$ 96.740", trend: "+8.4%", tone: "cyan" },
  { label: "Atrasos", value: "R$ 14.400", trend: "-3.1%", tone: "amber" },
  { label: "Clientes ativos", value: "2.486", trend: "+9.2%", tone: "violet" },
];

const menuItems = [
  { label: "Overview", icon: faHouse, active: true },
  { label: "Empresas", icon: faBuilding },
  { label: "Faturação", icon: faFileInvoiceDollar },
  { label: "Pagamentos", icon: faWallet },
  { label: "Clientes", icon: faUsers },
  { label: "Configurações", icon: faGear },
];

const pendingInvoices = [
  { name: "Alpha Commerce", value: "R$ 8.450", due: "2 dias", status: "Pendente" },
  { name: "North Studio", value: "R$ 4.980", due: "Hoje", status: "Atenção" },
  { name: "YETU Pro", value: "R$ 12.300", due: "4 dias", status: "Pendente" },
];

const customerRows = [
  { name: "Alpha Commerce", type: "Consultoria", revenue: "R$ 48K", status: "Ativo" },
  { name: "North Studio", type: "Design", revenue: "R$ 31K", status: "Ativo" },
  { name: "YETU Pro", type: "Software", revenue: "R$ 64K", status: "Em análise" },
  { name: "Nova Porto", type: "Logística", revenue: "R$ 22K", status: "Ativo" },
];

const activity = [
  "Nova fatura emitida para 12 clientes",
  "Pagamento aprovado da operação North Studio",
  "Relatório de cobrança enviado à direção",
  "Empresa Nova Porto registada no sistema",
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-[1700px] gap-6 p-4 lg:p-6">
        <aside className="hidden w-72 shrink-0 rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.7)] lg:flex lg:flex-col">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30">
              <span className="text-lg font-black tracking-tight text-slate-950">Y</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                YETU
              </p>
              <p className="text-xs text-slate-300">Finance</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map(({ label, icon, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  active
                    ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 text-white ring-1 ring-emerald-400/30"
                    : "text-slate-300 hover:bg-slate-800/90 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={icon} className="w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-[1.5rem] border border-emerald-500/25 bg-emerald-500/10 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-200">
              <FontAwesomeIcon icon={faShieldHalved} />
              Segurança ativa
            </div>
            <p className="text-xs leading-6 text-slate-300">
              Todas as operações estão protegidas e sincronizadas com as regras do sistema.
            </p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.5)] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Painel administrativo
              </p>
              <h1 className="mt-2 text-3xl font-black text-white">Overview financeiro</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                <FontAwesomeIcon icon={faSearch} className="text-slate-500" />
                <span>Pesquisar</span>
              </div>

              <button className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500">
                Exportar
              </button>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-200">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-slate-950">
                  3
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/60 px-2 py-1.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-500 text-sm font-bold text-slate-950">
                  AD
                </div>
                <div className="hidden text-left md:block">
                  <p className="text-sm font-semibold text-white">Admin</p>
                  <p className="text-xs text-slate-400">Gestor</p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-slate-400" />
              </div>
            </div>
          </header>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <div key={card.label} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{card.label}</p>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      card.tone === "emerald"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : card.tone === "cyan"
                          ? "bg-cyan-500/15 text-cyan-300"
                          : card.tone === "amber"
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-violet-500/15 text-violet-300"
                    }`}
                  >
                    {card.trend}
                  </span>
                </div>
                <p className="mt-5 text-3xl font-black text-white">{card.value}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Receita mensal
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">R$ 148.240</h2>
                </div>
                <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                  <FontAwesomeIcon icon={faChartLine} className="text-xl" />
                </div>
              </div>

              <div className="grid grid-cols-7 items-end gap-3">
                {[28, 42, 34, 58, 61, 84, 100].map((height, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[1rem] bg-gradient-to-t from-emerald-400 to-cyan-500"
                      style={{ height: `${height}px` }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Status
                  </p>
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-emerald-300" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Faturas emitidas</span>
                      <span className="text-xl font-bold text-white">236</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Pagamentos</span>
                      <span className="text-xl font-bold text-emerald-300">92%</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Atrasos</span>
                      <span className="text-xl font-bold text-amber-300">4,8%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-200">Fluxo saudável</p>
                    <p className="mt-2 text-3xl font-black text-white">+18.4%</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Faturas pendentes</h3>
                <button className="text-sm font-medium text-emerald-300">Ver tudo</button>
              </div>

              <div className="space-y-4">
                {pendingInvoices.map((invoice) => (
                  <div
                    key={invoice.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-300">
                        <FontAwesomeIcon icon={faReceipt} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{invoice.name}</p>
                        <p className="text-sm text-slate-400">Vence em {invoice.due}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-white">{invoice.value}</p>
                      <p className="text-xs font-medium text-amber-300">{invoice.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Atividade</h3>
                <FontAwesomeIcon icon={faArrowRight} className="text-emerald-300" />
              </div>

              <div className="space-y-4">
                {activity.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Clientes</h3>
                <button className="text-sm font-medium text-emerald-300">Adicionar</button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="min-w-full text-left text-sm text-slate-200">
                  <thead className="bg-slate-950/80 text-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-medium">Empresa</th>
                      <th className="px-4 py-3 font-medium">Tipo</th>
                      <th className="px-4 py-3 font-medium">Receita</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerRows.map((customer) => (
                      <tr key={customer.name} className="border-t border-white/10 bg-slate-900/70">
                        <td className="px-4 py-3 font-medium text-white">{customer.name}</td>
                        <td className="px-4 py-3 text-slate-300">{customer.type}</td>
                        <td className="px-4 py-3 text-slate-200">{customer.revenue}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                              customer.status === "Ativo"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "bg-amber-500/15 text-amber-300"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Operações</h3>
                <FontAwesomeIcon icon={faBriefcase} className="text-emerald-300" />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Cobrança</span>
                    <span className="font-bold text-white">86%</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Financeiro</span>
                    <span className="font-bold text-white">94%</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Compliance</span>
                    <span className="font-bold text-white">99%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-slate-400">Clientes</p>
                <FontAwesomeIcon icon={faUsers} className="text-emerald-300" />
              </div>
              <p className="mt-4 text-3xl font-black text-white">2.486</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-slate-400">Pagamentos</p>
                <FontAwesomeIcon icon={faCreditCard} className="text-cyan-300" />
              </div>
              <p className="mt-4 text-3xl font-black text-white">1.842</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-slate-400">Faturas</p>
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-violet-300" />
              </div>
              <p className="mt-4 text-3xl font-black text-white">4.126</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
