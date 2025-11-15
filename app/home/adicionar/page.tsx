"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Repeat, Type, FileText } from 'lucide-react';
import { ToastSucesso } from '@/components/ToastSucesso';

export default function AdicionarLembretePage() {
  const [showToast, setShowToast] = useState(false);

  // --- CORREÇÃO AQUI ---
  // 1. Criar estados para controlar os campos do formulário
  const [tipo, setTipo] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [descritivo, setDescritivo] = useState("");
  const [recorrencia, setRecorrencia] = useState("nenhuma");
  // --------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Agora você pode acessar os dados dos estados:
    console.log("Novo Lembrete:", {
      tipo,
      dataHora,
      descritivo,
      recorrencia,
    });
    
    // Mostrar o toast
    setShowToast(true);

    // Limpar o formulário (opcional)
    setTipo("");
    setDataHora("");
    setDescritivo("");
    setRecorrencia("nenhuma");
  };

  return (
    <>
      {/* O Toast fica "escondido" e aparece quando 'showToast' é true */}
      {showToast && (
        <ToastSucesso 
          message="Lembrete criado com sucesso." 
          onClose={() => setShowToast(false)} 
        />
      )}

      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Adicionar Lembrete</h1>

        {/* Formulário de Criação */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Campo Tipo */}
          <div className="relative">
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              id="tipo"
              value={tipo} // <-- 2. Usar 'value' no <select>
              onChange={(e) => setTipo(e.target.value)} // <-- 3. Usar 'onChange'
              required // Adicionado para validação
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none text-gray-900"
            >
              {/* 4. Remover 'selected' e 'disabled' da primeira opção */}
              <option value="" disabled>Selecione o tipo</option>
              <option value="consulta">Consulta</option>
              <option value="exame">Exame</option>
              <option value="cirurgia">Cirurgia</option>
            </select>
            <Type className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          {/* Campo Data e Hora */}
          <div className="relative">
            <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
              Data e Hora
            </label>
            <input
              type="datetime-local"
              id="data"
              value={dataHora}
              onChange={(e) => setDataHora(e.target.value)}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
            />
            <CalendarIcon className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          {/* Campo Descritivo */}
          <div className="relative">
            <label htmlFor="descritivo" className="block text-sm font-medium text-gray-700 mb-1">
              Descritivo
            </label>
            <textarea
              id="descritivo"
              rows={4}
              value={descritivo}
              onChange={(e) => setDescritivo(e.target.value)}
              placeholder="Ex: Levar exames anteriores, jejum de 8 horas..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
            />
            <FileText className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          {/* Campo Recorrência */}
          <div className="relative">
            <label htmlFor="recorrencia" className="block text-sm font-medium text-gray-700 mb-1">
              Recorrência
            </label>
            <select
              id="recorrencia"
              value={recorrencia}
              onChange={(e) => setRecorrencia(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none text-gray-900"
            >
              <option value="nenhuma">Não repetir</option>
              <option value="2-semanas">A cada 2 semanas</option>
              <option value="1-mes">A cada 1 mês</option>
              <option value="6-meses">A cada 6 meses</option>
              <option value="1-ano">A cada 1 ano</option>
            </select>
            <Repeat className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
          </div>

          {/* Botão Criar */}
          <button
            type="submit"
            className="w-full p-3 font-semibold text-white bg-lime-500 rounded-lg shadow-md hover:bg-lime-600 transition-colors"
          >
            Criar Lembrete
          </button>
        </form>
      </div>
    </>
  );
}