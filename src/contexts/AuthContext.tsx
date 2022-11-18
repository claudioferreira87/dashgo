import { createContext, ReactNode } from "react";
import { api } from "../services/api";

interface SignInCredendials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credendials: SignInCredendials): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const isAuthenticated = false;

  const signIn = async ({ email, password }: SignInCredendials) => {
    const params = {
      param1: email,
      param2: password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(params),
    };

    try {
      const response = await fetch("http://localhost:3333/sessions", options)
        .then((response) => response.json())
        .then((data) => data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
