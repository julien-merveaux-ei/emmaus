import { Mountain, Footprints, Leaf, Users, BedDouble, UtensilsCrossed, Trees, Train, Map, Webcam, MapPin, Mail, Phone } from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, A, PageHero, Button } from '../components/ui.jsx'

const FOR_WHO = [
  [Mountain, 'se reposer, se ressourcer, être au calme'],
  [Footprints, 'faire de la randonnée, du ski et du VTT'],
  [Leaf, "méditer au contact d'une nature grandiose"],
  [Users, 'venir en groupe (19 p maximum) ou en individuel,'],
]

const FEATURES = [
  [BedDouble, 'ses 8 chambres à 2 ou 3 lits et ses 2 cuisines équipées'],
  [UtensilsCrossed, 'ses 2 salles à manger et ses salles de convivialité / jeux'],
  [Trees, 'ses espaces extérieurs et ses nombreux points de vue.'],
]

export default function Ferme() {
  return (
    <>
      <PageHero eyebrow="La Ferme" title={<>La maison de vacances <span className="text-sun">du Lac Blanc</span> (Vosges)</>}>
        <p>Cette ancienne ferme de montagne est mise à disposition des personnes, familles, groupes qui souhaitent ...</p>
      </PageHero>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOR_WHO.map(([icon, text], i) => (
              <Reveal key={text} delay={i * 80}>
                <Card className="h-full">
                  <IconBadge icon={icon} />
                  <p className="mt-6 font-display text-xl font-semibold leading-snug">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img src={site('ferm.gif')} alt="La Ferme Emmaüs 68" width="320" height="240" className="w-full rounded-[32px] shadow-2xl" />
            </Reveal>
            <Reveal delay={150}>
              <H2>
                la Ferme Emmaüs 68 <span className="text-sun-2">(altitude 1045m)</span> vous accueille avec ...
              </H2>
              <ul className="mt-8 space-y-3">
                {FEATURES.map(([Icon, text]) => (
                  <li key={text} className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                    <Icon className="size-6 shrink-0 text-ink-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/60">
                Propriété privée gérée par Emmaüs Cernay 68 <br />(387 visiteurs pour 1064 nuitées en 2021)
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24 sm:py-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <IconBadge icon={Train} />
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                Située à 11 kms du village d'Orbey et à environ 30 kms de Colmar. Accès par le train jusqu'à Colmar puis
                par bus jusqu'à Orbey (du lundi au samedi).
              </p>
              <p className="mt-4 text-lg font-semibold">Le trajet Orbey jusqu'à la ferme est assuré.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="dark" doc="carte.pdf"><Map className="size-4" /> Plan d'accès routier</Button>
                <Button variant="light" href="https://www.lac-blanc.com/webcam-de-la-station"><Webcam className="size-4" /> Les webcams panoramiques du Lac Blanc</Button>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={150}>
            <Card dark className="grain h-full overflow-hidden">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-sun">Contacts et réservations</h2>
              <p className="mt-6 font-display text-xl font-bold">Maison de vacances Emmaüs du Lac Blanc</p>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-sun" /> 342 Blanc Rupt 68370 ORBEY (France)</li>
                <li className="flex gap-3"><Mail className="size-5 shrink-0 text-sun" /> <A href="mailto:ferme.emmaus68@nordnet.fr" className="link">ferme.emmaus68@orange.fr</A></li>
                <li className="flex gap-3"><Phone className="size-5 shrink-0 text-sun" /> Tél / Fax <A href="tel:+33389713371" className="link">03.89.71.33.71</A></li>
              </ul>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
