import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Navigation, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-16 sm:py-20 lg:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-200/70 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <span>İletişim & Konum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Klima Servisi İçin Bize Ulaşın
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Arıza tespiti, montaj, bakım ve klima alım satım işlemleri için bizi arayabilir, WhatsApp'tan yazabilir veya atölyemize ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Info Cards + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Action Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telefon</p>
                <a 
                  href={BUSINESS_INFO.phoneTel} 
                  className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-blue-700 transition-colors block mt-0.5"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <p className="text-xs text-slate-500 mt-1">Her gün 09:00 - 19:00 arası arayabilirsiniz.</p>
                <div className="mt-3">
                  <a
                    id="contact-call-now-btn"
                    href={BUSINESS_INFO.phoneTel}
                    className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    <span>Hemen Ara</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp Destek Hattı</p>
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                >
                  0530 147 45 03
                </a>
                <p className="text-xs text-slate-500 mt-1">Hızlı mesaj ve fotoğraf göndermek için tıklayın.</p>
                <div className="mt-3">
                  <a
                    id="contact-whatsapp-now-btn"
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    <span>WhatsApp'tan Yaz</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Adres & Çalışma Saatleri</p>
                <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">
                  {BUSINESS_INFO.address}
                </p>
                <div className="flex items-center space-x-2 text-xs text-slate-600 mt-2 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
                <div className="mt-3">
                  <a
                    id="contact-get-directions-card-btn"
                    href={BUSINESS_INFO.googleMapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-slate-800 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-1.5" />
                    <span>Yol Tarifi Al</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed + Route Button */}
          <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[400px]">
            
            {/* Map Top Bar */}
            <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-5 h-5 text-sky-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">Klima Teknik Servis Özkar</h4>
                  <p className="text-xs text-slate-300">Siyavuşpaşa, Bahçelievler / İstanbul</p>
                </div>
              </div>
              <a
                id="map-directions-top-btn"
                href={BUSINESS_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 mr-1.5" />
                <span>Yol Tarifi Al (Google Haritalar)</span>
              </a>
            </div>

            {/* Interactive Map Frame with Fallback Info */}
            <div className="relative flex-1 w-full min-h-[340px] bg-slate-100">
              <iframe
                title="Klima Teknik Servis Özkar Konumu"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Footer Note with Local SEO neighborhoods */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-medium text-slate-700">
                Bahçelievler, Siyavuşpaşa, Şirinevler, Kocasinan, Soğanlı, Yenibosna ve çevresi
              </span>
              <a
                href={BUSINESS_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-bold hover:underline inline-flex items-center"
              >
                <span>Haritada Büyüt</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
