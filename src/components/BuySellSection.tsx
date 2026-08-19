import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { ShoppingBag, CheckCircle, MessageCircle, Phone, ArrowRight, RefreshCw, Sparkles, DollarSign } from 'lucide-react';

export const BuySellSection: React.FC = () => {
  return (
    <section id="alim-satim" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5 mr-1" />
            <span>Alım & Satım Hizmeti</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Klima Alım Satım ve Değerinde Nakit Alım
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eski klimanızı yerinde değerinde satabilir veya tüm kontrolleri ve bakımları yapılmış güvenilir klimaları temin edebilirsiniz.
          </p>
        </div>

        {/* 2-Column Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Klima Satmak İsteyenler İçin */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Eski Klimanızı Değerlendirin</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Eski Klimanızı Satmak mı İstiyorsunuz?</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Taşınma, yenileme veya ihtiyaç fazlası durumlarında split ve inverter klimalarınızı yerinde inceliyor, değerinde nakit olarak satın alıyoruz. Söküm işlemi ustamız tarafından titizlikle gerçekleştirilir.
              </p>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Klimanızın fotoğraflarını WhatsApp'tan gönderin</span>
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Hızlı ön değerlendirme ve adil fiyat teklifi alın</span>
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Adresinizde profesyonel söküm ve nakit ödeme</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                id="buysell-sell-whatsapp-btn"
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Merhaba Klima Teknik Servis Özkar, satmak istediğim bir klimam var. Fotoğraflarını paylaşarak fiyat teklifi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Klima Satışı İçin WhatsApp'tan Yazın</span>
              </a>
            </div>
          </div>

          {/* Card 2: Klima Almak İsteyenler İçin */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Kontrollü & Güvenilir Cihazlar</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">İkinci El veya Yeni Klima mı Arıyorsunuz?</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Tüm teknik testleri, gaz basınç kontrolleri ve hijyenik bakımları yapılmış, kullanıma hazır ikinci el ve yeni klima alternatiflerimiz hakkında bilgi alabilirsiniz. Montaj dahil teslim edilir.
              </p>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Mekanınıza uygun BTU kapasite danışmanlığı</span>
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Bakımı yapılmış ve test edilmiş sağlam cihazlar</span>
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Profesyonel montaj ve devreye alma dahil hizmet</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                id="buysell-buy-whatsapp-btn"
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Merhaba Klima Teknik Servis Özkar, klima satın almak istiyorum. Mevcut seçenekler ve fiyatlar hakkında bilgi alabilir miyim?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Mevcut Klimaları WhatsApp'tan Sorun</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
