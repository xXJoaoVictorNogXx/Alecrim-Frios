"use client";

import { products } from "./data/produtos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  pb-10 bg-linear-to-b from-olive via-green-900 to-green-950">
      <header className="p-4 text-white text-center flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Logo Frios & Delícias"
          width={150}
          height={150}
        />
      </header>

      <div className="p-4">
        <h2 className="text-lg font-serif text-beige mb-4">
          Bem-vindo ao Alecrim Frios!
        </h2>
        <h2 className="text-beige font-serif mb-2">Quem somos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-110 w-full">
              <Image
                src="/quem somos.jpg"
                alt="Quem Somos"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-serif"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-serif text-beige mb-4">Nosso Cardápio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
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

                <a
                  href={`/produto/${product.id}`}
                  target="_blank"
                  className="mt-4 block w-full bg-green-600 text-white text-center py-3 rounded-lg font-serif hover:bg-green-700 transition"
                >
                  Detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
