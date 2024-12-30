"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { createProdut, updateProduct } from "../products.services";
import { useParams, useRouter } from "next/navigation";

export function ProductForm({ product }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || 0,
      image: product?.image || "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (product) {
      await updateProduct(parseInt(product.id, 10), data);
    } else {
      await createProdut({
        ...data,
        price: parseFloat(data.price),
      });
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Label htmlFor="name">Name</Label>
      <Input {...register("name")} id="name" placeholder="Name" />

      <Label htmlFor="description">Description</Label>
      <Input
        {...register("description")}
        id="description"
        placeholder="Description"
      />

      <Label htmlFor="price">Price</Label>
      <Input {...register("price")} id="price" placeholder="Price" />

      <Label htmlFor="image">Image</Label>
      <Input {...register("image")} id="image" placeholder="Image" />

      <Button>
        {product && product.id ? "Update Product" : "Create Product"}
      </Button>
    </form>
  );
}
