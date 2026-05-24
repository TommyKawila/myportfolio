export type AuthFormState = {
  error: string;
  success: string;
  debug?: string;
};

export const authInitialState: AuthFormState = { error: "", success: "" };
