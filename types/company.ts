export type Company = {
  id?: number;
  name: string;
  nif: string;
  address: string;
  phone: string;
  email: string;
  logo?: string | null;
  tax_regime: string;
  invoice_prefix: string;
  created_at?: string;
  updated_at?: string;
};

export type CompanyPayload = {
  name: string;
  nif: string;
  address: string;
  phone: string;
  email: string;
  logo?: string | null;
  tax_regime: string;
  invoice_prefix: string;
};

export type ApiMessageResponse<T> = {
  message: string;
  data: T;
};
