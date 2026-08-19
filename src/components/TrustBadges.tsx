import React from 'react';
import { Star, Sparkles, Zap, DollarSign, ShieldCheck, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const TrustBadges: React.FC = () => {
  const highlights = [
    {
      icon: Star,
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
      title: '5.0 Google Puanı',
      subtitle: '52 Gerçek Müşteri Yorumu',
    },
    {
      icon: Sparkles,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      title: 'Temiz & Titiz İşçilik',
      subtitle: 'Özenli montaj ve hijyenik bakım',
    },
    {
      icon: Zap,
      iconColor: 'text-sky-600 bg-sky-50 border-sky-200',
      title: 'Hızlı & Zamanında Servis',
      subtitle: 'Aynı gün randevu ve anında müdahale',
    },
    {
      icon: DollarSign,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      title: 'Uygun & Şeffaf Fiyat',
      subtitle: 'Şişirilmemiş, dürüst esnaf fiyatı',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      title: 'Profesyonel Teknik Servis',
      subtitle: 'Deneyimli teknisyen ve güvenilir hizmet',
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.iconColor}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{item.title}</h4>
                  <p className="text-xs text-slate-500 truncate">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
