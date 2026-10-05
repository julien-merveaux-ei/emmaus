import { MapPin, Map, Flag, Globe, HandCoins, Phone, Mail, CalendarClock, Smartphone, MessagesSquare, FileText, Link2, Headphones, CirclePlay, Building2 } from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, A, PageHero, LinkTile, Eyebrow } from '../components/ui.jsx'

const REGION = [
  'Le salon régional Emmaüs R8 (Champagne Ardennes Alsace Lorraine)',
  "Le Service d'Urgence Sociale SURSO de Mulhouse et le DAL68",
  <>Le <A href="http://www.urgencewelcome.wordpress.com" className="link">Collectif Urgence Welcome</A> et <A href="https://www.100pour1.org" className="link">100 pour 1 Hébergement</A></>,
  <>La plateforme textile <A doc="forb.pdf" className="link">Emmaüs Action Est</A> à Forbach</>,
  'Association ALSA pour le Logement des Sans-Abri',
  'La Régie de Quartier de Belfort et la FAS Alsace',
  'Le Centre Educatif Fermé de Mulhouse',
  'La Ferme Emmaüs dans les Vosges',
  'Appuis Mulhouse et la Croix Rouge.',
]

const FRANCE = [
  'La Fondation Abbé Pierre (dénomination provisoire) et Emmaüs France',
  "Le salon national d'Emmaüs France à Paris",
  'ATD Quart Monde et Caritas',
]

const MONDE = [
  'La communauté Emmaüs de Mendoza en Argentine (jumelage)',
  <>Emmaüs International au Bénin <A doc="../Archives/nok01.pdf" className="link">Chantier Nokoué</A> | <A doc="../Archives/nokoue.flv" className="link">Vidéo</A></>,
  "La vente de solidarité au profit d'Emmaüs International",
  'Vélo-Nomades (2011) et les Artisans du Monde',
  <>La communauté Emmaüs de <A doc="../Archives/salpahou.jpg" className="link">Pahou</A> au Bénin</>,
  'Emmaüs Europe et Emmaüs International',
]

function Scope({ id, icon, title, items, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card id={id} className="h-full scroll-mt-28">
        <div className="flex items-center gap-4">
          <IconBadge icon={icon} />
          <h3 className="font-display text-2xl font-bold">{title}</h3>
        </div>
        <ul className="mt-6 divide-y divide-ink/5">
          {items.map((it, i) => (
            <li key={i} className="py-3 text-ink/80">{it}</li>
          ))}
        </ul>
      </Card>
    </Reveal>
  )
}

const LINK_GROUPS = [
  [
    [FileText, "Présentation d'Emmaüs", { doc: '../Archives/Emmaus_2019.pdf' }],
    [FileText, 'Guide du logement des jeunes', { doc: '../Archives/guideLdJ.pdf' }],
    [FileText, 'Mieux communiquer', { doc: '../Archives/compourtous.pdf' }],
    [Globe, 'Emmaüs France', { href: 'http://www.emmaus-france.org/' }],
    [Globe, 'Emmaüs Europe', { href: 'http://www.emmaus-europe.org/' }],
    [Globe, 'Emmaüs International', { href: 'http://www.emmaus-international.org/' }],
    [FileText, 'Charte éthique Emmaüs France', { doc: '../Archives/charteEF.pdf' }],
    [FileText, 'Délit de solidarité : le guide', { doc: '../Archives/guideA5delinquantssolidairesweb.pdf' }],
    [Globe, "Tri d'Union", { href: 'http://www.tridunion.fr' }],
    [Globe, 'Fondation Abbé Pierre (dénomination provisoire)', { href: 'http://www.fondation-abbe-pierre.fr/' }],
  ],
  [
    [Building2, 'Emmaüs Mundolsheim', { href: 'http://www.emmaus-mundo.com' }],
    [Building2, 'Communauté de Saverne', { href: 'http://www.emmaus-haguenau.fr' }],
    [Building2, 'Communauté de Haguenau', { href: 'http://www.emmaus-haguenau.fr' }],
    [Building2, 'Communauté de Scherwiller', { href: 'http://www.emmaus-scherwiller.fr/' }],
    [Building2, 'Communauté de Strasbourg', { href: 'http://emmaus-strasbourg.fr/' }],
    [FileText, 'Flyer de présentation de la communauté de Cernay', { doc: '../Archives/dons&achats.pdf' }],
    [Building2, 'Ferme Emmaüs du Lac Blanc (Vosges)', { to: '/la-ferme' }],
  ],
  [
    [Globe, 'Collectif Urgence Welcome', { href: 'http://www.urgencewelcome.wordpress.com' }],
    [Globe, '100 pour 1 Hébergement', { href: 'https://www.100pour1.org' }],
    [FileText, 'Secteurs de ramassage et de livraison', { doc: 'RamLiv.pdf' }],
    [FileText, "Formulaire d'enlèvement gratuit (pdf)", { doc: 'Demande%20enlevement.pdf' }],
    [Globe, 'Label Emmaüs : vente en ligne', { href: 'http://www.label-emmaus.co/fr/' }],
    [FileText, 'Gérer votre budget', { doc: '../Archives/Appli_2018.pdf' }],
  ],
  [
    [Globe, 'Ville de Cernay', { href: 'https://www.ville-cernay.fr' }],
    [Headphones, "L'appel de 1954", { doc: '../Archives/1954.mp3' }],
    [Headphones, 'Poème audio', { doc: '../Archives/stag.mp3' }],
    [CirclePlay, "Clip Tri d'Union", { doc: '../Archives/ClipTU.mp4' }],
    [CirclePlay, 'Article 13 - La vidéo choc', { doc: '../Archives/article13.mp4' }],
  ],
]

