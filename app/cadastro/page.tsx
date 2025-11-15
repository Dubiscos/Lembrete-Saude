"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function CadastroPage() {
  const [tab, setTab] = useState('paciente'); // 'paciente' ou 'profissional'
  const [showPassword, setShowPassword] = useState(false);

  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica para criar a conta aqui
    console.log({
      tipo: tab,
      nome,
      email,
      senha,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-sky-500 mb-8">
        Lembrete Saúde
      </h1>
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Abas de Seleção */}
        <div className="flex mb-6 rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setTab('paciente')}
            className={`w-1/2 p-3 rounded-md font-semibold transition-all ${
              tab === 'paciente' 
                ? 'bg-sky-400 text-white shadow' 
                : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            Paciente
          </button>
          <button
            onClick={() => setTab('profissional')}
            className={`w-1/2 p-3 rounded-md font-semibold transition-all ${
              tab === 'profissional' 
                ? 'bg-sky-400 text-white shadow' 
                : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            Profissional da Saúde
          </button>
        </div>

        {/* Formulário de Cadastro */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <div className="relative mt-1">
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder="Digite seu nome completo"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="relative mt-1">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                placeholder="Crie uma senha"
                className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Campo Confirmar Senha */}
          <div>
            <label htmlFor="confirm-password"className="block text-sm font-medium text-gray-700">
              Confirmar Senha
            </label>
            <div className="relative mt-1">
              <input
                id="confirm-password"
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
                placeholder="Confirme sua senha"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            {/* Botão Criar Conta */}
            <button
              type="submit"
              className="w-full p-3 font-semibold text-white bg-lime-500 rounded-lg shadow hover:bg-lime-600 transition-colors"
            >
              Criar conta
            </button>

            {/* Link para Login */}
            <Link
              href="/login"
              className="block w-full text-center p-3 font-semibold text-sky-600 bg-sky-100 rounded-lg shadow-sm hover:bg-sky-200 transition-colors"
            >
              Já tem conta? Acesse aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}