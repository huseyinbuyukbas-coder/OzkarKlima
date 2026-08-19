import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { 
  Phone, 
  MessageCircle, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  Wrench, 
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle atmospheric background accents (clean, not slop) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Top Google & Rating pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-xs sm:text-sm shadow-inner">
              <div className="flex items-center space-x-1 bg-amber-500/20 text-amber-300 font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 / 5</span>
              </div>
              <span className="text-slate-200 font-medium">52 Müşteri Yorumu</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-sky-400 font-medium">Bahçelievler / İstanbul</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Klima Servisinde <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
                  Güvenilir Çözüm
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                Klima alım satım, montaj, bakım, arıza ve yedek parça hizmetlerinde profesyonel teknik destek.
              </p>
            </div>

            {/* Service Prompt Callout */}
            <div className="flex items-center space-x-3 text-sm text-slate-300 bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-xl max-w-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              <p className="text-slate-200 font-medium">
                <strong className="text-white">Bugün servis desteği için bize ulaşın:</strong> Bahçelievler ve çevre ilçelere aynı gün hızlı servis randevusu.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* WhatsApp Button */}
              <a
                id="hero-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-800/50 transition-all group"
              >
                <MessageCircle className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp'tan Ulaş</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Call Button */}
              <a
                id="hero-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-900/40 hover:shadow-blue-800/50 transition-all group"
              >
                <Phone className="w-5 h-5 mr-2.5 group-hover:rotate-12 transition-transform" />
                <span>Hemen Ara: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Temiz & Titiz İşçilik</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Uygun & Şeffaf Fiyat</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Zamanında Hızlı Servis</span>
              </div>
            </div>

          </div>

          {/* Right Card / Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-sky-400 flex items-center justify-center border border-blue-500/30">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">Klima Teknik Servis Özkar</h3>
                    <p className="text-xs text-slate-400">Yetkin & Güvenilir Servis Hizmeti</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 flex items-center space-x-1">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>09:00 - 19:00</span>
                </div>
              </div>

              {/* Service tags */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hızlı Hizmet Alanlarımız</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Arıza & Onarım</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Klima Montajı</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Periyodik Bakım</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Sökme & Taşıma</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Alım & Satım</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Yedek Parça</span>
                  </div>
                </div>
              </div>

              {/* Featured real customer testimonial excerpt */}
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold flex items-center">
                    ★★★★★ <span className="ml-1 text-slate-300 font-normal">Hacı Burak DİKİCİ</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Google Yorumu</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  "Mükemmel işçilik titizlik güler yüz ve uygun fiyat kesinlikle tavsiye ederim"
                </p>
              </div>

              {/* Location pin note */}
              <div className="flex items-start space-x-2.5 text-xs text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              {/* Direct Quick Action */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-colors"
              >
                <span>Servis Talebini WhatsApp ile İlet</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
