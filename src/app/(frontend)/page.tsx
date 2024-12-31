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
          <h1 className="text-xl font-medium">Rileigh Tower</h1>
          <h2 className="text-muted-foreground">
            UX Researcher and Anthropologist based in the Utah. Passionate about creating
            accessible, intuitive, and inclusive digital experiences based on user insights.
          </h2>
        </div>
      </Container>
    </Section>
  )
}
