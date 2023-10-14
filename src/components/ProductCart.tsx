import { Product } from "@prisma/client";
import Link from "next/link";

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
      </div>
    </Link>
  );
}
