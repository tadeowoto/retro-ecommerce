// src/context/userAuth.tsx
import { createContext, useEffect, useState } from "react";

// Define un tipo para el contexto de autenticación
interface UserAuthContextType {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  handleSubmitCreateUser: (event: React.FormEvent) => void;
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  users: userInfo[];
  setUsers: (users: userInfo[]) => void;
  handleSubmitLogin: (event: React.FormEvent) => void;
  setLoginEmail: (loginEmail: string) => void;
  setLoginPassword: (loginPassword: string) => void;
  loginEmail: string;
  loginPassword: string;
}

//formato del usuario
type userInfo = {
  name: string;
  password: string;
  email: string;
  isLoggued: boolean;
};

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
  //estado para tener muchos usuarios, empieza vacio
  const [users, setUsers] = useState<userInfo[]>([]);

  //estado para el nombre, la contraseña y el correo y tambien un booleano para saber si esta logueado
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // en este useEffect agarro la sesion que hay en el localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedPassword = localStorage.getItem("password");
    const storedEmail = localStorage.getItem("userEmail");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    // cambio el estado con las variables del localStorage
    if (storedName) setName(storedName);
    if (storedPassword) setPassword(storedPassword);
    if (storedEmail) setUserEmail(storedEmail);
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  //manejo el login
  const handleSubmitCreateUser = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = {
      name,
      password,
      email: userEmail,
      isLoggued: true,
    };
    // actualizo el estado de los usuarios metiendo a los creados
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setIsLoggedIn(true);
    setName(name);
    setPassword(password);
    setUserEmail(userEmail);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("isLoggedIn", "true");

    // Limpiar formulario
    setName("");
    setPassword("");
    setUserEmail("");
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //este metodo es para verificar el login de los usuarios
  const handleSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // Buscar usuario por email y password
    const user = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );

    if (user) {
      setIsLoggedIn(true);
      setName(user.name);
      setUserEmail(user.email);
      setPassword(user.password);

      // Guardar en localStorage en el caso de que el usuario se haya logueado
      localStorage.setItem("name", user.name);
      localStorage.setItem("password", user.password);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("isLoggedIn", "true");

      // Limpiar formulario
      setLoginEmail("");
      setLoginPassword("");
    } else {
      alert("User not found");
    }
  };
  return (
    <userAuthContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        handleSubmitCreateUser,
        userEmail,
        setUserEmail,
        isLoggedIn,
        setIsLoggedIn,
        users,
        setUsers,
        handleSubmitLogin,
        setLoginEmail,
        setLoginPassword,
        loginEmail,
        loginPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};
