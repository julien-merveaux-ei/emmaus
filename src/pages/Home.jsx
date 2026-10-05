import {
  MapPin, Phone, Mail, Printer, Truck, Clock, PackageOpen, Store, CircleAlert,
  Navigation, Map, CloudSun, CirclePlay, Headphones, FileText, Users, ArrowDown,
} from 'lucide-react'
import { site, STREET_VIEW, GOOGLE_MAPS } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, A, Button, Pill, LinkTile } from '../components/ui.jsx'

function Hero() {
  return (
    <section className="grain on-dark relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-24">
      <img src={site('site.JPG')} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 to-transparent" />

      <Container className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sun opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sun" />
            </span>
            Mise à jour du 05 décembre 2024
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            La communauté Emmaüs de Cernay 68 <span className="text-sun">vous accueille</span>
          </h1>
          <p className="mt-6 flex items-center gap-2 text-lg text-white/80 sm:text-xl">
            <MapPin className="size-5 text-sun" /> au 18 avenue d'Alsace
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={STREET_VIEW}>Street View</Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="hidden lg:block">
          <figure className="w-80 rotate-2 rounded-[28px] bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-md transition hover:rotate-0">
            <img src={site('diap01.gif')} alt="Diaporama EMMAUS Cernay 68" width="320" height="240" className="w-full rounded-[22px]" />
          </figure>
        </Reveal>
      </Container>

      <ArrowDown className="absolute bottom-6 left-1/2 size-5 -translate-x-1/2 animate-bounce text-white/50" />
    </section>
  )
}

