"use client";

import {
  faBell,
  faBuilding,
  faChartLine,
  faCheck,
  faChevronDown,
  faClipboardList,
  faCreditCard,
  faFileInvoiceDollar,
  faGlobe,
  faMapLocationDot,
  faShieldHalved,
  faUserTie,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Visão Geral", href: "/superadmin", icon: faChartLine },
  { label: "Empresas", href: "/superadmin/empresas", icon: faBuilding },
  { label: "Faturação", href: "/superadmin/faturacao", icon: faFileInvoiceDollar },
  { label: "Utilizadores", href: "/superadmin/utilizadores", icon: faUsers },
  { label: "Pagamentos", href: "/superadmin/pagamentos", icon: faWallet },
  { label: "Cobrança", href: "/superadmin/cobranca", icon: faCreditCard },
  { label: "Relatórios", href: "/superadmin/relatorios", icon: faClipboardList },
  { label: "Regiões", href: "/superadmin/regioes", icon: faMapLocationDot },
  { label: "Plataforma", href: "/superadmin/plataforma", icon: faGlobe },
  { label: "Segurança", href: "/superadmin/seguranca", icon: faShieldHalved },
  { label: "Definições", href: "/superadmin/configuracoes", icon: faCheck },
];

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#edf3ff] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 bg-[#081f4d] px-5 pb-6 pt-5 text-white lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-3 px-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm">
              <FontAwesomeIcon icon={faChartLine} className="text-lg" />
            </div>
            <div>
              <div className="text-[15px] font-bold tracking-tight">YETU Finance</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-blue-100/80">
                Superadmin
              </div>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map(({ label, href, icon }) => {
              const active = pathname === href;

              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[15px] font-medium transition ${
                    active
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={icon} className="w-4" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-blue-50">
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/80">Status da plataforma</p>
            <div className="mt-2 flex items-center justify-between">
              <span>Core online</span>
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-[#f5f8ff]/95 backdrop-blur-sm">
            <div className="flex h-[76px] items-center justify-between gap-4 px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                  <FontAwesomeIcon icon={faBuilding} className="text-lg" />
                </div>
                <div>
                  <div className="text-[15px] font-bold tracking-tight text-slate-900">YETU Finance</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Administração da plataforma
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                  <FontAwesomeIcon icon={faBell} className="text-sm" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Superadmin Angola
                  <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm">
                  SA
                </div>
              </div>
            </div>
          </header>

          {children}
        </div>
      </div>
    </main>
  );
}
