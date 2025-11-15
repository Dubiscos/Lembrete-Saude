"use client";

import { useState } from 'react';
import { User, Mail, Phone, Calendar, HeartPulse, ShieldAlert, Ambulance, Lock } from 'lucide-react';

export default function PerfilPacientePage() {
  // Mock de dados (você traria isso do banco de dados)
  const [nome, setNome] = useState("Gabriela");
  const [email, setEmail] = useState("gabriela@email.com");
  const [dataNasc, setDataNasc] = useState("1990-05-15");
  const [telefone, setTelefone] = useState("(11) 98765-4321");
  const [tipoSan, setTipoSan] = useState("O+");
  const [alergias, setAlergias] = useState("Dipirona, Frutos do Mar");
  const [contatoNome, setContatoNome] = useState("Marcos (Irmão)");
  const [contatoTel, setContatoTel] = useState("(11) 91234-5678");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Meu Perfil (Paciente)</h1>
      
      <form className="space-y-8">
        {/* Seção Informações Pessoais */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Informações Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CampoForm label="Nome Completo" Icon={User} value={nome} onChange={setNome} />
            <CampoForm label="E-mail" Icon={Mail} value={email} onChange={setEmail} type="email" />
            <CampoForm label="Data de Nascimento" Icon={Calendar} value={dataNasc} onChange={setDataNasc} type="date" />
            <CampoForm label="Telefone" Icon={Phone} value={telefone} onChange={setTelefone} />
          </div>
        </div>

        {/* Seção Informações de Saúde */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Informações de Saúde</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CampoForm label="Tipo Sanguíneo" Icon={HeartPulse} value={tipoSan} onChange={setTipoSan} />
            <CampoForm label="Alergias Conhecidas" Icon={ShieldAlert} value={alergias} onChange={setAlergias} />
          </div>
        </div>
        
        {/* Seção Contato de Emergência */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Contato de Emergência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CampoForm label="Nome do Contato" Icon={User} value={contatoNome} onChange={setContatoNome} />
            <CampoForm label="Telefone do Contato" Icon={Ambulance} value={contatoTel} onChange={setContatoTel} />
          </div>
        </div>

        {/* Botão Salvar */}
        <button
          type="submit"
          className="w-full p-3 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

// Componente helper para os campos do formulário
const CampoForm = ({ label, Icon, value, onChange, type = "text" }: any) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
    />
    <Icon className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
  </div>
);