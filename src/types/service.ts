export type ServiceResult<T> =
  | { data: T; error: null; hint?: string }
  | { data: null; error: string };

export type AuthSession = {
  id: string;
  email: string;
};
