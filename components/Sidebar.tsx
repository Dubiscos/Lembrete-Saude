"use client";

import Link from 'next/link';
// Importa o useRouter para navegação
import { usePathname, useRouter } from 'next/navigation'; 
import { Plus, ListChecks, LogOut, Bell } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const userName = "Gabriela";
  
  // Inicializa o router
  const router = useRouter(); 

  // Ajusta a função 'isActive' para os caminhos corretos
  const isActive = (path: string) => pathname === path;

  // Função para lidar com o clique no "Sair"
  const handleLogout = () => {
    // Redireciona para /login (que está fora da pasta /home)
    router.push('/login');
  };

  return (
    <nav className="flex flex-col justify-between w-72 h-screen p-6 bg-white shadow-lg">
      <div>
        {/* Cabeçalho Perfil */}
        <div className="flex items-center justify-between mb-10">
          <Link 
            href="/home/perfil-paciente" // <-- LINK AQUI
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              G
            </div>
            <span className="font-semibold text-lg text-gray-800 group-hover:text-sky-500">
              {userName} ▼
            </span>
          </Link>
          <button className="text-gray-500 hover:text-gray-800">
            <Bell size={22} />
          </button>
        </div>

        {/* Links de Navegação */}
        <ul className="flex flex-col gap-3">
          <li>
            <Link 
              href="/home/adicionar" // <<< CORRIGIDO AQUI
              className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${
                isActive('/home/adicionar') // <<< CORRIGIDO AQUI
                  ? 'bg-lime-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className={`p-1 rounded-full ${
                isActive('/home/adicionar') // <<< CORRIGIDO AQUI
                  ? 'bg-white text-lime-500' 
                  : 'bg-lime-500 text-white'
              }`}>
                <Plus size={16} strokeWidth={3} />
              </div>
              <span>Adicionar Lembrete</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/home" // <<< CORRIGIDO AQUI (link para a home)
              className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${
                isActive('/home') // <<< CORRIGIDO AQUI
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ListChecks size={20} className="text-gray-500" />
              <span>Meus Lembretes</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Botão de Sair com o onClick para redirecionar */}
      <button 
        onClick={handleLogout} 
        className="w-full p-3 font-semibold text-white bg-sky-400 rounded-lg hover:bg-sky-500 transition-colors"
      >
        Sair
      </button>
    </nav>
  );
}