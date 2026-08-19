import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const ServiceRequestForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Klima Arıza / Tamir');
  const [notes, setNotes] = useState('');
  const [contactPref, setContactPref] = useState('WhatsApp ile Hızlı Mesaj');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Merhaba Klima Teknik Servis Özkar, web siteniz üzerinden servis talebi oluşturmak istiyorum.

Ad Soyad: ${fullName.trim() || 'Belirtilmedi'}
Telefon: ${phone.trim() || 'Belirtilmedi'}
Hizmet: ${serviceType}
Sorun/Açıklama: ${notes.trim() || 'Detaylı bilgi için aranmak istiyorum.'}
İletişim Tercihi: ${contactPref}`;

    const whatsappTargetUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappTargetUrl, '_blank', 'noopener,noreferrer');
  };

  const serviceOptions = [
    'Klima Arıza / Tamir',
    'Klima Bakımı',
    'Klima Montajı',
    'Klima Sökme',
    'Klima Taşıma',
    'Klima Alım Satım',
    'Yedek Parça',
    'Diğer'
  ];

  return (
    <section id="servis-talep" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <span>Hızlı Servis Kaydı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Klima Servisi İçin Bize Ulaşın
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Formu doldurarak servis talebinizi tek tıkla doğrudan WhatsApp hattımıza iletebilir veya hemen bizi arayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive WhatsApp Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Servis Talep Formu</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Gönder butonuna bastığınızda bilgileriniz otomatik olarak WhatsApp mesajına dönüştürülür.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ad Soyad *
                  </label>
                  <input
                    id="form-fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Telefon Numarası *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Örn: 05XX XXX XX XX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Service Type Selection */}
              <div>
                <label htmlFor="form-serviceType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Hizmet Türü *
                </label>
                <select
                  id="form-serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50 font-medium"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Notes / Issue description */}
              <div>
                <label htmlFor="form-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Klima Sorunu / Açıklama
                </label>
                <textarea
                  id="form-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Klimanın markası, arıza belirtisi veya montaj/bakım detaylarını kısaca yazabilirsiniz..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                ></textarea>
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Tercih Edilen İletişim Kanalı
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <label className={`flex items-center p-3 rounded-xl border cursor-pointer transition-colors ${contactPref === 'WhatsApp ile Hızlı Mesaj' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <input
                      type="radio"
                      name="contactPref"
                      value="WhatsApp ile Hızlı Mesaj"
                      checked={contactPref === 'WhatsApp ile Hızlı Mesaj'}
                      onChange={(e) => setContactPref(e.target.value)}
                      className="mr-2.5 text-emerald-600"
                    />
                    <span>WhatsApp ile Hızlı Mesaj</span>
                  </label>
                  <label className={`flex items-center p-3 rounded-xl border cursor-pointer transition-colors ${contactPref === 'Telefonla Arama' ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <input
                      type="radio"
                      name="contactPref"
                      value="Telefonla Arama"
                      checked={contactPref === 'Telefonla Arama'}
                      onChange={(e) => setContactPref(e.target.value)}
                      className="mr-2.5 text-blue-600"
                    />
                    <span>Telefonla Arama</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="form-submit-whatsapp-btn"
                  type="submit"
                  className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp ile Talebi Gönder</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verileriniz güvenle doğrudan WhatsApp uygulamanıza aktarılır.</span>
              </div>
            </form>
          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Quick Box */}
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-7 border border-emerald-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-emerald-950 text-lg">Direkt WhatsApp'tan Yaz</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Form doldurmadan anında mesajlaşmak, fotoğraf/video göndermek ve hızlı fiyat almak için:
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <a
                  id="direct-whatsapp-sidebar-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp Sohbeti Başlat</span>
                </a>
              </div>
            </div>

            {/* Direct Call Quick Box */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-7 border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-blue-950 text-lg">Hemen Telefonla Ara</h4>
                  <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                    Acil arıza, montaj veya teknik danışma için doğrudan ustamızı arayın:
                  </p>
                  <p className="text-xl font-extrabold text-blue-900 pt-1">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
              </div>
              <div className="mt-5">
                <a
                  id="direct-call-sidebar-btn"
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center py-3 px-5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold shadow transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>0530 147 45 03 Numarasını Ara</span>
                </a>
              </div>
            </div>

            {/* Working hours & service area trust pill */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3 text-xs text-slate-600">
              <div className="flex items-center space-x-2 text-slate-800 font-semibold">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Çalışma Saatleri: {BUSINESS_INFO.workingHours}</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Haftanın her günü servis desteği sağlanmaktadır.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
