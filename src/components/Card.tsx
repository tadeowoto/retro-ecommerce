import { useContext } from "react";
import { ecommerceContext } from "../context/context";

type Props = {
  title: string;
  desc: string;
  image: string;
  tags: string;
  price: number;
};

function Card({ title, desc, image, tags, price }: Props) {
  const { count, setCount, handleProductDetail, isProductDetailOpen } =
    useContext(ecommerceContext);

  return (
    <div
      className="w-[300px] h-[310px] hover:cursor-pointer font-nunito border-border border-2 rounded-xl shadow-[4px_4px_0_#333] overflow-hidden hover:shadow-[6px_6px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
      onClick={isProductDetailOpen ? undefined : handleProductDetail}
    >
      <div className="w-full h-[120px]">
        <img
          src={image}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full bg-cardBg h-[190px] p-3 flex flex-col gap-2">
        <div className="flex items-center gap-5">
          <h3 className="font-bold text-sm tracking-wide">{title}</h3>
          <p className="flex items-center justify-center h-4 bg-greenMain text-center border-2 border-border text-[10px] py-2 px-6 rounded-xl">
            {tags}
          </p>
        </div>
        <p className="tracking-wider text-text  text-sm line-clamp-3">{desc}</p>
        <div className="flex gap-2 items-center justify-between mt-auto">
          <button
            className="mt-auto w-1/2 py-1 bg-blueMain border-2 border-border rounded-lg hover:bg-blue-300 transition-colors text-sm"
            onClick={() => setCount(count + 1)}
          >
            Add to cart
          </button>
          <span className=" text-text pr-2 font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
