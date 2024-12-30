/* eslint-disable @typescript-eslint/no-explicit-any */
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getAllProducts } from "./products/products.services";
import { ProductCard } from "./products/product-card";

export const dynamic = "force-dynamic";

async function HomePage() {
  const products = await getAllProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-center text-foreground">Ziel</h1>
        <span className="text-center text-foreground">Planee tus tareas</span>

        <Link href="/products/new" className={buttonVariants()}>
          Crear producto
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
        {!products.length ? (
          <div className="flex justify-center items-center">
            <h1 className="text-center text-foreground">No hay productos</h1>
          </div>
        ) : (
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}
export default HomePage;
