import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ChatWidget } from '../components/layout/ChatWidget';
import { Hero } from '../components/sections/Hero';
import { ServicesBar } from '../components/sections/ServicesBar';
import { MonthlyOffers } from '../components/sections/MonthlyOffers';
import { SignatureBanner } from '../components/sections/SignatureBanner';
import { LuxurySection } from '../components/sections/LuxurySection';
import { DesignYourStory } from '../components/sections/DesignYourStory';
import { Partners } from '../components/sections/Partners';
import { Newsletter } from '../components/sections/Newsletter';
import { Certifications } from '../components/sections/Certifications';

/** Home "index pc" del Figma, en el mismo orden vertical. */
export function Home() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <SiteHeader />
        <main>
          <Hero />
          <ServicesBar />
          <MonthlyOffers />
          <SignatureBanner />
          <LuxurySection />
          <DesignYourStory />
          <Partners />
          <Newsletter />
          <Certifications />
        </main>
      </div>
      <SiteFooter />
      <ChatWidget />
    </>
  );
}
