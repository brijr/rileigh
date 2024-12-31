import { getCaseStudyBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Section, Container, Prose } from '@/components/craft'

import Image from 'next/image'

export const revalidate = 600

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getCaseStudyBySlug({ slug })
  const image: any = item?.featuredImage

  if (!item) {
    return notFound()
  }

  return (
    <Section>
      <Container>
        <article className="grid gap-12">
          <div className="max-w-xl space-y-8">
            <h2 className="font-medium text-xl">{item.title}</h2>
            <h3 className="text-muted-foreground">{item.summary}</h3>
          </div>

          <Image
            className="w-full h-auto rounded-lg border"
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />

          {item.summary && (
            <Prose>
              <RichText data={item.content} />
            </Prose>
          )}
        </article>
      </Container>
    </Section>
  )
}
