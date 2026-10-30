import { buildJsonLdGraph } from '@/data/seo'

export function SeoJsonLd() {
  const jsonLd = buildJsonLdGraph()

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  )
}
