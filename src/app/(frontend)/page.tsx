import { Section, Container, Main } from '@/components/craft'

export const revalidate = 600

export default function Index() {
  return (
    <>
      <Header />
    </>
  )
}

const Header = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-xl space-y-8">
          <h1 className="text-xl">Rileigh Tower</h1>
          <h2 className="text-muted-foreground">
            UX Researcher based in the Utah, passionate about creating accessible, intuitive, and
            inclusive digital experiences.
          </h2>
        </div>
      </Container>
    </Section>
  )
}
