
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-white brutalist-grid">
      <header className="p-4 brutalist-border border-t-0 border-l-0 border-r-0">
        <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center">
  {/* Logo para móvil */}
  <img src="src/APP.png" alt="The Last Designer" className="h-10 w-auto md:hidden" />
  
  {/* Logo para escritorio */}
  <img src="src/TLD.png" alt="The Last Designer" className="h-10 w-auto hidden md:block" />
</Link>
          
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/manifiesto" className="uppercase font-bold hover:underline">
                  Manifiesto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-6 overflow-x-hidden">
        {children}
      </main>
      
      <footer className="p-4 brutalist-border border-b-0 border-l-0 border-r-0 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} THE LAST DESIGNER - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
