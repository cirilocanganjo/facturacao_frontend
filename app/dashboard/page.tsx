import {
  faArrowUpRightFromSquare,
  faBell,
  faChartLine,
  faCreditCard,
  faFileInvoiceDollar,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const summaryCards = [
  { label: "Receita total", value: "R$ 148.240", trend: "+12.8%", tone: "emerald" },
  { label: "Pagamentos", value: "R$ 96.740", trend: "+8.4%", tone: "cyan" },
  { label: "Atrasos", value: "R$ 14.400", trend: "-3.1%", tone: "amber" },
  { label: "Clientes ativos", value: "2.486", trend: "+9.2%", tone: "violet" },
];

const invoices = [
  { name: "YETU Pro", status: "Pago", value: "R$ 7.840", date: "12 Jun" },
  { name: "Alpha Commerce", status: "Pendente", value: "R$ 2.410", date: "14 Jun" },
  { name: "North Studio", status: "Pago", value: "R$ 5.390", date: "18 Jun" },
];

const activity = [
  "Nova fatura enviada para 12 clientes",
  "Pagamento aprovado da operação North Studio",
  "Relatório mensal gerado com sucesso",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.5)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-black text-white">Visão geral financeira</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500">
              Exportar relatório
            </button>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-200">
              <FontAwesomeIcon icon={faBell} />
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
                  Receita
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">R$ 148.240</h2>
              </div>
              <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                <FontAwesomeIcon icon={faChartLine} className="text-xl" />
              </div>
            </div>

            <div className="grid grid-cols-7 items-end gap-3">
              {[38, 52, 44, 65, 58, 80, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-400 to-cyan-500"
                    style={{ height: `${height}px` }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Resumo
            </p>
            <div className="mt-6 space-y-4">
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
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Últimas faturas</h3>
              <button className="text-sm font-medium text-emerald-300">Ver todas</button>
            </div>

            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                      <FontAwesomeIcon icon={faReceipt} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{invoice.name}</p>
                      <p className="text-sm text-slate-400">{invoice.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-white">{invoice.value}</p>
                    <p
                      className={`text-xs font-medium ${
                        invoice.status === "Pago" ? "text-emerald-300" : "text-amber-300"
                      }`}
                    >
                      {invoice.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-xl font-bold text-white">Atividade recente</h3>
            <div className="mt-5 space-y-4">
              {activity.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
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
    </main>
  );
}
