import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";

interface ProductCartProps {
  product: Product;
}

export default function ProductCart({ product }: ProductCartProps) {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
