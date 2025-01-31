import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  image: string;
  price: number;
};

function OrderCard({ title, image, price }: Props) {
  return (
    <div className=" w-full flex justify-between pr-2 items-center bg-greenMain border-border border-2 rounded-xl shadow-[4px_4px_0_#333] overflow-hidden hover:shadow-[6px_6px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ">
      <div className="flex gap-3 items-center">
        <figure className="flex w-20 h-20">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-text text-sm font-nunito">{title}</p>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-text font-nunito">{`$${price}`}</p>
        <div className="cursor-pointer">
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
