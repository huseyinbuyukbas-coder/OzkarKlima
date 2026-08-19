import React from 'react';
import { WHY_US_FEATURES, BUSINESS_INFO } from '../data/businessData';
import { 
  ShieldCheck, 
  Sparkles, 
  BadgePercent, 
  Zap, 
  Users, 
  Star,
  CheckCircle,
  MessageCircle,
  Phone
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  BadgePercent,
  Zap,
  Users,
  Star
};

export const WhyUsSection: React.FC = () => {
  return (
    <section id="neden-biz" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>Müşteri Geri Bildirimlerine Dayalı Hizmet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Neden Klima Teknik Servis Özkar?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Google değerlendirmelerinde müşterilerimizin tekrar tekrar dile getirdiği güven, titizlik ve uygun fiyat ilkeleriyle çalışıyoruz.
            </p>
          </div>

          {/* Big Google Score Card */}
          <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-2xl font-extrabold text-white">5.0 / 5.0 Puan</p>
              <p className="text-xs text-slate-300">52 Gerçek Google Değerlendirmesi</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* 6 Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_FEATURES.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Customer Quote Highlight Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              5.0
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                "Bu devirde böyle ustaya can kurban, fiyatı en uygun olacak şekilde ayarladı, halden anlıyor..."
              </p>
              <p className="text-xs text-slate-500 mt-1">azat aktaş • Gerçek Google Müşteri Yorumu</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 flex-shrink-0 w-full sm:w-auto">
            <a
              id="whyus-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp'tan Ulaş</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
