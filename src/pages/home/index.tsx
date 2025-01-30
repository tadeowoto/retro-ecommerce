import MainLayout from "../../components/MainLayout";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string;
  category: {
    name: string;
  };
  price: number;
}

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //https://api.escuelajs.co/api/v1/products -> all products
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <MainLayout>
      <article className="grid grid-cols-4 gap-4 w-[150vh] mt-20 max-w-screen place-items-center">
        {products.map((product: Product) => (
          <Card
            key={product.id}
            title={product.title}
            desc={product.description}
            image={product.images[0]}
            tags={product.category.name}
            price={product.price}
          />
        ))}
      </article>
      <ProductDetail />
    </MainLayout>
  );
}

export default Home;
