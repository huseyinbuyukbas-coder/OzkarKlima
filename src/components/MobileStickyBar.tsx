import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { MessageCircle, Phone } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div 
      id="mobile-sticky-bar"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* WhatsApp Button */}
        <a
          id="sticky-mobile-whatsapp-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3.5 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
          aria-label="WhatsApp'tan Yaz"
        >
          <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          id="sticky-mobile-call-btn"
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center py-3.5 px-4 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
          aria-label="Hemen Ara"
        >
          <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
          <span className="truncate">Hemen Ara</span>
        </a>

      </div>
    </div>
  );
};
