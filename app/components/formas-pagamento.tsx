"use client";

import { PixIcon } from "./icons/pix";
import { CreditCard } from "lucide-react";

export function FormasPagamento() {
  return (
    <div className="mt-8 border-t pt-4">
      <h3 className="text-sm font-bold text-gray-700 mb-3">
        Formas de Pagamento
      </h3>

      <div className="flex gap-4 justify-center">
        {/* Exemplo com ícones (ou use imagens dos logos) */}
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-2 rounded-full text-green-700">
            <PixIcon size={20} />
            <span className="font-bold text-xs">PIX</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-2 rounded-full text-blue-700">
            <CreditCard />
          </div>
          <span className="text-xs mt-1 text-gray-500">Crédito Via Link</span>
        </div>
      </div>
    </div>
  );
}
