/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Adicione esta função aqui
  async redirects() {
    return [
      {
        source: '/', // O caminho de origem (a raiz)
        destination: '/home', // O caminho de destino
        permanent: false, // Mude para 'true' em produção se desejar
      },
    ]
  },
};

export default nextConfig;
