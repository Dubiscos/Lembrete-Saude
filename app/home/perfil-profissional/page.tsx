"use client";

import { useState } from 'react';
import { User, Mail, Phone, Stethoscope, BadgeCheck, MapPin } from 'lucide-react';

export default function PerfilProfissionalPage() {
  // Mock de dados
  const [nome, setNome] = useState("Dr(a) Gabriela");
  const [email, setEmail] = useState("dr.gabriela@email.com");
  const [telefone, setTelefone] = useState("(11) 98765-4321");
  const [especialidade, setEspecialidade] = useState("Cardiologia");
  const [registro, setRegistro] = useState("CRM/SP 123456");
  const [localNome, setLocalNome] = useState("Clínica Coração Saudável");
  const [localEnd, setLocalEnd] = useState("Rua Fictícia, 123 - São Paulo, SP");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Meu Perfil (Profissional)</h1>
      
      <form className="space-y-8">
        {/* Seção Informações Pessoais */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Informações Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CampoForm label="Nome Completo" Icon={User} value={nome} onChange={setNome} />
            <CampoForm label="E-mail de Contato" Icon={Mail} value={email} onChange={setEmail} type="email" />
            <CampoForm label="Telefone" Icon={Phone} value={telefone} onChange={setTelefone} />
          </div>
        </div>

        {/* Seção Informações Profissionais */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Informações Profissionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CampoForm label="Especialidade Principal" Icon={Stethoscope} value={especialidade} onChange={setEspecialidade} />
            <CampoForm label="Nº de Registro (CRM, CRO, CRP, etc.)" Icon={BadgeCheck} value={registro} onChange={setRegistro} />
          </div>
        </div>
        
        {/* Seção Local de Atendimento */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Local de Atendimento</h2>
          <div className="space-y-6">
            <CampoForm label="Nome da Clínica/Hospital" Icon={MapPin} value={localNome} onChange={setLocalNome} />
            <CampoForm label="Endereço Completo" Icon={MapPin} value={localEnd} onChange={setLocalEnd} />
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

// Componente helper para os campos do formulário (o mesmo de antes)
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