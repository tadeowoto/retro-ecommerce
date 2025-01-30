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
  cart: ProductType[];
  setCart: (cart: ProductType[]) => void;
  isCheckoutOpen: boolean;
  setisCheckoutOpen: (isCheckoutOpen: boolean) => void;
  handleCheckout: () => void;
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

  //productos que se agregan al carrito
  const [cart, setCart] = useState<ProductType[]>([]);
  const [isCheckoutOpen, setisCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    console.log(isCheckoutOpen);
    setisCheckoutOpen(!isCheckoutOpen);
  };

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
        cart,
        setCart,
        isCheckoutOpen,
        setisCheckoutOpen,
        handleCheckout,
      }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};
