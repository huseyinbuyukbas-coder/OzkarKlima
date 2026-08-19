/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProblemsSection } from './components/ProblemsSection';
import { BuySellSection } from './components/BuySellSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceRequestForm } from './components/ServiceRequestForm';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Main Header & Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Trust Indicators Strip */}
        <TrustBadges />

        {/* 3. Services Section (8 Core Services) */}
        <ServicesSection />

        {/* 4. Why Us / Customer Sentiments Section */}
        <WhyUsSection />

        {/* 5. AC Problems & Troubleshooting Quick Guide */}
        <ProblemsSection />

        {/* 6. AC Buy & Sell Section */}
        <BuySellSection />

        {/* 7. Real Google Reviews (15 Authentic Reviews & 5.0 Rating) */}
        <ReviewsSection />

        {/* 8. Service Request Form (Direct to WhatsApp) */}
        <ServiceRequestForm />

        {/* 9. About Section */}
        <AboutSection />

        {/* 10. Contact & Location (Interactive Google Map + Directions) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom CTA Bar (WhatsApp & Call) */}
      <MobileStickyBar />
    </div>
  );
}
