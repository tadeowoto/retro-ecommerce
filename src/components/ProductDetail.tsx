import "./styles.css";

function ProductDetail() {
  return (
    <aside className=" product-detail flex flex-col fixed right-0 top-20 border-2 border-border rounded-2xl bg-grayBg">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold font-nunito">Detail</h2>
        <div>X</div>
      </div>
    </aside>
  );
}

export default ProductDetail;
