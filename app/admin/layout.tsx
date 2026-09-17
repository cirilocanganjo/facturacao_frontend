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
  { label: "Visão Geral", href: "/admin", icon: faChartLine },
  { label: "Faturação", href: "/admin/faturacao", icon: faFileInvoiceDollar },
  { label: "Clientes", href: "/admin/clientes", icon: faUsers },
  { label: "Pagamentos", href: "/admin/pagamentos", icon: faWallet },
  { label: "Cobrança", href: "/admin/cobranca", icon: faCreditCard },
  { label: "Relatórios", href: "/admin/relatorios", icon: faClipboardList },
  { label: "Utilizadores", href: "/admin/utilizadores", icon: faUserTie },
  { label: "Localizações", href: "/admin/localizacoes", icon: faMapLocationDot },
  { label: "Segurança", href: "/admin/seguranca", icon: faShieldHalved },
  { label: "Definições", href: "/admin/configuracoes", icon: faCheck },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#edf3ff] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 bg-[#0b3c8c] px-5 pb-6 pt-5 text-white lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-3 px-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm">
              <FontAwesomeIcon icon={faChartLine} className="text-lg" />
            </div>
            <div>
              <div className="text-[15px] font-bold tracking-tight">YETU Finance</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-blue-100/85">
                Gestão financeira
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
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/80">Status</p>
            <div className="mt-2 flex items-center justify-between">
              <span>API conectada</span>
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
                    Centro de controlo
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                  <FontAwesomeIcon icon={faBell} className="text-sm" />
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Admin Angola
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm">
                  AA
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
