import { HandHeart, Hammer, House } from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, A, Button, PageHero, Eyebrow } from '../components/ui.jsx'

const FRANCE = [
  ['119', 'communautés'],
  ['77', "structures d'action sociale et logement"],
  ['47', "structures d'insertion"],
  ['42', "comités d'amis"],
  ['432', 'points de vente'],
]

const PILLARS = [
  {
    icon: House,
    title: 'ACCUEIL',
    items: [
      'Notre communauté est un lieu de vie pour près de 48 compagnons de tous horizons.',
      'Y poser son sac signifie avoir le temps de se reconstruire, retrouver goût à la vie et y donner un sens.',
      "Des milliers de compagnons accueillis depuis 1955, y compris dans l'accueil d'urgence.",
      "Accueil de jeunes et d'étudiants en Volontariat d'été Emmaüs, en stage ou en service civique.",
      'Accueil à la Maison de vacances Emmaüs située dans les Vosges.',
    ],
  },
  {
    icon: Hammer,
    title: 'TRAVAIL',
    items: [
      'Le travail de tous au service de tous.',
      "Notre travail, seule source de revenus, est fondé sur la récupération, la restauration, le réemploi et la revente d'objets au bénéfice de la lutte contre l'exclusion et l'isolement, et au service de la solidarité.",
      "L'essentiel des dons est valorisé en ventes, en matières premières et en aides d'urgence aux familles.",
    ],
  },
  {
    icon: HandHeart,
    title: 'SOLIDARITE & PARTAGE',
    items: [
      <>Par son travail et les revenus qu'il génère, chaque compagnon participe activement à la <A to="/solidarites" className="link">solidarité</A>.</>,
      'Solidarité financière et/ou matérielle, en local, régional, national et international (Argentine et Bénin).',
      <>Soutiens financiers <A to="/solidarites" className="link">(dont SOS Familles)</A> et matériels au plus démunis et à des associations.</>,
      "Membre cotisant au financement d'Emmaüs France, d'Emmaüs Europe et d'Emmaüs International.",
    ],
  },
]

const ACTORS = [
  ['50', "compagnons pour lesquels notre communauté est un lieu de vie et de travail passager ou permanent."],
  ['Deux', "responsables, salariés nationaux, chargés de l'encadrement social, économique et de l'animation de la communauté. Ils assurent cette mission en collaboration avec le Conseil d'Administration et avec l'instance d'Emmaüs France (ACE) à laquelle nous sommes affiliés."],
  ['Cinq', "salariés locaux : une assistante sociale qui assure l'accompagnement administratif, social et médical des compagnons, une employée d'accueil qui reçoit les appels téléphoniques, organise les enlèvements et les livraisons, un technicien coordinateur des flux de marchandises, un chef cuisinier pour la restauration collective et un chauffeur."],
  ['Deux', "amis passionnés de nature qui assurent l'accueil et la gestion à la Maison de Vacances du Lac Blanc."],
  ['~50', "Et près d'une cinquantaine de bénévoles et ami(e)s de la communauté dont la présence, selon les compétences de chacun, apporte écoute, amitié et entraide pour oeuvrer au service du collectif. Ils forment, avec les compagnons qui souhaitent y adhérer, l'Association Emmaüs Cernay 68 (loi 1908) animée par un Conseil d'Administration ayant la responsabilité juridique et financière de la communauté."],
]

