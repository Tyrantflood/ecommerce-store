"use client";

import { Product } from "@/types";
import Image from "next/image";
import IcontButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  
  return (
    <div onClick={handleClick} className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image alt="image" src={data?.images?.[0]?.url} fill />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <IcontButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IcontButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className=" font-semibold text-lg">{data.name}</p>
        <p className=" text-sm text-gray-500">{data.category?.name}</p>
        <div>
          {/* price */}
          <div className=" flex items-center justify-center">
            <Currency value={data?.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
