// src/context/userAuth.tsx
import { createContext, useState } from "react";

// Define un tipo para el contexto de autenticación
interface UserAuthContextType {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
}

// Crea el contexto con un valor inicial vacío
export const userAuthContext = createContext<UserAuthContextType>(
  {} as UserAuthContextType
);

// Define el proveedor del contexto
export const UserAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //estado para el nombre y la contraseña
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <userAuthContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};
