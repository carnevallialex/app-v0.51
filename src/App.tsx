import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Finance from './pages/Finance';
import Products from './pages/Products';
import Materials from './pages/Materials';
import Stock from './pages/Stock';
import { AppProvider } from './contexts/AppContext';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <Clients />;
      case 'projects':
        return <Projects />;
      case 'finance':
        return <Finance />;
      case 'products':
        return <Products />;
      case 'materials':
        return <Materials />;
      case 'stock':
        return <Stock />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-1 ml-64 p-6">
          {renderPage()}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;