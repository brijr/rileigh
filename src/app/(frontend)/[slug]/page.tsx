import { getCaseStudyBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Section, Container, Prose } from '@/components/craft'

export const revalidate = 600

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getCaseStudyBySlug({ slug })

  if (!item) {
    return notFound()
  }

  return (
    <Section>
      <Container>
        <article className="grid gap-12">
          <div className="max-w-xl space-y-8 fade-in-up delay-header">
            <h2 className="font-medium text-xl">{item.title}</h2>
            <h3 className="text-muted-foreground">{item.summary}</h3>
          </div>

          {item.summary && (
            <Prose className="fade-in-up delay-footer">
              <RichText data={item.content} />
            </Prose>
          )}
        </article>
      </Container>
    </Section>
  )
}
