import MainLayout from "../components/MainLayout";
import OrdersCard from "../components/OrdersCards";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const HistoryOrders = () => {
  const { order } = useContext(ecommerceContext);

  let renderHistoryMessage;

  if (order.length === 0) {
    renderHistoryMessage = (
      <div className="order-container w-full flex justify-center items-center flex-col">
        <p className="text-2xl font-bold font-nunito text-text ">
          There is no purchase history yet, return home to buy!
        </p>
        <div className="mt-10">
          <Link to="/">
            <HomeIcon className="w-10 h-10  text-black" />
          </Link>
        </div>
      </div>
    );
  } else {
    <div className="order-container w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold font-nunito text-text mb-10">
        My History Orders
      </h1>
      <div className="flex flex-col gap-4">
        {order.map((item, index) => (
          <OrdersCard
            key={item.date}
            date={item.date}
            totalPrice={item.totalPrice}
            totalProducts={item.totalProducts}
            index={index}
          />
        ))}
      </div>
    </div>;
  }

  return (
    <MainLayout>
      {renderHistoryMessage}
      <Footer />
    </MainLayout>
  );
};

export default HistoryOrders;
