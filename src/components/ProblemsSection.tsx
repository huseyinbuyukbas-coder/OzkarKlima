import React, { useState } from 'react';
import { COMMON_PROBLEMS, BUSINESS_INFO, ProblemItem } from '../data/businessData';
import { 
  AlertTriangle, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  HelpCircle, 
  CheckCircle,
  Wrench
} from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem>(COMMON_PROBLEMS[0]);

  const getProblemWhatsAppUrl = (message: string) => {
    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="arizalar" className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-400" />
            <span>Hızlı Arıza & Çözüm Rehberi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Klimanızda Bir Sorun mu Var?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Yaşadığınız klima arızasını seçin, olası nedenlerini öğrenin ve tek tıkla WhatsApp üzerinden servis talep edin.
          </p>
        </div>

        {/* Two column interactive troubleshooting layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Problem Selector List (Left Column) */}
          <div className="lg:col-span-6 space-y-2.5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Sık Karşılaşılan Problemler (Seçiniz)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[580px] overflow-y-auto pr-1">
              {COMMON_PROBLEMS.map((problem) => {
                const isSelected = selectedProblem.id === problem.id;
                return (
                  <button
                    key={problem.id}
                    id={`problem-btn-${problem.id}`}
                    onClick={() => setSelectedProblem(problem)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                        : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-sky-400'}`}></span>
                      <span className="font-semibold text-sm">{problem.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Problem Details & WhatsApp Action Box (Right Column) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-700">
                <div>
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Seçilen Problem Detayı</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedProblem.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              {/* Symptom */}
              <div className="space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase">
                  <HelpCircle className="w-4 h-4" />
                  <span>Belirti / Yaşanan Durum</span>
                </div>
                <p className="text-sm text-slate-200">{selectedProblem.symptom}</p>
              </div>

              {/* Possible Cause */}
              <div className="space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center space-x-2 text-xs font-bold text-sky-400 uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Olası Teknik Nedenler</span>
                </div>
                <p className="text-sm text-slate-200">{selectedProblem.possibleCause}</p>
              </div>

              {/* Recommendation */}
              <div className="space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase">
                  <CheckCircle className="w-4 h-4" />
                  <span>Teknik Tavsiyemiz</span>
                </div>
                <p className="text-sm text-slate-200">{selectedProblem.recommendation}</p>
              </div>

              {/* Direct CTAs for this problem */}
              <div className="pt-2 space-y-3">
                <a
                  id="problem-whatsapp-cta-btn"
                  href={getProblemWhatsAppUrl(selectedProblem.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/50 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp'tan Servis Talep Et</span>
                </a>

                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Doğrudan aramak için:</span>
                  <a 
                    href={BUSINESS_INFO.phoneTel} 
                    className="text-sky-400 hover:text-sky-300 font-semibold flex items-center"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
