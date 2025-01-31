import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import "../components/styles.css";
import OrderCard from "./OrderCard";

const CheckoutMenu = () => {
  const {
    isCheckoutOpen,
    handleCheckout,
    cart,
    setCart,
    count,
    setCount,
    total,
    setTotal,
  } = useContext(ecommerceContext);

  const handleDelete = (id: number) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCount(count - 1);
    const productRemoved = cart.find((item) => item.id === id);
    const indexRemoved = cart.indexOf(productRemoved!);
    setTotal(total - cart[indexRemoved].price);
    setCart(filteredCart);
  };

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } checkout-menu  flex-col fixed right-0 top-24 border-2 border-border rounded-2xl bg-grayBg font-nunito overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold font-nunito text-text">My Order</h2>
        <div className="cursor-pointer" onClick={handleCheckout}>
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        {cart.map((item) => (
          <OrderCard
            id={item.id}
            key={item.title}
            title={item.title}
            image={item.image}
            price={item.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutMenu;
