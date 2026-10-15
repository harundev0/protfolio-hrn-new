import type en from './en';
import type { Milestone } from './en';

const id: typeof en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'Saya Harun, product, UI/UX dan frontend engineer dari Indonesia. Saya mendesain dan membangun aplikasi web, dan bekerja remote dengan tim dari mana saja.',
    aboutTitle: 'Tentang — Harun Bahrudin'
  },
  nav: {
    home: 'Beranda',
    expertise: 'Keahlian',
    about: 'Tentang',
    stack: 'Stack',
    contact: 'Kontak',
    resume: 'Resume',
    getInTouch: 'Hubungi saya',
    active: 'Aktif',
    toggleMenu: 'Buka/tutup menu',
    toggleTheme: 'Ganti tema',
    language: 'Bahasa',
    homeAria: 'Beranda'
  },
  ruler: {
    portfolio: 'Portofolio',
    aboutTag: 'Tentang // Harun',
    position: 'Posisi halaman',
    home: {
      work: { label: 'Keahlian', sub: 'Product · UI/UX · Frontend' },
      about: { label: 'Pendekatan', sub: 'Cara saya bekerja' },
      proof: { label: 'Stack', sub: 'Alat sehari-hari' },
      contact: { label: 'Kontak', sub: 'Hubungi saya' }
    },
    aboutPage: {
      chronicles: { label: 'Cerita', sub: 'Perjalanan saya' },
      experience: { label: 'Karier', sub: 'Riwayat kerja' },
      curation: { label: 'Proses', sub: 'Cara kerja bareng' },
      collab: { label: 'Kontak', sub: 'Hubungi saya' }
    }
  },
  hero: {
    titlePre: 'Saya mendesain dan membangun',
    titleEm: 'produk web.',
    body: 'Product engineer, UI/UX engineer, sekaligus frontend engineer. Saya pegang satu fitur dari sketsa pertama di Figma sampai kodenya jalan di production.',
    ctaPrimary: 'Lihat yang saya kerjakan',
    ctaSecondary: 'Tentang saya'
  },
  expertise: {
    eyebrow: 'Yang saya kerjakan',
    eyebrowRight: 'Product · UI/UX · Frontend',
    titlePre: 'Desain dan kode,',
    titleEm: 'satu orang',
    titlePost: '.',
    body: 'Di banyak tim, satu fitur dioper dari product ke desainer lalu ke frontend, dan selalu ada yang hilang di tengah jalan. Saya mengerjakan ketiganya, jadi bolak-baliknya lebih sedikit dan kejutan di akhir juga berkurang.',
    cards: [
      { category: 'Product Engineering', title: 'Dari ide jadi fitur', body: 'Saya ambil ide yang masih kasar, cari tahu apa yang benar-benar perlu dibuat, lalu kawal sampai rilis.' },
      { category: 'UI/UX Engineering', title: 'Desain yang tetap utuh di kode', body: 'Saya mendesain alur dan layar di Figma, lalu membangunnya sendiri, termasuk state loading, kosong dan error yang biasanya terlewat di mockup.' },
      { category: 'Frontend Engineering', title: 'Kode yang enak dikerjakan', body: 'Svelte atau React dengan TypeScript, dipecah jadi komponen kecil supaya orang berikutnya gampang memahaminya.' },
      { category: 'Performa', title: 'Halaman yang cepat dibuka', body: 'Saya jaga ukuran bundle tetap kecil dan animasi tetap mulus, dan saya cek kecepatan muatnya sebelum rilis.' }
    ]
  },
  approach: {
    eyebrow: 'Pendekatan',
    eyebrowRight: 'Cara saya bekerja',
    titlePre: 'Dibuat supaya',
    titleEm: 'awet',
    titlePost: '.',
    body: 'Saya menulis kode yang saya sendiri mau mewarisinya. Nama yang jelas, struktur sederhana, dan catatan kenapa sebuah keputusan diambil.',
    principles: [
      { title: 'Mudah dirawat', body: 'Typing ketat, batas antarlapisan yang jelas, dan komponen yang masing-masing cuma punya satu tugas.' },
      { title: 'Mulus di semua layar', body: 'Layout dan animasi dibuat supaya tetap enak dipakai di HP, tablet, maupun monitor besar.' },
      { title: 'Aksesibel sejak awal', body: 'HTML semantik, dukungan keyboard dan kontras yang cukup saya pasang dari awal.' }
    ]
  },
  stack: {
    eyebrow: 'Stack',
    eyebrowRight: 'Alat sehari-hari',
    titlePre: 'Alat yang',
    titleEm: 'saya pakai',
    titlePost: '.',
    body: 'Ini alat yang saya pakai tiap hari. Saya pilih karena type safety-nya, bundle-nya kecil, dan antarmukanya terasa cepat.',
    tools: [
      { role: 'Framework utama', desc: 'Pilihan utama saya. Kode yang ditulis lebih sedikit, yang dikirim ke browser juga lebih sedikit.' },
      { role: 'Komponen UI', desc: 'Untuk tim dan codebase yang memang sudah pakai React.' },
      { role: 'Type safety', desc: 'Banyak bug ketahuan sebelum ada yang membuka pull request.' },
      { role: 'Design system', desc: 'Menjaga spacing, warna dan tipografi tetap konsisten di seluruh aplikasi.' },
      { role: 'Animasi', desc: 'Untuk animasi yang butuh timing presisi.' }
    ]
  },
  contact: {
    eyebrow: 'Sedang menerima proyek baru',
    titlePre: 'Punya proyek',
    titleEm: 'yang mau dikerjakan',
    titlePost: '?',
    body: 'Ceritakan sedikit soal apa yang sedang kamu bangun dan di mana kamu mentok. Saya akan balas dan bilang terus terang apakah saya orang yang tepat.',
    email: 'Kirim email',
    github: 'GitHub',
    top: 'Kembali ke atas'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portofolio',
    stripAvailable: 'Tersedia untuk kerja remote',
    stripTimezone: 'Indonesia (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer dari Indonesia. Saya mendesain dan membangun aplikasi web untuk tim yang peduli pada detail.',
    based: 'Berbasis di Indonesia // Terbuka untuk kerja remote',
    navTitle: 'Navigasi',
    navLinks: ['Beranda', 'Keahlian', 'Tentang', 'Tech stack', 'Kontak'],
    navFoot: 'Indeks situs',
    toolsTitle: 'Toolchain',
    toolsFoot: 'Alat utama',
    aboutTitle: 'Tentang',
    aboutLinks: ['Cerita saya', 'Pengalaman', 'Cara kerja bareng', 'Prinsip'],
    aboutFoot: 'Tentang Harun',
    connectTitle: 'Terhubung',
    resume: 'Resume (PDF)',
    email: 'Email',
    connectFoot: 'Hubungi saya',
    rights: 'Hak cipta dilindungi',
    builtWith: 'Dibuat dengan SvelteKit'
  },
  about: {
    eyebrow: '00 / Tentang',
    eyebrowMeta: 'Harun Bahrudin // Product · UI/UX · Frontend',
    titlePre: 'Setengah desainer,',
    titleEm: 'setengah engineer',
    titlePost: '.',
    intro:
      'Saya Harun Bahrudin, product, UI/UX dan frontend engineer dari Indonesia. Kebanyakan pekerjaan saya ada di antara desain dan kode: saya pikirkan bagaimana sesuatu seharusnya bekerja, mendesainnya, lalu membangunnya.',
    openToWork: 'Terbuka untuk kerja & kontrak',
    timezone: 'Zona waktu: Indonesia (UTC+7)',
    statusLeft: 'Tentang Harun',
    statusFocus: 'Fokus: Product · UI/UX · Frontend',
    statusRight: 'Didesain & dibangun oleh Harun',
    story: {
      eyebrow: 'Cerita saya',
      eyebrowRight: 'Perjalanan saya',
      bannerLabel: 'Ruang kerja // Build • Design • Ship',
      bannerAltLight: 'Ruang kerja Harun Bahrudin di siang hari',
      bannerAltDark: 'Ruang kerja Harun Bahrudin di malam hari',
      caption: 'Fig 00 // Ruang kerja Harun',
      roles: 'Product Engineer • UI/UX Engineer • Frontend Engineer',
      titlePre: 'Bagaimana saya',
      titleEm: 'sampai di sini',
      titlePost: '.',
      body: 'Versi singkat dari iseng mengutak-atik website sampai akhirnya membangunnya.',
      chapter: 'Bab',
      chapters: [
        {
          title: 'Semua dimulai dari browser',
          tag: 'Awal mula',
          narrative:
            'Seperti banyak developer otodidak, saya awalnya cuma penasaran bagaimana website bekerja. Saya buka DevTools, ubah sedikit CSS di halaman yang sedang tayang, dan lihat hasilnya langsung berubah. Dari situ saya ketagihan.',
          specs: [
            { label: 'Titik awal', val: 'Browser DevTools' },
            { label: 'Alat pertama', val: 'HTML, CSS & JavaScript' },
            { label: 'Pelajaran utama', val: 'Inspect element itu kekuatan super' }
          ],
          specimenTitle: 'Fig 01 // Eksperimen pertama',
          specimenSubtitle: 'Markup, style & sintaks'
        },
        {
          title: 'Belajar cara kerja browser',
          tag: 'Lebih dalam',
          narrative:
            'Makin besar proyeknya, makin sering saya ketemu masalah yang tidak bisa diakali dengan trik CSS: halaman lambat, scroll patah-patah, layout rusak di layar kecil. Jadi saya belajar bagaimana layout dan rendering sebenarnya bekerja, dan cara menjaga antarmuka tetap cepat dan aksesibel.',
          specs: [
            { label: 'Pencapaian', val: 'Aplikasi production pertama' },
            { label: 'Toolchain', val: 'TypeScript + library komponen' },
            { label: 'Nilai inti', val: 'Performa itu fitur' }
          ],
          specimenTitle: 'Fig 02 // Layout & rendering',
          specimenSubtitle: 'Performa sebagai batasan desain'
        },
        {
          title: 'Peduli pada produk secara utuh',
          tag: 'Kepemilikan',
          narrative:
            'Suatu saat saya berhenti cuma mengerjakan apa yang ada di tiket. Saya mulai bertanya kenapa sebuah fitur dibutuhkan, membuang dependency yang tidak terpakai, dan memastikan semuanya bisa dipakai dengan keyboard. Hasilnya, produknya jadi lebih baik.',
          specs: [
            { label: 'Arsitektur', val: 'Lapisan yang jelas & terpisah' },
            { label: 'Fokus', val: 'Product engineering & UX' },
            { label: 'Pegangan', val: 'Bangun yang memang perlu saja' }
          ],
          specimenTitle: 'Fig 03 // Sistem & token',
          specimenSubtitle: 'Pemetaan token design system'
        },
        {
          title: 'Yang saya kerjakan sekarang',
          tag: 'Sekarang',
          narrative:
            'Sekarang waktu saya terbagi antara logika produk dan pekerjaan antarmuka, kebanyakan di Svelte dan React. Di luar proyek, saya mencoba alat baru, membaca soal tipografi, dan membuat sketsa ide antarmuka.',
          specs: [
            { label: 'Status', val: 'Terbuka untuk proyek pilihan' },
            { label: 'Zona waktu', val: 'Indonesia / UTC+7 (remote)' },
            { label: 'Tujuan', val: 'Software yang enak dipakai' }
          ],
          specimenTitle: 'Fig 04 // Ruang kerja sekarang',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Pengalaman',
      eyebrowRight: 'Riwayat kerja',
      titlePre: 'Tempat saya',
      titleEm: 'bekerja',
      titlePost: '.',
      body: 'Peran, tim, dan apa yang saya kerjakan.',
      empty: 'Riwayat kerja sedang diperbarui.',
      milestones: [] as Milestone[]
    },
    beyond: {
      eyebrow: 'Kerja bareng',
      eyebrowRight: 'Proses & prinsip',
      titlePre: 'Kalau kita',
      titleEm: 'kerja bareng',
      titlePost: '.',
      body: 'Ini yang bisa kamu harapkan kalau kita membangun sesuatu bersama.',
      cards: [
        {
          label: 'Proses',
          title: 'Mulai dari yang kecil',
          body: 'Kita sepakati satu bagian kecil dulu, rilis, lalu sesuaikan berdasarkan hasilnya.',
          foot: 'Selangkah demi selangkah'
        },
        {
          label: 'Komunikasi',
          title: 'Update yang jelas',
          body: 'Update tertulis singkat dengan screenshot atau link preview, jadi kamu bisa ikuti progresnya tanpa harus banyak meeting.',
          foot: 'Ramah async'
        },
        {
          label: 'Serah terima',
          title: 'Semuanya milik kamu',
          body: 'Kode, desain dan catatan ada di repository dan Figma kamu, jadi tim kamu bisa lanjut tanpa saya.',
          foot: 'Kamu pegang semuanya'
        },
        {
          label: 'Prinsip',
          title: 'Aturan yang saya pegang',
          items: [
            'Di bawah 100 ms terasa instan.',
            'Kode sederhana lebih murah dirawat.',
            'Aksesibilitas itu bagian dari struktur.',
            'Bagus dilihat dan mudah dipakai bisa berjalan bareng.'
          ],
          foot: 'Di setiap proyek'
        }
      ]
    },
    collab: {
      eyebrow: 'Hubungi saya // Terbuka untuk kolaborasi',
      titlePre: 'Ayo',
      titleEm: 'kerja bareng',
      titlePost: '.',
      body: 'Kalau kamu punya produk yang butuh desain sekaligus engineering, saya ingin dengar ceritanya. Kirim pesan singkat, nanti kita lanjut dari situ.',
      email: 'Kirim email',
      back: 'Kembali ke beranda'
    }
  }
};

export default id;
