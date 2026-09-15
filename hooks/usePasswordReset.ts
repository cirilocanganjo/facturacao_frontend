"use client";

import { useState } from "react";

import { authService } from "@/services/authService";
import type { PasswordResetPayload } from "@/types/auth";

const initialForm: PasswordResetPayload = {
  email: "",
};

export function usePasswordReset() {
  const [form, setForm] = useState<PasswordResetPayload>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await authService.requestPasswordReset(form);
      setSuccess(response.message);
      setForm(initialForm);
      return response;
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message ??
            "Não foi possível redefinir a senha.")
          : "Não foi possível redefinir a senha.";

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
  };
}
