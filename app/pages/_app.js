import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { UserContextProvider } from "../components/UserContext";

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </SessionContextProvider>
    </ThemeProvider>
  );
}
