"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteProduct } from "./products.services";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {
  const router = useRouter();

  const handledRemoveProduct = async (id: number) => {
    await deleteProduct(id);
    router.refresh();
  };

  return (
    <Card
      onClick={() => router.push(`/products/${product.id}`)}
      className="cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl font-bold">{product.name}</span>
          <span className="text-sm text-gray-500 font-bold">
            $ {product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-[1fr_auto] min-h-[400px] items-center">
          <img src={product.image} alt={product.name} />
          <div className="flex flex-row justify-between">
            <Button
              className="mt-5"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/products/${product.id}/edit`);
              }}
            >
              Edit
            </Button>
            <Button
              className="mt-5"
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                handledRemoveProduct(product.id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
