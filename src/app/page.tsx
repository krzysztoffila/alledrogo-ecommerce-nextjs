import ProductCart from "@/components/ProductCart";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <ProductCart product={products[0]} />
    </div>
  );
}
