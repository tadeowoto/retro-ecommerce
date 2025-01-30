import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import "./styles.css";

function ProductDetail() {
  const { isProductDetailOpen, handleProductDetail, productOpen } =
    useContext(ecommerceContext);

  const { title, desc, image } = productOpen;
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 top-24 border-2 border-border rounded-2xl bg-grayBg font-nunito`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold font-nunito text-text">Detail</h2>
        <div className="cursor-pointer" onClick={handleProductDetail}>
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
      <figure className="px-6">
        <img src={image} alt={title} className="w-full rounded-2xl" />
        <figcaption className=" text-text text-2xl font-bold mt-2 tracking-tight">
          {title}
        </figcaption>
        <p className="mt-2 text-text">{desc}</p>
      </figure>
    </aside>
  );
}

export default ProductDetail;
