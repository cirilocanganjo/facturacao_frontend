import api from "@/lib/axios";
import type { ApiMessageResponse, Company, CompanyPayload } from "@/types/company";

export const companyService = {
  create: async (payload: CompanyPayload) => {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        return;
      }

      if (key === "logo" && value instanceof File) {
        formData.append("logo", value);
        return;
      }

      formData.append(key, String(value));
    });

    const response = await api.post<ApiMessageResponse<Company>>("/companies", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
