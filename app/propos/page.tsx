import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone, Quote } from "lucide-react";
import Navbar from "@/components/comp-577";
import SiteFooter from "@/layout/site-footer";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Coaching 4 Job : 20 ans d’expérience dans le recrutement au service des candidats. Découvrez notre mission, notre philosophie et le parcours de notre fondateur, Driss Benchekroun.",
  alternates: { canonical: "/propos" },
};

const pillars = [
  "Transmettre notre expérience",
  "Partager les codes du recrutement",
  "Donner à chaque candidat les moyens de réussir par lui-même",
];

const stats = [
  { value: "20 ans", label: "d’expérience dans le recrutement" },
  { value: "2024", label: "Création de Coaching 4 Job" },
  { value: "INSA Lyon", label: "Ingénieur en informatique" },
];

const details = [
  {
    title: "Entrepreneur dans l’âme, passionné par l’humain",
    body: [
      "Entreprendre a toujours été pour moi bien plus qu’une activité professionnelle. C’est une passion, une curiosité permanente et cette envie de transformer des idées en réalisations concrètes.",
      "Ingénieur en informatique diplômé de l’INSA Lyon, avec un Mastère en SIAG à Toulouse Business School, j’ai débuté ma carrière dans l’informatique, à la Chambre de Commerce et d’Industrie de Toulouse.",
      "Mon parcours m’a ensuite conduit à créer et développer plusieurs entreprises dans des domaines variés : technologie, conseil, services aux entreprises et recrutement. Ma curiosité entrepreneuriale m’a même amené à explorer un univers diamétralement opposé à la technologie : l’artisanat.",
      "Des activités très différentes, mais avec un dénominateur commun : l’être humain, ses compétences et sa capacité à créer de la valeur.",
    ],
  },
  {
    title: "18 ans dans le recrutement : le déclic",
    body: [
      "Pendant 18 ans, j’ai accompagné des entreprises dans leur recherche de talents. J’ai appris à connaître les attentes des recruteurs, leurs critères de sélection et les raisons pour lesquelles certaines candidatures aboutissent tandis que d’autres échouent.",
      "J’ai surtout rencontré de nombreux candidats compétents, parfois brillants, qui passaient à côté d’opportunités professionnelles simplement parce qu’ils ne savaient pas comment aborder le marché du travail ou mettre en valeur leurs atouts.",
      "Une question a alors commencé à me préoccuper : « On leur apprend un métier pendant des années, mais qui leur apprend à décrocher un emploi ? » Cette réflexion allait donner naissance à une nouvelle aventure !",
    ],
  },
  {
    title: "La retraite : une nouvelle mission plutôt qu’une fin de parcours",
    body: [
      "En 2024, arrivé à l’âge de la retraite, j’ai ressenti le besoin de donner une nouvelle dimension à mon expérience. Après plusieurs décennies consacrées à entreprendre, mes priorités avaient évolué.",
      "Je ne cherchais plus à faire fortune. Je souhaitais surtout me rendre utile, transmettre ce que j’avais appris et, pourquoi pas, laisser une trace positive après mon passage.",
      "C’est dans cet esprit que j’ai créé Coaching 4 Job. Non pas comme une simple activité commerciale supplémentaire, mais comme un projet profondément humain.",
    ],
  },
  {
    title: "Coaching 4 Job : passer de l’autre côté de la table",
    body: [
      "Pendant 18 ans, j’ai été du côté de ceux qui recrutent. Aujourd’hui, j’ai choisi de mettre cette expérience au service de ceux qui souhaitent être recrutés.",
      "Ma conviction est simple : la recherche d’emploi est un véritable projet qui se prépare, s’organise, se pilote et se mesure. Je vous accompagne dans toutes les étapes de ce parcours : analyse de votre profil, définition d’une stratégie, ciblage des entreprises, préparation des candidatures, développement de votre réseau, entretiens de recrutement, négociation et intégration professionnelle.",
      "Mais je tiens à un principe fondamental : je ne cherche pas un emploi à votre place. Je vous apprends à le faire efficacement. Je vous conseille, vous oriente, vous challenge et vous accompagne, tout en vous laissant pleinement acteur de votre réussite.",
      "Mon objectif n’est pas uniquement de vous aider à décrocher un emploi. C’est aussi de vous transmettre une autonomie et des réflexes qui vous serviront tout au long de votre carrière.",
    ],
  },
  {
    title: "Ce que j’aimerais laisser derrière moi",
    body: [
      "Avec le recul, je réalise que ce qui me passionne le plus n’est pas seulement de créer, mais aussi d’expliquer, de partager et de transmettre.",
      "Aujourd’hui, ma plus belle satisfaction serait de voir les connaissances acquises au cours de ma carrière contribuer à la réussite professionnelle d’autres personnes.",
      "Si mon expérience peut permettre à des candidats d’éviter des erreurs, de gagner du temps, de prendre confiance en eux et de trouver leur place dans le monde professionnel, alors cette nouvelle aventure aura pleinement son sens.",
      "Et si les enseignements que je transmets continuent un jour à être utiles, même lorsque je ne serai plus là, j’aurai atteint quelque chose qui compte bien davantage à mes yeux qu’une réussite financière.",
    ],
  },
];

