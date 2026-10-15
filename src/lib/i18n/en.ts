export type Milestone = { period: string; role: string; company: string; tag: string; deliverables: string[] };

const en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'I’m Harun, a product, UI/UX and frontend engineer in Indonesia. I design and build web apps, and I work remotely with teams anywhere.',
    aboutTitle: 'About — Harun Bahrudin'
  },
  nav: {
    home: 'Home',
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
    homeAria: 'Home'
  },
  ruler: {
    portfolio: 'Portfolio',
    aboutTag: 'About // Harun',
    position: 'Page position',
    home: {
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
    body: 'Product engineer, UI/UX engineer and frontend engineer. I take a feature from the first sketch in Figma to code running in production.',
    ctaPrimary: 'See what I do',
    ctaSecondary: 'About me'
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
    eyebrow: 'Taking on new projects',
    titlePre: 'Got a project',
    titleEm: 'in mind',
    titlePost: '?',
    body: 'Tell me a bit about what you’re building and where you’re stuck. I’ll get back to you and say honestly whether I’m a good fit.',
    email: 'Email me',
    github: 'GitHub',
    top: 'Back to top'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portfolio',
    stripAvailable: 'Available for remote work',
    stripTimezone: 'Indonesia (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer based in Indonesia. I design and build web apps for teams who care about the details.',
    based: 'Based in Indonesia // Open to remote work',
    navTitle: 'Navigate',
    navLinks: ['Home', 'Expertise', 'About', 'Tech stack', 'Contact'],
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
    titlePre: 'Half designer,',
    titleEm: 'half engineer',
    titlePost: '.',
    intro:
      'I’m Harun Bahrudin, a product, UI/UX and frontend engineer from Indonesia. Most of my work sits between design and code: I figure out how something should work, design it, and then build it.',
    openToWork: 'Open to work & contracts',
    timezone: 'Timezone: Indonesia (UTC+7)',
    statusLeft: 'About Harun',
    statusFocus: 'Focus: Product · UI/UX · Frontend',
    statusRight: 'Designed & built by Harun',
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
      body: 'The short version of how I went from poking at websites to building them.',
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
            { label: 'Status', val: 'Open to select projects' },
            { label: 'Timezone', val: 'Indonesia / UTC+7 (remote)' },
            { label: 'Goal', val: 'Software that’s nice to use' }
          ],
          specimenTitle: 'Fig 04 // Current workspace',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Experience',
      eyebrowRight: 'Work history',
      titlePre: 'Where I’ve',
      titleEm: 'worked',
      titlePost: '.',
      body: 'Roles, teams and what I worked on.',
      empty: 'Work history is being updated.',
      // TODO: fill with real work history (see Milestone type)
      milestones: [] as Milestone[]
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
          body: 'Code, designs and notes live in your repository and your Figma, so your team can keep going without me.',
          foot: 'You own it all'
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
      eyebrow: 'Get in touch // Open to collaboration',
      titlePre: 'Let’s',
      titleEm: 'work together',
      titlePost: '.',
      body: 'If you have a product that needs both design and engineering, I’d like to hear about it. Send a short message and we’ll go from there.',
      email: 'Email me',
      back: 'Back to home'
    }
  }
};

export default en;
