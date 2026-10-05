import { CalendarDays, Clock, Flame, ParkingCircle, TriangleAlert } from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, PageHero } from '../components/ui.jsx'

const EVENTS = [
  { theme: 'LEGO', day: 'Mercredi', date: '11', month: 'décembre' },
]

export default function Ventes() {
  return (
    <>
      <PageHero eyebrow="Ventes" title="Nos espaces de vente" image={site('../Site/image001.jpg')}>
        <p>(selon disponibilités)</p>
      </PageHero>

      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Card dark className="grain overflow-hidden sm:p-12">
              <IconBadge icon={Clock} />
              <h2 className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-white/60">Jours et horaires d'ouverture à la vente</h2>
              <p className="mt-4 font-display text-6xl font-extrabold leading-none tracking-tight text-sun sm:text-7xl">
                Mercredi <span className="text-white/40">et</span> Samedi
              </p>
              <p className="mt-6 text-2xl font-semibold">de 9h à 12h et de 14h à 17h</p>
              <p className="mt-2 text-white/60">dans tous nos espaces de vente</p>
            </Card>
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <img src={site('../Site/diap02.gif')} alt="Nos espaces de vente" width="320" height="240" className="w-full max-w-md -rotate-2 rounded-[32px] shadow-2xl" />
          </Reveal>
        </Container>
      </section>

      <section id="ev" className="scroll-mt-20 bg-sand py-24 sm:py-32">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <IconBadge icon={CalendarDays} />
              <H2>Ventes à thèmes &amp; événements</H2>
            </div>
            <p className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-ink/10">
              <Flame className="size-4 text-coral" />
              Sauf mention contraire, toutes les ventes ci-dessous ont lieu sous chapiteau chauffé
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4">
            {EVENTS.map((ev) => (
              <Reveal key={ev.theme + ev.date}>
                <div className="flex items-center gap-6 rounded-[28px] bg-white p-4 pr-8 shadow-lg shadow-ink/5 ring-1 ring-ink/5 sm:gap-10">
                  <div className="grid w-28 shrink-0 place-items-center rounded-3xl bg-ink py-5 text-center text-white">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/60">{ev.day}</span>
                    <span className="font-display text-5xl font-extrabold leading-none text-sun">{ev.date}</span>
                    <span className="text-sm">{ev.month}</span>
                  </div>
                  <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{ev.theme}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="grid gap-6 rounded-[32px] bg-white p-8 ring-2 ring-coral/30 sm:p-12 md:grid-cols-[auto_1fr]">
              <span className="grid size-14 place-items-center rounded-2xl bg-coral text-white">
                <TriangleAlert className="size-7" />
              </span>
              <div className="space-y-4 text-lg text-ink/80">
                <p>
                  Par mesure de sécurité et dans le respect du code de la route, nous vous rappelons que tout{' '}
                  <b className="text-coral">stationnement sauvage</b> le long de l'avenue d'Alsace et de la route d'Aspach
                  est interdit et peut être sanctionné par les autorités municipales et la gendarmerie (amendes, mises en
                  fourrière).
                </p>
                <p className="flex gap-3 rounded-2xl bg-cream p-5 font-semibold text-ink">
                  <ParkingCircle className="size-6 shrink-0 text-ink-3" />
                  Par conséquent, nous vous invitons à garer vos véhicules dans le grand parking de la zone d'activités
                  située en face de la communauté.
                </p>
                <p>Merci pour votre compréhension.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