function Statement() {
  return (
    <section className="relative z-10 -mt-10">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-ink/10 ring-1 ring-coral/20 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <img src={site('communique.jpg')} alt="Communiqué" className="h-full w-full object-cover" />
            <div className="border-l-0 border-coral p-7 sm:p-10 md:border-l-4">
              <CircleAlert className="size-7 text-coral" />
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-coral sm:text-2xl">
                Indépendamment des violences sexuelles graves et condamnables commises par l'abbé Pierre entre 1950
                &amp; 2005, plus que jamais, nous continuons son combat contre toutes les formes d'exclusion, par
                l'accueil inconditionnel, le travail, le partage et la solidarité, au regard des valeurs fondamentales
                du mouvement Emmaüs.
              </p>
              <Button
                variant="dark"
                className="mt-6"
                href="https://emmaus-france.org/presses/emmaus-international-emmaus-france-et-la-fondation-abbe-pierre-rendent-publics-des-faits-graves-commis-par-labbe-pierre/"
              >
                Communiqué d'Emmaüs France sur le sujet
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

const IMPACT = [
  {
    lead: (
      <>Grâce à vous, nous accueillons et hébergeons <span className="text-sun">48 compagnons</span> en situation de précarité</>
    ),
    then: "qui s'autofinancent par le travail de récupération, de réemploi et de vente des marchandises que vous nous donnez.",
  },
  {
    lead: 'Nous sommes présents, avec SOS Familles, dans des actions de solidarité auprès de publics en difficulté',
    then: 'et contribuons à la solidarité nationale et internationale du mouvement Emmaüs.',
  },
  {
    lead: "Nous représentons une alternative sociale, environnementale et économique à l'exclusion et à l'isolement.",
  },
]

function Impact() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-5 lg:grid-cols-4">
          {IMPACT.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <Card dark className="grain flex h-full flex-col justify-between gap-10 overflow-hidden">
                <span className="font-display text-6xl font-extrabold text-sun">0{i + 1}</span>
                <div>
                  <p className="font-display text-xl font-bold leading-snug sm:text-2xl">{item.lead}</p>
                  {item.then && <p className="mt-4 border-t border-white/10 pt-4 text-white/65">{item.then}</p>}
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={300} className="h-full">
            <A
              to="/dons-et-achats"
              className="group flex h-full items-center justify-center rounded-[28px] bg-sun p-8 transition hover:bg-sun-2"
            >
              <img
                src={site('dons&achats2.jpg')}
                alt="Dons & achats"
                width="141"
                height="199"
                className="w-36 rotate-[-4deg] rounded-xl shadow-2xl transition duration-500 group-hover:rotate-0 group-hover:scale-105"
              />
            </A>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ContactLine({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-ink/40" />
      <span>{children}</span>
    </li>
  )
}

function Practical() {
  return (
    <section className="pb-24 sm:pb-32" id="essentiel">
      <Container>
        <Reveal className="grid gap-5 lg:grid-cols-12">
          {/* Coordonnées */}
          <Card className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <IconBadge icon={Phone} />
              <H2 className="!text-2xl sm:!text-3xl">Coordonnées &amp; contacts</H2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-5 sm:col-span-2">
                <p className="font-display text-lg font-bold">EMMAÜS Cernay 68</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <ContactLine icon={MapPin}>18 avenue d'Alsace 68700 CERNAY</ContactLine>
                  <ContactLine icon={Phone}>Tél. <A className="link" href="tel:+33389754535">03.89.75.45.35</A></ContactLine>
                  <ContactLine icon={Printer}>ou Fax 03.89.75.73.63</ContactLine>
                  <ContactLine icon={Mail}><A className="link" href="mailto:emmaus68@orange.fr">emmaus68@orange.fr</A></ContactLine>
                </ul>
              </div>
              <div className="rounded-2xl bg-cream p-5">
                <p className="font-display text-lg font-bold">SOS Familles Cernay</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <ContactLine icon={Phone}>Tél. <A className="link" href="tel:+33389754535">03.89.75.45.35</A></ContactLine>
                  <ContactLine icon={Mail}><A className="link" href="mailto:sosfamilles68@gmail.com">sosfamilles68@gmail.com</A></ContactLine>
                </ul>
                <A to="/solidarites#sos" className="mt-4 inline-block text-sm font-semibold text-ink-3 hover:underline">En savoir plus →</A>
              </div>
              <div className="rounded-2xl bg-cream p-5">
                <p className="font-display text-lg font-bold">MAISON de VACANCES Emmaüs du Lac Blanc (Vosges)</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <ContactLine icon={MapPin}>342 Blanc Rupt - 68370 ORBEY (France)</ContactLine>
                  <ContactLine icon={Phone}>Tél / Fax <A className="link" href="tel:+33389713371">03.89.71.33.71</A></ContactLine>
                  <ContactLine icon={Mail}><A className="link" href="mailto:ferme.emmaus68@nordnet.fr">ferme.emmaus68@orange.fr</A></ContactLine>
                </ul>
                <A to="/la-ferme" className="mt-4 inline-block text-sm font-semibold text-ink-3 hover:underline">En savoir plus →</A>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill to="/lieu-de-vie#naiss">Qui sommes-nous ?</Pill>
              <Pill doc="../Archives/dons&achats.pdf">Flyer de présentation</Pill>
              <Pill to="/plan-du-site">Plan du site</Pill>
              <Pill to="/solidarites#liens">Liens utiles</Pill>
            </div>
          </Card>

          {/* Horaires */}
          <div className="grid gap-5 lg:col-span-5">
            <Card dark className="grain overflow-hidden">
              <div className="flex items-center gap-4">
                <IconBadge icon={Store} />
                <h2 className="font-display text-2xl font-bold">Horaires de vente</h2>
              </div>
              <p className="mt-8 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                <A to="/ventes" className="text-sun hover:underline">Mercredi</A>{' '}
                <span className="text-white/50">et</span>{' '}
                <A to="/ventes" className="text-sun hover:underline">samedi</A>
              </p>
              <p className="mt-3 text-lg text-white/75">de 9h à 12h et de 14h à 17h</p>
            </Card>
            <Card>
              <div className="flex items-center gap-4">
                <IconBadge icon={Clock} />
                <h2 className="font-display text-xl font-bold leading-tight">
                  Dépôt &amp; retrait des marchandises sur le site de Cernay
                </h2>
              </div>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">DEPÔT</dt>
                  <dd className="mt-1 text-sm">du lundi au samedi<br /><b>de 7h30 - 12h &amp; 13h30 - 17h</b></dd>
                </div>
                <div className="rounded-2xl bg-cream p-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">RETRAIT</dt>
                  <dd className="mt-1 text-sm">du mardi au samedi<br /><b>de 7h30 - 12h &amp; 13h30 - 17h</b></dd>
                </div>
              </dl>
            </Card>
          </div>

          {/* Récupération */}
          <Card className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <IconBadge icon={PackageOpen} />
              <h2 className="font-display text-2xl font-bold leading-tight">Récupération gratuite de marchandises à domicile</h2>
            </div>
            <div className="mt-6 space-y-4 text-ink/80">
              <p>
                Un simple appel téléphonique au <A className="link" href="tel:+33389754535">03.89.75.45.35</A> ou un message
                adressé à <A className="link break-all" href="mailto:standardemmauscernay@gmail.com">standardemmauscernay@gmail.com</A>{' '}
                suffisent pour prendre rendez-vous et fixer une date.
              </p>
              <p>
                Toutefois, <u>nous vous recommandons</u> de télécharger ce{' '}
                <A doc="Demande%20enlevement.pdf" className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-0.5 text-sm font-semibold text-white hover:bg-ink-3">
                  <FileText className="size-3.5" /> formulaire.pdf
                </A>{' '}
                (par Clic droit + Enregistrer la cible sous), à compléter hors ligne, à sauvegarder pour en garder une
                trace, puis à nous transmettre en pièce jointe par mail à l'adresse ci-dessus.
              </p>
            </div>
          </Card>

          {/* Secteurs */}
          <Card className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <IconBadge icon={Truck} />
              <h2 className="font-display text-2xl font-bold leading-tight">
                Secteurs de ramassage et de livraison <span className="text-base text-ink/50">(*)</span>
              </h2>
            </div>
            <p className="mt-6 text-ink/80">du mardi au samedi de 7h30 à 12h et de 13h30 à 17h soit :</p>
            <ul className="mt-3 space-y-2">
              <li className="rounded-xl bg-cream px-4 py-2.5 text-sm">
                Haut-Rhin sud (<u>sauf</u> Colmar &amp; périmètre, Trois-Epis, Orbey &amp; Lapoutroie)
              </li>
              <li className="rounded-xl bg-cream px-4 py-2.5 text-sm">
                le Sundgau et certaines zones frontalières suisses et allemandes.
              </li>
            </ul>
            <div className="mt-5 space-y-3 text-sm text-ink/80">
              <p>
                <u>Ramassages non couverts</u> par Cernay : territoires des communautés de communes du Pays Rhin-Brisach
                et de la vallée de Munster.
              </p>
              <p>Voir également détail sur cette <A className="link" doc="RamLiv.pdf">carte géographique</A>.</p>
              <p>
                Territoire de Belfort : les ramassages sont effectués par la communauté de Montbéliard - Tél.{' '}
                <A className="link" href="tel:+33381912700">03.81.91.27.00</A>.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-ink p-5 text-sm text-white/70">
              <p><em>(*)</em> Livraison uniquement : montants forfaitaires</p>
              <div className="my-4 grid grid-cols-3 gap-2 text-center">
                {[['8 €', 'de 0 à 10 kms'], ['12 €', 'de 11 à 20 kms'], ['16 €', 'de 21 kms et plus']].map(([p, d]) => (
                  <div key={p} className="rounded-xl bg-white/10 p-3">
                    <div className="font-display text-2xl font-extrabold text-sun">{p}</div>
                    <div className="text-xs">{d}</div>
                  </div>
                ))}
              </div>
              <p>
                au titre d'une contribution aux frais de carburant. Le kilométrage est défini par notre logiciel de
                transport lors de la prise de rendez-vous.
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  )
}

function Access() {
  return (
    <section id="carte" className="bg-sand py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <IconBadge icon={Navigation} />
          <H2 className="mt-6">Comment rejoindre notre communauté ?</H2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill href="http://www.viamichelin.fr/"><Navigation className="size-4" /> Itinéraire</Pill>
            <Pill href={GOOGLE_MAPS}><Map className="size-4" /> Google Maps</Pill>
            <Pill href="http://meteofrance.com/"><CloudSun className="size-4" /> Météo France</Pill>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <A doc="plan01.pdf" className="group block overflow-hidden rounded-[28px] shadow-2xl shadow-ink/20 ring-1 ring-ink/10">
            <img src={site('plan01.jpg')} alt="Plan d'accès" className="w-full transition duration-700 group-hover:scale-105" />
          </A>
        </Reveal>
      </Container>
    </section>
  )
}

const RESOURCES = [
  [CirclePlay, 'Emmaüs France en 3 minute (vidéos)', { doc: '../Archives/EF3mns.mp4' }],
  [FileText, "Présentation d'Emmaüs aux jeunes", { doc: '../Archives/Emmaüs%20aux%20jeunes_2019.pdf' }],
  [Headphones, "L'appel de 1954", { doc: '../Archives/1954.mp3' }],
  [Headphones, 'Poème audio', { doc: '../Archives/stag.mp3' }],
  [CirclePlay, "Clip Tri d'Union", { doc: '../Archives/ClipTU.mp4' }],
  [CirclePlay, 'Article 13 - La vidéo choc', { doc: '../Archives/article13.mp4' }],
  [FileText, 'Charte éthique Emmaüs France', { doc: '../Archives/charteEF.pdf' }],
  [FileText, 'Délit de solidarité : le guide', { doc: '../Archives/guideA5delinquantssolidairesweb.pdf' }],
]

function Resources() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-ink p-4 text-white sm:col-span-2 lg:col-span-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sun text-ink">
              <Users className="size-5" />
            </span>
            <p className="text-sm">
              <A href="https://www.youtube.com/user/fondationabbepierre" className="font-semibold text-sun hover:underline">
                La Fondation Abbé Pierre (dénomination provisoire) sur YouTube
              </A>{' '}
              et sur{' '}
              <A href="https://www.facebook.com/Fondation.Abbe.Pierre" className="font-semibold text-sun hover:underline">
                Facebook
              </A>
            </p>
          </div>
          {RESOURCES.map(([icon, label, link]) => (
            <LinkTile key={label} icon={icon} {...link}>{label}</LinkTile>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Impact />
      <Practical />
      <Access />
      <Resources />
    </>
  )
}
