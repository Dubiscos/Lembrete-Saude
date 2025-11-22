"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Repeat, Type, FileText } from 'lucide-react';
import { ToastSucesso } from '@/components/ToastSucesso';
import { criarLembreteAction } from '@/app/actions'; 

export default function AdicionarLembretePage() {
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const [tipo, setTipo] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [descritivo, setDescritivo] = useState("");
  const [recorrencia, setRecorrencia] = useState("nenhuma");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const resultado = await criarLembreteAction({
      tipo,
      dataHora,
      descritivo,
      recorrencia
    });

    setIsLoading(false);

    if (resultado.success) {
      setShowToast(true);
      setTipo("");
      setDataHora("");
      setDescritivo("");
      setRecorrencia("nenhuma");
    } else {
      alert("Erro ao salvar lembrete. Tente novamente.");
    }
  };

  return (
    <>
      {showToast && (
        <ToastSucesso 
          message="Lembrete criado com sucesso." 
          onClose={() => setShowToast(false)} 
        />
      )}

      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Adicionar Lembrete</h1>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >

          <div className="relative">

              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
              <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none text-gray-900">
                <option value="" disabled>Selecione o tipo</option>
                <option value="consulta">Consulta</option>
                <option value="exame">Exame</option>
                <option value="cirurgia">Cirurgia</option>
              </select>
              <Type className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          <div className="relative">
             <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">Data e Hora</label>
             <input type="datetime-local" id="data" value={dataHora} onChange={(e) => setDataHora(e.target.value)} required className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"/>
             <CalendarIcon className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>
          
          <div className="relative">
             <label htmlFor="descritivo" className="block text-sm font-medium text-gray-700 mb-1">Descritivo</label>
             <textarea id="descritivo" rows={4} value={descritivo} onChange={(e) => setDescritivo(e.target.value)} placeholder="Ex: Levar exames anteriores..." className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"/>
             <FileText className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          <div className="relative">
            <label htmlFor="recorrencia" className="block text-sm font-medium text-gray-700 mb-1">Recorrência</label>
            <select id="recorrencia" value={recorrencia} onChange={(e) => setRecorrencia(e.target.value)} className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none text-gray-900">
              <option value="nenhuma">Não repetir</option>
              <option value="2-semanas">A cada 2 semanas</option>
              <option value="1-mes">A cada 1 mês</option>
              <option value="6-meses">A cada 6 meses</option>
              <option value="1-ano">A cada 1 ano</option>
            </select>
            <Repeat className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          <button
            type="submit"
            disabled={isLoading} 
            className="w-full p-3 font-semibold text-white bg-lime-500 rounded-lg shadow-md hover:bg-lime-600 transition-colors disabled:bg-gray-400"
          >
            {isLoading ? "Salvando..." : "Criar Lembrete"}
          </button>
        </form>
      </div>
    </>
  );
}