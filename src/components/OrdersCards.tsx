import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type Props = {
  totalPrice: number;
  totalProducts: number;
  date: string;
  index: number;
};

function OrdersCard({ totalPrice, totalProducts, date, index }: Props) {
  return (
    <div className="flex w-90 h-20  border-border border-2 p-2 box-border font-nunito rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:bg-white">
      <div className="w-1/2 flex flex-col gap-2 items-center justify-center">
        <div className="flex w-full h-full gap-2">
          <CalendarDateRangeIcon className="w-6 h-6 text-black" />
          <p className="text-text text-md">{date}</p>
        </div>
        <div className="flex w-full h-full gap-2">
          <ShoppingBagIcon className="w-6 h-6 text-black" />
          <p className="text-text text-md">{totalProducts} Articles</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center ml-40">
        <p className="text-text text-2xl font-semibold tracking-wide">
          ${totalPrice}
        </p>
        <Link key={index} to={`/my-orders/${index}`}>
          <ChevronRightIcon className="w-7 h-7 text-black hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default OrdersCard;
