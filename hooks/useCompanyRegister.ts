"use client";

import { useState } from "react";

import { companyService } from "@/services/companyService";
import type { CompanyPayload } from "@/types/company";

const initialState: CompanyPayload = {
  name: "",
  nif: "",
  address: "",
  phone: "",
  email: "",
  logo: null,
  tax_regime: "",
};

export function useCompanyRegister() {
  const [form, setForm] = useState<CompanyPayload>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = event.target as HTMLInputElement;

    if (name === "logo") {
      setForm((current) => ({
        ...current,
        logo: files && files[0] ? files[0] : null,
      }));
      return;
    }

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const submit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await companyService.create(form);
      setSuccess(response.message);
      resetForm();
      return response;
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? ((err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } }).response?.data?.message ??
              Object.values(
                ((err as { response?: { data?: { errors?: Record<string, string[]> } } }).response?.data?.errors ?? {})
              )
                .flat()
                .join(" ") ??
              "Erro ao registar a empresa.")
          : "Erro ao registar a empresa.";

      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    success,
    error,
    handleChange,
    submit,
    resetForm,
  };
}
