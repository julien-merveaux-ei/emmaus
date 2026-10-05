import { Printer } from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, A, PageHero, Button } from '../components/ui.jsx'

export default function DonsAchats() {
  return (
    <>
      <PageHero eyebrow="Dons & achats" title="Agir contre toute forme d'exclusion">
        <p>
          Cliquez <A doc="../Archives/dons&achats.pdf" className="link">ici</A> pour imprimer et diffuser un flyer de
          présentation de notre communauté à votre entourage
        </p>
      </PageHero>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="flex justify-center">
            <Button variant="dark" doc="../Archives/dons&achats.pdf"><Printer className="size-4" /> Flyer de présentation</Button>
          </Reveal>
          <div className="mt-14 grid items-start gap-8 md:grid-cols-2">
            <Reveal>
              <img src={site('dons&achats.jpg')} alt="À quoi servent vos dons et achats" className="w-full rounded-[28px] shadow-2xl ring-1 ring-ink/5" />
            </Reveal>
            <Reveal delay={150}>
              <img src={site('../Archives/sansvous.jpg')} alt="" className="w-full rounded-[28px] shadow-2xl ring-1 ring-ink/5" />
            </Reveal>
          </div>
          <Reveal className="mt-14 flex flex-col items-center gap-8">
            <img src={site('passubir.gif')} alt="" className="rounded-xl" />
            <Button doc="../Archives/Emmaus_2019_2.pdf">Présentation rapide d'Emmaüs</Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
