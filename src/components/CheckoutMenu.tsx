import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import "../components/styles.css";

const CheckoutMenu = () => {
  const { isCheckoutOpen, handleCheckout } = useContext(ecommerceContext);

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } checkout-menu  flex-col fixed right-0 top-24 border-2 border-border rounded-2xl bg-grayBg font-nunito`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold font-nunito text-text">My Order</h2>
        <div className="cursor-pointer" onClick={handleCheckout}>
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutMenu;
