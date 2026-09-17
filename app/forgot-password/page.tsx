"use client";

import {
  faArrowLeft,
  faCheck,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { usePasswordReset } from "@/hooks/usePasswordReset";

export default function ForgotPasswordPage() {
  const { form, loading, success, error, handleChange, submit } = usePasswordReset();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submit();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.75)] backdrop-blur-xl sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Voltar ao login
          </Link>
        </div>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
            <FontAwesomeIcon icon={faKey} className="text-2xl" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Recuperação
          </p>
          <h1 className="mt-3 text-3xl font-black text-white">Esqueceu a sua senha?</h1>
          <p className="mt-3 text-slate-300">
            Introduza o seu email para receber as instruções da redefinição da palavra-passe.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              E-mail
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
              <FontAwesomeIcon icon={faEnvelope} className="text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-2xl border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-xs" />
                {success}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 px-5 py-3.5 font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.2)] transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "A enviar pedido..." : "Enviar instruções"}
          </button>
        </form>
      </div>
    </main>
  );
}
