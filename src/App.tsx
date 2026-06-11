/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import InteractivePlanner from './components/InteractivePlanner';
import ServicesGrid from './components/ServicesGrid';
import SocialProof from './components/SocialProof';
import Timeline from './components/Timeline';
import FAQForm from './components/FAQForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-brand-orange selection:text-zinc-950 overflow-x-hidden min-h-screen">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Presentation Stage (Primeira Dobra) */}
      <Hero />

      {/* 3. Pain Points & Solution Diagnosis */}
      <PainPoints />

      {/* 4. Interactive Layout Planner & Equipment Estimator */}
      <InteractivePlanner />

      {/* 5. Our Core Services Grid Catalog */}
      <ServicesGrid />

      {/* 6. Brand Differentials & Social Proof Grid */}
      <SocialProof />

      {/* 7. Step-by-Step implementation Walkthrough */}
      <Timeline />

      {/* 8. Conversion Capture Form & Interactive Accordion FAQ */}
      <FAQForm />

      {/* 9. Corporate Physical Address & Schedule info Footer */}
      <Footer />

      {/* 10. Persistent Pulsate WhatsApp shortcut bubble */}
      <WhatsAppFloat />
    </div>
  );
}
