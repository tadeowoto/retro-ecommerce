import MainLayout from "../../components/MainLayout";
import { useContext } from "react";
import { ecommerceContext } from "../../context/context";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard";
import Footer from "../../components/Footer";
import "./orders.css";

function MyOrders() {
  const { order } = useContext(ecommerceContext);

  return (
    <MainLayout>
      <div className="order-container w-full flex justify-center items-center flex-col">
        <div className="flex w-fit gap-10 items-center justify-between mb-10">
          <div>
            <Link to={"/my-orders"}>
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-bold font-nunito text-text">
              My orders
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {order?.slice(-1)[0].products.map((item) => (
            <OrderCard
              id={item.id}
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}

export default MyOrders;
