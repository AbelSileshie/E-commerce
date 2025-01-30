import axios from "axios";
export async function Auth(email, password, endpoint) {
  try {
    const response = await axios.post(
      endpoint,
      {
        email,
        password,
        options: {
          emailRedirectTo: import.meta.env.VITE_EMAIL_REDIRECT_TO,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
      }
    );

    console.log("Autentication successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}
