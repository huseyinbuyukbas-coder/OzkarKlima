import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Star, 
  Clock, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  Wrench
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Klima Servisi', href: '#arizalar' },
    { name: 'Klima Alım Satım', href: '#alim-satim' },
    { name: 'Neden Özkar', href: '#neden-biz' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for quick trust & hours */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 mr-1 text-amber-400" />
              <span>Google 5.0 (52 Müşteri Yorumu)</span>
            </div>
            <div className="hidden sm:flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-sky-400" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-slate-300">
            <div className="hidden md:flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-sky-400" />
              <span>{BUSINESS_INFO.addressShort}</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="text-emerald-400 font-medium flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
              Bugün Servis Desteği Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          scrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo / Brand Name */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-sky-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                  Özkar <span className="text-blue-700 font-extrabold">Klima</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Teknik Servis • Bahçelievler
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* WhatsApp Button */}
              <a
                id="navbar-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm hover:shadow transition-all group"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                id="navbar-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm hover:shadow transition-all group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                aria-label="Telefonla Ara"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                aria-label="WhatsApp'tan Yaz"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors ml-1"
                aria-label="Menüyü Aç/Kapat"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-blue-700 hover:bg-blue-50/60 rounded-xl transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
              <a
                id="mobile-menu-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-base shadow-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>WhatsApp'tan Ulaş</span>
              </a>
              <a
                id="mobile-menu-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-blue-700 text-white font-semibold text-base shadow-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Hemen Ara: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-center text-slate-500 flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>5.0 Google Puanı • 52 Gerçek Müşteri Yorumu</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
