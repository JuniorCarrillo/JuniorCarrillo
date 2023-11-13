import { useState, useEffect, createContext, useContext, useCallback } from "react";
import cookies from "js-cookie";
import CryptoJS from "crypto-js";

interface ApiContextProps {
  logged: boolean;
  blog: Blog;
  signOut: () => void;
  login: (e: { pass: string; email: string }) => void;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [logged, setLogged] = useState<boolean>(() => !!cookies.get("token"));
  const [blog, setBlog] = useState<Blog>({} as Blog);

  useEffect(() => {
    fetch("https://www.juniorcarrillo.com/feed/json", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(setBlog)
      .catch(error => console.log('error', error));
  }, []);

  const login = useCallback((e: { pass: string; email: string }) => {
    const hash = CryptoJS.SHA256(`${e.pass}===${e.email}`).toString();
    cookies.set("token", hash, {
      expires: 7,
    });
    setLogged(true);
  }, []);

  const signOut = useCallback(() => {
    cookies.remove("token");
    setLogged(false);
  }, []);

  const contextValue = { logged, blog, signOut, login };

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
}
