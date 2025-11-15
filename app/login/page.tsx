"use client";

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

import Link from 'next/link';

export default function LoginPage() {
  const [tab, setTab] = useState('paciente'); // 'paciente' ou 'profissional'
  const [showPassword, setShowPassword] = useState(false);

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

        {/* Formulário */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="relative mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Digite seu e-mail"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Digite sua senha"
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
          
          <div className="text-right">
            <a href="#" className="text-sm font-medium text-sky-500 hover:text-sky-600">
              Esqueceu sua senha?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-3 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Acessar conta
            </button>
          </div>

          {/* Botão de Cadastro Dinâmico (agora um Link) */}
          <Link
            href="/cadastro"
            className="block w-full text-center p-3 font-semibold text-sky-600 bg-sky-100 rounded-lg shadow-sm hover:bg-sky-200 transition-colors"
          >
            {tab === 'paciente'
              ? 'Não tem conta? Cadastre-se'
              : 'Cadastre-se como profissional'}
          </Link>
        </form>
      </div>
    </div>
  );
}