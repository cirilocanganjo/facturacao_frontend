export type Company = {
  id?: number;
  name: string;
  nif: string;
  address: string;
  phone: string;
  email: string;
  logo?: string | File | null;
  tax_regime: string;
  created_at?: string;
  updated_at?: string;
};

export type CompanyPayload = {
  name: string;
  nif: string;
  address: string;
  phone: string;
  email: string;
  logo?: string | File | null;
  tax_regime: string;
};

export type ApiMessageResponse<T> = {
  message: string;
  data: T;
};
