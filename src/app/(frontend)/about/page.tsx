import { Section, Container } from '@/components/craft'
import { getGlobal } from '@/lib/data'
import { About as Props } from '@/payload-types'
import { Prose } from '@/components/craft'
import { RichText } from '@payloadcms/richtext-lexical/react'

import Image from 'next/image'

export default async function Index() {
  const content = (await getGlobal({ slug: 'about' })) as Props
  const pfp: any = content.profileImage

  return (
    <Section>
      <About pfp={pfp} content={content} />
    </Section>
  )
}

const About = ({ pfp, content }: { pfp: any; content: Props }) => {
  return (
    <Container className="fade-in-up delay-header">
      <div className="max-w-xl space-y-8">
        <Image
          className="w-full fade-in-up delay-studies h-auto rounded-lg border"
          src={pfp.url}
          alt={pfp.alt}
          width={pfp.width}
          height={pfp.height}
        />
        <h1 className="text-xl font-medium">{content.title}</h1>
        <h2 className="text-muted-foreground">{content.id}</h2>
      </div>

      {content.content && (
        <Prose className="fade-in-up delay-footer">
          <RichText data={content.content} />
        </Prose>
      )}
    </Container>
  )
}
