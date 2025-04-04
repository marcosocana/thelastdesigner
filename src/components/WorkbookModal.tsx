import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
interface WorkbookModalProps {
  onClose: () => void;
  isOpen: boolean;
}
const WorkbookModal = ({
  onClose,
  isOpen
}: WorkbookModalProps) => {
  const isMobile = useIsMobile();
  return <Dialog open={isOpen} onOpenChange={open => {
    if (!open) onClose();
  }}>
      <DialogContent className={`border-2 border-black p-0 overflow-hidden ${isMobile ? 'max-w-xs' : 'max-w-lg'}`} style={{
      backgroundColor: "#F8DE29"
    }}>
        <div className="p-6">
          <button onClick={onClose} className="absolute right-4 top-4 bg-black text-white rounded-full w-8 h-8 inline-flex items-center justify-center">
            <X size={18} />
            <span className="sr-only">Cerrar</span>
          </button>
          
          <div className="flex flex-col items-center">
            {/* Imagen del libro */}
            <img src="/lovable-uploads/5bb19d0b-87aa-4745-8ce8-01d511fd03c7.png" alt="Workbook para Diseñadores" className="w-full max-w-md mb-6 brutalist-border" />
            
            <h2 className={`font-bold ${isMobile ? 'text-base' : 'text-xl'} mb-4 text-center`}>¡Consigue el Workbook para Diseñadores! Más de 100 páginas de retos y actividades para convertirte en un mejor diseñador. </h2>
            
            <a href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" target="_blank" rel="noopener noreferrer" className="brutalist-btn inline-block text-center uppercase mt-2">
              Más información
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default WorkbookModal;