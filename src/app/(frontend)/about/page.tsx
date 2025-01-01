import { Section, Container } from '@/components/craft'
import { getGlobal } from '@/lib/data'
import { About as Props } from '@/payload-types'
import { Prose } from '@/components/craft'
import { RichText } from '@payloadcms/richtext-lexical/react'

import Image from 'next/image'
import Link from 'next/link'

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
    <Container className="space-y-8">
      <div className="max-w-xl space-y-8">
        <Image
          className="w-36 h-36 border aspect-square rounded-full object-cover fade-in-up delay-header"
          src={pfp.url}
          alt={pfp.alt}
          width={pfp.width}
          height={pfp.height}
        />
        <h1 className="text-xl sr-only font-medium fade-in-up delay-studies">{content.title}</h1>
      </div>

      {content.content && (
        <Prose className="fade-in-up delay-studies delay-footer">
          <RichText data={content.content} />
        </Prose>
      )}

      <div className="grid gap-2">
        <Link href={content.resumeLink}>Resume</Link>
        <Link href={content.linkedinLink}>LinkedIn</Link>
        <Link href={content.emailLink}>Email</Link>
      </div>
    </Container>
  )
}
