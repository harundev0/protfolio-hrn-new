import type en from './en';
import type { Milestone } from './en';

// Swiss Standard German: "ss" instead of "ß", formal "Sie".
const deCH: typeof en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'Ich bin Harun, Product, UI/UX und Frontend Engineer in Indonesien. Ich gestalte und entwickle Web-Apps und arbeite remote mit Teams überall auf der Welt.',
    aboutTitle: 'Über mich — Harun Bahrudin'
  },
  nav: {
    home: 'Start',
    expertise: 'Expertise',
    about: 'Über mich',
    stack: 'Stack',
    contact: 'Kontakt',
    resume: 'Lebenslauf',
    getInTouch: 'Kontakt aufnehmen',
    active: 'Aktiv',
    toggleMenu: 'Menü öffnen/schliessen',
    toggleTheme: 'Design wechseln',
    language: 'Sprache',
    homeAria: 'Startseite'
  },
  ruler: {
    portfolio: 'Portfolio',
    aboutTag: 'Über mich // Harun',
    position: 'Position auf der Seite',
    home: {
      work: { label: 'Expertise', sub: 'Product · UI/UX · Frontend' },
      about: { label: 'Ansatz', sub: 'Wie ich arbeite' },
      proof: { label: 'Stack', sub: 'Tägliche Werkzeuge' },
      contact: { label: 'Kontakt', sub: 'Kontakt aufnehmen' }
    },
    aboutPage: {
      chronicles: { label: 'Geschichte', sub: 'Mein Weg' },
      experience: { label: 'Laufbahn', sub: 'Berufserfahrung' },
      curation: { label: 'Ablauf', sub: 'Zusammenarbeit' },
      collab: { label: 'Kontakt', sub: 'Kontakt aufnehmen' }
    }
  },
  hero: {
    titlePre: 'Ich gestalte und baue',
    titleEm: 'Webprodukte.',
    body: 'Product Engineer, UI/UX Engineer und Frontend Engineer. Ich begleite ein Feature von der ersten Skizze in Figma bis zum Code, der in Produktion läuft.',
    ctaPrimary: 'Was ich mache',
    ctaSecondary: 'Über mich'
  },
  expertise: {
    eyebrow: 'Was ich mache',
    eyebrowRight: 'Product · UI/UX · Frontend',
    titlePre: 'Design und Code,',
    titleEm: 'eine Person',
    titlePost: '.',
    body: 'In den meisten Teams wandert ein Feature von Product zu Design und dann ins Frontend, und bei jeder Übergabe geht etwas verloren. Ich mache alle drei Teile selbst. Das heisst weniger Hin und Her und weniger Überraschungen am Schluss.',
    cards: [
      { category: 'Product Engineering', title: 'Aus Ideen werden Features', body: 'Ich nehme eine grobe Idee, kläre, was wirklich gebaut werden muss, und bringe sie bis zum Release.' },
      { category: 'UI/UX Engineering', title: 'Design, das im Code hält', body: 'Ich gestalte Abläufe und Screens in Figma und baue sie dann selbst, inklusive der Lade-, Leer- und Fehlerzustände, die in Mockups oft fehlen.' },
      { category: 'Frontend Engineering', title: 'Code, mit dem man gern arbeitet', body: 'Svelte oder React mit TypeScript, aufgeteilt in kleine Komponenten, damit sich die nächste Person schnell zurechtfindet.' },
      { category: 'Performance', title: 'Seiten, die schnell laden', body: 'Ich halte Bundles klein und Animationen flüssig und prüfe die Ladezeit vor jedem Release.' }
    ]
  },
  approach: {
    eyebrow: 'Ansatz',
    eyebrowRight: 'Wie ich arbeite',
    titlePre: 'Gebaut, um zu',
    titleEm: 'bleiben',
    titlePost: '.',
    body: 'Ich schreibe Code, den ich selbst gern übernehmen würde. Klare Namen, eine einfache Struktur und Notizen dazu, warum etwas so entschieden wurde.',
    principles: [
      { title: 'Einfach zu warten', body: 'Strikte Typen, klare Grenzen zwischen den Schichten und Komponenten mit genau einer Aufgabe.' },
      { title: 'Flüssig auf jedem Bildschirm', body: 'Layouts und Animationen funktionieren auf Handy, Tablet und grossem Monitor gleich gut.' },
      { title: 'Barrierefrei von Anfang an', body: 'Semantisches HTML, Tastaturbedienung und gute Kontraste sind von Beginn an dabei.' }
    ]
  },
  stack: {
    eyebrow: 'Stack',
    eyebrowRight: 'Tägliche Werkzeuge',
    titlePre: 'Womit ich',
    titleEm: 'arbeite',
    titlePost: '.',
    body: 'Die Werkzeuge, die ich jeden Tag benutze. Ich habe sie wegen Typsicherheit, kleiner Bundles und schneller Interfaces gewählt.',
    tools: [
      { role: 'Haupt-Framework', desc: 'Meine erste Wahl. Weniger Code zu schreiben und weniger auszuliefern.' },
      { role: 'UI-Komponenten', desc: 'Für Teams und Codebasen, die schon darauf laufen.' },
      { role: 'Typsicherheit', desc: 'Findet viele Fehler, bevor überhaupt ein Pull Request entsteht.' },
      { role: 'Design-System', desc: 'Hält Abstände, Farben und Schrift in der ganzen App einheitlich.' },
      { role: 'Animation', desc: 'Für Animationen, bei denen das Timing genau stimmen muss.' }
    ]
  },
  contact: {
    eyebrow: 'Offen für neue Projekte',
    titlePre: 'Haben Sie ein',
    titleEm: 'Projekt',
    titlePost: '?',
    body: 'Erzählen Sie mir kurz, woran Sie arbeiten und wo es hakt. Ich melde mich und sage Ihnen ehrlich, ob ich dafür die richtige Person bin.',
    email: 'E-Mail schreiben',
    github: 'GitHub',
    top: 'Nach oben'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portfolio',
    stripAvailable: 'Verfügbar für Remote-Arbeit',
    stripTimezone: 'Indonesien (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer mit Sitz in Indonesien. Ich gestalte und baue Web-Apps für Teams, denen Details wichtig sind.',
    based: 'Mit Sitz in Indonesien // Offen für Remote-Arbeit',
    navTitle: 'Navigation',
    navLinks: ['Start', 'Expertise', 'Über mich', 'Tech-Stack', 'Kontakt'],
    navFoot: 'Seitenübersicht',
    toolsTitle: 'Toolchain',
    toolsFoot: 'Im täglichen Einsatz',
    aboutTitle: 'Über mich',
    aboutLinks: ['Meine Geschichte', 'Erfahrung', 'Zusammenarbeit', 'Prinzipien'],
    aboutFoot: 'Über Harun',
    connectTitle: 'Vernetzen',
    resume: 'Lebenslauf (PDF)',
    email: 'E-Mail',
    connectFoot: 'Kontakt aufnehmen',
    rights: 'Alle Rechte vorbehalten',
    builtWith: 'Gebaut mit SvelteKit'
  },
  about: {
    eyebrow: '00 / Über mich',
    eyebrowMeta: 'Harun Bahrudin // Product · UI/UX · Frontend',
    titlePre: 'Halb Designer,',
    titleEm: 'halb Engineer',
    titlePost: '.',
    intro:
      'Ich bin Harun Bahrudin, Product, UI/UX und Frontend Engineer aus Indonesien. Der grösste Teil meiner Arbeit liegt zwischen Design und Code: Ich überlege, wie etwas funktionieren soll, gestalte es und baue es dann.',
    openToWork: 'Offen für Stellen & Aufträge',
    timezone: 'Zeitzone: Indonesien (UTC+7)',
    statusLeft: 'Über Harun',
    statusFocus: 'Fokus: Product · UI/UX · Frontend',
    statusRight: 'Gestaltet & gebaut von Harun',
    story: {
      eyebrow: 'Meine Geschichte',
      eyebrowRight: 'Mein Weg',
      bannerLabel: 'Arbeitsplatz // Build • Design • Ship',
      bannerAltLight: 'Harun Bahrudins Arbeitsplatz bei Tag',
      bannerAltDark: 'Harun Bahrudins Arbeitsplatz bei Nacht',
      caption: 'Fig 00 // Haruns Arbeitsplatz',
      roles: 'Product Engineer • UI/UX Engineer • Frontend Engineer',
      titlePre: 'Wie ich',
      titleEm: 'hierher kam',
      titlePost: '.',
      body: 'Die Kurzfassung: vom Herumbasteln an Websites bis dahin, sie selbst zu bauen.',
      chapter: 'Kapitel',
      chapters: [
        {
          title: 'Angefangen hat es im Browser',
          tag: 'Der Anfang',
          narrative:
            'Wie viele Autodidakten wollte ich zuerst einfach wissen, wie Websites funktionieren. Ich öffnete die DevTools, änderte etwas CSS auf einer Live-Seite und sah, wie sie sich sofort veränderte. Danach war ich dabei.',
          specs: [
            { label: 'Ausgangspunkt', val: 'Browser-DevTools' },
            { label: 'Erste Werkzeuge', val: 'HTML, CSS & JavaScript' },
            { label: 'Wichtigste Lektion', val: '«Element untersuchen» ist eine Superkraft' }
          ],
          specimenTitle: 'Fig 01 // Erste Experimente',
          specimenSubtitle: 'Markup, Styles & Syntax'
        },
        {
          title: 'Verstehen, wie Browser arbeiten',
          tag: 'Tiefer graben',
          narrative:
            'Mit grösseren Projekten kamen Probleme, die sich mit CSS-Tricks nicht lösen liessen: langsame Seiten, ruckelndes Scrollen, Layouts, die auf kleinen Bildschirmen zerfielen. Also lernte ich, wie Layout und Rendering wirklich funktionieren und wie man Interfaces schnell und barrierefrei hält.',
          specs: [
            { label: 'Meilenstein', val: 'Erste Produktiv-App' },
            { label: 'Toolchain', val: 'TypeScript + Komponentenbibliotheken' },
            { label: 'Grundwert', val: 'Performance ist ein Feature' }
          ],
          specimenTitle: 'Fig 02 // Layout & Rendering',
          specimenSubtitle: 'Performance als Gestaltungsvorgabe'
        },
        {
          title: 'Das ganze Produkt im Blick',
          tag: 'Verantwortung',
          narrative:
            'Irgendwann habe ich aufgehört, nur das zu bauen, was im Ticket stand. Ich fragte, wozu ein Feature gebraucht wird, entfernte ungenutzte Abhängigkeiten und prüfte, ob alles auch mit der Tastatur funktioniert. Die Produkte wurden dadurch spürbar besser.',
          specs: [
            { label: 'Architektur', val: 'Klare, getrennte Schichten' },
            { label: 'Fokus', val: 'Product Engineering & UX' },
            { label: 'Faustregel', val: 'Nur bauen, was gebraucht wird' }
          ],
          specimenTitle: 'Fig 03 // Systeme & Tokens',
          specimenSubtitle: 'Token-Mapping im Design-System'
        },
        {
          title: 'Was ich heute mache',
          tag: 'Heute',
          narrative:
            'Heute teile ich meine Zeit zwischen Produktlogik und Interface-Arbeit auf, meistens mit Svelte und React. Neben den Projekten probiere ich neue Werkzeuge aus, lese über Typografie und skizziere Interface-Ideen.',
          specs: [
            { label: 'Status', val: 'Offen für ausgewählte Projekte' },
            { label: 'Zeitzone', val: 'Indonesien / UTC+7 (remote)' },
            { label: 'Ziel', val: 'Software, die man gern benutzt' }
          ],
          specimenTitle: 'Fig 04 // Aktueller Arbeitsplatz',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Erfahrung',
      eyebrowRight: 'Berufserfahrung',
      titlePre: 'Wo ich',
      titleEm: 'gearbeitet habe',
      titlePost: '.',
      body: 'Rollen, Teams und woran ich gearbeitet habe.',
      empty: 'Die Berufserfahrung wird gerade aktualisiert.',
      milestones: [] as Milestone[]
    },
    beyond: {
      eyebrow: 'Zusammenarbeit',
      eyebrowRight: 'Ablauf & Prinzipien',
      titlePre: 'So würden wir',
      titleEm: 'zusammenarbeiten',
      titlePost: '.',
      body: 'Was Sie erwarten können, wenn wir gemeinsam etwas bauen.',
      cards: [
        {
          label: 'Ablauf',
          title: 'Klein anfangen',
          body: 'Wir einigen uns auf einen kleinen ersten Teil, liefern ihn aus und passen danach an, was wir gelernt haben.',
          foot: 'Schritt für Schritt'
        },
        {
          label: 'Kommunikation',
          title: 'Klare Updates',
          body: 'Kurze schriftliche Updates mit Screenshots oder Preview-Links, damit Sie den Fortschritt ohne zusätzliche Meetings sehen.',
          foot: 'Asynchron-freundlich'
        },
        {
          label: 'Übergabe',
          title: 'Alles gehört Ihnen',
          body: 'Code, Designs und Notizen liegen in Ihrem Repository und Ihrem Figma, damit Ihr Team auch ohne mich weitermachen kann.',
          foot: 'Alles bei Ihnen'
        },
        {
          label: 'Prinzipien',
          title: 'Regeln, an die ich mich halte',
          items: [
            'Unter 100 ms fühlt sich sofort an.',
            'Einfacher Code ist günstiger im Unterhalt.',
            'Barrierefreiheit gehört zur Struktur.',
            'Schön und einfach zu bedienen geht zusammen.'
          ],
          foot: 'In jedem Projekt'
        }
      ]
    },
    collab: {
      eyebrow: 'Kontakt // Offen für Zusammenarbeit',
      titlePre: 'Arbeiten wir',
      titleEm: 'zusammen',
      titlePost: '.',
      body: 'Wenn Sie ein Produkt haben, das Design und Engineering braucht, höre ich gern davon. Schreiben Sie mir kurz, und wir schauen gemeinsam weiter.',
      email: 'E-Mail schreiben',
      back: 'Zurück zur Startseite'
    }
  }
};

export default deCH;
