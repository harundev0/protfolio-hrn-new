export type Milestone = { period: string; role: string; company: string; tag: string; deliverables: string[] };

const en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'Harun Bahrudin, product, UI/UX and frontend engineer in Indonesia with seven years of experience. Open to full-time & part-time roles: on-site, hybrid or remote.',
    aboutTitle: 'About — Harun Bahrudin',
    aboutDescription:
      'Work history, education and how I work. Nearly seven years designing and building 360° virtual tour and Google Street View products for GoThru.'
  },
  nav: {
    home: 'Home',
    work: 'Work',
    expertise: 'Expertise',
    about: 'About',
    stack: 'Stack',
    contact: 'Contact',
    resume: 'Resume',
    getInTouch: 'Get in touch',
    active: 'Active',
    toggleMenu: 'Toggle menu',
    toggleTheme: 'Toggle theme',
    language: 'Language',
    homeAria: 'Home',
    skip: 'Skip to content'
  },
  ruler: {
    portfolio: 'Portfolio',
    aboutTag: 'About // Harun',
    position: 'Page position',
    home: {
      projects: { label: 'Work', sub: 'Selected work' },
      work: { label: 'Expertise', sub: 'Product · UI/UX · Frontend' },
      about: { label: 'Approach', sub: 'How I work' },
      proof: { label: 'Stack', sub: 'Daily tools' },
      contact: { label: 'Contact', sub: 'Get in touch' }
    },
    aboutPage: {
      chronicles: { label: 'Story', sub: 'How I got here' },
      experience: { label: 'Career', sub: 'Work history' },
      curation: { label: 'Process', sub: 'Working together' },
      collab: { label: 'Connect', sub: 'Get in touch' }
    }
  },
  hero: {
    titlePre: 'I design and build',
    titleEm: 'web products.',
    body: 'Product engineer, UI/UX engineer and frontend engineer with seven years of experience. I take a feature from the first sketch in Figma to code running in production.',
    ctaPrimary: 'See my work',
    ctaSecondary: 'About me'
  },
  work: {
    eyebrow: 'Selected work',
    eyebrowRight: 'GoThru · 2019–now',
    titlePre: 'Things I’ve',
    titleEm: 'designed',
    titlePost: '.',
    body: 'A few screens from GoThru products I designed. The content in the mockups is placeholder.',
    role: 'Role',
    roleVal: 'UI/UX design',
    items: [
      { name: 'Panorra 360', kind: 'Web app', desc: 'A social feed for 360° photos. Viewers can switch between six view modes, from ultra wide to little planet, without leaving the post.', alt: 'Panorra 360 web feed with a 360° photo viewer and its view mode menu' },
      { name: 'Panorra 360', kind: 'Mobile app', desc: 'The same feed on a phone: For You, Recent and Map tabs, a full-screen viewer and comments on each post.', alt: 'Three Panorra 360 mobile screens: feed, post detail and full-screen viewer' },
      { name: 'GoThru Dashboard', kind: 'Web · Mobile', desc: 'Where customers manage their virtual tours: search, hashtag filters, multi-select and a publishing status for each tour.', alt: 'GoThru Dashboard My Tours page on desktop and mobile in dark mode' },
      { name: 'GoThru 360 · File manager', kind: 'Web app', desc: 'Browse a folder of panoramas and preview each one in a 360° viewer with a location map before editing or uploading.', alt: 'GoThru file manager with a grid of panoramas and a 360° preview of Borobudur temple' }
    ]
  },
  expertise: {
    eyebrow: 'What I do',
    eyebrowRight: 'Product · UI/UX · Frontend',
    titlePre: 'Design and code,',
    titleEm: 'same person',
    titlePost: '.',
    body: 'On most teams, a feature passes from product to design to frontend, and something gets lost each time. I do all three, so there’s less back and forth and fewer surprises at the end.',
    cards: [
      { category: 'Product Engineering', title: 'Turning ideas into features', body: 'I take a rough idea, work out what actually needs to be built, and see it through to release.' },
      { category: 'UI/UX Engineering', title: 'Designs that hold up in code', body: 'I design flows and screens in Figma, then build them myself, including the loading, empty and error states that mockups usually skip.' },
      { category: 'Frontend Engineering', title: 'Code that’s easy to work on', body: 'Svelte or React with TypeScript, split into small components so the next person can find their way around.' },
      { category: 'Performance', title: 'Pages that load fast', body: 'I keep bundles small and animations smooth, and I check load speed before anything ships.' }
    ]
  },
  approach: {
    eyebrow: 'Approach',
    eyebrowRight: 'How I work',
    titlePre: 'Built to',
    titleEm: 'last',
    titlePost: '.',
    body: 'I write code I’d be happy to inherit. Clear names, simple structure, and notes on why a decision was made.',
    principles: [
      { title: 'Easy to maintain', body: 'Strict types, clear boundaries between layers, and components that each do one thing.' },
      { title: 'Smooth on every screen', body: 'Layouts and animations are built to work well on phones, tablets and large monitors.' },
      { title: 'Accessible from day one', body: 'Semantic HTML, keyboard support and good contrast go in from the start.' }
    ]
  },
  stack: {
    eyebrow: 'Stack',
    eyebrowRight: 'Daily tools',
    titlePre: 'What I',
    titleEm: 'work with',
    titlePost: '.',
    body: 'The tools I use every day. I picked them for type safety, small bundles and quick interfaces.',
    tools: [
      { role: 'Primary framework', desc: 'My default. Less code to write and less to ship.' },
      { role: 'UI components', desc: 'For teams and codebases that already run on it.' },
      { role: 'Type safety', desc: 'Catches a lot of bugs before anyone opens a pull request.' },
      { role: 'Design system', desc: 'Keeps spacing, color and type consistent across the app.' },
      { role: 'Motion', desc: 'For animation that needs precise timing.' }
    ]
  },
  contact: {
    eyebrow: 'Open to full-time & part-time roles',
    titlePre: 'Hiring, or have a',
    titleEm: 'project',
    titlePost: '?',
    body: 'If you’re hiring for product, UI/UX or frontend work, or you have a project in mind, send me a short message. I’m open to on-site, hybrid and remote roles, and willing to relocate.',
    email: 'Email me',
    github: 'GitHub',
    top: 'Back to top'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portfolio',
    stripAvailable: 'Open to on-site, hybrid & remote',
    stripTimezone: 'Indonesia (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer based in Indonesia. I design and build web apps for teams who care about the details.',
    based: 'Subang, Indonesia // Willing to relocate',
    navTitle: 'Navigate',
    navLinks: ['Home', 'Work', 'Expertise', 'About', 'Tech stack', 'Contact'],
    navFoot: 'Site index',
    toolsTitle: 'Toolchain',
    toolsFoot: 'Daily drivers',
    aboutTitle: 'About',
    aboutLinks: ['My story', 'Experience', 'Working together', 'Principles'],
    aboutFoot: 'About Harun',
    connectTitle: 'Connect',
    resume: 'Resume (PDF)',
    email: 'Email',
    connectFoot: 'Get in touch',
    rights: 'All rights reserved',
    builtWith: 'Built with SvelteKit'
  },
  about: {
    eyebrow: '00 / About',
    eyebrowMeta: 'Harun Bahrudin // Product · UI/UX · Frontend',
    titlePre: 'Designer',
    titleEm: 'and engineer',
    titlePost: '.',
    intro: [
      'I’m a product engineer with seven years of experience working remotely in Canada’s creative and tech industry, where UI/UX design and frontend engineering meet. I think of a product as a story the user moves through. I design that flow from the user’s side first, then build it with the same care in code, so nothing gets lost between the idea and what people actually use.',
      'My work covers web, mobile and desktop products used by millions of people. Because I design and build, I can take a complicated workflow and turn it into an interface that’s simple to use and solid underneath.'
    ],
    openToWork: 'Open to full-time & part-time roles',
    languages: 'English (fluent) · Indonesian (native)',
    timezone: 'Timezone: Indonesia (UTC+7)',
    statusFocus: 'Focus: Product · UI/UX · Frontend',
    highlights: {
      title: 'Highlights',
      items: [
        { stat: '5/5', label: 'Client satisfaction', text: 'Across hundreds of cross-platform projects, and many clients stayed on for long-term work.' },
        { stat: '70%', label: 'Faster handoff', text: 'Design systems that live in both Figma and code keep design-to-dev handoff short and the product consistent.' },
        { stat: '#1', label: 'Engagement in 24 hours', text: 'A product redesign I led end to end reached #1 in user engagement within 24 hours of launch, well ahead of the old version.' },
        { stat: 'Multi-platform', label: 'Desktop & social', text: 'Delivered across desktop applications and social media platforms, with consistent brand messaging and strong visuals.' }
      ]
    },
    story: {
      eyebrow: 'My story',
      eyebrowRight: 'How I got here',
      bannerLabel: 'Workspace // Build • Design • Ship',
      bannerAltLight: 'Harun Bahrudin’s workspace in daylight',
      bannerAltDark: 'Harun Bahrudin’s workspace at night',
      caption: 'Fig 00 // Harun’s workspace',
      roles: 'Product Engineer • UI/UX Engineer • Frontend Engineer',
      titlePre: 'How I',
      titleEm: 'got here',
      titlePost: '.',
      body: 'I’d like to join a team that values people who can think like a designer and ship like an engineer. If you’re building something meaningful, let’s talk.',
      chapter: 'Chapter',
      chapters: [
        {
          title: 'It started in the browser',
          tag: 'The beginning',
          narrative:
            'Like a lot of self-taught developers, I started out wanting to know how websites worked. I opened DevTools, changed some CSS on a live page and watched it update. That was enough to get me hooked.',
          specs: [
            { label: 'Starting point', val: 'Browser DevTools' },
            { label: 'First tools', val: 'HTML, CSS & JavaScript' },
            { label: 'Key lesson', val: 'Inspect element is a superpower' }
          ],
          specimenTitle: 'Fig 01 // First experiments',
          specimenSubtitle: 'Markup, styles & syntax'
        },
        {
          title: 'Learning how browsers work',
          tag: 'Going deeper',
          narrative:
            'As projects got bigger, I ran into problems CSS tricks couldn’t fix: slow pages, janky scrolling, layouts that broke on small screens. So I learned how layout and rendering actually work, and how to keep interfaces fast and accessible.',
          specs: [
            { label: 'Milestone', val: 'First production app' },
            { label: 'Toolchain', val: 'TypeScript + component libraries' },
            { label: 'Core value', val: 'Performance is a feature' }
          ],
          specimenTitle: 'Fig 02 // Layout & rendering',
          specimenSubtitle: 'Performance as a design constraint'
        },
        {
          title: 'Caring about the whole product',
          tag: 'Ownership',
          narrative:
            'At some point I stopped building only what was in the ticket. I started asking why a feature was needed, removing dependencies we didn’t use, and checking that things worked with a keyboard. The products got better because of it.',
          specs: [
            { label: 'Architecture', val: 'Clear, separate layers' },
            { label: 'Focus', val: 'Product engineering & UX' },
            { label: 'Rule of thumb', val: 'Only build what’s needed' }
          ],
          specimenTitle: 'Fig 03 // Systems & tokens',
          specimenSubtitle: 'Design system token mapping'
        },
        {
          title: 'What I do now',
          tag: 'Today',
          narrative:
            'These days I split my time between product logic and interface work, mostly in Svelte and React. Outside of project work I try new tools, read about typography and sketch interface ideas.',
          specs: [
            { label: 'Status', val: 'Open to full-time & part-time roles' },
            { label: 'Timezone', val: 'Indonesia / UTC+7' },
            { label: 'Goal', val: 'Software that’s nice to use' }
          ],
          specimenTitle: 'Fig 04 // Current workspace',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Experience',
      eyebrowRight: 'Work & education',
      titlePre: 'Where I’ve',
      titleEm: 'worked',
      titlePost: '.',
      body: 'Since November 2019 I’ve worked remotely for GoThru, a company based in Canada. I design and build the UI for 10 of their 360° virtual tour and Google Street View products.',
      empty: 'Work history is being updated.',
      milestones: [
        {
          period: 'Nov 2019 – Present',
          role: 'Product Engineer',
          company: 'GoThru · Canada (remote)',
          tag: 'UI/UX & Frontend',
          deliverables: [
            'Design and build the UI for 10 products on GoThru’s 360° virtual tour and Google Street View platform.',
            'The products: Panorra, TourMkr, GoThru Dashboard, StreetBuilder, GoThru Navigator, Villume, MapThru, GoThru PhotoStudio, GoThru 360 Virtual Tour Maker and GoThru Marketing.',
            'Take each project from user research and wireframes to user flows, high-fidelity UI, prototypes and developer handoff in Figma.',
            'Turn loosely defined business requirements into clear user journeys and responsive layouts.',
            'Build the interfaces in HTML, CSS and JavaScript so the shipped product matches the approved design.',
            'Use AI coding tools (Claude Code, Codex, Cursor, OpenCode, Antigravity) and Google Stitch to speed up prototyping and design-to-code work.',
            'Keep a 5/5 client satisfaction rating and deliver 95–100% of projects on time, working remotely across time zones.'
          ]
        },
        {
          period: 'Graduated 2025',
          role: 'Bachelor of Information Systems',
          company: 'Universitas Subang',
          tag: 'Education',
          deliverables: [
            'GPA 3.65 / 4.00.',
            'Certification: UI/UX Design, Build With Angga (BWA).',
            'Certification: HTML, CSS, JavaScript and Node.js, Udemy.'
          ]
        }
      ] as Milestone[]
    },
    beyond: {
      eyebrow: 'Working together',
      eyebrowRight: 'Process & principles',
      titlePre: 'How we’d',
      titleEm: 'work together',
      titlePost: '.',
      body: 'What you can expect if we build something together.',
      cards: [
        {
          label: 'Process',
          title: 'Start small',
          body: 'We agree on a small first piece, ship it, and adjust based on what we learn.',
          foot: 'One step at a time'
        },
        {
          label: 'Communication',
          title: 'Clear updates',
          body: 'Short written updates with screenshots or preview links, so you can follow progress without extra meetings.',
          foot: 'Async-friendly'
        },
        {
          label: 'Handover',
          title: 'Everything is yours',
          body: 'Code, designs and notes live in the team’s repository and Figma, written so anyone can pick them up.',
          foot: 'Nothing locked away'
        },
        {
          label: 'Principles',
          title: 'Rules I try to follow',
          items: [
            'Under 100 ms feels instant.',
            'Simple code is cheaper to maintain.',
            'Accessibility is part of the structure.',
            'Good-looking and easy to use can go together.'
          ],
          foot: 'On every project'
        }
      ]
    },
    collab: {
      eyebrow: 'Get in touch // Open to full-time & part-time roles',
      titlePre: 'Let’s',
      titleEm: 'work together',
      titlePost: '.',
      body: 'If your team needs someone who does both design and engineering, I’d like to hear about it. Send a short message and we’ll go from there.',
      email: 'Email me',
      back: 'Back to home'
    }
  },
  error: {
    title: 'Page not found',
    body: 'This page doesn’t exist or has moved.',
    generic: 'Something went wrong',
    back: 'Back to home'
  }
};

export default en;
