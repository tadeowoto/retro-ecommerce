type Props = {
  totalPrice: number;
  totalProducts: number;
};

function OrdersCard({ totalPrice, totalProducts }: Props) {
  return (
    <div className="flex justify-between items-center border-2 border-border">
      <p>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export default OrdersCard;
