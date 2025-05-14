'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-red-500">JMPC</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/dashboard" 
                className={`${isActive('/dashboard')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Dashboard
              </Link>
              <Link 
                href="/repairs" 
                className={`${isActive('/repairs')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Reparações
              </Link>
              <Link 
                href="/clients" 
                className={`${isActive('/clients')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Clientes
              </Link>
              <Link 
                href="/inventory" 
                className={`${isActive('/inventory')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Inventário
              </Link>
              <Link 
                href="/settings" 
                className={`${isActive('/settings')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Definições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;