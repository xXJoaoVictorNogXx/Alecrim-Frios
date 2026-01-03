import React from "react";
import Image from "next/image";
import { products } from "../../data/produtos";

export default async function ProdutoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="p-4">Produto não encontrado.</div>;
  }

  return (
    <main className="min-h-screen  pb-10 bg-linear-to-b from-olive via-green-900 to-green-950">
      <div className="p-4">
        <h2 className="text-lg font-serif text-beige mb-4">{product.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-110 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-gray-900">{product.name}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                  R$ {product.price}
                </span>
              </div>
              <p className="text-gray-500 font-serif text-sm mt-1">
                {product.description}
              </p>
              <a
                href={`/produto/${product.id}`}
                target="_blank"
                className="mt-4 block w-full bg-green-600 text-white text-center py-3 rounded-lg font-serif hover:bg-green-700 transition"
              >
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
