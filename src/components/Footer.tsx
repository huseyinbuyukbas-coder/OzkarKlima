import React from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  Wrench, 
  ChevronRight, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Klima Teknik Servis <span className="text-sky-400">Özkar</span>
                </span>
                <p className="text-xs text-slate-400">Bahçelievler / İstanbul</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Klima alım satım, arıza, bakım, montaj ve yedek parça teknik hizmetleri. Temiz işçilik, uygun fiyat ve güvenilir teknik destek anlayışıyla hizmetinizdeyiz.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 / 5</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">52 Müşteri Yorumu</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                id="footer-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                <span>WhatsApp'tan Ulaş</span>
              </a>
              <a
                id="footer-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition-colors"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Ana Sayfa', href: '#hero' },
                { name: 'Hizmetlerimiz', href: '#hizmetler' },
                { name: 'Klima Arızaları', href: '#arizalar' },
                { name: 'Neden Özkar', href: '#neden-biz' },
                { name: 'Müşteri Yorumları', href: '#yorumlar' },
                { name: 'Servis Talep Formu', href: '#servis-talep' },
                { name: 'Hakkımızda', href: '#hakkimizda' },
                { name: 'İletişim', href: '#iletisim' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-slate-600" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">İletişim Bilgileri</h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="font-bold text-white hover:text-sky-400">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 text-slate-200"
                >
                  WhatsApp: 0530 147 45 03
                </a>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span>Çalışma Saatleri: {BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500">
                Bahçelievler, Siyavuşpaşa, Şirinevler, Kocasinan, Soğanlı, Yenibosna ve çevresinde yerel teknik servis desteği.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Klima Teknik Servis Özkar. Tüm hakları saklıdır.</p>
          <div className="flex items-center space-x-4">
            <span>Klima Alım Satım • Arıza • Bakım • Montaj</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
              aria-label="Sayfanın Başına Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
