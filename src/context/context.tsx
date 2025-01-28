import { createContext, useState } from "react";

type EcommerceContextType = {
  count: number;
  setCount: (count: number) => void;
};

export const ecommerceContext = createContext<EcommerceContextType>(
  {} as EcommerceContextType
);

export const EcommerceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <ecommerceContext.Provider value={{ count, setCount }}>
      {children}
    </ecommerceContext.Provider>
  );
};
