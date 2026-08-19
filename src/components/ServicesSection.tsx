import React from 'react';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '../data/businessData';
import { 
  Wrench, 
  Sparkles, 
  Cpu, 
  Repeat, 
  Truck, 
  ShoppingBag, 
  Settings, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Check,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Sparkles,
  Cpu,
  Repeat,
  Truck,
  ShoppingBag,
  Settings,
  ShieldCheck,
};

export const ServicesSection: React.FC = () => {
  const getEncodedWhatsAppUrl = (message: string) => {
    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="hizmetler" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <span>Uzman Teknik Kadro</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Klima Teknik Servis Hizmetlerimiz
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Bahçelievler ve tüm çevre ilçelerde split, inverter ve salon tipi klimalarınız için profesyonel, temiz işçilikli ve garantili teknik servis çözümleri.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const isCall = service.ctaType === 'call';
            const actionLink = isCall 
              ? BUSINESS_INFO.phoneTel 
              : getEncodedWhatsAppUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-200"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Teknik Destek
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Feature bullet points */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Action */}
                <div className="pt-2">
                  <a
                    href={actionLink}
                    target={isCall ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                      isCall 
                        ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-sm hover:shadow' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow'
                    }`}
                  >
                    {isCall ? (
                      <Phone className="w-4 h-4 mr-2" />
                    ) : (
                      <MessageCircle className="w-4 h-4 mr-2" />
                    )}
                    <span>{service.ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Direct Service Call */}
        <div className="mt-12 sm:mt-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Klimanız için acil servis mi gerekiyor?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Haftanın 7 günü 09:00 - 19:00 saatleri arasında arıza tespiti, bakım veya montaj talepleriniz için hızlıca ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              id="services-bottom-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp'tan Yaz</span>
            </a>
            <a
              id="services-bottom-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Hemen Ara: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
