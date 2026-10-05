import {
  Armchair, Lamp, BookOpen, Stamp, Disc3, Gem, UtensilsCrossed, Tv, Camera, Shirt, Scissors, Baby,
  ToyBrick, BedDouble, Bike, Wrench, Boxes, Sparkles, Tags, CalendarHeart, Sun, Store,
  Truck, Heart, Ban, Info, Laptop, Battery,
} from 'lucide-react'
import { site } from '../site.js'
import { Container, Reveal, Card, H2, IconBadge, A, Button, PageHero } from '../components/ui.jsx'

const RAYONS = [
  [Armchair, 'Meubles, salons, fauteuils, chaises, tapis & tapisseries'],
  [Lamp, "Luminaires, lustres & accessoires d'éclairage"],
  [BookOpen, 'Littérature, livres, ouvrages scolaires & bandes dessinées'],
  [Stamp, 'Timbres, monnaies, cartes postales & affiches (ponctuel)'],
  [Disc3, 'Disques, CD & DVD, cassettes audio & vidéo'],
  [Gem, 'Bric à brac, bibelots, tableaux & objets de décoration'],
  [UtensilsCrossed, 'Vaisselle, verres, couverts & ustensiles de cuisine'],
  [Tv, 'Petit & gros électroménager, son, vidéo & informatique'],
  [Camera, 'Appareils photos, caméras, lunettes & optiques (ponctuel)'],
  [Scissors, 'Boutique dames et rétro, broderie, couture & montres'],
  [Shirt, 'Tissus, linge de maison, dentelles, vêtements & chaussures'],
  [Baby, 'Espace petite enfance avec vêtements & accessoires'],
  [ToyBrick, 'Jouets anciens & récents, peluches, jeux & poupées'],
  [BedDouble, 'Chambres à coucher, literie & accessoires'],
  [Bike, 'Vélos adultes & enfants, VTT & accessoires'],
  [Wrench, 'Outillage, mobilier de jardin, sanitaire & fourneaux'],
  [Boxes, 'Marchandises en gros ou en volumes (ponctuel)'],
  [Sparkles, 'Des opportunités à découvrir toutes les semaines'],
  [Tags, 'Nos traditionnelles ventes à thèmes & spéciales'],
  [CalendarHeart, 'Notre grande braderie annuelle du 8 mai'],
  [Sun, "Les Aubaines au mois d'août"],
  [Store, "Nos Vitrines d'1 Jour (ponctuelles)"],
]

