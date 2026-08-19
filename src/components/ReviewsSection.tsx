import React, { useState } from 'react';
import { REVIEWS, BUSINESS_INFO, ReviewItem } from '../data/businessData';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  MessageCircle,
  ThumbsUp,
  MapPin
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'montaj' | 'tamir' | 'bakim' | 'alim-satim'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews = filter === 'all' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.category === filter || r.category === 'genel');

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  return (
    <section id="yorumlar" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
            <span>Gerçek Müşteri Deneyimleri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>

          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-lg">Google'da 5.0 / 5 puan</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 font-medium">52 müşteri yorumu</span>
          </div>

          <p className="text-xs text-slate-500">
            Google yorumları işletmenin müşteri deneyimine dair geri bildirimleridir.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Tüm Yorumlar (15 Öne Çıkan)' },
            { key: 'tamir', label: 'Arıza & Tamir' },
            { key: 'montaj', label: 'Montaj & Söküm' },
            { key: 'bakim', label: 'Klima Bakımı' },
            { key: 'alim-satim', label: 'Alım & Satım & Taşıma' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setFilter(tab.key as any);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.key
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid Display (Desktop) & Swipe Carousel (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className="space-y-3">
                {/* Header with Avatar initial & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center text-sm">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{rev.author}</h4>
                      <div className="flex items-center text-amber-400 text-xs">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Doğrulanmış
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200/80 text-xs font-semibold text-blue-900 line-clamp-1">
                  "{rev.highlight}"
                </div>

                {/* Review Body */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Footer source indicator */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center text-slate-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
                  Google Haritalar Yorumu
                </span>
                <span className="text-[11px] text-slate-400">5.0 ★</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom review CTA */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-lg font-bold text-white">Siz de kaliteli ve temiz klima servisi almak ister misiniz?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Bahçelievler ve çevre ilçelerde aynı gün servis imkanı ile hizmetinizdeyiz.</p>
          </div>
          <a
            id="reviews-cta-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>WhatsApp'tan Hemen Ulaşın</span>
          </a>
        </div>

      </div>
    </section>
  );
};
