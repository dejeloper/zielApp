// import { BACKEND_URL } from "@/lib/configEnv";
const BACKEND_URL = `http://localhost:5000`;

export async function createProdut(productData: any) {
  const res = await fetch(`${BACKEND_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
  return data;
}

export async function getAllProducts() {
  const res = await fetch(`${BACKEND_URL}/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
  });
  const data = await res.json();
  return data;
}

export async function getProduct(id: number) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
  });
  const data = await res.json();
  return data;
}

export async function updateProduct(id: number, productData: any) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
    body: JSON.stringify({
      ...productData,
      price: parseFloat(productData.price),
    }),
  });

  const data = await res.json();
  return data;
}

export async function deleteProduct(id: number) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
  });
  const data = await res.json();
  return data;
}
