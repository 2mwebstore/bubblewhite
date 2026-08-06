import { useHead } from '@vueuse/head'

const SITE_NAME = 'Bubble White'
const SITE_URL = 'https://bubblewhite.co'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * Sets per-page SEO tags: title, description, canonical, Open Graph, Twitter card, and JSON-LD.
 * @param {Object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} [opts.path] - route path, used to build canonical url
 * @param {string} [opts.image]
 * @param {string} [opts.type] - 'website' | 'product' | 'article'
 * @param {Object} [opts.jsonLd] - structured data object to inject as JSON-LD
 */
export function useSeo({ title, description, path = '', image = DEFAULT_IMAGE, type = 'website', jsonLd = null }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Minimal Style, Maximum Comfort`
  const url = `${SITE_URL}${path}`

  const script = []
  if (jsonLd) {
    script.push({
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd),
    })
  }

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [{ rel: 'canonical', href: url }],
    script,
  })
}

export { SITE_NAME, SITE_URL }
