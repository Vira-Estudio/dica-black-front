import { lazy, Suspense } from 'react'
import { BuySection } from '../components/buy-section'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { SeoJsonLd } from '../components/seo-json-ld'

const ReviewsSection = lazy(() =>
  import('../components/reviews-section').then((m) => ({
    default: m.ReviewsSection,
  }))
)
const PresentationSection = lazy(() =>
  import('../components/presentation-section').then((m) => ({
    default: m.PresentationSection,
  }))
)
const WillReceiveSection = lazy(() =>
  import('../components/will-receive-section').then((m) => ({
    default: m.WillReceiveSection,
  }))
)
const ChecklistSection = lazy(() =>
  import('../components/checklist-section').then((m) => ({
    default: m.ChecklistSection,
  }))
)
const PromotionSection = lazy(() =>
  import('../components/promotion-section').then((m) => ({
    default: m.PromotionSection,
  }))
)
const ReceiveAccessSection = lazy(() =>
  import('../components/receive-access-section').then((m) => ({
    default: m.ReceiveAccessSection,
  }))
)
const TwoOptionsSection = lazy(() =>
  import('../components/two-options-section').then((m) => ({
    default: m.TwoOptionsSection,
  }))
)
const AboutSection = lazy(() =>
  import('../components/about-section').then((m) => ({
    default: m.AboutSection,
  }))
)
const FaqSection = lazy(() =>
  import('../components/faq-section').then((m) => ({
    default: m.FaqSection,
  }))
)

export function Home() {
  return (
    <>
      <SeoJsonLd />
      <Header />

      <main>
        <Hero />
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
