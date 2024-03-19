import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            © 2024 Todos os direitos reservados
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Desenvolvido por Lucas Alves</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
