import { AboutSection } from '../components/about-section'
import { BuySection } from '../components/buy-section'
import { ChecklistSection } from '../components/checklist-section'
import { FaqSection } from '../components/faq-section'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { PresentationSection } from '../components/presentation-section'
import { PromotionSection } from '../components/promotion-section'
import { ReceiveAccessSection } from '../components/receive-access-section'
import { ReviewsSection } from '../components/reviews-section'
import { SeoJsonLd } from '../components/seo-json-ld'
import { TwoOptionsSection } from '../components/two-options-section'
import { WillReceiveSection } from '../components/will-receive-section'

export function Home() {
  return (
    <>
      <SeoJsonLd />
      <Header />

      <main>
        <Hero />
        <ReviewsSection />
        <PresentationSection />
        <WillReceiveSection />
        <ChecklistSection />
        <PromotionSection />
        <BuySection />
        <ReceiveAccessSection />
        <TwoOptionsSection />
        <AboutSection />
        <BuySection />
        <FaqSection />
      </main>

      <Footer />
    </>
  )
}