export default function NousAider() {
  return (
    <>
      <PageHero eyebrow="Nous Aider" title="Comment nous aider ?">
        <p>
          Le succès du mouvement Emmaüs dépend de la qualité des liens, très divers, qu’il tisse, chaque jour, avec
          son environnement social et humain : donateurs, acheteurs, bénévoles, partenaires, amis ... ou simples
          visiteurs.
        </p>
      </PageHero>

      {/* Intro */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              Si vous adhérez à nos valeurs humanitaires et souhaitez soutenir notre communauté, vous pouvez nous
              donner et/ou acheter des objets divers et variés.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Les meubles, bibelots, vêtements, livres, jouets, l'électroménager, la vaisselle, les bijoux, vélos, etc
              ... dont vous ne voulez plus, fournissent la matière première du travail que nous accomplissons : tri,
              recyclage, réparation, réemploi et remise en vente.
            </p>
            <Button variant="dark" className="mt-8" to="/dons-et-achats">
              Mais à quoi peuvent bien servir vos dons et achats ?
            </Button>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto">
            <img src={site('korg2.jpg')} alt="" className="w-64 rotate-3 rounded-3xl shadow-2xl sm:w-72" />
            <img src={site('ba1.jpg')} alt="Bonnes affaires" className="absolute -bottom-6 -left-10 w-48 -rotate-6 rounded-xl shadow-xl" />
          </Reveal>
        </Container>
      </section>

      {/* Rayons */}
      <section className="grain on-dark bg-ink py-24 text-white sm:py-32">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-relaxed text-white/75">
              Quelles que soient vos motivations d'achat - nécessité, dépannage, coup de coeur, collection,
              remplacement, cadeau, chiner, rechercher un objet insolite, se meubler, se vêtir ...
            </p>
            <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
              vous trouverez probablement chez nous de quoi satisfaire ci-dessous vos besoins et votre curiosité, à
              moindre prix, tout en effectuant <span className="text-sun">un geste solidaire :</span>
            </p>
            <p className="mt-6 text-sm text-white/50">(selon disponibilités)</p>
          </Reveal>
          <Reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {RAYONS.map(([Icon, label]) => (
              <div key={label} className="group flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <Icon className="mt-0.5 size-5 shrink-0 text-sun" />
                <span className="text-sm text-white/85">{label}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Enlèvements */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <H2>Enlèvements et dépôts sur site</H2>
          </Reveal>
          <Reveal>
            <Card className="h-full">
              <IconBadge icon={Truck} />
              <div className="mt-6 space-y-4 text-ink/80">
                <p>
                  Si vous souhaitez nous donner des objets divers et variés dont vous n'avez plus l'utilité, un simple
                  appel téléphonique à notre communauté au <A href="tel:+33389754535" className="link">03.89.75.45.35</A> ou
                  un message adressé à <A href="mailto:standardemmauscernay@gmail.com" className="link break-all">standardemmauscernay@gmail.com</A>{' '}
                  suffisent pour prendre rendez-vous et fixer une date.
                </p>
                <p>
                  Toutefois, nous vous recommandons de télécharger ce{' '}
                  <A doc="Demande%20enlevement.pdf" className="link">formulaire.pdf</A>, de le compléter hors ligne, de
                  le sauvegarder pour en conserver une trace, puis de nous l'envoyer en pièce jointe par mail à
                  l'adresse ci-dessus. Le moment venu, des compagnons se rendront alors à votre domicile pour récupérer
                  votre don gratuitement.
                </p>
              </div>
            </Card>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={100}>
              <Card>
                <IconBadge icon={Store} />
                <p className="mt-6 text-ink/80">
                  Vous pouvez également déposer vos objets vous-mêmes en vous rendant directement à l'accueil des
                  donateurs situé à l'entrée du site où des compagnons vous accueilleront et vous aideront à les
                  décharger.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card>
                <IconBadge icon={Battery} />
                <p className="mt-6 text-ink/80">
                  Par ailleurs, nous récupérons toutes vos piles et radiographies usagées, que vous pouvez déposer dans
                  des conteneurs spéciaux prévus à cet effet et situés à l'entrée principale de la salle des ventes.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Merci / Non merci */}
      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[28px] bg-sun p-6 sm:p-10">
              <Heart className="size-10 fill-ink text-ink" />
              <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight">MERCI !</h2>
              <div className="mt-6 space-y-4 text-ink/85">
                <p>
                  Le réemploi et la vente des marchandises que vous nous donnez, uniques sources de revenus pour notre
                  communauté, permettent aux compagnes et compagnons de se reconstruire dignement par le TRAVAIL, de
                  s'auto-suffire, d'assurer leur hébergement, les repas, leur santé et leur retraite, d'accueillir des
                  hommes et des femmes sans abri et sans ressources en situation d'exclusion et d'isolement, et
                  d'initier des projets de solidarité au niveau local, régional, national et international.
                </p>
                <p>
                  Ainsi, en nous faisant un don ou en effectuant un achat dans notre communauté, vous devenez vous aussi
                  un ACTEUR de la solidarité en donnant encore davantage de SENS à ce qui peut être réemployé : en bon
                  état, ces objets seront très utiles à des personnes, des enfants, une famille, à une communauté ou une
                  association en grande difficulté, dans une démarche éco-responsable.
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                <p className="flex gap-3 rounded-2xl bg-white/60 p-4 text-sm font-semibold">
                  <Info className="size-5 shrink-0" />
                  Afin de nous simplifier le travail et si vous les possédez toujours, n'oubliez pas de joindre toute
                  documentation, notice ou plan de montage à votre don de marchandise.
                </p>
                <p className="flex gap-3 rounded-2xl bg-white/60 p-4 text-sm font-semibold">
                  <Laptop className="size-5 shrink-0" />
                  Pour les dons d'ordinateurs et de tablettes, pensez à supprimer tous les mots de passe et pour les
                  ordis portables, à nous donner les blocs chargeurs (alimentation en courant) qui leurs sont dédiés.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="h-full">
            <Card dark className="grain h-full overflow-hidden sm:p-10">
              <Ban className="size-10 text-coral" />
              <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight">NON merci !</h2>
              <div className="mt-6 space-y-4 text-white/75">
                <p>
                  Que faisons nous des objets en mauvais état ou abîmés, que nous ne pouvons ni recycler, ni réparer et
                  ni réemployer ? Impossible à revendre, ils représentent plusieurs centaines de tonnes/an de déchets
                  ultimes que nous envoyons à la déchetterie.
                </p>
                <p className="rounded-2xl bg-coral/15 p-5 ring-1 ring-coral/30">
                  Or la mise en décharge nous a coûté{' '}
                  <span className="block font-display text-5xl font-extrabold text-white">67 000 EUR</span>
                  en 2022 qui ont par conséquent amputé nos revenus et nos actions de soutien et de solidarité !
                </p>
                <p>
                  C'est pour cette raison et par respect pour le travail de l'ensemble des acteurs de la communauté que
                  nous sommes parfois amenés à refuser certains objets que vous souhaitez nous donner car nous n'avons
                  ni la vocation et ni les moyens humains, matériels et financiers de nous substituer aux déchetteries.
                  Merci pour votre compréhension.
                </p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Sensibiliser */}
      <section className="bg-sand py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              Soutenez également les actions du mouvement Emmaüs en sensibilisant votre entourage, d'autres associations
              et les pouvoirs publics à la lutte contre toute forme d'exclusion.
            </p>
            <Button variant="dark" className="mt-8" doc="../Archives/dons&achats.pdf">Flyer de présentation de la communauté</Button>
            <img src={site('passubir.gif')} alt="" className="mx-auto mt-10 rounded-xl" />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
