import { getPayload } from 'payload'
import { cache } from 'react'

import configPromise from '@payload-config'

export const getCaseStudyBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export const getAllCaseStudies = cache(async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
    sort: ['title'],
    pagination: false,
  })

  return result.docs || []
})

export const getGlobal = cache(async ({ slug }: { slug: 'home' | 'about' }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.findGlobal({
    slug: `${slug}`,
    depth: 2,
    fallbackLocale: false,
  })

  return result || null
})
