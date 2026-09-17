import {
  faArrowRight,
  faEnvelope,
  faLock,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_80px_rgba(2,6,23,0.75)] backdrop-blur-xl">
        <div className="grid min-h-[760px] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                  <span className="text-lg font-black tracking-tight text-white">Y</span>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                    YETU
                  </p>
                  <p className="text-xs text-slate-300">Finance</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-200">
                <FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
                Segurança empresarial
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-[-0.06em] text-white">
                Controle financeiro com confiança e clareza.
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Acesse sua conta e gerencie cobranças, faturamento e indicadores em um único painel,
                com segurança e agilidade para sua operação.
              </p>
            </div>

            <div className="relative z-10 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance</p>
                  <p className="mt-2 text-3xl font-bold text-white">+38%</p>
                </div>
                <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center bg-slate-950/60 p-6 sm:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Acesso ao sistema
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">Entrar na plataforma</h2>
              </div>

              <div className="mb-6 flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500">
                  <FontAwesomeIcon icon={faGoogle} className="text-base text-rose-300" />
                  Google
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-base text-cyan-300" />
                  SSO
                </button>
              </div>

              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                <div className="h-px flex-1 bg-slate-700" />
                <span>ou continue com email</span>
                <div className="h-px flex-1 bg-slate-700" />
              </div>

              <form className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    E-mail
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3.5 focus-within:border-blue-400/60">
                    <FontAwesomeIcon icon={faEnvelope} className="text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                    Senha
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3.5 focus-within:border-blue-400/60">
                    <FontAwesomeIcon icon={faLock} className="text-slate-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 accent-blue-500" />
                    Lembrar-me
                  </label>
                  <a href="#" className="text-blue-300 hover:text-blue-200">
                    Esqueci minha senha
                  </a>
                </div>

                <a
                  href="/admin"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 px-5 py-3.5 font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.2)] transition hover:translate-y-[-1px]"
                >
                  Entrar
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </a>
              </form>

              <p className="mt-8 text-center text-sm text-slate-400">
                Não tem uma conta?{" "}
                <a href="#" className="font-semibold text-blue-300 hover:text-blue-200">
                  Solicite demo
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
