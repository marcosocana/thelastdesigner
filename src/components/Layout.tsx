
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-white brutalist-grid">
      <header className="p-4 brutalist-border border-t-0 border-l-0 border-r-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* Logo para móvil */}
            <img src="/APP.svg" alt="The Last Designer" className="h-10 w-auto md:hidden" />
            
            {/* Logo para escritorio */}
            <img src="/TLD.svg" alt="The Last Designer" className="h-10 w-auto hidden md:block" />
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link to="/manifiesto" className="uppercase font-bold hover:underline">
              {t('manifesto')}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-6 overflow-x-hidden">
        {children}
      </main>
      
      <footer className="p-4 brutalist-border border-b-0 border-l-0 border-r-0 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} THE LAST DESIGNER - {t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
