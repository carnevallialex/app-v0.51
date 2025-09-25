import React from 'react';
import { Home, Users, Briefcase, DollarSign, Hammer, Package, Wrench, BarChart3, Palette } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'projects', label: 'Projetos', icon: Briefcase },
    { id: 'products', label: 'Produtos', icon: Package },
    { id: 'materials', label: 'Materiais', icon: Wrench },
    { id: 'stock', label: 'Estoque', icon: BarChart3 },
    { id: 'products', label: 'Produtos', icon: Package },
    { id: 'materials', label: 'Materiais', icon: Wrench },
    { id: 'stock', label: 'Estoque', icon: BarChart3 },
    { id: 'finance', label: 'Finanças', icon: DollarSign },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-amber-900 via-amber-800 to-orange-900 text-white shadow-2xl backdrop-blur-sm">
      <div className="p-6 border-b border-amber-700/50">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-3 shadow-lg">
            <Hammer className="h-7 w-7 text-amber-800" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white drop-shadow-sm">MarcenariaPro</h1>
            <p className="text-sm text-amber-200/90">Gestão Completa</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-8 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 mb-2 text-left transition-all duration-300 rounded-xl hover:bg-amber-700/70 hover:shadow-lg hover:translate-x-1 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-amber-700 to-orange-600 text-white shadow-lg transform translate-x-1'
                  : 'text-amber-100 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-700/50 bg-gradient-to-t from-amber-900/50">
        <div className="text-center text-amber-200/80">
          <p className="text-xs">Sistema de Gestão</p>
          <p className="text-xs">v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;