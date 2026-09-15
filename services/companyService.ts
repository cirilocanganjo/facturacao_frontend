import api from "@/lib/axios";
import type { ApiMessageResponse, Company, CompanyPayload } from "@/types/company";

export const companyService = {
  create: async (payload: CompanyPayload) => {
    const response = await api.post<ApiMessageResponse<Company>>("/companies", payload);

    return response.data;
  },
};
