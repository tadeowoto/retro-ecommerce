// src/context/userAuth.tsx
import { createContext, useEffect, useState } from "react";

// Define un tipo para el contexto de autenticación
interface UserAuthContextType {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  handleSubmitLogin: (event: React.FormEvent) => void;
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
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
  //estado para el nombre, la contraseña y el correo y tambien un booleano para saber si esta logueado
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedPassword = localStorage.getItem("password");
    const storedEmail = localStorage.getItem("userEmail");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("Estado inicial de isLoggedIn:", storedIsLoggedIn);

    if (storedName) setName(storedName);
    if (storedPassword) setPassword(storedPassword);
    if (storedEmail) setUserEmail(storedEmail);
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
      console.log("Usuario está logueado:", true);
    }
  }, []);

  //manejo el login
  const handleSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setName(name);
    setPassword(password);
    setUserEmail(userEmail);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("isLoggedIn", "true");
    console.log("Login completado, isLoggedIn:", true);
  };

  return (
    <userAuthContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        handleSubmitLogin,
        userEmail,
        setUserEmail,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};
