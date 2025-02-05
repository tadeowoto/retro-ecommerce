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
      <h1>My History Orders</h1>
      {order.map((item, index) => (
        <Link key={index} to={`/order/${item.date}`}>
          <OrdersCard
            key={item.date}
            totalPrice={item.totalPrice}
            totalProducts={item.totalProducts}
          />
        </Link>
      ))}
      <Footer />
    </MainLayout>
  );
};

export default HistoryOrders;
