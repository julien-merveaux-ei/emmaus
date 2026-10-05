import { Compass, FileText, CirclePlay, Link2, ArrowUpRight } from 'lucide-react'
import { GOOGLE_MAPS } from '../site.js'
import { Container, Reveal, Card, IconBadge, A, PageHero, cx } from '../components/ui.jsx'

// [libellé, lien, sous-entrées]
const ESSENTIEL = [
  ['ACCUEIL', { to: '/' }, [
    ['Les actus du moment', { to: '/' }],
    ['Coordonnées & contacts', { to: '/#essentiel' }],
    ['Flyer de présentation de la communauté', { doc: '../Archives/dons&achats.pdf' }],
    ['Notre communauté sur Google maps', { href: GOOGLE_MAPS }],
    ['Mentions légales', { to: '/mentions-legales' }, [['Hébergeur OVH', { href: 'http://www.ovh.com/fr/index.xml' }]]],
  ]],
  ['LIEU de VIE ALTERNATIF', { to: '/lieu-de-vie' }, [
    ['Naissance de la communauté', { to: '/lieu-de-vie#naiss' }, [['Comment nous rejoindre (plan)', { doc: 'plan01.pdf' }]]],
    ['Les acteurs de la communauté', { to: '/lieu-de-vie#acteurs' }],
    ['Récupération de marchandises', { to: '/#essentiel' }, [["Formulaire d'enlèvement gratuit (pdf)", { doc: 'Demande%20enlevement.pdf' }]]],
    ['Secteurs de ramassage & de livraison', { to: '/#essentiel' }, [
      ['Carte géographique', { doc: 'RamLiv.pdf' }],
      ['Frais forfaitaires de livraison', { to: '/#essentiel' }],
    ]],
    ['Dépôt & retrait des marchandises', { to: '/#essentiel' }],
  ]],
  ['Nous AIDER - Nous ACCOMPAGNER', { to: '/nous-aider' }, [
    ['A quoi servent vos dons & achats ?', { to: '/dons-et-achats' }, [
      ['Accueillir · Loger · Soigner · Nourrir · Chauffer · Accompagner · Travailler · Se reconstruire · Rémunérer · Rembourser · Participer · Solidarités', { to: '/dons-et-achats' }],
    ]],
    ['Dépenses & recettes journalières', { to: '/dons-et-achats' }],
  ]],
  ['SOLIDARITE et ENTRAIDE', { to: '/solidarites' }, [
    ['Régionale', { to: '/solidarites#region' }],
    ['Nationale', { to: '/solidarites#national' }],
    ['Internationale', { to: '/solidarites#inter' }],
    ['Délit de solidarité : le guide', { doc: '../Archives/guideA5delinquantssolidairesweb.pdf' }],
  ]],
  ['SOS FAMILLES Cernay', { to: '/solidarites#sos' }, [
    ['Présentation rapide', { doc: '../Archives/sos1.pdf' }],
  ]],
  ['AGENDA des VENTES', { to: '/ventes' }, [
    ["Jours & horaires d'ouverture", { to: '/ventes' }],
    ['Opportunités & événements', { to: '/ventes#ev' }],
  ]],
  ['La FERME (Vosges)', { to: '/la-ferme' }, [
    ["Plan d'accès", { doc: 'carte.pdf' }],
    ['Webcams panoramiques', { href: 'https://www.lac-blanc.com/webcam-de-la-station' }],
  ]],
]

const DOCUMENTS = [
  ["Comment nous rejoindre (plan d'accès)", { doc: 'plan01.pdf' }],
  ["Comment rejoindre la Ferme (plan d'accès)", { doc: 'carte.pdf' }],
  ['Fondation Abbé Pierre (dénomination provisoire)', { href: 'http://www.fondation-abbe-pierre.fr/' }, [
    ['La Fondation sur YouTube', { href: 'https://www.youtube.com/user/fondationabbepierre' }],
    ['La Fondation sur Facebook', { href: 'https://www.facebook.com/Fondation.Abbe.Pierre' }],
  ]],
  ['Le mouvement Emmaüs en 2018', { doc: 'mouv3.pdf' }, [
    ['Manifeste universel', { doc: 'manif.pdf' }],
    ["Présentation d'Emmaüs", { doc: '../Archives/Emmaus_2019.pdf' }],
    ["Présentation d'Emmaüs aux jeunes", { doc: '../Archives/Emmaüs%20aux%20jeunes_2019.pdf' }],
    ['Charte éthique Emmaüs France', { doc: '../Archives/charteEF.pdf' }],
    ['Statut OACAS (Journal Officiel)', { doc: '../Archives/oacas.pdf' }],
    ['Hommage à Franco Bettoli', { doc: '../Archives/FrancoBettoli.pdf' }],
  ]],
  ["Formulaire d'enlèvement gratuit (pdf)", { doc: 'Demande%20enlevement.pdf' }],
  ['Flyer de présentation de la communauté', { doc: '../Archives/dons&achats.pdf' }],
  ['Appli de gestion de votre budget', { doc: '../Archives/Appli_2018.pdf' }],
  ['Guide du logement des jeunes', { doc: '../Archives/guideLdJ.pdf' }],
  ['Comment bien communiquer', { doc: '../Archives/compourtous.pdf' }],
  ['Délit de solidarité : le guide', { doc: '../Archives/guideA5delinquantssolidairesweb.pdf' }],
]

