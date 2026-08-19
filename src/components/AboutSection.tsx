import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  Phone,
  Wrench,
  ThumbsUp
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <span>Hakkımızda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Klima Teknik Servis Özkar
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Klima Teknik Servis Özkar</strong>, Bahçelievler merkezli olarak klima alım satım, montaj, periyodik bakım, arıza tespiti ve yedek parça alanlarında kapsamlı teknik servis hizmeti sunmaktadır.
              </p>
              
              <p>
                Hizmet anlayışımızın temelini; müşterilerimizin Google değerlendirmelerinde en çok vurguladığı <strong className="text-slate-900">temiz ve titiz işçilik</strong>, <strong className="text-slate-900">güvenilirlik</strong>, <strong className="text-slate-900">zamanında hızlı servis</strong> ve <strong className="text-slate-900">uygun fiyat</strong> prensipleri oluşturur.
              </p>

              <p>
                Klimanızın markası veya arıza türü ne olursa olsun, şişirilmiş fiyatlar yerine ihtiyaca yönelik en doğru ve dürüst çözümü sunuyor, yaşam alanlarınızda konforunuzu kesintiye uğratmadan işlemlerimizi tamamlıyoruz.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Temiz ve Titiz Çalışma</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Evinizde ve iş yerinizde titiz montaj ve hijyenik bakım.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Şeffaf ve Makul Fiyat</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Müşteri dostu, net ve sürprizsiz fiyat politikası.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hızlı ve Çözüm Odaklı</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Arıza tespiti ve parça değişiminde hızlı sonuca ulaşma.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Güler Yüzlü Esnaflık</h4>
                  <p className="text-xs text-slate-500 mt-0.5">İlgili, kibar ve işinin ehli teknik servis yaklaşımı.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                id="about-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp'tan Ulaşın</span>
              </a>
              <a
                id="about-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Key Details Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    ÖK
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">İşletme Bilgileri</h3>
                    <p className="text-xs text-slate-400">Klima Teknik Servis Özkar</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  5.0 ★ (52 Yorum)
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Adres</span>
                    <span className="text-slate-200 font-medium">{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Telefon / WhatsApp</span>
                    <span className="text-slate-200 font-bold">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Çalışma Saatleri</span>
                    <span className="text-slate-200 font-medium">{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Wrench className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Hizmet Kapsamı</span>
                    <span className="text-slate-200 font-medium">Klima Alım Satım, Arıza, Bakım, Montaj ve Yedek Parça</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white">Yerel Hizmet:</p>
                <p className="text-slate-300">
                  Bahçelievler ve çevre semtlerde klima bakım, onarım ve montaj ihtiyaçlarınız için hızlı servis olanağı.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
