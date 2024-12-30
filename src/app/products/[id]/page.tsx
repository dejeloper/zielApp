import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.services";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(parseInt(id, 10));

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="min-w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Product Detail: {product.id}
            <Link className={buttonVariants()} href="/">
              Go Back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p>
            Price: <span className="font-bold">$ {product.price}</span>
          </p>
          <img
            src={product.image}
            alt={product.name}
            className=" w-auto h-64 object-cover mx-auto"
          />
        </CardContent>
      </Card>
    </div>
  );
}
