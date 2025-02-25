import { createContext, useEffect, useState } from "react";

// Define un tipo para los productos
type ProductType = {
  id: number;
  title: string;
  desc: string;
  image: string;
  tags: string;
  price: number;
};

type OrderType = {
  date: string;
  products: Array<ProductType>;
  totalProducts: number;
  totalPrice: number;
};

type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: {
    name: string;
  };
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
  total: number;
  setTotal: (total: number) => void;
  order: Array<OrderType>;
  setOrder: (order: Array<OrderType>) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  searchByTitle: string;
  setSearchByTitle: (searchByTitle: string) => void;
  filteredProducts: Product[];
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: string) => void;
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
    id: 0,
    title: "",
    desc: "",
    image: "",
    tags: "",
    price: 0,
  });

  //productos que se agregan al carrito
  const [cart, setCart] = useState<ProductType[]>([]);
  const [isCheckoutOpen, setisCheckoutOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const [order, setOrder] = useState<Array<OrderType>>([]);

  const handleCheckout = () => {
    setisCheckoutOpen(!isCheckoutOpen);
  };

  const handleProductDetail = () => {
    setisProductDetailOpen(!isProductDetailOpen);
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProductsByCategory = (
    products: Product[],
    searchByCategory: string
  ) => {
    return products?.filter(
      (product) =>
        product.category.name.toLowerCase() ===
        searchByCategory.toLocaleLowerCase()
    );
  }; // aca tengo los productos filtrados por categoria

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredItemsByTitle = (products: Product[], searchByTitle: string) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  useEffect(() => {
    let result = products;

    if (categoryFilter) {
      if (categoryFilter === "All" || categoryFilter === "Home") {
        result = products;
      } else {
        result = filteredProductsByCategory(result, categoryFilter);
      }
    }

    if (searchByTitle) {
      result = filteredItemsByTitle(result, searchByTitle);
    }

    setFilteredProducts(result);
  }, [products, searchByTitle, categoryFilter]);

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
        total,
        setTotal,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};
