import MainLayout from "../../components/MainLayout";
import Card from "../../components/Card";
import { useContext } from "react";
import { ecommerceContext } from "../../context/context";
import ProductDetail from "../../components/ProductDetail";
import CheckoutMenu from "../../components/CheckoutMenu";
import Footer from "../../components/Footer";

function Home() {
  const { products } = useContext(ecommerceContext);

  return (
    <MainLayout>
      <article className="grid grid-cols-4 gap-4 w-[150vh] mt-20 max-w-screen place-items-center">
        {products.map((product) => (
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
      <CheckoutMenu />
      <ProductDetail />
      <Footer />
    </MainLayout>
  );
}

export default Home;
