/**
 * Data Materi Belajar Bahasa Arab Metode Bayyinah Dream
 * Disadur dan diadaptasi ke Bahasa Indonesia oleh Jundi Abdullah
 * Berdasarkan Kurikulum Dream Intensive Ustaz Nouman Ali Khan
 */

window.DREAM_ARABIC_DATA = {
  courseTitle: "Dream Arabic Intensive",
  subtitle: "Memahami Bahasa Al-Qur'an dengan Metode Visual, Logis & Interaktif",
  speaker: "Ustaz Nouman Ali Khan (Bayyinah)",
  adapter: "Jundi Abdullah",
  
  intensives: [
    {
      id: 1,
      number: "Intensive 1",
      title: "Fondasi Tata Bahasa (Nahwu & Sharaf Dasar)",
      description: "Membangun fondasi dasar struktur kalimat, jenis kata, 4 sifat Ism, dan pengenalan pola kalimat Al-Qur'an.",
      days: [
        {
          day: 1,
          title: "Hari 1: Fondasi Bahasa Arab & 3 Status Ism",
          summary: "Pengenalan 3 jenis bahasa Arab, 3 jenis kata (Ism, Fi'l, Harf), serta mendalami konsep Status Ism (Rafa', Nasb, Jar) dengan rumus RuNaJi.",
          lessons: [
            {
              id: "orientasi",
              number: "01",
              title: "Orientasi & Mindset Belajar",
              icon: "fa-compass",
              readTime: "5 menit",
              summary: "Prinsip dasar dan mindset yang tepat sebelum memulai perjalanan belajar bahasa Al-Qur'an.",
              content: [
                {
                  type: "paragraph",
                  text: "Selamat datang di perjalanan mempelajari bahasa Al-Qur'an! Sebelum kita masuk ke rumus dan kaidah tata bahasa, ada beberapa mindset dan kesepakatan penting yang ditekankan oleh Ustaz Nouman Ali Khan agar proses belajar kita berbuah maksimal."
                },
                {
                  type: "card_grid",
                  title: "3 Kunci Keberhasilan Belajar",
                  items: [
                    {
                      icon: "fa-bullseye",
                      title: "1. Fokus 100% pada Satu Sumber",
                      desc: "Jangan mencampuradukkan metode belajar. Tutup tab tutorial kilat 'Mahir Arab 10 Menit' lainnya. Ikuti alur satu guru sampai tuntas agar tidak bingung oleh perbedaan istilah antar buku."
                    },
                    {
                      icon: "fa-microphone-lines",
                      title: "2. Belajar Aktif & Bersuara",
                      desc: "Bahasa Arab bukan ilmu hafalan sunyi. Ketika ada latihan bunyi dan contoh kata, ucapkan keras-keras (verbalize). Keterlibatan lidah dan telinga mempercepat pembentukan koneksi saraf bahasa."
                    },
                    {
                      icon: "fa-book-open-reader",
                      title: "3. Tilawah 2 Halaman Tiap Hari",
                      desc: "Bacalah minimal 2 halaman mushaf Al-Qur'an setiap hari secara bersuara. Tujuannya melatih kelancaran lidah (flow) berpindah antarkata, meski di awal belum paham artinya."
                    }
                  ]
                },
                {
                  type: "quote",
                  text: "Kesalahan dalam proses belajar adalah hal yang paling berharga. Kesalahan memperlihatkan bagaimana cara berpikirmu bekerja, dan saat diluruskan, kamu terhindar dari ratusan kesalahan serupa di masa depan.",
                  author: "Ustaz Nouman Ali Khan"
                }
              ]
            },
            {
              id: "jenis-bahasa-arab",
              number: "02",
              title: "3 Jenis Bahasa Arab",
              icon: "fa-earth-asia",
              readTime: "7 menit",
              summary: "Membedakan Bahasa Arab Pasar, Fusha Modern, dan Bahasa Arab Qurani Kuno (Lisanul 'Arab).",
              content: [
                {
                  type: "paragraph",
                  text: "Tahukah kamu bahwa bahasa Arab yang kita jumpai di dunia saat ini tidak semuanya sama? Secara garis besar, bahasa Arab terbagi menjadi tiga kategori:"
                },
                {
                  type: "comparison_table",
                  title: "Perbandingan 3 Ragam Bahasa Arab",
                  headers: ["Kategori", "Karakteristik", "Analogi Padanan Bahasa Indonesia", "Tujuan Penggunaan"],
                  rows: [
                    [
                      "1. Bahasa Pasar (Street Arabic / 'Ammiyyah)",
                      "Dialek percakapan sehari-hari yang berbeda drastis di tiap negara (Mesir, Maroko, Syam, Teluk).",
                      "Seperti dialek lokal di Indonesia: Jawa ('sampean'), Sunda ('abdi'), Betawi ('gue-elo').",
                      "Berguna untuk turis atau belanja di pasar lokal."
                    ],
                    [
                      "2. Fusha Modern (Modern Standard Arabic)",
                      "Bahasa Arab formal, baku, terstruktur, dipakai di media berita (Al-Jazeera) dan buku kontemporer.",
                      "Seperti Bahasa Indonesia Baku (KBBI) yang digunakan presenter berita TVRI atau artikel ilmiah.",
                      "Digunakan untuk diplomasi, literatur modern, dan jurnalisme."
                    ],
                    [
                      "3. Bahasa Arab Kuno (Lisanul 'Arab / Bahasa Al-Qur'an)",
                      "Bahasa Arab murni bangsa Arab kuno 1400+ tahun lalu. Sangat kaya, presisi, puitis, dan berlapis makna.",
                      "Seperti Bahasa Melayu Klasik dalam naskah kuno dibandingkan bahasa gaul masa kini.",
                      "Tujuan utama kita! Memahami Al-Qur'an sebagaimana dipahami generasi pertama."
                    ]
                  ]
                },
                {
                  type: "callout",
                  style: "gold",
                  title: "Penting: Fusha Adalah Sebagian Kecil (Subset)",
                  text: "Jika Bahasa Arab Al-Qur'an diibaratkan satu loyang pizza utuh, maka Fusha Modern hanyalah satu potong pizza. Mempelajari Fusha saja tidak cukup untuk menangkap keindahan sastra Al-Qur'an."
                },
                {
                  type: "case_study",
                  title: "Contoh Nyata Pergeseran Makna: Kata 'Isti'mar' (اسْتِعْمَار)",
                  points: [
                    {
                      label: "Dalam Bahasa Arab Modern (Fusha)",
                      desc: "Bermakna 'Kolonialisme / Penjajahan'."
                    },
                    {
                      label: "Dalam Al-Qur'an (Surah Hud: 61)",
                      desc: "Bermakna 'Membangun / Memakmurkan Bumi' (استعمركم فيها = Dia menugaskanmu untuk membangun dan memakmurkan bumi)."
                    },
                    {
                      label: "Pelajaran",
                      desc: "Jika kita memaksakan kamus modern ke ayat Qur'an, kita akan salah mengartikan firman Allah seolah menyuruh kita 'menjajah' bumi, padahal maksudnya adalah 'membangunnya'."
                    }
                  ]
                },
                {
                  type: "quiz",
                  id: "q_ragam_arab",
                  question: "Jika Bahasa Arab Qurani diibaratkan satu loyang pizza utuh, maka Fusha Modern adalah...",
                  options: [
                    { text: "Loyang pizzanya sendiri yang terpisah", isCorrect: false },
                    { text: "Satu potong irisan pizza dari loyang tersebut (subset)", isCorrect: true },
                    { text: "Bumbu pelengkap (topping) di luar adonan", isCorrect: false },
                    { text: "Kotak pembungkus pizza", isCorrect: false }
                  ],
                  explanation: "Fusha merupakan bagian (subset) dari bahasa Arab kuno. Bahasa Al-Qur'an jauh lebih luas dan memiliki kedalaman kosa kata yang telah menyusut dalam bahasa Arab modern."
                }
              ]
            },
            {
              id: "tiga-jenis-kata",
              number: "03",
              title: "3 Jenis Kata: Ism, Fi'l, dan Harf",
              icon: "fa-shapes",
              readTime: "10 menit",
              summary: "Setiap kata dalam Al-Qur'an pasti masuk ke salah satu dari 3 wadah: Ism, Fi'l, atau Harf.",
              content: [
                {
                  type: "paragraph",
                  text: "Bayangkan kamu membuka mushaf Al-Qur'an di halaman mana saja. Tunjuk kata apapun secara acak. Kata tersebut HANYA bisa berupa salah satu dari tiga jenis kata ini:"
                },
                {
                  type: "word_types_overview",
                  types: [
                    {
                      arabic: "حَرْف",
                      name: "Harf (Partikel)",
                      badge: "Paling Ringan",
                      color: "emerald",
                      definition: "Kata yang TIDAK bermakna utuh kecuali jika disambung dengan kata lain setelahnya.",
                      indoExamples: ["di", "ke", "dari", "pada", "untuk", "dengan", "dan"],
                      rule: "Coba ucapkan 'Di...' lalu diam. Orang akan bertanya: 'Di mana?'. Harf selalu butuh kata setelahnya."
                    },
                    {
                      arabic: "فِعْل",
                      name: "Fi'l (Kata Kerja)",
                      badge: "Terikat Waktu",
                      color: "gold",
                      definition: "Kata yang TERIKAT OLEH WAKTU (Masa Lampau / Sekarang / Masa Depan).",
                      indoExamples: ["telah membaca (lampau)", "sedang makan (sekarang)", "akan pergi (depan)"],
                      rule: "Uji dengan waktu: Apakah aksi ini terjadi kemarin, saat ini, atau besok? Jika terikat masa, maka itu Fi'l."
                    },
                    {
                      arabic: "اِسْم",
                      name: "Ism (Kata Benda & Luas)",
                      badge: "Kategori Terbesar",
                      color: "moss",
                      definition: "Orang, Tempat, Benda, Ide/Konsep, Kata Sifat, Kata Keterangan, dan lebih banyak lagi.",
                      indoExamples: ["Zaid (orang)", "Masjid (tempat)", "Pena (benda)", "Keadilan (ide)", "Besar (sifat)", "Cepat (keterangan)"],
                      rule: "Ism TIDAK terikat oleh waktu. 'Pendidikan' adalah nama ide kapan pun dibicarakan."
                    }
                  ]
                },
                {
                  type: "callout",
                  style: "moss",
                  title: "Analogi Rak Buku & Kosa Kata",
                  text: "Kosa kata (vocabulary) ibarat buku-buku yang terserak. Grammar (Nahwu) adalah rak bukunya. Mempelajari grammar terlebih dahulu membuat setiap kosa kata yang kamu temukan di Al-Qur'an langsung tertata rapi di dalam rak pikiranmu."
                },
                {
                  type: "deep_dive",
                  title: "Membedakan 6 Wajah Ism (Orang, Tempat, Benda, Ide, Sifat, Keterangan)",
                  items: [
                    {
                      type: "1. Orang (Person)",
                      examples: "Muhammad, Guru, Dokter, Dia, Mereka, Siapa (kata ganti orang)."
                    },
                    {
                      type: "2. Tempat (Place)",
                      examples: "Masjid, Salman ITB, Bandung, Mekkah, Halaman, Kampus."
                    },
                    {
                      type: "3. Benda Fisik (Thing)",
                      examples: "Buku, Pena, Mikrofon, Air, Meja, Mobil, Langit."
                    },
                    {
                      type: "4. Ide / Konsep Abstrak (Idea)",
                      examples: "Pendidikan, Cinta, Keadilan, Kasih Sayang, Islam, Kebencian (sesuatu yang tidak bisa diraba/dilihat panca indra tapi dipahami akal)."
                    },
                    {
                      type: "5. Kata Sifat (Adjective)",
                      examples: "Besar, Indah, Merah, Saleh, Tua, Baru (mensifati orang, tempat, benda, atau ide)."
                    },
                    {
                      type: "6. Kata Keterangan (Adverb)",
                      examples: "Dengan cepat, perlahan-lahan, dengan sungguh-sungguh, sangat."
                    }
                  ]
                },
                {
                  type: "quiz",
                  id: "q_jenis_kata_1",
                  question: "Kata 'Kasih Sayang' (الرَّحْمَة) masuk ke dalam kategori kata apa dan jenis apa?",
                  options: [
                    { text: "Fi'l karena melibatkan perasaan yang berlangsung sekarang", isCorrect: false },
                    { text: "Harf karena membutuhkan objek yang disayangi", isCorrect: false },
                    { text: "Ism kategori Ide/Konsep Abstrak", isCorrect: true },
                    { text: "Ism kategori Kata Keterangan", isCorrect: false }
                  ],
                  explanation: "'Kasih sayang' adalah sebuah konsep/ide yang tidak memiliki wujud fisik (tidak bisa ditimbang di timbangan atau dimasukkan ke kulkas) dan tidak terikat waktu lampau/kini/depan secara kata per kata, sehingga ia adalah Ism jenis Ide."
                },
                {
                  type: "quiz",
                  id: "q_jenis_kata_2",
                  question: "Di antara kata-kata berikut, manakah yang merupakan Harf?",
                  options: [
                    { text: "Masjid", isCorrect: false },
                    { text: "Kemarin", isCorrect: false },
                    { text: "Menulis", isCorrect: false },
                    { text: "Dari", isCorrect: true }
                  ],
                  explanation: "'Dari' tidak memberikan pengertian yang utuh jika berdiri sendiri tanpa kata benda/tempat setelahnya ('dari Bandung', 'dari masjid')."
                }
              ]
            },
            {
              id: "status-ism-intro",
              number: "04",
              title: "Status Ism: Rafa', Nasb, dan Jar",
              icon: "fa-tags",
              readTime: "12 menit",
              summary: "Memahami peran sebuah Ism dalam kalimat melalui 3 label status utama.",
              content: [
                {
                  type: "paragraph",
                  text: "Setiap Ism di dalam Al-Qur'an memiliki 4 karakteristik: Status, Jumlah (Number), Gender, dan Kejelasan (Type). Di Hari ke-1 ini, kita fokus pada yang paling fundamental dan menentukan peran kata dalam kalimat: STATUS."
                },
                {
                  type: "paragraph",
                  text: "Dalam tata bahasa Arab, setiap Ism wajib memiliki salah satu dari 3 stiker status berikut:"
                },
                {
                  type: "status_cards",
                  cards: [
                    {
                      name: "1. RAFA' (الرَّفْع)",
                      role: "PELAKU (Doer)",
                      badgeColor: "emerald",
                      arabicLabel: "مَرْفُوع",
                      definition: "Ism yang melakukan perbuatan (Fi'l).",
                      howToFind: "1. Cari Fi'l-nya (kata kerja) -> 2. Tanya: 'SIAPA/APA yang melakukannya?' -> Jawabannya adalah RAFA'.",
                      examples: [
                        { sentence: "Guru memasuki kelas.", doer: "Guru", reason: "Guru yang melakukan aksi masuk." },
                        { sentence: "Mobil itu mogok di jalan.", doer: "Mobil", reason: "Mobil yang mengalami aksi mogok (bisa berupa benda!)." },
                        { sentence: "Kemarahanku merugikanku.", doer: "Kemarahan", reason: "Kemarahan adalah ide yang menjadi sebab/pelaku." }
                      ]
                    },
                    {
                      name: "2. NASB (النَّصْب)",
                      role: "DETAIL TENTANG FI'L",
                      badgeColor: "gold",
                      arabicLabel: "مَنْصُوب",
                      definition: "Ism yang memberikan detail investigasi seputar perbuatan tersebut.",
                      howToFind: "Tanyakan pertanyaan investigasi yang MEMUAT kata kerja: Apa yang dilakukan? Di mana? Kapan? Bagaimana? Mengapa? Berapa banyak?",
                      examples: [
                        { sentence: "Zaid memakan APEL (Apa yang dimakan? -> Nasb)", detail: "Apel" },
                        { sentence: "Zaid makan DI KELAS KEMARIN DENGAN CEPAT.", detail: "Di kelas (di mana?), Kemarin (kapan?), Cepat (bagaimana?) -> Semua NASB" }
                      ]
                    },
                    {
                      name: "3. JAR (الجَرّ)",
                      role: "SETELAH KATA 'MILIK / DARI / KEPUNYAAN'",
                      badgeColor: "moss",
                      arabicLabel: "مَجْرُور",
                      definition: "Ism yang posisinya berada setelah kata kepemilikan (dalam bahasa Inggris: kata setelah 'of').",
                      howToFind: "Ubah susunan kalimat menjadi bentuk kepemilikan '... milik ...'. Kata pemilik setelah kata 'milik' berstatus JAR.",
                      examples: [
                        { sentence: "Rasulullah = Utusan MILIK Allah", jarWord: "Lafadz Allah", reason: "Lafadz Allah berstatus Jar." },
                        { sentence: "Buku Zaid = Buku MILIK Zaid", jarWord: "Zaid", reason: "Zaid adalah pemilik -> berstatus Jar." },
                        { sentence: "Rumah kami = Rumah MILIK kami", jarWord: "Kami", reason: "'Kami' adalah pemilik -> berstatus Jar." }
                      ]
                    }
                  ]
                },
                {
                  type: "adab_callout",
                  title: "Adab Tata Bahasa Terhadap Lafadz Jalalah (Allah)",
                  text: "Saat menganalisis kalimat seperti 'Allah menciptakan langit', kita TIDAK mengatakan 'Allah adalah Rafa''. Yang benar, kita katakan 'KATA / LAFADZ Allah berstatus Rafa''. Ini adalah kaidah gramatikal untuk menghormati Dzat Allah yang Maha Agung."
                },
                {
                  type: "quiz",
                  id: "q_status_1",
                  question: "Dalam kalimat: 'Dokter merawat pasien di rumah sakit dengan teliti', kata manakah yang berstatus RAFA'?",
                  options: [
                    { text: "Pasien", isCorrect: false },
                    { text: "Dokter", isCorrect: true },
                    { text: "Di rumah sakit", isCorrect: false },
                    { text: "Dengan teliti", isCorrect: false }
                  ],
                  explanation: "Fi'l = merawat. Siapa yang melakukan perbuatan merawat? Jawabannya adalah DOKTER. Maka Dokter = Rafa' (Pelaku)."
                },
                {
                  type: "quiz",
                  id: "q_status_2",
                  question: "Dalam kalimat di atas, 'Pasien', 'Di rumah sakit', dan 'Dengan teliti' semuanya berstatus...",
                  options: [
                    { text: "Rafa'", isCorrect: false },
                    { text: "Nasb", isCorrect: true },
                    { text: "Jar", isCorrect: false },
                    { text: "Harf", isCorrect: false }
                  ],
                  explanation: "Semuanya menjawab pertanyaan detail seputar aksi merawat: Merawat SIAPA? (Pasien), Merawat DI MANA? (Di rumah sakit), Merawat BAGAIMANA? (Dengan teliti). Semua detail fi'l = NASB."
                }
              ]
            },
            {
              id: "bunyi-akhiran-runaji",
              number: "05",
              title: "Mengenali Status dari Bunyi Akhiran (Rumus RuNaJi)",
              icon: "fa-headphones",
              readTime: "8 menit",
              summary: "Orang Arab memberi tanda bunyi harakat di ujung kata untuk memberitahu statusnya.",
              content: [
                {
                  type: "paragraph",
                  text: "Hebatnya bahasa Arab: kamu tidak harus selalu menganalisis struktur kalimat yang panjang untuk mengetahui status sebuah Ism. Orang Arab kuno menyematkan BUNYI VOKAL AKHIRAN sebagai kode rahasia status kata tersebut!"
                },
                {
                  type: "formula_box",
                  title: "⚔️ Rumus Samurai: Ru-Na-Ji",
                  subtitle: "Kunci mudah mengingat pasangan Status dan Bunyi Akhiran",
                  formulas: [
                    {
                      code: "Ru",
                      status: "RAFA'",
                      sounds: "Bunyi U / UN",
                      harakat: "Dhammah ( ـُ ) / Tanwin Dhammah ( ـٌ )",
                      exampleArab: "مُسْلِمٌ / مُسْلِمُ",
                      exampleIndo: "Muslimun / Muslimu"
                    },
                    {
                      code: "Na",
                      status: "NASB",
                      sounds: "Bunyi A / AN",
                      harakat: "Fathah ( ـَ ) / Tanwin Fathah ( ـً )",
                      exampleArab: "مُسْلِمًا / مُسْلِمَ",
                      exampleIndo: "Musliman / Muslima"
                    },
                    {
                      code: "Ji",
                      status: "JAR",
                      sounds: "Bunyi I / IN",
                      harakat: "Kasrah ( ـِ ) / Tanwin Kasrah ( ـٍ )",
                      exampleArab: "مُسْلِمٍ / مُسْلِمِ",
                      exampleIndo: "Muslimin / Muslimi"
                    }
                  ]
                },
                {
                  type: "oral_drill",
                  title: "Latihan Lisan: Senam Lidah Muslimun",
                  instruction: "Ucapkan urutan tiga status ini 5 kali berturut-turut dengan lancar tanpa terbalik:",
                  steps: [
                    { label: "1. Rafa'", word: "مُسْلِمٌ (Muslimun)", sound: "Akhiran -un (U)" },
                    { label: "2. Nasb", word: "مُسْلِمًا (Musliman)", sound: "Akhiran -an (A)" },
                    { label: "3. Jar", word: "مُسْلِمٍ (Muslimin)", sound: "Akhiran -in (I)" }
                  ],
                  drillWord: "كِتَابٌ (Kitaabun - Rafa') ➔ كِتَابًا (Kitaaban - Nasb) ➔ كِتَابٍ (Kitaabin - Jar)"
                },
                {
                  type: "quiz",
                  id: "q_runaji_1",
                  question: "Jika kamu mendengar kata 'Ghafuuran' (غَفُورًا), status kata tersebut adalah...",
                  options: [
                    { text: "Rafa' karena berakhiran tanwin", isCorrect: false },
                    { text: "Nasb karena berakhiran bunyi -an (A)", isCorrect: true },
                    { text: "Jar karena merupakan nama sifat", isCorrect: false }
                  ],
                  explanation: "Ghafuur-AN berakhiran bunyi 'AN' (vokal A). Sesuai rumus Ru-Na-Ji: 'Na' = Nasb bunyi A. Jadi statusnya adalah NASB."
                },
                {
                  type: "quiz",
                  id: "q_runaji_2",
                  question: "Bentuk Jar untuk kata 'Masjid' (مَسْجِد) dengan tanwin adalah...",
                  options: [
                    { text: "Masjidun (مَسْجِدٌ)", isCorrect: false },
                    { text: "Masjidan (مَسْجِدًا)", isCorrect: false },
                    { text: "Masjidin (مَسْجِدٍ)", isCorrect: true }
                  ],
                  explanation: "Bentuk Jar ditandai bunyi I/IN (Ji = Jar + I). Jadi bentuk Jar-nya adalah Masjidin."
                }
              ]
            },
            {
              id: "praktik-quran",
              number: "06",
              title: "Praktik Langsung: Analisis Ayat Al-Qur'an",
              icon: "fa-book-quran",
              readTime: "15 menit",
              summary: "Menguji kemampuan mendengar dan mengidentifikasi status kata langsung dari ayat-ayat Al-Qur'an.",
              content: [
                {
                  type: "paragraph",
                  text: "Masya Allah! Sekarang kamu sudah memiliki bekal mengenali status kata. Mari kita bedah potongan ayat-ayat surat pendek Al-Qur'an. Perhatikan bunyi vokal terakhir dari setiap kata yang digarisbawahi!"
                },
                {
                  type: "quran_interactive_lab",
                  title: "Laboratorium Status Ayat Al-Qur'an",
                  subtitle: "Klik pada salah satu tombol status (Rafa'/Nasb/Jar) untuk memeriksa pemahamanmu!",
                  items: [
                    {
                      surah: "Surah Al-Fatihah: 1",
                      ayahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                      targetWord: "بِسْمِ",
                      transliteration: "Bismi",
                      meaning: "Dengan nama",
                      correctStatus: "jar",
                      soundEnd: "Vokal Kasrah ( -i )",
                      explanation: "Kata 'Bismi' berakhiran bunyi 'i', maka statusnya adalah JAR (Ru-Na-Ji -> Ji = Jar + i)."
                    },
                    {
                      surah: "Surah Al-Fatihah: 2",
                      ayahArabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                      targetWord: "الْحَمْدُ",
                      transliteration: "Al-Hamdu",
                      meaning: "Segala puji",
                      correctStatus: "rafa",
                      soundEnd: "Vokal Dhammah ( -u )",
                      explanation: "Kata 'Al-Hamdu' berakhiran bunyi 'u', maka statusnya adalah RAFA' (Ru-Na-Ji -> Ru = Rafa' + u)."
                    },
                    {
                      surah: "Surah Al-Fatihah: 6",
                      ayahArabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                      targetWord: "الصِّرَاطَ",
                      transliteration: "Ash-Shiraatha",
                      meaning: "Jalan",
                      correctStatus: "nasb",
                      soundEnd: "Vokal Fathah ( -a )",
                      explanation: "Kata 'Ash-Shiraatha' berakhiran bunyi 'a', maka statusnya adalah NASB (Ru-Na-Ji -> Na = Nasb + a)."
                    },
                    {
                      surah: "Surah Al-Humazah: 1",
                      ayahArabic: "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ",
                      targetWord: "وَيْلٌ",
                      transliteration: "Waylun",
                      meaning: "Celakalah",
                      correctStatus: "rafa",
                      soundEnd: "Vokal Tanwin Dhammah ( -un )",
                      explanation: "Kata 'Waylun' berakhiran bunyi 'un', maka statusnya adalah RAFA'."
                    },
                    {
                      surah: "Surah Al-Humazah: 1",
                      ayahArabic: "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ",
                      targetWord: "هُمَزَةٍ",
                      transliteration: "Humazatin",
                      meaning: "Setiap pengumpat",
                      correctStatus: "jar",
                      soundEnd: "Vokal Tanwin Kasrah ( -in )",
                      explanation: "Kata 'Humazatin' berakhiran bunyi 'in', maka statusnya adalah JAR."
                    },
                    {
                      surah: "Surah Al-Humazah: 2",
                      ayahArabic: "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ",
                      targetWord: "مَالًا",
                      transliteration: "Maalan",
                      meaning: "Harta",
                      correctStatus: "nasb",
                      soundEnd: "Vokal Tanwin Fathah ( -an )",
                      explanation: "Kata 'Maalan' berakhiran bunyi 'an', maka statusnya adalah NASB."
                    },
                    {
                      surah: "Surah Al-Kawtsar: 1",
                      ayahArabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
                      targetWord: "الْكَوْثَرَ",
                      transliteration: "Al-Kawtsara",
                      meaning: "Nikmat yang banyak",
                      correctStatus: "nasb",
                      soundEnd: "Vokal Fathah ( -a )",
                      explanation: "Kata 'Al-Kawtsara' berakhiran bunyi 'a', maka statusnya adalah NASB."
                    },
                    {
                      surah: "Surah Al-'Asr: 2",
                      ayahArabic: "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
                      targetWord: "خُسْرٍ",
                      transliteration: "Khusrin",
                      meaning: "Kerugian",
                      correctStatus: "jar",
                      soundEnd: "Vokal Tanwin Kasrah ( -in )",
                      explanation: "Kata 'Khusrin' berakhiran bunyi 'in', maka statusnya adalah JAR."
                    }
                  ]
                },
                {
                  type: "summary_card",
                  title: "Rangkuman Capaian Hari ke-1",
                  points: [
                    "Memahami 3 jenis bahasa Arab (Pasar, Fusha, dan Qurani).",
                    "Membedakan 3 jenis kata: Ism (benda/orang/sifat/ide), Fi'l (terikat waktu), dan Harf (butuh kata lain).",
                    "Mengenal 3 status Ism: Rafa' (Pelaku), Nasb (Detail Fi'l), dan Jar (Pemilik / setelah 'milik').",
                    "Menguasai rumus bunyi Ru-Na-Ji (Rafa'=U/UN, Nasb=A/AN, Jar=I/IN) dan mempraktikkannya langsung pada ayat Al-Qur'an."
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