export default function Solidarites() {
  return (
    <>
      <PageHero eyebrow="Solidarités" title="Nos actions de solidarité" />

      {/* Cernay */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-white shadow-xl shadow-ink/5 ring-1 ring-ink/5 md:grid-cols-[auto_1fr]">
            <img src={site('sol2.jpg')} alt="" className="h-full w-full object-cover md:w-72" />
            <div className="p-8 md:py-10 md:pl-0">
              <Eyebrow><MapPin className="size-3" /> A CERNAY avec ...</Eyebrow>
              <p className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                L'économie locale, le Forum des Associations, diverses associations locales, le CCAS, les compagnons et
                SOS Familles Cernay.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SOS Familles */}
      <section id="sos" className="grain on-dark scroll-mt-20 bg-ink py-24 text-white sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow dark>A propos de l'Association</Eyebrow>
            <h2 className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              SOS FAMILLES <span className="text-sun">EMMAUS</span> Cernay
            </h2>
            <p className="mt-4 text-lg text-white/70">(Aide personnalisée aux familles en difficultés financières)</p>

            <div className="mt-10 space-y-3 rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
              <p className="flex gap-3"><MapPin className="size-5 shrink-0 text-sun" /> Correspondance : SOS Familles Emmaüs - 18 avenue d'Alsace - 68700 CERNAY</p>
              <p className="flex gap-3"><Phone className="size-5 shrink-0 text-sun" /> Tél. <A href="tel:+33389754535" className="link">03.89.75.45.35</A></p>
              <p className="flex gap-3"><Mail className="size-5 shrink-0 text-sun" /> Mail : <A href="mailto:sosfamilles68@gmail.com" className="link">sosfamilles68@gmail.com</A></p>
              <p className="flex gap-3"><CalendarClock className="size-5 shrink-0 text-sun" /> Permanence le vendredi A.M sur rendez-vous uniquement.</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-6 text-white/80">
            <p>
              L'Association, à but non lucratif et crée en 1991 à l'initiative de la communauté Emmaüs de Cernay,
              fonctionne grâce à des membres bénévoles. Elle n'est pas un organisme bancaire ou juridique et ne se
              substitue pas aux services sociaux <A doc="../Archives/sos1.pdf" className="link">(Présentation rapide)</A>.
            </p>
            <div className="rounded-[28px] bg-sun p-6 text-ink">
              <HandCoins className="size-8" />
              <p className="mt-4">
                Elle ne fait pas de dons mais des avances financières personnalisées sans intérêts, l'avance accordée
                étant versée directement au(x) créancier(s). Exemples de dettes prises en compte : loyers, cautions
                EdF-GdF-Eau, assurances ... Pour établir une demande, prendre contact au préalable avec l'assistant(e)
                social(e) de son secteur.
              </p>
            </div>
            <p>
              Dès respect des conditions mentionnées ci-dessus et selon ses moyens propres, l'Association est disposée à
              venir en aide à toute famille ou personne endettée.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <A doc="../Archives/Appli_2018.pdf" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-medium transition hover:bg-white/20">
                <Smartphone className="size-5 shrink-0 text-sun" /> Gérer votre budget avec une appli mobile Emmaüs
              </A>
              <A doc="../Archives/compourtous.pdf" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-medium transition hover:bg-white/20">
                <MessagesSquare className="size-5 shrink-0 text-sun" /> Mieux communiquer : guide pour une information accessible
              </A>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Région / France / Monde */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Scope id="region" icon={Map} title="Dans notre région avec ..." items={REGION} />
            <Scope id="national" icon={Flag} title="En France avec ..." items={FRANCE} delay={100} />
            <Scope id="inter" icon={Globe} title="Et dans le monde avec ..." items={MONDE} delay={200} />
          </div>
          <Reveal className="mt-5">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-sun p-8 sm:flex-row sm:items-center sm:p-10">
              <p className="font-display text-lg font-semibold">Soit</p>
              <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">119 159 euros</p>
              <p className="font-display text-lg font-semibold">de solidarités et</p>
              <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">70 familles</p>
              <p className="font-display text-lg font-semibold">aidées en 2023.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Liens utiles */}
      <section id="liens" className="scroll-mt-20 bg-sand py-24 sm:py-32">
        <Container>
          <Reveal className="flex items-center gap-4">
            <IconBadge icon={Link2} />
            <H2>Liens (très) utiles</H2>
          </Reveal>
          <div className="mt-12 space-y-10">
            {LINK_GROUPS.map((group, i) => (
              <Reveal key={i} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.map(([icon, label, link]) => (
                  <LinkTile key={label} icon={icon} {...link}>{label}</LinkTile>
                ))}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
