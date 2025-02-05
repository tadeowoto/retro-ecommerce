import MainLayout from "../components/MainLayout";
import OrdersCard from "../components/OrdersCards";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const HistoryOrders = () => {
  const { order } = useContext(ecommerceContext);

  return (
    <MainLayout>
      <div className="order-container w-full flex justify-center items-center flex-col">
        <h1>My History Orders</h1>
        {order.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              key={item.date}
              totalPrice={item.totalPrice}
              totalProducts={item.totalProducts}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </MainLayout>
  );
};

export default HistoryOrders;
