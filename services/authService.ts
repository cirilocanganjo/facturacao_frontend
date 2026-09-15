import api from "@/lib/axios";
import type { ApiSuccessResponse, PasswordResetPayload } from "@/types/auth";

export const authService = {
  requestPasswordReset: async (payload: PasswordResetPayload) => {
    const response = await api.post<ApiSuccessResponse>("/password/reset", payload);

    return response.data;
  },
};
