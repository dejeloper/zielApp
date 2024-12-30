import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.services";

async function NewProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = id ? await getProduct(parseInt(id, 10)) : null;

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>{id ? "Edit Product" : "Create Product"}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProductForm product={product} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default NewProductPage;
