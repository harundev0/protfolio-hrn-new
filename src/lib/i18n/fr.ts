import type en from './en';
import type { Milestone } from './en';

// French typography: narrow no-break space ( ) before ? ! : ;
const fr: typeof en = {
  meta: {
    title: 'Harun Bahrudin — Ingénieur produit, UI/UX & frontend',
    description:
      'Je suis Harun, ingénieur produit, UI/UX et frontend en Indonésie. Je conçois et développe des applications web, et je travaille à distance avec des équipes du monde entier.',
    aboutTitle: 'À propos — Harun Bahrudin'
  },
  nav: {
    home: 'Accueil',
    expertise: 'Expertise',
    about: 'À propos',
    stack: 'Stack',
    contact: 'Contact',
    resume: 'CV',
    getInTouch: 'Me contacter',
    active: 'Actif',
    toggleMenu: 'Ouvrir/fermer le menu',
    toggleTheme: 'Changer de thème',
    language: 'Langue',
    homeAria: 'Accueil'
  },
  ruler: {
    portfolio: 'Portfolio',
    aboutTag: 'À propos // Harun',
    position: 'Position dans la page',
    home: {
      work: { label: 'Expertise', sub: 'Produit · UI/UX · Frontend' },
      about: { label: 'Approche', sub: 'Ma façon de travailler' },
      proof: { label: 'Stack', sub: 'Outils du quotidien' },
      contact: { label: 'Contact', sub: 'Me contacter' }
    },
    aboutPage: {
      chronicles: { label: 'Parcours', sub: 'Mon histoire' },
      experience: { label: 'Carrière', sub: 'Expériences' },
      curation: { label: 'Méthode', sub: 'Travailler ensemble' },
      collab: { label: 'Contact', sub: 'Me contacter' }
    }
  },
  hero: {
    titlePre: 'Je conçois et je développe',
    titleEm: 'des produits web.',
    body: 'Ingénieur produit, UI/UX et frontend. Je prends une fonctionnalité depuis le premier croquis dans Figma jusqu’au code qui tourne en production.',
    ctaPrimary: 'Ce que je fais',
    ctaSecondary: 'À propos'
  },
  expertise: {
    eyebrow: 'Ce que je fais',
    eyebrowRight: 'Produit · UI/UX · Frontend',
    titlePre: 'Le design et le code,',
    titleEm: 'une seule personne',
    titlePost: '.',
    body: 'Dans la plupart des équipes, une fonctionnalité passe du produit au design puis au frontend, et quelque chose se perd à chaque étape. Je fais les trois, donc moins d’allers-retours et moins de mauvaises surprises à la fin.',
    cards: [
      { category: 'Ingénierie produit', title: 'Transformer une idée en fonctionnalité', body: 'Je pars d’une idée encore floue, je détermine ce qu’il faut vraiment construire, et je la suis jusqu’à la mise en ligne.' },
      { category: 'Ingénierie UI/UX', title: 'Un design qui tient une fois codé', body: 'Je conçois les parcours et les écrans dans Figma, puis je les développe moi-même, y compris les états de chargement, vides et d’erreur que les maquettes oublient souvent.' },
      { category: 'Ingénierie frontend', title: 'Un code agréable à reprendre', body: 'Svelte ou React avec TypeScript, découpé en petits composants pour que la personne suivante s’y retrouve facilement.' },
      { category: 'Performance', title: 'Des pages qui s’affichent vite', body: 'Je garde les bundles légers et les animations fluides, et je vérifie la vitesse de chargement avant chaque mise en ligne.' }
    ]
  },
  approach: {
    eyebrow: 'Approche',
    eyebrowRight: 'Ma façon de travailler',
    titlePre: 'Fait pour',
    titleEm: 'durer',
    titlePost: '.',
    body: 'J’écris le code que j’aimerais reprendre moi-même. Des noms clairs, une structure simple, et des notes qui expliquent pourquoi une décision a été prise.',
    principles: [
      { title: 'Facile à maintenir', body: 'Un typage strict, des couches bien séparées et des composants qui ne font qu’une seule chose.' },
      { title: 'Fluide sur tous les écrans', body: 'Les mises en page et les animations sont pensées pour bien fonctionner sur téléphone, tablette et grand écran.' },
      { title: 'Accessible dès le départ', body: 'HTML sémantique, navigation au clavier et bons contrastes sont là dès le début.' }
    ]
  },
  stack: {
    eyebrow: 'Stack',
    eyebrowRight: 'Outils du quotidien',
    titlePre: 'Mes',
    titleEm: 'outils',
    titlePost: '.',
    body: 'Les outils que j’utilise tous les jours. Je les ai choisis pour le typage, des bundles légers et des interfaces réactives.',
    tools: [
      { role: 'Framework principal', desc: 'Mon choix par défaut. Moins de code à écrire, moins de code à envoyer.' },
      { role: 'Composants UI', desc: 'Pour les équipes et les projets qui tournent déjà dessus.' },
      { role: 'Typage', desc: 'Repère beaucoup de bugs avant même l’ouverture d’une pull request.' },
      { role: 'Design system', desc: 'Garde les espacements, les couleurs et la typo cohérents dans toute l’app.' },
      { role: 'Animation', desc: 'Pour les animations qui demandent un timing précis.' }
    ]
  },
  contact: {
    eyebrow: 'Disponible pour de nouveaux projets',
    titlePre: 'Un projet',
    titleEm: 'en tête',
    titlePost: ' ?',
    body: 'Parlez-moi un peu de ce que vous construisez et de ce qui bloque. Je vous répondrai en vous disant franchement si je suis la bonne personne.',
    email: 'M’écrire',
    github: 'GitHub',
    top: 'Haut de page'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portfolio',
    stripAvailable: 'Disponible en télétravail',
    stripTimezone: 'Indonésie (UTC+7)',
    bio: 'Ingénieur produit, UI/UX & frontend basé en Indonésie. Je conçois et développe des applications web pour des équipes attentives aux détails.',
    based: 'Basé en Indonésie // Ouvert au télétravail',
    navTitle: 'Navigation',
    navLinks: ['Accueil', 'Expertise', 'À propos', 'Stack technique', 'Contact'],
    navFoot: 'Plan du site',
    toolsTitle: 'Outils',
    toolsFoot: 'Au quotidien',
    aboutTitle: 'À propos',
    aboutLinks: ['Mon parcours', 'Expériences', 'Travailler ensemble', 'Principes'],
    aboutFoot: 'À propos de Harun',
    connectTitle: 'Réseaux',
    resume: 'CV (PDF)',
    email: 'E-mail',
    connectFoot: 'Me contacter',
    rights: 'Tous droits réservés',
    builtWith: 'Réalisé avec SvelteKit'
  },
  about: {
    eyebrow: '00 / À propos',
    eyebrowMeta: 'Harun Bahrudin // Produit · UI/UX · Frontend',
    titlePre: 'Designer',
    titleEm: 'et ingénieur',
    titlePost: '.',
    intro:
      'Je suis Harun Bahrudin, ingénieur produit, UI/UX et frontend en Indonésie. La plupart de mon travail se situe entre le design et le code : je réfléchis à la façon dont quelque chose doit fonctionner, je le conçois, puis je le développe.',
    openToWork: 'Disponible pour missions & contrats',
    timezone: 'Fuseau horaire : Indonésie (UTC+7)',
    statusLeft: 'À propos de Harun',
    statusFocus: 'Domaines : Produit · UI/UX · Frontend',
    statusRight: 'Conçu & développé par Harun',
    story: {
      eyebrow: 'Mon parcours',
      eyebrowRight: 'Comment j’en suis arrivé là',
      bannerLabel: 'Espace de travail // Build • Design • Ship',
      bannerAltLight: 'L’espace de travail de Harun Bahrudin en journée',
      bannerAltDark: 'L’espace de travail de Harun Bahrudin la nuit',
      caption: 'Fig 00 // L’espace de travail de Harun',
      roles: 'Product Engineer • UI/UX Engineer • Frontend Engineer',
      titlePre: 'Comment',
      titleEm: 'j’en suis arrivé là',
      titlePost: '.',
      body: 'La version courte, de mes premiers bidouillages de sites à leur construction.',
      chapter: 'Chapitre',
      chapters: [
        {
          title: 'Tout a commencé dans le navigateur',
          tag: 'Les débuts',
          narrative:
            'Comme beaucoup de développeurs autodidactes, je voulais d’abord comprendre comment fonctionnait un site web. J’ai ouvert les DevTools, modifié un peu de CSS sur une page en ligne et vu le résultat changer tout de suite. Ça a suffi pour que je m’y mette.',
          specs: [
            { label: 'Point de départ', val: 'Les DevTools du navigateur' },
            { label: 'Premiers outils', val: 'HTML, CSS & JavaScript' },
            { label: 'Leçon clé', val: '« Inspecter l’élément » est un super-pouvoir' }
          ],
          specimenTitle: 'Fig 01 // Premières expériences',
          specimenSubtitle: 'Balisage, styles & syntaxe'
        },
        {
          title: 'Comprendre le navigateur',
          tag: 'Aller plus loin',
          narrative:
            'Avec des projets plus gros, je suis tombé sur des problèmes qu’aucune astuce CSS ne réglait : pages lentes, défilement saccadé, mises en page cassées sur petit écran. J’ai donc appris comment fonctionnent vraiment la mise en page et le rendu, et comment garder une interface rapide et accessible.',
          specs: [
            { label: 'Étape', val: 'Première application en production' },
            { label: 'Outils', val: 'TypeScript + bibliothèques de composants' },
            { label: 'Valeur clé', val: 'La performance est une fonctionnalité' }
          ],
          specimenTitle: 'Fig 02 // Mise en page & rendu',
          specimenSubtitle: 'La performance comme contrainte de design'
        },
        {
          title: 'Penser au produit dans son ensemble',
          tag: 'Responsabilité',
          narrative:
            'À un moment, j’ai arrêté de développer seulement ce qui était écrit dans le ticket. J’ai commencé à demander pourquoi une fonctionnalité était utile, à supprimer les dépendances inutilisées et à vérifier que tout marchait au clavier. Les produits s’en sont nettement améliorés.',
          specs: [
            { label: 'Architecture', val: 'Des couches claires et séparées' },
            { label: 'Focus', val: 'Ingénierie produit & UX' },
            { label: 'Règle', val: 'Ne construire que le nécessaire' }
          ],
          specimenTitle: 'Fig 03 // Systèmes & tokens',
          specimenSubtitle: 'Cartographie des tokens du design system'
        },
        {
          title: 'Ce que je fais aujourd’hui',
          tag: 'Aujourd’hui',
          narrative:
            'Aujourd’hui, je partage mon temps entre la logique produit et le travail d’interface, surtout avec Svelte et React. En dehors des projets, je teste de nouveaux outils, je lis sur la typographie et j’esquisse des idées d’interface.',
          specs: [
            { label: 'Statut', val: 'Disponible pour des projets choisis' },
            { label: 'Fuseau horaire', val: 'Indonésie / UTC+7 (à distance)' },
            { label: 'Objectif', val: 'Des logiciels agréables à utiliser' }
          ],
          specimenTitle: 'Fig 04 // Espace de travail actuel',
          specimenSubtitle: 'Produit · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Expériences',
      eyebrowRight: 'Parcours professionnel',
      titlePre: 'Là où',
      titleEm: 'j’ai travaillé',
      titlePost: '.',
      body: 'Depuis novembre 2019, je travaille à distance pour GoThru, une entreprise basée au Canada. J’y conçois et développe les interfaces de 10 produits de visites virtuelles 360° et Google Street View.',
      empty: 'Le parcours professionnel est en cours de mise à jour.',
      milestones: [
        {
          period: 'Nov. 2019 – aujourd’hui',
          role: 'Product Engineer',
          company: 'GoThru · Canada (à distance)',
          tag: 'UI/UX & Frontend',
          deliverables: [
            'Je conçois et développe les interfaces de 10 produits de la plateforme de visites virtuelles 360° et Google Street View de GoThru.',
            'Les produits : Panorra, TourMkr, GoThru Dashboard, StreetBuilder, GoThru Navigator, Villume, MapThru, GoThru PhotoStudio, GoThru 360 Virtual Tour Maker et GoThru Marketing.',
            'Je mène chaque projet de la recherche utilisateur et des wireframes jusqu’aux parcours, à l’UI haute fidélité, aux prototypes et à la passation aux développeurs dans Figma.',
            'Je développe les interfaces en HTML, CSS et JavaScript pour que le produit final corresponde au design validé.',
            'Note de satisfaction client de 5/5 et 95–100 % des projets livrés à temps, à distance avec des clients sur plusieurs fuseaux horaires.'
          ]
        }
      ] as Milestone[]
    },
    beyond: {
      eyebrow: 'Travailler ensemble',
      eyebrowRight: 'Méthode & principes',
      titlePre: 'Comment on',
      titleEm: 'travaillerait ensemble',
      titlePost: '.',
      body: 'Ce à quoi vous pouvez vous attendre si on construit quelque chose ensemble.',
      cards: [
        {
          label: 'Méthode',
          title: 'Commencer petit',
          body: 'On se met d’accord sur une première partie, on la livre, puis on ajuste selon ce qu’on a appris.',
          foot: 'Étape par étape'
        },
        {
          label: 'Communication',
          title: 'Des nouvelles claires',
          body: 'De courts points écrits avec captures d’écran ou liens de prévisualisation, pour suivre l’avancement sans réunions en plus.',
          foot: 'Compatible asynchrone'
        },
        {
          label: 'Transmission',
          title: 'Tout vous appartient',
          body: 'Le code, les maquettes et les notes restent dans votre dépôt et votre Figma, pour que votre équipe puisse continuer sans moi.',
          foot: 'Vous gardez tout'
        },
        {
          label: 'Principes',
          title: 'Les règles que je suis',
          items: [
            'Sous 100 ms, tout semble instantané.',
            'Un code simple coûte moins cher à maintenir.',
            'L’accessibilité fait partie de la structure.',
            'Beau et facile à utiliser, c’est compatible.'
          ],
          foot: 'Sur chaque projet'
        }
      ]
    },
    collab: {
      eyebrow: 'Me contacter // Ouvert aux collaborations',
      titlePre: 'Travaillons',
      titleEm: 'ensemble',
      titlePost: '.',
      body: 'Si vous avez un produit qui a besoin de design et de développement, j’aimerais en entendre parler. Envoyez-moi un petit message et on verra la suite ensemble.',
      email: 'M’écrire',
      back: 'Retour à l’accueil'
    }
  }
};

export default fr;
