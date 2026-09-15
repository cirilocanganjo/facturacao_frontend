export type PasswordResetPayload = {
  email: string;
};

export type ApiSuccessResponse<T = null> = {
  message: string;
  data?: T;
};