const MEDIA = [
  ['Emmaüs France en 3 minutes', { doc: '../Archives/EF3mns.mp4' }],
  ['Poème sur la communauté', { doc: '../Archives/stag.mp3' }],
  ['Appel de 1954', { doc: '../Archives/1954.mp3' }],
  ['Article 13 : la vidéo choc', { doc: '../Archives/article13.mp4' }],
  ["Clip Tri d'Union (plateforme textile)", { doc: '../Archives/ClipTU.mp4' }],
]

const LIENS = [
  ["Formulaire d'enlèvement gratuit (pdf)", { doc: 'Demande%20enlevement.pdf' }],
  ['SOS Familles Cernay', { to: '/solidarites#sos' }],
  ['La Ferme (Vosges)', { to: '/la-ferme' }],
  ['Collectif Urgence Welcome', { href: 'http://www.urgencewelcome.wordpress.com' }, [
    ['100 pour 1 Hébergement', { href: 'https://www.100pour1.org' }],
  ]],
  ['Ville de Cernay', { href: 'https://www.ville-cernay.fr' }],
  ['Emmaüs', { href: 'http://www.emmaus-france.org/' }, [
    ['International', { href: 'http://www.emmaus-international.org/' }],
    ['Europe', { href: 'http://www.emmaus-europe.org/' }],
    ['France', { href: 'http://www.emmaus-france.org/' }],
  ]],
  ['Fondation Abbé Pierre (dénomination provisoire)', { href: 'http://www.fondation-abbe-pierre.fr/' }, [
    ['La Fondation sur YouTube', { href: 'https://www.youtube.com/user/fondationabbepierre' }],
    ['La Fondation sur Facebook', { href: 'https://www.facebook.com/Fondation.Abbe.Pierre' }],
  ]],
  ['Label Emmaüs : vente en ligne', { href: 'http://www.label-emmaus.co/fr/' }],
  ['Communauté de Haguenau', { href: 'http://www.emmaus-haguenau.fr' }, [['Saverne', { href: 'http://www.emmaus-haguenau.fr' }]]],
  ['Communauté de Scherwiller', { href: 'http://www.emmaus-scherwiller.fr/' }],
  ['Communauté de Strasbourg', { href: 'http://emmaus-strasbourg.fr/' }],
  ['Emmaüs Mundolsheim', { href: 'http://www.emmaus-mundo.com' }],
  ["Tri d'Union (plateforme textile)", { href: 'http://www.tridunion.fr' }],
  ['SURSO (Urgence sociale Mulhouse)', { href: 'https://www.mulhouse.fr/fr/services/annuaire-urgence-sociale.html?lettre=B' }],
  ['DAL 68 (Droit au logement)', { href: 'https://www.droitaulogement.org/' }],
  ['FAS (Acteurs solidaires)', { href: 'http://www.federationsolidarite.org/' }],
  ['ALSA 68 (Aide au logement)', { href: 'http://alsa68.org/' }],
  ['Artisans du Monde', { href: 'https://www.artisansdumonde.org/' }],
]

function Tree({ items, level = 0 }) {
  return (
    <ul className={cx(level > 0 && 'mt-1 ml-3 border-l-2 border-sand pl-4')}>
      {items.map(([label, link, children]) => (
        <li key={label} className="py-1">
          <A
            {...link}
            className={cx(
              'group inline-flex items-start gap-1.5 transition hover:text-ink-3',
              level === 0 ? 'font-display text-lg font-bold' : 'text-sm text-ink/70',
            )}
          >
            {label}
            {!link.to && <ArrowUpRight className="mt-1 size-3.5 shrink-0 opacity-40 group-hover:opacity-100" />}
          </A>
          {children && <Tree items={children} level={level + 1} />}
        </li>
      ))}
    </ul>
  )
}

function Block({ icon, title, items, className, delay }) {
  return (
    <Reveal delay={delay} className={className}>
      <Card className="h-full">
        <div className="mb-6 flex items-center gap-4">
          <IconBadge icon={icon} />
          <h2 className="font-display text-2xl font-extrabold tracking-tight">{title}</h2>
        </div>
        <Tree items={items} />
      </Card>
    </Reveal>
  )
}

export default function PlanDuSite() {
  return (
    <>
      <PageHero eyebrow="Navigation" title="Plan du site" />
      <section className="py-24 sm:py-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Block icon={Compass} title="L'essentiel" items={ESSENTIEL} className="lg:row-span-2" />
          <Block icon={FileText} title="Documents & guides" items={DOCUMENTS} delay={100} />
          <Block icon={CirclePlay} title="Sons & images" items={MEDIA} delay={150} />
          <Block icon={Link2} title="Liens utiles" items={LIENS} className="lg:col-span-2 [&_ul:first-of-type]:sm:columns-2 [&_li]:break-inside-avoid" delay={200} />
        </Container>
      </section>
    </>
  )
}
