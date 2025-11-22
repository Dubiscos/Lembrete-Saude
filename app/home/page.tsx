"use client";

import { useState, useEffect } from 'react';
import { Pencil, Trash2, Calendar, FileText, X } from 'lucide-react';
import { ToastSucesso } from '@/components/ToastSucesso';
import { listarLembretesAction, deletarLembreteAction, atualizarLembreteAction } from '@/app/actions';


type Lembrete = {
  id: string;
  tipo: string;
  dataHora: Date; 
  descritivo: string | null;
  recorrencia: string;
};

export default function MeusLembretesPage() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    const resultado = await listarLembretesAction();
    if (resultado.success) {
      setLembretes(resultado.data as unknown as Lembrete[]);
    }
  }


  const handleSave = async (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    const resultado = await atualizarLembreteAction(id, formData);

    if (resultado.success) {
      setEditingId(null);
      setToastMessage("Lembrete atualizado com sucesso.");
      setShowToast(true);
      carregarDados(); 
    } else {
      alert("Erro ao atualizar.");
    }
  };


  const handleDelete = async (id: string) => {
    if(!confirm("Tem certeza que deseja excluir?")) return;

    const resultado = await deletarLembreteAction(id);
    
    if (resultado.success) {
      setLembretes(lembretes.filter(l => l.id !== id));
      setToastMessage("Lembrete excluído.");
      setShowToast(true);
    } else {
      alert("Erro ao excluir.");
    }
  };

  const formatarDataExibicao = (data: Date) => {
    if (!data) return "";
    const d = new Date(data);
    const dia = String(d.getDate()).padStart(2, '0');
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const hora = String(d.getHours()).padStart(2, '0');
    const minuto = String(d.getMinutes()).padStart(2, '0');
    return `${dia}/${mes} - ${hora}:${minuto}`;
  };

 
  const formatarParaInput = (data: Date) => {
    if (!data) return "";
    const d = new Date(data);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); 
    return d.toISOString().slice(0, 16);
  };

  return (
    <>
      {showToast && (
        <ToastSucesso
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meus Lembretes</h1>

        {lembretes.length === 0 && (
           <p className="text-gray-500 text-center">Nenhum lembrete encontrado.</p>
        )}

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
                    <h2 className="text-2xl font-bold text-sky-800 capitalize">{lembrete.tipo}</h2>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data e Hora</label>
                    <input
                      name="dataHora"
                      type="datetime-local"
                      defaultValue={formatarParaInput(lembrete.dataHora)}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <Calendar className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                    <textarea
                      name="descritivo"
                      rows={3}
                      defaultValue={lembrete.descritivo || ""}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-900"
                    />
                    <FileText className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 font-semibold text-white bg-lime-500 rounded-lg hover:bg-lime-600"
                  >
                    Salvar Alterações
                  </button>
                </form>
              ) : (

                <div className="bg-sky-100 p-4 rounded-2xl shadow-sm border border-sky-200 flex justify-between items-center">
                  <div className='flex flex-col'>
                    <span className="font-semibold text-lg text-gray-800 capitalize">
                      {lembrete.tipo} 
                    </span>
                    <span className="text-sm text-gray-600">
                        {formatarDataExibicao(lembrete.dataHora)}
                    </span>
                    {lembrete.descritivo && (
                        <span className="text-xs text-gray-500 mt-1">{lembrete.descritivo}</span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setEditingId(lembrete.id)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-full transition-all"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(lembrete.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-white rounded-full transition-all"
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