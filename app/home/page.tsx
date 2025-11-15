"use client";

import { useState } from 'react';
import { Pencil, Trash2, Calendar, FileText, X } from 'lucide-react';
import { ToastSucesso } from '@/components/ToastSucesso';

// Dados de exemplo (mock)
const mockLembretes = [
  {
    id: 1,
    titulo: "Exame de rotina",
    dataHora: "2025-09-25T15:00",
    descritivo: "Hemograma completo no Laboratório Vida.",
  },
  {
    id: 2,
    titulo: "Consulta Cardiologista",
    dataHora: "2025-10-10T09:30",
    descritivo: "Levar exames de sangue e teste ergométrico.",
  },
];

type Lembrete = typeof mockLembretes[0];

export default function MeusLembretesPage() {
  const [lembretes, setLembretes] = useState(mockLembretes);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Função para salvar a edição
  const handleSave = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // Lógica de salvar (aqui apenas fecha o modo de edição)
    // Você precisaria pegar os dados do form e atualizar o 'lembretes'
    console.log(`Salvando lembrete ${id}`);
    setEditingId(null);
    setShowToast(true); // Mostra o toast de "editado com sucesso"
  };

  // Função para deletar
  const handleDelete = (id: number) => {
    setLembretes(lembretes.filter(l => l.id !== id));
    console.log(`Deletando lembrete ${id}`);
  };

  // Formata a data para "25/09 - 15:00"
  const formatarData = (dataStr: string) => {
    const data = new Date(dataStr);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes} - ${hora}:${minuto}`;
  };

  return (
    <>
      {showToast && (
        <ToastSucesso
          message="Lembrete editado com sucesso."
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meus Lembretes</h1>

        <div className="space-y-4">
          {lembretes.map((lembrete) => (
            <div key={lembrete.id}>
              {/* === MODO EDIÇÃO === */}
              {editingId === lembrete.id ? (
                <form 
                  onSubmit={(e) => handleSave(e, lembrete.id)}
                  className="bg-sky-100 p-6 rounded-2xl shadow-md border border-sky-200 space-y-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold text-sky-800">{lembrete.titulo}</h2>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  {/* Campo Data e Hora (Edição) */}
                  <div className="relative">
                    <label htmlFor={`data-${lembrete.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Data e Hora
                    </label>
                    <input
                      type="datetime-local"
                      id={`data-${lembrete.id}`}
                      defaultValue={lembrete.dataHora}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <Calendar className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                  </div>
                  
                  {/* Campo Descrição (Edição) */}
                  <div className="relative">
                    <label htmlFor={`desc-${lembrete.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição
                    </label>
                    <textarea
                      id={`desc-${lembrete.id}`}
                      rows={3}
                      defaultValue={lembrete.descritivo}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <FileText className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 font-semibold text-white bg-lime-500 rounded-lg hover:bg-lime-600"
                  >
                    Salvar
                  </button>
                </form>
              ) : (
                /* === MODO VISUALIZAÇÃO === */
                <div className="bg-sky-100 p-4 rounded-2xl shadow-sm border border-sky-200 flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-800">
                    {lembrete.titulo} - {formatarData(lembrete.dataHora)}
                  </span>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setEditingId(lembrete.id)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-full"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(lembrete.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-white rounded-full"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}