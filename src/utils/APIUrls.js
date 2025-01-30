export const Loginurl = () => {
  return `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/login`;
};
export const Signupurl = `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/signup`;
