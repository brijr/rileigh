import { Section, Container } from '@/components/craft'
import { getAllCaseStudies } from '@/lib/data'
import { getGlobal } from '@/lib/data'
import { Home } from '@/payload-types'
import { CaseStudy } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 600

export default async function Index() {
  const data: CaseStudy[] = await getAllCaseStudies()
  const content: Home = await getGlobal({ slug: 'home' })

  return (
    <Section>
      <Header content={content} />
      <CaseStudies data={data} />
    </Section>
  )
}

const Header = ({ content }: { content: Home }) => {
  return (
    <Container className="fade-in-up delay-header">
      <div className="max-w-xl space-y-8">
        <h1 className="text-xl font-medium">{content.title}</h1>
        <h2 className="text-muted-foreground craft">
          {content.summary} <Link href="/about">More about me</Link>.
        </h2>
      </div>
    </Container>
  )
}

const CaseStudies = ({ data }: { data: CaseStudy[] }) => {
  return (
    <Container className="fade-in-up delay-studies grid sm:grid-cols-2 gap-6">
      {data.map((study, index) => (
        <CaseStudyCard {...study} key={study.id || index} />
      ))}
    </Container>
  )
}

const CaseStudyCard = (study: CaseStudy) => {
  const image: any = study?.featuredImage

  return (
    <Link className="grid gap-2 group" href={`/${study.slug}`}>
      <Image
        className="rounded-md border w-full h-48 object-cover overflow-hidden group-hover:opacity-90 group-hover:-mt-1 group-hover:mb-1 transition-all"
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <h3 className="mt-2 group-hover:underline underline-offset-4">{study.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{study.summary}</p>
    </Link>
  )
}