const methodSteps = [
  {
    title: "Comprendre votre marché",
    text: "Identifier les entreprises susceptibles de s’intéresser à votre profil, découvrir les opportunités et apprendre à utiliser efficacement les différents canaux de recrutement.",
  },
  {
    title: "Valoriser votre candidature",
    text: "Construire un CV convaincant, rédiger des candidatures adaptées et mettre en avant ce qui vous distingue réellement.",
  },
  {
    title: "Passer à l’action",
    text: "Organiser vos recherches, cibler les bonnes opportunités, développer votre réseau, suivre vos candidatures et effectuer les relances nécessaires.",
  },
  {
    title: "Convaincre les recruteurs",
    text: "Comprendre leurs attentes, préparer vos entretiens, apprendre à parler de vous avec assurance et démontrer la valeur que vous pouvez apporter à l’entreprise.",
  },
  {
    title: "Réussir votre arrivée dans l’entreprise",
    text: "Aborder les discussions sur les conditions d’embauche, préparer votre prise de fonction et faciliter votre intégration professionnelle.",
  },
];

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs ${
        light ? "text-white/70" : "text-brand-muted"
      }`}
    >
      <span aria-hidden="true" className="h-[2px] w-8 shrink-0 bg-brand-yellow sm:w-12" />
      {children}
    </p>
  );
}

export default function ProposPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-brand-ink">
        {/* Ecran 1 */}
        <section className="mx-auto max-w-[1360px] px-5 pb-6 pt-14 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
          <Eyebrow>Coaching 4 Job</Eyebrow>
          <h1 className="max-w-[1240px] text-[clamp(2.2rem,5.2vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.05em]">
            Votre talent mérite de rencontrer les bonnes opportunités
            <span className="text-brand-yellow">.</span>
          </h1>
          <p className="mt-6 max-w-[1040px] text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
            Chercher un emploi ne devrait pas être un parcours solitaire. Avec la bonne méthode, les
            bons conseils et un accompagnement adapté, vous pouvez aborder le marché du travail avec
            davantage de confiance, de méthode et d’efficacité.
          </p>
          <p className="mt-5 max-w-[1040px] border-l-4 border-brand-yellow pl-4 text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
            Ne cherchez plus un emploi au hasard. Apprenez à construire votre réussite.
          </p>
        </section>

        {/* Qui sommes-nous */}
        <section className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Eyebrow>Qui sommes-nous ?</Eyebrow>
          <h2 className="max-w-[980px] text-balance text-[clamp(1.8rem,3.8vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em]">
            Derrière chaque CV, il y a une personne, une histoire et un avenir à construire
            <span className="text-brand-yellow">.</span>
          </h2>

          <div className="mt-12 grid gap-10 border-t border-brand-ink pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:pt-14">
            <div className="space-y-5 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
              <p>
                Chez Coaching 4 Job, nous sommes convaincus qu’un candidat ne se résume ni à son
                diplôme, ni à son CV, ni à ses années d’expérience.
              </p>
              <p>
                Derrière chaque candidature se trouvent des compétences, des ambitions, des espoirs
                et parfois des doutes. Notre mission est de vous aider à transformer votre potentiel
                en véritables opportunités professionnelles.
              </p>
              <p>
                Avec 20 années d’expérience dans le monde du recrutement, Coaching 4 Job repose sur
                une ambition profondément humaine :
              </p>
            </div>
            <div className="space-y-5 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
              <ul className="border-y border-brand-ink/20">
                {pillars.map((pillar, index) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-4 border-b border-brand-ink/20 py-4 text-brand-ink last:border-b-0"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center bg-brand-yellow text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-bold tracking-[-0.02em]">{pillar}</span>
                  </li>
                ))}
              </ul>
              <p>
                Nous connaissons les attentes des recruteurs, leurs méthodes de sélection et les
                erreurs qui peuvent éliminer une candidature, parfois dès les premières secondes.
                Cette connaissance du terrain, nous la mettons aujourd’hui à votre service.
              </p>
              <p>
                Nous ne nous contentons pas de vous conseiller sur votre CV ou de vous préparer à un
                entretien. Nous vous accompagnons dans toute votre démarche, de la définition de
                votre projet professionnel jusqu’à votre intégration dans votre nouvel emploi.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophie */}
        <section className="bg-brand-ink text-white">
          <div className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
            <Eyebrow light>Notre philosophie</Eyebrow>
            <p className="max-w-[1000px] text-balance text-[clamp(1.6rem,3.4vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.04em]">
              Nous ne cherchons pas un emploi à votre place. Nous vous apprenons à conduire votre
              recherche avec méthode, confiance et autonomie
              <span className="text-brand-yellow">.</span>
            </p>
            <p className="mt-6 text-base text-white/75 sm:text-lg">
              Parce que votre réussite doit avant tout être la vôtre.
            </p>
          </div>
        </section>

        {/* Mot du fondateur */}
        <section className="w-full border-y border-brand-ink">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[380px] overflow-hidden bg-brand-ink sm:min-h-[560px] lg:min-h-[680px]">
              <Image
                src="/images/driss-benchekroun.jpg"
                alt="Driss Benchekroun, fondateur de Coaching 4 Job"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(17,17,17,0.78)_100%)]"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-3 w-28 bg-brand-yellow sm:h-4 sm:w-40"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8">
                <span aria-hidden="true" className="mb-4 block h-1 w-14 bg-brand-yellow" />
                <p className="text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Driss Benchekroun
                </p>
                <p className="mt-1 text-sm text-white/80 sm:text-base">
                  Fondateur de Coaching 4 Job
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 xl:px-24">
              <Eyebrow>Mot du fondateur</Eyebrow>
              <h2 className="text-[clamp(1.75rem,3.2vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.045em]">
                Après une vie consacrée à entreprendre, j’ai choisi de transmettre
                <span className="text-brand-yellow">.</span>
              </h2>
              <p className="mt-3 text-sm font-semibold sm:text-base">
                Driss BENCHEKROUN · Serial entrepreneur | Expert en recrutement | Fondateur de
                Coaching 4 Job
              </p>

              <div className="mt-6 max-w-[700px] space-y-4 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
                <p>
                  Ingénieur de formation, entrepreneur dans l’âme, j’ai créé et développé des
                  entreprises dans des univers aussi différents que la technologie, le conseil, le
                  recrutement et l’artisanat.
                </p>
                <p>
                  Mes 18 années d’expérience dans le recrutement m’ont appris une chose essentielle :
                  de nombreux candidats possèdent les compétences pour réussir, mais ne savent pas
                  toujours comment convaincre les entreprises de leur donner leur chance.
                </p>
                <p>
                  En 2024, à l’heure de la retraite, j’ai décidé de mettre cette expérience au
                  service des autres en créant Coaching 4 Job. Aujourd’hui, ma mission est de vous
                  transmettre les clés d’une recherche d’emploi efficace, de vous accompagner avec
                  méthode et de vous aider à trouver le job qui vous correspond.
                </p>
              </div>

              <blockquote className="mt-7 flex gap-4 border-l-4 border-brand-yellow bg-brand-soft px-5 py-4">
                <Quote aria-hidden="true" className="mt-1 size-5 shrink-0" />
                <p className="text-base font-semibold leading-7 sm:text-lg">
                  Hier, j’aidais les entreprises à trouver les bons candidats. Aujourd’hui, j’aide
                  les candidats à trouver les bonnes entreprises.
                </p>
              </blockquote>

              <dl className="mt-7 grid gap-5 border-t border-brand-ink/20 pt-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.value}>
                    <dt className="text-xl font-bold tracking-[-0.03em] sm:text-2xl">{stat.value}</dt>
                    <dd className="mt-1 text-sm leading-5 text-[#2b2b2b]">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Pour plus de détails */}
        <section className="bg-brand-soft">
          <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-10 sm:py-20">
            <Eyebrow>Pour plus de détails</Eyebrow>
            <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.04em]">
              Le parcours de Driss Benchekroun<span className="text-brand-yellow">.</span>
            </h2>
            <div className="border-t border-brand-ink">
              {details.map((item) => (
                <details key={item.title} className="group border-b border-brand-ink/30">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold tracking-[-0.02em] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink sm:text-xl [&::-webkit-details-marker]:hidden">
                    {item.title}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="space-y-4 pb-6 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-10 text-balance text-xl font-bold leading-snug tracking-[-0.03em] sm:text-2xl">
              Après avoir aidé les entreprises à trouver les bons candidats, j’ai choisi d’aider les
              candidats à trouver les bonnes entreprises.
            </p>
            <p className="mt-3 text-base text-brand-muted">
              C’est ma conviction. C’est ma mission. C’est la raison d’être de Coaching 4 Job.
            </p>
          </div>
        </section>

        {/* Ecran 3 : Notre méthode */}
        <section className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Eyebrow>Notre méthode</Eyebrow>
          <h2 className="max-w-[900px] text-balance text-[clamp(1.8rem,3.8vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em]">
            Ne laissez plus votre recherche d’emploi au hasard
            <span className="text-brand-yellow">.</span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
              <p>
                Envoyer des dizaines de CV, attendre des réponses qui ne viennent pas, multiplier les
                candidatures sans comprendre pourquoi elles n’aboutissent pas… Cette situation vous
                semble familière ?
              </p>
              <p>
                Et si le problème n’était pas votre profil, mais la manière dont vous abordez le
                marché de l’emploi ?
              </p>
              <p className="font-bold text-brand-ink">
                Chercher un emploi, c’est un véritable projet. Et comme tout projet, il se prépare,
                s’organise et se pilote.
              </p>
              <p>
                Chez Coaching 4 Job, nous avons développé une approche structurée, progressive et
                personnalisée, inspirée de notre expérience du recrutement et adaptée aux réalités du
                marché de l’emploi.
              </p>
              <p>
                Tout commence par vous : votre parcours, vos compétences, vos aspirations, vos points
                forts et les aspects que vous pouvez améliorer. Ensemble, nous définissons un objectif
                professionnel réaliste, construisons votre stratégie et organisons vos démarches.
              </p>
              <p>Nous vous guidons ensuite à travers les différentes étapes de votre recherche :</p>
            </div>

            <ol className="border-t border-brand-ink">
              {methodSteps.map((step, index) => (
                <li key={step.title} className="flex gap-5 border-b border-brand-ink/30 py-5">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-brand-yellow text-base font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">{step.title}</h3>
                    <p className="mt-1 text-base leading-7 text-[#2b2b2b]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 grid gap-6 border-t border-brand-ink/20 pt-8 text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8 lg:grid-cols-2 lg:gap-16">
            <p>
              À chaque étape, vous avancez à votre rythme, avec des conseils concrets, des exercices
              pratiques, des échanges personnalisés et un suivi de votre progression. Vous réalisez
              vous-même les actions. Nous sommes à vos côtés pour vous orienter, vous conseiller,
              corriger vos erreurs et valider votre travail.
            </p>
            <p className="font-bold text-brand-ink">
              Notre objectif n’est pas seulement de vous aider à trouver un emploi. C’est de vous
              donner une méthode et des réflexes qui vous serviront tout au long de votre carrière.
            </p>
          </div>
        </section>

        {/* Ecran 4 : Nos accompagnements */}
        <section className="bg-brand-ink text-white">
          <div className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <Eyebrow light>Nos accompagnements</Eyebrow>
            <h2 className="max-w-[1240px] text-[clamp(1.8rem,3.8vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em]">
              À chaque parcours ses défis. À chaque candidat son accompagnement
              <span className="text-brand-yellow">.</span>
            </h2>
            <div className="mt-6 max-w-[1040px] space-y-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              <p>Vous venez d’obtenir votre diplôme ? Vous souhaitez donner un nouvel élan à votre carrière ?</p>
              <p>
                Vous ne partez pas du même point et vos besoins ne sont pas les mêmes. C’est pourquoi
                Coaching 4 Job adapte son accompagnement à votre expérience, à vos ambitions et aux
                difficultés que vous rencontrez.
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-white/25 lg:grid-cols-2">
              <article className="bg-brand-ink py-8 lg:pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow">
                  1 · Nouveau lauréat
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">
                  Votre diplôme est une belle réussite. Et maintenant, construisons la suite.
                </h3>
                <div className="mt-5 space-y-4 text-base leading-7 text-white/90">
                  <p>Après plusieurs années d’études, vous voilà diplômé. Félicitations !</p>
                  <p>Mais une nouvelle étape commence, et avec elle, beaucoup de questions :</p>
                  <ul className="space-y-1 font-semibold text-white">
                    <li>Par où commencer ?</li>
                    <li>Quelles entreprises contacter ?</li>
                    <li>Comment se démarquer parmi les nombreux candidats ?</li>
                    <li>Comment convaincre un recruteur lorsqu’on possède encore peu d’expérience ?</li>
                  </ul>
                  <p>
                    Rassurez-vous, ces interrogations sont naturelles. Vous avez appris un métier. Il
                    vous reste maintenant à apprendre à vous faire recruter. Et c’est précisément là
                    que nous intervenons.
                  </p>
                  <p>
                    Chez Coaching 4 Job, nous vous aidons à franchir le passage entre les études et le
                    monde professionnel. Nous vous apprenons à comprendre le fonctionnement du marché
                    de l’emploi, à identifier les postes accessibles à votre profil, à valoriser vos
                    formations, vos stages, vos projets et vos qualités personnelles.
                  </p>
                  <p>
                    Nous vous accompagnons également dans la construction de candidatures efficaces, la
                    recherche d’opportunités, la préparation de vos entretiens et vos premiers échanges
                    avec les recruteurs. Mais surtout, nous vous aidons à prendre confiance en vos
                    capacités et à adopter les bons réflexes professionnels.
                  </p>
                  <p className="font-bold text-white">
                    Vous n’avez peut-être pas encore une longue expérience à présenter, mais vous avez
                    déjà des compétences, des qualités et un potentiel à faire découvrir.
                  </p>
                  <p>Notre rôle est de vous apprendre à les mettre en valeur.</p>
                  <p className="font-bold text-white">
                    Votre premier emploi ne doit pas être uniquement une question de chance.
                    Donnez-vous les moyens de le préparer.
                  </p>
                </div>
                <p className="mt-6 text-base text-white/90">Prêt à faire vos premiers pas dans le monde professionnel ?</p>
                <Link
                  href="/#contact"
                  className="mt-3 inline-flex min-h-12 items-center gap-4 whitespace-nowrap rounded-full bg-brand-yellow px-6 text-base font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
                >
                  Parlons de votre avenir professionnel
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>

              <article className="bg-brand-ink py-8 lg:pl-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow">
                  2 · Candidat expérimenté
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">
                  Vous avez de l’expérience. Donnons-lui de nouvelles perspectives.
                </h3>
                <div className="mt-5 space-y-4 text-base leading-7 text-white/90">
                  <p>
                    Vous avez déjà fait vos preuves dans le monde professionnel. Vous avez développé
                    des compétences, acquis de l’expérience et construit un parcours qui mérite d’être
                    reconnu.
                  </p>
                  <p>Mais aujourd’hui, vous ressentez le besoin de changement.</p>
                  <p>
                    Peut-être souhaitez-vous évoluer vers davantage de responsabilités, découvrir un
                    nouvel environnement, changer de métier ou retrouver un emploi après une période de
                    transition. Et pourtant, malgré votre expérience, votre recherche ne produit pas
                    toujours les résultats espérés.
                  </p>
                  <ul className="space-y-1 font-semibold text-white">
                    <li>Votre CV ne suscite pas suffisamment d’intérêt ?</li>
                    <li>Vos candidatures restent sans réponse ?</li>
                    <li>Vous avez du mal à valoriser votre parcours ou à convaincre lors des entretiens ?</li>
                  </ul>
                  <p className="font-bold text-white">
                    Avoir de l’expérience est un atout. Savoir la présenter et la transformer en
                    opportunité en est un autre.
                  </p>
                  <p>
                    Chez Coaching 4 Job, nous vous aidons à prendre du recul sur votre parcours, à
                    identifier vos véritables atouts et à construire un projet professionnel cohérent
                    avec vos ambitions.
                  </p>
                  <p>
                    Nous travaillons ensemble sur votre positionnement, votre stratégie de recherche,
                    la valorisation de vos réalisations et votre capacité à convaincre les recruteurs
                    de la contribution que vous pouvez apporter à leur entreprise. Nous vous
                    accompagnons également dans la préparation des entretiens, la mise en valeur de vos
                    compétences et la négociation de vos conditions d’embauche.
                  </p>
                  <p>
                    Notre approche tient compte de votre parcours, de vos responsabilités, de vos
                    contraintes et de vos aspirations.
                  </p>
                  <p className="font-bold text-white">
                    Vous ne repartez pas de zéro. Vous vous appuyez sur ce que vous avez construit, pour
                    préparer la prochaine étape de votre carrière.
                  </p>
                </div>
                <p className="mt-6 text-base text-white/90">Prêt à donner un nouvel élan à votre vie professionnelle ?</p>
                <Link
                  href="/#contact"
                  className="mt-3 inline-flex min-h-12 items-center gap-4 whitespace-nowrap rounded-full bg-brand-yellow px-6 text-base font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
                >
                  Échangeons sur votre projet
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Un dernier mot */}
        <section className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Eyebrow>Un dernier mot</Eyebrow>
          <h2 className="max-w-[900px] text-balance text-[clamp(1.8rem,3.8vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em]">
            Votre avenir professionnel mérite mieux que l’improvisation
            <span className="text-brand-yellow">.</span>
          </h2>
          <p className="mt-6 max-w-[820px] text-base leading-7 text-[#2b2b2b] sm:text-lg sm:leading-8">
            Quel que soit votre parcours, vous n’avez pas à affronter seul les difficultés de la
            recherche d’emploi. Chez Coaching 4 Job, nous croyons à la valeur de chaque parcours, à la
            force de l’apprentissage et à l’importance d’un accompagnement profondément humain.
          </p>
          <p className="mt-5 max-w-[820px] border-l-4 border-brand-yellow pl-4 text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
            Votre engagement fait avancer votre recherche. Notre expérience vous aide à lui donner la
            bonne direction.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-between gap-7 whitespace-nowrap rounded-full bg-brand-yellow pl-7 pr-6 text-base font-bold text-brand-ink transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-center"
          >
            Faisons connaissance
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </section>

        {/* Ecran 5 et 6 : Contact */}
        <section className="border-t border-brand-ink bg-brand-soft">
          <div className="mx-auto grid max-w-[1360px] gap-8 px-5 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16">
            <div>
              <Eyebrow>Nous contacter</Eyebrow>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0" />
                  Technopark – Route de Nouceur, 20 150 Casablanca - Maroc
                </li>
                <li className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="size-5 shrink-0" />
                  <a className="font-semibold underline decoration-brand-yellow decoration-2 underline-offset-4" href="tel:+212661138432">
                    +212 661 138 432
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  <a className="underline underline-offset-4" href="mailto:contact@coaching4job.com">
                    contact@coaching4job.com
                  </a>
                </li>
              </ul>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-14 items-center justify-center gap-4 whitespace-nowrap rounded-full border-2 border-brand-ink px-7 text-base font-bold transition-colors hover:bg-brand-ink hover:text-white"
            >
              Fiche contact & conférence en ligne
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
