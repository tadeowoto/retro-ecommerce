import MainLayout from "../components/MainLayout";
import OrdersCard from "../components/OrdersCards";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";

import Footer from "../components/Footer";

const HistoryOrders = () => {
  const { order } = useContext(ecommerceContext);

  return (
    <MainLayout>
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
      </div>
      <Footer />
    </MainLayout>
  );
};

export default HistoryOrders;
