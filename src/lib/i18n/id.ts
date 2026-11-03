import type en from './en';
import type { Milestone } from './en';

const id: typeof en = {
  meta: {
    title: 'Harun Bahrudin — Product, UI/UX & Frontend Engineer',
    description:
      'Harun Bahrudin, product, UI/UX dan frontend engineer dari Indonesia dengan pengalaman tujuh tahun. Terbuka untuk posisi full-time & part-time: on-site, hybrid, atau remote.',
    aboutTitle: 'Tentang — Harun Bahrudin',
    aboutDescription:
      'Riwayat kerja, pendidikan, dan cara saya bekerja. Tujuh tahun mendesain dan membangun produk virtual tour 360° dan Google Street View untuk GoThru.'
  },
  nav: {
    home: 'Beranda',
    work: 'Karya',
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
    homeAria: 'Beranda',
    skip: 'Langsung ke konten'
  },
  ruler: {
    portfolio: 'Portofolio',
    aboutTag: 'Tentang // Harun',
    position: 'Posisi halaman',
    home: {
      work: { label: 'Karya', sub: 'Karya terpilih' },
      expertise: { label: 'Keahlian', sub: 'Product · UI/UX · Frontend' },
      approach: { label: 'Pendekatan', sub: 'Cara saya bekerja' },
      stack: { label: 'Stack', sub: 'Alat sehari-hari' },
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
    body: 'Product engineer, UI/UX engineer, sekaligus frontend engineer dengan pengalaman tujuh tahun. Saya pegang satu fitur dari sketsa pertama di Figma sampai kodenya jalan di production. Saya bekerja AI-native: Claude Code, Codex, dan Cursor mempercepat setiap langkah, dari prototipe sampai rilis.',
    ctaPrimary: 'Lihat karya saya',
    ctaSecondary: 'Tentang saya'
  },
  work: {
    eyebrow: 'Karya terpilih',
    eyebrowRight: 'GoThru · 2019–sekarang',
    titlePre: 'Yang pernah saya',
    titleEm: 'desain',
    titlePost: '.',
    body: 'Beberapa layar dari produk GoThru yang saya desain. Isi di mockup hanya contoh.',
    role: 'Peran',
    roleVal: 'Desain UI/UX',
    items: [
      { name: 'Panorra 360', kind: 'Aplikasi web', desc: 'Feed sosial untuk foto 360°. Penonton bisa pindah di antara enam mode tampilan, dari ultra wide sampai little planet, tanpa keluar dari postingan.', alt: 'Feed web Panorra 360 dengan viewer foto 360° dan menu mode tampilan' },
      { name: 'Panorra 360', kind: 'Aplikasi mobile', desc: 'Feed yang sama di HP: tab For You, Recent dan Map, viewer layar penuh, dan komentar di tiap postingan.', alt: 'Tiga layar aplikasi mobile Panorra 360: feed, detail postingan, dan viewer layar penuh' },
      { name: 'GoThru Dashboard', kind: 'Web · Mobile', desc: 'Tempat pelanggan mengelola virtual tour mereka: pencarian, filter hashtag, mode pilih banyak, dan status publikasi tiap tour.', alt: 'Halaman My Tours di GoThru Dashboard versi desktop dan mobile dalam mode gelap' },
      { name: 'GoThru 360 · File manager', kind: 'Aplikasi web', desc: 'Telusuri folder foto panorama dan pratinjau tiap foto di viewer 360° dengan peta lokasi, sebelum diedit atau diunggah.', alt: 'File manager GoThru dengan daftar foto panorama dan pratinjau 360° Candi Borobudur' }
    ]
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
    eyebrow: 'Terbuka untuk posisi full-time & part-time',
    titlePre: 'Sedang merekrut, atau punya',
    titleEm: 'proyek',
    titlePost: '?',
    body: 'Kalau tim kamu sedang mencari orang untuk product, UI/UX atau frontend, atau kamu punya proyek, kirim pesan singkat. Saya terbuka untuk posisi on-site, hybrid, dan remote, dan bersedia pindah kota.',
    email: 'Kirim email',
    github: 'GitHub',
    top: 'Kembali ke atas'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // Portofolio',
    stripAvailable: 'Terbuka on-site, hybrid & remote',
    stripTimezone: 'Indonesia (UTC+7)',
    bio: 'Product, UI/UX & Frontend Engineer dari Indonesia. Saya mendesain dan membangun aplikasi web untuk tim yang peduli pada detail.',
    based: 'Subang, Indonesia // Bersedia relokasi',
    navTitle: 'Navigasi',
    navLinks: ['Beranda', 'Karya', 'Keahlian', 'Tentang', 'Tech stack', 'Kontak'],
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
    titlePre: 'Desainer',
    titleEm: 'sekaligus engineer',
    titlePost: '.',
    intro: [
      'Saya product engineer dengan pengalaman tujuh tahun bekerja remote di industri kreatif dan teknologi Kanada, di titik temu antara desain UI/UX dan frontend engineering. Bagi saya, sebuah produk itu seperti cerita yang dijalani pengguna. Saya rancang alurnya dari sisi pengguna dulu, lalu membangunnya di kode dengan ketelitian yang sama, supaya tidak ada yang hilang antara ide dan apa yang benar-benar dipakai orang.',
      'Pekerjaan saya mencakup produk web, mobile, dan desktop untuk pelanggan GoThru. Karena saya mendesain sekaligus membangun, alur kerja yang rumit bisa saya ubah jadi antarmuka yang mudah dipakai dan kokoh di baliknya.'
    ],
    openToWork: 'Terbuka untuk posisi full-time & part-time',
    languages: 'Inggris (fasih) · Indonesia (bahasa ibu)',
    timezone: 'Zona waktu: Indonesia (UTC+7)',
    statusFocus: 'Fokus: Product · UI/UX · Frontend',
    highlights: {
      title: 'Sorotan',
      items: [
        { stat: '5/5', label: 'Kepuasan klien', text: 'Terjaga sejak 2019 di proyek-proyek GoThru, dan banyak klien bertahan untuk kerja sama jangka panjang.' },
        { stat: '10', label: 'Produk', text: 'UI yang saya desain dan bangun untuk 10 produk di platform virtual tour 360° dan Google Street View milik GoThru.' },
        { stat: '95–100%', label: 'Tepat waktu', text: 'Proyek selesai sesuai jadwal meski bekerja remote lintas zona waktu.' },
        { stat: '7', label: 'Tahun remote', text: 'Bersama GoThru, perusahaan asal Kanada, sejak November 2019.' }
      ]
    },
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
      body: 'Saya ingin bergabung dengan tim yang menghargai orang yang bisa berpikir seperti desainer dan merilis seperti engineer. Kalau kamu sedang membangun sesuatu yang berarti, ayo ngobrol.',
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
            { label: 'Status', val: 'Terbuka untuk posisi full-time & part-time' },
            { label: 'Zona waktu', val: 'Indonesia / UTC+7' },
            { label: 'Tujuan', val: 'Software yang enak dipakai' }
          ],
          specimenTitle: 'Fig 04 // Ruang kerja sekarang',
          specimenSubtitle: 'Product · UI/UX · Frontend'
        }
      ]
    },
    experience: {
      eyebrow: 'Pengalaman',
      eyebrowRight: 'Kerja & pendidikan',
      titlePre: 'Tempat saya',
      titleEm: 'bekerja',
      titlePost: '.',
      body: 'Sejak November 2019 saya bekerja remote untuk GoThru, perusahaan asal Kanada. Di sana saya mendesain dan membangun UI untuk 10 produk virtual tour 360° dan Google Street View mereka.',
      empty: 'Riwayat kerja sedang diperbarui.',
      milestones: [
        {
          period: 'Nov 2019 – Sekarang',
          role: 'Product Engineer',
          company: 'GoThru · Kanada (remote)',
          tag: 'UI/UX & Frontend',
          deliverables: [
            'Mendesain dan membangun UI untuk 10 produk di platform virtual tour 360° dan Google Street View milik GoThru.',
            'Produknya: Panorra, TourMkr, GoThru Dashboard, StreetBuilder, GoThru Navigator, Villume, MapThru, GoThru PhotoStudio, GoThru 360 Virtual Tour Maker, dan GoThru Marketing.',
            'Mengerjakan tiap proyek dari riset pengguna dan wireframe, lalu user flow, UI high-fidelity, prototipe, sampai handoff ke developer di Figma.',
            'Mengubah kebutuhan bisnis yang masih kabur menjadi user journey yang jelas dan layout yang responsif.',
            'Membangun antarmukanya dengan HTML, CSS, dan JavaScript supaya hasil akhirnya sama dengan desain yang disetujui.',
            'Memakai AI coding tools (Claude Code, Codex, Cursor, OpenCode, Antigravity) dan Google Stitch untuk mempercepat prototipe dan proses desain ke kode.',
            'Rating kepuasan klien 5/5 dan 95–100% proyek selesai tepat waktu, bekerja remote dengan klien di zona waktu yang berbeda.'
          ]
        },
        {
          period: 'Lulus 2025',
          role: 'S1 Sistem Informasi',
          company: 'Universitas Subang',
          tag: 'Pendidikan',
          deliverables: [
            'IPK 3.65 / 4.00.',
            'Sertifikasi: UI/UX Design, Build With Angga (BWA).',
            'Sertifikasi: HTML, CSS, JavaScript dan Node.js, Udemy.'
          ]
        }
      ] as Milestone[]
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
          body: 'Kode, desain dan catatan ada di repository dan Figma tim, ditulis supaya siapa pun bisa melanjutkannya.',
          foot: 'Tidak ada yang disembunyikan'
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
      eyebrow: 'Hubungi saya // Terbuka untuk posisi full-time & part-time',
      titlePre: 'Ayo',
      titleEm: 'kerja bareng',
      titlePost: '.',
      body: 'Kalau tim kamu butuh orang yang bisa desain sekaligus engineering, saya ingin dengar ceritanya. Kirim pesan singkat, nanti kita lanjut dari situ.',
      email: 'Kirim email',
      back: 'Kembali ke beranda'
    }
  },
  cases: {
    view: 'Lihat studi kasus',
    back: 'Semua karya',
    eyebrow: 'Studi kasus',
    role: 'Peran',
    company: 'Perusahaan',
    companyVal: 'GoThru · Kanada (remote)',
    platform: 'Platform',
    live: 'Produk live',
    challenge: 'Tantangan',
    built: 'Yang saya desain',
    process: 'Cara saya bekerja',
    outcome: 'Hasil',
    next: 'Proyek berikutnya',
    processSteps: ['Riset pengguna dan wireframe', 'User flow', 'UI high-fidelity di Figma', 'Prototipe dan handoff ke developer'],
    // challenge / outcome: empty means not written yet; production leaves that section out (dev shows a TODO)
    items: [
      { features: ['Feed sosial untuk foto 360°', 'Enam mode tampilan, dari ultra wide sampai little planet', 'Ganti mode tampilan tanpa meninggalkan postingan'], challenge: 'Foto 360° sulit dibaca di feed biasa: kalau ditampilkan datar terlihat terdistorsi, dan membuka viewer terpisah memutus alur scroll. Panorra butuh feed yang membuat panorama mudah dipahami sekilas dan bisa dijelajahi langsung di dalam postingan.', outcome: 'Feed beserta menu mode tampilannya rilis di panorra.com. Pengguna bisa menjelajahi panorama tanpa meninggalkan postingan, dan pola yang sama menjadi dasar aplikasi mobile.' },
      { features: ['Tab For You, Recent, dan Map', 'Viewer 360° layar penuh', 'Komentar di setiap postingan'], challenge: 'Feed web harus muat di ponsel yang dipegang satu tangan: layar lebih kecil, gestur geser 360° yang bersaing dengan scroll, dan tiga cara menjelajah (For You, Recent, Map) tanpa membuat layar sesak.', outcome: 'Aplikasinya sudah tersedia di App Store. Feed, detail postingan, dan viewer layar penuh memakai sistem layout yang sama dengan versi web, jadi satu perubahan desain sampai ke kedua platform.' },
      { features: ['Pencarian di semua virtual tour milik pelanggan', 'Filter hashtag dan multi-select', 'Status publikasi di setiap tour', 'Tampilan desktop dan mobile dalam dark mode'], challenge: 'Pelanggan GoThru bisa punya ratusan virtual tour. Di daftar lama, butuh waktu lama untuk menemukan satu tour, merapikan banyak tour sekaligus, atau melihat tour mana yang sudah live.', outcome: 'Pencarian, filter hashtag, dan multi-select membuat pekerjaan massal cukup beberapa klik, dan setiap tour langsung menunjukkan status publikasinya. Dashboard ini berjalan di gothru.co untuk desktop dan mobile.' },
      { features: ['Tampilan folder berisi panorama', 'Pratinjau 360° untuk setiap panorama', 'Peta lokasi di samping pratinjau', 'Cek panorama sebelum diedit atau diunggah'], challenge: 'Nama file panorama sering generik, jadi fotografer harus membukanya satu per satu untuk mencari foto yang tepat, dan file yang salah kadang baru ketahuan setelah diunggah.', outcome: 'Sekarang setiap panorama bisa dicek lewat pratinjau 360° di samping lokasinya sebelum diedit atau diunggah, jadi file yang salah ketahuan lebih awal. Fitur ini rilis sebagai bagian dari GoThru Photo Studio.' }
    ]
  },
  error: {
    title: 'Halaman tidak ditemukan',
    body: 'Halaman ini tidak ada atau sudah dipindah.',
    generic: 'Terjadi kesalahan',
    back: 'Kembali ke beranda'
  }
};

export default id;
