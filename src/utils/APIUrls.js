export const Loginurl = `${
  import.meta.env.VITE_SUPABASE_URL
}/auth/v1/token?grant_type=password`;
export const Signupurl = `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/signup`;
