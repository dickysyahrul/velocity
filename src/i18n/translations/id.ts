import type { UIStrings } from '../ui';
import type { SiteStrings } from './en';

/** Indonesian site copy and built-in UI strings. */
const id: SiteStrings & UIStrings = {
  site: {
    tagline: 'Situs web modern yang dibangun dengan Astro dan Tailwind CSS',
  },
  meta: {
    home: {
      title: 'Starter Astro Lengkap',
      description:
        'Token desain, komponen aksesibel, SEO, dan i18n telah dikonfigurasi sejak commit pertama. Velocity menyediakan semua yang biasanya harus Anda kerjakan sendiri.',
    },
    about: {
      title: 'Tentang Kami',
      description: 'Kenali Velocity dan tim di baliknya.',
    },
    contact: {
      title: 'Hubungi Kami',
      description: 'Hubungi tim Velocity.',
    },
  },
  home: {
    hero: {
      badge: 'v2.0 telah hadir — kini menggunakan Astro 7',
      title: 'Situs Anda berikutnya',
      titleHighlight: 'dimulai di sini.',
      description:
        'Token desain, komponen aksesibel, SEO, dan i18n telah dikonfigurasi sejak commit pertama. Velocity menyediakan semua yang biasanya harus Anda kerjakan sendiri.',
      docs: 'Lihat Dokumentasi',
      github: 'Lihat di GitHub',
      socialProof: 'Dirilis ke produksi setiap minggu.',
    },
  },
  landing: {
    techStack: {
      astro: 'Kompilator Rust, Vite 8, Actions, caching rute, tanpa JavaScript secara default',
      tailwind: 'Mesin Lightning CSS, API @theme, warna OKLCH',
      typescript: 'Mode ketat, alias path, inferensi tipe menyeluruh',
      react: 'Server Components, actions, dukungan hook use()',
    },
    features: {
      heading: 'Semua yang Anda butuhkan.',
      headingHighlight: 'Tanpa yang tidak diperlukan.',
      intro:
        'Kami menyingkirkan hal yang berlebihan dan mempertahankan komponen dasar yang benar-benar mempercepat pengembangan untuk agensi dan pekerja lepas.',
      copy: 'Salin',
      copied: 'Tersalin',
      agents: {
        label: 'Agen AI',
        description: 'Aturan dan skill tersedia',
        title: 'Dirancang untuk Agen Coding AI',
        content:
          'Setiap proyek dilengkapi aturan dan skill untuk Claude Code, Codex, Cursor, dan agen lainnya. Agen memahami cara menambahkan halaman dan komponen, serta file mana yang diganti saat pembaruan.',
      },
      theming: {
        label: 'Tema',
        description: 'Token desain dan mode gelap',
        title: 'Token Desain dan Mode Gelap',
        content:
          'Sistem desain lengkap menggunakan konfigurasi CSS-first Tailwind v4 dengan mode gelap bawaan. Token warna semantik, deteksi preferensi sistem, dan penyimpanan di localStorage.',
      },
      seo: {
        label: 'SEO & Meta',
        description: 'Gambar OG dan data terstruktur',
        title: 'SEO Otomatis',
        content:
          'Metadata bertipe ketat untuk setiap halaman dengan pembuatan gambar OG otomatis. Termasuk sitemap, robots.txt, dan data terstruktur JSON-LD.',
      },
      perf: {
        label: 'Performa',
        description: 'Tanpa JavaScript secara default',
        title: 'Tanpa JavaScript secara Default',
        content:
          'Arsitektur island Astro memastikan halaman tidak mengirim JavaScript kecuali diperlukan untuk interaktivitas. Dioptimalkan untuk Core Web Vitals.',
      },
      components: {
        label: 'Komponen',
        description: 'Primitif UI dengan tipe aman',
        title: 'Komponen dengan Tipe Aman',
        content:
          'Primitif UI yang mengutamakan TypeScript dengan validasi props lengkap dan pelengkapan otomatis di IDE. Termasuk tombol, input, kartu, modal, dan lainnya.',
      },
      i18n: {
        label: 'Siap untuk i18n',
        description: 'Dukungan multibahasa opsional',
        title: 'Siap untuk i18n',
        content:
          'Tambahkan dukungan multibahasa dengan flag --i18n. Termasuk terjemahan bertipe aman, deteksi locale otomatis, dan struktur URL yang ramah SEO.',
      },
      content: {
        label: 'Konten',
        description: 'Blog, MDX, dan pencarian',
        title: 'Konten dan Pencarian',
        content:
          'Koleksi konten bertipe aman dengan skema Zod, dukungan MDX, RSS feed, dan integrasi Pagefind untuk pencarian statis yang cepat.',
      },
    },
    lighthouse: {
      badge: 'Laporan Lighthouse',
      heading: 'Aksesibel dan siap ditemukan. Langsung dari awal.',
      listLabel: 'Skor Lighthouse',
      accessibility: 'Aksesibilitas',
      bestPractices: 'Praktik Terbaik',
      seo: 'SEO',
      note: '*Diuji di produksi untuk demo halaman utama · Emulasi desktop dan seluler · Hasil dapat berbeda.',
    },
    credibility: {
      eyebrow: 'Satu Perintah',
      heading: 'Buat tepat',
      headingHighlight: 'sesuai kebutuhan Anda.',
      intro: 'Tidak semua proyek membutuhkan semuanya. CLI Velocity memungkinkan Anda memilih titik awal.',
      pagesBefore: 'Butuh halaman khusus? Gunakan',
      pagesMiddle: 'dan halaman akan dibuat dengan rute dan navigasi yang sudah terhubung. Padukan dengan',
      pagesAfter: 'untuk mendapatkan versi terlokalisasi dengan terjemahan siap digunakan.',
      outro: 'Tanpa prompt yang harus dilewati. Tanpa wizard yang membingungkan. Hanya flag yang bekerja sesuai fungsinya.',
      flags: {
        demo: 'Contoh halaman utama + postingan blog',
        components: '24 komponen UI opsional',
        i18n: 'Routing multibahasa siap digunakan',
        pages: 'Buat halaman (+ versi i18n)',
        yes: 'Lewati prompt, gunakan nilai default',
      },
      stats: {
        command: 'perintah untuk memulai',
        flags: 'flag untuk penyesuaian',
        components: 'komponen yang disertakan',
      },
      terminalComment: 'Tambahkan yang Anda butuhkan',
      terminalSuccess: 'Proyek berhasil dibuat!',
    },
    cta: {
      heading: 'Berhenti mengatur.',
      headingHighlight: 'Mulai membangun.',
      description:
        'Bergabunglah dengan para pengembang yang membangun situs web lebih cepat dan lebih baik dengan Velocity. Open source dan gratis selamanya.',
      docs: 'Lihat Dokumentasi',
    },
  },
  about: {
    hero: {
      badge: 'Kisah Kami',
      title: 'Dibangun oleh pengembang,',
      titleHighlight: 'untuk pengembang.',
      description:
        'Velocity lahir dari rasa frustrasi karena harus menyiapkan perangkat kerja yang sama berulang kali. Kami memutuskan membuat starter yang selalu kami inginkan.',
    },
    mission: {
      title: 'Misi Kami',
      text: 'Membantu pengembang merilis situs web yang indah dan berkinerja tinggi dengan lebih cepat, menghilangkan kode berulang, dan menyediakan pengaturan default yang tepat.',
    },
    values: {
      title: 'Prinsip Kami',
      performance: {
        title: 'Utamakan Performa',
        text: 'Setiap keputusan mempertimbangkan performa. Tanpa JavaScript secara default, gambar dioptimalkan, dan CSS minimal.',
      },
      simplicity: {
        title: 'Kesederhanaan Itu Penting',
        text: 'Kami mengurangi kompleksitas agar Anda dapat fokus pada hal terpenting: membangun produk hebat untuk pengguna.',
      },
      openSource: {
        title: 'Open Source',
        text: 'Velocity gratis dan open source. Kami percaya untuk berkontribusi kembali kepada komunitas yang memungkinkan semua ini.',
      },
    },
  },
  contact: {
    hero: {
      badge: 'Hubungi Kami',
      title: 'Mari',
      titleHighlight: 'terhubung.',
      description: 'Punya pertanyaan, saran, atau sekadar ingin menyapa? Kami senang mendengar kabar dari Anda.',
    },
    form: {
      title: 'Kirim pesan kepada kami',
      submit: 'Kirim Pesan',
      success: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
      nameLabel: 'Nama Anda',
      emailLabel: 'Alamat Email',
      namePlaceholder: 'Budi Santoso',
      emailPlaceholder: 'budi@example.com',
      subjectPlaceholder: 'Bagaimana kami dapat membantu?',
      messagePlaceholder: 'Ceritakan lebih lanjut tentang proyek atau pertanyaan Anda...',
    },
    map: {
      ariaLabel: 'Peta yang menunjukkan lokasi {name}',
      placeholderTitle: 'Lokasi Kami',
    },
    other: {
      title: 'Cara lain untuk menghubungi kami',
      email: 'Email',
      github: 'GitHub',
      twitter: 'Twitter',
    },
  },
  media: {
    photo: 'Foto',
    placeholder: 'Placeholder gambar: {name}',
    play: 'Putar video: {title}',
    playsFrom: 'Diputar dari {provider}',
  },
  sections: {
    rating: 'Dinilai {rating} dari 5',
    day: 'Hari',
    hours: 'Jam',
  },
  a11y: {
    skipToContent: 'Lewati ke konten',
    mainNav: 'Navigasi utama',
    mobileNav: 'Navigasi seluler',
    toggleMenu: 'Buka atau tutup menu',
    toggleTheme: 'Ubah tema',
    breadcrumb: 'Breadcrumb',
    languageSwitcher: 'Pilih bahasa',
    togglePassword: 'Tampilkan atau sembunyikan kata sandi',
    loading: 'Memuat',
    close: 'Tutup',
    dismiss: 'Abaikan',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
  },
  nav: {
    home: 'Beranda',
    blog: 'Blog',
    about: 'Tentang',
    contact: 'Kontak',
    components: 'Komponen',
    search: 'Cari',
    features: 'Fitur',
    docs: 'Lihat Dokumentasi',
    github: 'Lihat di GitHub',
  },
  blog: {
    title: 'Blog',
    minRead: '{minutes} menit membaca',
    description: 'Artikel dan kabar terbaru',
    allPosts: 'Semua artikel',
    updated: 'Diperbarui {date}',
    featured: 'Unggulan',
    readMore: 'Baca selengkapnya',
    relatedPosts: 'Artikel terkait',
    share: 'Bagikan:',
    shareOn: 'Bagikan di {network}',
    copyLink: 'Salin tautan',
    linkCopied: 'Tautan tersalin',
    backToBlog: 'Kembali ke blog',
    noPosts: 'Belum ada artikel',
    noPostsHint: 'Kunjungi lagi segera untuk membaca artikel baru.',
    latest: 'Artikel terbaru',
    subscribeTitle: 'Berlangganan',
    subscribeText: 'Dapatkan artikel dan kabar terbaru langsung ke kotak masuk Anda.',
  },
  form: {
    name: 'Nama',
    email: 'Email',
    emailAddress: 'Alamat email',
    subject: 'Subjek',
    message: 'Pesan',
    submit: 'Kirim',
    sending: 'Mengirim...',
    sent: 'Pesan berhasil dikirim!',
    sendFailed: 'Pesan gagal dikirim. Silakan coba lagi.',
    genericError: 'Terjadi kesalahan',
    invalidEmail: 'Masukkan alamat email yang valid',
    emailPlaceholder: 'Masukkan email Anda',
    subscribe: 'Berlangganan',
    subscribing: 'Sedang berlangganan...',
    subscribed: 'Terima kasih telah berlangganan!',
    subscribeFailed: 'Langganan gagal. Silakan coba lagi.',
    errors: {
      nameTooShort: 'Nama harus terdiri dari minimal 2 karakter',
      nameTooLong: 'Nama maksimal 100 karakter',
      invalidEmail: 'Masukkan alamat email yang valid',
      subjectTooLong: 'Subjek maksimal 200 karakter',
      messageTooShort: 'Pesan harus terdiri dari minimal 10 karakter',
      messageTooLong: 'Pesan maksimal 5000 karakter',
    },
  },
  search: {
    title: 'Cari',
    description: 'Cari artikel dan halaman.',
    label: 'Cari di situs',
    placeholder: 'Cari artikel dan halaman…',
    resultOne: '1 hasil untuk “{query}”',
    resultMany: '{count} hasil untuk “{query}”',
    noResults: 'Tidak ada hasil untuk “{query}”',
    unavailable: 'Pencarian tersedia setelah build produksi (pnpm build && pnpm preview).',
  },
  notFound: {
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak tersedia.',
    heading: 'Sepertinya Anda tersesat',
    text: 'Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau memang tidak pernah ada.',
    backHome: 'Kembali ke Beranda',
    browseBlog: 'Jelajahi Blog',
    quickLinks: 'Tautan Cepat:',
  },
  starter: {
    title: 'Selamat Datang',
    heading: 'Selamat datang di',
    description: 'Situs Astro baru Anda siap. Edit halaman ini di {file}.',
    agent: 'Atau minta agen AI Anda: “Siapkan situs ini untuk bisnis saya.”',
    readBlog: 'Baca blog',
    astroDocs: 'Dokumentasi Astro',
  },
  footer: {
    rights: '© {year} {name}. Hak cipta dilindungi.',
    builtWith: 'Dibuat dengan Velocity',
  },
};

export default id;
