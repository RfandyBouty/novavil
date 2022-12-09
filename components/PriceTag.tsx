import React from "react";

interface price {
  price: string;
  type: string;
}
function PriceTag({ price, type }: price) {
  return (
    <div className="my-3 bg-gray-200 p-3">
      <h5 className="font-bold">{price}</h5>
      <p className="text-xs">{type}</p>
    </div>
  );
}

export default PriceTag;
