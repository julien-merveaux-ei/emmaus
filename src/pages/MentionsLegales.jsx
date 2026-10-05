import { Building2, Server, Copyright, ShieldCheck } from 'lucide-react'
import { Container, Reveal, Card, IconBadge, A, PageHero } from '../components/ui.jsx'

export default function MentionsLegales() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Mentions légales" />

      <section className="py-24 sm:py-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <IconBadge icon={Building2} />
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">Concepteur et éditeur du site</dt>
                  <dd className="mt-1 font-semibold">Association Emmaüs Cernay 68</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">Directeur de la publication</dt>
                  <dd className="mt-1 font-semibold">Présidence de l'Association</dd>
                </div>
                <dd className="text-ink/75">
                  18 avenue d'Alsace - 68700 CERNAY - France<br />
                  Tél 03.89.75.45.35 - Fax 03.89.75.73.63<br />
                  www.emmaus-cernay68.org
                </dd>
              </dl>
              <A to="/plan-du-site" className="link mt-6 inline-block">Plan du site</A>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <IconBadge icon={Server} />
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-ink/50">Hébergement du site</p>
              <p className="mt-2 text-ink/75">OVH - 2 rue Kellermann - BP 80157<br />59053 ROUBAIX Cedex 1</p>
              <A href="http://www.ovh.com/fr/index.xml" className="link mt-4 inline-block">ovh.com</A>
            </Card>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <Card>
              <div className="flex items-center gap-4">
                <IconBadge icon={Copyright} />
                <h2 className="font-display text-2xl font-bold">Droits d'auteur et de reproduction</h2>
              </div>
              <div className="mt-6 space-y-4 text-ink/75">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur les droits d'auteur et
                  la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les
                  représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un
                  support quel qu'il soit, est interdite sauf autorisation expresse de l'éditeur du site. La reproduction
                  des textes sur un support papier est autorisée dans le cadre pédagogique, sous réserve du respect des
                  trois conditions suivantes :
                </p>
                <ul className="space-y-1 pl-4">
                  <li>- gratuité de la diffusion,</li>
                  <li>- respect de l'intégrité des documents reproduits (pas de modification, ni altération),</li>
                  <li>
                    - citation claire et lisible de la source sous la forme suivante : " Document issu du site Internet
                    www.emmaus-cernay68.org. Les droits de reproduction sont réservés et strictement limités ".
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <Card>
              <div className="flex items-center gap-4">
                <IconBadge icon={ShieldCheck} />
                <h2 className="font-display text-2xl font-bold">Droit d'accès et de rectification - Contenu</h2>
              </div>
              <div className="mt-6 space-y-4 text-ink/75">
                <p>
                  Conformément à la loi Informatique et Libertés du 6 Janvier 1978, vous disposez d'un droit d'accès et de
                  rectification aux données personnelles vous concernant. Si vous souhaitez exercer ce droit, il vous
                  suffit de nous écrire à l'adresse mentionnée ci-dessus.
                </p>
                <p>
                  Par ailleurs, les informations contenues dans ce site sont données à titre indicatif et n'ont aucun
                  caractère exhaustif. Elles ne sauraient engager la responsabilité de l'association et de leurs auteurs
                  qui ne pourront être tenus pour responsables de toute omission, erreur ou lacune qui aurait pu se
                  glisser dans les pages de ce site ainsi que des conséquences, quelles qu'elles soient, qui
                  résulteraient de l'utilisation des informations et indications fournies.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <p className="text-center text-sm text-ink/50">
              Site exempt de publicité et non relié aux réseaux sociaux.<br />
              Conçu et mis à jour en réemployant le logiciel gratuit et hors d'âge FrontPage Express v2.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
