import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
    order,
    setOrder,
  } = useContext(ecommerceContext);

  const handleDelete = (id: number) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCount(count - 1);
    const productRemoved = cart.find((item) => item.id === id);
    const indexRemoved = cart.indexOf(productRemoved!);
    setTotal(total - cart[indexRemoved].price);
    setCart(filteredCart);
  };

  const handleOrders = () => {
    const orderToAdd = {
      date: "01,02,2025",
      products: cart,
      totalProducts: cart.length,
      totalPrice: total,
    };
    setOrder([...order, orderToAdd]);
    setCart([]);
    setTotal(0);
    setCount(0);
  };

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } checkout-menu  flex-col fixed right-0 top-24 border-2 border-border rounded-2xl bg-grayBg font-nunito overflow-y-auto `}
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
      <div className="flex justify-between items-center p-6">
        <h3 className="text-2xl font-bold font-nunito text-text">Total:</h3>
        <p className="text-2xl font-bold font-nunito text-text">{`$${total}`}</p>
      </div>
      <div className="w-full flex justify-end items-center p-6">
        <Link to={"/my-orders/last"}>
          <button
            onClick={() => handleOrders()}
            className=" bg-yellow flex gap-2 items-center justify-center text-sm font-nunito w-full px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutMenu;
