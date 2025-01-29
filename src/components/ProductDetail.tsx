import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import "./styles.css";

function ProductDetail() {
  const { isProductDetailOpen, handleProductDetail } =
    useContext(ecommerceContext);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 top-20 border-2 border-border rounded-2xl bg-grayBg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold font-nunito">Detail</h2>
        <div className="cursor-pointer" onClick={handleProductDetail}>
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
