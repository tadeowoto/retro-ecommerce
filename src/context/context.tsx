import { createContext, useState } from "react";

// Define un tipo para los productos
type ProductType = {
  title: string;
  desc: string;
  image: string;
  tags: string;
  price: number;
};

// Define el tipo del contexto
type EcommerceContextType = {
  count: number;
  setCount: (count: number) => void;
  handleProductDetail: () => void;
  isProductDetailOpen: boolean;
  productOpen: ProductType;
  setProductOpen: (product: ProductType) => void;
};

// Crea el contexto con un valor inicial vacío pero con aserción de tipo
export const ecommerceContext = createContext<EcommerceContextType>(
  {} as EcommerceContextType
);

export const EcommerceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const [productOpen, setProductOpen] = useState<ProductType>({
    title: "",
    desc: "",
    image: "",
    tags: "",
    price: 0,
  });

  const handleProductDetail = () => {
    setisProductDetailOpen(!isProductDetailOpen);
  };

  return (
    <ecommerceContext.Provider
      value={{
        count,
        setCount,
        handleProductDetail,
        isProductDetailOpen,
        productOpen,
        setProductOpen,
      }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};
