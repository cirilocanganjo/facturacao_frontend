import {
  faArrowDown,
  faArrowUp,
  faBell,
  faBuilding,
  faChartBar,
  faCheck,
  faChevronDown,
  faClipboardList,
  faCreditCard,
  faDollarSign,
  faFileInvoiceDollar,
  faFilter,
  faGlobe,
  faMapLocationDot,
  faSearch,
  faShieldHalved,
  faUserTie,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const summaryCards = [
  {
    label: "Receita plataforma",
    value: "Kz 3.420.000",
    change: "+18.4%",
    icon: faDollarSign,
    tone: "blue",
    direction: "up",
  },
  {
    label: "Empresas ativas",
    value: "128",
    change: "+12.1%",
    icon: faBuilding,
    tone: "soft",
    direction: "up",
  },
  {
    label: "Utilizadores ativos",
    value: "2.486",
    change: "+8.9%",
    icon: faUsers,
    tone: "green",
    direction: "up",
  },
  {
    label: "Incidências",
    value: "14",
    change: "-2.1%",
    icon: faBell,
    tone: "amber",
    direction: "down",
  },
];

const revenueBars = [30, 46, 40, 58, 64, 72, 81, 84, 90, 98, 104, 118];

const companies = [
  { name: "Yetu Finance", province: "Luanda", faturacao: "Kz 520.000", status: "Ativa" },
  { name: "Nexa Logistics", province: "Benguela", faturacao: "Kz 390.000", status: "Ativa" },
  { name: "Solaris Group", province: "Huíla", faturacao: "Kz 340.000", status: "Pendente" },
  { name: "Bengo Energy", province: "Cuanza Norte", faturacao: "Kz 285.500", status: "Inativa" },
];

const alerts = [
  { title: "Aprovação pendente", text: "3 empresas aguardam validação do superadmin" },
  { title: "Faturação crítica", text: "2 clientes com atraso maior que 15 dias" },
  { title: "Backup concluído", text: "Cópia de segurança da plataforma finalizada" },
];

const provinces = [
  { province: "Luanda", value: "Kz 870.000", width: "100%" },
  { province: "Benguela", value: "Kz 610.000", width: "78%" },
  { province: "Huíla", value: "Kz 490.000", width: "63%" },
  { province: "Namibe", value: "Kz 330.000", width: "45%" },
];

export default function SuperAdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#edf3ff] text-slate-800">
      <div className="px-6 py-6 lg:px-8">
        <section className="mb-6 flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Painel do superadministrador</h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              <FontAwesomeIcon icon={faFilter} className="text-xs" />
              Filtro
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(59,130,246,0.3)]">
              <FontAwesomeIcon icon={faChartBar} className="text-xs" />
              Exportar relatório
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map(({ label, value, change, icon, tone, direction }) => (
            <div
              key={label}
              className="rounded-[20px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                  <FontAwesomeIcon icon={icon} className="text-lg" />
                </div>
                <div
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                    tone === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : tone === "soft"
                        ? "bg-cyan-100 text-cyan-700"
                        : tone === "green"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                  }`}
                >
                  <FontAwesomeIcon icon={direction === "up" ? faArrowUp : faArrowDown} className="text-[9px]" />
                  {change}
                </div>
              </div>

              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
              <div className="mt-3 text-[30px] font-bold tracking-tight text-slate-900">{value}</div>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Faturamento</p>
                <h2 className="mt-2 text-[20px] font-bold text-slate-900">Receita por mês</h2>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
                <FontAwesomeIcon icon={faSearch} className="text-xs" />
                <span>2026</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
              </div>
            </div>

            <div className="flex h-[260px] items-end gap-3 rounded-[18px] border border-slate-200 bg-white p-4">
              {revenueBars.map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className={`w-full rounded-t-[14px] ${
                      index === revenueBars.length - 1
                        ? "bg-gradient-to-t from-blue-600 to-cyan-400"
                        : "bg-gradient-to-t from-blue-400 to-blue-200"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] font-medium text-slate-500">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Plataforma</p>
                <h2 className="mt-2 text-[20px] font-bold text-slate-900">Status geral</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Cobertura nacional</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">88%</span>
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900">18 províncias</div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-700">Empresas online</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">96%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-emerald-100">
                  <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-700">Ações críticas</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">14</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-amber-100">
                  <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Operação</p>
                <h2 className="mt-2 text-[20px] font-bold text-slate-900">Empresas monitoradas</h2>
              </div>
              <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Ver todas
              </button>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white">
              <div className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>Empresa</span>
                <span>Província</span>
                <span>Faturação</span>
                <span>Status</span>
              </div>

              {companies.map((company) => (
                <div
                  key={company.name}
                  className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] gap-4 border-b border-slate-200 px-4 py-3 last:border-b-0"
                >
                  <div className="font-semibold text-slate-800">{company.name}</div>
                  <div className="text-slate-700">{company.province}</div>
                  <div className="font-semibold text-slate-800">{company.faturacao}</div>
                  <div>
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                        company.status === "Ativa"
                          ? "bg-emerald-100 text-emerald-700"
                          : company.status === "Pendente"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {company.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Alertas</p>
                <h2 className="mt-2 text-[20px] font-bold text-slate-900">Monitoramento</h2>
              </div>
            </div>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.title} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{alert.title}</div>
                      <div className="text-xs text-slate-500">{alert.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Distribuição</p>
              <h2 className="mt-2 text-[20px] font-bold text-slate-900">Receita por província</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <FontAwesomeIcon icon={faMapLocationDot} className="text-xs" />
              Angola
            </button>
          </div>

          <div className="space-y-4">
            {provinces.map(({ province, value, width }) => (
              <div key={province}>
                <div className="mb-1 flex items-center justify-between text-[14px] text-slate-700">
                  <span>{province}</span>
                  <span className="font-semibold">{value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
