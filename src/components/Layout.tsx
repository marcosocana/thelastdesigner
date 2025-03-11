import React from "react";
import { Link } from "react-router-dom";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="min-h-screen flex flex-col bg-white brutalist-grid">
      <header className="p-4 brutalist-border border-t-0 border-l-0 border-r-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:animate-glitch">🔥🌎 THE LAST DESIGNER</Link>
          
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="uppercase font-bold hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/manifiesto" className="uppercase font-bold hover:underline">
                  Manifiesto
                </Link>
              </li>
              {/* El enlace a "Reto" ha sido eliminado, ahora solo se accede mediante el botón de la home */}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
      
      <footer className="p-4 brutalist-border border-b-0 border-l-0 border-r-0 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} THE LAST DESIGNER - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>;
};
export default Layout;