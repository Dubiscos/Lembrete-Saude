import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function ToastSucesso({ message, onClose }: ToastProps) {
  
  // Fecha o toast automaticamente após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="flex items-center gap-4 w-full max-w-sm p-4 bg-white rounded-xl shadow-lg border border-gray-200">
        <CheckCircle2 size={28} className="text-lime-500 flex-shrink-0" />
        <span className="text-base font-medium text-gray-800">
          {message}
        </span>
        <button 
          onClick={onClose} 
          className="ml-auto p-1 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}