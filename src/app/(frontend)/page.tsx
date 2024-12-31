import { Section, Container } from '@/components/craft'
import { getAllCaseStudies } from '@/lib/data'
import { CaseStudy } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 600

export default async function Index() {
  const data: CaseStudy[] = await getAllCaseStudies()

  return (
    <Section>
      <Header />
      <CaseStudies data={data} />
    </Section>
  )
}

const Header = () => {
  return (
    <Container>
      <div className="max-w-xl space-y-8">
        <h1 className="text-xl font-medium">Rileigh Tower</h1>
        <h2 className="text-muted-foreground">
          UX Researcher and Anthropologist based in the Utah. Passionate about creating accessible,
          intuitive, and inclusive digital experiences based on user insights.
        </h2>
      </div>
    </Container>
  )
}

const CaseStudies = ({ data }: { data: CaseStudy[] }) => {
  return (
    <Container className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        className="rounded-md border w-full h-48 object-cover overflow-hidden group-hover:opacity-90"
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <h3 className="group-hover:underline underline-offset-4">{study.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{study.summary}</p>
    </Link>
  )
}
