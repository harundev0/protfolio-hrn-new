import type en from './en';
import type { Milestone } from './en';

// Swiss Standard German: "ss" instead of "ß", formal "Sie".
const deCH: typeof en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'Harun Bahrudin, Product, UI/UX und Frontend Engineer in Indonesien mit sieben Jahren Erfahrung. Offen für Voll- und Teilzeitstellen: vor Ort, hybrid oder remote.',
    aboutTitle: 'Über mich — Harun Bahrudin',
    aboutDescription:
      'Berufserfahrung, Ausbildung und Arbeitsweise. Fast sieben Jahre Gestaltung und Entwicklung von 360°-Virtual-Tour- und Google-Street-View-Produkten für GoThru.'
  },
  nav: {
    home: 'Start',
    work: 'Arbeiten',
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
    homeAria: 'Startseite',
    skip: 'Zum Inhalt springen'
  },
  ruler: {
    portfolio: 'Portfolio',
    aboutTag: 'Über mich // Harun',
    position: 'Position auf der Seite',
    home: {
      projects: { label: 'Arbeiten', sub: 'Ausgewählte Arbeiten' },
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
    body: 'Product Engineer, UI/UX Engineer und Frontend Engineer mit sieben Jahren Erfahrung. Ich begleite ein Feature von der ersten Skizze in Figma bis zum Code, der in Produktion läuft.',
    ctaPrimary: 'Meine Arbeiten',
    ctaSecondary: 'Über mich'
  },
  work: {
    eyebrow: 'Ausgewählte Arbeiten',
    eyebrowRight: 'GoThru · 2019–heute',
    titlePre: 'Was ich',
    titleEm: 'gestaltet habe',
    titlePost: '.',
    body: 'Einige Screens aus GoThru-Produkten, die ich gestaltet habe. Die Inhalte in den Mockups sind Platzhalter.',
    role: 'Rolle',
    roleVal: 'UI/UX-Design',
    items: [
      { name: 'Panorra 360', kind: 'Web-App', desc: 'Ein Social Feed für 360°-Fotos. Man wechselt zwischen sechs Ansichten, von Ultra Wide bis Little Planet, ohne den Beitrag zu verlassen.', alt: 'Panorra-360-Webfeed mit 360°-Fotoviewer und Menü der Ansichtsmodi' },
      { name: 'Panorra 360', kind: 'Mobile-App', desc: 'Derselbe Feed auf dem Handy: Tabs für For You, Recent und Map, ein Vollbild-Viewer und Kommentare zu jedem Beitrag.', alt: 'Drei Screens der Panorra-360-App: Feed, Beitragsdetail und Vollbild-Viewer' },
      { name: 'GoThru Dashboard', kind: 'Web · Mobile', desc: 'Hier verwalten Kunden ihre Virtual Tours: Suche, Hashtag-Filter, Mehrfachauswahl und ein Veröffentlichungsstatus für jede Tour.', alt: 'GoThru Dashboard, Seite My Tours auf Desktop und Mobile im Dark Mode' },
      { name: 'GoThru 360 · Dateimanager', kind: 'Web-App', desc: 'Einen Ordner mit Panoramen durchsuchen und jedes Bild vor dem Bearbeiten oder Hochladen in einem 360°-Viewer mit Standortkarte ansehen.', alt: 'GoThru-Dateimanager mit Panorama-Raster und 360°-Vorschau des Borobudur-Tempels' }
    ]
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
    eyebrow: 'Offen für Voll- und Teilzeitstellen',
    titlePre: 'Stellen Sie ein, oder haben Sie ein',
    titleEm: 'Projekt',
    titlePost: '?',
    body: 'Wenn Sie jemanden für Product, UI/UX oder Frontend suchen oder ein Projekt planen, schreiben Sie mir kurz. Ich bin offen für Stellen vor Ort, hybrid und remote und bereit umzuziehen.',
    email: 'E-Mail schreiben',
    github: 'GitHub',
    top: 'Nach oben'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portfolio',
    stripAvailable: 'Offen für vor Ort, hybrid & remote',
    stripTimezone: 'Indonesien (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer mit Sitz in Indonesien. Ich gestalte und baue Web-Apps für Teams, denen Details wichtig sind.',
    based: 'Subang, Indonesien // Bereit umzuziehen',
    navTitle: 'Navigation',
    navLinks: ['Start', 'Arbeiten', 'Expertise', 'Über mich', 'Tech-Stack', 'Kontakt'],
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
    titlePre: 'Designer',
    titleEm: 'und Engineer',
    titlePost: '.',
    intro: [
      'Ich bin Product Engineer mit sieben Jahren Erfahrung, remote in der Kreativ- und Tech-Branche Kanadas, dort, wo UI/UX-Design und Frontend Engineering zusammenkommen. Für mich ist ein Produkt eine Geschichte, durch die sich die Nutzer bewegen. Ich gestalte diesen Ablauf zuerst aus ihrer Sicht und baue ihn dann mit derselben Sorgfalt im Code, damit zwischen der Idee und dem, was die Leute wirklich benutzen, nichts verloren geht.',
      'Meine Arbeit umfasst Web-, Mobile- und Desktop-Produkte, die von Millionen Menschen genutzt werden. Weil ich gestalte und entwickle, kann ich komplizierte Abläufe in Oberflächen verwandeln, die einfach zu bedienen und technisch solide sind.'
    ],
    openToWork: 'Offen für Voll- und Teilzeitstellen',
    languages: 'Englisch (fliessend) · Indonesisch (Muttersprache)',
    timezone: 'Zeitzone: Indonesien (UTC+7)',
    statusFocus: 'Fokus: Product · UI/UX · Frontend',
    highlights: {
      title: 'Highlights',
      items: [
        { stat: '5/5', label: 'Kundenzufriedenheit', text: 'Über Hunderte plattformübergreifende Projekte, und viele Kunden blieben für eine langfristige Zusammenarbeit.' },
        { stat: '70%', label: 'Schnellere Übergabe', text: 'Design-Systeme, die in Figma und im Code leben, verkürzen die Übergabe vom Design an die Entwicklung und halten das Produkt einheitlich.' },
        { stat: '#1', label: 'Engagement in 24 Stunden', text: 'Ein Produkt-Redesign, das ich von Anfang bis Ende geleitet habe, war innerhalb von 24 Stunden nach dem Launch die Nummer 1 beim Nutzer-Engagement, deutlich vor der alten Version.' },
        { stat: 'Multiplattform', label: 'Desktop & Social Media', text: 'Umgesetzt für Desktop-Anwendungen und Social-Media-Plattformen, mit einheitlicher Markenbotschaft und starken Visuals.' }
      ]
    },
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
      body: 'Ich möchte in einem Team arbeiten, das Leute schätzt, die wie Designer denken und wie Engineers liefern. Wenn Sie etwas Sinnvolles bauen, lassen Sie uns reden.',
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
            { label: 'Status', val: 'Offen für Voll- und Teilzeitstellen' },
            { label: 'Zeitzone', val: 'Indonesien / UTC+7' },
            { label: 'Ziel', val: 'Software, die man gern benutzt' }
          ],
          specimenTitle: 'Fig 04 // Aktueller Arbeitsplatz',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Erfahrung',
      eyebrowRight: 'Beruf & Ausbildung',
      titlePre: 'Wo ich',
      titleEm: 'gearbeitet habe',
      titlePost: '.',
      body: 'Seit November 2019 arbeite ich remote für GoThru, ein Unternehmen aus Kanada. Dort gestalte und baue ich die Oberflächen für 10 Produkte rund um 360°-Virtual-Tours und Google Street View.',
      empty: 'Die Berufserfahrung wird gerade aktualisiert.',
      milestones: [
        {
          period: 'Nov. 2019 – heute',
          role: 'Product Engineer',
          company: 'GoThru · Kanada (remote)',
          tag: 'UI/UX & Frontend',
          deliverables: [
            'Ich gestalte und baue die Oberflächen für 10 Produkte der 360°-Virtual-Tour- und Google-Street-View-Plattform von GoThru.',
            'Die Produkte: Panorra, TourMkr, GoThru Dashboard, StreetBuilder, GoThru Navigator, Villume, MapThru, GoThru PhotoStudio, GoThru 360 Virtual Tour Maker und GoThru Marketing.',
            'Jedes Projekt begleite ich von User Research und Wireframes über User Flows, High-Fidelity-UI und Prototypen bis zur Übergabe an die Entwicklung in Figma.',
            'Unklare Geschäftsanforderungen übersetze ich in klare User Journeys und responsive Layouts.',
            'Die Oberflächen setze ich in HTML, CSS und JavaScript um, damit das fertige Produkt dem freigegebenen Design entspricht.',
            'Mit KI-Coding-Tools (Claude Code, Codex, Cursor, OpenCode, Antigravity) und Google Stitch beschleunige ich Prototyping und den Weg vom Design zum Code.',
            'Kundenzufriedenheit von 5/5 und 95–100 % der Projekte pünktlich geliefert, remote mit Kunden in verschiedenen Zeitzonen.'
          ]
        },
        {
          period: 'Abschluss 2025',
          role: 'Bachelor in Wirtschaftsinformatik',
          company: 'Universitas Subang',
          tag: 'Ausbildung',
          deliverables: [
            'Notendurchschnitt (GPA) 3.65 / 4.00.',
            'Zertifikat: UI/UX Design, Build With Angga (BWA).',
            'Zertifikat: HTML, CSS, JavaScript und Node.js, Udemy.'
          ]
        }
      ] as Milestone[]
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
          body: 'Code, Designs und Notizen liegen im Repository und Figma des Teams, so geschrieben, dass jede Person weitermachen kann.',
          foot: 'Nichts unter Verschluss'
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
      eyebrow: 'Kontakt // Offen für Voll- und Teilzeitstellen',
      titlePre: 'Arbeiten wir',
      titleEm: 'zusammen',
      titlePost: '.',
      body: 'Wenn Ihr Team jemanden braucht, der Design und Engineering abdeckt, höre ich gern davon. Schreiben Sie mir kurz, und wir schauen gemeinsam weiter.',
      email: 'E-Mail schreiben',
      back: 'Zurück zur Startseite'
    }
  },
  error: {
    title: 'Seite nicht gefunden',
    body: 'Diese Seite gibt es nicht oder sie wurde verschoben.',
    generic: 'Etwas ist schiefgelaufen',
    back: 'Zurück zur Startseite'
  }
};

export default deCH;
