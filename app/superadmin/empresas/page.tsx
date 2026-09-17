import {
  faArrowRight,
  faBuilding,
  faCheck,
  faDownload,
  faEye,
  faFilter,
  faMapMarkerAlt,
  faPlus,
  faSearch,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const companies = [
  {
    name: "Yetu Finance",
    nif: "5001234567",
    province: "Luanda",
    status: "Ativa",
    owner: "Maria João",
    email: "maria@yetufinance.co.ao",
    tone: "bg-blue-100 text-blue-700",
  },
  {
    name: "Nexa Logistics",
    nif: "941234890",
    province: "Benguela",
    status: "Pendente",
    owner: "Armando Costa",
    email: "armando@nexalogistics.ao",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    name: "Solaris Group",
    nif: "512347890",
    province: "Huíla",
    status: "Ativa",
    owner: "Ana Silva",
    email: "ana@solaris.ao",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Bengo Energy",
    nif: "700456987",
    province: "Cuanza Norte",
    status: "Inativa",
    owner: "Daniel Furtado",
    email: "daniel@bengoenergy.ao",
    tone: "bg-slate-200 text-slate-700",
  },
];

export default function SuperAdminEmpresasPage() {
  return (
    <main className="px-6 py-6 lg:px-8">
      <section className="mb-6 flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Gestão</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Empresas</h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
            <FontAwesomeIcon icon={faDownload} className="text-xs" />
            Exportar
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(59,130,246,0.3)]">
            <FontAwesomeIcon icon={faPlus} className="text-xs" />
            Nova empresa
          </button>
        </div>
      </section>

      <section className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Total</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">128</span>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              +12%
            </span>
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Ativas</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">96</span>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              online
            </span>
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Pendentes</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">17</span>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
              revisar
            </span>
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Inativas</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">15</span>
            <span className="rounded-full bg-slate-200 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
              pausa
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-[22px] border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
            <FontAwesomeIcon icon={faSearch} className="text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar empresa, NIF ou representante"
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none lg:w-[420px]"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              <FontAwesomeIcon icon={faFilter} className="text-xs" />
              Filtrar
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              Últimos 30 dias
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white">
          <div className="grid grid-cols-[1.4fr_0.9fr_0.9fr_0.8fr_0.8fr_0.7fr] gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span>Empresa</span>
            <span>NIF</span>
            <span>Província</span>
            <span>Responsável</span>
            <span>Status</span>
            <span>Ações</span>
          </div>

          {companies.map((company) => (
            <div
              key={company.name}
              className="grid grid-cols-[1.4fr_0.9fr_0.9fr_0.8fr_0.8fr_0.7fr] gap-4 border-b border-slate-200 px-4 py-4 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <FontAwesomeIcon icon={faBuilding} className="text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{company.name}</p>
                  <p className="text-xs text-slate-500">{company.email}</p>
                </div>
              </div>

              <div className="flex items-center text-sm font-medium text-slate-700">{company.nif}</div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-400" />
                {company.province}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faUser} className="text-slate-400" />
                {company.owner}
              </div>
              <div className="flex items-center">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${company.tone}`}>
                  {company.status}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700">
                  <FontAwesomeIcon icon={faEye} className="text-xs" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600">
                  <FontAwesomeIcon icon={faTrash} className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <span>Mostrando 1-4 de 128 empresas</span>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700">Anterior</button>
            <button className="rounded-lg bg-blue-600 px-3 py-2 font-medium text-white">1</button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700">2</button>
            <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700">
              Próxima
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
