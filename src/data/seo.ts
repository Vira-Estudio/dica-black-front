import { faqs } from '@/data/faq'

const DEFAULT_SITE_URL = 'https://dicablack.com.br'

const rawSiteUrl = import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
export const siteUrl = rawSiteUrl.endsWith('/')
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl

export const seo = {
  description:
    'Organize e revise técnicas de Jiu-Jitsu com o Dica Black. Memorização, clareza no rola e videoaulas para estudar fora do tatame — por Lucas Braganti.',
  email: 'dicablack@gmail.com',
  ogImage: `${siteUrl}/og-image.webp`,
  organizationName: 'Dica Black',
  person: {
    jobTitle: 'Professor de Jiu-Jitsu',
    name: 'Lucas Braganti',
  },
  product: {
    description:
      'Biblioteca e mini curso digital para organizar, revisar e memorizar técnicas de Jiu-Jitsu, com videoaulas para estudar fora do tatame.',
    name: 'Dica Black',
    price: '47.90',
    priceCurrency: 'BRL',
  },
  title: 'Dica Black | Organize e revise técnicas de Jiu-Jitsu',
  url: `${siteUrl}/`,
} as const

export function buildJsonLdGraph() {
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const productId = `${siteUrl}/#product`
  const personId = `${siteUrl}/#person`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': organizationId,
        '@type': 'Organization',
        email: seo.email,
        name: seo.organizationName,
        url: seo.url,
      },
      {
        '@id': websiteId,
        '@type': 'WebSite',
        description: seo.description,
        name: seo.organizationName,
        publisher: { '@id': organizationId },
        url: seo.url,
      },
      {
        '@id': personId,
        '@type': 'Person',
        jobTitle: seo.person.jobTitle,
        name: seo.person.name,
        url: seo.url,
      },
      {
        '@id': productId,
        '@type': 'Product',
        brand: { '@id': organizationId },
        description: seo.product.description,
        image: seo.ogImage,
        name: seo.product.name,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: seo.product.price,
          priceCurrency: seo.product.priceCurrency,
          url: seo.url,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
          name: faq.question,
        })),
      },
    ],
  }
}
