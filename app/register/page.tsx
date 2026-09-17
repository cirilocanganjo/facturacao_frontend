"use client";

import {
  faArrowLeft,
  faBuilding,
  faCheck,
  faImage,
  faMapMarkerAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useCompanyRegister } from "@/hooks/useCompanyRegister";

const taxRegimeOptions = [
  "Regime Geral",
  "Regime Simplificado",
  "Regime de Tributação Especial",
  "Microempresa",
];

export default function RegisterPage() {
  const { form, loading, success, error, handleChange, submit } = useCompanyRegister();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submit();
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Voltar para home
          </Link>

          <Link
            href="/login"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500"
          >
            Já tem conta?
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_80px_rgba(2,6,23,0.75)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 p-8 lg:flex lg:flex-col lg:justify-between">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute bottom-10 right-5 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
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
                  <FontAwesomeIcon icon={faBuilding} className="text-sm" />
                  Registo de empresa
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-[-0.06em] text-white">
                  Configure a sua empresa na plataforma.
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Registe os dados principais da sua organização para começar a emitir faturas,
                  acompanhar o cash flow e gerir a cobrança com controlo total.
                </p>
              </div>

              <div className="relative z-10 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Setup</p>
                    <p className="mt-2 text-2xl font-bold text-white">1 min</p>
                  </div>
                  <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                    <FontAwesomeIcon icon={faImage} className="text-xl" />
                  </div>
                </div>
              </div>
            </section>

            <section className="p-6 sm:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Cadastro
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">Registar empresa</h2>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                      Nome da empresa
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
                      <FontAwesomeIcon icon={faBuilding} className="text-slate-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="YETU Finance"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nif" className="mb-2 block text-sm font-medium text-slate-200">
                      NIF
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
                      <FontAwesomeIcon icon={faUser} className="text-slate-400" />
                      <input
                        id="nif"
                        name="nif"
                        type="text"
                        value={form.nif}
                        onChange={handleChange}
                        placeholder="123456789"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tax_regime" className="mb-2 block text-sm font-medium text-slate-200">
                      Regime fiscal
                    </label>
                    <select
                      id="tax_regime"
                      name="tax_regime"
                      value={form.tax_regime}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 text-sm text-white focus:border-blue-400/60 focus:outline-none"
                      required
                    >
                      <option value="" className="bg-slate-900">
                        Selecione
                      </option>
                      {taxRegimeOptions.map((option) => (
                        <option key={option} value={option} className="bg-slate-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-200">
                      Morada
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-400" />
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Rua da empresa, 123"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                      Telefone
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
                      <FontAwesomeIcon icon={faPhone} className="text-slate-400" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+351 912 345 678"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                      Email da empresa
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3.5 focus-within:border-blue-400/60">
                      <FontAwesomeIcon icon={faUser} className="text-slate-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="empresa@exemplo.com"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="logo" className="mb-2 block text-sm font-medium text-slate-200">
                      Logo da empresa (opcional)
                    </label>
                    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-4">
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-blue-500/20 file:px-4 file:py-2 file:text-sm file:font-medium file:text-blue-200 hover:file:bg-blue-500/30"
                      />
                      <p className="mt-2 text-xs text-slate-400">
                        {form.logo && typeof form.logo !== "string" ? form.logo.name : "Nenhum ficheiro selecionado"}
                      </p>
                    </div>
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
                  {loading ? "A registar empresa..." : "Registar empresa"}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
