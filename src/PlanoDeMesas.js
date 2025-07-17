import React, { useState } from "react";

export default function PlanoDeMesas() {
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const mesas = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nombre: `Mesa ${i + 1}`,
    capacidad: 8,
    precio: 200000,
    incluye: "Cena + bebida a elección",
    estado: "disponible",
  }));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold mb-6">Plano de salón - Reservá tu mesa</h1>

      {mesaSeleccionada && (
        <div className="mb-4 p-4 bg-white rounded-xl shadow-lg border text-center">
          <p className="text-xl font-semibold mb-2">
            ¿Reservás la <span className="text-blue-600">{mesaSeleccionada.nombre}</span>?
          </p>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              alert(`Reservaste la ${mesaSeleccionada.nombre}`);
              setMesaSeleccionada(null);
            }}
          >
            Confirmar reserva
          </button>
          <button
            className="ml-2 px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setMesaSeleccionada(null)}
          >
            Cancelar
          </button>
        </div>
      )}

      <div className="grid grid-cols-5 gap-6 w-full max-w-4xl">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`flex flex-col items-center justify-center h-28 w-28 rounded-full shadow-md cursor-pointer transform transition 
              hover:scale-105 hover:shadow-xl bg-green-400 ${
                mesaSeleccionada?.id === mesa.id ? "ring-4 ring-blue-500" : ""
              }`}
            onClick={() => setMesaSeleccionada(mesa)}
          >
            <span className="font-bold">{mesa.nombre}</span>
            <span>${mesa.precio.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
