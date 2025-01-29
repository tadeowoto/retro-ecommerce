import { createContext, useState } from "react";

type EcommerceContextType = {
  count: number;
  setCount: (count: number) => void;
  handleProductDetail: () => void;
  isProductDetailOpen: boolean;
};

export const ecommerceContext = createContext<EcommerceContextType>(
  {} as EcommerceContextType
);

export const EcommerceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //incrementa el carrito
  const [count, setCount] = useState(0);
  //abre el detalle del producto
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);

  const handleProductDetail = () => {
    setisProductDetailOpen(!isProductDetailOpen);
  };

  return (
    <ecommerceContext.Provider
      value={{ count, setCount, handleProductDetail, isProductDetailOpen }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};