export default function LieuDeVie() {
  return (
    <>
      <PageHero eyebrow="Lieu de Vie" title="Extraits d'une longue histoire" image={site('site2016.JPG')} />

      {/* Histoire */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-display text-[9rem] font-extrabold leading-none text-sun sm:text-[12rem]">1949</span>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="dark" doc="../Archives/1954.pdf">Mes amis, au secours</Button>
              <Button variant="light" doc="../Archives/1954.mp3">Radio Luxembourg</Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              Le Mouvement Emmaüs est né en novembre 1949 par la rencontre d'hommes ayant pris conscience de leurs
              situations privilégiées et de leurs responsabilités sociales devant l'injustice, et d'autres hommes qui
              ne possédaient plus de raison de vivre. Les uns et les autres décident d'unir leur volonté et leurs actes
              pour s'entraider et secourir ceux qui souffrent. En 1949, Henri Groues dit l'abbé Pierre, député de
              Meurthe et Moselle, vit dans une maison délabrée qu’il restaure à Neuilly Plaisance. Cette maison, lieu
              de rencontres, devient une auberge de jeunesse internationale qu’il baptise « Emmaüs ».
            </p>
            <blockquote className="border-l-4 border-sun pl-6 font-display text-2xl font-semibold leading-snug text-ink">
              Le mouvement Emmaüs naît de cette initiative dont le but est « d’agir pour que chaque homme, chaque
              société, chaque nation puisse vivre, s’affirmer et s’accomplir dans l’échange et le partage, ainsi que
              dans une égale dignité »
              <span className="mt-2 block font-sans text-sm font-normal text-ink/50">(extrait du Manifeste universel).</span>
            </blockquote>
            <p>
              L'association Emmaüs est créée en 1953 pour organiser et développer ce mouvement. Après les ravages de la
              guerre de 1939-45, les rigueurs de l’hiver 1954 tuent. Dans ce contexte de grave pénurie de logements,
              l’abbé Pierre lance son célèbre appel, « <A doc="../Archives/1954.pdf" className="link">Mes amis, au secours</A> »,
              sur les ondes de <A doc="../Archives/1954.mp3" className="link">Radio Luxembourg</A> ; il déclenche
              « l’insurrection de la Bonté » et influence fortement les pouvoirs publics. Un immense mouvement de
              solidarité naît. Les jours suivants voient la création de nombreuses structures au sein d’Emmaüs et
              l'émergence progressive des communautés Emmaüs.
            </p>
            <p>
              Après 20 ans d’activités spontanées et organisées dans le monde et lors d’une première rencontre mondiale
              de tous les membres Emmaüs à Berne en 1969, un <A doc="manif.pdf" className="link">Manifeste</A> est
              adopté, pour fondement du mouvement Emmaüs.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Emmaüs en France */}
      <section className="grain on-dark bg-ink py-20 text-white">
        <Container>
          <Reveal>
            <p className="font-display text-2xl font-bold">Le mouvement Emmaüs en France aujourd'hui :</p>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {FRANCE.map(([n, l]) => (
                <div key={l} className="border-t border-white/15 pt-4">
                  <dt className="font-display text-5xl font-extrabold text-sun">{n}</dt>
                  <dd className="mt-1 text-sm text-white/70">{l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-white/70">
              et un site internet de <A href="http://www.label-emmaus.co/fr/" className="link">vente en ligne</A>.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Débuts de Cernay */}
      <section id="naiss" className="py-24 sm:py-32">
        <Container>
          <Reveal className="mb-12 flex justify-end">
            <Button variant="light" doc="../Archives/Emmaus_2019.pdf">Présentation d'Emmaüs</Button>
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>1955</Eyebrow>
              <H2 className="mt-4">La communauté de Cernay à ses débuts ...</H2>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                C'est en 1955 que quatre compagnons de la communauté de Neuilly Plaisance arrivent à Cernay, avec pour
                mission de créer une communauté Emmaüs en Alsace, aidés par l'Abbé Landwerlin et trois amis. L'hiver
                1955 voit le premier campement Emmaüs, avec son bus dortoir-cuisine et sa tente militaire sur le
                terrain de l'Ochsenfeld ... et ses premiers chiffonniers.
              </p>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-2 gap-4">
              <img src={site('bus1.jpg')} alt="Le bus dortoir-cuisine" className="w-full rotate-[-3deg] rounded-2xl shadow-xl grayscale-[30%]" />
              <img src={site('site1.jpg')} alt="Le premier campement" className="mt-12 w-full rotate-2 rounded-2xl shadow-xl grayscale-[30%]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Aujourd'hui */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <H2>La communauté aujourd'hui ...</H2>
            <img src={site('site2016.JPG')} alt="Le site de la communauté aujourd'hui" className="mt-10 w-full rounded-[32px] object-cover shadow-2xl" />
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ink/80">
              Bénéficiant du statut{' '}
              <A doc="../Archives/oacas.pdf" className="link">d'Organisme d'Accueil Communautaire et d'Activités Solidaires,</A>{' '}
              la communauté AUJOURD'HUI, avec ses logements, ses ateliers et ses espaces de vente, en TROIS mots qui lui
              donnent ses raisons de vivre et son dynamisme :
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PILLARS.map(({ icon, title, items }, i) => (
              <Reveal key={title} delay={i * 100} className="h-full">
                <Card className="h-full">
                  <IconBadge icon={icon} />
                  <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight">{title}</h3>
                  <ul className="mt-6 space-y-4">
                    {items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-ink/80">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sun-2" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Acteurs */}
      <section id="acteurs" className="bg-sand py-24 sm:py-32">
        <Container>
          <Reveal><H2>Les acteurs de la communauté</H2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {ACTORS.map(([n, text], i) => (
              <Reveal key={i} delay={i * 60} className={i === ACTORS.length - 1 ? 'md:col-span-2' : ''}>
                <Card className="flex h-full gap-6">
                  <span className="font-display text-4xl font-extrabold text-sun-2">{n}</span>
                  <p className="text-ink/80">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Card dark className="grain overflow-hidden text-center">
              <p className="mx-auto max-w-3xl font-display text-2xl font-bold leading-snug">
                Une communauté active et dynamique, essayant de porter collectivement l'accueil inconditionnel, le
                travail, la solidarité, la vie communautaire et les projets, conformément aux valeurs du mouvement Emmaüs.
              </p>
              <Button className="mt-8" doc="../Archives/dons&achats.pdf">Flyer de présentation de la communauté</Button>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
