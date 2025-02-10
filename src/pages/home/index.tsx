import MainLayout from "../../components/MainLayout";
import Card from "../../components/Card";
import { useContext } from "react";
import { ecommerceContext } from "../../context/context";
import ProductDetail from "../../components/ProductDetail";
import CheckoutMenu from "../../components/CheckoutMenu";
import Footer from "../../components/Footer";
import "./home.css";

function Home() {
  const { products, setSearchByTitle, filteredProducts } =
    useContext(ecommerceContext);
  const renderView = () => {
    // Si hay texto en la búsqueda, muestra los productos filtrados
    if (setSearchByTitle?.length > 0) {
      if (filteredProducts?.length > 0) {
        return filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            desc={product.description}
            image={product.images[0]}
            tags={product.category.name}
            price={product.price}
          />
        ));
      } else {
        return (
          <div className="w-full h-77 flex items-center justify-center">
            <h1 className="font-nunito text-2xl">No products found</h1>
          </div>
        );
      }
    }
    // Si no hay texto en la búsqueda, muestra todos los productos
    else {
      return products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          desc={product.description}
          image={product.images[0]}
          tags={product.category.name}
          price={product.price}
        />
      ));
    }
  };

  return (
    <MainLayout>
      <div className="home-container w-full  flex justify-center items-center flex-col">
        <div>
          <h1 className="text-2xl font-bold font-nunito text-text mb-2 text-center">
            Exclusive Products
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-90 text-text border-2 border-border rounded-xl p-2 text-center font-nunito shadow-[4px_4px_0_#333] overflow-hidden hover:shadow-[6px_6px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all focus:outline-none"
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
        </div>
        <article className="grid grid-cols-4 gap-4 w-[150vh] mt-20 max-w-screen place-items-center">
          {renderView()}
        </article>
        <CheckoutMenu />
        <ProductDetail />
      </div>
      <Footer />
    </MainLayout>
  );
}

export default Home;
