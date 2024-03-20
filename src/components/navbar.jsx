import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 my-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-black text-7xl -mt-4 font-bold">Finan<span className='text-green-500'>tize</span></div>
          </div>
          <div className="items-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
