/**
 * Data Materi Belajar Bahasa Arab Metode Bayyinah Dream
 * Disadur dan diadaptasi ke Bahasa Indonesia oleh Jundi Abdullah
 * Berdasarkan Kurikulum Dream Intensive Ustaz Nouman Ali Khan
 */

window.DREAM_ARABIC_DATA = {
  "courseTitle": "Dream Arabic Intensive",
  "subtitle": "Memahami Bahasa Al-Qur'an dengan Metode Visual, Logis & Interaktif",
  "speaker": "Ustaz Nouman Ali Khan (Bayyinah)",
  "adapter": "Jundi Abdullah",
  "intensives": [
    {
      "id": 1,
      "number": "Intensive 1",
      "title": "Fondasi Tata Bahasa (Nahwu & Sharaf Dasar)",
      "description": "Membangun fondasi dasar struktur kalimat, jenis kata, 4 sifat Ism, dan pengenalan pola kalimat Al-Qur'an.",
      "days": [
        {
          "day": 1,
          "title": "Hari 1: Fondasi Bahasa Arab & 3 Status Ism",
          "summary": "Pengenalan 3 jenis bahasa Arab, 3 jenis kata (Ism, Fi'l, Harf), serta mendalami konsep Status Ism (Rafa', Nasb, Jar) dengan rumus RuNaJi.",
          "lessons": [
            {
              "id": "orientasi",
              "number": "01",
              "title": "Orientasi & Mindset Belajar",
              "icon": "fa-compass",
              "readTime": "5 menit",
              "summary": "Prinsip dasar dan mindset yang tepat sebelum memulai perjalanan belajar bahasa Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Selamat datang di perjalanan mempelajari bahasa Al-Qur'an! Sebelum kita masuk ke rumus dan kaidah tata bahasa, ada beberapa mindset dan kesepakatan penting yang ditekankan oleh Ustaz Nouman Ali Khan agar proses belajar kita berbuah maksimal."
                },
                {
                  "type": "card_grid",
                  "title": "3 Kunci Keberhasilan Belajar",
                  "items": [
                    {
                      "icon": "fa-bullseye",
                      "title": "1. Fokus 100% pada Satu Sumber",
                      "desc": "Jangan mencampuradukkan metode belajar. Tutup tab tutorial kilat 'Mahir Arab 10 Menit' lainnya. Ikuti alur satu guru sampai tuntas agar tidak bingung oleh perbedaan istilah antar buku."
                    },
                    {
                      "icon": "fa-microphone-lines",
                      "title": "2. Belajar Aktif & Bersuara",
                      "desc": "Bahasa Arab bukan ilmu hafalan sunyi. Ketika ada latihan bunyi dan contoh kata, ucapkan keras-keras (verbalize). Keterlibatan lidah dan telinga mempercepat pembentukan koneksi saraf bahasa."
                    },
                    {
                      "icon": "fa-book-open-reader",
                      "title": "3. Tilawah 2 Halaman Tiap Hari",
                      "desc": "Bacalah minimal 2 halaman mushaf Al-Qur'an setiap hari secara bersuara. Tujuannya melatih kelancaran lidah (flow) berpindah antarkata, meski di awal belum paham artinya."
                    }
                  ]
                },
                {
                  "type": "quote",
                  "text": "Kesalahan dalam proses belajar adalah hal yang paling berharga. Kesalahan memperlihatkan bagaimana cara berpikirmu bekerja, dan saat diluruskan, kamu terhindar dari ratusan kesalahan serupa di masa depan.",
                  "author": "Ustaz Nouman Ali Khan"
                }
              ]
            },
            {
              "id": "jenis-bahasa-arab",
              "number": "02",
              "title": "3 Jenis Bahasa Arab",
              "icon": "fa-earth-asia",
              "readTime": "7 menit",
              "summary": "Membedakan Bahasa Arab Pasar, Fusha Modern, dan Bahasa Arab Qurani Kuno (Lisanul 'Arab).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Tahukah kamu bahwa bahasa Arab yang kita jumpai di dunia saat ini tidak semuanya sama? Secara garis besar, bahasa Arab terbagi menjadi tiga kategori:"
                },
                {
                  "type": "comparison_table",
                  "title": "Perbandingan 3 Ragam Bahasa Arab",
                  "headers": [
                    "Kategori",
                    "Karakteristik",
                    "Analogi Padanan Bahasa Indonesia",
                    "Tujuan Penggunaan"
                  ],
                  "rows": [
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
                  "type": "callout",
                  "style": "gold",
                  "title": "Penting: Fusha Adalah Sebagian Kecil (Subset)",
                  "text": "Jika Bahasa Arab Al-Qur'an diibaratkan satu loyang pizza utuh, maka Fusha Modern hanyalah satu potong pizza. Mempelajari Fusha saja tidak cukup untuk menangkap keindahan sastra Al-Qur'an."
                },
                {
                  "type": "case_study",
                  "title": "Contoh Nyata Pergeseran Makna: Kata 'Isti'mar' (اسْتِعْمَار)",
                  "points": [
                    {
                      "label": "Dalam Bahasa Arab Modern (Fusha)",
                      "desc": "Bermakna 'Kolonialisme / Penjajahan'."
                    },
                    {
                      "label": "Dalam Al-Qur'an (Surah Hud: 61)",
                      "desc": "Bermakna 'Membangun / Memakmurkan Bumi' (استعمركم فيها = Dia menugaskanmu untuk membangun dan memakmurkan bumi)."
                    },
                    {
                      "label": "Pelajaran",
                      "desc": "Jika kita memaksakan kamus modern ke ayat Qur'an, kita akan salah mengartikan firman Allah seolah menyuruh kita 'menjajah' bumi, padahal maksudnya adalah 'membangunnya'."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_ragam_arab",
                  "question": "Jika Bahasa Arab Qurani diibaratkan satu loyang pizza utuh, maka Fusha Modern adalah...",
                  "options": [
                    {
                      "text": "Loyang pizzanya sendiri yang terpisah",
                      "isCorrect": false
                    },
                    {
                      "text": "Satu potong irisan pizza dari loyang tersebut (subset)",
                      "isCorrect": true
                    },
                    {
                      "text": "Bumbu pelengkap (topping) di luar adonan",
                      "isCorrect": false
                    },
                    {
                      "text": "Kotak pembungkus pizza",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Fusha merupakan bagian (subset) dari bahasa Arab kuno. Bahasa Al-Qur'an jauh lebih luas dan memiliki kedalaman kosa kata yang telah menyusut dalam bahasa Arab modern."
                }
              ]
            },
            {
              "id": "tiga-jenis-kata",
              "number": "03",
              "title": "3 Jenis Kata: Ism, Fi'l, dan Harf",
              "icon": "fa-shapes",
              "readTime": "10 menit",
              "summary": "Setiap kata dalam Al-Qur'an pasti masuk ke salah satu dari 3 wadah: Ism, Fi'l, atau Harf.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Bayangkan kamu membuka mushaf Al-Qur'an di halaman mana saja. Tunjuk kata apapun secara acak. Kata tersebut HANYA bisa berupa salah satu dari tiga jenis kata ini:"
                },
                {
                  "type": "word_types_overview",
                  "types": [
                    {
                      "arabic": "حَرْف",
                      "name": "Harf (Partikel)",
                      "badge": "Paling Ringan",
                      "color": "emerald",
                      "definition": "Kata yang TIDAK bermakna utuh kecuali jika disambung dengan kata lain setelahnya.",
                      "indoExamples": [
                        "di",
                        "ke",
                        "dari",
                        "pada",
                        "untuk",
                        "dengan",
                        "dan"
                      ],
                      "rule": "Coba ucapkan 'Di...' lalu diam. Orang akan bertanya: 'Di mana?'. Harf selalu butuh kata setelahnya."
                    },
                    {
                      "arabic": "فِعْل",
                      "name": "Fi'l (Kata Kerja)",
                      "badge": "Terikat Waktu",
                      "color": "gold",
                      "definition": "Kata yang TERIKAT OLEH WAKTU (Masa Lampau / Sekarang / Masa Depan).",
                      "indoExamples": [
                        "telah membaca (lampau)",
                        "sedang makan (sekarang)",
                        "akan pergi (depan)"
                      ],
                      "rule": "Uji dengan waktu: Apakah aksi ini terjadi kemarin, saat ini, atau besok? Jika terikat masa, maka itu Fi'l."
                    },
                    {
                      "arabic": "اِسْم",
                      "name": "Ism (Kata Benda & Luas)",
                      "badge": "Kategori Terbesar",
                      "color": "moss",
                      "definition": "Orang, Tempat, Benda, Ide/Konsep, Kata Sifat, Kata Keterangan, dan lebih banyak lagi.",
                      "indoExamples": [
                        "Zaid (orang)",
                        "Masjid (tempat)",
                        "Pena (benda)",
                        "Keadilan (ide)",
                        "Besar (sifat)",
                        "Cepat (keterangan)"
                      ],
                      "rule": "Ism TIDAK terikat oleh waktu. 'Pendidikan' adalah nama ide kapan pun dibicarakan."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Analogi Rak Buku & Kosa Kata",
                  "text": "Kosa kata (vocabulary) ibarat buku-buku yang terserak. Grammar (Nahwu) adalah rak bukunya. Mempelajari grammar terlebih dahulu membuat setiap kosa kata yang kamu temukan di Al-Qur'an langsung tertata rapi di dalam rak pikiranmu."
                },
                {
                  "type": "deep_dive",
                  "title": "Membedakan 6 Wajah Ism (Orang, Tempat, Benda, Ide, Sifat, Keterangan)",
                  "items": [
                    {
                      "type": "1. Orang (Person)",
                      "examples": "Muhammad, Guru, Dokter, Dia, Mereka, Siapa (kata ganti orang)."
                    },
                    {
                      "type": "2. Tempat (Place)",
                      "examples": "Masjid, Salman ITB, Bandung, Mekkah, Halaman, Kampus."
                    },
                    {
                      "type": "3. Benda Fisik (Thing)",
                      "examples": "Buku, Pena, Mikrofon, Air, Meja, Mobil, Langit."
                    },
                    {
                      "type": "4. Ide / Konsep Abstrak (Idea)",
                      "examples": "Pendidikan, Cinta, Keadilan, Kasih Sayang, Islam, Kebencian (sesuatu yang tidak bisa diraba/dilihat panca indra tapi dipahami akal)."
                    },
                    {
                      "type": "5. Kata Sifat (Adjective)",
                      "examples": "Besar, Indah, Merah, Saleh, Tua, Baru (mensifati orang, tempat, benda, atau ide)."
                    },
                    {
                      "type": "6. Kata Keterangan (Adverb)",
                      "examples": "Dengan cepat, perlahan-lahan, dengan sungguh-sungguh, sangat."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_jenis_kata_1",
                  "question": "Kata 'Kasih Sayang' (الرَّحْمَة) masuk ke dalam kategori kata apa dan jenis apa?",
                  "options": [
                    {
                      "text": "Fi'l karena melibatkan perasaan yang berlangsung sekarang",
                      "isCorrect": false
                    },
                    {
                      "text": "Harf karena membutuhkan objek yang disayangi",
                      "isCorrect": false
                    },
                    {
                      "text": "Ism kategori Ide/Konsep Abstrak",
                      "isCorrect": true
                    },
                    {
                      "text": "Ism kategori Kata Keterangan",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Kasih sayang' adalah sebuah konsep/ide yang tidak memiliki wujud fisik (tidak bisa ditimbang di timbangan atau dimasukkan ke kulkas) dan tidak terikat waktu lampau/kini/depan secara kata per kata, sehingga ia adalah Ism jenis Ide."
                },
                {
                  "type": "quiz",
                  "id": "q_jenis_kata_2",
                  "question": "Di antara kata-kata berikut, manakah yang merupakan Harf?",
                  "options": [
                    {
                      "text": "Masjid",
                      "isCorrect": false
                    },
                    {
                      "text": "Kemarin",
                      "isCorrect": false
                    },
                    {
                      "text": "Menulis",
                      "isCorrect": false
                    },
                    {
                      "text": "Dari",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "'Dari' tidak memberikan pengertian yang utuh jika berdiri sendiri tanpa kata benda/tempat setelahnya ('dari Bandung', 'dari masjid')."
                }
              ]
            },
            {
              "id": "status-ism-intro",
              "number": "04",
              "title": "Status Ism: Rafa', Nasb, dan Jar",
              "icon": "fa-tags",
              "readTime": "12 menit",
              "summary": "Memahami peran sebuah Ism dalam kalimat melalui 3 label status utama.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setiap Ism di dalam Al-Qur'an memiliki 4 karakteristik: Status, Jumlah (Number), Gender, dan Kejelasan (Type). Di Hari ke-1 ini, kita fokus pada yang paling fundamental dan menentukan peran kata dalam kalimat: STATUS."
                },
                {
                  "type": "paragraph",
                  "text": "Dalam tata bahasa Arab, setiap Ism wajib memiliki salah satu dari 3 stiker status berikut:"
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "1. RAFA' (الرَّفْع)",
                      "role": "PELAKU (Doer)",
                      "badgeColor": "emerald",
                      "arabicLabel": "مَرْفُوع",
                      "definition": "Ism yang melakukan perbuatan (Fi'l).",
                      "howToFind": "1. Cari Fi'l-nya (kata kerja) -> 2. Tanya: 'SIAPA/APA yang melakukannya?' -> Jawabannya adalah RAFA'.",
                      "examples": [
                        {
                          "sentence": "Guru memasuki kelas.",
                          "doer": "Guru",
                          "reason": "Guru yang melakukan aksi masuk."
                        },
                        {
                          "sentence": "Mobil itu mogok di jalan.",
                          "doer": "Mobil",
                          "reason": "Mobil yang mengalami aksi mogok (bisa berupa benda!)."
                        },
                        {
                          "sentence": "Kemarahanku merugikanku.",
                          "doer": "Kemarahan",
                          "reason": "Kemarahan adalah ide yang menjadi sebab/pelaku."
                        }
                      ]
                    },
                    {
                      "name": "2. NASB (النَّصْب)",
                      "role": "DETAIL TENTANG FI'L",
                      "badgeColor": "gold",
                      "arabicLabel": "مَنْصُوب",
                      "definition": "Ism yang memberikan detail investigasi seputar perbuatan tersebut.",
                      "howToFind": "Tanyakan pertanyaan investigasi yang MEMUAT kata kerja: Apa yang dilakukan? Di mana? Kapan? Bagaimana? Mengapa? Berapa banyak?",
                      "examples": [
                        {
                          "sentence": "Zaid memakan APEL (Apa yang dimakan? -> Nasb)",
                          "detail": "Apel"
                        },
                        {
                          "sentence": "Zaid makan DI KELAS KEMARIN DENGAN CEPAT.",
                          "detail": "Di kelas (di mana?), Kemarin (kapan?), Cepat (bagaimana?) -> Semua NASB"
                        }
                      ]
                    },
                    {
                      "name": "3. JAR (الجَرّ)",
                      "role": "SETELAH KATA 'MILIK / DARI / KEPUNYAAN'",
                      "badgeColor": "moss",
                      "arabicLabel": "مَجْرُور",
                      "definition": "Ism yang posisinya berada setelah kata kepemilikan (dalam bahasa Inggris: kata setelah 'of').",
                      "howToFind": "Ubah susunan kalimat menjadi bentuk kepemilikan '... milik ...'. Kata pemilik setelah kata 'milik' berstatus JAR.",
                      "examples": [
                        {
                          "sentence": "Rasulullah = Utusan MILIK Allah",
                          "jarWord": "Lafadz Allah",
                          "reason": "Lafadz Allah berstatus Jar."
                        },
                        {
                          "sentence": "Buku Zaid = Buku MILIK Zaid",
                          "jarWord": "Zaid",
                          "reason": "Zaid adalah pemilik -> berstatus Jar."
                        },
                        {
                          "sentence": "Rumah kami = Rumah MILIK kami",
                          "jarWord": "Kami",
                          "reason": "'Kami' adalah pemilik -> berstatus Jar."
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "adab_callout",
                  "title": "Adab Tata Bahasa Terhadap Lafadz Jalalah (Allah)",
                  "text": "Saat menganalisis kalimat seperti 'Allah menciptakan langit', kita TIDAK mengatakan 'Allah adalah Rafa''. Yang benar, kita katakan 'KATA / LAFADZ Allah berstatus Rafa''. Ini adalah kaidah gramatikal untuk menghormati Dzat Allah yang Maha Agung."
                },
                {
                  "type": "quiz",
                  "id": "q_status_1",
                  "question": "Dalam kalimat: 'Dokter merawat pasien di rumah sakit dengan teliti', kata manakah yang berstatus RAFA'?",
                  "options": [
                    {
                      "text": "Pasien",
                      "isCorrect": false
                    },
                    {
                      "text": "Dokter",
                      "isCorrect": true
                    },
                    {
                      "text": "Di rumah sakit",
                      "isCorrect": false
                    },
                    {
                      "text": "Dengan teliti",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Fi'l = merawat. Siapa yang melakukan perbuatan merawat? Jawabannya adalah DOKTER. Maka Dokter = Rafa' (Pelaku)."
                },
                {
                  "type": "quiz",
                  "id": "q_status_2",
                  "question": "Dalam kalimat di atas, 'Pasien', 'Di rumah sakit', dan 'Dengan teliti' semuanya berstatus...",
                  "options": [
                    {
                      "text": "Rafa'",
                      "isCorrect": false
                    },
                    {
                      "text": "Nasb",
                      "isCorrect": true
                    },
                    {
                      "text": "Jar",
                      "isCorrect": false
                    },
                    {
                      "text": "Harf",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Semuanya menjawab pertanyaan detail seputar aksi merawat: Merawat SIAPA? (Pasien), Merawat DI MANA? (Di rumah sakit), Merawat BAGAIMANA? (Dengan teliti). Semua detail fi'l = NASB."
                }
              ]
            },
            {
              "id": "bunyi-akhiran-runaji",
              "number": "05",
              "title": "Mengenali Status dari Bunyi Akhiran (Rumus RuNaJi)",
              "icon": "fa-headphones",
              "readTime": "8 menit",
              "summary": "Orang Arab memberi tanda bunyi harakat di ujung kata untuk memberitahu statusnya.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Hebatnya bahasa Arab: kamu tidak harus selalu menganalisis struktur kalimat yang panjang untuk mengetahui status sebuah Ism. Orang Arab kuno menyematkan BUNYI VOKAL AKHIRAN sebagai kode rahasia status kata tersebut!"
                },
                {
                  "type": "formula_box",
                  "title": "⚔️ Rumus Samurai: Ru-Na-Ji",
                  "subtitle": "Kunci mudah mengingat pasangan Status dan Bunyi Akhiran",
                  "formulas": [
                    {
                      "code": "Ru",
                      "status": "RAFA'",
                      "sounds": "Bunyi U / UN",
                      "harakat": "Dhammah ( ـُ ) / Tanwin Dhammah ( ـٌ )",
                      "exampleArab": "مُسْلِمٌ / مُسْلِمُ",
                      "exampleIndo": "Muslimun / Muslimu"
                    },
                    {
                      "code": "Na",
                      "status": "NASB",
                      "sounds": "Bunyi A / AN",
                      "harakat": "Fathah ( ـَ ) / Tanwin Fathah ( ـً )",
                      "exampleArab": "مُسْلِمًا / مُسْلِمَ",
                      "exampleIndo": "Musliman / Muslima"
                    },
                    {
                      "code": "Ji",
                      "status": "JAR",
                      "sounds": "Bunyi I / IN",
                      "harakat": "Kasrah ( ـِ ) / Tanwin Kasrah ( ـٍ )",
                      "exampleArab": "مُسْلِمٍ / مُسْلِمِ",
                      "exampleIndo": "Muslimin / Muslimi"
                    }
                  ]
                },
                {
                  "type": "oral_drill",
                  "title": "Latihan Lisan: Senam Lidah Muslimun",
                  "instruction": "Ucapkan urutan tiga status ini 5 kali berturut-turut dengan lancar tanpa terbalik:",
                  "steps": [
                    {
                      "label": "1. Rafa'",
                      "word": "مُسْلِمٌ (Muslimun)",
                      "sound": "Akhiran -un (U)"
                    },
                    {
                      "label": "2. Nasb",
                      "word": "مُسْلِمًا (Musliman)",
                      "sound": "Akhiran -an (A)"
                    },
                    {
                      "label": "3. Jar",
                      "word": "مُسْلِمٍ (Muslimin)",
                      "sound": "Akhiran -in (I)"
                    }
                  ],
                  "drillWord": "كِتَابٌ (Kitaabun - Rafa') ➔ كِتَابًا (Kitaaban - Nasb) ➔ كِتَابٍ (Kitaabin - Jar)"
                },
                {
                  "type": "quiz",
                  "id": "q_runaji_1",
                  "question": "Jika kamu mendengar kata 'Ghafuuran' (غَفُورًا), status kata tersebut adalah...",
                  "options": [
                    {
                      "text": "Rafa' karena berakhiran tanwin",
                      "isCorrect": false
                    },
                    {
                      "text": "Nasb karena berakhiran bunyi -an (A)",
                      "isCorrect": true
                    },
                    {
                      "text": "Jar karena merupakan nama sifat",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Ghafuur-AN berakhiran bunyi 'AN' (vokal A). Sesuai rumus Ru-Na-Ji: 'Na' = Nasb bunyi A. Jadi statusnya adalah NASB."
                },
                {
                  "type": "quiz",
                  "id": "q_runaji_2",
                  "question": "Bentuk Jar untuk kata 'Masjid' (مَسْجِد) dengan tanwin adalah...",
                  "options": [
                    {
                      "text": "Masjidun (مَسْجِدٌ)",
                      "isCorrect": false
                    },
                    {
                      "text": "Masjidan (مَسْجِدًا)",
                      "isCorrect": false
                    },
                    {
                      "text": "Masjidin (مَسْجِدٍ)",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "Bentuk Jar ditandai bunyi I/IN (Ji = Jar + I). Jadi bentuk Jar-nya adalah Masjidin."
                }
              ]
            },
            {
              "id": "praktik-quran",
              "number": "06",
              "title": "Praktik Langsung: Analisis Ayat Al-Qur'an",
              "icon": "fa-book-quran",
              "readTime": "15 menit",
              "summary": "Menguji kemampuan mendengar dan mengidentifikasi status kata langsung dari ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Masya Allah! Sekarang kamu sudah memiliki bekal mengenali status kata. Mari kita bedah potongan ayat-ayat surat pendek Al-Qur'an. Perhatikan bunyi vokal terakhir dari setiap kata yang digarisbawahi!"
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Status Ayat Al-Qur'an",
                  "subtitle": "Klik pada salah satu tombol status (Rafa'/Nasb/Jar) untuk memeriksa pemahamanmu!",
                  "items": [
                    {
                      "surah": "Surah Al-Fatihah: 1",
                      "ayahArabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                      "targetWord": "بِسْمِ",
                      "transliteration": "Bismi",
                      "meaning": "Dengan nama",
                      "correctStatus": "jar",
                      "soundEnd": "Vokal Kasrah ( -i )",
                      "explanation": "Kata 'Bismi' berakhiran bunyi 'i', maka statusnya adalah JAR (Ru-Na-Ji -> Ji = Jar + i)."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 2",
                      "ayahArabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                      "targetWord": "الْحَمْدُ",
                      "transliteration": "Al-Hamdu",
                      "meaning": "Segala puji",
                      "correctStatus": "rafa",
                      "soundEnd": "Vokal Dhammah ( -u )",
                      "explanation": "Kata 'Al-Hamdu' berakhiran bunyi 'u', maka statusnya adalah RAFA' (Ru-Na-Ji -> Ru = Rafa' + u)."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 6",
                      "ayahArabic": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                      "targetWord": "الصِّرَاطَ",
                      "transliteration": "Ash-Shiraatha",
                      "meaning": "Jalan",
                      "correctStatus": "nasb",
                      "soundEnd": "Vokal Fathah ( -a )",
                      "explanation": "Kata 'Ash-Shiraatha' berakhiran bunyi 'a', maka statusnya adalah NASB (Ru-Na-Ji -> Na = Nasb + a)."
                    },
                    {
                      "surah": "Surah Al-Humazah: 1",
                      "ayahArabic": "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ",
                      "targetWord": "وَيْلٌ",
                      "transliteration": "Waylun",
                      "meaning": "Celakalah",
                      "correctStatus": "rafa",
                      "soundEnd": "Vokal Tanwin Dhammah ( -un )",
                      "explanation": "Kata 'Waylun' berakhiran bunyi 'un', maka statusnya adalah RAFA'."
                    },
                    {
                      "surah": "Surah Al-Humazah: 1",
                      "ayahArabic": "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ",
                      "targetWord": "هُمَزَةٍ",
                      "transliteration": "Humazatin",
                      "meaning": "Setiap pengumpat",
                      "correctStatus": "jar",
                      "soundEnd": "Vokal Tanwin Kasrah ( -in )",
                      "explanation": "Kata 'Humazatin' berakhiran bunyi 'in', maka statusnya adalah JAR."
                    },
                    {
                      "surah": "Surah Al-Humazah: 2",
                      "ayahArabic": "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ",
                      "targetWord": "مَالًا",
                      "transliteration": "Maalan",
                      "meaning": "Harta",
                      "correctStatus": "nasb",
                      "soundEnd": "Vokal Tanwin Fathah ( -an )",
                      "explanation": "Kata 'Maalan' berakhiran bunyi 'an', maka statusnya adalah NASB."
                    },
                    {
                      "surah": "Surah Al-Kawtsar: 1",
                      "ayahArabic": "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
                      "targetWord": "الْكَوْثَرَ",
                      "transliteration": "Al-Kawtsara",
                      "meaning": "Nikmat yang banyak",
                      "correctStatus": "nasb",
                      "soundEnd": "Vokal Fathah ( -a )",
                      "explanation": "Kata 'Al-Kawtsara' berakhiran bunyi 'a', maka statusnya adalah NASB."
                    },
                    {
                      "surah": "Surah Al-'Asr: 2",
                      "ayahArabic": "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
                      "targetWord": "خُسْرٍ",
                      "transliteration": "Khusrin",
                      "meaning": "Kerugian",
                      "correctStatus": "jar",
                      "soundEnd": "Vokal Tanwin Kasrah ( -in )",
                      "explanation": "Kata 'Khusrin' berakhiran bunyi 'in', maka statusnya adalah JAR."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Capaian Hari ke-1",
                  "points": [
                    "Memahami 3 jenis bahasa Arab (Pasar, Fusha, dan Qurani).",
                    "Membedakan 3 jenis kata: Ism (benda/orang/sifat/ide), Fi'l (terikat waktu), dan Harf (butuh kata lain).",
                    "Mengenal 3 status Ism: Rafa' (Pelaku), Nasb (Detail Fi'l), dan Jar (Pemilik / setelah 'milik').",
                    "Menguasai rumus bunyi Ru-Na-Ji (Rafa'=U/UN, Nasb=A/AN, Jar=I/IN) dan mempraktikkannya langsung pada ayat Al-Qur'an."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/WPjsDVS_trI?si=_A31DpyO_BE0V-3g",
          "pdfUrl": "https://drive.google.com/file/d/1TnvucVgLQpu2uDiKXnykSCu2NIINtrPS/view?usp=drive_link",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 1",
              "url": "https://www.youtube.com/live/WPjsDVS_trI?si=_A31DpyO_BE0V-3g"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 1",
              "url": "https://drive.google.com/file/d/1TnvucVgLQpu2uDiKXnykSCu2NIINtrPS/view?usp=drive_link"
            }
          ]
        },
        {
          "day": 2,
          "title": "Hari 2: Rahasia Urutan Kata & Bagan Muslimun Lengkap",
          "videoUrl": "https://www.youtube.com/live/UjKnWbx8uyg?si=Oj0bX-MCNP1PKI85",
          "pdfUrl": "https://drive.google.com/file/d/1Zqwk2XG-rsu862eO0BXlt0KBL8SAOpkc/view?usp=sharing",
          "summary": "Membongkar rahasia urutan kata dalam bahasa Arab, 4 properti Ism, 3 jenis jumlah (tunggal, ganda, jamak), serta menguasai Bagan Muslimun maskulin dan feminin.",
          "lessons": [
            {
              "id": "urutan-kata",
              "number": "01",
              "title": "Rahasia Urutan Kata dalam Bahasa Arab",
              "icon": "fa-arrow-right-arrow-left",
              "readTime": "8 menit",
              "summary": "Mengapa posisi kata dalam Bahasa Arab tidak otomatis menentukan pelaku seperti dalam bahasa Indonesia atau Inggris.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam bahasa Indonesia dan bahasa Inggris, posisi kata di awal kalimat hampir selalu menentukan siapa pelaku aksi tersebut. Contoh: kalimat 'Kucing mengejar tikus' sangat berbeda artinya dengan 'Tikus mengejar kucing'. Siapa pun yang disebut pertama dianggap sebagai pelaku."
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Keajaiban Bahasa Arab: Bunyi Akhiran Mengalahkan Posisi!",
                  "text": "Dalam Bahasa Arab, posisi kata BISA DIACAK ke mana saja. Pelaku (Rafa') dan Detail/Objek (Nasb) TIDAK ditentukan oleh siapa yang berdiri di depan, melainkan ditentukan secara mutlak oleh BUNYI HARAKAT DI AKHIR KATA!"
                },
                {
                  "type": "comparison_table",
                  "title": "Eksperimen 3 Susunan Kalimat yang Sama",
                  "headers": [
                    "Kalimat Bahasa Arab",
                    "Analisis Harakat Akhir",
                    "Status",
                    "Terjemahan yang Benar"
                  ],
                  "rows": [
                    [
                      "سَاعَدَ الْمُدَرِّسُ الطَّالِبَ (Saa'ada al-mudarrisu at-thaaliba)",
                      "Mudarris-U (akhiran -u), Thaalib-A (akhiran -a)",
                      "Guru = Rafa' (Pelaku), Murid = Nasb (Objek)",
                      "\"Guru membantu murid.\""
                    ],
                    [
                      "سَاعَدَ الْمُدَرِّسَ الطَّالِبُ (Saa'ada al-mudarrisa at-thaalibu)",
                      "Mudarris-A (akhiran -a), Thaalib-U (akhiran -u)",
                      "Murid = Rafa' (Pelaku), Guru = Nasb (Objek)",
                      "\"Murid membantu guru!\" (Meskipun kata guru disebut lebih dulu!)"
                    ],
                    [
                      "الطَّالِبَ سَاعَدَ الْمُدَرِّسُ (At-thaaliba saa'ada al-mudarrisu)",
                      "Thaalib-A (akhiran -a di depan), Mudarris-U (akhiran -u)",
                      "Guru = Rafa' (Pelaku), Murid = Nasb (Objek)",
                      "\"Hanya kepada murid itulah, guru memberikan bantuan.\""
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Analogi Master Yoda & Rahasia Balaghah",
                  "points": [
                    {
                      "label": "Gaya Bahasa Yoda (Star Wars)",
                      "desc": "Yoda sering membalik susunan kalimat: 'Strong the force is' (padahal normalnya: 'The force is strong') atau 'Hungry I am'."
                    },
                    {
                      "label": "Tujuan Pemindahan Kata dalam Al-Qur'an",
                      "desc": "Ketika Allah memindahkan objek (Nasb) ke depan mendahului pelaku atau kata kerjanya (seperti contoh ke-3 di atas), ada rahasia penekanan makna khusus (Eksklusivitas / Ikhtishash). Misal: 'Iyyaka na'budu' (Hanya kepada-Mu lah kami menyembah)."
                    },
                    {
                      "label": "Kesimpulan Penting",
                      "desc": "Jangan pernah menerjemahkan bahasa Arab hanya berdasarkan urutan kata. SELALU periksa harakat akhir untuk menemukan Rafa' (siapa yang melakukan) dan Nasb (siapa yang dikenai)!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d2_urutan_1",
                  "question": "Dalam kalimat: 'أَكَلَ التُّفَّاحَةَ زَيْدٌ' (Akala at-tuffaahata Zaydun), siapakah yang memakan apel?",
                  "options": [
                    {
                      "text": "Apel yang memakan Zaid, karena apel disebut lebih dulu",
                      "isCorrect": false
                    },
                    {
                      "text": "Zaid yang memakan apel, karena kata Zaydun berakhiran bunyi -un (Rafa')",
                      "isCorrect": true
                    },
                    {
                      "text": "Tidak bisa diketahui karena susunan katanya terbalik",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Tuffaahat-A berakhiran fathah/bunyi A (Nasb = objek yang dimakan), sedangkan Zayd-UN berakhiran tanwin dhammah/bunyi U (Rafa' = pelaku). Jadi Zaid lah yang memakan apel, meskipun ia diletakkan di akhir kalimat!"
                }
              ]
            },
            {
              "id": "studi-kasus-quran",
              "number": "02",
              "title": "Studi Kasus Al-Qur'an & Bahaya Salah Harakat",
              "icon": "fa-scale-balanced",
              "readTime": "10 menit",
              "summary": "Melihat bagaimana satu harakat menentukan jalan cerita sejarah dan akidah dalam Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mengapa ketelitian membaca harakat begitu ditekankan oleh para ulama tajwid dan qira'at? Mari kita bedah beberapa ayat Al-Qur'an di mana satu harakat menentukan siapa pelaku dan siapa yang dikenai perbuatan."
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "1. Kisah Dawud vs Jalut (Surah Al-Baqarah: 251)",
                      "role": "SIAPA MEMBUNUH SIAPA?",
                      "badgeColor": "emerald",
                      "arabicLabel": "قَتَلَ دَاوُودُ جَالُوتَ",
                      "definition": "Qatala Daawuudu Jaaluuta -> Siapakah yang membunuh dan siapa yang terbunuh?",
                      "howToFind": "Daawuud-U (Dhammah = Rafa' = Pelaku) vs Jaaluut-A (Fathah = Nasb = Objek).",
                      "examples": [
                        {
                          "sentence": "Daawuud berakhiran -u -> Pelaku pembunuhan (Nabi Dawud).",
                          "doer": "Nabi Dawud"
                        },
                        {
                          "sentence": "Jaaluut berakhiran -a -> Yang dibunuh (Raja Jalut / Goliath).",
                          "detail": "Jalut (Objek)"
                        },
                        {
                          "sentence": "Jika dibaca 'Qatala Daawuuda Jaaluutu', artinya terbalik: Jalut membunuh Nabi Dawud! Sejarah Al-Qur'an berubah total!",
                          "reason": "Pentingnya Harakat"
                        }
                      ]
                    },
                    {
                      "name": "2. Ujian Nabi Ibrahim (Surah Al-Baqarah: 124)",
                      "role": "SIAPA MENGUJI SIAPA?",
                      "badgeColor": "gold",
                      "arabicLabel": "وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ",
                      "definition": "Wa idzibtalaa Ibraahiima Rabbu-hu -> Siapakah yang menguji?",
                      "howToFind": "Ibraahiim-A (Fathah = Nasb = Objek yang diuji) vs Rabbu-hu (Dhammah = Rafa' = Pelaku yang menguji).",
                      "examples": [
                        {
                          "sentence": "Kata Ibraahiim berakhiran -a -> Beliau adalah yang diuji (Nasb).",
                          "detail": "Nabi Ibrahim"
                        },
                        {
                          "sentence": "Kata Rabbu berakhiran -u -> Allah Sang Rabb adalah Yang Menguji (Rafa').",
                          "doer": "Rabb (Allah)"
                        },
                        {
                          "sentence": "Terjemahan: 'Dan ingatlah ketika Tuhannya menguji Ibrahim...'",
                          "reason": "Meskipun nama Ibrahim disebut lebih awal"
                        }
                      ]
                    },
                    {
                      "name": "3. Rasa Takut Para Ulama (Surah Fathir: 28)",
                      "role": "SIAPA YANG MERASA TAKUT?",
                      "badgeColor": "moss",
                      "arabicLabel": "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
                      "definition": "Innamaa yakhsyallaha min 'ibaadihil 'ulamaa-u -> Siapa yang takut kepada siapa?",
                      "howToFind": "Lafadz Allah-A (Fathah = Nasb = Yang ditakuti/diagungkan) vs Al-'Ulamaa-U (Dhammah = Rafa' = Pelaku yang takut).",
                      "examples": [
                        {
                          "sentence": "Lafadz Allah berakhiran -a -> Allah adalah Dzat yang diagungkan dan ditakuti.",
                          "detail": "Lafadz Allah (Nasb)"
                        },
                        {
                          "sentence": "Al-'Ulamaa-u berakhiran -u -> Para Ulama adalah pihak yang memiliki rasa takut mendalam (Rafa').",
                          "doer": "Para Ulama"
                        },
                        {
                          "sentence": "Terjemahan: 'Sesungguhnya yang paling takut kepada Allah di antara hamba-hamba-Nya adalah para ulama.'",
                          "reason": "Akidah Terjaga"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Kisah Bersejarah di Zaman Khalifah Umar bin Khattab ra",
                  "points": [
                    {
                      "label": "Kekeliruan Bacaan Seorang Badui",
                      "desc": "Di masa Khalifah Umar ra, seorang pembaca keliru membaca ayat Surah At-Taubah: 3 (أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ ۙ وَرَسُولُهُ). Kata 'wa Rasuulu-hu' (Rafa' -> 'dan Rasul-Nya pun berlepas diri') dibaca keliru menjadi 'wa Rasuuli-hi' (Jar)."
                    },
                    {
                      "label": "Dampak Fatal Kekeliruan",
                      "desc": "Jika dibaca Jar (-i), artinya menjadi: 'Allah berlepas diri dari orang-orang musyrik DAN Allah juga berlepas diri dari Rasul-Nya!' Seorang Badui yang mendengar terkejut dan berkata: 'Jika Allah berlepas diri dari Rasul-Nya, aku pun berlepas diri darinya!'"
                    },
                    {
                      "label": "Keputusan Tegas Khalifah Umar ra",
                      "desc": "Mendengar hal itu, Umar ra meluruskan bacaannya (Rasuulu-hu) dan mengeluarkan instruksi tegas: 'Jangan sekali-kali mengajarkan Al-Qur'an kepada orang lain kecuali mereka yang memahami kaidah tata bahasa Arab!'"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d2_kasus_1",
                  "question": "Pada ayat: 'وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ', mengapa kita tahu bahwa Allah yang menguji Nabi Ibrahim, bukan sebaliknya?",
                  "options": [
                    {
                      "text": "Karena nama Nabi Ibrahim disebutkan di awal",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena kata Rabbu berakhiran harakat dhammah (U = Rafa'/Pelaku) dan Ibrahima berakhiran fathah (A = Nasb/Objek)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena kata ibtalaa selalu mengartikan Allah yang menguji",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Harakat akhir kata Rabbu adalah -u (Dhammah = Rafa'/Pelaku), sedangkan Ibrahima adalah -a (Fathah = Nasb/Objek). Maka secara gramatikal, Sang Rabb lah yang menguji Nabi Ibrahim."
                }
              ]
            },
            {
              "id": "properti-ism-jumlah",
              "number": "03",
              "title": "4 Properti Ism & 3 Ragam Jumlah (1, 2, 3+)",
              "icon": "fa-list-check",
              "readTime": "10 menit",
              "summary": "Mengenal 4 sifat bawaan setiap Ism dan keistimewaan sistem 3 jumlah dalam bahasa Arab.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk bisa memahami sebuah kata Ism secara paripurna dalam Al-Qur'an, para ulama bahasa merumuskan bahwa setiap Ism memiliki 4 Properti Dasar yang tidak bisa dipisahkan:"
                },
                {
                  "type": "card_grid",
                  "title": "4 Properti Dasar Setiap Ism",
                  "items": [
                    {
                      "icon": "fa-tags",
                      "title": "1. Status (حَالَة)",
                      "desc": "Peran kata dalam kalimat: Rafa' (Pelaku), Nasb (Detail Fi'l), atau Jar (Pemilik / setelah kata milik)."
                    },
                    {
                      "icon": "fa-calculator",
                      "title": "2. Number / Jumlah (عَدَد)",
                      "desc": "Berapa banyak jumlah yang dibicarakan: Tunggal (1), Ganda (2), atau Jamak (3 atau lebih)."
                    },
                    {
                      "icon": "fa-venus-mars",
                      "title": "3. Gender / Jenis (جِنْس)",
                      "desc": "Apakah kata tersebut Maskulin (Mudzakkar) atau Feminin (Muannats)."
                    },
                    {
                      "icon": "fa-bullseye",
                      "title": "4. Type / Kejelasan (تَعْيِين)",
                      "desc": "Apakah kata tersebut Spesifik/Tertentu (Makrifat) atau Umum (Nakirah)."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Keunikan Jumlah dalam Bahasa Arab: Sistem 3 Wadah (1, 2, 3+)",
                  "items": [
                    {
                      "type": "1. Tunggal / Mufrad (مُفْرَد)",
                      "examples": "Menunjukkan tepat 1 orang atau 1 benda. Ditandai dengan Bunyi Akhiran (Ending Sounds: -un/-u, -an/-a, -in/-i)."
                    },
                    {
                      "type": "2. Ganda / Mutsanna (مُثَنَّى)",
                      "examples": "Keunikan bahasa Arab! Memiliki bentuk khusus untuk tepat 2 orang/benda. Tidak perlu kata tambahan 'dua', cukup akhiran -aani atau -ayni."
                    },
                    {
                      "type": "3. Jamak / Jam' (جَمْع)",
                      "examples": "Dalam bahasa Arab, jamak dimulai dari 3 atau lebih (3+). Berbeda dengan bahasa Inggris/Indonesia di mana angka 2 sudah dianggap jamak."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Perbedaan Mendasar: Bunyi Akhiran vs Kombinasi Akhiran",
                  "text": "Tunggal (1) menggunakan BUNYI AKHIRAN (Ending Sounds: u, a, i). Sedangkan Ganda (2) dan Jamak (3+) menggunakan KOMBINASI AKHIRAN (Ending Combinations: kumpulan huruf tambahan di ujung kata seperti -aani, -ayni, -oona, -eena, -aatun, -aatin)!"
                },
                {
                  "type": "quiz",
                  "id": "q_d2_jumlah_1",
                  "question": "Dalam tata bahasa Arab, kapankah sebuah kata mulai dianggap sebagai 'Jamak'?",
                  "options": [
                    {
                      "text": "Mulai dari jumlah 2 atau lebih",
                      "isCorrect": false
                    },
                    {
                      "text": "Mulai dari jumlah 3 atau lebih (3+)",
                      "isCorrect": true
                    },
                    {
                      "text": "Mulai dari jumlah 10 atau lebih",
                      "isCorrect": false
                    },
                    {
                      "text": "Hanya jika jumlahnya tidak terhingga",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam bahasa Arab, angka 1 adalah Tunggal (Mufrad), angka 2 memiliki wadah tersendiri yaitu Ganda (Mutsanna), dan Jamak (Jam') baru dimulai dari angka 3 ke atas."
                }
              ]
            },
            {
              "id": "bagan-muslimun-maskulin",
              "number": "04",
              "title": "Bagan Muslimun (Maskulin) & Kaidah Emas",
              "icon": "fa-table-cells",
              "readTime": "12 menit",
              "summary": "Menguasai bagan 9 kotak maskulin dan rumus penting: cari kombinasi terlebih dahulu.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Inilah bagan paling legendaris dalam kurikulum Dream: **The Muslim Chart (Bagan Muslimun)**. Bagan ini memetakan 3 Status (Rafa', Nasb, Jar) bersilang dengan 3 Jumlah (Tunggal, Ganda, Jamak) untuk bentuk Maskulin (Mudzakkar)."
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan 9 Bentuk Muslimun (Maskulin)",
                  "headers": [
                    "Status",
                    "Tunggal (1) — Bunyi",
                    "Ganda (2) — Kombinasi",
                    "Jamak (3+) — Kombinasi (Manusia)"
                  ],
                  "rows": [
                    [
                      "Rafa' (Pelaku)",
                      "مُسْلِمٌ (Muslimun) [1R]",
                      "مُسْلِمَانِ (Muslimaani) [2R]",
                      "مُسْلِمُونَ (Muslimoona) [3R]"
                    ],
                    [
                      "Nasb (Detail Fi'l)",
                      "مُسْلِمًا (Musliman) [1N]",
                      "مُسْلِمَيْنِ (Muslimayni) [2N]",
                      "مُسْلِمِينَ (Muslimeena) [3N]"
                    ],
                    [
                      "Jar (Pemilik)",
                      "مُسْلِمٍ (Muslimin) [1J]",
                      "مُسْلِمَيْنِ (Muslimayni) [2J]",
                      "مُسْلِمِينَ (Muslimeena) [3J]"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "⚔️ Kaidah Emas: Cari Kombinasi Akhiran Terlebih Dahulu!",
                  "text": "Ketika melihat kata Arab di Al-Qur'an, JANGAN langsung melihat harakat huruf terakhirnya! Cari tahu dulu: Apakah ada kombinasi akhiran (-aani, -ayni, -oona, -eena)? Jika ada, abaikan bunyi harakat huruf terakhir karena statusnya ditentukan oleh paket kombinasinya!"
                },
                {
                  "type": "deep_dive",
                  "title": "Perhatikan Kesamaan Bentuk (Nasb & Jar Kembar pada Kombinasi!)",
                  "items": [
                    {
                      "type": "Pada Bentuk Ganda (2)",
                      "examples": "Bentuk 2 Nasb dan 2 Jar adalah SAMA PERSIS: مُسْلِمَيْنِ (Muslimayni). Kita menyebutnya '2NJ'."
                    },
                    {
                      "type": "Pada Bentuk Jamak Maskulin (3+)",
                      "examples": "Bentuk 3 Nasb dan 3 Jar juga SAMA PERSIS: مُسْلِمِينَ (Muslimeena). Kita menyebutnya '3NJ'."
                    },
                    {
                      "type": "Khusus Makhluk Berakal (Dzawil 'Uqul)",
                      "examples": "Akhiran -oona dan -eena HANYA digunakan untuk manusia atau makhluk berakal (orang beriman, orang kafir, orang munafik, para nabi, malaikat)."
                    }
                  ]
                },
                {
                  "type": "oral_drill",
                  "title": "Latihan Lisan 9 Kotak Maskulin",
                  "instruction": "Latih lidahmu membaca 9 bentuk ini secara vertikal (kolom per kolom) 3 kali berturut-turut:",
                  "steps": [
                    {
                      "label": "Kolom 1 (Tunggal)",
                      "word": "مُسْلِمٌ ➔ مُسْلِمًا ➔ مُسْلِمٍ",
                      "sound": "Muslimun, Musliman, Muslimin"
                    },
                    {
                      "label": "Kolom 2 (Ganda)",
                      "word": "مُسْلِمَانِ ➔ مُسْلِمَيْنِ ➔ مُسْلِمَيْنِ",
                      "sound": "Muslimaani, Muslimayni, Muslimayni"
                    },
                    {
                      "label": "Kolom 3 (Jamak)",
                      "word": "مُسْلِمُونَ ➔ مُسْلِمِينَ ➔ مُسْلِمِينَ",
                      "sound": "Muslimoona, Muslimeena, Muslimeena"
                    }
                  ],
                  "drillWord": "مُؤْمِنٌ (Mu'minun) -> مُؤْمِنَانِ (Mu'minaani) -> مُؤْمِنُونَ (Mu'minoona)"
                },
                {
                  "type": "quiz",
                  "id": "q_d2_chart_1",
                  "question": "Kata 'الْمُؤْمِنُونَ' (Al-Mu'minoona) berstatus dan berjumlah...",
                  "options": [
                    {
                      "text": "1 Rafa' (Tunggal)",
                      "isCorrect": false
                    },
                    {
                      "text": "3 Rafa' (Jamak Maskulin, Status Rafa')",
                      "isCorrect": true
                    },
                    {
                      "text": "3 Nasb/Jar (Jamak)",
                      "isCorrect": false
                    },
                    {
                      "text": "2 Rafa' (Ganda)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata Al-Mu'minoona memiliki kombinasi akhiran '-oona', yang setara dengan Muslimoona pada bagan. Maka statusnya adalah 3R (Jamak Maskulin, Status Rafa')."
                },
                {
                  "type": "quiz",
                  "id": "q_d2_chart_2",
                  "question": "Kata 'الْبَحْرَيْنِ' (Al-Bahrayni - Dua Lautan) berstatus dan berjumlah...",
                  "options": [
                    {
                      "text": "2 Rafa'",
                      "isCorrect": false
                    },
                    {
                      "text": "2 Nasb atau Jar (Ganda / Mutsanna)",
                      "isCorrect": true
                    },
                    {
                      "text": "3 Nasb atau Jar (Jamak)",
                      "isCorrect": false
                    },
                    {
                      "text": "1 Jar karena berakhiran kasrah di huruf nun",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Ingat Kaidah Emas: Cari kombinasi dulu! Al-Bahrayni berakhiran '-ayni' (setara Muslimayni), yaitu bentuk Ganda (2) berstatus Nasb atau Jar (2NJ). Jangan terkecoh oleh harakat kasrah di huruf nun!"
                }
              ]
            },
            {
              "id": "tadabbur-alamina",
              "number": "05",
              "title": "Tadabbur: Rahasia Kata 'Al-'Alamina' (الْعَالَمِينَ)",
              "icon": "fa-globe",
              "readTime": "8 menit",
              "summary": "Mengapa Allah memilih kata Al-'Alamina di Surah Al-Fatihah, bukan kata jamak biasa?",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di akhir Surah Al-Fatihah ayat 2, kita membaca: الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (Segala puji bagi Allah, Rabb semesta alam). Mari kita renungi keajaiban linguistik di balik kata الْعَالَمِينَ!"
                },
                {
                  "type": "case_study",
                  "title": "Mengapa Memakai Akhiran '-eena', Bukan 'Awaalim'?",
                  "points": [
                    {
                      "label": "Kaidah Akhiran -eena",
                      "desc": "Kita sudah belajar bahwa akhiran '-oona' dan '-eena' KHUSUS untuk makhluk yang memiliki akal dan kecerdasan (Dzawil 'Uqul / manusia)."
                    },
                    {
                      "label": "Kata Jamak Biasa untuk Alam",
                      "desc": "Dalam bahasa Arab, jamak benda mati/alam semesta adalah عَوَالِم (Awaalim). Tetapi Allah TIDAK menggunakan Awaalim, melainkan الْعَالَمِينَ (Al-'Alamina) dengan akhiran -eena!"
                    },
                    {
                      "label": "Makna Mendalam: Dunia-Dunia Manusia (Worlds of People)",
                      "desc": "Surah Al-Fatihah adalah surah petunjuk untuk manusia. Maka Al-'Alamina di sini bukan sekadar planet atau galaksi mati, melainkan 'dunia-dunia manusia' — ragam bangsa, budaya, profesi, generasi, dan peradaban di seluruh muka bumi."
                    }
                  ]
                },
                {
                  "type": "quote",
                  "text": "Al-Qur'an adalah petunjuk yang tidak akan pernah kedaluwarsa. Rabb yang memelihara dan mendidik generasi manusia 1400 tahun lalu di padang pasir adalah Rabb yang sama yang membimbing para dokter di rumah sakit modern dan programmer di era digital saat ini.",
                  "author": "Ustaz Nouman Ali Khan"
                },
                {
                  "type": "quiz",
                  "id": "q_d2_alamin_1",
                  "question": "Berdasarkan kaidah kombinasi akhiran, kata 'الْعَالَمِينَ' (Al-'Alamina) berstatus...",
                  "options": [
                    {
                      "text": "Rafa'",
                      "isCorrect": false
                    },
                    {
                      "text": "Nasb atau Jar (dalam ayat ini berstatus Jar karena terletak setelah kata Rabb / milik)",
                      "isCorrect": true
                    },
                    {
                      "text": "Harf",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Al-'Alamina berakhiran kombinasi '-eena', yang berstatus Nasb atau Jar (3NJ). Dalam ayat ini posisinya adalah Jar karena berkedudukan sebagai mudhaf ilaih (Tuhan MILIK semesta alam manusia)."
                }
              ]
            },
            {
              "id": "bagan-muslimatun-feminin",
              "number": "06",
              "title": "Bagan Muslimatun (Feminin) & Lab Praktik Day 2",
              "icon": "fa-venus",
              "readTime": "15 menit",
              "summary": "Menguasai 9 bentuk feminin dan praktik langsung membedakan 18 bentuk Ism pada ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setelah menguasai 9 kotak maskulin, sekarang kita lengkapi dengan 9 kotak Feminin (Muannats). Ciri utama bentuk feminin adalah adanya huruf **Ta Marbuthah (ة)** — yang diibaratkan sebagai 'hijab' yang disematkan pada kata tersebut."
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan 9 Bentuk Muslimatun (Feminin)",
                  "headers": [
                    "Status",
                    "Tunggal (1F)",
                    "Ganda (2F)",
                    "Jamak (3+F) — Kombinasi"
                  ],
                  "rows": [
                    [
                      "Rafa' (Pelaku)",
                      "مُسْلِمَةٌ (Muslimatun) [1RF]",
                      "مُسْلِمَتَانِ (Muslimataani) [2RF]",
                      "مُسْلِمَاتٌ (Muslimaatun) [3RF]"
                    ],
                    [
                      "Nasb (Detail Fi'l)",
                      "مُسْلِمَةً (Muslimatan) [1NF]",
                      "مُسْلِمَتَيْنِ (Muslimatayni) [2NF]",
                      "مُسْلِمَاتٍ (Muslimaatin) [3NF]"
                    ],
                    [
                      "Jar (Pemilik)",
                      "مُسْلِمَةٍ (Muslimatin) [1JF]",
                      "مُسْلِمَتَيْنِ (Muslimatayni) [2JF]",
                      "مُسْلِمَاتٍ (Muslimaatin) [3JF]"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "⚠️ Jebakan Klasik: Bedakan مُسْلِمَةٍ vs مُسْلِمَاتٍ !",
                  "text": "Perhatikan baik-baik: مُسْلِمَةٍ (Muslimatin) dengan Ta Marbuthah pendek adalah Tunggal (1 Jar). Sedangkan مُسْلِمَاتٍ (Muslimaatin) dengan ALIF PANJANG dan Ta Terbuka (ـَاتٍ) adalah Jamak Feminin berstatus Nasb atau Jar (3NJF)!"
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Status & Jumlah Day 2",
                  "subtitle": "Uji kemampuanmu mengidentifikasi Status dan Jumlah kata-kata Al-Qur'an berikut!",
                  "items": [
                    {
                      "surah": "Surah Al-Mu'minun: 1",
                      "ayahArabic": "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
                      "targetWord": "الْمُؤْمِنُونَ",
                      "transliteration": "Al-Mu'minoona",
                      "meaning": "Orang-orang beriman",
                      "correctStatus": "rafa",
                      "soundEnd": "Kombinasi Jamak Maskulin ( -oona )",
                      "explanation": "Berakhiran kombinasi '-oona', setara dengan Muslimoona -> Status: 3R (Jamak Rafa')."
                    },
                    {
                      "surah": "Surah Ar-Rahman: 19",
                      "ayahArabic": "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ",
                      "targetWord": "الْبَحْرَيْنِ",
                      "transliteration": "Al-Bahrayni",
                      "meaning": "Dua lautan",
                      "correctStatus": "nasb",
                      "soundEnd": "Kombinasi Ganda ( -ayni )",
                      "explanation": "Berakhiran kombinasi '-ayni', setara dengan Muslimayni -> Status: 2NJ (Ganda Nasb/Jar)."
                    },
                    {
                      "surah": "Surah Ar-Rahman: 46",
                      "ayahArabic": "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ",
                      "targetWord": "جَنَّتَانِ",
                      "transliteration": "Jannataani",
                      "meaning": "Dua surga",
                      "correctStatus": "rafa",
                      "soundEnd": "Kombinasi Ganda ( -aani )",
                      "explanation": "Berakhiran kombinasi '-aani', setara dengan Muslimataani -> Status: 2RF (Ganda Feminin Rafa')."
                    },
                    {
                      "surah": "Surah Al-Baqarah: 26",
                      "ayahArabic": "وَمَا يُضِلُّ بِهِ إِلَّا الْفَاسِقِينَ",
                      "targetWord": "الْفَاسِقِينَ",
                      "transliteration": "Al-Faasiqeena",
                      "meaning": "Orang-orang fasik",
                      "correctStatus": "nasb",
                      "soundEnd": "Kombinasi Jamak Maskulin ( -eena )",
                      "explanation": "Berakhiran kombinasi '-eena', setara dengan Muslimeena -> Status: 3NJ (Jamak Nasb/Jar)."
                    },
                    {
                      "surah": "Surah Al-Kahf: 46",
                      "ayahArabic": "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا",
                      "targetWord": "الْبَنُونَ",
                      "transliteration": "Al-Banoona",
                      "meaning": "Anak-anak lelaki",
                      "correctStatus": "rafa",
                      "soundEnd": "Kombinasi Jamak ( -oona )",
                      "explanation": "Berakhiran kombinasi '-oona', setara dengan Muslimoona -> Status: 3R (Jamak Rafa')."
                    },
                    {
                      "surah": "Surah At-Tahrim: 5",
                      "ayahArabic": "عَسَىٰ رَبُّهُ إِن طَلَّقَكُنَّ أَن يُبْدِلَهُ أَزْوَاجًا خَيْرًا مِّنكُنَّ مُسْلِمَاتٍ",
                      "targetWord": "مُسْلِمَاتٍ",
                      "transliteration": "Muslimaatin",
                      "meaning": "Wanita-wanita muslimah",
                      "correctStatus": "nasb",
                      "soundEnd": "Kombinasi Jamak Feminin ( -aatin )",
                      "explanation": "Berakhiran kombinasi alif + ta kasrah tanwin ( -aatin ), setara dengan Muslimaatin -> Status: 3NJF (Jamak Feminin Nasb/Jar)."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Capaian Hari ke-2",
                  "points": [
                    "Memahami bahwa dalam Bahasa Arab, bunyi harakat akhir (I'rab) lah yang menentukan pelaku dan objek, bukan urutan kata.",
                    "Mengenal 4 Properti Ism: Status, Number (1, 2, 3+), Gender (Maskulin/Feminin), dan Type.",
                    "Membedakan Bunyi Akhiran (Ending Sounds pada Tunggal) dan Kombinasi Akhiran (Ending Combinations pada Ganda dan Jamak).",
                    "Menguasai Bagan 18 Bentuk Muslimun lengkap (9 Maskulin + 9 Feminin) dan rumus 'Cari Kombinasi Dulu'."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 2",
              "url": "https://www.youtube.com/live/UjKnWbx8uyg?si=Oj0bX-MCNP1PKI85"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 2",
              "url": "https://drive.google.com/file/d/1Zqwk2XG-rsu862eO0BXlt0KBL8SAOpkc/view?usp=sharing"
            }
          ]
        },
        {
          "day": 3,
          "title": "Hari 3: Status Berat vs Ringan & Fleksibilitas Ism",
          "videoUrl": "https://www.youtube.com/live/SBoEuBZLw5k?si=GBARGIITXuHjdB9J",
          "pdfUrl": "https://drive.google.com/file/d/1ACEoSgUPjIv_KGpHbSBA8uv0-Yrb9EvH/view?usp=sharing",
          "summary": "Menuntaskan pembahasan Status Ism: memahami konsep Status Berat vs Ringan (Tanwin & Nun Ekstra), 3 tingkat Fleksibilitas kata (Muhammad, Yusuf, Musa), serta tadabbur sejarah kata Madinah vs Yatsrib.",
          "lessons": [
            {
              "id": "berat-vs-ringan",
              "number": "01",
              "title": "Status Berat vs Ringan (Heavy vs Light)",
              "icon": "fa-feather-pointed",
              "readTime": "10 menit",
              "summary": "Memahami konsep kata berat (asli/default) dan kata yang diringankan dengan membuang tanwin atau huruf nun ekstra.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Secara alami, seluruh kata dalam Bahasa Arab berstatus **BERAT (Heavy)**. Keberatan ini bukan beban fisik, melainkan adanya bunyi 'N ekstra' di ujung kata, baik berupa Tanwin (ـٌ, ـً, ـٍ) maupun huruf Nun pada kombinasi ganda dan jamak."
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Bagaimana Cara Membuat Sebuah Kata Menjadi Ringan (Light)?",
                  "text": "1. Jika kata berakhiran Tanwin: Ubah tanwin ganda menjadi harakat tunggal (Muslimun ➔ Muslimu, Musliman ➔ Muslima, Muslimin ➔ Muslimi).\n2. Jika kata memiliki kombinasi ganda/jamak: Buang huruf NUN ekstra di ujungnya (Muslimaani ➔ Muslimaa, Muslimoona ➔ Muslimoo, Muslimeena ➔ Muslimee)!"
                },
                {
                  "type": "comparison_table",
                  "title": "Tabel Perbandingan Versi Berat vs Versi Ringan",
                  "headers": [
                    "Bentuk Kata",
                    "Versi Berat (Heavy / Default)",
                    "Versi Ringan (Light)",
                    "Catatan Kaidah"
                  ],
                  "rows": [
                    [
                      "Tunggal Rafa' (1R)",
                      "مُسْلِمٌ (Muslimun)",
                      "مُسْلِمُ (Muslimu)",
                      "Tanwin dhammah diubah jadi dhammah tunggal"
                    ],
                    [
                      "Tunggal Nasb (1N)",
                      "مُسْلِمًا (Musliman)",
                      "مُسْلِمَ (Muslima)",
                      "Tanwin fathah diubah jadi fathah, huruf alif bantuan ikut hilang!"
                    ],
                    [
                      "Tunggal Jar (1J)",
                      "مُسْلِمٍ (Muslimin)",
                      "مُسْلِمِ (Muslimi)",
                      "Tanwin kasrah diubah jadi kasrah tunggal"
                    ],
                    [
                      "Ganda Rafa' (2R)",
                      "مُسْلِمَانِ (Muslimaani)",
                      "مُسْلِمَا (Muslimaa)",
                      "Huruf Nun dibuang, huruf Alif tetap dipertahankan"
                    ],
                    [
                      "Ganda Nasb/Jar (2NJ)",
                      "مُسْلِمَيْنِ (Muslimayni)",
                      "مُسْلِمَيْ (Muslimay)",
                      "Huruf Nun dibuang, huruf Ya sukun tetap dipertahankan"
                    ],
                    [
                      "Jamak Rafa' (3R)",
                      "مُسْلِمُونَ (Muslimoona)",
                      "مُسْلِمُو (Muslimoo)",
                      "Huruf Nun dibuang, huruf Waw sukun tetap dipertahankan"
                    ],
                    [
                      "Jamak Nasb/Jar (3NJ)",
                      "مُسْلِمِينَ (Muslimeena)",
                      "مُسْلِمِي (Muslimee)",
                      "Huruf Nun dibuang, huruf Ya sukun tetap dipertahankan"
                    ],
                    [
                      "Jamak Feminin (3RF)",
                      "مُسْلِمَاتٌ (Muslimaatun)",
                      "مُسْلِمَاتُ (Muslimaatu)",
                      "Huruf Ta TIDAK BOLEH dibuang, hanya tanwinnya yang dijadikan tunggal"
                    ],
                    [
                      "Jamak Feminin (3NJF)",
                      "مُسْلِمَاتٍ (Muslimaatin)",
                      "مُسْلِمَاتِ (Muslimaati)",
                      "Huruf Ta tetap ada, tanwin kasrah diubah jadi kasrah tunggal"
                    ]
                  ]
                },
                {
                  "type": "quote",
                  "text": "Kata dalam bahasa Arab ibarat orang normal yang berbadan berat. Jika kamu melihat sebuah kata tiba-tiba 'berdiet' menjadi ringan, pasti ada alasan khusus di baliknya! Hanya ada 4 alasan dalam tata bahasa Arab yang membuat sebuah kata menjadi ringan.",
                  "author": "Ustaz Nouman Ali Khan"
                },
                {
                  "type": "quiz",
                  "id": "q_d3_ringan_1",
                  "question": "Bentuk ringan (light) dari kata 'كِتَابًا' (Kitaaban - 1 Nasb) adalah...",
                  "options": [
                    {
                      "text": "كِتَابَا (Kitaabaa - dengan huruf alif tetap ada)",
                      "isCorrect": false
                    },
                    {
                      "text": "كِتَابَ (Kitaaba - tanpa alif tambahan)",
                      "isCorrect": true
                    },
                    {
                      "text": "كِتَابِ (Kitaabi)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Huruf alif pada 'كِتَابًا' hanya berfungsi sebagai sandaran tanwin fathah. Ketika dijadikan ringan (fathah tunggal), alif tersebut otomatis dihilangkan menjadi 'كِتَابَ'."
                }
              ]
            },
            {
              "id": "alasan-kata-ringan-alif-lam",
              "number": "02",
              "title": "Contoh Nyata Kata Ringan & Aturan Alif Lam (ال)",
              "icon": "fa-wand-magic-sparkles",
              "readTime": "8 menit",
              "summary": "Melihat contoh kata ringan dalam kalimat sehari-hari dan bagaimana Alif Lam membatalkan pertanyaan berat vs ringan.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Pernahkah kamu memperhatikan frasa yang sering kita ucapkan sehari-hari? Banyak di antaranya yang menggunakan bentuk kata ringan:"
                },
                {
                  "type": "deep_dive",
                  "title": "Contoh Kata Ringan yang Sangat Akrab di Telinga Kita",
                  "items": [
                    {
                      "type": "1. Kalimat Syahadat: 'لَا إِلَٰهَ إِلَّا اللَّهُ'",
                      "examples": "Kata 'إِلَٰهَ' (Ilaaha) adalah bentuk RINGAN dari 'إِلَٰهٌ' (Ilaahun). Mengapa ringan? Karena didahului oleh La Nafi lil Jins (Alasan #1)."
                    },
                    {
                      "type": "2. Sebutan Rasulullah: 'رَسُولُ اللَّهِ'",
                      "examples": "Kata 'رَسُولُ' (Rasuulu) adalah bentuk RINGAN dari 'رَسُولٌ' (Rasuulun). Mengapa ringan? Karena berkedudukan sebagai Mudhaf / Pemilik (Alasan #2)."
                    },
                    {
                      "type": "3. Panggilan: 'يَا رَبِّ' / 'يَا أَهْلَ'",
                      "examples": "Kata yang dipanggil setelah huruf nida 'Yaa' menjadi ringan (Alasan #3)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Aturan Emas: Jika Ada Alif Lam (ال), Abaikan Pertanyaan Berat vs Ringan!",
                  "text": "Jika sebuah kata diawali dengan ALIF LAM (ال), seperti 'الْكِتَابُ' atau 'الْمُسْلِمُونَ', maka pertanyaan 'Apakah kata ini berat atau ringan?' menjadi TIDAK BERLAKU (Not Applicable / N/A). Alif Lam dan Tanwin adalah musuh bebuyutan yang tidak pernah bisa bersatu dalam satu kata!"
                },
                {
                  "type": "quiz",
                  "id": "q_d3_al_1",
                  "question": "Apakah kata 'الْمُعَلِّمُونَ' (Al-Mu'allimoona) berstatus berat atau ringan?",
                  "options": [
                    {
                      "text": "Berat karena ada huruf nun di akhir",
                      "isCorrect": false
                    },
                    {
                      "text": "Ringan karena ada Alif Lam",
                      "isCorrect": false
                    },
                    {
                      "text": "Tidak Berlaku (N/A) karena kata tersebut diawali dengan Alif Lam (ال)",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "Kata yang memiliki Alif Lam (ال) berada di luar kategori pertanyaan berat vs ringan (N/A), karena Alif Lam memiliki hukum tersendiri dalam tata bahasa."
                }
              ]
            },
            {
              "id": "fleksibilitas-ism",
              "number": "03",
              "title": "Fleksibilitas Status Ism (Flexibility of Status)",
              "icon": "fa-layer-group",
              "readTime": "12 menit",
              "summary": "Mengenal 3 kelompok kelenturan kata: Fleksibel Penuh, Fleksibel Sebagian, dan Tidak Fleksibel sama sekali.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Tidak semua kata dalam bahasa Arab bersedia berubah harakat secara leluasa saat berpindah status dari Rafa', Nasb, ke Jar. Para ulama membagi kelenturan (fleksibilitas) Ism menjadi **3 Golongan Besar**:"
                },
                {
                  "type": "card_grid",
                  "title": "3 Golongan Fleksibilitas Ism",
                  "items": [
                    {
                      "icon": "fa-circle-nodes",
                      "title": "1. Fleksibel Penuh (مُعْرَب)",
                      "desc": "Bisa berubah ke 3 bunyi harakat lengkap (u, a, i / un, an, in). Mencakup mayoritas kata Arab asli dan benda umum. Representasi: Nabi Muhammad ﷺ."
                    },
                    {
                      "icon": "fa-sliders",
                      "title": "2. Fleksibel Sebagian (غَيْر مُنْصَرِف)",
                      "desc": "Hanya bisa berubah ke 2 bunyi: Rafa' = -u, Nasb & Jar = -a (tidak boleh tanwin dan tidak boleh kasrah). Mencakup nama Non-Arab dan Nama Tempat. Representasi: Nabi Yusuf AS."
                    },
                    {
                      "icon": "fa-lock",
                      "title": "3. Tidak Fleksibel / Kaku (مَبْنِي)",
                      "desc": "Bentuknya terkunci mati dan sama persis di ketiga status. Berakhiran huruf Alif / Alif Maqshurah. Representasi: Nabi Musa AS."
                    }
                  ]
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan Perbandingan 3 Tokoh Representasi Fleksibilitas",
                  "headers": [
                    "Tingkat Fleksibilitas",
                    "Tokoh Representatif",
                    "Bentuk Rafa' (Pelaku)",
                    "Bentuk Nasb (Detail)",
                    "Bentuk Jar (Pemilik)"
                  ],
                  "rows": [
                    [
                      "1. Fleksibel Penuh (3 Bentuk Suara)",
                      "Nabi Muhammad ﷺ (Arab Asli)",
                      "مُحَمَّدٌ (Muhammadun)",
                      "مُحَمَّدًا (Muhammadan)",
                      "مُحَمَّدٍ (Muhammadin)"
                    ],
                    [
                      "2. Fleksibel Sebagian (2 Bentuk Suara)",
                      "Nabi Yusuf AS (Non-Arab / 'Ajam)",
                      "يُوسُفُ (Yusufu)",
                      "يُوسُفَ (Yusufa)",
                      "يُوسُفَ (Yusufa) [Bukan Yusufi!]"
                    ],
                    [
                      "3. Tidak Fleksibel (1 Bentuk Suara)",
                      "Nabi Musa AS (Akhiran Alif Maqshurah)",
                      "مُوسَى (Musa)",
                      "مُوسَى (Musa)",
                      "مُوسَى (Musa)"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d3_flex_1",
                  "question": "Bentuk Jar untuk nama Nabi Ibrahim AS (إِبْرَاهِيم) dalam Al-Qur'an adalah...",
                  "options": [
                    {
                      "text": "إِبْرَاهِيمٍ (Ibraahimin dengan tanwin kasrah)",
                      "isCorrect": false
                    },
                    {
                      "text": "إِبْرَاهِيمِ (Ibraahimi dengan kasrah)",
                      "isCorrect": false
                    },
                    {
                      "text": "إِبْرَاهِيمَ (Ibraahiima dengan fathah)",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "Nama Nabi Ibrahim AS adalah nama Non-Arab ('Ajam), sehingga tergolong Fleksibel Sebagian (Ghayr Munsharif). Kata fleksibel sebagian TIDAK PERNAH menerima kasrah maupun tanwin; bentuk Jar-nya tetap berakhiran fathah (Ibraahiima)."
                }
              ]
            },
            {
              "id": "nama-nabi-dan-tempat",
              "number": "04",
              "title": "Aturan Nama Non-Arab & Nama Tempat",
              "icon": "fa-map-location-dot",
              "readTime": "10 menit",
              "summary": "Membedakan 4 Nabi Arab asli vs Nabi-nabi Non-Arab, serta aturan nama kota dan wilayah.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Sebuah fakta menarik dalam Al-Qur'an: Sebagian besar nabi yang dikisahkan BUKAN berasal dari bangsa Arab, melainkan keturunan Bani Israil atau bangsa terdahulu. Oleh karena itu, hampir semua nama nabi dalam Al-Qur'an tergolong **Fleksibel Sebagian**!"
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "4 Nabi Asli Bangsa Arab (Fleksibel Penuh: -un, -an, -in)",
                      "role": "ARAB ASLI (مُعْرَب)",
                      "badgeColor": "emerald",
                      "arabicLabel": "أَرْبَعَةٌ مِنَ الْعَرَبِ",
                      "definition": "Berdasarkan hadits sahih, hanya ada 4 Nabi yang merupakan bangsa Arab asli:",
                      "howToFind": "1. Muhammad (مُحَمَّدٌ) | 2. Shalih (صَالِحٌ) | 3. Syu'aib (شُعَيْبٌ) | 4. Hud (هُودٌ).",
                      "examples": [
                        {
                          "sentence": "Bisa berharakat tanwin lengkap: Muhammadun, Muhammadan, Muhammadin.",
                          "doer": "Nabi Muhammad ﷺ"
                        },
                        {
                          "sentence": "Shalihun, Shalihan, Shalihin.",
                          "doer": "Nabi Shalih AS"
                        },
                        {
                          "sentence": "Syu'aibun, Syu'aiban, Syu'aibin.",
                          "doer": "Nabi Syu'aib AS"
                        },
                        {
                          "sentence": "Huudun, Huudan, Huudin.",
                          "doer": "Nabi Hud AS"
                        }
                      ]
                    },
                    {
                      "name": "Nabi-Nabi Non-Arab / 'Ajam (Fleksibel Sebagian: -u, -a, -a)",
                      "role": "NON-ARAB (غَيْر مُنْصَرِف)",
                      "badgeColor": "gold",
                      "arabicLabel": "أَسْمَاءُ أَعْجَمِيَّة",
                      "definition": "Semua nabi selain 4 nabi di atas adalah Non-Arab:",
                      "howToFind": "Adam, Ibrahim, Ismail, Ishaq, Ya'qub, Yusuf, Yunus, Ayyub, Daud, Sulaiman, Harun, Fir'aun (nama raja Mesir kuno).",
                      "examples": [
                        {
                          "sentence": "Rafa': Aadamu, Nasb: Aadama, Jar: Aadama.",
                          "detail": "Nabi Adam AS"
                        },
                        {
                          "sentence": "Rafa': Sulaimaanu, Nasb: Sulaimaana, Jar: Sulaimaana.",
                          "detail": "Nabi Sulaiman AS"
                        },
                        {
                          "sentence": "Rafa': Fir'awnu, Nasb: Fir'awna, Jar: Fir'awna.",
                          "detail": "Fir'aun"
                        }
                      ]
                    },
                    {
                      "name": "Nama Tempat / Kota / Negara (Fleksibel Sebagian)",
                      "role": "NAMA WILAYAH",
                      "badgeColor": "moss",
                      "arabicLabel": "أَسْمَاءُ الْبِلَادِ",
                      "definition": "Nama kota dan negara (baik di Arab maupun di luar Arab) bersifat Fleksibel Sebagian:",
                      "howToFind": "Makkah (مَكَّةُ, مَكَّةَ), Misr (مِصْرُ, مِصْرَ), Jahannam (جَهَنَّمُ, جَهَنَّمَ), Dallas, Jakarta, dsb.",
                      "examples": [
                        {
                          "sentence": "Di Makkah = 'Fii Makkata' (Bukan Fii Makkati!).",
                          "jarWord": "Makkah (Jar = -a)"
                        },
                        {
                          "sentence": "Di Jahannam = 'Fii Jahannama' (Bukan Fii Jahannami!).",
                          "jarWord": "Jahannam (Jar = -a)"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d3_nabi_1",
                  "question": "Di antara nama-nama nabi berikut, manakah yang berstatus Fleksibel Penuh (bisa berakhiran tanwin kasrah -in)?",
                  "options": [
                    {
                      "text": "Nabi Yusuf AS",
                      "isCorrect": false
                    },
                    {
                      "text": "Nabi Shalih AS",
                      "isCorrect": true
                    },
                    {
                      "text": "Nabi Daud AS",
                      "isCorrect": false
                    },
                    {
                      "text": "Nabi Ismail AS",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Nabi Shalih AS adalah salah satu dari 4 nabi asli Arab, sehingga namanya Fleksibel Penuh: Shalihun, Shalihan, Shalihin."
                }
              ]
            },
            {
              "id": "tadabbur-madinah-vs-yatsrib",
              "number": "05",
              "title": "Tadabbur Sejarah: Mengapa Madinah vs Yatsrib Berbeda?",
              "icon": "fa-landmark",
              "readTime": "10 menit",
              "summary": "Menyelami kisah perubahan nama Yatsrib menjadi Madinah dan pesan akidah di balik Surah Al-Ahzab.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mengapa kata 'مَكَّة' (Makkah) bersifat Fleksibel Sebagian (Makkatu, Makkata, Makkata), tetapi kata 'مَدِينَة' (Madinah) bersifat Fleksibel Penuh (Madinatun, Madinatan, Madinatin)? Jawabannya menyimpan kisah sejarah yang sangat menyentuh hati."
                },
                {
                  "type": "case_study",
                  "title": "Kisah di Balik Nama Madinatur Rasul (Kota Sang Nabi)",
                  "points": [
                    {
                      "label": "1. Nama Asli: Yatsrib (يَثْرِب)",
                      "desc": "Sebelum Rasulullah ﷺ hijrah, kota tersebut bernama Yatsrib. Karena Yatsrib adalah NAMA RESMI TEMPAT, maka secara tata bahasa ia Fleksibel Sebagian: Yathribu, Yathriba, Yathriba."
                    },
                    {
                      "label": "2. Cinta Penduduk kepada Rasulullah ﷺ",
                      "desc": "Ketika Nabi ﷺ tiba, penduduk begitu mencintai beliau hingga mereka tidak sudi lagi memanggil kota mereka dengan nama Yatsrib. Mereka menggantinya menjadi 'Madinatun Nabi' (Kota Milik Sang Nabi), yang lama-kelamaan disingkat menjadi 'Al-Madinah' (Sang Kota)."
                    },
                    {
                      "label": "3. Mengapa Madinah Fleksibel Penuh?",
                      "desc": "Kata 'Madinah' dalam bahasa Arab aslinya adalah KATA BENDA UMUM yang berarti 'sebuah kota' (city), bukan nama tempat. Karena ia kata benda umum, maka ia Fleksibel Penuh: Madinatun, Madinatan, Madinatin!"
                    },
                    {
                      "label": "4. Munafik yang Membocorkan Kedoknya di Perang Khandaq",
                      "desc": "Dalam Surah Al-Ahzab ayat 13, gembong kaum munafik memprovokasi pasukan: 'Wahai penduduk Yatsrib, tidak ada tempat bagi kalian di sini, pulanglah!'. Dengan menyebut nama 'Yatsrib' (bukan Madinah), kedok kemunafikannya terbongkar bahwa ia tidak mengakui otoritas Rasulullah ﷺ atas kota tersebut!"
                    }
                  ]
                },
                {
                  "type": "quote",
                  "text": "Satu kata yang dipilih dalam Al-Qur'an tidak pernah terjadi secara kebetulan. Dari perbedaan satu harakat dan fleksibilitas kata Yatsrib vs Madinah, tersimpan kedalaman sejarah dan akidah perjuangan Islam.",
                  "author": "Ustaz Nouman Ali Khan"
                }
              ]
            },
            {
              "id": "lab-praktik-day3",
              "number": "06",
              "title": "Laboratorium Praktik & Rangkuman Status Lengkap",
              "icon": "fa-flask",
              "readTime": "12 menit",
              "summary": "Menguji kemampuan menganalisis Status, Berat/Ringan, dan Fleksibilitas kata pada ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Alhamdulillah! Kita telah menuntaskan seluruh 4 dimensi Status Ism: Bentuk Status (Rafa'/Nasb/Jar), Cara Mengenali (Bunyi vs Kombinasi), Berat vs Ringan, dan Fleksibilitas. Mari kita uji pemahamanmu di Laboratorium Status Al-Qur'an!"
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Status & Fleksibilitas Day 3",
                  "subtitle": "Pilih status yang tepat untuk kata-kata Al-Qur'an berikut dengan mempertimbangkan berat/ringan dan fleksibilitasnya!",
                  "items": [
                    {
                      "surah": "Surah Al-Baqarah: 136",
                      "ayahArabic": "قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا وَمَا أُنزِلَ إِلَىٰ إِبْرَاهِيمَ",
                      "targetWord": "إِبْرَاهِيمَ",
                      "transliteration": "Ibraahiima",
                      "meaning": "Kepada Nabi Ibrahim",
                      "correctStatus": "jar",
                      "soundEnd": "Fleksibel Sebagian (Harf Jar 'Ilaa' + Fathah = Jar)",
                      "explanation": "Didahului harf jar 'Ilaa'. Karena Ibraahiim adalah nama Non-Arab (fleksibel sebagian), tanda Jar-nya adalah fathah (-a)."
                    },
                    {
                      "surah": "Surah Yusuf: 4",
                      "ayahArabic": "إِذْ قَالَ يُوسُفُ لِأَبِيهِ",
                      "targetWord": "يُوسُفُ",
                      "transliteration": "Yuusufu",
                      "meaning": "Nabi Yusuf",
                      "correctStatus": "rafa",
                      "soundEnd": "Fleksibel Sebagian (Rafa' = -u)",
                      "explanation": "Fi'l = Qaala (berkata). Siapa yang berkata? Nabi Yusuf (Rafa' / Pelaku). Tanda Rafa'-nya adalah dhammah tunggal tanpa tanwin (-u)."
                    },
                    {
                      "surah": "Surah Thaha: 67",
                      "ayahArabic": "فَأَوْجَسَ فِي نَفْسِهِ خِيفَةً مُّوسَىٰ",
                      "targetWord": "مُوسَىٰ",
                      "transliteration": "Muusaa",
                      "meaning": "Nabi Musa",
                      "correctStatus": "rafa",
                      "soundEnd": "Tidak Fleksibel (Pelaku yang merasa takut = Rafa')",
                      "explanation": "Musa adalah pelaku yang merasakan takut dalam hatinya (Rafa'). Karena berakhiran Alif Maqshurah, bentuk katanya tidak fleksibel (tetap Muusaa)."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 2",
                      "ayahArabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                      "targetWord": "الْعَالَمِينَ",
                      "transliteration": "Al-'Aalamiina",
                      "meaning": "Semesta alam manusia",
                      "correctStatus": "jar",
                      "soundEnd": "Kombinasi Jamak Maskulin ( -eena )",
                      "explanation": "Berstatus Jar (setelah kata Rabb / pemilik) dengan tanda kombinasi '-eena'."
                    },
                    {
                      "surah": "Surah Al-Ahzab: 13",
                      "ayahArabic": "وَإِذْ قَالَت طَّائِفَةٌ مِّنْهُمْ يَا أَهْلَ يَثْرِبَ",
                      "targetWord": "يَثْرِبَ",
                      "transliteration": "Yatsriba",
                      "meaning": "Penduduk Yatsrib",
                      "correctStatus": "jar",
                      "soundEnd": "Nama Tempat (Mudhaf Ilaih / Jar = -a)",
                      "explanation": "Yatsrib adalah nama resmi tempat (fleksibel sebagian). Berkedudukan sebagai Jar setelah kata Ahla dengan tanda harakat fathah (-a)."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Puncak Gunung Status Telah Ditaklukkan! 🎉",
                  "points": [
                    "Bentuk Status: Rafa' (Pelaku), Nasb (Detail Fi'l), dan Jar (Pemilik / setelah kata milik).",
                    "Cara Menentukan: Selalu cari Kombinasi Akhiran dulu (-aani, -ayni, -oona, -eena, -aatun, -aatin), baru periksa Bunyi Akhiran (-un/-u, -an/-a, -in/-i).",
                    "Berat vs Ringan: Semua kata aslinya Berat; kata menjadi Ringan jika tanwin atau nun ekstra dibuang. Jika ada Alif Lam (ال), abaikan pertanyaan berat vs ringan.",
                    "Fleksibilitas: Fleksibel Penuh (Muhammadun/an/in), Fleksibel Sebagian (Yusufu/a/a), dan Tidak Fleksibel (Musa/Musa/Musa)."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 3",
              "url": "https://www.youtube.com/live/SBoEuBZLw5k?si=GBARGIITXuHjdB9J"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 3",
              "url": "https://drive.google.com/file/d/1ACEoSgUPjIv_KGpHbSBA8uv0-Yrb9EvH/view?usp=sharing"
            }
          ]
        },
        {
          "day": 4,
          "title": "Hari 4: Number (Jamak Taksir) & Gender (Kisah Feminin Arab)",
          "videoUrl": "https://www.youtube.com/live/53MwDht85kM?si=1NwCYeq1L2Oojurt",
          "pdfUrl": "https://drive.google.com/open?id=1W8G0NpDb9CFi7UHDxrBu5iB6ll1WbIUs&usp=drive_copy",
          "summary": "Menguasai Properti Ism ke-2 (Number / 'Adad) dan ke-3 (Gender / Jins): rahasia Jamak Taksir (Broken Plural) yang diperlakukan sebagai '1F (She)', kisah narasi kata-kata feminin bangsa Arab, dan diagnosis 4 properti Ism Al-Qur'an.",
          "lessons": [
            {
              "id": "jamak-beraturan-vs-taksir",
              "number": "01",
              "title": "Misteri Jamak: Jamak Beraturan vs Jamak Taksir (Broken Plurals)",
              "icon": "fa-puzzle-piece",
              "readTime": "10 menit",
              "summary": "Memahami analogi Lego untuk membedakan Jamak Beraturan (Salim) dan Jamak Pecah / Taksir (Mukassar).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam bahasa Inggris, ada kata jamak teratur seperti *book ➔ books*, tetapi ada juga kata jamak yang merombak ejaannya dari dalam seperti *tooth ➔ teeth*, *goose ➔ geese*, dan *mouse ➔ mice*. Fenomena ini juga terjadi secara luas dalam Bahasa Arab!"
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Analogi Balok Lego: Jamak Beraturan vs Jamak Taksir",
                  "text": "1. **Jamak Beraturan (Salim)**: Struktur kata tunggal tetap utuh, kita hanya menempelkan balok tambahan di ujungnya (`-oona`, `-eena`, `-aatun`, `-aatin`). Contoh: `مُسْلِمٌ` ➔ `مُسْلِمُونَ`.\n2. **Jamak Taksir (Mukassar / Broken Plural)**: Struktur balok kata aslinya dipecah, huruf di dalamnya ditambah, dikurangi, atau diubah harakatnya. Contoh: `كِتَابٌ` (Kitabun) ➔ `كُتُبٌ` (Kutubun), `مَسْجِدٌ` ➔ `مَسَاجِدُ`!"
                },
                {
                  "type": "comparison_table",
                  "title": "Perbandingan Contoh Kata Tunggal vs Jamak Taksir",
                  "headers": [
                    "Kata Tunggal (Mufrad)",
                    "Jamak Taksir (Broken Plural)",
                    "Perubahan yang Terjadi",
                    "Kategori"
                  ],
                  "rows": [
                    [
                      "كِتَابٌ (Kitaabun - 1 Buku)",
                      "كُتُبٌ (Kutubun - Buku-buku)",
                      "Huruf alif dibuang, harakat diubah menjadi dhammah",
                      "Benda (Non-Manusia)"
                    ],
                    [
                      "مَسْجِدٌ (Masjidun - 1 Masjid)",
                      "مَسَاجِدُ (Masaajidu - Masjid-masjid)",
                      "Disisipkan huruf alif di tengah dan diubah harakatnya",
                      "Benda / Tempat"
                    ],
                    [
                      "قَلَمٌ (Qalamun - 1 Pena)",
                      "أَقْلَامٌ (Aqlaamun - Pena-pena)",
                      "Ditambah hamzah di awal dan alif di tengah",
                      "Benda (Non-Manusia)"
                    ],
                    [
                      "رَسُولٌ (Rasuulun - 1 Rasul)",
                      "رُسُلٌ (Rusulun - Para Rasul)",
                      "Huruf waw sukun dibuang dan harakat diubah",
                      "Manusia / Makhluk Berakal"
                    ],
                    [
                      "عَالِمٌ ('Aalimun - 1 Berilmu)",
                      "عُلَمَاءُ ('Ulamaa-u - Para Ulama)",
                      "Pola kata dirombak total dari dalam",
                      "Manusia / Makhluk Berakal"
                    ]
                  ]
                },
                {
                  "type": "quote",
                  "text": "Jamak Taksir tidak memiliki kombinasi akhiran (-oona/-eena). Ia berakhiran Bunyi Akhiran (-un/-u, -an/-a, -in/-i) persis seperti kata tunggal! Cara membedakannya adalah melalui kekayaan kosakata (vocabulary).",
                  "author": "Ustaz Nouman Ali Khan"
                },
                {
                  "type": "quiz",
                  "id": "q_d4_bp_1",
                  "question": "Manakah di antara pasangan kata berikut yang merupakan contoh Jamak Taksir (Broken Plural)?",
                  "options": [
                    {
                      "text": "مُؤْمِنٌ ➔ مُؤْمِنُونَ (Mu'minun ➔ Mu'minoona)",
                      "isCorrect": false
                    },
                    {
                      "text": "قَلَمٌ ➔ أَقْلَامٌ (Qalamun ➔ Aqlaamun)",
                      "isCorrect": true
                    },
                    {
                      "text": "مُسْلِمَةٌ ➔ مُسْلِمَاتٌ (Muslimatun ➔ Muslimaatun)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Aqlaamun' adalah jamak taksir karena struktur kata 'Qalamun' dipecah dan disisipkan huruf alif serta hamzah di dalamnya."
                }
              ]
            },
            {
              "id": "kaidah-jamak-taksir-she",
              "number": "02",
              "title": "Kaidah Emas: Jamak Taksir Diperlakukan Sebagai '1F (She)'",
              "icon": "fa-venus",
              "readTime": "12 menit",
              "summary": "Memahami mengapa bangsa Arab memperlakukan Jamak Taksir secara gramatikal sebagai tunggal feminin (1F).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ribuan tahun lalu, bangsa Arab menetapkan kaidah unik dalam tata bahasa: ketika mereka membicarakan Jamak Taksir (Broken Plural), secara gramatikal mereka memperlakukannya seolah-olah sedang berbicara tentang **SATU PEREMPUAN (Singular Feminine / 1F / 'She')**!"
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "1. Jamak Taksir Benda / Non-Manusia (WAJIB 1F)",
                      "role": "NON-HUMAN BROKEN PLURAL (MUST BE 1F)",
                      "badgeColor": "gold",
                      "arabicLabel": "جَمْعُ تَكْسِيرٍ لِغَيْرِ الْعَاقِلِ",
                      "definition": "Semua jamak taksir untuk benda mati, hewan, tempat, atau ide WAJIB diperlakukan sebagai 1F (Tunggal Feminin):",
                      "howToFind": "Kutub (buku-buku), Masajid (masjid-masjid), Jibal (gunung-gunung), Qubur (kuburan-kuburan), A'mal (amal-amal).",
                      "examples": [
                        {
                          "sentence": "الجِبَالُ (Al-Jibaalu) ➔ Status: Rafa', Number & Gender: 1F (She).",
                          "doer": "Gunung-gunung"
                        },
                        {
                          "sentence": "كُتُبٌ قَيِّمَةٌ (Kutubun Qayyimah) ➔ Kata sifatnya 'Qayyimah' berakhiran 1F.",
                          "detail": "Buku-buku berharga"
                        }
                      ]
                    },
                    {
                      "name": "2. Jamak Taksir Manusia / Berakal (BISA 1F atau 3M/3F)",
                      "role": "HUMAN BROKEN PLURAL (CAN BE 1F OR REALITY)",
                      "badgeColor": "emerald",
                      "arabicLabel": "جَمْعُ تَكْسِيرٍ لِلْعَاقِلِ",
                      "definition": "Jamak taksir untuk manusia, malaikat, dan jin memiliki 2 pilihan perlakuan yang sama-sama benar:",
                      "howToFind": "Pilihan A: 1F (Aturan Gramatikal) | Pilihan B: 3M atau 3F (Kenyataan Hakikat Biologis).",
                      "examples": [
                        {
                          "sentence": "رُسُلٌ (Rusulun) ➔ Pilihan A: 1F (Gramatikal) | Pilihan B: 3M (Hakikat Para Rasul pria).",
                          "doer": "Para Rasul"
                        },
                        {
                          "sentence": "مَلَائِكَةٌ (Mala-ikatun) ➔ Pilihan A: 1F (Gramatikal) | Pilihan B: 3M (Hakikat Para Malaikat).",
                          "doer": "Para Malaikat"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Kaidah Singkat untuk Dihidupkan di Kepala",
                  "text": "**Non-Human Broken Plural ➔ WAJIB 1F (Singular Feminine)**\n**Human Broken Plural ➔ BISA 1F (Gramatikal) atau 3M/3F (Hakikat Asli)**"
                },
                {
                  "type": "quiz",
                  "id": "q_d4_she_1",
                  "question": "Kata 'الْجِبَالَ' (Al-Jibaala - gunung-gunung) berstatus Nasb. Dari segi Number dan Gender, kata ini diperlakukan sebagai...",
                  "options": [
                    {
                      "text": "3M (Jamak Maskulin)",
                      "isCorrect": false
                    },
                    {
                      "text": "1F (Tunggal Feminin / She)",
                      "isCorrect": true
                    },
                    {
                      "text": "3F (Jamak Feminin)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Gunung-gunung (Al-Jibaala) adalah jamak taksir benda mati (non-human), sehingga menurut tata bahasa Arab WAJIB diperlakukan sebagai 1F (Tunggal Feminin)."
                }
              ]
            },
            {
              "id": "4-ragam-jamak-dan-ism-jam",
              "number": "03",
              "title": "Peta 4 Ragam Jamak & 3 Kata 'Ism Jam''",
              "icon": "fa-cubes",
              "readTime": "10 menit",
              "summary": "Memetakan 4 jenis jamak lengkap dan mengenal 3 kata unik yang bermakna jamak karena 'Bangsa Arab Bilang Begitu'.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk mempermudah analisa, para ahli nahwu merangkum seluruh bentuk Jamak dalam Bahasa Arab ke dalam **4 Kategori Besar**:"
                },
                {
                  "type": "card_grid",
                  "title": "4 Kategori Jamak Bahasa Arab",
                  "items": [
                    {
                      "icon": "fa-mars",
                      "title": "1. Jamak Maskulin Beraturan (Salim)",
                      "desc": "Berakhiran `-oona` (Rafa') atau `-eena` (Nasb/Jar). Khusus untuk manusia / makhluk berakal. Contoh: مُسْلِمُونَ, صَالِحِينَ."
                    },
                    {
                      "icon": "fa-venus",
                      "title": "2. Jamak Feminin Beraturan (Salim)",
                      "desc": "Berakhiran `-aatun` (Rafa') atau `-aatin` (Nasb/Jar). Untuk wanita atau kata sifat/benda berakhiran ta marbuthah. Contoh: مُسْلِمَاتٌ, آيَاتٍ."
                    },
                    {
                      "icon": "fa-burst",
                      "title": "3. Jamak Taksir (Broken Plural)",
                      "desc": "Pola kata tunggalnya dipecah (Kutub, Masajid, Rusul, A'mal). Terbagi menjadi Manusia (bisa 1F/3M) dan Non-Manusia (wajib 1F)."
                    },
                    {
                      "icon": "fa-users",
                      "title": "4. Ism Jam' (Karena Bangsa Arab Bilang Begitu)",
                      "desc": "Bentuk katanya tunggal tanpa kombinasi, tetapi secara makna dan kesepakatan bangsa Arab dianggap JAMAK."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "3 Kata Jamak Khusus (Ism Jam') yang Wajib Dihafal",
                  "items": [
                    {
                      "type": "1. قَوْمٌ (Qawmun)",
                      "examples": "Artinya: 'Sebuah Kaum / Bangsa'. Bentuk lafaznya tunggal, tetapi diperlakukan sebagai Jamak karena mewakili kumpulan banyak orang."
                    },
                    {
                      "type": "2. نَاسٌ (Naasun / An-Naas)",
                      "examples": "Artinya: 'Manusia / Orang-orang'. Diperlakukan sebagai Jamak Manusia (3M)."
                    },
                    {
                      "type": "3. قَرْنٌ (Qarnun)",
                      "examples": "Artinya: 'Sebuah Generasi / Abad'. Mengandung makna kumpulan orang-orang dalam satu kurun waktu (Jamak)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d4_ismjam_1",
                  "question": "Kata 'قَوْمٌ' (Qawmun) dalam Al-Qur'an tergolong jenis jamak apa?",
                  "options": [
                    {
                      "text": "Jamak Mudzakkar Salim karena berakhiran -un",
                      "isCorrect": false
                    },
                    {
                      "text": "Jamak Taksir",
                      "isCorrect": false
                    },
                    {
                      "text": "Ism Jam' (Jamak karena kesepakatan bangsa Arab)",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "Kata 'Qawmun', 'Naasun', dan 'Qarnun' adalah 3 kata khusus Ism Jam' yang bentuk lafaznya tunggal namun maknanya jamak atas kesepakatan bangsa Arab."
                }
              ]
            },
            {
              "id": "gender-dan-kisah-feminin-arab",
              "number": "04",
              "title": "Membongkar Gender & Kisah Cerita Feminin Bangsa Arab",
              "icon": "fa-shield-halved",
              "readTime": "12 menit",
              "summary": "Kaidah 'Maskulin sampai terbukti Feminin', 3 tanda akhiran feminin, dan cerita medan perang untuk menghafal feminin bangsa Arab.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Prinsip dasar Gender dalam bahasa Arab adalah: **SEMUA KATA DIANGGAP MASKULIN (MUDZAKKAR) SAMPAI TERBUKTI MEMILIKI ALASAN MENJADI FEMININ (MUANNATS)**!"
                },
                {
                  "type": "comparison_table",
                  "title": "Kategori Kata Feminin (Muannats)",
                  "headers": [
                    "Kategori",
                    "Kriteria",
                    "Contoh Nyata"
                  ],
                  "rows": [
                    [
                      "1. Feminin Hakiki (Biologis)",
                      "Makhluk hidup yang secara biologis berjenis kelamin betina/perempuan",
                      "أُمٌّ (Ibu), مَرْيَمُ (Maryam), بَقَرَةٌ (Sapi betina)"
                    ],
                    [
                      "2. Akhiran Ta Marbuthah (`ة`)",
                      "Tanda feminin paling umum",
                      "جَنَّةٌ (Surga), رَحْمَةٌ (Rahmat), طَالِبَةٌ (Siswi)"
                    ],
                    [
                      "3. Akhiran Alif Mamdudah (`ـَاء`)",
                      "Alif panjang diikuti hamzah",
                      "سَمَاءٌ (Langit), حَمْرَاءُ (Merah), بَيْضَاءُ (Putih)"
                    ],
                    [
                      "4. Akhiran Alif Maqshurah (`ـَى`)",
                      "Alif bengkok di ujung kata sifat/nama feminin",
                      "بُشْرَى (Kabar gembira), كُبْرَى (Terbesar), حُسْنَى (Terbaik)"
                    ],
                    [
                      "5. Bagian Tubuh Berpasangan",
                      "Organ tubuh manusia yang berjumlah sepasang (dua)",
                      "عَيْنٌ (Mata), أُذُنٌ (Telinga), يَدٌ (Tangan), رِجْلٌ (Kaki)"
                    ],
                    [
                      "6. Feminin Karena Bangsa Arab Bilang Begitu",
                      "Kata-kata tanpa tanda fisik yang disepakati bangsa Arab sebagai feminin",
                      "Daftar kata dalam Kisah Prajurit di Medan Perang (lihat di bawah)"
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Kisah Prajurit di Medan Perang (Menghafal Kata Feminin Bangsa Arab)",
                  "points": [
                    {
                      "label": "Kisah Narasi:",
                      "desc": "Di tengah sebuah peperangan (حَرْبٌ - Harb), seorang prajurit melamun memandang ke atas langit (سَمَاءٌ - Samaa') hingga matahari (شَمْسٌ - Syams) terbit. Ketika tersadar, ia mendapati dirinya adalah satu-satunya jiwa/orang (نَفْسٌ - Nafs) yang tersisa di medan pertempuran."
                    },
                    {
                      "label": "Perjalanan Menyelamatkan Diri:",
                      "desc": "Ia terkepung kobaran api (نَارٌ - Naar). Ia menggunakan sebuah ember (دَلْوٌ - Dalw) berisi air untuk membuka jalan/lintasan (سَبِيلٌ - Sabiil & طَرِيقٌ - Thariiq) menuju tanah/bumi (أَرْضٌ - Ardh) yang aman di bawah hembusan angin kencang (رِيحٌ - Riih)."
                    },
                    {
                      "label": "Pencarian & Godaan:",
                      "desc": "Ia mencari sumur (بِئْرٌ - Bi'r) untuk mengambil air. Dalam pencariannya, ia menemukan sebuah rumah kosong (دَارٌ - Daar) yang di dalamnya terdapat sebuah cawan (كَأْسٌ - Ka's) berisi arak (خَمْرٌ - Khamr). Ia sempat tergoda, namun karena takut akan neraka (جَهَنَّمُ - Jahannam & سَعِيرٌ - Sa'iir), ia mengurungkan niatnya dan menggunakan tongkatnya (عَصَا - 'Ashaa) untuk memecahkan cawan itu!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d4_gender_1",
                  "question": "Apakah kata 'يَدٌ' (Yadun - Tangan) berstatus maskulin atau feminin?",
                  "options": [
                    {
                      "text": "Maskulin karena tidak memiliki Ta Marbuthah",
                      "isCorrect": false
                    },
                    {
                      "text": "Feminin karena tangan adalah bagian tubuh manusia yang berpasangan (ada dua)",
                      "isCorrect": true
                    },
                    {
                      "text": "Bisa maskulin bisa feminin",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Organ tubuh manusia yang berpasangan (seperti tangan, kaki, mata, telinga) digolongkan sebagai kata Feminin dalam bahasa Arab."
                }
              ]
            },
            {
              "id": "tipe-ism-nakirah-vs-marifah",
              "number": "05",
              "title": "Pengenalan Kilat Properti ke-4: Tipe Ism (Umum vs Khusus)",
              "icon": "fa-bullseye",
              "readTime": "8 menit",
              "summary": "Membedakan kata Umum (Nakirah / Common) vs kata Khusus (Ma'rifah / Proper) secara cepat.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Properti terakhir dari sebuah Ism adalah **TIPE (Type / Ta'yin)**, yaitu apakah Ism tersebut bersifat **Umum (Common / نَكِرَة)** atau **Khusus (Proper / مَعْرِفَة)**."
                },
                {
                  "type": "card_grid",
                  "title": "2 Kaidah Cepat Menentukan Kata Khusus (Proper / Ma'rifah)",
                  "items": [
                    {
                      "icon": "fa-signature",
                      "title": "1. Nama Spesifik Orang / Tempat (Ism 'Alam)",
                      "desc": "Nama individu atau wilayah tertentu otomatis berstatus KHUSUS (Proper). Contoh: مُحَمَّدٌ (Muhammad), يُوسُفُ (Yusuf), مَكَّةُ (Makkah), اللَّهُ (Allah)."
                    },
                    {
                      "icon": "fa-font",
                      "title": "2. Diawali oleh ALIF LAM (ال)",
                      "desc": "Penambahan Alif Lam berfungsi layaknya 'The' dalam bahasa Inggris, mengubah kata umum menjadi SPESIFIK/KHUSUS. Contoh: الْكِتَابُ (Buku itu), الْجِبَالُ (Gunung-gunung itu)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Kaidah Praktis: Jika Bukan Nama & Tidak Ada Alif Lam ➔ UMUM (Common / Nakirah)",
                  "text": "Jika sebuah kata bukan nama orang/tempat tertentu dan tidak memiliki Alif Lam di depannya, maka untuk tahap ini kata tersebut digolongkan sebagai **UMUM (Common / Nakirah)**. Contoh: `كِتَابٌ` (sebuah buku), `رَسُولٌ` (seorang rasul), `بَشَرٌ` (seorang manusia)."
                },
                {
                  "type": "quiz",
                  "id": "q_d4_type_1",
                  "question": "Manakah di antara kata-kata berikut yang berstatus KHUSUS (Proper / Ma'rifah)?",
                  "options": [
                    {
                      "text": "كِتَابٌ (Kitaabun)",
                      "isCorrect": false
                    },
                    {
                      "text": "الْمَسْجِدُ (Al-Masjidu)",
                      "isCorrect": true
                    },
                    {
                      "text": "رَسُولٌ (Rasuulun)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Al-Masjidu' memiliki Alif Lam (ال) di depannya, sehingga berstatus Khusus (Proper / Ma'rifah)."
                }
              ]
            },
            {
              "id": "lab-analisis-4-properti-day4",
              "number": "06",
              "title": "Laboratorium Diagnosis 4 Properti Ism Day 4",
              "icon": "fa-stethoscope",
              "readTime": "12 menit",
              "summary": "Menguji kemampuan menganalisis Status, Number, Gender, dan Type pada kata-kata Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Kini kamu telah memiliki 4 'kacamata bedah' gramatikal Ism: **Status**, **Number**, **Gender**, dan **Type**. Mari kita diagnosis kata-kata Al-Qur'an berikut secara lengkap!"
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium 4 Properti Ism Day 4",
                  "subtitle": "Pilih status, jumlah, dan gender yang tepat berdasarkan kaidah yang telah dipelajari!",
                  "items": [
                    {
                      "surah": "Surah Al-Mursalat: 15",
                      "ayahArabic": "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
                      "targetWord": "الْمُكَذِّبِينَ",
                      "transliteration": "Al-Mukadz-dzibiina",
                      "meaning": "Orang-orang yang mendustakan",
                      "correctStatus": "jar",
                      "soundEnd": "Kombinasi Jamak Maskulin (3M / Nasb-Jar)",
                      "explanation": "Status: Jar (karena huruf lam jar), Number: 3 (Jamak), Gender: M (Maskulin), Type: Proper (karena ada Alif Lam)."
                    },
                    {
                      "surah": "Surah An-Naba: 20",
                      "ayahArabic": "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا",
                      "targetWord": "الْجِبَالُ",
                      "transliteration": "Al-Jibaalu",
                      "meaning": "Gunung-gunung",
                      "correctStatus": "rafa",
                      "soundEnd": "Jamak Taksir Benda (Non-Human BP ➔ 1F)",
                      "explanation": "Status: Rafa' (-u), Number: 1 (Gramatikal Jamak Taksir), Gender: F (Feminine / She), Type: Proper (Alif Lam)."
                    },
                    {
                      "surah": "Surah Al-Baqarah: 253",
                      "ayahArabic": "تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ",
                      "targetWord": "الرُّسُلُ",
                      "transliteration": "Ar-Rusulu",
                      "meaning": "Para Rasul",
                      "correctStatus": "rafa",
                      "soundEnd": "Jamak Taksir Manusia (Bisa 1F atau 3M)",
                      "explanation": "Status: Rafa' (-u), Number & Gender: Bisa 1F (secara kaidah 'Tilka') atau 3M (kenyataan para rasul), Type: Proper (Alif Lam)."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 2",
                      "ayahArabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                      "targetWord": "الْعَالَمِينَ",
                      "transliteration": "Al-'Aalamiina",
                      "meaning": "Semesta alam manusia",
                      "correctStatus": "jar",
                      "soundEnd": "Kombinasi Jamak Maskulin (-eena)",
                      "explanation": "Status: Jar, Number: 3 (Jamak), Gender: M (Maskulin), Type: Proper (Alif Lam)."
                    },
                    {
                      "surah": "Surah Al-Bayyinah: 1",
                      "ayahArabic": "حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ",
                      "targetWord": "الْبَيِّنَةُ",
                      "transliteration": "Al-Bayyinatu",
                      "meaning": "Bukti yang nyata",
                      "correctStatus": "rafa",
                      "soundEnd": "Tunggal Feminin (Ta Marbuthah)",
                      "explanation": "Status: Rafa' (-u), Number: 1 (Tunggal), Gender: F (Ta Marbuthah), Type: Proper (Alif Lam)."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Selamat! 4 Properti Ism Telah Dikuasai! 🎯",
                  "points": [
                    "Status: Rafa' (Pelaku), Nasb (Detail), Jar (Pemilik).",
                    "Number: Tunggal (1), Ganda (2), Jamak (3+). Jamak terbagi: Jamak Maskulin Salim, Jamak Feminin Salim, Jamak Taksir (Non-Human wajib 1F, Human bisa 1F/3M), dan Ism Jam' (Qawm, Naas, Qarn).",
                    "Gender: Semua kata Maskulin kecuali terbukti Feminin (Biologis, Ta Marbuthah, Alif Mamdudah, Alif Maqshurah, Tubuh Berpasangan, Kisah Prajurit Perang).",
                    "Type: Khusus (Proper / Ism 'Alam & Alif Lam) vs Umum (Common / Nakirah)."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 4",
              "url": "https://www.youtube.com/live/53MwDht85kM?si=1NwCYeq1L2Oojurt"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 4",
              "url": "https://drive.google.com/open?id=1W8G0NpDb9CFi7UHDxrBu5iB6ll1WbIUs&usp=drive_copy"
            }
          ]
        },
        {
          "day": 5,
          "title": "Hari 5: Tipe Ism (7 Jenis Ma'rifah), Frasa Idhafah, & Harf Jar",
          "videoUrl": "https://www.youtube.com/live/hueo7GbJxSs?si=TvfGmZUvJ681Acxh",
          "pdfUrl": "https://drive.google.com/open?id=1PAtUolmjCmhg_joaFacy_QYJ--rU1yZE&usp=drive_copy",
          "summary": "Menuntaskan 4 Properti Ism dengan 7 jenis kata Khusus (Proper / Ma'rifah), merakit balok Ism menjadi Frasa Idhafah (Mudhaf & Mudhaf Ilaih), menghafal 11 Harf Jar (Bata Kaflam Waw...), serta tadabbur keindahan balaghah Al-Qur'an.",
          "lessons": [
            {
              "id": "7-jenis-kata-khusus",
              "number": "01",
              "title": "Tipe Ism: 7 Kategori Kata Khusus (Proper / Ma'rifah)",
              "icon": "fa-tags",
              "readTime": "12 menit",
              "summary": "Memahami prinsip 'Default Umum (Nakirah)' dan menguasai 7 kategori kata Khusus (Proper / Ma'rifah) dalam bahasa Arab.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Secara alami, kata dalam bahasa Arab berstatus **Umum (Common / نَكِرَة)** jika berakhiran tanwin (ـٌ, ـً, ـٍ) yang bermakna 'sebuah/seorang'. Kata hanya menjadi **Khusus (Proper / مَعْرِفَة)** jika masuk ke dalam salah satu dari **7 Kategori Khusus** berikut:"
                },
                {
                  "type": "card_grid",
                  "title": "7 Kategori Kata Khusus (Proper / Ma'rifah)",
                  "items": [
                    {
                      "icon": "fa-font",
                      "title": "1. Kata Ber-Alif Lam (ال)",
                      "desc": "Penambahan 'Al' mengubah makna umum menjadi spesifik ('The'). Alif Lam dan Tanwin bermusuhan dan TIDAK BISA bersatu! Contoh: الْكِتَابُ, الْمُسْلِمُونَ."
                    },
                    {
                      "icon": "fa-signature",
                      "title": "2. Nama Diri / Spesifik (Ism 'Alam)",
                      "desc": "Nama orang, kota, negara, atau entitas spesifik. Contoh: مُحَمَّدٌ, يُوسُفُ, مَكَّةُ, اللَّهُ, جِبْرِيلُ."
                    },
                    {
                      "icon": "fa-bullhorn",
                      "title": "3. Kata yang Dipanggil (Munada)",
                      "desc": "Kata yang didahului huruf panggilan 'Yaa' (يَا). Kata tersebut otomatis menjadi KHUSUS dan RINGAN! Contoh: يَا وَلَدُ, يَا مُسْلِمُ."
                    },
                    {
                      "icon": "fa-user-tag",
                      "title": "4. Kata Ganti (Dhamir / Pronouns)",
                      "desc": "Kata ganti penunjuk subjek/objek selalu spesifik (Dia, Kamu, Saya, Kami). Contoh: هُوَ (Dia), أَنْتَ (Kamu), نَحْنُ (Kami)."
                    },
                    {
                      "icon": "fa-hand-point-right",
                      "title": "5. Kata Tunjuk (Ism Isyarah / Pointers)",
                      "desc": "Kata penunjuk ini/itu. Contoh: هَٰذَا (Ini), ذَٰلِكَ (Itu), هَٰؤُلَاءِ (Mereka ini), أُولَٰئِكَ (Mereka itu)."
                    },
                    {
                      "icon": "fa-link",
                      "title": "6. Kata Sambung (Ism Maushul)",
                      "desc": "Kata penghubung 'yang'. Contoh: الَّذِي (Yang - 1M), الَّتِي (Yang - 1F), الَّذِينَ (Orang-orang yang - 3M)."
                    },
                    {
                      "icon": "fa-arrow-right-arrow-left",
                      "title": "7. Mudhaf dari Mudhaf Ilaih Khusus",
                      "desc": "Kata sebelum 'Of' (Mudhaf) jika kata setelahnya (Mudhaf Ilaih) berstatus Khusus. Contoh: كِتَابُ اللَّهِ (Buku Allah ➔ Buku menjadi khusus)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Analogi Tamu Keluarga: Alif Lam vs Tanwin",
                  "text": "Ibarat dua keluarga besar yang tidak bisa diundang ke rumah pada saat bersamaan: Jika **Alif Lam (ال)** datang, maka **Tanwin (ـٌ, ـً, ـٍ)** langsung pamit keluar menjadi harakat tunggal (`الْكِتَابُ`, bukan `الْكِتَابٌ`)!"
                },
                {
                  "type": "quiz",
                  "id": "q_d5_type_1",
                  "question": "Mengapa frasa 'يَا مُسْلِمُ' (Yaa Muslimu) berstatus Khusus (Proper), padahal kata 'Muslim' aslinya adalah kata umum?",
                  "options": [
                    {
                      "text": "Karena memiliki Alif Lam yang tersembunyi",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena sedang dipanggil langsung menggunakan huruf nida 'Yaa' (Munada)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena berakhiran dhammah",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata umum apa pun ketika dipanggil secara langsung menggunakan 'Yaa' (يَا) otomatis berubah menjadi Khusus (Proper / Ma'rifah) dan berharakat tunggal (ringan)."
                }
              ]
            },
            {
              "id": "frasa-idhafah-mudhaf",
              "number": "02",
              "title": "Konstruksi Frasa Idhafah: Rahasia Mudhaf & Mudhaf Ilaih",
              "icon": "fa-link",
              "readTime": "12 menit",
              "summary": "Memahami konsep Frasa Kepemilikan (Idhafah / Hubungan 'Of'), 2 syarat mutlak Mudhaf, dan 1 syarat mutlak Mudhaf Ilaih.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setelah menguasai 4 properti Ism (bagaikan 1 balok bata utuh), kini kita mulai merakitnya menjadi **FRASA (Fragment / مُرَكَّب)**: susunan kata yang lebih dari satu kata, namun belum menjadi kalimat sempurna. Frasa paling agung dalam bahasa Arab adalah **IDHAFAH (الإِضَافَة)**."
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "1. MUDHAF (مُضَاف - Kata Sebelum 'Of')",
                      "role": "KATA MILIK (YANG DIMILIKI)",
                      "badgeColor": "gold",
                      "arabicLabel": "مُضَاف: خَفِيف + لَا أَلْ",
                      "definition": "Kata pertama yang harus memenuhi 2 SYARAT MUTLAK tanpa kompromi:",
                      "howToFind": "1. Wajib RINGAN (Light: tanpa tanwin & tanpa nun jamak/tatsniyah)\n2. Wajib TIDAK MEMILIKI ALIF LAM (No Al).",
                      "examples": [
                        {
                          "sentence": "رَسُولُ اللَّهِ (Rasuulullaahi) ➔ Rasuulu: Ringan & Tanpa Al.",
                          "doer": "Mudhaf (Utusan)"
                        },
                        {
                          "sentence": "بَيْتُ اللَّهِ (Baitullaahi) ➔ Baitu: Ringan & Tanpa Al.",
                          "doer": "Mudhaf (Rumah)"
                        },
                        {
                          "sentence": "رَبِّ الْعَالَمِينَ (Rabbil 'Aalamiina) ➔ Rabbi: Ringan & Tanpa Al.",
                          "doer": "Mudhaf (Tuhan/Pemelihara)"
                        }
                      ]
                    },
                    {
                      "name": "2. MUDHAF ILAIH (مُضَاف إِلَيْهِ - Kata Setelah 'Of')",
                      "role": "PEMILIK (YANG MEMILIKI)",
                      "badgeColor": "emerald",
                      "arabicLabel": "مُضَاف إِلَيْهِ: مَجْرُور",
                      "definition": "Kata kedua yang hanya membutuhkan 1 SYARAT TUNGGAL:",
                      "howToFind": "Wajib berstatus JAR (Majrur: berakhiran kasrah, kasratain, atau kombinasi -ayni / -eena).",
                      "examples": [
                        {
                          "sentence": "رَسُولُ اللَّهِ ➔ Lafadz 'Allahi' berstatus JAR.",
                          "detail": "Mudhaf Ilaih (Milik Allah)"
                        },
                        {
                          "sentence": "رَبِّ الْعَالَمِينَ ➔ 'Al-'Aalamiina' berstatus JAR (-eena).",
                          "detail": "Mudhaf Ilaih (Semesta Alam)"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Kaidah Tanpa Jarak (No Long-Distance Relationship!)",
                  "text": "Dalam bahasa Arab, di antara Mudhaf dan Mudhaf Ilaih TIDAK BOLEH disisipi kata apa pun! Kata 'Of' dalam bahasa Arab bersifat tidak kasat mata (invisible 'of') yang otomatis muncul saat kedua kata ini bersanding berdampingan."
                },
                {
                  "type": "quiz",
                  "id": "q_d5_mudhaf_1",
                  "question": "Manakah di antara pasangan kata berikut yang merupakan susunan Idhafah (Mudhaf + Mudhaf Ilaih) yang sah?",
                  "options": [
                    {
                      "text": "الْبَيْتُ اللَّهِ (Al-Baitu Allahi)",
                      "isCorrect": false
                    },
                    {
                      "text": "بَيْتٌ لِلَّهِ (Baitun Lillahi)",
                      "isCorrect": false
                    },
                    {
                      "text": "بَيْتُ اللَّهِ (Baitu Allahi)",
                      "isCorrect": true
                    }
                  ],
                  "explanation": "'Baitu Allahi' sah sebagai Idhafah karena kata pertama (Baitu) berstatus Ringan dan Tanpa Al, sedangkan kata kedua (Allahi) berstatus Jar."
                }
              ]
            },
            {
              "id": "idhafah-bertingkat-dan-penularan-sifat",
              "number": "03",
              "title": "Rantai Idhafah Bertingkat & Penularan Status Khusus",
              "icon": "fa-cubes-stacked",
              "readTime": "10 menit",
              "summary": "Memahami rantai Idhafah ganda seperti 'Maaliki Yawmid-Diin' dan bagaimana Mudhaf meminjam status Khusus dari Mudhaf Ilaih.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Bagaimana jika sebuah kata memiliki dua peran sekaligus, yaitu sebagai pemilik bagi kata sebelumnya sekaligus yang dimiliki oleh kata sesudahnya? Mari kita pelajari fenomena Idhafah Bertingkat!"
                },
                {
                  "type": "case_study",
                  "title": "Studi Kasus Surah Al-Fatihah: 'مَالِكِ يَوْمِ الدِّينِ' (Maaliki Yawmid-Diin)",
                  "points": [
                    {
                      "label": "1. Analisis Kata Pertama: مَالِكِ (Maaliki)",
                      "desc": "Memenuhi syarat Mudhaf #1: Ringan & Tanpa Al. Artinya: 'Sang Pemilik / Raja'."
                    },
                    {
                      "label": "2. Analisis Kata Kedua: يَوْمِ (Yawmi)",
                      "desc": "Memiliki 2 PERAN SEKALIGUS! Menjadi Mudhaf Ilaih bagi 'Maaliki' (karena berstatus Jar: Yawmi), sekaligus menjadi Mudhaf bagi kata berikutnya (karena Ringan & Tanpa Al). Artinya: 'Hari'."
                    },
                    {
                      "label": "3. Analisis Kata Ketiga: الدِّينِ (Ad-Diini)",
                      "desc": "Menjadi Mudhaf Ilaih penutup bagi 'Yawmi' (berstatus Jar dengan kasrah). Artinya: 'Pembalasan'."
                    },
                    {
                      "label": "4. Hasil Terjemahan Rantai Idhafah:",
                      "desc": "'Pemilik [of] Hari [of] Pembalasan' (Master of the Day of Judgment)!"
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Kaidah Penularan Sifat Khusus (Properness Inheritance)",
                  "items": [
                    {
                      "type": "Mudhaf Tidak Bisa Menentukan Tipenya Sendiri!",
                      "examples": "Karena Mudhaf dilarang memakai Tanwin (tanda umum) dan dilarang memakai Alif Lam (tanda khusus), ia MEMINJAM sifat khusus/umum dari Mudhaf Ilaih-nya."
                    },
                    {
                      "type": "Contoh Penularan Khusus:",
                      "examples": "دِينُ اللَّهِ (Diinullahi) ➔ Karena 'Allahi' berstatus Khusus (Proper), maka kata 'Diinu' otomatis tertular menjadi KHUSUS (Agama Allah itu)."
                    },
                    {
                      "type": "Contoh Penularan Umum:",
                      "examples": "دِينُ قَوْمٍ (Diinu Qawmin) ➔ Karena 'Qawmin' berstatus Umum (Nakirah), maka kata 'Diinu' ikut menjadi UMUM (Suatu agama milik suatu kaum)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d5_rantai_1",
                  "question": "Dalam frasa 'ابْنُ مَرْيَمَ' (Ibnu Maryama - Putra Maryam), mengapa 'Maryama' berakhiran fathah padahal posisinya adalah Mudhaf Ilaih (wajib Jar)?",
                  "options": [
                    {
                      "text": "Karena salah harakat dalam penulisan",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena Maryam adalah nama Non-Arab (Fleksibel Sebagian), sehingga tanda Jar-nya adalah fathah",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena Maryam adalah kata feminin",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Maryam adalah nama Non-Arab ('Ajam) yang bersifat Fleksibel Sebagian (Ghayr Munsharif). Tanda Jar untuk kata fleksibel sebagian adalah fathah (Maryama)."
                }
              ]
            },
            {
              "id": "harf-jar-bata-kaflam",
              "number": "04",
              "title": "Senam Lidah 11 Harf Jar: 'Bata Kaflam Waw...'",
              "icon": "fa-bolt-lightning",
              "readTime": "12 menit",
              "summary": "Menghafal 11 Harf Jar utama dan memahami tugas tunggalnya: memukul Ism setelahnya menjadi berstatus JAR!",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Hanya ada **2 ALASAN DI SELURUH ALAM SEMESTA BAHASA ARAB** mengapa sebuah Ism berstatus **JAR**:\n1. Menjadi *Mudhaf Ilaih* (setelah kata milik / 'Of').\n2. Diawali oleh salah satu dari **HARF JAR**!"
                },
                {
                  "type": "oral_drill",
                  "title": "Senam Lidah 11 Harf Jar (Wajib Hafal di Luar Kepala!)",
                  "chartRows": [
                    {
                      "arabic": "بِ (Bi)",
                      "translation": "Dengan / Demi"
                    },
                    {
                      "arabic": "تَ (Ta)",
                      "translation": "Demi (Khusus Sumpah: Tallahi)"
                    },
                    {
                      "arabic": "كَ (Ka)",
                      "translation": "Seperti / Bagaikan"
                    },
                    {
                      "arabic": "لِـ (Li / La)",
                      "translation": "Untuk / Milik"
                    },
                    {
                      "arabic": "وَ (Wa)",
                      "translation": "Demi (Sumpah: Wal-'Ashri, Wallahi)"
                    },
                    {
                      "arabic": "مِنْ (Min)",
                      "translation": "Dari"
                    },
                    {
                      "arabic": "فِي (Fii)",
                      "translation": "Di dalam / Pada"
                    },
                    {
                      "arabic": "عَنْ ('An)",
                      "translation": "Tentang / Dari"
                    },
                    {
                      "arabic": "عَلَىٰ ('Alaa)",
                      "translation": "Di atas / Atas"
                    },
                    {
                      "arabic": "حَتَّىٰ (Hattaa)",
                      "translation": "Hingga / Sampai"
                    },
                    {
                      "arabic": "إِلَىٰ (Ilaa)",
                      "translation": "Menuju / Kepada"
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Irama Hafalan Cepat Ala Ustaz Nouman Ali Khan",
                  "formula": "Bata Kaflam Waw, Min Fii 'An, 'Alaa Hattaa Ilaa!",
                  "note": "Ulangi irama ini 10 kali sampai lidahmu otomatis melafalkannya tanpa berpikir!"
                },
                {
                  "type": "comparison_table",
                  "title": "Contoh Nyata Harf Jar dalam Surat-Surat Pendek Al-Qur'an",
                  "headers": [
                    "Ayat Al-Qur'an",
                    "Harf Jar",
                    "Ism Majrur (Status Jar)",
                    "Alasan Menjadi Jar"
                  ],
                  "rows": [
                    [
                      "بِسْمِ اللَّهِ (Bismi-llaahi)",
                      "بِ (Bi)",
                      "اسْمِ (Ismi)",
                      "Dipukul oleh Harf Jar 'Bi' ➔ Ismi"
                    ],
                    [
                      "وَالْعَصْرِ (Wal-'Ashri)",
                      "وَ (Wa Sumpah)",
                      "الْعَصْرِ (Al-'Ashri)",
                      "Dipukul oleh Harf Jar 'Wa' ➔ Al-'Ashri"
                    ],
                    [
                      "فِي خُسْرٍ (Fii Khusrin)",
                      "فِي (Fii)",
                      "خُسْرٍ (Khusrin)",
                      "Dipukul oleh Harf Jar 'Fii' ➔ Khusrin"
                    ],
                    [
                      "كَعَصْفٍ مَّأْكُولٍ (Ka-'Ashfin)",
                      "كَ (Ka)",
                      "عَصْفٍ ('Ashfin)",
                      "Dipukul oleh Harf Jar 'Ka' ➔ 'Ashfin"
                    ],
                    [
                      "مِّن سِجِّيلٍ (Min Sijjiilin)",
                      "مِنْ (Min)",
                      "سِجِّيلٍ (Sijjiilin)",
                      "Dipukul oleh Harf Jar 'Min' ➔ Sijjiilin"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d5_harfjar_1",
                  "question": "Dalam ayat 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', mengapa kata 'الْعَصْرِ' dan 'خُسْرٍ' sama-sama berharakat kasrah (status Jar)?",
                  "options": [
                    {
                      "text": "Keduanya berstatus Mudhaf Ilaih",
                      "isCorrect": false
                    },
                    {
                      "text": "'Al-'Ashri' didahului Harf Jar 'Wa' (sumpah), dan 'Khusrin' didahului Harf Jar 'Fii'",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena keduanya kata tunggal",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Huruf Waw sumpah (وَ) dan Fii (فِي) adalah bagian dari Harf Jar yang memaksa Ism setelahnya menjadi berstatus Jar."
                }
              ]
            },
            {
              "id": "pengenalan-harf-nasb",
              "number": "05",
              "title": "Pengenalan Kilat Harf Nasb: 'Inna & Saudari-Saudarinya'",
              "icon": "fa-wand-magic",
              "readTime": "8 menit",
              "summary": "Mengenal 7 Harf Nasb yang bertugas mengubah Ism setelahnya menjadi berstatus NASB.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Jika Harf Jar bertugas memukul kata menjadi Jar, maka ada kelompok Harf perkasa lainnya yang bertugas mengubah kata setelahnya menjadi berstatus **NASB**! Mereka dikenal sebagai **Harf Nasb (Inna wa Akhawaatuhaa)**."
                },
                {
                  "type": "oral_drill",
                  "title": "7 Harf Nasb Utama dalam Al-Qur'an",
                  "chartRows": [
                    {
                      "arabic": "إِنَّ (Inna)",
                      "translation": "Sesungguhnya / Sungguh"
                    },
                    {
                      "arabic": "أَنَّ (Anna)",
                      "translation": "Bahwa / Bahwasanya"
                    },
                    {
                      "arabic": "كَأَنَّ (Ka-anna)",
                      "translation": "Seolah-olah / Bagaikan"
                    },
                    {
                      "arabic": "بِأَنَّ (Bi-anna)",
                      "translation": "Bahwa sesungguhnya"
                    },
                    {
                      "arabic": "لَيْتَ (Laita)",
                      "translation": "Andai saja / Sekiranya"
                    },
                    {
                      "arabic": "لَٰكِنَّ (Laakinna)",
                      "translation": "Akan tetapi / Namun"
                    },
                    {
                      "arabic": "لَعَلَّ (La'alla)",
                      "translation": "Semoga / Agar / Barangkali"
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Contoh Nyata Harf Nasb di Surah Al-'Ashr",
                  "formula": "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ➔ Inna + Al-Insaana (Nasb / -a)!",
                  "note": "Kata 'Al-Insaana' berstatus Nasb karena didahului secara langsung oleh Harf Nasb 'Inna'!"
                },
                {
                  "type": "quiz",
                  "id": "q_d5_harfnasb_1",
                  "question": "Mengapa dalam kalimat 'إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ' lafadz 'Allaha' berharakat fathah (status Nasb)?",
                  "options": [
                    {
                      "text": "Karena Allah adalah pelaku (Rafa')",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena didahului oleh Harf Nasb 'Inna'",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena berposisi sebagai Mudhaf",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Inna' adalah Harf Nasb yang mewajibkan Ism langsung setelahnya berstatus Nasb (Allaha)."
                }
              ]
            },
            {
              "id": "tadabbur-balaghah-dan-lab-day5",
              "number": "06",
              "title": "Tadabbur Balaghah Surah Al-Mulk & Lab Praktik Day 5",
              "icon": "fa-gem",
              "readTime": "12 menit",
              "summary": "Menyelami rahasia psikologi bahasa pada Surah Al-Mulk ayat 29 dan menguji pemahaman Idhafah & Harf Jar.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mengapa kita bersusah payah mempelajari Status, Harf Jar, dan Idhafah? Agar kita dapat merasakan keindahan mukjizat firman Allah yang tidak akan pernah bisa tertangkap oleh terjemahan bahasa mana pun di dunia!"
                },
                {
                  "type": "case_study",
                  "title": "Tadabbur Balaghah Surah Al-Mulk: 29: 'آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا'",
                  "points": [
                    {
                      "label": "1. Frasa Pertama: 'آمَنَّا بِهِ' (Aamannaa Bihi)",
                      "desc": "Susunan kata normal: Fi'l (Aamannaa / Kami beriman) diikuti Harf Jar (Bihi / Kepada-Nya). Mengapa urutannya tidak dibalik menjadi 'Bihi Aamannaa' (Hanya kepada-Nya kami beriman)? Karena keimanan seorang mukmin TIDAK HANYA kepada Allah saja, tetapi juga beriman kepada malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari akhir!"
                    },
                    {
                      "label": "2. Frasa Kedua: 'وَعَلَيْهِ تَوَكَّلْنَا' (Wa 'Alaihi Tawakkalnaa)",
                      "desc": "Susunan kata dibalik! Harf Jar 'Alaihi (Kepada-Nya) ditaruh LEBIH DULU sebelum Fi'l Tawakkalnaa (Kami bertawakkal). Dalam kaidah Balaghah (Taqdim), pemindahan ini menciptakan makna EKSKLUSIF (Ikhtishash): 'HANYA KEPADA-NYA KAMI BERTAWAKKAL!'."
                    },
                    {
                      "label": "3. Pelajaran Akidah yang Memukau:",
                      "desc": "Keimanan kita bercabang kepada seluruh rukun iman, tetapi TAWAKKAL dan penyandaran mutlak hanya boleh dipersembahkan kepada ALLAH SEMATA!"
                    }
                  ]
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Idhafah & Harf Jar Day 5",
                  "subtitle": "Analisis frasa Al-Qur'an berikut: tentukan jenis frasanya (Idhafah atau Harf Jar)!",
                  "items": [
                    {
                      "surah": "Surah Al-Fatihah: 1",
                      "ayahArabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                      "targetWord": "بِسْمِ اللَّهِ",
                      "transliteration": "Bismi-llaahi",
                      "meaning": "Dengan nama Allah",
                      "correctStatus": "jar",
                      "soundEnd": "Harf Jar 'Bi' + Idhafah 'Ismi Allahi'",
                      "explanation": "'Bi' adalah Harf Jar, 'Ismi' berstatus Jar sekaligus menjadi Mudhaf, dan 'Allahi' adalah Mudhaf Ilaih (Jar)."
                    },
                    {
                      "surah": "Surah An-Nas: 1",
                      "ayahArabic": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
                      "targetWord": "بِرَبِّ النَّاسِ",
                      "transliteration": "Bi-Rabbin-Naasi",
                      "meaning": "Kepada Tuhan pemelihara manusia",
                      "correctStatus": "jar",
                      "soundEnd": "Harf Jar 'Bi' + Idhafah 'Rabbi An-Naasi'",
                      "explanation": "'Bi' adalah Harf Jar, 'Rabbi' adalah Mudhaf (Ringan, Tanpa Al, Jar), dan 'An-Naasi' adalah Mudhaf Ilaih (Jar)."
                    },
                    {
                      "surah": "Surah Al-Baqarah: 2",
                      "ayahArabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ",
                      "targetWord": "فِيهِ",
                      "transliteration": "Fii-hi",
                      "meaning": "Di dalamnya",
                      "correctStatus": "jar",
                      "soundEnd": "Harf Jar 'Fii' + Ism Majrur Dhamir '-hi'",
                      "explanation": "'Fii' adalah Harf Jar yang memajrurkan kata ganti (Dhamir) '-hi'."
                    },
                    {
                      "surah": "Surah Al-Kautsar: 2",
                      "ayahArabic": "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
                      "targetWord": "لِرَبِّكَ",
                      "transliteration": "Li-Rabbika",
                      "meaning": "Untuk Tuhanmu",
                      "correctStatus": "jar",
                      "soundEnd": "Harf Jar 'Li' + Idhafah 'Rabbi-ka'",
                      "explanation": "'Li' adalah Harf Jar, 'Rabbi' adalah Mudhaf (Jar), dan '-ka' (kamu) adalah Mudhaf Ilaih."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Capaian Luar Biasa Day 5! 🚀",
                  "points": [
                    "Tipe Ism: 7 Kategori Ma'rifah (Alif Lam, Nama Diri, Munada, Dhamir, Ism Isyarah, Ism Maushul, Mudhaf dari Ma'rifah).",
                    "Frasa Idhafah: Mudhaf (Wajib Ringan & Tanpa Al) + Mudhaf Ilaih (Wajib Jar). Tidak boleh ada pemisah di antara keduanya.",
                    "11 Harf Jar Utama: Ba, Ta, Kaf, Lam, Waw, Min, Fii, 'An, 'Alaa, Hattaa, Ilaa.",
                    "7 Harf Nasb: Inna, Anna, Ka'anna, Bi'anna, Laita, Laakinna, La'alla."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 5",
              "url": "https://www.youtube.com/live/hueo7GbJxSs?si=TvfGmZUvJ681Acxh"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 5",
              "url": "https://drive.google.com/open?id=1PAtUolmjCmhg_joaFacy_QYJ--rU1yZE&usp=drive_copy"
            }
          ]
        },
        {
          "day": 6,
          "title": "Hari 6: 3 Fragmen Lengkap, Tabel 14 Dhamir (Rafa' vs Nasb/Jar), & 3 Takdir Dhamir",
          "videoUrl": "https://www.youtube.com/live/7I5DEH1LVx8?si=Q3iy76sr_uVZTtEZ",
          "pdfUrl": "https://drive.google.com/open?id=1OlJQdJT4NiclpsGXxmj7xeWnrAColOls&usp=drive_copy",
          "summary": "Menguasai 3 jenis frasa (Idhafah, Jarr Majroor, Inna wa Ismu Inna), kaidah hubungan jarak jauh Harf Nasb, tabel lengkap 14 Dhamir Munfashil (Rafa') beserta sepupu Muttashil (Nasb/Jar), serta 3 takdir penentu status Dhamir.",
          "lessons": [
            {
              "id": "jarr-majroor-dan-istilah-resmi",
              "number": "01",
              "title": "Frasa Jarr Majroor & Rantai Kombinasi Tingkat Tinggi",
              "icon": "fa-shield-halved",
              "readTime": "12 menit",
              "summary": "Memahami peristilahan resmi Jarr & Majroor serta bagaimana Harf Jar dapat dirangkai dengan Idhafah.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ketika sebuah Harf Jar bertemu dengan Ism setelahnya, susunan ini disebut **JARR MAJROOR (جَارّ وَمَجْرُور)**:\n* **Jarr (جَارّ)**: Harf Jar yang menjadi 'penyerang / pemukul'.\n* **Majroor (مَجْرُور)**: Ism korban yang dipukul sehingga berstatus **JAR**."
                },
                {
                  "type": "comparison_table",
                  "title": "Perbedaan Mendasar: Idhafah vs Jarr Majroor",
                  "headers": [
                    "Aspek",
                    "Frasa Idhafah (الإِضَافَة)",
                    "Frasa Jarr Majroor (جَارّ وَمَجْرُور)"
                  ],
                  "rows": [
                    [
                      "Komposisi Kata",
                      "Ism + Ism (Keduanya harus berupa Ism!)",
                      "Harf + Ism (Kata pertama wajib Harf Jar!)"
                    ],
                    [
                      "Syarat Kata Pertama",
                      "Mudhaf: Wajib Ringan & Tanpa Alif Lam",
                      "Jarr: Salah satu dari 11 Harf Jar (Bi, Ta, Kaf, Lam...)"
                    ],
                    [
                      "Syarat Kata Kedua",
                      "Mudhaf Ilaih: Wajib berstatus JAR",
                      "Majroor: Ism yang berstatus JAR karena Harf Jar"
                    ],
                    [
                      "Contoh Al-Qur'an",
                      "كِتَابُ اللَّهِ (Kitaabullaahi)",
                      "مِنَ اللَّهِ (Minallaahi)"
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Rantai Kombinasi: Jarr Majroor + Idhafah Sekaligus!",
                  "points": [
                    {
                      "label": "Contoh: بِرَبِّ النَّاسِ (Bi-Rabbin-Naasi)",
                      "desc": "1. 'Bi' adalah Harf Jarr.\n2. 'Rabbi' menjadi MAJROOR bagi 'Bi' (karena berharakat kasrah), SEKALIGUS menjadi MUDHAF bagi kata berikutnya (karena Ringan & Tanpa Al).\n3. 'An-Naasi' adalah MUDHAF ILAIH (Jar).\n➔ Terjemahan: 'Kepada [Harf Jar] Tuhan [Mudhaf] Pemelihara Manusia [Mudhaf Ilaih]'."
                    },
                    {
                      "label": "Contoh Shalawat: وَعَلَىٰ آلِ مُحَمَّدٍ (Wa 'Alaa Aali Muhammadin)",
                      "desc": "'Alaa (Jarr) ➔ Aali (Majroor sekaligus Mudhaf) ➔ Muhammadin (Mudhaf Ilaih: Jar dengan tanwin kasrah)!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d6_jarr_1",
                  "question": "Dalam frasa 'بِآيَاتِ اللَّهِ' (Bi-Aayaatillaahi), bagaimana kedudukan kata 'آيَاتِ' (Aayaati)?",
                  "options": [
                    {
                      "text": "Hanya sebagai Mudhaf Ilaih saja",
                      "isCorrect": false
                    },
                    {
                      "text": "Berfungsi ganda: sebagai Majroor bagi 'Bi', sekaligus sebagai Mudhaf bagi 'Allahi'",
                      "isCorrect": true
                    },
                    {
                      "text": "Hanya sebagai Harf Jar",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata 'Aayaati' menerima pukulan Jar dari Harf Jar 'Bi' (sebagai Majroor), dan pada saat yang sama bertindak sebagai Mudhaf (Ringan dan Tanpa Al) untuk Mudhaf Ilaih 'Allahi'."
                }
              ]
            },
            {
              "id": "frasa-harf-nasb-long-distance",
              "number": "02",
              "title": "Harf Nasb & Misteri Hubungan Jarak Jauh (Long Distance)",
              "icon": "fa-arrows-split-up-and-left",
              "readTime": "12 menit",
              "summary": "Memahami istilah 'Inna wa Ismu Inna' dan keunikan Harf Nasb yang bisa memukul Ism dari jarak yang sangat jauh.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ketika salah satu dari Harf Nasb (*Inna, Anna, Ka'anna, Bi'anna, Laita, Laakinna, La'alla*) muncul, pasangannya disebut **Ism Harf Nasb**:\n* `إِنَّ اللَّهَ` ➔ `إِنَّ` (Harf Nasb) + `اللَّهَ` (**Ismu Inna** / Nasb).\n* `لَٰكِنَّ الظَّالِمِينَ` ➔ `لَٰكِنَّ` + `الظَّالِمِينَ` (**Ismu Lakinna** / Nasb).\n* `لَيْتَ الْمُسْلِمَ` ➔ `لَيْتَ` + `الْمُسْلِمَ` (**Ismu Laita** / Nasb)."
                },
                {
                  "type": "card_grid",
                  "title": "Kaidah Jarak Antar Kata pada 3 Jenis Frasa",
                  "items": [
                    {
                      "icon": "fa-ban",
                      "title": "1. Idhafah: Wajib Rapat",
                      "desc": "TIDAK BOLEH ada kata pemisah antara Mudhaf dan Mudhaf Ilaih. Keduanya harus bersanding langsung."
                    },
                    {
                      "icon": "fa-ban",
                      "title": "2. Jarr Majroor: Wajib Rapat",
                      "desc": "TIDAK BOLEH ada pemisah antara Harf Jar dan Majroor-nya. Harf Jar langsung menempel pada Ism korbannya."
                    },
                    {
                      "icon": "fa-satellite-dish",
                      "title": "3. Harf Nasb: BISA JARAK JAUH!",
                      "desc": "Harf Nasb sangat toleran dengan hubungan jarak jauh (Long Distance Relationship). Korban Nasb-nya bisa berada jauh di belakang setelah deretan frasa lain!"
                    }
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Contoh Epik Hubungan Jarak Jauh: QS. Al-Baqarah: 164",
                  "points": [
                    {
                      "label": "1. Awal Ayat: إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ...",
                      "desc": "'Inna' mencari korban yang bisa di-nasb-kan. 'Fii' menolak karena Harf tidak punya status. 'Khalqi' dilindungi oleh 'Fii' (Jarr Majroor). 'As-Samawati' dan 'Al-Ardhi' terikat dalam Idhafah & Jar."
                    },
                    {
                      "label": "2. Akhir Ayat: ...لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
                      "desc": "Setelah berbelas-belas kata terlewati, 'Inna' akhirnya menemukan pasangannya pada kata 'لَآيَاتٍ' (La-Aayaatin). Tanda kasratain '-in' pada Jamak Feminin Salim di sini BUKAN JAR, melainkan **NASB** karena dipukul oleh 'Inna' yang berada jauh di awal ayat!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d6_nasb_1",
                  "question": "Mengapa kata 'الْإِنسَانَ' dalam ayat 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ' berstatus Nasb?",
                  "options": [
                    {
                      "text": "Karena merupakan pelaku perbuatan (Rafa')",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena berposisi sebagai Ismu Inna (didahului oleh Harf Nasb 'Inna')",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena didahului oleh kata 'Fii'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata 'Al-Insaana' adalah Ismu Inna yang diwajibkan berstatus Nasb oleh Harf Nasb 'Inna'."
                }
              ]
            },
            {
              "id": "tabel-14-dhamir-munfashil",
              "number": "03",
              "title": "Pilar Utama Bahasa Arab: Tabel 14 Dhamir Munfashil (Rafa')",
              "icon": "fa-users-viewfinder",
              "readTime": "15 menit",
              "summary": "Menghafal 14 Kata Ganti Mandiri (Dhamir Munfashil), memahami artinya, dan mengetahui bahwa seluruhnya selalu berstatus RAFA'.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Kata Ganti (**DHAMIR / الضَّمِير**) adalah pilar dan tulang punggung utama bahasa Arab. Jika bahasa Arab diibaratkan sebuah gedung pencakar langit, maka Dhamir adalah tiang pancang yang menopang seluruh struktur tersebut!\n\nSemua Dhamir bersifat **PEMBERONTAK ATURAN (Rebels / Mabni)**: mereka tidak peduli dengan bunyi harakat di akhir kata. Semua Dhamir Mandiri (**Dhamir Munfashil / مُنْفَصِل**) berstatus **RAFA'** dan bertipe **KHUSUS (Proper / Ma'rifah)**."
                },
                {
                  "type": "dhamir_chart",
                  "title": "Tabel 14 Dhamir Munfashil (Selalu Status RAFA')",
                  "rows": [
                    {
                      "person": "Orang ke-3 Pria (Ghaib)",
                      "singular": "هُوَ (Huwa - Dia 1M)",
                      "dual": "هُمَا (Humaa - Mereka Berdua 2M)",
                      "plural": "هُمْ (Hum - Mereka Semua 3M)"
                    },
                    {
                      "person": "Orang ke-3 Wanita (Ghaibah)",
                      "singular": "هِيَ (Hiya - Dia 1F)",
                      "dual": "هُمَا (Humaa - Mereka Berdua 2F)",
                      "plural": "هُنَّ (Hunna - Mereka Para Wanita 3F)"
                    },
                    {
                      "person": "Orang ke-2 Pria (Mukhatab)",
                      "singular": "أَنْتَ (Anta - Kamu 1M)",
                      "dual": "أَنْتُمَا (Antumaa - Kalian Berdua 2M)",
                      "plural": "أَنْتُمْ (Antum - Kalian Semua 3M)"
                    },
                    {
                      "person": "Orang ke-2 Wanita (Mukhatabah)",
                      "singular": "أَنْتِ (Anti - Kamu Wanita 1F)",
                      "dual": "أَنْتُمَا (Antumaa - Kalian Berdua 2F)",
                      "plural": "أَنْتُنَّ (Antunna - Kalian Para Wanita 3F)"
                    },
                    {
                      "person": "Orang ke-1 (Mutakallim)",
                      "singular": "أَنَا (Anaa - Saya 1M/F)",
                      "dual": "—",
                      "plural": "نَحْنُ (Nahnu - Kami/Kita 2/3M/F)"
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Kunci Mengingat Pola 3 Kata Per Baris",
                  "text": "Setiap baris dihafal 3 kata berturut-turut:\n1. Kata pertama = **1 Orang (Singular)**\n2. Kata kedua = **2 Orang (Dual / Humaa / Antumaa)**\n3. Kata ketiga = **Jamak (3+ Orang / Hum / Hunna / Antum / Antunna)**."
                },
                {
                  "type": "quiz",
                  "id": "q_d6_dhamir_1",
                  "question": "Apakah status (I'rab) dari kata ganti 'أَنْتِ' (Anti - Kamu wanita) yang berakhiran kasrah?",
                  "options": [
                    {
                      "text": "Berstatus JAR karena berakhiran kasrah",
                      "isCorrect": false
                    },
                    {
                      "text": "Berstatus RAFA' karena seluruh Dhamir Munfashil selalu berstatus Rafa' tanpa terpengaruh harakat kasrah",
                      "isCorrect": true
                    },
                    {
                      "text": "Berstatus Nasb",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dhamir Munfashil adalah kata yang mabni. Meskipun 'Anti' berakhiran kasrah, statusnya tetap 100% RAFA'."
                }
              ]
            },
            {
              "id": "dhamir-muttashil-dan-sepupunya",
              "number": "04",
              "title": "Dhamir Muttashil (Attached): Saudara Sepupu Berstatus Nasb/Jar",
              "icon": "fa-paperclip",
              "readTime": "12 menit",
              "summary": "Mengenal bentuk saudara sepupu dari 14 Dhamir yang menempel di akhir kata (Dhamir Muttashil) dan hanya bisa berstatus Nasb atau Jar.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setiap Dhamir Munfashil (Rafa') memiliki 'Saudara Sepupu' yang bertugas khusus untuk status **NASB dan JAR**. Mereka disebut **Dhamir Muttashil (مُتَّصِل)** karena selalu menempel di ujung kata lain dan tidak pernah berdiri sendiri."
                },
                {
                  "type": "comparison_table",
                  "title": "Peta Hubungan Sepupu: Munfashil (Rafa') vs Muttashil (Nasb/Jar)",
                  "headers": [
                    "Munfashil (Rafa')",
                    "Muttashil (Nasb/Jar)",
                    "Arti / Terjemahan",
                    "Trik Hafalan Cepat"
                  ],
                  "rows": [
                    [
                      "هُوَ (Huwa)",
                      "ـهُ / ـهِ (Hu / Hi)",
                      "Dia (1M)",
                      "Huwa disingkat menjadi Hu / Hi"
                    ],
                    [
                      "هُمَا (Humaa)",
                      "ـهُمَا / ـهِمَا (Humaa / Himaa)",
                      "Mereka Berdua (2M)",
                      "Bentuknya identik!"
                    ],
                    [
                      "هُمْ (Hum)",
                      "ـهُمْ / ـهِمْ (Hum / Him)",
                      "Mereka Semua (3M)",
                      "Bentuknya identik!"
                    ],
                    [
                      "هِيَ (Hiya)",
                      "ـهَا (Haa)",
                      "Dia (1F)",
                      "Sepupu yang suka tertawa (Haa)"
                    ],
                    [
                      "هُنَّ (Hunna)",
                      "ـهُنَّ / ـهِنَّ (Hunna / Hinna)",
                      "Mereka Wanita (3F)",
                      "Bentuknya identik!"
                    ],
                    [
                      "أَنْتَ (Anta)",
                      "ـكَ (Ka)",
                      "Kamu (1M)",
                      "Huruf 'Ta' diganti menjadi 'Ka'"
                    ],
                    [
                      "أَنْتُمَا (Antumaa)",
                      "ـكُمَا (Kumaa)",
                      "Kalian Berdua (2M)",
                      "'Tumaa' berima menjadi 'Kumaa'"
                    ],
                    [
                      "أَنْتُمْ (Antum)",
                      "ـكُمْ (Kum)",
                      "Kalian Semua (3M)",
                      "'Tum' berima menjadi 'Kum'"
                    ],
                    [
                      "أَنْتِ (Anti)",
                      "ـكِ (Ki)",
                      "Kamu Wanita (1F)",
                      "Huruf 'Ti' diganti menjadi 'Ki'"
                    ],
                    [
                      "أَنْتُنَّ (Antunna)",
                      "ـكُنَّ (Kunna)",
                      "Kalian Wanita (3F)",
                      "'Tunna' berima menjadi 'Kunna'"
                    ],
                    [
                      "أَنَا (Anaa)",
                      "ـنِي / ـي (Nii / Ii)",
                      "Saya (1M/F)",
                      "Memakai Nii (pada Fi'l) atau Ii (pada Ism)"
                    ],
                    [
                      "نَحْنُ (Nahnu)",
                      "ـنَا (Naa)",
                      "Kami/Kita (2/3M/F)",
                      "Nahnu disingkat menjadi Naa"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "emerald",
                  "title": "Varian 'Mood Tersenyum' (Hi, Himaa, Him, Hinna)",
                  "text": "Dhamir *Hu, Humaa, Hum, Hunna* terkadang berubah lafadznya menjadi *Hi, Himaa, Him, Hinna* jika huruf sebelumnya berharakat **kasrah** atau **yaa sukun** (Contoh: `فِيهِ` Fii-hi, `عَلَيْهِمْ` 'Alai-him, `رَبِّهِمْ` Rabbi-him). Perubahan ini murni demi kemudahan pelafalan lidah (*fonetik*) tanpa mengubah arti atau fungsi gramatikal sama sekali!"
                },
                {
                  "type": "quiz",
                  "id": "q_d6_sepupu_1",
                  "question": "Berasal dari Dhamir Munfashil manakah akhiran 'ـكُمْ' (Kum) dalam kata 'دِينُكُمْ' (Diinukum)?",
                  "options": [
                    {
                      "text": "Berasal dari 'هُمْ' (Hum)",
                      "isCorrect": false
                    },
                    {
                      "text": "Berasal dari 'أَنْتُمْ' (Antum - Kalian semua)",
                      "isCorrect": true
                    },
                    {
                      "text": "Berasal dari 'نَحْنُ' (Nahnu)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Akhiran 'Kum' (ـكُمْ) adalah bentuk sepupu bersambung (Dhamir Muttashil) dari 'Antum' (أَنْتُمْ)."
                }
              ]
            },
            {
              "id": "3-takdir-status-dhamir",
              "number": "05",
              "title": "3 Takdir Penentu Status Dhamir Muttashil (Nasb vs Jar)",
              "icon": "fa-diagram-project",
              "readTime": "12 menit",
              "summary": "Membedakan dengan pasti kapan sebuah Dhamir Muttashil berstatus NASB dan kapan berstatus JAR.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Karena Dhamir Muttashil bisa berstatus Nasb atau Jar, bagaimana kita bisa mengetahui status pastinya? Jawabannya: **Lihat kepada kata apa dhamir itu menempel!**"
                },
                {
                  "type": "status_cards",
                  "cards": [
                    {
                      "name": "TAKDIR 1: Menempel pada Harf Jar",
                      "role": "STATUS: 100% JAR (JARR MAJROOR)",
                      "badgeColor": "emerald",
                      "arabicLabel": "حَرْف جَرّ + ضَمِير = مَجْرُور",
                      "definition": "Jika Dhamir menempel pada Harf Jar (Bi, Li, Fii, 'An, 'Alaa, Ilaa), maka dhamir tersebut pasti berstatus JAR!",
                      "howToFind": "Harf Jar bertindak sebagai Jarr, dan Dhamir bertindak sebagai Majroor.",
                      "examples": [
                        {
                          "sentence": "بِهِ (Bi-hi) ➔ 'Hi' berstatus JAR (Dengan dia).",
                          "doer": "Jarr Majroor"
                        },
                        {
                          "sentence": "عَلَيْهِمْ ('Alai-him) ➔ 'Him' berstatus JAR (Atas mereka).",
                          "doer": "Jarr Majroor"
                        },
                        {
                          "sentence": "فِيهِ (Fii-hi) ➔ 'Hi' berstatus JAR (Di dalamnya).",
                          "doer": "Jarr Majroor"
                        },
                        {
                          "sentence": "لَكُمْ (La-kum) ➔ 'Kum' berstatus JAR (Untuk kalian).",
                          "doer": "Jarr Majroor"
                        }
                      ]
                    },
                    {
                      "name": "TAKDIR 2: Menempel pada Harf Nasb",
                      "role": "STATUS: 100% NASB (ISMU INNA)",
                      "badgeColor": "gold",
                      "arabicLabel": "حَرْف نَصْب + ضَمِير = مَنْصُوب",
                      "definition": "Jika Dhamir menempel pada Harf Nasb (Inna, Anna, Ka'anna, Laita, Laakinna, La'alla), maka dhamir tersebut pasti berstatus NASB!",
                      "howToFind": "Harf Nasb bertindak sebagai penyerang, dan Dhamir bertindak sebagai Ismu Inna.",
                      "examples": [
                        {
                          "sentence": "إِنَّهُ (Inna-hu) ➔ 'Hu' berstatus NASB (Sesungguhnya dia).",
                          "detail": "Ismu Inna"
                        },
                        {
                          "sentence": "إِنَّكَ (Inna-ka) ➔ 'Ka' berstatus NASB (Sesungguhnya kamu).",
                          "detail": "Ismu Inna"
                        },
                        {
                          "sentence": "لَعَلَّكُمْ (La'alla-kum) ➔ 'Kum' berstatus NASB (Agar kalian).",
                          "detail": "Ismu La'alla"
                        },
                        {
                          "sentence": "إِنَّا / إِنَّنَا (Innaa) ➔ 'Naa' berstatus NASB (Sesungguhnya kami).",
                          "detail": "Ismu Inna"
                        }
                      ]
                    },
                    {
                      "name": "TAKDIR 3: Menempel pada ISM (Kata Benda)",
                      "role": "STATUS: 100% IDHAFAH (MUDHAF ILAIH / JAR)",
                      "badgeColor": "moss",
                      "arabicLabel": "اسْم + ضَمِير = مُضَاف + مُضَاف إِلَيْهِ",
                      "definition": "Kaidah Emas: Kapan pun sebuah ISM bertemu langsung dengan DHAMIR MUTTASHIL, susunan itu 1 JUTA PERSEN adalah IDHAFAH!",
                      "howToFind": "Ism menjadi Mudhaf (Kata Milik), dan Dhamir menjadi Mudhaf Ilaih (Pemilik / Status JAR).",
                      "examples": [
                        {
                          "sentence": "كِتَابُكَ (Kitaabu-ka) ➔ Ism + Ka = Bukumu (Idhafah, Ka = Jar).",
                          "detail": "Mudhaf + Mudhaf Ilaih"
                        },
                        {
                          "sentence": "رَبُّنَا (Rabbu-naa) ➔ Ism + Naa = Tuhan kami (Idhafah, Naa = Jar).",
                          "detail": "Mudhaf + Mudhaf Ilaih"
                        },
                        {
                          "sentence": "عَبْدُهُ ('Abdu-hu) ➔ Ism + Hu = Hamba-Nya (Idhafah, Hu = Jar).",
                          "detail": "Mudhaf + Mudhaf Ilaih"
                        },
                        {
                          "sentence": "مَسْجِدُكُمْ (Masjidu-kum) ➔ Ism + Kum = Masjid kalian (Idhafah, Kum = Jar).",
                          "detail": "Mudhaf + Mudhaf Ilaih"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d6_takdir_1",
                  "question": "Dalam frasa 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً', apakah status dari akhiran 'ـنَا' (Naa) pada kata 'رَبَّنَا' (Rabbanaa)?",
                  "options": [
                    {
                      "text": "Berstatus Nasb karena didahului fi'il",
                      "isCorrect": false
                    },
                    {
                      "text": "Berstatus JAR karena menempel pada Ism ('Rabb') sehingga berposisi sebagai Mudhaf Ilaih dalam frasa Idhafah",
                      "isCorrect": true
                    },
                    {
                      "text": "Berstatus Rafa'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Rumus Emas: Ism + Dhamir Muttashil = Idhafah. Kata 'Rabb' adalah Ism (Mudhaf), sehingga akhiran '-naa' wajib berstatus JAR sebagai Mudhaf Ilaih."
                }
              ]
            },
            {
              "id": "tadabbur-alhijr-dan-lab-day6",
              "number": "06",
              "title": "Tadabbur Surah Al-Hijr: 9 & Laboratorium Praktik Day 6",
              "icon": "fa-gem",
              "readTime": "12 menit",
              "summary": "Mendalami ledakan makna akidah pada QS. Al-Hijr: 9 dan menguji kemahiran diagnosis Dhamir & Frasa.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita buka 'kode sumber' (*source code*) bahasa Al-Qur'an pada salah satu ayat paling mengguncang di Surah Al-Hijr ayat 9!"
                },
                {
                  "type": "case_study",
                  "title": "Tadabbur Ledakan Penegasan QS. Al-Hijr: 9: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ'",
                  "points": [
                    {
                      "label": "1. Kata 'إِنَّا' (Innaa = Inna + Naa)",
                      "desc": "Penegasan #1: 'Sesungguhnya KAMI...' (Inna menasbkan Dhamir Naa)."
                    },
                    {
                      "label": "2. Kata 'نَحْنُ' (Nahnu)",
                      "desc": "Penegasan #2: Munculnya kata ganti Rafa' 'KAMI' sekali lagi secara eksplisit di samping Innaa. Ini menghasilkan penegasan ganda: 'Sesungguhnya Kami, benar-benar KAMI-lah...'!"
                    },
                    {
                      "label": "3. Kata 'نَزَّلْنَا' (Nazzalnaa)",
                      "desc": "Penegasan #3: Fi'l dengan akhiran '-naa' (KAMI menurunkan). Tiga kali kata 'KAMI' diulang secara beruntun sebagai deklarasi keagungan Sang Raja Diraja semesta alam!"
                    },
                    {
                      "label": "4. Penggunaan Kata 'الذِّكْرَ' (Adz-Dzikra):",
                      "desc": "Allah menyebut Al-Qur'an sebagai 'Peringatan' (Adz-Dzikr): Seolah Allah berfirman, 'Tidakkah kalian sadar betapa agungnya Dzat yang mengirimkan peringatan ini sehingga kalian berani meremehkannya?!'."
                    },
                    {
                      "label": "5. Penutup: 'وَإِنَّا لَهُ لَحَافِظُونَ'",
                      "desc": "'Dan sesungguhnya Kami benar-benar menjadi penjaga mutlak bagi Al-Qur'an tersebut!'. Janji abadi bahwa Al-Qur'an tidak akan pernah bisa diubah atau dimusnahkan oleh siapa pun."
                    }
                  ]
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Diagnosis Dhamir & Frasa Day 6",
                  "subtitle": "Analisis frasa-frasa berikut: tentukan jenis frasa dan status dhamirnya!",
                  "items": [
                    {
                      "surah": "Surah Al-Kafirun: 6",
                      "ayahArabic": "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
                      "targetWord": "لَكُمْ دِينُكُمْ",
                      "transliteration": "Lakum Diinukum",
                      "meaning": "Untuk kalian agama kalian",
                      "correctStatus": "jar",
                      "soundEnd": "Jarr Majroor 'La-kum' + Idhafah 'Diinu-kum'",
                      "explanation": "'La-kum' adalah Jarr Majroor (Kum = Jar). 'Diinu-kum' adalah Idhafah (Ism + Dhamir Kum = Jar)."
                    },
                    {
                      "surah": "Surah Al-Ikhlas: 1",
                      "ayahArabic": "قُلْ هُوَ اللَّهُ أَحَدٌ",
                      "targetWord": "هُوَ",
                      "transliteration": "Huwa",
                      "meaning": "Dia (Allah)",
                      "correctStatus": "rafa",
                      "soundEnd": "Dhamir Munfashil (Rafa', 1M, Proper)",
                      "explanation": "'Huwa' adalah Dhamir Munfashil yang selalu 100% berstatus RAFA' dan bertipe KHUSUS (Proper)."
                    },
                    {
                      "surah": "Surah An-Nasr: 3",
                      "ayahArabic": "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
                      "targetWord": "إِنَّهُ",
                      "transliteration": "Inna-hu",
                      "meaning": "Sesungguhnya Dia",
                      "correctStatus": "nasb",
                      "soundEnd": "Harf Nasb 'Inna' + Ismu Inna 'Hu' (Nasb)",
                      "explanation": "'Inna' adalah Harf Nasb yang menjadikan Dhamir '-hu' berstatus NASB sebagai Ismu Inna."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 5",
                      "ayahArabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                      "targetWord": "إِيَّاكَ",
                      "transliteration": "Iyyaa-ka",
                      "meaning": "Hanya kepada-Mu",
                      "correctStatus": "nasb",
                      "soundEnd": "Dhamir Manshub Munfashil '-ka' (Nasb)",
                      "explanation": "Akhiran '-ka' adalah Dhamir Muttashil orang ke-2 tunggal (Anta) dalam posisi Nasb eksklusif."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Pencapaian Menakjubkan Day 6! 🎯",
                  "points": [
                    "3 Jenis Frasa: Idhafah (Mudhaf + Mudhaf Ilaih), Jarr Majroor (Harf Jar + Majroor), dan Inna wa Ismu Inna.",
                    "Kaidah Jarak: Idhafah & Jarr Majroor wajib berdampingan rapat; Harf Nasb bisa menjalin hubungan jarak jauh.",
                    "Tabel 14 Dhamir Munfashil (Huwa Humaa Hum... Anaa Nahnu) seluruhnya berstatus RAFA' dan Proper.",
                    "14 Dhamir Muttashil (Hu, Humaa, Hum, Ka, Kum, Naa...) hanya bisa berstatus NASB atau JAR.",
                    "3 Takdir Dhamir Muttashil: Menempel Harf Jar ➔ Majroor (Jar); Menempel Harf Nasb ➔ Ismu Inna (Nasb); Menempel Ism ➔ Idhafah (Jar)."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 6",
              "url": "https://www.youtube.com/live/7I5DEH1LVx8?si=Q3iy76sr_uVZTtEZ"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 6",
              "url": "https://drive.google.com/open?id=1OlJQdJT4NiclpsGXxmj7xeWnrAColOls&usp=drive_copy"
            }
          ]
        },
        {
          "day": 7,
          "title": "Hari 7: Frasa Sifat (Mawshuf & Sifah), Bedah Total Basmalah & Al-Fatihah Ayat 2–4",
          "videoUrl": "https://www.youtube.com/live/Z8HgzOZi22k?si=3VWTAbCecxl6rPMe",
          "pdfUrl": "https://drive.google.com/open?id=1e_l_mKLZKi6MPXsRlmL97MV2ZBKOGz7Z&usp=drive_copy",
          "summary": "Menguasai Frasa Sifat (Mawshuf & Sifah / 4 dari 4 kecocokan properti), menuntaskan analisis gramatikal Basmalah, membedah rantai 4 Sifat pada Surah Al-Fatihah ayat 2–4, dan memahami keistimewaan lafadz Jalalah 'Allah'.",
          "lessons": [
            {
              "id": "peta-ringkasan-seluruh-properti-ism",
              "number": "01",
              "title": "Peta Ringkasan Seluruh Ism & Rahasia Nama Para Nabi",
              "icon": "fa-map-location-dot",
              "readTime": "12 menit",
              "summary": "Merangkum 4 Properti Ism dalam 1 pandangan utuh dan menguak rahasia fleksibilitas nama 3 huruf pada para Nabi.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Sebelum melangkah ke puncak pembedahan ayat Al-Qur'an, mari kita satukan seluruh puzzle 4 Properti Ism yang telah kita pelajari selama sepekan penuh menjadi satu peta komprehensif."
                },
                {
                  "type": "card_grid",
                  "title": "Peta 4 Properti Ism dalam 1 Pandangan",
                  "items": [
                    {
                      "icon": "fa-scale-balanced",
                      "title": "1. Status (الإِعْرَاب)",
                      "desc": "Rafa' (Pelaku), Nasb (Detail / Ismu Inna), Jar (Setelah 'Of' / Setelah Harf Jar). Ditentukan lewat Ending Sound, Combination, atau Dhamir."
                    },
                    {
                      "icon": "fa-arrow-up-1-9",
                      "title": "2. Number (العَدَد)",
                      "desc": "Tunggal (1), Ganda (2), Jamak Maskulin (-oona/-eena), Jamak Feminin (-aatun/-aatin), Jamak Taksir (Benda = 1F, Manusia = 1F atau 3M/F), Ism Jam' (Qawm, Naas, Qarn)."
                    },
                    {
                      "icon": "fa-venus-mars",
                      "title": "3. Gender (الجِنْس)",
                      "desc": "Default Maskulin. Feminin jika: Tanda fisik (ة, ـَاء, ـَى), Anggota tubuh berpasangan, Bangsa Arab berkata begitu (Kisah Prajurit Perang), atau Jamak Taksir."
                    },
                    {
                      "icon": "fa-tag",
                      "title": "4. Type (النَّوْع)",
                      "desc": "Default Umum (Nakirah / Tanwin). Khusus (Ma'rifah) jika masuk dalam 7 Kategori: Alif Lam, Nama Diri, Munada, Dhamir, Ism Isyarah, Ism Maushul, Mudhaf dari Ma'rifah."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Rahasia Fleksibilitas Nama 3 Huruf Para Nabi (Analogi Kewarganegaraan)",
                  "items": [
                    {
                      "type": "Kaidah Dasar Nama Non-Arab ('Ajam):",
                      "examples": "Nama non-Arab bersifat Fleksibel Sebagian (Ghayr Munsharif: -u, -a, -a tanpa tanwin), seperti يُوسُفُ (Yusuf), إِبْرَاهِيمُ (Ibrahim), آدَمُ (Adam - 4 huruf karena mad alif)."
                    },
                    {
                      "type": "Pengecualian Emas 'Kewarganegaraan 3 Huruf':",
                      "examples": "Jika nama non-Arab hanya terdiri dari 3 HURUF dengan sukun di tengah, bangsa Arab memberinya status FLEKSIBEL PENUH (Bisa bertanwin -un, -an, -in), seperti: نُوحٌ (Nuh) dan لُوطٌ (Luth)!"
                    },
                    {
                      "type": "4 Nabi Berbangsa Arab Asli:",
                      "examples": "Hanya ada 4 Nabi yang berasal dari bangsa Arab asli sehingga otomatis fleksibel penuh tanpa memandang jumlah huruf: هُودٌ (Hud), صَالِحٌ (Salih), شُعَيْبٌ (Syu'aib), dan مُحَمَّدٌ (Muhammad)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d7_peta_1",
                  "question": "Mengapa nama Nabi Luth (لُوطٌ) berharakat tanwin (fleksibel penuh), padahal beliau bukan nabi berbangsa Arab?",
                  "options": [
                    {
                      "text": "Karena memiliki Alif Lam tersembunyi",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena nama non-Arab yang terdiri dari 3 huruf diberi keistimewaan fleksibel penuh oleh bangsa Arab",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena nama beliau berakhiran kasrah",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Nama non-Arab yang memiliki tepat 3 huruf (seperti Nuh dan Luth) mendapatkan perlakuan khusus menjadi Fleksibel Penuh (Munsharif) dan berakhiran tanwin."
                }
              ]
            },
            {
              "id": "frasa-sifat-mawshuf-sifah",
              "number": "02",
              "title": "Frasa Sifat (Mawshuf & Sifah): Kaidah 4 Kecocokan Mutlak",
              "icon": "fa-wand-magic-sparkles",
              "readTime": "15 menit",
              "summary": "Memahami Frasa Sifat, aturan urutan kata terbalik dibanding bahasa Inggris, dan syarat mutlak keselarasan 4 dari 4 properti.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Frasa ke-4 dalam bahasa Arab adalah **FRASA SIFAT (المُرَكَّب الوَصْفِي)** yang terdiri dari:\n* **Mawshuf (مَوْصُوف)**: Kata benda yang disifati (disebutkan lebih dulu).\n* **Sifah (صِفَة)**: Kata sifat yang mendeskripsikan (disebutkan setelahnya).\n\nBerbeda dengan bahasa Inggris (*Good Muslim*), dalam bahasa Arab kata bendanya selalu berada di depan: `مُسْلِمٌ صَالِحٌ` (Muslim yang saleh)."
                },
                {
                  "type": "formula_box",
                  "title": "Kaidah Emas Frasa Sifat: 4 dari 4 Properti WAJIB COCOK!",
                  "formula": "Mawshuf & Sifah HARUS IDENTIK dalam: Status, Number, Gender, & Type!",
                  "note": "Jika salah satu saja dari 4 properti tidak cocok, maka frasa tersebut BUKAN Frasa Sifat! (Perbedaan Ringan/Berat atau Fleksibilitas tidak membatalkan sifat)."
                },
                {
                  "type": "comparison_table",
                  "title": "Uji Kecocokan 4 Properti Mawshuf & Sifah",
                  "headers": [
                    "Frasa Arab",
                    "Status",
                    "Number",
                    "Gender",
                    "Type",
                    "Hasil Diagnosis"
                  ],
                  "rows": [
                    [
                      "مُسْلِمٌ صَالِحٌ (Muslimun Salihun)",
                      "Rafa' = Rafa'",
                      "1 = 1",
                      "M = M",
                      "Umum = Umum",
                      "✅ Frasa Sifat: 'Seorang Muslim yang saleh'"
                    ],
                    [
                      "طَالِبَاتٍ مُسْلِمَاتٍ (Thalibaatin Muslimaatin)",
                      "Jar/Nasb = Jar/Nasb",
                      "3F = 3F",
                      "F = F",
                      "Umum = Umum",
                      "✅ Frasa Sifat: 'Para siswi yang muslimah'"
                    ],
                    [
                      "الْعَبْدُ الْمُؤْمِنُ (Al-'Abdu Al-Mu'minu)",
                      "Rafa' = Rafa'",
                      "1 = 1",
                      "M = M",
                      "Khusus = Khusus",
                      "✅ Frasa Sifat: 'Hamba yang beriman itu'"
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Sifat untuk Jamak Taksir Non-Manusia (Aturan 'She / 1F')",
                  "points": [
                    {
                      "label": "Contoh QS. Al-Ghasyiyah: 13: 'سُرُرٌ مَّرْفُوعَةٌ' (Sururun Marfuu'atun)",
                      "desc": "1. 'Sururun' adalah Jamak Taksir Non-Manusia (Tempat tidur) ➔ Berstatus Rafa', 1F (She), Umum.\n2. 'Marfuu'atun' adalah kata sifat (Ditinggikan) ➔ Berstatus Rafa', 1F (Ta Marbuthah), Umum.\n➔ Keduanya cocok 4 dari 4! Terjemahan: 'Tempat-tempat tidur yang ditinggikan'."
                    },
                    {
                      "label": "Contoh QS. Al-Ghasyiyah: 14: 'أَكْوَابٌ مَّوْضُوعَةٌ' (Akwaabun Mawdhuu'atun)",
                      "desc": "'Akwaabun' (Gelas-gelas / Jamak Taksir Benda = Rafa', 1F, Umum) + 'Mawdhuu'atun' (Tersedia = Rafa', 1F, Umum) ➔ 'Gelas-gelas yang telah tersedia'."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d7_sifah_1",
                  "question": "Mengapa kata 'مَرْفُوعَةٌ' (Marfuu'atun - tunggal feminin) bisa menjadi sifat bagi kata 'سُرُرٌ' (Sururun - tempat-tempat tidur jamak)?",
                  "options": [
                    {
                      "text": "Karena keduanya berakhiran tanwin",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena 'Sururun' adalah Jamak Taksir Benda (Non-Manusia) yang wajib diperlakukan sebagai 1F (Singular Feminine / She)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena salah harakat penulisan",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kaidah Emas Broken Plural: Jamak Taksir Non-Manusia wajib diperlakukan sebagai 1F (Singular Feminine). Oleh karena itu, kata sifat yang mendeskripsikannya juga harus berbentuk 1F (Marfuu'atun)."
                }
              ]
            },
            {
              "id": "bedah-total-basmalah",
              "number": "03",
              "title": "Bedah Total Ayat Pertama: Anatomi Gramatikal Basmalah",
              "icon": "fa-book-quran",
              "readTime": "15 menit",
              "summary": "Membedah setiap kata dan hubungan frasa pada 'Bismillaahir-Rahmaanir-Rahiim' tanpa membutuhkan bantuan terjemahan.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Hari ini adalah tonggak bersejarah! Kita akan membedah tuntas ayat pertama Al-Qur'an: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ` (Bismillaahir-Rahmaanir-Rahiim) menggunakan seluruh ilmu yang telah kita pelajari."
                },
                {
                  "type": "case_study",
                  "title": "Anatomi Lengkap Basmalah (Kata demi Kata)",
                  "points": [
                    {
                      "label": "1. 'بِـ' (Bi) ➔ Harf Jarr",
                      "desc": "Huruf preposisi yang bermakna 'Dengan / In / By'. Bertugas memukul Ism setelahnya menjadi berstatus JAR."
                    },
                    {
                      "label": "2. 'اسْمِ' (Ismi) ➔ Majroor & Mudhaf",
                      "desc": "Menjadi MAJROOR bagi Harf Jar 'Bi' (berharakat kasrah: Ismi), SEKALIGUS bertindak sebagai MUDHAF bagi kata berikutnya (karena Ringan & Tanpa Al)."
                    },
                    {
                      "label": "3. 'اللَّهِ' (Allahi) ➔ Mudhaf Ilaih & Mawshuf Utama",
                      "desc": "Menjadi MUDHAF ILAIH bagi 'Ismi' (berstatus Jar), SEKALIGUS menjadi MAWSHUF (Kata Benda yang Disifati) dengan 4 Properti: JAR, 1, MASKULIN, KHUSUS (Proper)."
                    },
                    {
                      "label": "4. 'الرَّحْمَٰنِ' (Ar-Rahmaani) ➔ Sifah #1 bagi Allah",
                      "desc": "Memiliki 4 Properti: JAR, 1, MASKULIN, KHUSUS (Ber-Alif Lam). Artinya: 'Dzat Yang Maha Pengasih / Ekstrem Kasih Sayang-Nya saat ini'."
                    },
                    {
                      "label": "5. 'الرَّحِيمِ' (Ar-Rahiimi) ➔ Sifah #2 bagi Allah",
                      "desc": "Memiliki 4 Properti: JAR, 1, MASKULIN, KHUSUS (Ber-Alif Lam). Artinya: 'Dzat Yang Maha Penyayang / Abadi Kasih Sayang-Nya'."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Tadabbur: Mengapa Basmalah Bukan Kalimat Sempurna?",
                  "text": "Secara tata bahasa, *'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang...'* bukanlah kalimat lengkap. Mengapa? Karena **PERBUATAN KITA-LAH YANG MELENGKAPINYA**!\nSaat kita hendak makan, belajar, berkendara, atau shalat, tindakan kita menjadi penyempurna kalimat tersebut. Semua perbuatan dalam hidup kita tidak akan pernah sempurna tanpa pembuka cinta dan kasih sayang Allah!"
                },
                {
                  "type": "quiz",
                  "id": "q_d7_basmalah_1",
                  "question": "Mengapa kata 'الرَّحْمَٰنِ' (Ar-Rahmaani) dan 'الرَّحِيمِ' (Ar-Rahiimi) sama-sama berharakat kasrah (status Jar)?",
                  "options": [
                    {
                      "text": "Karena keduanya berstatus Mudhaf Ilaih",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena keduanya adalah Sifah (Kata Sifat) yang mencocoki 4 properti dari Mawshuf 'Allahi' yang berstatus Jar",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena didahului langsung oleh Harf Jar 'Bi'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Ar-Rahmaani' dan 'Ar-Rahiimi' adalah Sifah #1 dan Sifah #2 bagi lafadz 'Allahi'. Karena Mawshuf-nya (Allahi) berstatus Jar, maka kedua sifat tersebut wajib mengikuti status Jar."
                }
              ]
            },
            {
              "id": "bedah-surah-alfatihah-ayat-2-4",
              "number": "04",
              "title": "Bedah Al-Fatihah Ayat 2–4: Rantai 4 Sifat Bertingkat",
              "icon": "fa-layer-group",
              "readTime": "15 menit",
              "summary": "Menganalisis bagaimana Surah Al-Fatihah ayat 2, 3, dan 4 tersambung secara gramatikal dalam 4 Sifat bagi Lafadz Allah.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita analisis susunan ayat 2 sampai 4 dari Surah Al-Fatihah:\n`الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ`\nSecara menakjubkan, ketiga ayat ini adalah **SATU KESATUAN GRAMATIKAL** yang saling terhubung!"
                },
                {
                  "type": "case_study",
                  "title": "Peta Hubungan 4 Sifat pada Al-Fatihah Ayat 2–4",
                  "points": [
                    {
                      "label": "Mawshuf Utama: 'لِلَّهِ' (Lillaahi)",
                      "desc": "Harf Jar 'Li' + Ism 'Allahi' (Majroor). 4 Properti Lafadz Allah: JAR, 1, MASKULIN, KHUSUS (J1MP)."
                    },
                    {
                      "label": "Sifah #1: 'رَبِّ الْعَالَمِينَ' (Rabbil 'Aalamiina)",
                      "desc": "Frasa Idhafah: 'Rabbi' (Mudhaf) + 'Al-'Aalamiina' (Mudhaf Ilaih Khusus). Seluruh frasa Idhafah ini diwakili oleh Mudhaf-nya yang memiliki properti: JAR, 1, MASKULIN, KHUSUS ➔ **Cocok sempurna sebagai Sifah #1!**"
                    },
                    {
                      "label": "Sifah #2: 'الرَّحْمَٰنِ' (Ar-Rahmaani)",
                      "desc": "Kata tunggal berproperti: JAR, 1, MASKULIN, KHUSUS ➔ **Sifah #2 bagi Allah!**"
                    },
                    {
                      "label": "Sifah #3: 'الرَّحِيمِ' (Ar-Rahiimi)",
                      "desc": "Kata tunggal berproperti: JAR, 1, MASKULIN, KHUSUS ➔ **Sifah #3 bagi Allah!**"
                    },
                    {
                      "label": "Sifah #4: 'مَالِكِ يَوْمِ الدِّينِ' (Maaliki Yawmid-Diini)",
                      "desc": "Rantai Idhafah ganda: 'Maaliki' (Mudhaf Utama) ➔ 'Yawmi' (Mudhaf Ilaih & Mudhaf) ➔ 'Ad-Diini' (Mudhaf Ilaih Khusus). Seluruh rantai ini diwakili oleh Mudhaf utamanya 'Maaliki' (JAR, 1, MASKULIN, KHUSUS) ➔ **Cocok sempurna sebagai Sifah #4!**"
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Pelajaran Metodologis: Al-Qur'an Adalah Satu Kesatuan Utuh",
                  "text": "Meskipun ayat 2, 3, dan 4 dipisahkan oleh tanda waqaf ayat, secara tata bahasa ketiganya adalah **SATU KALIMAT BESAR**. Ini mengajarkan kepada kita bahwa ayat-ayat Al-Qur'an tidak boleh dipotong-potong lepas dari konteks dan sifat-sifat Allah lainnya!"
                },
                {
                  "type": "quiz",
                  "id": "q_d7_fatihah_1",
                  "question": "Mengapa seluruh rangkaian 'مَالِكِ يَوْمِ الدِّينِ' dianggap berstatus Khusus (Proper / Ma'rifah)?",
                  "options": [
                    {
                      "text": "Karena kata 'Maaliki' memiliki tanwin",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena 'Maaliki' meminjam sifat khusus dari 'Yawmi', dan 'Yawmi' meminjam sifat khusus dari 'Ad-Diini' yang memiliki Alif Lam",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena kata 'Yawm' adalah nama tempat",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Rantai penularan sifat khusus: 'Ad-Diini' (ber-Al / Khusus) menularkan sifat khusus kepada Mudhaf-nya 'Yawmi', lalu 'Yawmi' menularkan sifat khusus kepada Mudhaf utamanya 'Maaliki'."
                }
              ]
            },
            {
              "id": "keistimewaan-lafadz-allah",
              "number": "05",
              "title": "Misteri & Keistimewaan Gramatikal Lafadz 'ALLAH'",
              "icon": "fa-star-and-crescent",
              "readTime": "10 menit",
              "summary": "Memahami mengapa lafadz Jalalah 'Allah' memecahkan seluruh aturan standar bahasa Arab sebagai nama yang maha agung.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Sebagaimana Allah tidak dapat diserupakan dengan makhluk-Nya, lafadz nama agung **'ALLAH'** juga tidak dapat dibandingkan dengan kata apa pun dalam bahasa Arab!"
                },
                {
                  "type": "card_grid",
                  "title": "4 Keunikan Luar Biasa Lafadz 'ALLAH'",
                  "items": [
                    {
                      "icon": "fa-gem",
                      "title": "1. Tanpa Tanwin Namun Tetap Fleksibel Penuh",
                      "desc": "Kata biasa yang tanpa Al dan tanpa tanwin biasanya bersifat Fleksibel Sebagian (-u, -a, -a). Namun lafadz Allah selalu berharakat tunggal DAN tetap Fleksibel Penuh: اللَّهُ (Allahu), اللَّهَ (Allaha), اللَّهِ (Allahi)!"
                    },
                    {
                      "icon": "fa-volume-high",
                      "title": "2. Pelafalan Tebal (Tafkheem)",
                      "desc": "Huruf Lam (ل) di seluruh bahasa Arab selalu dibaca tipis (Tarqiq). Hanya pada lafadz Allah, huruf Lam dibaca tebal dan agung (Tafkheem) jika didahului harakat fathah atau dhammah."
                    },
                    {
                      "icon": "fa-bullhorn",
                      "title": "3. Bisa Dipanggil Langsung: 'Yaa Allah'",
                      "desc": "Dalam bahasa Arab terlarang menggabungkan huruf nida 'Yaa' dengan kata ber-Alif Lam. Namun seruan 'يَا اللَّهُ' (Yaa Allah) sah digunakan, membuktikan bahwa 'Allah' adalah nama diri murni, bukan bentukan 'Al + Ilah'."
                    },
                    {
                      "icon": "fa-shield-halved",
                      "title": "4. Tidak Pernah Menjadi Mudhaf",
                      "desc": "Lafadz Allah di dalam Al-Qur'an hanya pernah berposisi sebagai Mudhaf Ilaih (Pemilik segalanya: كِتَابُ اللَّهِ, عَبْدُ اللَّهِ) dan tidak pernah menjadi Mudhaf."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d7_lafadz_1",
                  "question": "Manakah di antara pernyataan berikut yang BENAR mengenai lafadz 'ALLAH' dalam tata bahasa Arab?",
                  "options": [
                    {
                      "text": "Lafadz Allah adalah kata fleksibel sebagian",
                      "isCorrect": false
                    },
                    {
                      "text": "Lafadz Allah selalu berharakat tunggal (tanpa tanwin) namun tetap fleksibel penuh (Allahu, Allaha, Allahi)",
                      "isCorrect": true
                    },
                    {
                      "text": "Lafadz Allah sering menjadi Mudhaf dalam Al-Qur'an",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Lafadz Allah adalah kata yang unik: selalu berharakat tunggal tanpa tanwin, namun tetap memiliki 3 bentuk harakat lengkap (Allahu [Rafa'], Allaha [Nasb], Allahi [Jar])."
                }
              ]
            },
            {
              "id": "tadabbur-dan-lab-praktik-day7",
              "number": "06",
              "title": "Laboratorium Analisis Rantai Idhafah & Sifat Day 7",
              "icon": "fa-flask",
              "readTime": "12 menit",
              "summary": "Menguji kemahiran mendiagnosis rantai Idhafah bertingkat panjang dan frasa sifat pada ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Selamat! Anda kini telah menguasai 4 dari 5 jenis Frasa dalam bahasa Arab: Idhafah, Jarr Majroor, Harf Nasb wa Ismuha, dan Mawshuf Sifah. Mari kita uji kemampuan ini di laboratorium praktik!"
                },
                {
                  "type": "case_study",
                  "title": "Studi Kasus Rantai Idhafah Panjang: QS. Maryam: 2: 'ذِكْرُ رَحْمَتِ رَبِّكَ'",
                  "points": [
                    {
                      "label": "1. Analisis Rantai Kata:",
                      "desc": "'Dzikru' (Mudhaf #1) ➔ 'Rahmati' (Mudhaf Ilaih & Mudhaf #2) ➔ 'Rabbi' (Mudhaf Ilaih & Mudhaf #3) ➔ '-ka' (Dhamir Muttashil / Mudhaf Ilaih penutup)."
                    },
                    {
                      "label": "2. Menentukan 4 Properti Seluruh Rantai Frasa:",
                      "desc": "Seluruh rantai Idhafah ini diwakili oleh Mudhaf utamanya 'Dzikru': berstatus RAFA', 1 (Tunggal), MASKULIN, KHUSUS (karena menular dari Dhamir '-ka' yang merupakan kata khusus)!"
                    },
                    {
                      "label": "3. Terjemahan:",
                      "desc": "'[Penjelasan tentang] Peringatan rahmat Tuhanmu'."
                    }
                  ]
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Praktik Frasa Day 7",
                  "subtitle": "Analisis frasa-frasa Al-Qur'an berikut: tentukan jenis frasa dan fungsinya!",
                  "items": [
                    {
                      "surah": "Surah Al-Fatihah: 1",
                      "ayahArabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                      "targetWord": "الرَّحْمَٰنِ الرَّحِيمِ",
                      "transliteration": "Ar-Rahmaanir-Rahiim",
                      "meaning": "Yang Maha Pengasih lagi Maha Penyayang",
                      "correctStatus": "jar",
                      "soundEnd": "Sifah #1 & Sifah #2 bagi Lafadz 'Allahi' (Jar)",
                      "explanation": "Keduanya adalah frasa sifat bertingkat yang mengikuti status Jar dari Mawshuf 'Allahi'."
                    },
                    {
                      "surah": "Surah Al-Fatihah: 2",
                      "ayahArabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                      "targetWord": "رَبِّ الْعَالَمِينَ",
                      "transliteration": "Rabbil 'Aalamiin",
                      "meaning": "Tuhan semesta alam",
                      "correctStatus": "jar",
                      "soundEnd": "Idhafah (Rabbi = Jar) yang bertindak sebagai Sifah #1 bagi 'Lillaahi'",
                      "explanation": "Frasa Idhafah 'Rabbil 'Aalamiina' diwakili oleh 'Rabbi' (Jar, 1, M, Proper) sehingga berfungsi sebagai Sifah #1 bagi Allah."
                    },
                    {
                      "surah": "Surah Al-Ghasyiyah: 13",
                      "ayahArabic": "فِيهَا سُرُرٌ مَّرْفُوعَةٌ",
                      "targetWord": "سُرُرٌ مَّرْفُوعَةٌ",
                      "transliteration": "Sururun Marfuu'ah",
                      "meaning": "Tempat-tempat tidur yang ditinggikan",
                      "correctStatus": "rafa",
                      "soundEnd": "Mawshuf (1F Jamak Taksir) + Sifah (1F)",
                      "explanation": "Keduanya cocok dalam 4 properti: Rafa', 1F, Umum (Nakirah)."
                    },
                    {
                      "surah": "Surah Al-Baqarah: 163",
                      "ayahArabic": "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ",
                      "targetWord": "إِلَٰهٌ وَاحِدٌ",
                      "transliteration": "Ilaahun Waahidun",
                      "meaning": "Tuhan Yang Maha Esa",
                      "correctStatus": "rafa",
                      "soundEnd": "Mawshuf + Sifah (Rafa', 1M, Umum)",
                      "explanation": "'Ilaahun' (Tuhan) disifati oleh 'Waahidun' (Esa/Satu) dengan kecocokan 4 dari 4 properti."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Pencapaian Gemilang Day 7! 🏆",
                  "points": [
                    "Peta Komprehensif Ism: Status, Number, Gender, dan Type berhasil dirangkum secara utuh.",
                    "Frasa Sifat (Mawshuf & Sifah): Wajib cocok 4 dari 4 properti (Status, Number, Gender, Type). Boleh berjarak dan boleh memiliki banyak sifat.",
                    "Sifat Jamak Taksir Non-Manusia berpadanan dengan Sifat 1F (Singular Feminine / She).",
                    "Pembedahan Sempurna Basmalah: Harf Jar 'Bi' + Mudhaf 'Ismi' + Mudhaf Ilaih & Mawshuf 'Allahi' + Sifah #1 'Ar-Rahmaan' + Sifah #2 'Ar-Rahiim'.",
                    "Pembedahan Al-Fatihah Ayat 2–4: Membuktikan bahwa 3 ayat ini adalah SATU KESATUAN KALIMAT yang memuat 4 Sifat bagi Allah."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 7",
              "url": "https://www.youtube.com/live/Z8HgzOZi22k?si=3VWTAbCecxl6rPMe"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 7",
              "url": "https://drive.google.com/open?id=1e_l_mKLZKi6MPXsRlmL97MV2ZBKOGz7Z&usp=drive_copy"
            }
          ]
        },
        {
          "day": 8,
          "title": "Hari 8: Fragmen Ism Isyarah (Kata Tunjuk), Menemukan 'IS' (Jumlah Ismiyyah), & Rekapitulasi Tuntas Ism",
          "videoUrl": "https://www.youtube.com/live/Ojw1-ymSl20?si=uECibnofK8ROqVMV",
          "pdfUrl": "https://drive.google.com/open?id=1P1E6CcZhkTlRxiH6m2ram2lWX8JBoAX4&usp=drive_copy",
          "summary": "Menguasai 6 Kata Tunjuk Pokok (Ism Isyarah), Kaidah Alif Lam penentu Fragmen vs Kalimat Sempurna, teknik 'Break the Chain' untuk menemukan kata 'IS' (Jumlah Ismiyyah), dan menuntaskan seluruh fondasi Ism.",
          "lessons": [
            {
              "id": "enam-kata-tunjuk-ism-isyarah",
              "number": "01",
              "title": "6 Kata Tunjuk Pokok (Ism Isyarah) Dekat & Jauh",
              "icon": "fa-hand-point-right",
              "readTime": "15 menit",
              "summary": "Mengenal 6 Kata Tunjuk dalam bahasa Arab, pembagian Dekat vs Jauh, serta sifat Non-Fleksibel dan Ma'rifah (Khusus).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Fragmen ke-5 sekaligus jenis kata khusus berikutnya adalah **KATA TUNJUK (اِسْمُ الإِشَارَةِ - Ism Isyarah)**. Kata tunjuk dalam bahasa Arab dibedakan berdasarkan **Jarak (Dekat vs Jauh)**, **Gender (Maskulin vs Feminin)**, dan **Jumlah (Tunggal vs Jamak)**."
                },
                {
                  "type": "card_grid",
                  "title": "Bagan 6 Kata Tunjuk Pokok (Ism Isyarah)",
                  "items": [
                    {
                      "icon": "fa-location-dot",
                      "title": "هَٰذَا (Haadzaa) — Ini (Dekat / M)",
                      "desc": "Digunakan untuk menunjuk 1 benda/orang Maskulin yang berada dekat. Contoh: هَٰذَا كِتَابٌ (Ini sebuah buku)."
                    },
                    {
                      "icon": "fa-location-dot",
                      "title": "هَٰذِهِ (Haadzihi) — Ini (Dekat / F & Jamak Benda)",
                      "desc": "Digunakan untuk 1 Feminin ATAU Jamak Taksir Benda (Non-Human Plural). Contoh: هَٰذِهِ نَاقَةٌ / هَٰذِهِ كُتُبٌ (Buku-buku ini)."
                    },
                    {
                      "icon": "fa-users",
                      "title": "هَٰؤُلَاءِ (Haa'ulaa'i) — Ini / Orang-orang ini (Dekat / Jamak Manusia)",
                      "desc": "Digunakan KHUSUS untuk Jamak Manusia (Pria/Wanita dekat). Contoh: هَٰؤُلَاءِ قَوْمِي (Orang-orang ini kaumku)."
                    },
                    {
                      "icon": "fa-paper-plane",
                      "title": "ذَٰلِكَ (Dzaalika) — Itu (Jauh / M)",
                      "desc": "Digunakan untuk menunjuk 1 Maskulin yang berada jauh / tinggi. Contoh: ذَٰلِكَ الْكِتَابُ (Kitab itu)."
                    },
                    {
                      "icon": "fa-paper-plane",
                      "title": "تِلْكَ (Tilka) — Itu (Jauh / F & Jamak Benda)",
                      "desc": "Digunakan untuk 1 Feminin ATAU Jamak Taksir Benda jauh. Contoh: تِلْكَ أُمَّةٌ / تِلْكَ حُدُودُ اللَّهِ (Itu batasan-batasan Allah)."
                    },
                    {
                      "icon": "fa-users-viewfinder",
                      "title": "أُولَٰئِكَ (Ulaa'ika) — Mereka / Orang-orang itu (Jauh / Jamak Manusia)",
                      "desc": "Digunakan KHUSUS untuk Jamak Manusia jauh (Pria/Wanita). Contoh: أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ (Mereka itulah penghuni surga)."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "3 Properti Wajib Diketahui tentang Ism Isyarah",
                  "items": [
                    {
                      "type": "1. Bersifat Non-Fleksibel (Mabni):",
                      "examples": "Bentuk kata tunjuk tidak pernah berubah bunyinya baik saat Rafa', Nasb, maupun Jar (هَٰذَا tetap هَٰذَا, ذَٰلِكَ tetap ذَٰلِكَ). Mereka berstatus 'Jar/Nasb in spirit' saat terkena Harf Jar."
                    },
                    {
                      "type": "2. Selalu Berstatus Khusus (Ma'rifah / Proper):",
                      "examples": "Menunjuk sesuatu otomatis membuatnya spesifik. Maka semua kata tunjuk otomatis berstatus Ma'rifah (Khusus) tanpa butuh Alif Lam."
                    },
                    {
                      "type": "3. Tidak Pernah Menjadi Mudhaf:",
                      "examples": "Kata tunjuk tidak pernah berposisi sebagai Mudhaf (tidak ada konsep 'Ini dari rumah'), namun bisa menjadi Mudhaf Ilaih (رَبَّ هَٰذَا الْبَيْتِ = Penguasa rumah ini)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d8_isyarah_1",
                  "question": "Kata tunjuk manakah yang digunakan untuk menunjuk Jamak Benda/Non-Human Plural yang berada di kejauhan (seperti bintang-bintang atau tanda-tanda kebesaran)?",
                  "options": [
                    {
                      "text": "أُولَٰئِكَ (Ulaa'ika)",
                      "isCorrect": false
                    },
                    {
                      "text": "تِلْكَ (Tilka)",
                      "isCorrect": true
                    },
                    {
                      "text": "ذَٰلِكَ (Dzaalika)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Semua Jamak Benda / Non-Human Plural diperlakukan sebagai Feminin Tunggal (1F / She). Maka untuk jarak jauh digunakan 'تِلْكَ' (Tilka), sedangkan 'أُولَٰئِكَ' hanya untuk manusia."
                }
              ]
            },
            {
              "id": "kaidah-alif-lam-fragmen-vs-kalimat",
              "number": "02",
              "title": "Kaidah Emas Alif Lam: Fragmen Kata Tunjuk vs Kalimat Sempurna",
              "icon": "fa-scale-unbalanced-flip",
              "readTime": "15 menit",
              "summary": "Membedakan kapan kata tunjuk menghasilkan frasa biasa ('Masjid ini') dan kapan membentuk kalimat utuh ('Ini adalah masjid').",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Salah satu rahasia paling penting dalam bahasa Arab adalah **PENGARUH ALIF LAM (ال)** setelah Kata Tunjuk. Keberadaan Alif Lam menentukan apakah susunan kata tersebut hanya sebuah **Fragmen (Frasa)** atau sudah menjadi **Kalimat Sempurna (Jumlah)**!"
                },
                {
                  "type": "formula_box",
                  "title": "Kaidah Alif Lam & Hilangnya Kata 'ADALAH' (IS)",
                  "formula": "Ism Isyarah + [Kata Ber-AL] ➔ FRAGMEN ('Masjid ini') | Ism Isyarah + [Kata TANPA AL] ➔ KALIMAT ('Ini ADALAH masjid')",
                  "note": "Alif Lam 'memakan' kata 'adalah'. Tanpa Alif Lam langsung setelah ism isyarah, kata 'adalah' (IS) wajib muncul!"
                },
                {
                  "type": "comparison_table",
                  "title": "Perbandingan Fragmen vs Kalimat Sempurna",
                  "headers": [
                    "Susunan Arab",
                    "Kondisi Setelah Isyarah",
                    "Jenis Susunan",
                    "Terjemahan Tepat"
                  ],
                  "rows": [
                    [
                      "هَٰذَا الْمَسْجِدُ (Haadzal-masjidu)",
                      "Ada Alif Lam (ال)",
                      "Fragmen Isyarah",
                      "Masjid ini... (Belum kalimat lengkap)"
                    ],
                    [
                      "هَٰذَا مَسْجِدٌ (Haadzaa masjidun)",
                      "Tanpa Alif Lam (Tanwin)",
                      "Kalimat Sempurna",
                      "Ini ADALAH sebuah masjid. ✅"
                    ],
                    [
                      "هَٰذَا الْقُرْآنُ (Haadzal-Qur'aanu)",
                      "Ada Alif Lam (ال)",
                      "Fragmen Isyarah",
                      "Al-Qur'an ini..."
                    ],
                    [
                      "هَٰذَا كِتَابٌ (Haadzaa kitaabun)",
                      "Tanpa Alif Lam (Tanwin)",
                      "Kalimat Sempurna",
                      "Ini ADALAH sebuah kitab. ✅"
                    ],
                    [
                      "تِلْكَ حُدُودُ اللَّهِ (Tilka huduudullaah)",
                      "Tanpa Al (Hudud = Mudhaf)",
                      "Kalimat Sempurna",
                      "Itu ADALAH batasan-batasan ketetapan Allah. ✅"
                    ],
                    [
                      "أُولَٰئِكَ أَصْحَابُ النَّارِ (Ulaa'ika ash-haabun-naar)",
                      "Tanpa Al (Ash-haab = Mudhaf)",
                      "Kalimat Sempurna",
                      "Mereka itulah / Itu ADALAH para penghuni neraka. ✅"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d8_fragmen_vs_kalimat",
                  "question": "Bagaimanakah terjemahan yang tepat untuk frasa 'فِي هَٰذِهِ الْحَيَاةِ' (Fii haadzihil-hayaati)?",
                  "options": [
                    {
                      "text": "Di dalam ini adalah kehidupan",
                      "isCorrect": false
                    },
                    {
                      "text": "Di dalam kehidupan ini",
                      "isCorrect": true
                    },
                    {
                      "text": "Kehidupan ini ada di dalam",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Karena kata 'Al-Hayaati' memiliki Alif Lam tepat setelah 'Haadzihi', maka tidak ada kata 'adalah'. Digabungkan dengan Harf Jar 'Fii', artinya adalah 'Di dalam kehidupan ini'."
                }
              ]
            },
            {
              "id": "kombinasi-isyarah-idhafah-sifah",
              "number": "03",
              "title": "Membedah Kombinasi Berlapis: Isyarah + Idhafah + Sifah",
              "icon": "fa-puzzle-piece",
              "readTime": "15 menit",
              "summary": "Menganalisis ayat-ayat Al-Qur'an yang memadukan Kata Tunjuk, Frasa Kepemilikan (Idhafah), dan Frasa Sifat dalam satu kesatuan indah.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam Al-Qur'an, sering kali Kata Tunjuk dirangkai dengan Idhafah dan Sifah. Mari kita bedah bagaimana seluruh aturan tata bahasa yang kita pelajari bekerja secara harmonis."
                },
                {
                  "type": "case_study",
                  "title": "Kasus 1: QS. Luqman: 2: 'تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ'",
                  "points": [
                    {
                      "label": "1. Kata Tunjuk: 'تِلْكَ' (Tilka)",
                      "desc": "Ism Isyarah Jauh untuk Jamak Benda ('Ayat-ayat'). Karena kata setelahnya tidak ber-Al, maka MUNCUL KATA 'ADALAH' ('Itulah / Itu adalah...')."
                    },
                    {
                      "label": "2. Idhafah: 'آيَاتُ الْكِتَابِ' (Aayaatul-Kitaabi)",
                      "desc": "'Aayaatu' (Mudhaf / Ringan & Tanpa Al) + 'Al-Kitaabi' (Mudhaf Ilaih / Jar) ➔ 'Ayat-ayat Al-Kitab'."
                    },
                    {
                      "label": "3. Sifah: 'الْكِتَابِ الْحَكِيمِ' (Al-Kitaabil-Hakiimi)",
                      "desc": "'Al-Kitaabi' (Jar, 1, M, Khusus) disifati oleh 'Al-Hakiimi' (Jar, 1, M, Khusus) ➔ 'Kitab yang penuh hikmah/kebijaksanaan'."
                    },
                    {
                      "label": "4. Terjemahan Utuh:",
                      "desc": "'Itulah ayat-ayat Al-Kitab yang penuh hikmah (bijaksana).'"
                    }
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Kasus 2: QS. Ali 'Imran: 14: 'ذَٰلِكَ مَتَاعُ الْحَيَاةِ الدُّنْيَا'",
                  "points": [
                    {
                      "label": "1. Kata Tunjuk: 'ذَٰلِكَ' (Dzaalika)",
                      "desc": "Ism Isyarah Jauh ('Itu') + [IS / ADALAH] karena 'Mata'u' tidak ber-Alif Lam."
                    },
                    {
                      "label": "2. Idhafah: 'مَتَاعُ الْحَيَاةِ' (Mataa'ul-Hayaati)",
                      "desc": "'Mata'u' (Mudhaf: Kesenangan) + 'Al-Hayaati' (Mudhaf Ilaih: Kehidupan) ➔ 'Kesenangan kehidupan'."
                    },
                    {
                      "label": "3. Sifah: 'الْحَيَاةِ الدُّنْيَا' (Al-Hayaatid-Dunyaa)",
                      "desc": "'Al-Hayaati' (Jar, 1, F, Khusus) disifati oleh 'Ad-Dunyaa' (Non-fleksibel Jar, 1, F, Khusus / bermakna 'yang paling rendah/dekat')."
                    },
                    {
                      "label": "4. Terjemahan Utuh:",
                      "desc": "'Itulah kesenangan kehidupan dunia (kehidupan yang fana dan paling rendah).'"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d8_kombinasi_1",
                  "question": "Pada frasa 'تِلْكَ الدَّارُ الْآخِرَةُ' (Tilkad-Daarul-Aakhirah), mengapa kata 'الْآخِرَةُ' berstatus Rafa', 1, Feminin, dan Khusus?",
                  "options": [
                    {
                      "text": "Karena menjadi Mudhaf bagi Tilka",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena mengikuti 4 properti dari kata 'Ad-Daaru' (Mawshuf) yang berstatus Rafa', 1, Feminin (Arabs said so), dan Khusus (Al)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena merupakan kata ganti orang ketiga",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Ad-Daaru' adalah feminin bangsa Arab berkata begitu, ber-Al (Khusus), dan berharakat dhammah (Rafa'). Kata sifat 'Al-Aakhiratu' mencocoki ke-4 properti tersebut secara sempurna."
                }
              ]
            },
            {
              "id": "makna-syafaat-haula-shufaauna",
              "number": "04",
              "title": "Tadabbur Syafaat & Analisis 'هَٰؤُلَاءِ شُفَعَاؤُنَا'",
              "icon": "fa-shield-halved",
              "readTime": "12 menit",
              "summary": "Membedah struktur gramatikal ayat tentang prasangka kaum musyrik terhadap berhala serta hakikat syafaat sejati.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di dalam Al-Qur'an Surah Yunus: 18, Allah menceritakan alasan kaum musyrikin menyembah berhala: `هَٰؤُلَاءِ شُفَعَاؤُنَا` (*'Mereka ini adalah para pemberi syafaat bagi kami'*)."
                },
                {
                  "type": "case_study",
                  "title": "Analisis Gramatikal 'هَٰؤُلَاءِ شُفَعَاؤُنَا'",
                  "points": [
                    {
                      "label": "1. 'هَٰؤُلَاءِ' (Haa'ulaa'i) ➔ Ism Isyarah Jamak",
                      "desc": "Menunjuk orang banyak (berhala-berhala yang mereka anggap representasi orang saleh/malaikat): 'Mereka ini / Orang-orang ini'."
                    },
                    {
                      "label": "2. [MUNCUL 'ADALAH']",
                      "desc": "Karena 'Shufa'aa'u' tidak memiliki Alif Lam di depannya, maka muncullah kata penghubung 'ADALAH' (IS)."
                    },
                    {
                      "label": "3. 'شُفَعَاؤُنَا' (Shufa'aa'unaa) ➔ Idhafah",
                      "desc": "'Shufa'aa'u' (Mudhaf: Para pemberi syafaat / Intercessors) + '-naa' (Mudhaf Ilaih: Kami) ➔ 'Para pemberi syafaat kami'."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Tadabbur Tauhid: Mengapa Berhala Disembah?",
                  "text": "Kaum musyrikin Makkah sejatinya mengakui Allah sebagai Pencipta. Namun mereka menyembah berhala karena mengira berhala tersebut memiliki 'jalur orang dalam' (*intercessor*) yang bisa memaksa Allah membebaskan mereka dari hukuman di hari kiamat.\nIslam datang menghapus seluruh konsep calo ibadah ini! Syafaat Nabi Muhammad ﷺ kelak bukanlah paksaan kepada Allah, melainkan anugerah izin dari Allah bagi mereka yang sungguh-sungguh mentaati ajaran beliau."
                },
                {
                  "type": "quiz",
                  "id": "q_d8_syafaat_1",
                  "question": "Apakah susunan 'هَٰؤُلَاءِ شُفَعَاؤُنَا' merupakan Fragmen atau Kalimat Sempurna?",
                  "options": [
                    {
                      "text": "Fragmen Isyarah karena ada Ha'ula'i",
                      "isCorrect": false
                    },
                    {
                      "text": "Kalimat Sempurna (Jumlah Ismiyyah) karena kata setelah Ha'ula'i tidak memiliki Alif Lam, sehingga bermakna 'Mereka ini ADALAH para pemberi syafaat kami'",
                      "isCorrect": true
                    },
                    {
                      "text": "Fragmen Idhafah saja",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Karena 'Shufa'aa'u' tidak ber-Alif Lam, terdapat jeda (break) yang memunculkan kata 'ADALAH', menjadikannya sebuah Kalimat Sempurna."
                }
              ]
            },
            {
              "id": "teknik-menemukan-is-break-the-chain",
              "number": "05",
              "title": "Teknik 'Break the Chain': Menemukan 'IS' dalam Kalimat Ism",
              "icon": "fa-link-slash",
              "readTime": "15 menit",
              "summary": "Menguasai prinsip utama mendeteksi Kalimat Ism (Jumlah Ismiyyah): di mana rantai 5 fragmen terputus, di situlah letak kata 'ADALAH' (IS).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam bahasa Arab tidak ada kata khusus untuk *'is / are / am / adalah'*. Lalu bagaimana kita tahu di mana kalimat itu berbunyi *'adalah'*? Jawabannya adalah melalui teknik **BREAK THE CHAIN (PUTUSNYA RANTAI FRAGMEN)**!"
                },
                {
                  "type": "card_grid",
                  "title": "5 Rantai Fragmen yang Mengikat Kata",
                  "items": [
                    {
                      "icon": "fa-link",
                      "title": "1. Rantai Idhafah",
                      "desc": "Mudhaf (Ringan, Tanpa Al) terikat dengan Mudhaf Ilaih (Jar) di sebelahnya."
                    },
                    {
                      "icon": "fa-link",
                      "title": "2. Rantai Jarr Majroor",
                      "desc": "Harf Jar terikat dengan kata Majroor setelahnya."
                    },
                    {
                      "icon": "fa-link",
                      "title": "3. Rantai Harf Nasb",
                      "desc": "Harf Nasb (Inna dkk) terikat dengan Ism-nya."
                    },
                    {
                      "icon": "fa-link",
                      "title": "4. Rantai Mawshuf Sifah",
                      "desc": "Kata Benda terikat dengan Kata Sifat yang mencocoki 4 propertinya."
                    },
                    {
                      "icon": "fa-link",
                      "title": "5. Rantai Ism Isyarah + Al",
                      "desc": "Kata Tunjuk terikat dengan kata ber-Alif Lam setelahnya."
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Kaidah Emas Menemukan 'IS' (ADALAH)",
                  "formula": "Jika ada 2 kata yang bersebelahan TETAPI TIDAK TERHUBUNG oleh salah satu dari 5 Rantai Fragmen di atas ➔ Di situlah letak 'IS' (ADALAH)!",
                  "note": "Rantai terputus = Kalimat tercipta!"
                },
                {
                  "type": "case_study",
                  "title": "Contoh Deteksi 'Break the Chain' pada Ayat Al-Qur'an",
                  "points": [
                    {
                      "label": "1. 'اللَّهُ أَكْبَرُ' (Allaahu Akbar)",
                      "desc": "'Allahu' (Rafa', Proper) // [TIDAK ADA RANTAI] // 'Akbar' (Rafa', Common). Bukan Idhafah, bukan Sifah (beda tipe), bukan Harf. ➔ **'Allah ADALAH Maha Besar'**."
                    },
                    {
                      "label": "2. 'الْحَمْدُ لِلَّهِ' (Al-Hamdu Lillaah)",
                      "desc": "'Al-Hamdu' (Rafa', Proper) // [RANTAI TERPUTUS / IS] // 'Lillaahi' (Jarr Majroor). ➔ **'Segala puji ADALAH bagi Allah'**."
                    },
                    {
                      "label": "3. 'فِي قُلُوبِهِم مَّرَضٌ' (Fii Quluubihim Maradhun)",
                      "desc": "'Fii Quluubihim' (Rantai Jarr Majroor + Idhafah) // [RANTAI TERPUTUS / IS] // 'Maradhun' (Rafa'). ➔ **'Di dalam hati mereka ADALAH penyakit'**."
                    },
                    {
                      "label": "4. 'الْحَقُّ مِن رَّبِّكَ' (Al-Haqqu Mir-Rabbika)",
                      "desc": "'Al-Haqqu' (Rafa', Proper) // [RANTAI TERPUTUS / IS] // 'Mir-Rabbika' (Rantai Jarr Majroor + Idhafah). ➔ **'Kebenaran itu ADALAH dari Tuhanmu'**."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Dhamir Munfashil (Rafa') Otomatis Menjadi Pemula Kalimat",
                  "items": [
                    {
                      "type": "Dhamir Bebas Mengandung 'IS':",
                      "examples": "Tabel 14 Dhamir Rafa' (هُوَ, هُمَا, هُمْ, هِيَ, أَنْتَ, أَنَا, نَحْنُ) secara alami telah memuat kata 'is / are / am'."
                    },
                    {
                      "type": "Contoh Al-Qur'an:",
                      "examples": "هُوَ اللَّهُ = 'Dia ADALAH Allah' | أَنَا اللَّهُ = 'Aku ADALAH Allah' | هُوَ رَبُّ السَّمَاوَاتِ = 'Dia ADALAH Tuhan langit-langit' | نَحْنُ مُسْلِمُونَ = 'Kami ADALAH orang-orang yang berserah diri'."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d8_break_chain_1",
                  "question": "Di manakah letak kata 'ADALAH' (IS) pada ayat 'الْحَقُّ مِن رَّبِّكَ' (Al-Haqqu mir-Rabbika)?",
                  "options": [
                    {
                      "text": "Di antara 'min' dan 'Rabbika'",
                      "isCorrect": false
                    },
                    {
                      "text": "Di antara 'Al-Haqqu' dan 'min Rabbika' karena di situlah terjadi pemutusan rantai gramatikal",
                      "isCorrect": true
                    },
                    {
                      "text": "Di akhir ayat setelah 'Rabbika'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Min' terikat dengan 'Rabbika' (Jarr Majroor & Idhafah), sedangkan 'Al-Haqqu' tidak terikat dengan kata setelahnya. Pemutusan rantai terjadi tepat setelah 'Al-Haqqu', sehingga diartikan 'Kebenaran itu ADALAH dari Tuhanmu'."
                }
              ]
            },
            {
              "id": "lab-dan-rekapitulasi-tuntas-ism",
              "number": "06",
              "title": "Laboratorium Praktik & Rekapitulasi Tuntas Seluruh Ism",
              "icon": "fa-award",
              "readTime": "15 menit",
              "summary": "Merayakan tuntasnya seluruh fondasi Ism selama 8 hari dan menguji analisis kalimat Ism pada ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Alhamdulillah! Hari ke-8 menandai **BERAKHIRNYA SELURUH PEMBAHASAN ISM (KATA BENDA & SIFAT)** dalam kurikulum Dream Intensive. Anda telah menguasai materi setara satu semester penuh kuliah bahasa Arab!"
                },
                {
                  "type": "quran_interactive_lab",
                  "title": "Laboratorium Praktik Analisis Kalimat Day 8",
                  "subtitle": "Temukan titik pemutus rantai (Break the Chain / IS) dan tentukan status kata target!",
                  "items": [
                    {
                      "surah": "Surah Al-Baqarah: 2",
                      "ayahArabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ",
                      "targetWord": "ذَٰلِكَ الْكِتَابُ",
                      "transliteration": "Dzaalikal-Kitaab",
                      "meaning": "Kitab itu...",
                      "correctStatus": "rafa",
                      "soundEnd": "Fragmen Isyarah (Ada Alif Lam ➔ Tidak ada 'IS')",
                      "explanation": "Karena ada Alif Lam setelah Dzaalika, susunan ini adalah Fragmen Kata Tunjuk ('Kitab itu')."
                    },
                    {
                      "surah": "Surah Al-Ikhlas: 1",
                      "ayahArabic": "قُلْ هُوَ اللَّهُ أَحَدٌ",
                      "targetWord": "هُوَ اللَّهُ",
                      "transliteration": "Huwal-Laahu",
                      "meaning": "Dia adalah Allah",
                      "correctStatus": "rafa",
                      "soundEnd": "Dhamir Munfashil (Huwa = He is)",
                      "explanation": "Huwa adalah dhamir rafa' yang memulai kalimat, sehingga bermakna 'Dia adalah Allah'."
                    },
                    {
                      "surah": "Surah Al-Baqarah: 10",
                      "ayahArabic": "فِي قُلُوبِهِم مَّرَضٌ",
                      "targetWord": "مَّرَضٌ",
                      "transliteration": "Maradhun",
                      "meaning": "Penyakit",
                      "correctStatus": "rafa",
                      "soundEnd": "Rafa' Tanwin (Titik 'IS' berada sebelum kata ini)",
                      "explanation": "Rantai Jarr Majroor terputus setelah 'Quluubihim', sehingga 'Maradhun' berstatus Rafa' sebagai subjek pelengkap: 'Di dalam hati mereka adalah penyakit'."
                    },
                    {
                      "surah": "Surah Al-A'raf: 73",
                      "ayahArabic": "هَٰذِهِ نَاقَةُ اللَّهِ",
                      "targetWord": "نَاقَةُ اللَّهِ",
                      "transliteration": "Naaqatullaah",
                      "meaning": "Unta betina Allah",
                      "correctStatus": "rafa",
                      "soundEnd": "Mudhaf + Mudhaf Ilaih (Didahului 'IS' setelah Haadzihi)",
                      "explanation": "Karena 'Naaqatu' tidak ber-Al, susunan ini adalah kalimat sempurna: 'Ini adalah unta betina Allah'."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Mahakarya Fondasi Ism (Day 1 s/d Day 8 Tuntas!) 🎓",
                  "points": [
                    "4 Properti Ism: Status (Rafa'/Nasb/Jar, Bentuk, Fleksibilitas, Berat/Ringan), Number (1, 2, 3M, 3F, Jamak Taksir, Jamak Arab), Gender (Maskulin vs Feminin tanda, biologis, anggota tubuh, bangsa Arab), Type (Umum vs 7 Kategori Khusus).",
                    "5 Fragmen Ism Lengkap: 1) Idhafah, 2) Jarr Majroor, 3) Harf Nasb + Ismuha, 4) Mawshuf + Sifah, 5) Ism Isyarah + Al.",
                    "Tabel 14 Dhamir: Munfashil (Rafa') vs Muttashil (Nasb/Jar).",
                    "Kalimat Ism (Jumlah Ismiyyah): Ditemukan melalui teknik 'Break the Chain' di mana 5 fragmen terputus.",
                    "Bersiap memasuki dunia Fi'il (Kata Kerja) pada Day 9 & Day 10!"
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Sesi 1 (Day 8)",
              "url": "https://www.youtube.com/live/Ojw1-ymSl20?si=uECibnofK8ROqVMV"
            },
            {
              "label": "Sesi 2 (Day 8B)",
              "url": "https://www.youtube.com/live/DBAVv5ykulc?si=EbMfqFjdd6xqUSgs"
            }
          ],
          "slides": [
            {
              "label": "Slide Sesi 1 (Day 8)",
              "url": "https://drive.google.com/open?id=1P1E6CcZhkTlRxiH6m2ram2lWX8JBoAX4&usp=drive_copy"
            },
            {
              "label": "Slide Sesi 2 (Day 8B)",
              "url": "https://drive.google.com/open?id=1ryTyIRWWhC9VIoqL4oUggTHvfaHmXbN3&usp=drive_copy"
            }
          ]
        },
        {
          "day": 9,
          "title": "Hari 9: Memasuki Dunia Fi'il (Kata Kerja Lampau / Fi'il Madhi), Tabel 14 Konjugasi & Tadabbur Retorika Al-Qur'an",
          "videoUrl": "https://www.youtube.com/live/XvYIpYmKHJA?si=ID0bxQDECTlnEsuY",
          "pdfUrl": "https://drive.google.com/open?id=1sEb5QW9gaHkqvG0wN3-kyRp2EXcvmNfa&usp=drive_copy",
          "summary": "Memasuki dimensi Fi'il (Kata Kerja), menguasai tabel 14 konjugasi Fi'il Madhi (Bentuk Lampau) dengan teknik 'Borrowing Pattern', latihan mendeteksi pelaku fi'il pada ayat Al-Qur'an, dan menyingkap keindahan retorika perumpamaan Al-Qur'an.",
          "lessons": [
            {
              "id": "memasuki-dunia-fiil-madhi",
              "number": "01",
              "title": "Selamat Datang di Dunia Fi'il: 1 Kata = 1 Kalimat Sempurna!",
              "icon": "fa-person-running",
              "readTime": "15 menit",
              "summary": "Memahami perbedaan fundamental Ism vs Fi'il, konsep keterikatan waktu, dan mengapa satu kata kerja Arab sudah memuat Pelaku di dalamnya.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setelah menuntaskan seluruh fondasi Ism selama 8 hari, hari ini kita memasuki semesta baru bahasa Arab: **FI'IL (الفِعْلُ - Kata Kerja)**!\n\nDi dunia Fi'il, seluruh aturan 4 Properti Ism (Rafa'/Nasb/Jar, Number, Gender, Type) dan Frasa (Idhafah, dsb.) kita simpan terlebih dahulu. Dunia Fi'il jauh lebih teratur, sistematis, dan terikat erat dengan WAKTU (Lampau, Sekarang, Masa Depan)."
                },
                {
                  "type": "card_grid",
                  "title": "Perbedaan Mendasar Ism vs Fi'il",
                  "items": [
                    {
                      "icon": "fa-clock",
                      "title": "1. Terikat Waktu (Tense)",
                      "desc": "Ism tidak terikat waktu (misal: 'Kitab'). Fi'il SELALU terikat waktu: Masa Lampau (Madhi / Past), Sekarang/Masa Depan (Mudhari' / Present-Future), atau Perintah (Amr)."
                    },
                    {
                      "icon": "fa-bolt",
                      "title": "2. 1 Kata Fi'il = 1 Kalimat Sempurna!",
                      "desc": "Dalam bahasa Arab, kata kerja tidak pernah berdiri sendirian tanpa pelaku. Kata نَصَرَ (Nasara) bukan sekadar 'Menolong', melainkan bermakna 'Dia [pria] telah menolong' (sebuah kalimat lengkap!)."
                    },
                    {
                      "icon": "fa-fingerprint",
                      "title": "3. Bentuk Dasar Fi'il Madhi (3 Huruf Fathah)",
                      "desc": "Bentuk standar dasar Fi'il Madhi berbunyi pola a-a-a (فَعَلَ), seperti: نَصَرَ (menolong), ضَرَبَ (memukul), عَلَّمَ (mengajar), سَمِعَ (mendengar), قَرُبَ (mendekat)."
                    },
                    {
                      "icon": "fa-user-check",
                      "title": "4. Pelaku Tertanam di Dalam Akhiran",
                      "desc": "Siapa yang melakukan perbuatan tersebut (Dia, Mereka, Kamu, Kami, Saya) diketahui secara presisi dari bunyi akhiran kata kerja tersebut."
                    }
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Contoh Kosakata Dasar Fi'il Madhi",
                  "items": [
                    {
                      "type": "نَصَرَ (Nasara):",
                      "examples": "Dia (1 pria) telah menolong."
                    },
                    {
                      "type": "اِسْتَمَعَ (Istama'a):",
                      "examples": "Dia (1 pria) telah mendengarkan dengan saksama."
                    },
                    {
                      "type": "ضَرَبَ (Dharaba):",
                      "examples": "Dia (1 pria) telah memukul / membuat perumpamaan."
                    },
                    {
                      "type": "عَلَّمَ ('Allama):",
                      "examples": "Dia (1 pria) telah mengajar."
                    },
                    {
                      "type": "اِسْتَغْفَرَ (Istaghfara):",
                      "examples": "Dia (1 pria) telah memohon ampun."
                    },
                    {
                      "type": "قَاتَلَ (Qaatala):",
                      "examples": "Dia (1 pria) telah berperang / bertempur."
                    },
                    {
                      "type": "سَمِعَ (Sami'a):",
                      "examples": "Dia (1 pria) telah mendengar (seperti dalam sami'allahu liman hamidah)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d9_fiil_intro_1",
                  "question": "Mengapa kata 'عَلَّمَ' ('Allama) dalam bahasa Arab dianggap sebagai sebuah kalimat sempurna dan bukan sekadar kosakata biasa?",
                  "options": [
                    {
                      "text": "Karena memiliki harakat fathah di awal",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena satu kata Fi'il secara otomatis sudah memuat Pelaku (Dhamir 'Huwa' / Dia) di dalamnya, sehingga bermakna 'Dia telah mengajar'",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena merupakan kata benda yang berstatus Rafa'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Setiap Fi'il dalam bahasa Arab mengandung pelaku (Fa'il) yang tertanam di dalamnya. Bentuk dasar 'عَلَّمَ' sudah berarti kalimat lengkap: 'Dia [seorang pria] telah mengajar'."
                }
              ]
            },
            {
              "id": "tabel-konjugasi-fiil-madhi-gaib",
              "number": "02",
              "title": "Konjugasi Fi'il Madhi: Grup Gaib (Orang ke-3: Huwa s/d Hunna)",
              "icon": "fa-table-cells",
              "readTime": "15 menit",
              "summary": "Menguasai 6 bentuk perubahan kata kerja lampau untuk subjek orang ketiga (Dia, Mereka Berdua, Mereka Semua: Pria & Wanita).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk mengubah pelaku dari 'Dia' menjadi 'Mereka' atau 'Dia Wanita', bangsa Arab menambahkan akhiran khusus pada Fi'il Madhi. Mari kita pelajari 6 bentuk pertama (Grup Orang ke-3):"
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan 6 Fi'il Madhi Grup Gaib (Orang ke-3)",
                  "headers": [
                    "Dhamir (Subjek)",
                    "Pola Fi'il Madhi",
                    "Tanda Akhiran",
                    "Arti Kalimat"
                  ],
                  "rows": [
                    [
                      "هُوَ (Huwa)",
                      "نَصَرَ (Nasara)",
                      "ـَ (Fathah pendek)",
                      "Dia (1 pria) telah menolong"
                    ],
                    [
                      "هُمَا (Humaa)",
                      "نَصَرَا (Nasaraa)",
                      "ـَا (Alif panjang)",
                      "Mereka berdua (2 pria) telah menolong"
                    ],
                    [
                      "هُمْ (Hum)",
                      "نَصَرُوا (Nasaruu)",
                      "ـُوا (Waw Sukun + Alif)",
                      "Mereka semua (3+ pria) telah menolong"
                    ],
                    [
                      "هِيَ (Hiya)",
                      "نَصَرَتْ (Nasarat)",
                      "ـَتْ (Ta Sukun)",
                      "Dia (1 wanita) telah menolong"
                    ],
                    [
                      "هُمَا (Humaa - F)",
                      "نَصَرَتَا (Nasarataa)",
                      "ـَتَا (Ta + Alif panjang)",
                      "Mereka berdua (2 wanita) telah menolong"
                    ],
                    [
                      "هُنَّ (Hunna)",
                      "نَصَرْنَ (Nasarna)",
                      "ـْنَ (Sukun + Nun fathah)",
                      "Mereka semua (3+ wanita) telah menolong"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Ciri Khas Penulisan Jamak Maskulin (ـُوا)",
                  "text": "Huruf Alif pada akhiran `نَصَرُوا` (Waw + Alif) tidak dibaca (silent alif). Keberadaan Alif setelah Waw sukun ini adalah **TANDA PASTI** bahwa kata tersebut adalah KATA KERJA JAMAK (Fi'il), bukan Ism yang berakhiran waw!"
                },
                {
                  "type": "quiz",
                  "id": "q_d9_gaib_1",
                  "question": "Bagaimanakah bunyi kata kerja lampau untuk 'Mereka semua (para wanita) telah mendengarkan' dari kata dasar 'سَمِعَ' (Sami'a)?",
                  "options": [
                    {
                      "text": "سَمِعُوا (Sami'uu)",
                      "isCorrect": false
                    },
                    {
                      "text": "سَمِعْنَ (Sami'na)",
                      "isCorrect": true
                    },
                    {
                      "text": "سَمِعَتْ (Sami'at)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Bentuk Huna (mereka para wanita) dibuat dengan mematikan huruf terakhir lalu menambahkan nun berharakat fathah: 'سَمِعْنَ' (Sami'na)."
                }
              ]
            },
            {
              "id": "teknik-meminjam-hadir-mutakallim",
              "number": "03",
              "title": "Teknik 'Borrowing Pattern': Grup Hadir (Kamu) & Mutakallim (Saya/Kami)",
              "icon": "fa-arrows-split-up-and-left",
              "readTime": "15 menit",
              "summary": "Memahami cara mudah menguasai 8 bentuk konjugasi sisa (Anta s/d Nahnu) cukup dengan meminjam bunyi akhiran Dhamir.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Kabar gembira! Anda tidak perlu menghafal 8 bentuk konjugasi sisanya secara rumit. Anda cukup menggunakan **TEKNIK MEMINJAM (Borrowing Pattern)** langsung dari tabel Dhamir yang telah Anda kuasai di Hari ke-6!"
                },
                {
                  "type": "formula_box",
                  "title": "Kaidah Emas Sukun Huruf Terakhir",
                  "formula": "Sejak 'Hunna' (هُنَّ نَصَرْنَ) ke bawah ➔ Huruf terakhir akar kata SELALU BERHARAKAT SUKUN (Mati)!",
                  "note": "Matikan huruf terakhir kata kerja (Nasar-), lalu tempelkan akhiran dhamir yang dipinjam!"
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan 8 Fi'il Madhi Grup Hadir & Mutakallim",
                  "headers": [
                    "Dhamir Asli",
                    "Potongan yang Dipinjam",
                    "Hasil Konjugasi",
                    "Arti Kalimat"
                  ],
                  "rows": [
                    [
                      "أَنْتَ (Anta)",
                      "ـتَ (-ta)",
                      "نَصَرْتَ (Nasarta)",
                      "Kamu (1 pria) telah menolong"
                    ],
                    [
                      "أَنْتُمَا (Antumaa)",
                      "ـتُمَا (-tumaa)",
                      "نَصَرْتُمَا (Nasartumaa)",
                      "Kalian berdua (2 pria) telah menolong"
                    ],
                    [
                      "أَنْتُمْ (Antum)",
                      "ـتُمْ (-tum)",
                      "نَصَرْتُمْ (Nasartum)",
                      "Kalian semua (3+ pria) telah menolong"
                    ],
                    [
                      "أَنْتِ (Anti)",
                      "ـتِ (-ti)",
                      "نَصَرْتِ (Nasarti)",
                      "Kamu (1 wanita) telah menolong"
                    ],
                    [
                      "أَنْتُمَا (Antumaa - F)",
                      "ـتُمَا (-tumaa)",
                      "نَصَرْتُمَا (Nasartumaa)",
                      "Kalian berdua (2 wanita) telah menolong"
                    ],
                    [
                      "أَنْتُنَّ (Antunna)",
                      "ـتُنَّ (-tunna)",
                      "نَصَرْتُنَّ (Nasartunna)",
                      "Kalian semua (3+ wanita) telah menolong"
                    ],
                    [
                      "أَنَا (Ana)",
                      "ـتُ (-tu)",
                      "نَصَرْتُ (Nasartu)",
                      "Saya telah menolong"
                    ],
                    [
                      "نَحْنُ (Nahnu)",
                      "ـنَا (-naa)",
                      "نَصَرْنَا (Nasarnaa)",
                      "Kami telah menolong"
                    ]
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Perbedaan Kritis 4 Macam Akhiran 'Ta' (ـَتْ, ـْتَ, ـْتِ, ـْتُ)",
                  "items": [
                    {
                      "type": "1. نَصَرَتْ (Nasarat - Ta Sukun):",
                      "examples": "Pelakunya adalah 'HIYA' (Dia 1 wanita)."
                    },
                    {
                      "type": "2. نَصَرْتَ (Nasarta - Ta Fathah):",
                      "examples": "Pelakunya adalah 'ANTA' (Kamu 1 pria)."
                    },
                    {
                      "type": "3. نَصَرْتِ (Nasarti - Ta Kasrah):",
                      "examples": "Pelakunya adalah 'ANTI' (Kamu 1 wanita)."
                    },
                    {
                      "type": "4. نَصَرْتُ (Nasartu - Ta Dhammah):",
                      "examples": "Pelakunya adalah 'ANA' (Saya)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d9_borrowing_1",
                  "question": "Jika kata dasar 'عَلَّمَ' ('Allama) berarti 'Dia telah mengajar', bagaimanakah cara mengatakan 'Kalian semua (pria) telah mengajar'?",
                  "options": [
                    {
                      "text": "عَلَّمُوا ('Allamuu)",
                      "isCorrect": false
                    },
                    {
                      "text": "عَلَّمْتُمْ ('Allamtum)",
                      "isCorrect": true
                    },
                    {
                      "text": "عَلَّمْنَا ('Allamnaa)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dari Dhamir 'Antum', kita meminjam akhiran '-tum' dan mematikan huruf terakhir akar kata: 'عَلَّمْتُمْ' ('Allamtum = Kalian semua telah mengajar)."
                }
              ]
            },
            {
              "id": "lab-deteksi-fiil-madhi-quran",
              "number": "04",
              "title": "Laboratorium Praktik Deteksi Pelaku Fi'il Madhi",
              "icon": "fa-magnifying-glass-chart",
              "readTime": "15 menit",
              "summary": "Melatih ketajaman membaca akhiran kata kerja pada potongan ayat-ayat Al-Qur'an dan menentukan pelakunya secara tepat.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita uji kemampuan mencocokkan akhiran kata kerja (*suffix matching*) pada ayat-ayat Al-Qur'an nyata!"
                },
                {
                  "type": "case_study",
                  "title": "Diagnosis Kata Kerja Al-Qur'an",
                  "points": [
                    {
                      "label": "1. 'قُلْتُمْ' (Qultum) ➔ QS. Al-Baqarah: 55",
                      "desc": "Berakhiran '-tum' (cocok dengan 'Antum') ➔ Artinya: 'Kalian semua telah berkata'."
                    },
                    {
                      "label": "2. 'نَافَقُوا' (Naafaquu) ➔ QS. Ali 'Imran: 167",
                      "desc": "Berakhiran '-uu' (Waw + Alif, cocok dengan 'Hum') ➔ Artinya: 'Mereka telah berlaku munafik'."
                    },
                    {
                      "label": "3. 'تَوَلَّيْتُمْ' (Tawallaytum) ➔ QS. Al-Baqarah: 64",
                      "desc": "Berakhiran '-tum' (cocok dengan 'Antum') ➔ Artinya: 'Kalian semua telah berpaling'."
                    },
                    {
                      "label": "4. 'خَلَتْ' (Khalat) ➔ QS. Al-Baqarah: 134",
                      "desc": "Berakhiran '-at' (Ta sukun, cocok dengan 'Hiya') ➔ Artinya: 'Dia [umat yang terdahulu] telah berlalu'."
                    },
                    {
                      "label": "5. 'كَسَبْتُمْ' (Kasabtum) ➔ QS. Al-Baqarah: 134",
                      "desc": "Berakhiran '-tum' (cocok dengan 'Antum') ➔ Artinya: 'Apa yang telah kalian usahakan'."
                    },
                    {
                      "label": "6. 'خَسِرَ' (Khasira) ➔ QS. Al-Hajj: 11",
                      "desc": "Bentuk dasar fathah tanpa tambahan (cocok dengan 'Huwa') ➔ Artinya: 'Dia telah merugi (di dunia dan akhirat)'."
                    },
                    {
                      "label": "7. 'اخْتَصَمُوا' (Ikhtashamuu) ➔ QS. Al-Hajj: 19",
                      "desc": "Berakhiran '-uu' (cocok dengan 'Hum') ➔ Artinya: 'Mereka telah saling berselisih/berdebat'."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d9_lab_1",
                  "question": "Pada ayat 'وَإِذْ قُلْتُمْ يَا مُوسَىٰ' (Wa idz qultum yaa Muusaa), siapakah pelaku dari kata kerja 'قُلْتُمْ' (Qultum)?",
                  "options": [
                    {
                      "text": "Mereka (Hum)",
                      "isCorrect": false
                    },
                    {
                      "text": "Kalian semua (Antum)",
                      "isCorrect": true
                    },
                    {
                      "text": "Kami (Nahnu)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Akhiran '-tum' berasal dari kata ganti 'Antum' (Kalian semua pria). Maka 'Qultum' berarti 'Kalian semua telah berkata'."
                }
              ]
            },
            {
              "id": "kisah-bumi-yang-hidup",
              "number": "05",
              "title": "Tadabbur Sains Al-Qur'an: Bumi yang Hidup ('اهْتَزَّتْ وَرَبَتْ وَأَنبَتَتْ')",
              "icon": "fa-seedling",
              "readTime": "15 menit",
              "summary": "Membedah 3 kata kerja feminin pada QS. Al-Hajj: 5 dan tadabbur analogi slow-motion pembuktian Hari Kebangkitan.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di dalam Surah Al-Hajj: 5, Allah memberikan perumpamaan menakjubkan tentang bagaimana tanah mati dihidupkan kembali:\n`فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ وَأَنبَتَتْ مِن كُلِّ زَوْجٍ بَهِيجٍ`\n*(Kemudian apabila telah Kami turunkan air di atasnya, hiduplah bumi itu [bergetar], mengembang, dan menumbuhkan berbagai macam tanaman yang indah)*."
                },
                {
                  "type": "case_study",
                  "title": "Analisis 3 Kata Kerja Feminin Beruntun",
                  "points": [
                    {
                      "label": "1. 'اهْتَزَّتْ' (Ihtazzat)",
                      "desc": "Fi'il Madhi berakhiran '-at' (Pelaku: Hiya / Bumi). Artinya: 'Bumi itu bergetar / bergerak'."
                    },
                    {
                      "label": "2. 'رَبَتْ' (Rabat)",
                      "desc": "Fi'il Madhi berakhiran '-at' (Pelaku: Hiya / Bumi). Artinya: 'Bumi itu naik / mengembang'."
                    },
                    {
                      "label": "3. 'أَنبَتَتْ' (Anbatat)",
                      "desc": "Fi'il Madhi berakhiran '-at' (Pelaku: Hiya / Bumi). Artinya: 'Bumi itu menumbuhkan tunas kehidupan'."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Analogi Kamera Slow Motion 1000 FPS & Hari Kebangkitan",
                  "text": "Mengapa Allah menggunakan kata *'Bergetar, Mengembang, lalu Menumbuhkan'*? Teknologi kamera modern dengan ribuan frame per detik (*high-speed camera*) membuktikan bahwa saat benih dalam tanah menyerap air, butiran-butiran tanah mikro bergetar halus (*ihtazzat*), permukaan tanah sedikit terangkat (*rabat*), lalu tunas hijau memecah keluar (*anbatat*)!\nAllah berfirman: Jika kamu ragu akan Hari Kebangkitan dari kubur, lihatlah bagaimana setiap tunas rumput dibangkitkan dari tanah mati setiap hari di depan matamu!"
                },
                {
                  "type": "quiz",
                  "id": "q_d9_bumi_1",
                  "question": "Mengapa ketiga kata kerja di atas (اهْتَزَّتْ, رَبَتْ, أَنبَتَتْ) menggunakan akhiran '-at' (Hiya / Dia Feminin)?",
                  "options": [
                    {
                      "text": "Karena subjeknya adalah Air (Al-Maa')",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena subjeknya adalah Bumi (Al-Ardh), yang termasuk kategori Feminin Bangsa Arab Berkata Begitu",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena tanaman selalu feminin",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata 'Al-Ardh' (Bumi) adalah Ism Feminin (Arabs said so). Oleh karena itu, kata kerja yang menceritakan perbuatan bumi wajib menggunakan bentuk Hiya berakhiran '-at'."
                }
              ]
            },
            {
              "id": "tadabbur-jatuh-dari-langit",
              "number": "06",
              "title": "Menjawab Kritik Orientalis: Perumpamaan 'Jatuh dari Langit' (QS. Al-Hajj: 31)",
              "icon": "fa-meteor",
              "readTime": "15 menit",
              "summary": "Membedah makna 'Kharra minas-samaa'' (Jatuh dari langit) dan menyingkap keagungan gaya bahasa metafora bangsa Arab kuno.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam QS. Al-Hajj: 31, Allah membuat perumpamaan bagi orang yang menyekutukan Allah (Syirik):\n`وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ`\n*(Dan barangsiapa mempersekutukan Allah, maka seolah-olah ia jatuh dari langit lalu disambar oleh burung, atau diterbangkan angin ke tempat yang sangat jauh)*."
                },
                {
                  "type": "deep_dive",
                  "title": "Menyingkap Konteks Budaya di Balik Perumpamaan",
                  "items": [
                    {
                      "type": "Kritik Orientalis (Nöldeke dkk):",
                      "examples": "Sebagian orientalis mengkritik perumpamaan ini dengan menganggap tidak masuk akal karena tidak ada orang jatuh dari langit lalu disambar burung di udara."
                    },
                    {
                      "type": "Jawaban Konteks Bahasa Arab Klasik:",
                      "examples": "Dalam perang Arab kuno, pasukan di puncak bukit tinggi memiliki keunggulan mutlak. Jika mereka kalah dan jasadnya dilempar dari tebing curam ke jurang, mereka dijuluki 'Jatuh dari langit' (simbol pecundang paling hina yang ditolak bahkan oleh sukunya sendiri)."
                    },
                    {
                      "type": "Simbol Kehinaan Syirik:",
                      "examples": "Jasad orang murtad/syirik tersebut tidak dikuburkan sukunya karena menjadi aib, sehingga dibiarkan dimangsa burung pemakan bangkai (*vultures*), lalu tulang belulangnya tersapu badai ke tempat terpencil tak berbekas."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Pelajaran Abadi Retorika Al-Qur'an",
                  "text": "Al-Qur'an menggunakan metafora yang paling menggetarkan hati audiens pertamanya. Perumpamaan syirik diibaratkan sebagai kehancuran total: kehilangan martabat, dicabik-cabik nafsu liar (seperti burung pemangsa), dan terlempar jauh dari rahmat Allah."
                },
                {
                  "type": "summary_card",
                  "title": "Pencapaian Mengagumkan Day 9! 🌟",
                  "points": [
                    "Memasuki semesta Fi'il: 1 kata kerja = 1 kalimat sempurna yang memuat Pelaku.",
                    "Tabel 14 Fi'il Madhi: Nasara, Nasaraa, Nasaruu, Nasarat, Nasarataa, Nasarna, Nasarta, Nasartumaa, Nasartum, Nasarti, Nasartumaa, Nasartunna, Nasartu, Nasarnaa.",
                    "Teknik Meminjam (Borrowing Pattern) dari tabel Dhamir memudahkan penguasaan akhiran kata kerja.",
                    "Kaidah huruf terakhir sukun sejak bentuk Hunna (نَصَرْنَ).",
                    "Mampu mendeteksi pelaku kata kerja Al-Qur'an secara instan dari akhirannya.",
                    "Tadabbur mendalam perumpamaan Al-Qur'an pada fenomena alam dan metafora sastra Arab klasik."
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 9",
              "url": "https://www.youtube.com/live/XvYIpYmKHJA?si=ID0bxQDECTlnEsuY"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 9",
              "url": "https://drive.google.com/open?id=1sEb5QW9gaHkqvG0wN3-kyRp2EXcvmNfa&usp=drive_copy"
            }
          ]
        },
        {
          "day": 10,
          "title": "Hari 10: Master Fi'il Mudhari' (Kata Kerja Sekarang/Masa Depan), 12 Pola Deteksi, Rekapitulasi Akbar 10 Hari, & Bedah Hadits Sebaik-baik Manusia",
          "videoUrl": "https://www.youtube.com/live/KWfMCaJVNr4?si=ekvsoNGAgLoqdgAL",
          "pdfUrl": "https://drive.google.com/open?id=1CGkmnKra5mcIQGjY5-RVkx3QuShnHiAz&usp=drive_copy",
          "summary": "Menuntaskan Intensive 1 dengan menguasai Fi'il Mudhari' (Sekarang & Masa Depan) melalui 12 pola 'Clues', mendiagnosis fi'il pada ayat Al-Qur'an, rekapitulasi blueprint 10 hari, serta bedah tuntas gramatikal Hadits Nabi tentang sebaik-baik manusia.",
          "lessons": [
            {
              "id": "pengenalan-fiil-mudhari",
              "number": "01",
              "title": "Pengenalan Fi'il Mudhari': Awalan Huruf A-N-Y-T (Sekarang & Masa Depan)",
              "icon": "fa-hourglass-half",
              "readTime": "15 menit",
              "summary": "Memahami mengapa bangsa Arab menggabungkan waktu sekarang dan masa depan dalam Fi'il Mudhari', serta 4 huruf awalan pengenal (Alif, Nun, Ya, Ta).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Alhamdulillah! Hari ini kita tiba di puncak hari terakhir **Intensive 1 (Day 10)**. Setelah menguasai Fi'il Madhi (Bentuk Lampau) yang mengalami perubahan pada akhiran kata, hari ini kita menuntaskan **FI'IL MUDHARI' (الفِعْلُ المُضَارِعُ - Kata Kerja Masa Sekarang & Masa Depan)**!"
                },
                {
                  "type": "card_grid",
                  "title": "Karakteristik Unik Fi'il Mudhari'",
                  "items": [
                    {
                      "icon": "fa-arrows-rotate",
                      "title": "1. Mencakup 2 Dimensi Waktu Sekaligus",
                      "desc": "Bangsa Arab tidak menciptakan bentuk kata kerja ketiga untuk masa depan. Fi'il Mudhari' mencakup makna SEKARANG (Present / Sedang berlangsung) DAN MASA DEPAN (Future / Akan berlangsung)."
                    },
                    {
                      "icon": "fa-arrow-right-to-bracket",
                      "title": "2. Perubahan Terjadi pada AWALAN",
                      "desc": "Jika Fi'il Madhi dikenali dari bunyi akhirannya (Nasara, Nasarat, Nasartum), maka Fi'il Mudhari' DIKENALI DARI HURUF AWALANNYA (Alif, Nun, Ya, Ta)."
                    },
                    {
                      "icon": "fa-signature",
                      "title": "3. 4 Huruf Awalan Mudhari' (أ - ن - ي - ت)",
                      "desc": "Singkatan 'ANAYTU' atau 'ANITA': Alif (Saya), Nun (Kami), Ya (Dia/Mereka), Ta (Kamu/Kalian/Dia Wanita)."
                    },
                    {
                      "icon": "fa-volume-high",
                      "title": "4. Harakat Awalan: Fathah atau Dhammah",
                      "desc": "Huruf awalan ini bisa berharakat fathah (A, Na, Ya, Ta) atau dhammah (U, Nu, Yu, Tu), namun maknanya tetap sama sesuai hurufnya."
                    }
                  ]
                },
                {
                  "type": "comparison_table",
                  "title": "Awalan Ana (Saya) vs Nahnu (Kami) dalam Zikir & Al-Qur'an",
                  "headers": [
                    "Subjek",
                    "Huruf Awalan",
                    "Contoh Kosakata",
                    "Arti Kalimat"
                  ],
                  "rows": [
                    [
                      "أَنَا (Saya)",
                      "أَـ / أُـ (A / U)",
                      "أَعُوذُ بِاللَّهِ (A'uudzu billaah)",
                      "SAYA memohon perlindungan kepada Allah"
                    ],
                    [
                      "أَنَا (Saya)",
                      "أَـ / أُـ (A / U)",
                      "أَسْتَغْفِرُ اللَّهَ (Astaghfirullaah)",
                      "SAYA memohon ampun kepada Allah"
                    ],
                    [
                      "أَنَا (Saya)",
                      "أَـ / أُـ (A / U)",
                      "أُعَلِّمُ (U'allimu)",
                      "SAYA sedang/akan mengajar"
                    ],
                    [
                      "نَحْنُ (Kami)",
                      "نَـ / نُـ (Na / Nu)",
                      "إِيَّاكَ نَعْبُدُ (Iyyaaka na'budu)",
                      "Hanya kepada-Mu KAMI menyembah"
                    ],
                    [
                      "نَحْنُ (Kami)",
                      "نَـ / نُـ (Na / Nu)",
                      "إِيَّاكَ نَسْتَعِينُ (Iyyaaka nasta'iin)",
                      "Hanya kepada-Mu KAMI memohon pertolongan"
                    ],
                    [
                      "نَحْنُ (Kami)",
                      "نَـ / نُـ (Na / Nu)",
                      "نَسْتَغْفِرُ اللَّهَ (Nastaghfirullaah)",
                      "KAMI memohon ampun kepada Allah"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d10_mudhari_intro_1",
                  "question": "Jika dalam QS. Al-Kafirun ayat 2 disebutkan 'لَا أَعْبُدُ مَا تَعْبُدُونَ' (Laa a'budu...), apakah arti dari kata 'أَعْبُدُ' (A'budu)?",
                  "options": [
                    {
                      "text": "Kami menyembah",
                      "isCorrect": false
                    },
                    {
                      "text": "Saya menyembah / Saya beribadah",
                      "isCorrect": true
                    },
                    {
                      "text": "Mereka menyembah",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Awalan Alif/Hamzah berharakat fathah ('أَـ') adalah penanda subjek 'Ana' (Saya). Maka 'A'budu' berarti 'Saya menyembah'."
                }
              ]
            },
            {
              "id": "12-pola-clues-mudhari",
              "number": "02",
              "title": "12 Pola Deteksi Cepat Fi'il Mudhari' (Grup Ya & Grup Ta)",
              "icon": "fa-list-check",
              "readTime": "15 menit",
              "summary": "Menguasai 12 rumus kombinasi awalan dan akhiran untuk mendeteksi pelaku kata kerja mudhari' secara instan.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk mengetahui pelaku kata kerja mudhari' selain 'Saya' dan 'Kami', kita memperhatikan kombinasi **HURUF AWALAN** dan **AKHIRAN TAMBAHAN** (Keluarga Ya vs Keluarga Ta):"
                },
                {
                  "type": "comparison_table",
                  "title": "4 Ragam Awalan 'YA' (يـ / يُـ = Dia / Mereka)",
                  "headers": [
                    "Awalan",
                    "Akhiran",
                    "Dhamir (Pelaku)",
                    "Contoh Kata",
                    "Arti"
                  ],
                  "rows": [
                    [
                      "يـ / يُـ",
                      "(Tanpa akhiran)",
                      "هُوَ (Dia 1 pria)",
                      "يَنْصُرُ (Yanshuru)",
                      "Dia (1 pria) sedang/akan menolong"
                    ],
                    [
                      "يـ / يُـ",
                      "ـَانِ (-aani)",
                      "هُمَا (Mereka berdua pria)",
                      "يَنْصُرَانِ (Yanshurani)",
                      "Mereka berdua (pria) menolong"
                    ],
                    [
                      "يـ / يُـ",
                      "ـُونَ (-uuna)",
                      "هُمْ (Mereka 3+ pria)",
                      "يَنْصُرُونَ (Yansharuuna)",
                      "Mereka semua (pria) menolong"
                    ],
                    [
                      "يـ / يُـ",
                      "ـْنَ (-na)",
                      "هُنَّ (Mereka 3+ wanita)",
                      "يَنْصُرْنَ (Yanshurna)",
                      "Mereka semua (wanita) menolong"
                    ]
                  ]
                },
                {
                  "type": "comparison_table",
                  "title": "6 Ragam Awalan 'TA' (تـ / تُـ = Kamu / Kalian / Dia Wanita)",
                  "headers": [
                    "Awalan",
                    "Akhiran",
                    "Dhamir (Pelaku)",
                    "Contoh Kata",
                    "Arti"
                  ],
                  "rows": [
                    [
                      "تـ / تُـ",
                      "(Tanpa akhiran)",
                      "أَنْتَ (Kamu 1 pria) / هِيَ (Dia 1 wanita)",
                      "تَنْصُرُ (Tanshuru)",
                      "Kamu (pria) / Dia (wanita) menolong"
                    ],
                    [
                      "تـ / تُـ",
                      "ـَانِ (-aani)",
                      "أَنْتُمَا (Kalian berdua)",
                      "تَنْصُرَانِ (Tanshurani)",
                      "Kalian berdua menolong"
                    ],
                    [
                      "تـ / تُـ",
                      "ـُونَ (-uuna)",
                      "أَنْتُمْ (Kalian 3+ pria)",
                      "تَنْصُرُونَ (Tanshuruuna)",
                      "Kalian semua (pria) menolong"
                    ],
                    [
                      "تـ / تُـ",
                      "ـْنَ (-na)",
                      "أَنْتُنَّ (Kalian 3+ wanita)",
                      "تَنْصُرْنَ (Tanshurna)",
                      "Kalian semua (wanita) menolong"
                    ],
                    [
                      "تـ / تُـ",
                      "ـِينَ (-iina)",
                      "أَنْتِ (Kamu 1 wanita)",
                      "تَنْصُرِينَ (Tanshuriina)",
                      "Kamu (1 wanita) menolong"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Kunci Emas Pembeda 'Ya' vs 'Ta'",
                  "text": "• Semua turunan awalan **'YA' (يـ)** TIDAK PERNAH memuat kata 'Kamu' (selalu bermakna DIA / MEREKA).\n• Semua turunan awalan **'TA' (تـ)** SELALU memuat kata 'KAMU / KALIAN' (kecuali bentuk tunggal tanpa akhiran yang juga bisa bermakna 'HIYA' / Dia wanita)."
                },
                {
                  "type": "quiz",
                  "id": "q_d10_clues_1",
                  "question": "Apakah perbedaan arti antara 'يَعْلَمُونَ' (Ya'lamuuna) dengan 'تَعْلَمُونَ' (Ta'lamuuna)?",
                  "options": [
                    {
                      "text": "Ya'lamuuna = Kalian tahu; Ta'lamuuna = Mereka tahu",
                      "isCorrect": false
                    },
                    {
                      "text": "Ya'lamuuna = Mereka tahu (Hum); Ta'lamuuna = Kalian semua tahu (Antum)",
                      "isCorrect": true
                    },
                    {
                      "text": "Keduanya sama persis",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Awalan 'Ya-' dengan akhiran '-uuna' menunjukkan pelaku 'Hum' (Mereka), sedangkan awalan 'Ta-' dengan akhiran '-uuna' menunjukkan pelaku 'Antum' (Kalian semua)."
                }
              ]
            },
            {
              "id": "lab-praktik-analisis-mudhari",
              "number": "03",
              "title": "Laboratorium Praktik Analisis Fi'il Mudhari' Al-Qur'an",
              "icon": "fa-microscope",
              "readTime": "15 menit",
              "summary": "Menguji ketajaman mendeteksi pelaku kata kerja mudhari' pada beragam potongan ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita lakukan latihan membaca dan mendiagnosis kata kerja Mudhari' pada ayat-ayat Al-Qur'an pilihan:"
                },
                {
                  "type": "case_study",
                  "title": "Studi Kasus 8 Fi'il Mudhari' Al-Qur'an",
                  "points": [
                    {
                      "label": "1. 'تَمُوتُونَ' (Tamuutuuna) ➔ QS. Al-Baqarah: 132",
                      "desc": "Awalan Ta- + Akhiran -uuna ➔ Pelaku: **Antum (Kalian semua)**. Artinya: 'Kalian semua akan mati'."
                    },
                    {
                      "label": "2. 'يَظْلِمُونَ' (Yazhlimuuna) ➔ QS. Al-Baqarah: 57",
                      "desc": "Awalan Ya- + Akhiran -uuna ➔ Pelaku: **Hum (Mereka)**. Artinya: 'Mereka berbuat zalim/aniaya'."
                    },
                    {
                      "label": "3. 'أَتَوَكَّلُ' (Atawakkalu) ➔ QS. Hud: 88",
                      "desc": "Awalan Alif/Hamzah (A-) ➔ Pelaku: **Ana (Saya)**. Artinya: 'Saya bertawakkal / berserah diri'."
                    },
                    {
                      "label": "4. 'تَقُولُ' (Taquulu) ➔ QS. Al-Baqarah: 111",
                      "desc": "Awalan Ta- polos ➔ Pelaku: **Anta (Kamu) / Hiya (Dia wanita)**. Artinya: 'Kamu berkata / Dia berkata'."
                    },
                    {
                      "label": "5. 'نَخَافُ' (Nakhaafu) ➔ QS. Thaha: 45",
                      "desc": "Awalan Nun (Na-) ➔ Pelaku: **Nahnu (Kami)**. Artinya: 'Kami berdua/kami semua takut'."
                    },
                    {
                      "label": "6. 'يُرِيدَانِ' (Yuriidaani) ➔ QS. Al-Kahf: 77",
                      "desc": "Awalan Ya- + Akhiran -aani ➔ Pelaku: **Humaa (Mereka berdua)**. Artinya: 'Mereka berdua menghendaki'."
                    },
                    {
                      "label": "7. 'يَمْشُونَ' (Yamsyuuna) ➔ QS. Al-Furqan: 63",
                      "desc": "Awalan Ya- + Akhiran -uuna ➔ Pelaku: **Hum (Mereka)**. Artinya: 'Mereka berjalan'."
                    },
                    {
                      "label": "8. 'يَتَرَبَّصْنَ' (Yatarabbashna) ➔ QS. Al-Baqarah: 228",
                      "desc": "Awalan Ya- + Akhiran -na sukun ➔ Pelaku: **Hunna (Para wanita itu)**. Artinya: 'Mereka (para wanita) menanti/menunggu'."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_d10_lab_1",
                  "question": "Pada ayat 'قَالُوا لَا تَخَفْ إِنَّا نَخَافُ' (Innaa nakhaafu), apakah arti dari kata kerja 'نَخَافُ' (Nakhaafu)?",
                  "options": [
                    {
                      "text": "Saya takut",
                      "isCorrect": false
                    },
                    {
                      "text": "Kami takut",
                      "isCorrect": true
                    },
                    {
                      "text": "Mereka takut",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Awalan Nun 'نَـ' adalah penanda subjek 'Nahnu' (Kami). Maka 'Nakhaafu' berarti 'Kami takut'."
                }
              ]
            },
            {
              "id": "bedah-total-hadits-sebaik-baik-manusia",
              "number": "04",
              "title": "Bedah Gramatikal Hadits: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ'",
              "icon": "fa-award",
              "readTime": "15 menit",
              "summary": "Menerapkan seluruh gabungan ilmu Ism, Fi'il, Frasa, dan Status untuk membedah hadits agung tentang kemuliaan belajar dan mengajar Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Rasulullah ﷺ bersabda dalam sebuah hadits shahih yang sangat masyhur:\n`خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ`\n*(Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya)*.\n\nMari kita bedah setiap kata menggunakan seluruh perangkat ilmu yang telah kita pelajari selama 10 hari!"
                },
                {
                  "type": "deep_dive",
                  "title": "Analisis Anatomi Kata Hadits",
                  "items": [
                    {
                      "type": "1. 'خَيْرُكُمْ' (Khayrukum):",
                      "examples": "Merupakan Frasa IDHAFAH. 'Khayru' adalah Mudhaf (Ringan, tanpa Tanwin, tanpa Al). 'Kum' adalah Mudhaf Ilayh (Dhamir Jar bersambung dari Antum). Artinya: 'Sebaik-baik kalian / Sebaik-baik kalian semua'."
                    },
                    {
                      "type": "2. 'مَنْ' (Man):",
                      "examples": "Ism Mausul / Kata Penghubung yang bermakna: 'Orang yang / Siapa saja yang'."
                    },
                    {
                      "type": "3. 'تَعَلَّمَ' (Ta'allama):",
                      "examples": "Merupakan FI'IL MADHI (Bentuk Lampau) dengan subjek tersembunyi 'HUWA' (Dia). Artinya: 'Dia telah belajar / orang yang telah mempelajari'."
                    },
                    {
                      "type": "4. 'الْقُرْآنَ' (Al-Qur'aana):",
                      "examples": "Berstatus NASB (akhiran fathah) karena bertindak sebagai DETAIL / OBJEK dari perbuatan belajar (Apa yang ia pelajari? Al-Qur'an!)."
                    },
                    {
                      "type": "5. 'وَ' (Wa):",
                      "examples": "Harf 'Athaf yang bermakna 'Dan'."
                    },
                    {
                      "type": "6. 'عَلَّمَهُ' ('Allamahu):",
                      "examples": "Gabungan FI'IL MADHI ('Allama = Dia telah mengajarkan) + DHAMIR NASB BERSAMBUNG ('-hu' = mengajarkannya / mengajarkan Al-Qur'an tersebut)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Refleksi Pedagogis Ustaz Nouman Ali Khan",
                  "text": "Perhatikan betapa indahnya hadits ini! Rasulullah ﷺ tidak mengatakan 'Yang terbaik adalah yang tahu segalanya'. Yang terbaik adalah yang **BELAJAR** dan **MENGAJARKANNYA**. Begitu Anda mempelajari satu materi (seperti 4 Properti Ism atau Bagan Dhamir), bagikan dan ajarkanlah kepada keluarga, sahabat, atau anak-anak Anda!"
                },
                {
                  "type": "quiz",
                  "id": "q_d10_hadits_1",
                  "question": "Mengapa kata 'الْقُرْآنَ' (Al-Qur'aana) pada hadits di atas berstatus Nasb (berharakat fathah di akhir)?",
                  "options": [
                    {
                      "text": "Karena didahului oleh Harf Jar",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena bertindak sebagai Detail/Objek (Maf'ul Bih) dari kata kerja 'Ta'allama' (Apa yang dipelajari)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena merupakan kata sifat",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam tata bahasa Arab, detail atau objek dari sebuah perbuatan selalu berstatus Nasb (Manshub). Al-Qur'an adalah hal yang dipelajari."
                }
              ]
            },
            {
              "id": "master-blueprint-rekap-10-hari",
              "number": "05",
              "title": "Master Blueprint: Rekapitulasi Akbar 10 Hari Intensive 1",
              "icon": "fa-map",
              "readTime": "15 menit",
              "summary": "Peta navigasi 18 menit yang merangkum seluruh kurikulum fondasi bahasa Arab Intensive 1 dari A sampai Z.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita tinjau kembali seluruh bangunan megah tata bahasa Arab yang telah berhasil Anda dirikan selama 10 hari terakhir:"
                },
                {
                  "type": "card_grid",
                  "title": "Pilar-Pilar Kurikulum Intensive 1",
                  "items": [
                    {
                      "icon": "fa-cubes",
                      "title": "3 Jenis Kata Dasar",
                      "desc": "Ism (Kata Benda/Sifat/Konsep), Fi'il (Kata Kerja Terikat Waktu), dan Harf (Partikel Penghubung)."
                    },
                    {
                      "icon": "fa-gem",
                      "title": "4 Properti Ism",
                      "desc": "1. Status (Rafa', Nasb, Jar; Berat vs Ringan; Fleksibilitas).\n2. Number (Mufrad, Tatsniyah, Jamak Salim & Taksir).\n3. Gender (Mudzakar vs Muannats Haqiqi & Majazi).\n4. Type (Nakirah vs 7 Jenis Ma'rifah)."
                    },
                    {
                      "icon": "fa-puzzle-piece",
                      "title": "5 Fragmen / Frasa Kata",
                      "desc": "1. Idhafah (Mudhaf & Mudhaf Ilayh).\n2. Jar wa Majroor (Harf Jar + Ism Jar).\n3. Harf Nasb & Ism-nya (Inna wa Akhawaatuha).\n4. Mawshuf & Sifah (Frasa Sifat).\n5. Ism Isyarah & Mushar Ilayh (Kata Tunjuk)."
                    },
                    {
                      "icon": "fa-link-slash",
                      "title": "Jumlah Ismiyyah & 'Break the Chain'",
                      "desc": "Teknik menemukan kata penghubung tak terlihat 'IS / ADALAH' untuk membedakan antara Frasa Belum Sempurna vs Kalimat Sempurna."
                    },
                    {
                      "icon": "fa-clock-rotate-left",
                      "title": "Fi'il Madhi (Bentuk Lampau)",
                      "desc": "14 Konjugasi Pelaku (Huwa s/d Nahnu) dengan kaidah sukun sejak Hunna dan teknik meminjam dari tabel Dhamir."
                    },
                    {
                      "icon": "fa-forward",
                      "title": "Fi'il Mudhari' (Sekarang/Depan)",
                      "desc": "12 Pola Deteksi Cepat dengan 4 Huruf Awalan (Alif, Nun, Ya, Ta) dan akhiran kombinasi."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "70% Teks Al-Qur'an Kini Terbuka Untuk Anda!",
                  "text": "Dengan menguasai seluruh pilar di atas, lebih dari 70% struktur kalimat pada setiap halaman mushaf Al-Qur'an sudah dapat Anda kenali dan pahami kerangka gramatikanya!"
                },
                {
                  "type": "quiz",
                  "id": "q_d10_rekap_1",
                  "question": "Manakah di antara pilihan berikut yang BUKAN merupakan salah satu dari 5 Fragmen Ism?",
                  "options": [
                    {
                      "text": "Idhafah (Mudhaf & Mudhaf Ilayh)",
                      "isCorrect": false
                    },
                    {
                      "text": "Mawshuf & Sifah (Kata Benda & Sifat)",
                      "isCorrect": false
                    },
                    {
                      "text": "Fi'il Madhi & Fi'il Mudhari'",
                      "isCorrect": true
                    },
                    {
                      "text": "Jar wa Majroor (Harf Jar & Ism Jar)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Fi'il Madhi dan Fi'il Mudhari' adalah jenis Kata Kerja (Fi'il), bukan termasuk dalam 5 Fragmen Ism."
                }
              ]
            },
            {
              "id": "pesan-amanah-penutup-intensive1",
              "number": "06",
              "title": "Pesan Amanah & Menuju Petualangan Intensive 2",
              "icon": "fa-flag-checkered",
              "readTime": "15 menit",
              "summary": "Pesan penutup, cara mengatasi kecemasan belajar, menjaga konsistensi, dan bersiap melangkah ke tahap petualangan berikutnya.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Selamat atas keteguhan, dedikasi, dan perjuangan Anda menuntaskan 10 hari pembelajaran intensif bahasa Al-Qur'an metode Dream Bayyinah!\n\nAnda telah menyelesaikan setara dengan **75% materi satu semester perkuliahan bahasa Arab formal** hanya dalam 10 hari!"
                },
                {
                  "type": "deep_dive",
                  "title": "3 Pesan Emas Ustaz Nouman Ali Khan",
                  "items": [
                    {
                      "type": "1. Hilangkan Sindrom Kecemasan (Overcoming Anxiety):",
                      "examples": "Jangan cemas jika Anda merasa belum menghafal 100% kosakata atau bingung saat membuka mushaf sendirian. Belajar bahasa Arab adalah proses spiral berlapis: materi ini akan diulang dan diperdalam kembali pada putaran berikutnya."
                    },
                    {
                      "type": "2. Nilai Sebuah Amanah & Pengorbanan:",
                      "examples": "Waktu, energi, dan kesempatan yang telah Anda curahkan adalah amanah mulia. Jadikan ilmu ini sebagai jembatan untuk semakin dekat dengan firman Allah di setiap shalat Anda."
                    },
                    {
                      "type": "3. Menuju Intensive 2 & Round 2:",
                      "examples": "Di Intensive 2, kita akan melengkapi potongan puzzle yang tersisa: Pelaku di Luar (Fa'il Zhahir / Outside Doer), Menempelkan Dhamir pada Fi'il, Bentuk Ringan & Paling Ringan Fi'il Mudhari', serta Kalimat Perintah & Larangan (Amr & Nahy)!"
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Pencapaian Agung Tuntas Intensive 1! 🎓🎉",
                  "points": [
                    "Tuntas 10 Hari Pembelajaran Intensif (60 Bab Materi Terstruktur).",
                    "Menguasai Fondasi 4 Properti Ism & Tabel Muslimun Lengkap.",
                    "Menguasai 5 Macam Fragmen Utama & Logika Jumlah Ismiyyah.",
                    "Menguasai Tabel 14 Konjugasi Fi'il Madhi & 12 Pola Fi'il Mudhari'.",
                    "Mampu membedah ayat Al-Fatihah, Basmalah, ayat-ayat kauniyah, dan Hadits Nabi secara mandiri.",
                    "Siap melangkah ke jenjang berikutnya (Intensive 2) dengan penuh percaya diri!"
                  ]
                }
              ]
            }
          ],
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 1 Day 10",
              "url": "https://www.youtube.com/live/KWfMCaJVNr4?si=ekvsoNGAgLoqdgAL"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 1 Day 10",
              "url": "https://drive.google.com/open?id=1CGkmnKra5mcIQGjY5-RVkx3QuShnHiAz&usp=drive_copy"
            }
          ]
        },
        {
          "day": "QA",
          "title": "Sesi Q&A: Tanya Jawab Klinis, Rahasia Gramatika Lanjutan & Retorika Al-Qur'an (QA 1 & QA 2)",
          "videos": [
            {
              "label": "Video Q&A Sesi 1 (Klinik Ism & Idhafah)",
              "url": "https://www.youtube.com/live/19Nt8SFx0JM?si=eePIpa5pjYpqgLgX"
            },
            {
              "label": "Video Q&A Sesi 2 (Sintaksis & Emosi Nasb)",
              "url": "https://www.youtube.com/live/DeJDR-XuLQc?si=1JswOm0rirQ2dt7o"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi QA 1",
              "url": "https://drive.google.com/open?id=1dU53uhuJHkqM8dKsSIYay2e8eJrXoXwM&usp=drive_copy"
            },
            {
              "label": "Slide Presentasi QA 2",
              "url": "https://drive.google.com/open?id=1Vfaq3pC4ipFGkKCfPKIp5JdMKWiafhp5&usp=drive_copy"
            }
          ],
          "summary": "Sesi konsultasi klinis dan tanya jawab mendalam yang mengupas pertanyaan-pertanyaan kritis peserta Intensive 1: Ism Isyarah dual, bedah 'Dzu' vs 'Dzi' di Surah Ar-Rahman, rahasia emosi harakat Nasb, jamak kolektif, dan ketangguhan retorika Al-Qur'an.",
          "lessons": [
            {
              "id": "qa-ism-isyarah-dan-prioritas-frasa",
              "number": "01",
              "title": "Klinik Ism Isyarah Dual & Prioritas Frasa: Idhafah vs Sifat",
              "icon": "fa-crosshairs",
              "readTime": "15 menit",
              "summary": "Memahami bentuk dual kata tunjuk (Hadzani/Hadzayni) pada QS. Thaha: 63 dan kaidah hierarki prioritas analisis (Idhafah mendahului Mawshuf Sifah).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam sesi Q&A pertama, peserta mengajukan pertanyaan penting mengenai bentuk kata tunjuk yang jarang dibahas: **Bentuk Dual (2 Orang/Benda) pada Ism Isyarah** serta **Hierarki Prioritas Hubungan Antarkata**."
                },
                {
                  "type": "card_grid",
                  "title": "Poin-Poin Kunci Tanya Jawab",
                  "items": [
                    {
                      "icon": "fa-arrows-left-right",
                      "title": "1. Fleksibilitas Ism Isyarah Dual",
                      "desc": "Jika bentuk tunggal (هَذَا, هَذِهِ) dan jamak (هَؤُلَاءِ) bersifat Mabni (non-flexible / tidak berubah bunyi), maka bentuk dual-nya MU'RAB (fleksibel mengikuti tabel Muslimani): هَذَانِ (Rafa') dan هَذَيْنِ (Nasb/Jar)."
                    },
                    {
                      "icon": "fa-book-quran",
                      "title": "2. Contoh Al-Qur'an Bentuk Dual",
                      "desc": "QS. Thaha: 63: `إِنْ هَذَانِ لَسَاحِرَانِ` (Kedua orang ini sungguh penyihir) dan QS. Al-Hajj: 19: `هَذَانِ خَصْمَانِ` (Kedua golongan ini saling berselisih)."
                    },
                    {
                      "icon": "fa-layer-group",
                      "title": "3. Hierarki Operasi: Idhafah > Sifat",
                      "desc": "Sama seperti perkalian mendahului penjumlahan dalam matematika (2 x 4 + 7), hubungan IDHAFAH (Mudhaf & Mudhaf Ilayh) SELALU MENJADI PRIORITAS UTAMA sebelum mencari hubungan Sifat (Mawshuf & Sifah)!"
                    },
                    {
                      "icon": "fa-shield-halved",
                      "title": "4. Nama Dzat Allah Tidak Pernah Menjadi Mudhaf",
                      "desc": "Lafadz Jalalah `اللهِ` tidak pernah bertindak sebagai Mudhaf (sebelum kata 'milik/of'). Namun selalu bertindak sebagai Mudhaf Ilayh: Kitabullah, Rasulullah, Baitullah, Rahmatullah."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_qa_priority_1",
                  "question": "Mengapa ketika kita menganalisis kalimat yang memiliki banyak Ism beruntun, kita harus mencari hubungan Idhafah terlebih dahulu sebelum Mawshuf Sifah?",
                  "options": [
                    {
                      "text": "Karena Idhafah adalah ikatan terkuat yang tidak boleh dipisahkan (Prioritas 1)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena kata sifat selalu berada di awal kalimat",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena Idhafah selalu berstatus Rafa'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam tata bahasa Arab, hubungan kepemilikan Idhafah (Mudhaf-Mudhaf Ilayh) adalah ikatan paling mengikat yang menyatukan dua ism menjadi satu entitas konsep utuh."
                }
              ]
            },
            {
              "id": "qa-jamak-non-human-dan-inna-lintas-ayat",
              "number": "02",
              "title": "Misteri Jamak Non-Human (`ـَات`), Jamak Sebagian Fleksibel & Inna Lintas Ayat",
              "icon": "fa-infinity",
              "readTime": "15 menit",
              "summary": "Membedah fleksibilitas jamak benda tak bernyawa (bisa dianggap She atau Plural), jamak taksir berharakat sebagian, dan jangkauan pengaruh Inna melintasi ayat.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Banyak peserta menanyakan mengapa kata-kata berakhiran `ـَات` seperti `سَمَاوَاتٍ` (Langit-langit) dan `سَيِّئَاتٍ` (Dosa-dosa) terkadang disifati dengan kata tunggal feminin (*She*), dan bagaimana kata `حَدَائِقَ` (Taman-taman) bisa berharakat fathah tanpa tanwin."
                },
                {
                  "type": "deep_dive",
                  "title": "Penjelasan Mendalam Sifat Jamak Benda",
                  "items": [
                    {
                      "type": "1. Dua Opsi Jamak Benda `ـَات` (Non-Human Plural):",
                      "examples": "Kata seperti `سَمَاوَاتٍ` adalah jamak benda. Penutur Arab bisa mensifatinya dengan Sifat Jamak Feminin (`سَمَاوَاتٍ عُلَى`) ATAU Sifat Tunggal Feminin / She (`سَمَاوَاتٍ طِبَاقًا`). Keduanya sah secara balaghah!"
                    },
                    {
                      "type": "2. Jamak Taksir Ghayr Munsharif (`حَدَائِقَ`):",
                      "examples": "Kata `حَدَائِقَ` (taman-taman) adalah Jamak Taksir berpola khusus (Muntaha al-Jumu') yang tergolong SEBAGIAN FLEKSIBEL (Partly Flexible). Bentuk Rafa'-nya adalah `حَدَائِقُ`, sedangkan Nasb dan Jar-nya adalah `حَدَائِقَ` (tanpa tanwin dan tanpa kasrah)!"
                    },
                    {
                      "type": "3. Jangkauan Pengaruh 'Inna' Melintasi Ayat:",
                      "examples": "Dalam QS. An-Naba': 31–34, kata `إِنَّ` di ayat 31 membuat seluruh kata di ayat 31, 32, 33, dan 34 berstatus NASB beruntun: `مَفَازًا` (31) ➔ `حَدَائِقَ وَأَعْنَابًا` (32) ➔ `وَكَوَاعِبَ أَتْرَابًا` (33) ➔ `وَكَأْسًا دِهَاقًا` (34)!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_qa_inna_cross_1",
                  "question": "Mengapa kata 'حَدَائِقَ وَأَعْنَابًا' pada Surah An-Naba' ayat 32 berstatus Nasb (manshub)?",
                  "options": [
                    {
                      "text": "Karena merupakan objek dari 'Inna' pada ayat 31 sebelumnya yang terus menyambung secara gramatikal",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena didahului oleh Harf Jar",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena merupakan kata keterangan waktu",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Pengaruh harf penegas 'Inna' (Harf Nasb) dapat menjangkau kata-kata sambungan ('athaf) melintasi beberapa ayat berikutnya."
                }
              ]
            },
            {
              "id": "qa-gender-semu-dan-collective-nouns",
              "number": "03",
              "title": "Memahami Gender Semu (Fake Gender) & Kata Kolektif (`قَوْم`, `نَاس`, `قَرْن`)",
              "icon": "fa-venus-mars",
              "readTime": "15 menit",
              "summary": "Mengapa seluruh kata Arab memiliki gender (tidak ada 'it' netral) dan bagaimana kata benda kolektif diperlakukan dalam gramatika Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam bahasa Arab, **TIDAK ADA KATA GANTI NETRAL (IT)** seperti dalam bahasa Inggris. Setiap kata benda, tempat, konsep cinta, maupun kata sifat PASTI memiliki gender maskulin atau feminin."
                },
                {
                  "type": "comparison_table",
                  "title": "4 Kuadran Gender dalam Bahasa Arab",
                  "headers": [
                    "Kategori",
                    "Definisi",
                    "Contoh Nyata",
                    "Status"
                  ],
                  "rows": [
                    [
                      "Real Feminine (Muannats Haqiqi)",
                      "Memiliki jenis kelamin biologis wanita",
                      "أُمّ (Ibu), مَرْيَم (Maryam), بِنْت (Gadis)",
                      "Pasti Feminin"
                    ],
                    [
                      "Real Masculine (Mudzakar Haqiqi)",
                      "Memiliki jenis kelamin biologis pria",
                      "أَب (Ayah), زَيْد (Zaid), وَلَد (Anak laki-laki)",
                      "Pasti Maskulin"
                    ],
                    [
                      "Fake Feminine (Muannats Majazi)",
                      "Benda/konsep yang dihukumi feminin karena tanda/bangsa Arab berkata begitu",
                      "شَمْس (Matahari), أَرْض (Bumi), مَوَدَّة (Kasih sayang)",
                      "Dihukumi Feminin"
                    ],
                    [
                      "Fake Masculine (Mudzakar Majazi)",
                      "Benda/konsep tanpa tanda feminin",
                      "كِتَاب (Buku), بَيْت (Rumah), مَيْدَان (Lapangan)",
                      "Dihukumi Maskulin"
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Kaidah Kata Benda Kolektif: 'قَوْمًا آخَرِينَ' & 'الْقَوْمِ الظَّالِمِينَ'",
                  "points": [
                    {
                      "label": "Kata 'قَوْم' (Kaum/Bangsa) & 'قَرْن' (Generasi):",
                      "desc": "Secara lafadz tampak tunggal, namun secara makna memuat banyak orang (Collective Noun / Ism Jam'i)."
                    },
                    {
                      "label": "Kesesuaian Sifat Jamak Maskulin:",
                      "desc": "Pada QS. Al-Anbiya: 11: `قَوْمًا آخَرِينَ` (Kaum yang lain), kata 'Aakhariina' berbentuk Jamak Maskulin (Plural) untuk menghormati fakta bahwa 'Qawm' adalah kumpulan banyak orang."
                    },
                    {
                      "label": "Kesesuaian Frasa Sifat:",
                      "desc": "Pada doa Nabi Musa (QS. Al-Qashash: 21): `مِنَ الْقَوْمِ الظَّالِمِينَ` (Dari kaum yang zalim), kata 'Al-Qawm' (Jar) disifati dengan 'Az-Zhalimiina' (Jar Jamak Maskulin)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_qa_gender_1",
                  "question": "Mengapa kata 'كِتَابٌ' (Kitabun / Buku) dalam bahasa Arab dianggap sebagai Maskulin padahal buku tidak bernyawa?",
                  "options": [
                    {
                      "text": "Karena termasuk kategori Fake Masculine (tidak memiliki tanda/alasan feminin)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena berakhiran tanwin",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena merupakan kata sifat",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam bahasa Arab, setiap kata yang tidak terbukti memiliki tanda feminin atau alasan feminin (Arabs said so) secara otomatis berstatus Maskulin Semu (Fake Masculine)."
                }
              ]
            },
            {
              "id": "qa-masterclass-ar-rahman-dzu-vs-dzi",
              "number": "04",
              "title": "Masterclass Surah Ar-Rahman: Bedah 'Dzu' vs 'Dzi' (`ذُو` vs `ذِي`)",
              "icon": "fa-crown",
              "readTime": "15 menit",
              "summary": "Membedah mahakarya gramatika QS. Ar-Rahman ayat 27 vs ayat 78: Mengapa satu ayat menggunakan 'Dzu' (Rafa') dan ayat lainnya menggunakan 'Dzi' (Jar).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ini adalah salah satu analisis paling menakjubkan dalam bahasa Arab Al-Qur'an. Perhatikan perbedaan dua ayat dalam Surah Ar-Rahman berikut:"
                },
                {
                  "type": "formula_box",
                  "title": "Dua Ayat Kembar Surah Ar-Rahman",
                  "formula": "Ayat 27: وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالإِكْرَامِ\nAyat 78: تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالإِكْرَامِ",
                  "note": "Perhatikan harakat kata 'ذُو' (Dzu - Rafa') pada ayat 27 vs 'ذِي' (Dzi - Jar) pada ayat 78!"
                },
                {
                  "type": "case_study",
                  "title": "Bedah Anatomi Sifat Ayat 27 vs Ayat 78",
                  "points": [
                    {
                      "label": "1. Analisis Ayat 27 ('ذُو الْجَلَالِ' - Rafa'):",
                      "desc": "Kata 'وَجْهُ' berstatus RAFA' (Pelaku dari 'Yabqaa' = Wajah Tuhanmu akan tetap kekal). 'ذُو' juga berstatus RAFA' (Mudzakar, Tunggal, Ma'rifah). Ini membuktikan bahwa 'Pemilik Keagungan dan Kemuliaan' adalah SIFAT BAGI WAJAH ALLAH ('Wajhu')!"
                    },
                    {
                      "label": "2. Analisis Ayat 78 ('ذِي الْجَلَالِ' - Jar):",
                      "desc": "Kata 'اسْمُ' berstatus Rafa', sedangkan 'رَبِّكَ' berstatus JAR (sebagai Mudhaf Ilayh). 'ذِي' berstatus JAR. Karena berstatus Jar, 'ذِي' COCOK DENGAN 'رَبِّكَ' (bukan dengan 'Ismu'). Ini membuktikan bahwa 'Pemilik Keagungan dan Kemuliaan' adalah SIFAT BAGI TUHANMU ('Rabbika')!"
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Mukjizat Presisi Bahasa Al-Qur'an",
                  "text": "Hanya dengan perubahan satu huruf dari Waw (`ذُو`) menjadi Ya (`ذِي`), Al-Qur'an mengarahkan pikiran kita secara presisi matematis ke arah entitas mana sifat keagungan tersebut ditujukan!"
                },
                {
                  "type": "quiz",
                  "id": "q_qa_dzu_1",
                  "question": "Pada Surah Ar-Rahman ayat 78 ('تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ'), siapakah yang disifati oleh frasa 'ذِي الْجَلَالِ' (Dzi al-Jalaal)?",
                  "options": [
                    {
                      "text": "Kata 'اسْمُ' (Nama)",
                      "isCorrect": false
                    },
                    {
                      "text": "Kata 'رَبِّكَ' (Tuhanmu), karena keduanya sama-sama berstatus Jar",
                      "isCorrect": true
                    },
                    {
                      "text": "Kata 'تَبَارَكَ'",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Karena 'ذِي' berstatus Jar (akhiran Ya), sifat ini secara mutlak merujuk kepada 'رَبِّكَ' yang juga berstatus Jar (sebagai Mudhaf Ilayh), bukan kepada 'اسْمُ' yang berstatus Rafa'."
                }
              ]
            },
            {
              "id": "qa-ledakan-emosi-harakat-nasb",
              "number": "05",
              "title": "Ledakan Emosi Gramatikal: Rahasia Nasb pada 'Naaqatallaah' & 'Hammaalata'",
              "icon": "fa-fire-flame-curved",
              "readTime": "15 menit",
              "summary": "Menyingkap dimensi sastra tinggi di mana status Nasb digunakan untuk seruan peringatan keras (Ighra') dan celaan tajam (Dzam).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Tata bahasa Arab bukan sekadar rumus matematika kaku. Harakat dan status adalah **WADAH EMOSI DAN INTONASI SUARA**. Dalam sesi Q&A 2, Ustaz Nouman membedah dua contoh getaran emosi harakat Nasb:"
                },
                {
                  "type": "deep_dive",
                  "title": "Studi Kasus Emosi Harakat Nasb",
                  "items": [
                    {
                      "type": "1. Seruan Peringatan Keras: 'نَاقَةَ اللَّهِ' (QS. Asy-Syams: 13):",
                      "examples": "Nabi Shalih tidak sekadar berkata datar 'Unta Allah'. Beliau berseru dengan Nasb: `نَاقَةَ اللَّهِ وَسُقْيَاهَا`! Status Nasb di sini adalah 'Nasb 'ala al-Ighra' / Tahdzir' (Peringatan bahaya tingkat tinggi: *'Awas, jangan sekali-kali kalian sentuh unta betina Allah ini!'*)."
                    },
                    {
                      "type": "2. Ledakan Celaan Menghinakan: 'حَمَّالَةَ الْحَطَبِ' (QS. Al-Lahab: 4):",
                      "examples": "Saat menceritakan istri Abu Lahab (`وَامْرَأَتُهُ` - Rafa'), tiba-tiba kalimat berpindah ke status NASB: `حَمَّالَةَ الْحَطَبِ`! Perpindahan mendadak ke Nasb ini disebut 'Nasb 'ala adz-Dzam' (Pukulan celaan menghinakan: *'Wanita terlaknat yang terus-menerus memikul kayu bakar duri!'*)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Teks Al-Qur'an Menjadi Hidup!",
                  "text": "Ketika telinga Anda mulai terlatih menangkap perubahan Rafa', Nasb, dan Jar, ayat-ayat Al-Qur'an tidak lagi terbaca datar. Anda akan merasakan getaran kemarahan, peringatan cinta, kelembutan, dan keagungan yang tertanam di balik setiap harakat!"
                },
                {
                  "type": "quiz",
                  "id": "q_qa_nasb_emotion_1",
                  "question": "Mengapa frasa 'حَمَّالَةَ الْحَطَبِ' pada Surah Al-Lahab ayat 4 berharakat Nasb (fathah)?",
                  "options": [
                    {
                      "text": "Karena merupakan Mudhaf Ilayh",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena fungsi stilistika sastra Arab 'Nasb 'ala adz-Dzam' (Nasb untuk penegasan celaan/hinaan yang tajam)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena didahului oleh Harf Jar",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam balaghah Al-Qur'an, harakat Nasb yang muncul secara mendadak pada penyebutan sifat seseorang berfungsi sebagai penegasan celaan (*ikhtishash bi adz-dzam*)."
                }
              ]
            },
            {
              "id": "qa-menjawab-keraguan-dan-apologetika",
              "number": "06",
              "title": "Menjawab Keraguan atas Al-Qur'an & Panduan Kamus / Riset Mandiri",
              "icon": "fa-book-open-reader",
              "readTime": "15 menit",
              "summary": "Refleksi filosofis menghadapi klaim kesalahan Al-Qur'an, kejujuran intelektual, dan panduan penggunaan aplikasi serta kamus Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di akhir sesi Q&A, Ustaz Nouman Ali Khan menjawab pertanyaan penting mengenai bagaimana merespons orang yang mengklaim menemukan kesalahan dalam Al-Qur'an dan memberikan panduan praktis alat riset Al-Qur'an."
                },
                {
                  "type": "card_grid",
                  "title": "Pilar Ketangguhan Intelektual & Alat Riset",
                  "items": [
                    {
                      "icon": "fa-brain",
                      "title": "1. Kekuatan Transformasi Peradaban",
                      "desc": "Teks yang mengubah peradaban dunia hanya dalam waktu 25 tahun dan melahirkan ilmuwan-ilmuwan terbesar sejarah tidak mungkin didasarkan pada ketidakteraturan atau kesalahan tata bahasa."
                    },
                    {
                      "icon": "fa-heart-circle-check",
                      "title": "2. Kejujuran Intelektual (Intellectual Honesty)",
                      "desc": "Sebagian besar keraguan bukan bersumber dari riset mendalam, melainkan luka psikologis atau pencarian pembenaran. Siapa pun yang bergulat dengan Al-Qur'an secara tulus akan takluk di hadapan keagungan firman-Nya."
                    },
                    {
                      "icon": "fa-mobile-screen",
                      "title": "3. Aplikasi Riset Cepat: 'AlQuran App'",
                      "desc": "Gunakan aplikasi pencarian teks Arab cepat (seperti AlQuran App) untuk menemukan ayat-ayat yang memuat frasa gramatikal tertentu secara instan."
                    },
                    {
                      "icon": "fa-laptop-code",
                      "title": "4. Portal Analisis: Corpus Quran & Quran.com",
                      "desc": "Situs corpus.quran.com memberikan rincian gramatikal kata demi kata (I'rab, Harf Jar, Majroor, Sifah) yang sangat bermanfaat sebagai bahan verifikasi belajar."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Agung Sesi Q&A Intensive 1! 🌟",
                  "points": [
                    "Memahami Ism Isyarah bentuk Dual (هَذَانِ / هَذَيْنِ) yang mu'rab (fleksibel).",
                    "Prinsip hierarki: Idhafah adalah prioritas utama sebelum menganalisis Sifat.",
                    "Jamak taksir benda tak bernyawa (`سَمَاوَاتٍ`, `حَدَائِقَ`) dan jangkauan Harf Nasb lintas ayat.",
                    "Kaidah 4 kuadran Gender dan perlakuan kata kolektif (`قَوْم`, `نَاس`, `قَرْن`).",
                    "Keajaiban perbandingan `ذُو الْجَلَالِ` vs `ذِي الْجَلَالِ` pada Surah Ar-Rahman.",
                    "Dimensi sastra harakat Nasb untuk seruan bahaya (`نَاقَةَ اللَّهِ`) dan celaan (`حَمَّالَةَ الْحَطَبِ`).",
                    "Keteguhan intelektual membela kebenaran Al-Qur'an dan penggunaan alat riset modern."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Sintaksis & Sharaf Lanjutan (Morfologi Kata Kerja & Kalimat Kompleks)",
      "number": "Intensive 2",
      "days": [
        {
          "day": 1,
          "title": "Hari 1: Reset Fondasi, 3 Bahasa Arab, Terminologi Marfu'/Mansub/Majroor & Master Kombinasi Ringan",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 2 Day 1",
              "url": "https://www.youtube.com/live/WPjsDVS_trI?si=GIcpmBccWmmFMJ9J"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 2 Day 1",
              "url": "https://drive.google.com/open?id=16ITRyE6r5jl7nh21LxeHsOw90dQddg2Y&usp=drive_copy"
            }
          ],
          "summary": "Mengawali babak baru Intensive 2 dengan memantapkan janji kemudahan Al-Qur'an, 3 tingkatan bahasa Arab, eliminasi jenis kata, terminologi status Marfu'/Mansub/Majroor, serta bedah tuntas kasus kombinasi ringan (Aynaa, Rasoolaa, Kalimaati).",
          "lessons": [
            {
              "id": "i2-d1-pembukaan-dan-3-ragam-bahasa-arab",
              "number": "01",
              "title": "Prolog Intensive 2 & 3 Tingkatan Bahasa Arab (Street, Fusha, Classical)",
              "icon": "fa-compass-drafting",
              "readTime": "15 menit",
              "summary": "Memperbaharui niat belajar Al-Qur'an (QS. Al-Qamar: 17) dan membedah perbedaan Street Arabic, Fusha, serta Classical Arabic (Lughat Al-Arab).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Selamat datang di **Intensive 2**! Kita memulai babak baru ini dengan merenungkan janji agung Allah dalam Surah Al-Qamar ayat 17:"
                },
                {
                  "type": "quote",
                  "text": "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ\n'Dan sungguh, telah Kami mudahkan Al-Qur'an untuk peringatan/dipelajari, maka adakah orang yang mau mengambil pelajaran?'",
                  "author": "QS. Al-Qamar [54]: 17"
                },
                {
                  "type": "paragraph",
                  "text": "Allah menantang kita: *'Aku telah menjadikannya mudah. Apakah kamu siap meluangkan waktu dan tenagamu?'* Ketika kita berkumpul mempelajari bahasa firman-Nya, para malaikat mengepakkan sayap menaungi kita, ketenangan (*sakinah*) turun, dan Allah membanggakan nama kita di hadapan para malaikat terdekat-Nya."
                },
                {
                  "type": "card_grid",
                  "title": "3 Tingkatan Bahasa Arab di Dunia",
                  "items": [
                    {
                      "icon": "fa-comments",
                      "title": "1. Street Arabic ('Ammiyyah / Dialek Pasar)",
                      "desc": "Bahasa percakapan harian lokal (Mesir, Syam, Teluk, Maghribi). Pengucapannya banyak dipotong dan bervariasi (misal: 'Qalam' diucapkan 'Alam' / 'Lam'; 'Kayfa Halak' menjadi 'Ezzayak' atau 'Chayf Halak')."
                    },
                    {
                      "icon": "fa-newspaper",
                      "title": "2. Fusha (Modern Standard Arabic)",
                      "desc": "Bahasa Arab baku modern yang digunakan di koran, siaran berita resmi, dan buku akademik modern. Tata bahasanya rapi namun kosakatanya terbatas pada konteks modern."
                    },
                    {
                      "icon": "fa-book-quran",
                      "title": "3. Classical Arabic (Lughat Al-Arab)",
                      "desc": "Bahasa Arab sastra kuno tertinggi tempat Al-Qur'an diturunkan. Fusha hanyalah sebagian kecil di dalam samudra Classical Arabic. Kurikulum Dream berfokus 100% pada Classical Arabic!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d1_arabic_types",
                  "question": "Mengapa kurikulum Dream Intensive berfokus pada Classical Arabic (Lughat Al-Arab) dan bukan Street Arabic ('Ammiyyah)?",
                  "options": [
                    {
                      "text": "Karena Al-Qur'an diturunkan dalam bahasa sastra Arab kuno tingkat tinggi (Classical Arabic)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena Street Arabic lebih sulit dipelajari daripada Classical Arabic",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena Fusha tidak memiliki tata bahasa",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Classical Arabic adalah bahasa sastra orisinal bangsa Arab kuno saat wahyu Al-Qur'an diturunkan, memuat kedalaman makna dan balaghah yang tidak ditemukan dalam dialek pasar modern."
                }
              ]
            },
            {
              "id": "i2-d1-tiga-jenis-kata-dan-metode-eliminasi",
              "number": "02",
              "title": "3 Jenis Kata & Metode Eliminasi (Process of Elimination)",
              "icon": "fa-filter",
              "readTime": "15 menit",
              "summary": "Memantapkan klasifikasi Ism, Fi'il, dan Harf serta menggunakan teknik eliminasi untuk mengenali kata yang ambigu.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Setiap kata dalam bahasa Arab di seluruh Al-Qur'an hanya terbagi ke dalam **3 Kategori Mutlak**: jika kita menandai Ism dengan kuning, Fi'il dengan hijau, dan Harf dengan biru, maka seluruh lembaran mushaf akan tertutupi warna tanpa ada satu kata pun yang tersisa."
                },
                {
                  "type": "comparison_table",
                  "title": "Definisi Formal vs Definisi Alternatif (Eliminasi)",
                  "headers": [
                    "Jenis Kata",
                    "Definisi Standar",
                    "Definisi Alternatif (Eliminasi)",
                    "Ciri Utama"
                  ],
                  "rows": [
                    [
                      "ISM (الاسْمُ)",
                      "Nama orang, tempat, benda, ide/konsep, kata sifat, kata keterangan, dll.",
                      "Bila BUKAN Fi'il dan BUKAN Harf ➔ PASTI ISM!",
                      "Kata yang memiliki makna mandiri dan tidak terikat waktu lampau/sekarang/depan."
                    ],
                    [
                      "FI'IL (الفِعْلُ)",
                      "Kata kerja yang terikat dengan dimensi waktu (lampau, sekarang, atau akan datang).",
                      "Bila BUKAN Ism dan BUKAN Harf ➔ PASTI FI'IL!",
                      "Mengandung perbuatan + penanda waktu."
                    ],
                    [
                      "HARF (الحَرْفُ)",
                      "Kata penghubung/partikel yang tidak bermakna sempurna kecuali diikuti kata lain.",
                      "Bila BUKAN Ism dan BUKAN Fi'il ➔ PASTI HARF!",
                      "Kata-kata pendek seperti Harf Jar (bi, fi, min, ila) dan Harf Nasb (inna, anna, dll.)."
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Studi Kasus Jebakan Kata Bahasa Inggris: Akhiran '-ing' dan '-s'",
                  "points": [
                    {
                      "label": "1. Kata Berakhiran '-ing' (Contoh: 'Typing' / Mengetik):",
                      "desc": "Jika digunakan dalam kalimat 'He is typing' (Sedang mengetik), maka kata ini adalah FI'IL karena terikat waktu. Namun jika digunakan dalam 'Typing is fun' (Mengetik itu menyenangkan) atau 'I love typing', maka kata ini adalah ISM (Ide/Aktivitas)!"
                    },
                    {
                      "label": "2. Kata Berakhiran '-s' (Contoh: 'Jumps' / Lompatan):",
                      "desc": "Jika 'He jumps' (Dia melompat) ➔ FI'IL. Jika 'I did ten jumps' (Sepuluh lompatan) ➔ ISM (Benda/Hitungan)!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d1_elimination",
                  "question": "Dalam kalimat 'Sleeping is important for health', apakah jenis kata untuk 'Sleeping'?",
                  "options": [
                    {
                      "text": "ISM, karena bertindak sebagai ide/konsep aktivitas (bukan kata kerja terikat waktu)",
                      "isCorrect": true
                    },
                    {
                      "text": "FI'IL, karena ada akhiran -ing",
                      "isCorrect": false
                    },
                    {
                      "text": "HARF, karena merupakan kata penghubung",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam kalimat tersebut, 'Sleeping' (Tidur) bertindak sebagai subjek konsep/ide aktivitas, sehingga berstatus sebagai Ism."
                }
              ]
            },
            {
              "id": "i2-d1-terminologi-marfu-mansub-majroor",
              "number": "03",
              "title": "Terminologi Cerdas 3 Status: Marfu', Mansub, & Majroor",
              "icon": "fa-graduation-cap",
              "readTime": "15 menit",
              "summary": "Menguasai cara penyebutan gramatikal profesional: in Rafa' form (Marfu'), in Nasb form (Mansub), dan in Jar form (Majroor).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di Intensive 2, kita menaikkan standar pemahaman tata bahasa kita ke level akademik profesional. Kita tidak hanya menyebut 'kata ini Rafa', melainkan memahami dua cara penyebutan yang tepat:"
                },
                {
                  "type": "card_grid",
                  "title": "2 Cara Menyebut Status Kata Secara Ilmiah",
                  "items": [
                    {
                      "icon": "fa-circle-up",
                      "title": "1. RAFA' ➔ MARFU' (مَرْفُوع)",
                      "desc": "Kita bisa mengatakan: 'Kata كِتَابٌ berada dalam bentuk Rafa' (in Rafa' form)' ATAU 'Kata كِتَابٌ adalah MARFU' (telah di-Rafa'-kan sebagai Pelaku / Doer)'."
                    },
                    {
                      "icon": "fa-arrows-left-right",
                      "title": "2. NASB ➔ MANSUB (مَنْصُوب)",
                      "desc": "Kita bisa mengatakan: 'Kata كِتَابًا berada dalam bentuk Nasb (in Nasb form)' ATAU 'Kata كِتَابًا adalah MANSUB (telah di-Nasb-kan sebagai Rincian / Detail)'."
                    },
                    {
                      "icon": "fa-circle-down",
                      "title": "3. JAR ➔ MAJROOR (مَجْرُور)",
                      "desc": "Kita bisa mengatakan: 'Kata كِتَابٍ berada dalam bentuk Jar (in Jar form)' ATAU 'Kata كِتَابٍ adalah MAJROOR (telah di-Jar-kan setelah 'of' / Harf Jar)'."
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Rumus Investigasi Pertanyaan Fi'il",
                  "formula": "Pertanyaan Pelaku (Siapa yang melakukan?) ➔ MARFU' (Rafa')\nPertanyaan Rincian (Apa, Siapa objeknya, Kapan, Di mana, Mengapa, Bagaimana?) ➔ MANSUB (Nasb)\nHubungan Kepemilikan (Milik siapa? / Kata setelah 'of') ➔ MAJROOR (Jar)",
                  "note": "Pertanyaan rincian WAJIB memuat kata kerja (Fi'il) di dalamnya!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d1_status_terms",
                  "question": "Jika sebuah kata benda bertindak sebagai objek rincian (misal: 'Apa yang dibaca siswa?'), bagaimanakah status kata tersebut secara terminologi gramatikal?",
                  "options": [
                    {
                      "text": "Berstatus Nasb / Mansub (مَنْصُوب)",
                      "isCorrect": true
                    },
                    {
                      "text": "Berstatus Rafa' / Marfu' (مَرْفُوع)",
                      "isCorrect": false
                    },
                    {
                      "text": "Berstatus Jar / Majroor (مَجْرُور)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Jawaban dari pertanyaan rincian atas perbuatan kata kerja (apa, siapa objeknya, kapan, di mana, bagaimana) selalu berstatus Nasb (Mansub)."
                }
              ]
            },
            {
              "id": "i2-d1-klinik-investigasi-kalimat-fiil",
              "number": "04",
              "title": "Klinik Investigasi Kalimat: Mengapa 'Whose Student' Adalah Jar",
              "icon": "fa-magnifying-glass-chart",
              "readTime": "15 menit",
              "summary": "Membedah pertanyaan investigasi kalimat: membedakan rincian perbuatan (Nasb) dengan hubungan identitas/kepemilikan (Jar).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita bedah kalimat klasik: *'A student of his was sleeping soundly'* (Seorang muridnya sedang tidur pulas). Mari kita lihat bagaimana setiap kata dianalisis:"
                },
                {
                  "type": "case_study",
                  "title": "Bedah Pertanyaan Investigasi Kasus Murid Tidur",
                  "points": [
                    {
                      "label": "1. Siapa yang tidur? ('Who was sleeping?')",
                      "desc": "Jawabannya: 'Student' (Murid). Karena menjawab pertanyaan pelaku perbuatan tidur, maka 'Student' berstatus MARFU' (Rafa')."
                    },
                    {
                      "label": "2. Bagaimana ia tidur? ('How was he sleeping?')",
                      "desc": "Jawabannya: 'Soundly' (Pulas/Nyenyak). Karena menjawab pertanyaan rincian cara tidur, maka 'Soundly' berstatus MANSUB (Nasb)."
                    },
                    {
                      "label": "3. Murid siapa itu? ('Whose student was it?')",
                      "desc": "Jawabannya: 'His' (Milreading: *Student of his*). Perhatikan bahwa pertanyaan ini TIDAK memuat kata kerja 'tidur', melainkan mencari identitas kepemilikan. Oleh karena itu, 'His' berstatus MAJROOR (Jar)!"
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Kaidah Efek Sambungan Harf Jar ('Athaf)",
                  "text": "Jika seseorang berkata: 'Saya datang **DENGAN** sebuah pena, buku catatan, dan makanan ringan' (جِئْتُ بِقَلَمٍ وَدَفْتَرٍ وَطَعَامٍ), maka pengaruh Harf Jar 'Bi' terus menjalar melalui kata sambung 'Wa' (dan), membuat SEMUA kata setelahnya berstatus MAJROOR beruntun!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d1_whose_case",
                  "question": "Mengapa kata ganti 'his' pada frasa 'a student of his' berstatus Jar (Majroor) dan bukan Nasb?",
                  "options": [
                    {
                      "text": "Karena berada setelah kata 'of' (kepemilikan identitas) dan bukan rincian dari perbuatan kata kerja",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena bertindak sebagai pelaku perbuatan",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena 'his' adalah kata keterangan tempat",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata kepemilikan ('of' / Idhafah) menjelaskan relasi antarbenda/orang (identitas), bukan rincian atas perbuatan kata kerja, sehingga statusnya selalu Jar (Majroor)."
                }
              ]
            },
            {
              "id": "i2-d1-tiga-kelompok-kombinasi-dan-mabni",
              "number": "05",
              "title": "3 Kelompok Kombinasi Utama & Rahasia Ism Mabni (`ذَلِكَ`)",
              "icon": "fa-layer-group",
              "readTime": "15 menit",
              "summary": "Memantapkan protokol 3 kelompok kombinasi (Pair, Plural, Feminine Plural) dan mengenali kata non-fleksibel (Mabni).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk menentukan status kata secara cepat dan tanpa ragu, ikuti **Protokol 2 Langkah**: Pertama, cari Akhiran Kombinasi! Jika tidak ada kombinasi, barulah lihat Akhiran Bunyi."
                },
                {
                  "type": "comparison_table",
                  "title": "Bagan 3 Kelompok Kombinasi Akhiran",
                  "headers": [
                    "Kelompok Kombinasi",
                    "Bentuk Rafa' (Marfu')",
                    "Bentuk Nasb & Jar (Mansub / Majroor)",
                    "Contoh Kata"
                  ],
                  "rows": [
                    [
                      "1. Pair Group (Dual / 2)",
                      "ـَانِ (-Aani)",
                      "ـَيْنِ (-Ayni)",
                      "مُسْلِمَانِ ➔ مُسْلِمَيْنِ, البَحْرَيْنِ"
                    ],
                    [
                      "2. Plural Group (Jamak 3+ Pria)",
                      "ـُونَ (-Oona)",
                      "ـِينَ (-Eena)",
                      "مُسْلِمُونَ ➔ مُسْلِمِينَ, الْمُؤْمِنِينَ"
                    ],
                    [
                      "3. Feminine Plural (Jamak 3+ Wanita)",
                      "ـَاتٌ (-Aatun)",
                      "ـَاتٍ (-Aatin)",
                      "مُسْلِمَاتٌ ➔ مُسْلِمَاتٍ, آيَاتٍ, بَيِّنَاتٍ"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Peringatan Emas Ta Marbuthah (`ـَة`)!",
                  "text": "Ta Marbuthah (`ـَة / ـَةً / ـَةٍ`) SELALU berstatus AKHIRAN BUNYI (Tunggal 1F), TIDAK PERNAH menjadi kombinasi! Kombinasi jamak feminin HANYA menggunakan Ta terbuka panjang (`ـَات`)."
                },
                {
                  "type": "deep_dive",
                  "title": "Tantangan Kata Tunjuk Non-Fleksibel (Mabni): 'ذَلِكَ'",
                  "items": [
                    {
                      "type": "Pertanyaan Jebakan: Apa status 'ذَلِكَ' (Dzaalika)?",
                      "examples": "Kata 'ذَلِكَ' adalah kata tunjuk yang bersifat NON-FLEKSIBEL (Mabni). Bentuk Rafa', Nasb, maupun Jar-nya sama persis berbunyi 'ذَلِكَ'. Jadi statusnya bisa Rafa', Nasb, ATAU Jar tergantung perannya di dalam ayat!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d1_dzaalika",
                  "question": "Apakah status gramatikal dari kata tunjuk 'ذَلِكَ' (Dzaalika)?",
                  "options": [
                    {
                      "text": "Bisa berstatus Rafa', Nasb, atau Jar (Non-fleksibel / Mabni)",
                      "isCorrect": true
                    },
                    {
                      "text": "Pasti Nasb karena berakhiran fathah",
                      "isCorrect": false
                    },
                    {
                      "text": "Pasti Rafa' tunggal",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata tunjuk 'Dzaalika' adalah Ism Mabni (tidak fleksibel), sehingga harakat fathah di akhirnya bukan penentu status; statusnya ditentukan oleh posisinya dalam struktur kalimat."
                }
              ]
            },
            {
              "id": "i2-d1-masterclass-protein-bar-kombinasi-ringan",
              "number": "06",
              "title": "Masterclass Protein Bar: Mengapa 'Rasoolaa' & 'Aynaa' adalah 2 Rafa' Ringan",
              "icon": "fa-trophy",
              "readTime": "15 menit",
              "summary": "Membedah misteri kata-kata ringan tingkat tinggi: membedakan Nasb tunggal dengan Dual Rafa' ringan (Rasoolaa, Aynaa, Mu'allimay, Kalimaati).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di bagian penutup Day 1, Ustaz Nouman memberikan teka-teki berhadiah *Protein Bar* yang menguji ketajaman analisa mata kita terhadap bentuk kata **BERAT VS RINGAN**."
                },
                {
                  "type": "formula_box",
                  "title": "Mengapa 'Al-' Tidak Membuat Kata Menjadi Ringan?",
                  "formula": "Bagan Normal: مُسْلِمُونَ (Berat) ➔ مُسْلِمُو (Ringan)\nBagan dengan Al-: الْمُسْلِمُونَ (Tetap Berat karena huruf Nun TIDAK dibuang!)",
                  "note": "Al- hanya tidak menyukai Tanwin pada akhiran bunyi, tetapi sama sekali tidak membuang huruf Nun pada akhiran kombinasi!"
                },
                {
                  "type": "case_study",
                  "title": "Bedah 4 Kasus Protein Bar",
                  "points": [
                    {
                      "label": "1. Kata 'رَسُولَا' (Rasoolaa - dengan Alif tapi tanpa Tanwin):",
                      "desc": "Bila ini adalah Nasb tunggal ringan, maka ia ditulis 'رَسُولَ' (tanpa alif). Karena ada Alif tambahan di belakangnya, kata ini adalah bentuk RINGAN dari 'رَسُولَانِ' (Dua Utusan) ➔ Status: DUAL (2) RAFA' RINGAN!"
                    },
                    {
                      "label": "2. Kata 'عَيْنَا' (Aynaa):",
                      "desc": "Berasal dari 'عَيْنَانِ' yang dibuang huruf Nun-nya karena bertindak sebagai Mudhaf (Dua Mata Air) ➔ Status: DUAL (2) RAFA' RINGAN!"
                    },
                    {
                      "label": "3. Kata 'مُعَلِّمَيْ' (Mu'allimay):",
                      "desc": "Berasal dari 'مُعَلِّمَيْنِ' yang dibuang huruf Nun-nya ➔ Status: DUAL (2) NASB/JAR RINGAN!"
                    },
                    {
                      "label": "4. Kata 'كَلِمَاتِ' (Kalimaati - satu kasrah tanpa tanwin):",
                      "desc": "Berasal dari 'كَلِمَاتٍ' (Jamak Feminin) yang diringankan menjadi satu kasrah ➔ Status: PLURAL FEMININE NASB/JAR RINGAN!"
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Spektakuler Intensive 2 Day 1! 🌟",
                  "points": [
                    "Memperbaharui tekad menjawab tantangan kemudahan Al-Qur'an (QS. Al-Qamar: 17).",
                    "Memahami 3 ragam bahasa Arab: Street Arabic, Fusha, dan Classical Arabic.",
                    "Teknik eliminasi kata (Ism, Fi'il, Harf) dan jebakan kata serapan Inggris (-ing & -s).",
                    "Penyebutan ilmiah 3 status: Marfu' (Rafa'), Mansub (Nasb), dan Majroor (Jar).",
                    "Kaidah investigasi fi'il: pertanyaan pelaku (Rafa') vs rincian (Nasb) vs kepemilikan (Jar).",
                    "Protokol 3 kelompok kombinasi: Pair (ـَانِ / ـَيْنِ), Plural (ـُونَ / ـِينَ), Fem Plural (ـَاتٌ / ـَاتٍ).",
                    "Master analisis kata kombinasi ringan: Membedakan Nasb tunggal dengan Dual Rafa' (رَسُولَا & عَيْنَا)."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/WPjsDVS_trI?si=GIcpmBccWmmFMJ9J",
          "pdfUrl": "https://drive.google.com/open?id=16ITRyE6r5jl7nh21LxeHsOw90dQddg2Y&usp=drive_copy"
        },
        {
          "day": 2,
          "title": "Hari 2: Fleksibilitas Tingkat Lanjut, Palindrom Qur'an & Kaidah Jamak Taksir (1F vs 3M/3F)",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 2 Day 2",
              "url": "https://www.youtube.com/live/UjKnWbx8uyg?si=37TidN7Chevita7Q"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 2 Day 2",
              "url": "https://drive.google.com/open?id=18jrecbcqCfWThQ2QI125XLq8Fj3yulYd&usp=drive_copy"
            }
          ],
          "summary": "Memperdalam 4 alasan Ism Ringan, analogi imigrasi fleksibilitas kata (Munsharif, Mamnu' min ash-Sharf, Mabni), keajaiban palindrom Surah Al-Muddatstsir, dan kaidah emas penanganan Jamak Taksir Berakal vs Tidak Berakal (1F vs 3M/3F).",
          "lessons": [
            {
              "id": "i2-d2-tanya-jawab-ejaan-dan-lam-penekanan",
              "number": "01",
              "title": "Klinik Q&A Ejaan Alif, Dagger Alif, dan Lam Penekanan (Lam at-Tawkid)",
              "icon": "fa-circle-question",
              "readTime": "15 menit",
              "summary": "Membedah tuntas penulisan Alif tanwin, Dagger Alif pada jamak feminin, dan perbedaan Lam Harf Jar vs Lam Penekanan (Lam at-Tawkid/Qasam).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mengawali Day 2, kita menuntaskan beberapa pertanyaan krusial seputar ortografi (penulisan) dan partikel bahasa Arab yang sering membingungkan penuntut ilmu pemula:"
                },
                {
                  "type": "comparison_table",
                  "title": "Perbedaan Lam Harf Jar (لِـ / لَـ) vs Lam Penekanan (لَـ)",
                  "headers": [
                    "Karakteristik",
                    "Lam Harf Jar (حَرْفُ جَرٍّ)",
                    "Lam Penekanan / Tawkid (لَامُ التَّوْكِيدِ)"
                  ],
                  "rows": [
                    [
                      "Vokalisasi Dasar",
                      "Berharakat kasrah `لِـ` pada Ism lahir (`لِلَّهِ`, `لِلْمُتَّقِينَ`), dan `لَـ` pada dhomir (`لَكُمْ`, `لَهُ`).",
                      "Selalu berharakat fathah `لَـ` di mana pun ia berada (`لَعِبْرَةً`, `لَفِي خُسْرٍ`)."
                    ],
                    [
                      "Efek terhadap Status",
                      "MEMBUAT kata setelahnya menjadi MAJROOR (Jar)!",
                      "TIDAK MERUBAH status kata sama sekali (Status tetap Rafa'/Nasb/Jar sesuai asalnya)."
                    ],
                    [
                      "Fungsi Makna",
                      "Menyatakan kepemilikan atau peruntukan ('Milik/Bagi/Untuk').",
                      "Menyuntikkan energi penekanan dahsyat / sumpah ('Sungguh benar-benar / Pasti')."
                    ],
                    [
                      "Contoh Al-Qur'an",
                      "`لِلَّهِ مَا فِي السَّمَاوَاتِ` (Milik Allah apa yang ada di langit).",
                      "`إِنَّ فِي ذَٰلِكَ لَعِبْرَةً` (Sungguh pada yang demikian itu BENAR-BENAR terdapat pelajaran - QS. An-Nazi'at: 26)."
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Rahasia Dagger Alif (Alif Khinjiriyah) pada Jamak Feminin",
                  "text": "Pada mushaf Al-Qur'an, kata seperti `آيَاتٌ` atau `بَيِّنَاتٌ` sering ditulis dengan Dagger Alif tegak kecil di atas huruf. Apakah ini tetap kombinasi jamak feminin? **YA, 100%!** Bahasa Arab ditransmisikan secara auditorial (pendengaran) sebelum penulisan dibakukan, sehingga bunyi panjang `ـَات` adalah penentu mutlak kombinasi jamak feminin."
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d2_lam_tawkid",
                  "question": "Pada kalimat `إِنَّ الْإِنسَانَ لَفِي خُسْرٍ`, mengapa huruf Lam pada `لَفِي` tidak membuat `فِي` menjadi majroor?",
                  "options": [
                    {
                      "text": "Karena Lam tersebut adalah Lam at-Tawkid (penekanan) yang bisa masuk ke kata apa saja tanpa merubah status kata",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena 'Fi' adalah kata benda",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena Harf Jar tidak boleh bertemu dengan kata lain",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Lam at-Tawkid (Lam penekanan) tidak memiliki kekuatan 'I'rab (tidak merubah harakat), ia hanya berfungsi memberikan penguatan makna yang sangat mendalam."
                }
              ]
            },
            {
              "id": "i2-d2-analogi-imigrasi-3-kategori-fleksibilitas",
              "number": "02",
              "title": "Analogi Kewarganegaraan: 3 Kategori Fleksibilitas Ism",
              "icon": "fa-passport",
              "readTime": "15 menit",
              "summary": "Memahami Fully Flexible (Munsharif), Partly Flexible (Mamnu' min ash-Sharf), dan Non-Flexible (Mabni) lewat analogi hak imigrasi.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk memahami konsep fleksibilitas kata (*I'rab & Bina'*), Ustaz Nouman memberikan analogi brilian tentang 3 status kependudukan dalam suatu negara:"
                },
                {
                  "type": "card_grid",
                  "title": "3 Golongan Fleksibilitas Kata dalam Bahasa Arab",
                  "items": [
                    {
                      "icon": "fa-id-card",
                      "title": "1. Warga Negara Penuh (Fully Flexible / مُنْصَرِف)",
                      "desc": "Mencakup 99% kata Arab (`مُسْلِمٌ`, `كِتَابٌ`, `سَفِينَةٌ`, `مَسْجِدٌ`). Memiliki hak penuh: bisa berat dengan tanwin (`ـٌ ـً ـٍ`) dan bisa diet/ringan (`ـُ ـَ ـِ`) saat dibutuhkan."
                    },
                    {
                      "icon": "fa-person-circle-exclamation",
                      "title": "2. Tanpa Hak Ubah Bunyi (Non-Flexible / مَبْنِي)",
                      "desc": "Kata yang terkunci bentuk lahiriahnya (`مُوسَى`, `عِيسَى`, `دُنْيَا`, `ذَلِكَ`, `هَذَا`, `الَّذِي`). Bentuk Rafa', Nasb, maupun Jar-nya sama persis berbunyi sama."
                    },
                    {
                      "icon": "fa-passport",
                      "title": "3. Pemegang Visa / Izin Khusus (Partly Flexible / مَمْنُوع مِنَ الصَّرْف)",
                      "desc": "Nama non-Arab 4+ huruf (`يُوسُفُ`, `إِبْرَاهِيمُ`, `فِرْعَوْنُ`) dan nama tempat (`مَكَّةُ`, `بَاكِسْتَانُ`). Aturannya: Rafa' = `-u`, Nasb & Jar = `-a`. Tidak boleh bertanwin dan tidak boleh kasrah!"
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Aturan Naturalisasi 3 Huruf & 4 Nabi Bangsa Arab",
                  "formula": "Nama Non-Arab / Tempat 3 Huruf ➔ FULLY FLEXIBLE! (Contoh: نُوحٌ, لُوطٌ, هُودٌ, عَدْنٌ)\n4 Nabi Bangsa Arab Asli ➔ FULLY FLEXIBLE! (مُحَمَّدٌ, صَالِحٌ, هُودٌ, شُعَيْبٌ)",
                  "note": "Nama malaikat dan nabi lainnya (Jibril, Mikail, Yusuf, Ibrahim, Ismail, Ishaq, Ya'qub) berstatus Partly Flexible."
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d2_flexibility_citizens",
                  "question": "Mengapa nama Nabi Luth (`لُوطٌ`) dan Nabi Nuh (`نُوحٌ`) berstatus Fully Flexible (bertanwin) padahal keduanya bukan berasal dari etnis Arab?",
                  "options": [
                    {
                      "text": "Karena dieja hanya dengan 3 huruf (aturan naturalisasi 3 huruf)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena mereka adalah nabi bangsa Arab",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena nama nabi selalu Fully Flexible",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Setiap nama non-Arab atau nama tempat yang hanya terdiri dari 3 huruf mendapatkan status Fully Flexible (Munsharif) dan menerima tanwin."
                }
              ]
            },
            {
              "id": "i2-d2-keajaiban-palindrom-dan-tazkiyah",
              "number": "03",
              "title": "Keajaiban Balaghah Palindrom Qur'an & Tazkiyah Surah 'Abasa",
              "icon": "fa-gem",
              "readTime": "15 menit",
              "summary": "Menelaah keindahan simetri huruf Al-Qur'an pada QS. Al-Muddatstsir: 3 dan hikmah ketulusan menuntut ilmu dari Surah 'Abasa.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di tengah pembahasan fleksibilitas kata, Ustaz Nouman membagikan dua mutiara tadabbur yang menggugah jiwa dan memperkuat kecintaan kita pada Al-Qur'an:"
                },
                {
                  "type": "deep_dive",
                  "title": "1. Keajaiban Palindrom Sempurna: QS. Al-Muddatstsir [74]: 3",
                  "items": [
                    {
                      "type": "Ayat Spektakuler: وَرَبَّكَ فَكَبِّرْ (Wa Rabba-ka Fa-Kabbir)",
                      "examples": "Arti: 'Dan Tuhanmulah, agungkanlah!'. Perhatikan susunan hurufnya:\n• Dibaca Maju: [و] [ر] [ب] [ك] [ف] [ك] [ب] [ر] [و]\n• Dibaca Mundur: [و] [ر] [ب] [ك] [ف] [ك] [ب] [ر] [و]\nSusunan hurufnya simetris sempurna dari depan maupun belakang, diwahyukan kepada Nabi ﷺ yang ummi (tidak membaca/menulis huruf), sambil tetap membawa pesan tauhid yang paling mendasar dan sempurna!"
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "2. Pelajaran Keikhlasan dari Surah 'Abasa",
                  "text": "Allah menegur Nabi ﷺ saat beliau mengalihkan perhatian dari sahabat buta yang tulus, Abdullah bin Ummi Maktum, demi mendakwahi tokoh elit Quraisy. Nilai seorang penuntut ilmu di hadapan Allah tidak diukur dari jabatan atau popularitas dunia, melainkan dari **ketulusan hati dan kesungguhan mempelajari firman-Nya**!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d2_palindrome",
                  "question": "Apakah yang istimewa dari susunan huruf pada firman Allah `وَرَبَّكَ فَكَبِّرْ` (QS. Al-Muddatstsir: 3)?",
                  "options": [
                    {
                      "text": "Merupakan palindrom sempurna: susunan hurufnya sama persis saat dibaca maju maupun mundur",
                      "isCorrect": true
                    },
                    {
                      "text": "Terdiri dari seluruh huruf hijaiyah tanpa kecuali",
                      "isCorrect": false
                    },
                    {
                      "text": "Merupakan kalimat yang tidak memiliki kata kerja",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Ayat `وَرَبَّكَ فَكَبِّرْ` adalah salah satu mukjizat sastra Al-Qur'an berupa palindrom simetris sempurna huruf per huruf."
                }
              ]
            },
            {
              "id": "i2-d2-klinik-bilangan-dan-protokol-jamak-taksir",
              "number": "04",
              "title": "4 Macam Jamak & Protokol Deteksi Jamak Taksir (Broken Plural)",
              "icon": "fa-layer-group",
              "readTime": "15 menit",
              "summary": "Mengenali 4 ragam jamak dalam bahasa Arab dan menerapkan 3 langkah protokol identifikasi Jamak Taksir.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam pembahasan **Number (Bilangan)**, bentuk tunggal (1) dan dual (2) bersifat statis dan mudah diprediksi. Seluruh kompleksitas dan keindahan bahasa Arab berpusat pada **Kategori Jamak (Plural)**:"
                },
                {
                  "type": "card_grid",
                  "title": "4 Macam Jamak dalam Bahasa Arab",
                  "items": [
                    {
                      "icon": "fa-users",
                      "title": "1. Jamak Salim Maskulin (Sound Plural)",
                      "desc": "Berakhiran `ـُونَ / ـِينَ`. KHUSUS makhluk berakal (manusia, malaikat, jin). Contoh: `مُسْلِمُونَ`, `مُكَذِّبِينَ`."
                    },
                    {
                      "icon": "fa-person-dress",
                      "title": "2. Jamak Salim Feminin (Sound Plural)",
                      "desc": "Berakhiran `ـَاتٌ / ـَاتٍ`. Bisa untuk wanita (`مُسْلِمَاتٌ`) maupun benda apa saja (`آيَاتٌ`, `سَمَاوَاتٌ`)."
                    },
                    {
                      "icon": "fa-people-group",
                      "title": "3. Ism Jamak (Orang Arab Bilang Begitu)",
                      "desc": "3 kata kolektif mutlak: `النَّاسُ` (Manusia), `قَوْمٌ` (Kaum), `قَرْنٌ` (Generasi)."
                    },
                    {
                      "icon": "fa-puzzle-piece",
                      "title": "4. Jamak Taksir (Broken Plural)",
                      "desc": "Kata yang bentuk tunggalnya 'dipecah' dan tidak menggunakan kombinasi `ـُونَ` atau `ـَاتٌ`. Contoh: `كُتُبٌ`, `جِبَالٌ`, `رُسُلٌ`."
                    }
                  ]
                },
                {
                  "type": "formula_box",
                  "title": "Protokol 3 Langkah Deteksi Jamak Taksir",
                  "formula": "Langkah 1: Cek Makna ➔ Apakah bermakna jamak? (Contoh: 'Jibaal' = Gunung-gunung ➔ YA!)\nLangkah 2: Cek Akhiran ➔ Apakah ada kombinasi Una/Ina/Aatun? (TIDAK ADA!)\nLangkah 3: Cek Vokal ➔ Berakhiran bunyi harakat tunggal? (YA!)\n➔ KESIMPULAN: PASTI JAMAK TAKSIR (BROKEN PLURAL)!",
                  "note": "Jika kata tersebut berakhiran kombinasi jamak salim (seperti `مُسْلِمُونَ`), maka ia adalah Jamak Salim, BUKAN Jamak Taksir."
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d2_broken_protocol",
                  "question": "Mengapa kata `كُتُبٌ` (Kutubun = Buku-buku) diklasifikasikan sebagai Jamak Taksir?",
                  "options": [
                    {
                      "text": "Karena bermakna jamak dari segi artinya, tetapi menggunakan akhiran bunyi tunggal (tanpa kombinasi Una/Aatun)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena merupakan kata pinjaman dari bahasa asing",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena berakhiran tanwin dhommah",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata 'Kutubun' bermakna jamak (buku-buku) namun strukturnya pecah dari bentuk tunggal 'Kitab' dan tidak memiliki akhiran kombinasi jamak salim, sehingga menjadi Jamak Taksir."
                }
              ]
            },
            {
              "id": "i2-d2-kaidah-emas-penanganan-jamak-taksir",
              "number": "05",
              "title": "Kaidah Emas Penanganan Jamak Taksir: 1F vs (1F atau 3M/3F)",
              "icon": "fa-scale-balanced",
              "readTime": "15 menit",
              "summary": "Menguasai kaidah penanganan Jamak Taksir Tidak Berakal (selalu 1F) dan Jamak Taksir Berakal (2 opsi: 1F atau 3M/3F).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Inilah inti paling mendalam dari Day 2: **Bagaimana memperlakukan Jamak Taksir dalam struktur kalimat Al-Qur'an?**"
                },
                {
                  "type": "comparison_table",
                  "title": "Kaidah Penanganan Jamak Taksir Berakal vs Tidak Berakal",
                  "headers": [
                    "Kategori",
                    "Definisi & Cakupan",
                    "Kaidah Penanganan Gramatikal",
                    "Contoh Analisis"
                  ],
                  "rows": [
                    [
                      "Jamak Taksir Tidak Berakal (Non-Human)",
                      "Benda mati, hewan, tempat, konsep, bagian tubuh (`جِبَالٌ`, `بِحَارٌ`, `وُجُوهٌ`, `كُتُبٌ`).",
                      "SELALU DIPERLAKUKAN SEBAGAI TUNGGAL FEMININ (1F)!",
                      "`الْجِبَالَ` ➔ Status: Nasb, Sifat: 1F (Tunggal Feminin)\n`وُجُوهٌ` ➔ Status: Rafa', Sifat: 1F (Tunggal Feminin)"
                    ],
                    [
                      "Jamak Taksir Berakal (Human Plural)",
                      "Manusia, Malaikat, Jin (`نِسَاءٌ`, `عُلَمَاءُ`, `رُسُلٌ`, `مَلَائِكَةٌ`, `كَفَرَةٌ`).",
                      "MEMILIKI 2 OPSI JAWABAN:\n• Opsi 1 (Gramatika): 1F (Tunggal Feminin)\n• Opsi 2 (Hakiki/Logika): 3M atau 3F sesuai jenis aslinya!",
                      "`نِسَاءً` ➔ Nasb 1F (Gramatika) ATAU Nasb 3F (Hakiki)\n`الْمَلَائِكَةُ` ➔ Rafa' 1F (Gramatika) ATAU Rafa' 3M (Hakiki)"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "gold",
                  "title": "Peringatan Mengapa Wajah (Wujooh) Termasuk Non-Berakal!",
                  "text": "Meskipun wajah adalah bagian tubuh manusia, anggota badan dianggap sebagai benda (*it / non-human*), sehingga `وُجُوهٌ` (Wajah-wajah) diperlakukan sebagai **Tunggal Feminin (1F)** saja, tidak memiliki opsi kedua."
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d2_human_treatment",
                  "question": "Apakah dua perlakuan gramatikal yang sah untuk kata `عُلَمَاءُ` (Ulama / Orang-orang berilmu)?",
                  "options": [
                    {
                      "text": "Rafa' 1F (Tunggal Feminin secara gramatika) ATAU Rafa' 3M (Jamak Maskulin secara hakiki)",
                      "isCorrect": true
                    },
                    {
                      "text": "Hanya Rafa' 3M saja",
                      "isCorrect": false
                    },
                    {
                      "text": "Hanya Rafa' 1F saja",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Sebagai Jamak Taksir Berakal (Human Broken Plural), kata 'Ulama' dapat diperlakukan sebagai 1F menurut kaidah gramatika Arab, atau 3M menurut hakikat maknanya."
                }
              ]
            },
            {
              "id": "i2-d2-bedah-kasus-malaikah-dan-kafarah",
              "number": "06",
              "title": "Bedah Kasus Spesial: Mengapa Ta Marbuthah pada `الْمَلَائِكَةُ` Bukan Feminin",
              "icon": "fa-certificate",
              "readTime": "15 menit",
              "summary": "Mematahkan mitos Ta Marbuthah selalu wanita lewat kasus Al-Mala'ikah & Kafarah, serta rangkuman spektakuler Day 2.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Banyak pemula mengira bahwa setiap kata berakhiran Ta Marbuthah (`ـَة`) pasti berjenis kelamin perempuan. Kasus `الْمَلَائِكَةُ` dan `كَفَرَةٌ` membuktikan bahwa pemikiran tersebut keliru:"
                },
                {
                  "type": "case_study",
                  "title": "Bedah 2 Kasus Spesial Jamak Taksir Ber-Ta Marbuthah",
                  "points": [
                    {
                      "label": "1. Kata 'الْمَلَائِكَةُ' (Para Malaikat):",
                      "desc": "Ta Marbuthah pada kata ini adalah penanda pembentukan Jamak Taksir, BUKAN penanda feminin (Malaikat bukan wanita!). Perlakuan: **Rafa' 1F** (karena kaidah broken plural) ATAU **Rafa' 3M** (karena hakikat makhluk berakal non-wanita)."
                    },
                    {
                      "label": "2. Kata 'كَفَرَةٌ' (Orang-orang Kafir):",
                      "desc": "Bentuk jamak dari 'Kafir'. Ta Marbuthah di sini adalah pola jamak taksir (wazan fa'alah). Perlakuan: **Rafa' 1F** (Gramatika) ATAU **Rafa' 3M** (Hakiki para pendosa)."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Spektakuler Intensive 2 Day 2! 🌟",
                  "points": [
                    "Membedakan Lam Harf Jar (membuat Majroor) vs Lam at-Tawkid (penekanan tanpa merubah harakat).",
                    "Analogi imigrasi 3 fleksibilitas: Fully Flexible (Munsharif), Non-Flexible (Mabni), Partly Flexible (Mamnu' min ash-Sharf).",
                    "Aturan naturalisasi nama non-Arab 3 huruf (Nuh, Luth, Hud, 'Adn) menjadi Fully Flexible.",
                    "Keajaiban sastra Al-Qur'an pada palindrom QS. Al-Muddatstsir: 3 (وَرَبَّكَ فَكَبِّرْ).",
                    "Protokol Jamak Taksir: Jamak dari segi arti + tanpa kombinasi Una/Aatun + akhiran bunyi.",
                    "Kaidah Emas Penanganan: Non-Human Broken Plural = 1F; Human Broken Plural = 1F ATAU 3M/3F.",
                    "Ta Marbuthah pada pola jamak (Mala'ikah, Kafarah) adalah penanda struktur jamak, bukan jenis kelamin wanita."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/UjKnWbx8uyg?si=37TidN7Chevita7Q",
          "pdfUrl": "https://drive.google.com/open?id=18jrecbcqCfWThQ2QI125XLq8Fj3yulYd&usp=drive_copy"
        },
        {
          "day": 3,
          "title": "Hari 3: 7 Kategori Ma'rifah, Adab Panggilan Nabi ﷺ & Misteri Balaghah Misr",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 2 Day 3",
              "url": "https://www.youtube.com/live/SBoEuBZLw5k?si=OlQu0doFvgZ2S2H1"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 2 Day 3",
              "url": "https://drive.google.com/open?id=1XefTWpq9tA1ds9DhlwSoP-Uv_aTIYmNh&usp=drive_copy"
            }
          ],
          "summary": "Menguasai 7 kategori Ism Ma'rifah (Proper), rahasia adab panggilan Al-Qur'an (Ya Rasulallah vs Ya Ayyuhan-Nabi), kisah prajurit medan perang 15 kata feminin, dan studi kasus balaghah kata Misr (Mesir vs Pedesaan).",
          "lessons": [
            {
              "id": "i2-d3-hakikat-ayat-dan-balaghah-jamak-sedikit-banyak",
              "number": "01",
              "title": "Hakikat Kata Ayah & Balaghah Jamak Sedikit vs Jamak Banyak (Sunbulat vs Sanabil)",
              "icon": "fa-book-open-reader",
              "readTime": "15 menit",
              "summary": "Memahami mengapa kata Ayah adalah 'Miraculous Signs' serta menyingkap presisi kata gandum Sunbulat (sedikit) vs Sanabil (banyak).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Kita mengawali Day 3 dengan meluruskan istilah terjemahan: kata **آيَة** (Ayah) tidak tepat jika sekadar diterjemahkan sebagai 'ayat/verse' atau 'kalimat'. Dalam Al-Qur'an, Ayah adalah **Tanda Keajaiban Kekuasaan Allah (Miraculous Sign)** yang memiliki format unik: bisa berupa satu huruf muqatta'ah (`الم`), satu nama agung (`الرَّحْمَٰنُ`), potongan frasa, satu kalimat, hingga satu halaman utuh (ayat hutang)."
                },
                {
                  "type": "deep_dive",
                  "title": "Studi Kasus Presisi Balaghah: 7 Tangkai Gandum dalam Al-Qur'an",
                  "items": [
                    {
                      "type": "1. Mimpi Raja pada Surah Yusuf: سُنْبُلَاتٍ (Sunbulaat - Jamak Salim Feminin)",
                      "examples": "Dalam mimpi raja tentang 7 tangkai gandum di masa paceklik yang mengharuskan berhemat, Allah menggunakan wazan jamak salim feminin (Jam'u Qillah / Jamak Sedikit: < 10) karena konteksnya adalah **kelangkaan dan keterbatasan makanan**."
                    },
                    {
                      "type": "2. Perumpamaan Sedekah pada Surah Al-Baqarah [2]: 261: سَنَابِلَ (Sanaabil - Jamak Taksir)",
                      "examples": "Dalam balasan orang yang berinfak di jalan Allah yang melipatgandakan 1 butir menjadi 7 tangkai dan 700 butir, Allah menggunakan wazan jamak taksir (Jam'u Katsrah / Super Plural) karena konteksnya adalah **kelimpahan pahala berlipat ganda tanpa batas**!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d3_sunbulat_sanabil",
                  "question": "Mengapa Allah menggunakan kata 'سَنَابِلَ' (Sanaabil) pada ayat sedekah (QS. Al-Baqarah: 261) dan bukan 'سُنْبُلَاتٍ'?",
                  "options": [
                    {
                      "text": "Karena 'Sanaabil' adalah pola jamak taksir yang mengindikasikan kelimpahan berlipat ganda (Jam'u Katsrah)",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena 'Sanaabil' bermakna tunggal",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena 'Sunbulaat' hanya digunakan untuk makanan hewani",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Bahasa Arab klasik membedakan Jam'u Qillah (jumlah sedikit: Sunbulaat) dan Jam'u Katsrah (jumlah berlimpah ruah: Sanaabil), menunjukkan keajaiban diksi Al-Qur'an yang sangat presisi."
                }
              ]
            },
            {
              "id": "i2-d3-kisah-lengkap-prajurit-medan-perang",
              "number": "02",
              "title": "Kisah Lengkap Prajurit di Medan Perang (15 Kata Feminin Sima'i)",
              "icon": "fa-shield-halved",
              "readTime": "15 menit",
              "summary": "Menghafal dan menguasai seluruh kosakata yang dianggap feminin karena tradisi lisan bangsa Arab (Feminine because Arabs said so).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Untuk mengingat seluruh kata benda yang dianggap feminin oleh bangsa Arab tanpa tanda lahiriah (*Mu'annats Sima'i*), kita menghafalnya melalui sebuah narasi prajurit di medan perang:"
                },
                {
                  "type": "story_box",
                  "title": "Kisah Prajurit di Medan Perang (حِكَايَةُ الجُنْدِيّ فِي الحَرْب)",
                  "story": "Saat berkecamuk perang (`حَرْب`), seorang prajurit melamun menatap langit (`سَمَاء`) hingga matahari (`شَمْس`) terbit. Ketika tersadar, ia mendapati hanya dirinya (`نَفْس`) yang tersisa di medan laga, terkepung kobaran api (`نَار`). Maka ia mengambil ember (`دَلْو`) berisi air untuk membuka jalan (`سَبِيل` / `طَرِيق`) menuju tanah (`أَرْض`) yang aman. Di tengah tiupan angin (`رِيح`) gurun yang membakar, ia mencari sumur (`بِئْر`). Lalu ia menemukan rumah (`دَار`) kosong berisi cangkir (`كَأْس`) penuh khamr (`خَمْر`). Namun karena takut akan neraka (`جَهَنَّم`), ia mengambil tongkatnya (`عَصَا`) lalu menghancurkan minuman itu."
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Status Seluruh Kata dalam Kisah Ini",
                  "text": "Semua kata di dalam kisah di atas (`حَرْب, سَمَاء, شَمْس, نَفْس, نَار, دَلْو, سَبِيل, طَرِيق, أَرْض, رِيح, بِئْر, دَار, كَأْس, خَمْر, جَهَنَّم, عَصَا`) berjenis kelamin **FEMININ (Mu'annats)** secara default!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d3_war_story_gender",
                  "question": "Apakah gender dari kata 'أَرْض' (Bumi/Tanah) dan 'نَفْس' (Jiwa/Diri) dalam gramatika Al-Qur'an?",
                  "options": [
                    {
                      "text": "Feminin (karena bangsa Arab menetapkannya demikian / Sima'i)",
                      "isCorrect": true
                    },
                    {
                      "text": "Maskulin secara default",
                      "isCorrect": false
                    },
                    {
                      "text": "Bisa maskulin bisa feminin secara bebas",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata-kata alam semesta dan benda dalam kisah prajurit (seperti Ardh, Nafs, Syams, Naar) diklasifikasikan sebagai Feminin Sima'i."
                }
              ]
            },
            {
              "id": "i2-d3-tujuh-kategori-ism-marifah",
              "number": "03",
              "title": "7 Kategori Ism Ma'rifah (Proper / Khusus)",
              "icon": "fa-list-check",
              "readTime": "15 menit",
              "summary": "Membedah 7 kategori mutlak Ism Ma'rifah: Alif Lam, Nama Khusus, Panggilan, Dhamir, Isyarah, Mawshul, dan Mudhaf kepada Ma'rifah.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam sifat ke-4 Ism (**Type / Jenis**), status asal (*default*) setiap kata adalah **Nakirah (Common / Umum)**. Sebuah kata hanya menjadi **Ma'rifah (Proper / Khusus)** jika memenuhi salah satu dari 7 Kategori Mutlak berikut:"
                },
                {
                  "type": "card_grid",
                  "title": "7 Kategori Ism Ma'rifah dalam Bahasa Arab",
                  "items": [
                    {
                      "icon": "fa-font",
                      "title": "1. Kata Berawalan Alif Lam (الـ)",
                      "desc": "Contoh: `الْكِتَابُ`, `الْمَسْجِدُ`, `الْبَلَدُ`. Keberadaan Alif Lam menggugurkan tanwin."
                    },
                    {
                      "icon": "fa-signature",
                      "title": "2. Nama Diri Khusus ('Alam)",
                      "desc": "Nama orang (`مُحَمَّدٌ`, `مَرْيَمُ`, `نُوحٌ`) atau nama tempat (`مَكَّةُ`, `تَكْسَاسُ`). Meskipun bertanwin, nama Arab tetap Ma'rifah!"
                    },
                    {
                      "icon": "fa-bullhorn",
                      "title": "3. Kata yang Dipanggil (Munada)",
                      "desc": "Kata yang diawali huruf panggilan `يَا` (seperti `يَا نُوحُ`, `يَا آدَمُ`, `يَا رَسُولَ اللَّهِ`)."
                    },
                    {
                      "icon": "fa-user-group",
                      "title": "4. Kata Ganti (Dhamir)",
                      "desc": "14 Dhamir Munfashil (`هُوَ, هُمَا, هُمْ...`) dan 14 Dhamir Muttashil (`ـهُ, ـهُمَا, ـهُمْ...`)."
                    },
                    {
                      "icon": "fa-hand-point-right",
                      "title": "5. Kata Tunjuk (Asma'ul Isyarah)",
                      "desc": "Kata tunjuk dekat (`هَذَا, هَذِهِ, هَؤُلَاءِ`) dan jauh (`ذَلِكَ, تِلْكَ, أُولَئِكَ`)."
                    },
                    {
                      "icon": "fa-link",
                      "title": "6. Kata Sambung (Ism Mawshul)",
                      "desc": "Kata penghubung yang berarti 'yang' (`الَّذِي, الَّتِي, الَّذِينَ`)."
                    },
                    {
                      "icon": "fa-sitemap",
                      "title": "7. Mudhaf kepada Ism Ma'rifah",
                      "desc": "Kata kepemilikan pertama yang bersandar pada kata Ma'rifah (`رَسُولُ اللَّهِ`, `كِتَابُ مُحَمَّدٍ`, `مَالُهُ`)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d3_marifah_seven",
                  "question": "Apakah status type (jenis) dari kata 'رَسُولُ' pada frasa 'رَسُولُ اللَّهِ'?",
                  "options": [
                    {
                      "text": "Ma'rifah (Proper), karena bersandar pada Mudhaf Ilayh yang Ma'rifah ('Lafadz Jalalah')",
                      "isCorrect": true
                    },
                    {
                      "text": "Nakirah (Common), karena tidak memiliki Alif Lam",
                      "isCorrect": false
                    },
                    {
                      "text": "Tidak dapat ditentukan",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Mudhaf mewarisi status Type (Ma'rifah/Nakirah) dari Mudhaf Ilayh-nya. Karena 'Allah' adalah Ma'rifah, maka 'Rasul' menjadi Ma'rifah."
                }
              ]
            },
            {
              "id": "i2-d3-adab-panggilan-munada-dan-kemuliaan-nabi",
              "number": "04",
              "title": "Hukum Munada (Panggilan) & Keagungan Adab Al-Qur'an terhadap Nabi ﷺ",
              "icon": "fa-heart",
              "readTime": "15 menit",
              "summary": "Memahami 'I'rab panggilan tunggal (Rafa' Ringan) vs panggilan Mudhaf (Nasb Ringan) dan penghormatan ilahi kepada Nabi Muhammad ﷺ.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ketika kita memanggil seseorang menggunakan partikel `يَا`, berlaku kaidah tata bahasa khusus yang sangat penting:"
                },
                {
                  "type": "comparison_table",
                  "title": "Kaidah 'I'rab Kata yang Dipanggil (Munada)",
                  "headers": [
                    "Bentuk Kata",
                    "Kaidah Status & Bentuk",
                    "Contoh Panggilan"
                  ],
                  "rows": [
                    [
                      "1. Kata Tunggal / Nama Lepas (Mufrad 'Alam)",
                      "Berstatus RAFA' dan WAJIB RINGAN (Tanpa Tanwin / Satu Dhommah)!",
                      "`يَا نُوحُ` (bukan Ya Nuhun)\n`يَا آدَمُ` (bukan Ya Adamu)\n`يَا إِبْرَاهِيمُ`"
                    ],
                    [
                      "2. Frasa Kepemilikan (Mudhaf)",
                      "Berstatus NASB dan WAJIB RINGAN (Satu Fathah)!",
                      "`يَا رَسُولَ اللَّهِ` (bukan Ya Rasulullah)\n`يَا عَبْدَ اللَّهِ` (bukan Ya Abdullah)\n`يَا أَبَا بَكْرٍ`"
                    ],
                    [
                      "3. Kata Benda Umum Ber-Al (Ma'rifah bil-Al)",
                      "WAJIB disisipkan 'Ayyuha' (`يَا أَيُّهَا`)!",
                      "`يَا أَيُّهَا النَّاسُ`\n`يَا أَيُّهَا الرَّسُولُ`\n`يَا أَيُّهَا الْمُزَّمِّلُ`"
                    ]
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Mutiara Adab Ilahi: Mengapa Tidak Ada 'Ya Muhammad' dalam Al-Qur'an?",
                  "items": [
                    {
                      "type": "Penghormatan Khusus bagi Rasulullah ﷺ",
                      "examples": "Allah memanggil nabi-nabi lain langsung dengan nama mereka: `يَا آدَمُ`, `يَا نُوحُ`, `يَا مُوسَى`, `يَا عِيسَى`. Namun kepada Nabi Muhammad ﷺ, Allah TIDAK PERNAH memanggil dengan 'Ya Muhammad'! Allah selalu menyapa dengan gelar kemuliaan: `يَا أَيُّهَا النَّبِيُّ`, `يَا أَيُّهَا الرَّسُولُ`, `يَا أَيُّهَا الْمُزَّمِّلُ`, `يَا أَيُّهَا الْمُدَّثِّرُ`. Bahkan ketika orang badui memanggil 'Ya Muhammad', Allah menurunkan teguran keras di Surah Al-Hujurat ayat 2-4!"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d3_munada_rules",
                  "question": "Bagaimanakah lafaz yang benar secara tata bahasa Arab ketika memanggil seseorang yang bernama 'Abdullah'?",
                  "options": [
                    {
                      "text": "يَا عَبْدَ اللَّهِ (Berstatus Nasb karena merupakan Mudhaf)",
                      "isCorrect": true
                    },
                    {
                      "text": "يَا عَبْدُ اللَّهِ (Berstatus Rafa')",
                      "isCorrect": false
                    },
                    {
                      "text": "يَا عَبْدِ اللَّهِ (Berstatus Jar)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Ketika kata yang dipanggil bertindak sebagai Mudhaf (seperti Abda-llahi, Rasula-llahi), maka statusnya wajib menjadi Nasb (fathah)."
                }
              ]
            },
            {
              "id": "i2-d3-studi-kasus-balaghah-misr",
              "number": "05",
              "title": "Misteri Balaghah Kata Misr: Mesir Kerajaan (Partly) vs Pedesaan (Fully)",
              "icon": "fa-pyramid-scale",
              "readTime": "15 menit",
              "summary": "Membedah rahasia gramatika dan balaghah kata Misr: mengapa negeri Mesir Partly Flexible, sedangkan pedesaan pada QS. Al-Baqarah: 61 Fully Flexible bertanwin.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Salah satu bahasan paling memukau di Day 3 adalah analisis linguistik dan sejarah kata **مِصْر** (Misr):"
                },
                {
                  "type": "comparison_table",
                  "title": "Perbandingan Dua Kata 'Misr' dalam Al-Qur'an",
                  "headers": [
                    "Kata",
                    "Fleksibilitas & Harakat",
                    "Makna Hakiki",
                    "Contoh Ayat Al-Qur'an"
                  ],
                  "rows": [
                    [
                      "مِصْرُ / مِصْرَ",
                      "Partly Flexible (Mamnu' min ash-Sharf: Tanpa Tanwin)",
                      "Nama khusus imperium / negara kerajaan Mesir kuno.",
                      "`أَلَيْسَ لِي مُلْكُ مِصْرَ` ('Bukankah milikku kerajaan Mesir?' - Perkataan Firaun, QS. Az-Zukhruf: 51)."
                    ],
                    [
                      "مِصْرًا",
                      "Fully Flexible (Munsharif: Bertanwin Fathatain)",
                      "Kata benda umum bahasa Arab yang berarti 'pedesaan / lahan pertanian biasa'.",
                      "`اهْبِطُوا مِصْرًا فَإِنَّ لَكُمْ مَا سَأَلْتُمْ` ('Pergilah ke suatu pedesaan, pasti kamu dapat apa yang kamu minta' - QS. Al-Baqarah: 61)."
                    ]
                  ]
                },
                {
                  "type": "case_study",
                  "title": "Sindiran Tajam Nabi Musa kepada Bani Israil",
                  "points": [
                    {
                      "label": "1. Keajaiban Nikmat Pembebasan & Manna-Salwa:",
                      "desc": "Setelah diselamatkan dari perbudakan Firaun dan diberi naungan awan serta makanan surga (Manna dan Salwa) setiap hari di padang pasir, Bani Israil mengeluh bosan dan merindukan bawang putih, kacang adas, dan mentimun yang biasa mereka makan di masa perbudakan Mesir."
                    },
                    {
                      "label": "2. Pilihan Diksi 'Misran' yang Sarcastic:",
                      "desc": "Nabi Musa menegur keras: *'Apakah kalian ingin menukar yang mulia (kemerdekaan & rezeki Allah) dengan yang hina?'* Beliau tidak berkata 'Kembalilah ke Mesir (Misra)', melainkan memakai kata 'Misran' (suatu desa biasa) sebagai sindiran: *'Kalian begitu merindukan masa perbudakan Mesir hingga rela mencari desa tani mana saja hanya demi bawang!'*"
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d3_misr_case",
                  "question": "Mengapa kata 'مِصْرًا' pada ayat `اهْبِطُوا مِصْرًا` (QS. Al-Baqarah: 61) berstatus Fully Flexible (memiliki tanwin)?",
                  "options": [
                    {
                      "text": "Karena berarti 'suatu pedesaan / kota biasa' (kata benda umum), bukan nama khusus imperium negara Mesir",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena dieja dengan 5 huruf",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena merupakan kata pinjaman dari Yunani",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata 'Misran' bertanwin karena merupakan Ism Nakirah asli bahasa Arab yang bermakna pedesaan umum, bukan nama khusus kerajaan Mesir."
                }
              ]
            },
            {
              "id": "i2-d3-mastery-empat-sifat-ism-sekaligus",
              "number": "06",
              "title": "Mastery 4 Sifat Ism Sekaligus (Status, Number, Gender, Type - SNGT)",
              "icon": "fa-award",
              "readTime": "15 menit",
              "summary": "Menguji ketangkasan bedah cepat 4 sifat Ism sekaligus (Status, Number, Gender, Type) dengan notasi kode profesional.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Kini kita telah menyatukan ke-4 pilar sifat Ism: **Status (S), Number (N), Gender (G), dan Type (T)**. Mari kita gunakan notasi singkat profesional untuk menganalisis kata dalam hitungan detik:"
                },
                {
                  "type": "comparison_table",
                  "title": "Laboratorium Bedah 4 Sifat Ism (SNGT Code)",
                  "headers": [
                    "Kata Al-Qur'an",
                    "Status (S)",
                    "Number (N)",
                    "Gender (G)",
                    "Type (T)",
                    "Notasi Lengkap & Keterangan"
                  ],
                  "rows": [
                    [
                      "نُوحًا",
                      "Nasb",
                      "1 (Tunggal)",
                      "M (Pria)",
                      "P (Proper / Nama)",
                      "`N1MP` (Nama Nabi 3 huruf bertanwin)"
                    ],
                    [
                      "مَاكِثِينَ",
                      "Nasb/Jar",
                      "3 (Jamak)",
                      "M (Pria)",
                      "C (Common / Tanpa Al)",
                      "`NJ3MC` (Kombinasi Jamak Maskulin)"
                    ],
                    [
                      "إِبْرَاهِيمَ",
                      "Nasb/Jar",
                      "1 (Tunggal)",
                      "M (Pria)",
                      "P (Proper / Nama)",
                      "`NJ1MP` (Nama Non-Arab Partly Flexible)"
                    ],
                    [
                      "أُمَّةً",
                      "Nasb",
                      "1 (Tunggal)",
                      "F (Feminin / Ta)",
                      "C (Common / Tanpa Al)",
                      "`N1FC` (Tunggal Feminin bertanwin)"
                    ],
                    [
                      "أُمٍّ",
                      "Jar",
                      "1 (Tunggal)",
                      "F (Feminin Hakiki)",
                      "C (Common)",
                      "`J1FC` (Ibu adalah feminin hakiki)"
                    ],
                    [
                      "الْقَرْنَيْنِ",
                      "Nasb/Jar",
                      "2 (Dual)",
                      "M (Maskulin)",
                      "P (Proper / Al)",
                      "`NJ2MP` (Kombinasi Dual ber-Alif Lam)"
                    ]
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Spektakuler Intensive 2 Day 3! 🌟",
                  "points": [
                    "Ayah adalah Miraculous Sign; Diksi Sunbulaat (sedikit) vs Sanaabil (banyak) membuktikan mukjizat Al-Qur'an.",
                    "Menguasai 15 kosakata feminin sima'i melalui narasi prajurit di medan perang.",
                    "7 Kategori Ism Ma'rifah: Alif Lam, Nama Diri, Panggilan (Munada), Dhamir, Asma'ul Isyarah, Ism Mawshul, dan Mudhaf Ma'rifah.",
                    "Kaidah Munada: Nama tunggal = Rafa' Ringan (`يَا نُوحُ`); Mudhaf = Nasb Ringan (`يَا رَسُولَ اللَّهِ`).",
                    "Keagungan adab ilahi: Allah menyapa Nabi Muhammad ﷺ dengan gelar mulia (`يَا أَيُّهَا الرَّسُولُ`).",
                    "Misteri balaghah Misr: Negeri Mesir (Partly Flexible: Misra) vs Pedesaan umum (Fully Flexible: Misran).",
                    "Menguasai analisis terpadu 4 sifat Ism (SNGT Code: R/N/J, 1/2/3, M/F, C/P)."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/SBoEuBZLw5k?si=OlQu0doFvgZ2S2H1",
          "pdfUrl": "https://drive.google.com/open?id=1XefTWpq9tA1ds9DhlwSoP-Uv_aTIYmNh&usp=drive_copy"
        },
        {
          "day": 4,
          "title": "Hari 4: 4 Kondisi Dhamir Muttashil (Nasb vs Jar), Anatomi Hijab & Misteri Al-Husna",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 2 Day 4",
              "url": "https://www.youtube.com/live/53MwDht85kM?si=rQxy-MoM4akNRZ1A"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 2 Day 4",
              "url": "https://drive.google.com/open?id=1XLIaMzFn3csTk9UeY6fM8FsEZ-lTcJtI&usp=drive_copy"
            }
          ],
          "summary": "Menguasai 4 kondisi mutlak Dhamir Muttashil (kapan Jar dan kapan Nasb), anatomi kata ringan, hakikat kata Hijab dalam Al-Qur'an, dan rahasia gramatika frasa Al-Asma'ul Husna.",
          "lessons": [
            {
              "id": "i2-d4-anatomi-kata-ringan-dan-rahasia-hijab",
              "number": "01",
              "title": "Filosofi Kata Ringan & Hakikat Kata Hijab dalam Al-Qur'an (Mahjubun)",
              "icon": "fa-feather",
              "readTime": "15 menit",
              "summary": "Memahami mengapa kata Ringan bisa diketahui Status/Number/Gender-nya namun Type-nya menggantung, serta menyingkap makna hakiki kata Hijab.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Ketika sebuah Ism berstatus **Ringan (Light)** tanpa Alif Lam (seperti `مُسْلِمُو` atau `نِسَاءَ`), kita dapat langsung memastikan **Status**, **Number**, dan **Gender**-nya. Namun sifat ke-4 (**Type / Ma'rifah vs Nakirah**) tidak dapat ditentukan sampai kita menemukan pasangannya (apakah ia Mudhaf kepada kata Ma'rifah atau Nakirah)."
                },
                {
                  "type": "deep_dive",
                  "title": "Koreksi Konseptual: Apa Arti 'Hijab' dalam Bahasa Al-Qur'an?",
                  "items": [
                    {
                      "type": "1. Hijab Bukan Sekadar Penutup Kepala (Khimar)",
                      "examples": "Penutup kepala wanita dalam bahasa Al-Qur'an disebut `خِمَار` (Khimar). Kata `حِجَاب` (Hijab) dalam Al-Qur'an bermakna **Tirai, Dinding Pembatas, atau Layar Penghalang** yang memisahkan dua ruang sehingga satu pihak tidak dapat melihat pihak lain."
                    },
                    {
                      "type": "2. Makna Kata مَحْجُوبُونَ (QS. Al-Muthaffifin: 15)",
                      "examples": "Orang-orang kafir di hari kiamat disifati sebagai `مَحْجُوبُونَ` (terhijab / terhalang) — artinya mata hati dan pandangan mereka terhalang tirai pekat sehingga tidak dapat melihat kemuliaan dan rahmat Allah."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d4_hijab_meaning",
                  "question": "Apakah makna terminologis kata 'حِجَاب' (Hijab) dalam kosakata Al-Qur'an?",
                  "options": [
                    {
                      "text": "Tirai / Layar / Dinding pembatas yang menghalangi pandangan ke sisi seberang",
                      "isCorrect": true
                    },
                    {
                      "text": "Pakaian jubah luar",
                      "isCorrect": false
                    },
                    {
                      "text": "Hiasan dinding rumah",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Dalam Al-Qur'an, kata Hijab berarti tirai atau layar pembatas antara dua ruang (seperti dinding pemisah atau tirai pembatas pandangan)."
                }
              ]
            },
            {
              "id": "i2-d4-masterclass-dhamir-munfashil-vs-muttashil",
              "number": "02",
              "title": "Masterclass Dhamir: 14 Munfashil (Rafa') vs 14 Muttashil (Nasb/Jar)",
              "icon": "fa-users-viewfinder",
              "readTime": "15 menit",
              "summary": "Membedakan kata ganti mandiri (Munfashil) yang selalu berstatus Rafa' dengan kata ganti bersambung (Muttashil) yang berstatus Nasb atau Jar.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dhamir (Kata Ganti) terbagi menjadi dua kelompok besar yang wajib dikuasai luar kepala:"
                },
                {
                  "type": "comparison_table",
                  "title": "14 Dhamir Munfashil (Rafa') vs 14 Dhamir Muttashil (Nasb/Jar)",
                  "headers": [
                    "Makna & Orang",
                    "Dhamir Munfashil (Selalu RAFA')",
                    "Dhamir Muttashil (NASB / JAR)"
                  ],
                  "rows": [
                    [
                      "Dia (1 Pria)",
                      "`هُوَ` (Huwa)",
                      "`ـهُ / ـهِ` (-hu / -hi)"
                    ],
                    [
                      "Mereka (2 Pria)",
                      "`هُمَا` (Humaa)",
                      "`ـهُمَا / ـهِمَا` (-humaa / -himaa)"
                    ],
                    [
                      "Mereka (3+ Pria)",
                      "`هُمْ` (Hum)",
                      "`ـهُمْ / ـهِمْ` (-hum / -him)"
                    ],
                    [
                      "Dia (1 Wanita)",
                      "`هِيَ` (Hiya)",
                      "`ـهَا` (-haa)"
                    ],
                    [
                      "Mereka (2 Wanita)",
                      "`هُمَا` (Humaa)",
                      "`ـهُمَا / ـهِمَا` (-humaa / -himaa)"
                    ],
                    [
                      "Mereka (3+ Wanita)",
                      "`هُنَّ` (Hunna)",
                      "`ـهُنَّ / ـهِنَّ` (-hunna / -hinna)"
                    ],
                    [
                      "Kamu (1 Pria)",
                      "`أَنْتَ` (Anta)",
                      "`ـكَ` (-ka)"
                    ],
                    [
                      "Kalian (2 Pria/Wanita)",
                      "`أَنْتُمَا` (Antumaa)",
                      "`ـكُمَا` (-kumaa)"
                    ],
                    [
                      "Kalian (3+ Pria)",
                      "`أَنْتُمْ` (Antum)",
                      "`ـكُمْ` (-kum)"
                    ],
                    [
                      "Kamu (1 Wanita)",
                      "`أَنْتِ` (Anti)",
                      "`ـكِ` (-ki)"
                    ],
                    [
                      "Kalian (3+ Wanita)",
                      "`أَنْتُنَّ` (Antunna)",
                      "`ـكُنَّ` (-kunna)"
                    ],
                    [
                      "Saya (1 Pria/Wanita)",
                      "`أَنَا` (Anaa)",
                      "`ـنِي / ـي` (-nee / -ee)"
                    ],
                    [
                      "Kami / Kita (2+ Pria/Wanita)",
                      "`نَحْنُ` (Nahnu)",
                      "`ـنَا` (-naa)"
                    ]
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Kunci Emas Mengingat Huruf Awal Dhamir",
                  "text": "Semua kata ganti orang ke-3 (jauh / gaib) diawali huruf **H** (`هُوَ, هُمَا, هُمْ...`). Semua kata ganti orang ke-2 (lawan bicara langsung) diawali **ANT** (`أَنْتَ, أَنْتُمْ...`) dan bentuk bersambungnya menggunakan **K** (`ـكَ, ـكُمْ...`). Jangan pernah menukar 'Hunna' (mereka wanita) dengan 'Antunna / -kunna' (kalian wanita)!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d4_pronoun_prefix",
                  "question": "Apakah bentuk dhamir muttashil untuk kata 'أَنْتُمْ' (kalian pria)?",
                  "options": [
                    {
                      "text": "ـكُمْ (-kum)",
                      "isCorrect": true
                    },
                    {
                      "text": "ـهُمْ (-hum)",
                      "isCorrect": false
                    },
                    {
                      "text": "ـنَا (-naa)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kata ganti orang ke-2 jamak pria 'Antum' bersambung menjadi akhiran '-kum' (misal: Rabbukum, Dinarukum)."
                }
              ]
            },
            {
              "id": "i2-d4-dua-kondisi-dhamir-jar",
              "number": "03",
              "title": "2 Kondisi Mutlak Dhamir Muttashil Berstatus JAR",
              "icon": "fa-link-slash",
              "readTime": "15 menit",
              "summary": "Membedah 2 alasan mengapa kata ganti bersambung pasti berstatus Jar: menempel pada Ism (Mudhaf Ilayh) atau Harf Jar (Majroor).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dhamir Muttashil dapat berstatus Nasb atau Jar. Namun, ada **2 kondisi pasti di mana dhamir tersebut 100% berstatus JAR**:"
                },
                {
                  "type": "card_grid",
                  "title": "2 Kasus Dhamir Muttashil Menjadi JAR",
                  "items": [
                    {
                      "icon": "fa-book",
                      "title": "1. Menempel pada ISM (Menjadi Mudhaf Ilayh)",
                      "desc": "Setiap kali Ism + Dhamir bersambung, terbentuk frasa kepemilikan (Idhafah). Ism menjadi Mudhaf dan Dhamir menjadi Mudhaf Ilayh (wajib JAR). Contoh: `كِتَابُهُ` (bukunya), `أُسْتَاذُكُمْ` (guru kalian), `دِينِي` (agamaku), `رَبُّنَا` (Tuhan kami)."
                    },
                    {
                      "icon": "fa-magnet",
                      "title": "2. Menempel pada HARF JAR (Menjadi Majroor)",
                      "desc": "Setiap kali Harf Jar bertemu Dhamir, dhamir tersebut langsung ditarik menjadi Majroor (wajib JAR). Contoh: `بِهِ` (dengannya), `لَكُمْ` (bagi kalian), `فِيهَا` (di dalamnya), `عَلَيْهِمْ` (atas mereka), `إِلَيْنَا` (kepada kami)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d4_dhamir_jar_cases",
                  "question": "Mengapa dhamir 'ـكُمْ' pada frasa 'دِينُكُمْ' (agamamu sekalian) berstatus Jar?",
                  "options": [
                    {
                      "text": "Karena menempel pada Ism (Deen) sehingga bertindak sebagai Mudhaf Ilayh",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena didahului Harf Nasb",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena merupakan subjek pelaku",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Setiap dhamir yang menempel pada kata benda (Ism) otomatis menjadi Mudhaf Ilayh yang berstatus Jar."
                }
              ]
            },
            {
              "id": "i2-d4-dua-kondisi-dhamir-nasb",
              "number": "04",
              "title": "2 Kondisi Mutlak Dhamir Muttashil Berstatus NASB",
              "icon": "fa-bolt-lightning",
              "readTime": "15 menit",
              "summary": "Membedah 2 alasan mengapa kata ganti bersambung pasti berstatus Nasb: menempel pada Fi'il (Objek) atau Harf Nasb (Ism Inna/dkk).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Sebaliknya, ada **2 kondisi pasti di mana Dhamir Muttashil 100% berstatus NASB**:"
                },
                {
                  "type": "card_grid",
                  "title": "2 Kasus Dhamir Muttashil Menjadi NASB",
                  "items": [
                    {
                      "icon": "fa-person-running",
                      "title": "1. Menempel pada FI'IL (Kata Kerja / Objek)",
                      "desc": "Ketika kata kerja (Fi'il) menempel langsung dengan Dhamir, dhamir tersebut bertindak sebagai Objek Penderita (Maf'ul Bih) yang wajib berstatus NASB. Contoh: `نَصَرَهُ` (ia menolong-nya), `خَلَقَكُمْ` (Dia menciptakan kalian), `يَعْلَمُهُ` (Dia mengetahuinya)."
                    },
                    {
                      "icon": "fa-circle-exclamation",
                      "title": "2. Menempel pada HARF NASB (Inna & Saudari-saudarinya)",
                      "desc": "Ketika Harf Nasb (`إِنَّ`, `أَنَّ`, `كَأَنَّ`, `لَكِنَّ`, `لَيْتَ`, `لَعَلَّ`) bertemu Dhamir, dhamir tersebut menjadi Ism Harf Nasb (wajib NASB). Contoh: `إِنَّهُ` (sesungguhnya ia), `إِنَّكُمْ` (sesungguhnya kalian), `لَعَلَّكَ` (mudah-mudahan kamu), `إِنَّا` (sesungguhnya kami)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d4_dhamir_nasb_cases",
                  "question": "Apakah status dhamir 'ـكَ' pada kata 'لَعَلَّكَ' (mudah-mudahan kamu)?",
                  "options": [
                    {
                      "text": "NASB (karena menempel pada Harf Nasb 'La'alla')",
                      "isCorrect": true
                    },
                    {
                      "text": "JAR (karena menempel pada Ism)",
                      "isCorrect": false
                    },
                    {
                      "text": "RAFA' (karena mandiri)",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "La'alla adalah Harf Nasb, sehingga setiap dhamir yang menempel padanya otomatis berstatus Nasb."
                }
              ]
            },
            {
              "id": "i2-d4-laboratorium-harf-jar-bersambung-dhamir",
              "number": "05",
              "title": "Laboratorium Praktik Harf Jar + Dhamir (Bihi, Lakum, Alayhim, Ilayna)",
              "icon": "fa-flask-vial",
              "readTime": "15 menit",
              "summary": "Melatih kelincahan membedah dan menerjemahkan kombinasi Harf Jar dengan kata ganti dalam ayat-ayat Al-Qur'an.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Mari kita latih ketajaman membaca dan menerjemahkan partikel Harf Jar ketika bersambung dengan dhamir muttashil:"
                },
                {
                  "type": "comparison_table",
                  "title": "Tabel Konjugasi Harf Jar + Dhamir Populer dalam Al-Qur'an",
                  "headers": [
                    "Harf Jar",
                    "Makna Dasar",
                    "Bentuk Bersambung",
                    "Makna Terjemahan"
                  ],
                  "rows": [
                    [
                      "`بِـ` (Bi)",
                      "Dengan / Demi",
                      "`بِهِ` / `بِهِمْ` / `بِي`",
                      "Dengannya (Laki-laki) / Dengan mereka / Denganku"
                    ],
                    [
                      "`لَـ / لِـ` (La/Li)",
                      "Untuk / Bagi",
                      "`لَهُ` / `لَكُمْ` / `لِي` / `لَنَا`",
                      "Baginya / Bagi kalian / Bagiku (`لِي وَلَكُمْ`) / Bagi kami"
                    ],
                    [
                      "`مِنْ` (Min)",
                      "Dari",
                      "`مِنْهُ` / `مِنْكُمْ` / `مِنِّي` / `مِنَّا`",
                      "Darinya / Dari kalian / Dariku (Minnee) / Dari kami (Minnaa)"
                    ],
                    [
                      "`فِي` (Fee)",
                      "Di dalam",
                      "`فِيهِ` / `فِيهَا` / `فِيَّ` / `فِينَا`",
                      "Di dalamnya (Laki-laki) / Di dalamnya (Wanita/Jamak) / Di dalamku / Di dalam kami"
                    ],
                    [
                      "`عَنْ` (An)",
                      "Tentang / Dari",
                      "`عَنْهُ` / `عَنْهَا` / `عَنِّي` / `عَنَّا`",
                      "Tentangnya / Tentang wanita itu / Tentangku / Tentang kami"
                    ],
                    [
                      "`عَلَى` (Ala ➔ Alay)",
                      "Di atas / Atas",
                      "`عَلَيْهِ` / `عَلَيْهِمْ` / `عَلَيْكَ` / `عَلَيَّ`",
                      "Atasnya / Atas mereka / Atasmu / Atasku (Alayya)"
                    ],
                    [
                      "`إِلَى` (Ila ➔ Ilay)",
                      "Kepada / Menuju",
                      "`إِلَيْهِ` / `إِلَيْكُمْ` / `إِلَيَّ` / `إِلَيْنَا`",
                      "Kepadanya / Kepada kalian / Kepadaku (Ilayya) / Kepada kami (Ilaynaa)"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d4_harf_jar_alayna",
                  "question": "Apakah makna dari lafaz 'عَلَيْنَا' (Alaynaa)?",
                  "options": [
                    {
                      "text": "Atas kami / Kepada tanggungan kami ('Ala + Nahnu)",
                      "isCorrect": true
                    },
                    {
                      "text": "Dari kami",
                      "isCorrect": false
                    },
                    {
                      "text": "Di dalam kami",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "'Ala (atas) + Naa (kami/nahnu) = Alaynaa (atas kami / tanggungan kami)."
                }
              ]
            },
            {
              "id": "i2-d4-studi-kasus-balaghah-asmaul-husna",
              "number": "06",
              "title": "Studi Kasus Balaghah: Analisis Gramatika Frasa Al-Asma'ul Husna",
              "icon": "fa-gem",
              "readTime": "15 menit",
              "summary": "Membedah keajaiban keserasian 4 sifat Ism pada frasa 'Al-Asma'ul Husna' (QS. Al-Isra' [17]: 110).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Dalam Surah Al-Isra' [17]: 110, Allah berfirman: `فَلَهُ الْأَسْمَاءُ الْحُسْنَى` (*'Maka hanya milik-Nya nama-nama yang paling indah'*). Mengapa kata 'Al-Husna' berbentuk feminin padahal 'Al-Asma'' berarti nama-nama?"
                },
                {
                  "type": "case_study",
                  "title": "Laboratorium Bedah Gramatika: الْأَسْمَاءُ الْحُسْنَى",
                  "points": [
                    {
                      "label": "1. Kata Pertama: الْأَسْمَاءُ (Al-Asmaa' - Mawshuf)",
                      "desc": "Status: **Rafa'** (Dhommah `ـُ`) | Number: **Jamak Taksir Tidak Berakal** (Non-Human Broken Plural) ➔ Diperlakukan sebagai **1F (Tunggal Feminin)** | Gender: **Feminin** | Type: **Ma'rifah / Proper** (ada Alif Lam)."
                    },
                    {
                      "label": "2. Kata Kedua: الْحُسْنَى (Al-Husnaa - Sifah / Kata Sifat)",
                      "desc": "Status: **Rafa'** (Non-Flexible Alif Maqshurah) | Number: **1 (Tunggal Superlatif)** | Gender: **Feminin** (Wazan Fu'laa `فُعْلَى`) | Type: **Ma'rifah / Proper** (ada Alif Lam)."
                    },
                    {
                      "label": "3. Kesimpulan Spektakuler:",
                      "desc": "Kedua kata memiliki 4 sifat yang **100% COCOK SEMPURNA**: `R1FP` (Rafa', Tunggal, Feminin, Proper)! Karena cocok, 'Al-Husna' menjadi Sifah (Adjective) bagi 'Al-Asma'' (Mawshuf) dengan terjemahan: *'Nama-Nama yang Paling Indah'*."
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Pelajaran Intensive 2 Day 4! 🌟",
                  "points": [
                    "Kata Ringan membuka 3 sifat (S/N/G), namun Type (Ma'rifah/Nakirah) menunggu Mudhaf Ilayh.",
                    "Hijab dalam Al-Qur'an adalah tirai pemisah ruang (Mahjubun = terhalang dari rahmat Allah).",
                    "14 Dhamir Munfashil selalu Rafa'; 14 Dhamir Muttashil berstatus Nasb atau Jar.",
                    "Dhamir Muttashil WAJIB JAR jika menempel pada ISM (Mudhaf Ilayh) atau HARF JAR (Majroor).",
                    "Dhamir Muttashil WAJIB NASB jika menempel pada FI'IL (Objek) atau HARF NASB (Ism Inna dkk).",
                    "Praktik konjugasi Harf Jar: Bihi, Lakum, Minna, Feeha, Anhu, Alaykum, Ilayna.",
                    "Frasa 'Al-Asma'ul Husna' adalah Mawshuf-Sifah yang serasi sempurna pada kode sifat R1FP."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/53MwDht85kM?si=rQxy-MoM4akNRZ1A",
          "pdfUrl": "https://drive.google.com/open?id=1XLIaMzFn3csTk9UeY6fM8FsEZ-lTcJtI&usp=drive_copy"
        },
        {
          "day": 5,
          "title": "Hari 5: Special Mudhaf (Zharf), Sifat Mengikuti Mawshuf & Simetri Ar-Rahim Al-Ghafur",
          "videos": [
            {
              "label": "Video Rekaman Asli Intensive 2 Day 5",
              "url": "https://www.youtube.com/live/hueo7GbJxSs?si=EbxzRwnBHUolCu5C"
            }
          ],
          "slides": [
            {
              "label": "Slide Presentasi Intensive 2 Day 5",
              "url": "https://drive.google.com/open?id=1Vy2N3WhgvlejtiW5m3xAamWtRe3fso5v&usp=drive_copy"
            }
          ],
          "summary": "Menguasai Special Mudhaf (Zharf tempat/waktu), hukum Mawshuf-Sifah yang boleh berjarak, 3 aturan benturan struktur, dan mukjizat simetri Ar-Rahim Al-Ghafur pada QS. Saba': 2.",
          "lessons": [
            {
              "id": "i2-d5-translasi-dhamir-dan-penyelarasan-fonetik",
              "number": "01",
              "title": "Ketepatan Terjemahan Dhamir & Misteri Fonetik 'Kitabihi' vs 'Kitabuhu'",
              "icon": "fa-language",
              "readTime": "15 menit",
              "summary": "Memahami mengapa harakat dhamir berubah demi keserasian fonetik (Tanafur) serta akurasi penerjemahan kepemilikan bahasa Arab ke bahasa Indonesia.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Banyak pembelajar bingung mengapa terkadang tertulis `كِتَابُهُ` (Kitabuhu) namun terkadang `كِتَابِهِ` (Kitabihi) atau `عَلَيْهِمْ` (Alayhim). Apakah status dhamirnya berubah?"
                },
                {
                  "type": "deep_dive",
                  "title": "Rahasia Fonetik: Keserasian Bunyi (Tanafur al-Huruf)",
                  "items": [
                    {
                      "type": "1. Mengapa 'Kitabihi' Memakai Kasrah?",
                      "examples": "Status dhamir `ـهُ / ـهِ` pada kedua kata tersebut sama persis: yaitu **JAR** sebagai Mudhaf Ilayh! Harakat 'hi' pada `كِتَابِهِ` berubah dari dhommah menjadi kasrah semata-mata demi **keserasian bunyi fonetik (Phonetic Harmony)** setelah huruf 'ba' berharakat kasrah (`كِتَابِـ`)."
                    },
                    {
                      "type": "2. Mengapa Terjemahan Harus Presisi?",
                      "examples": "Frasa `أَمْرُنَا` wajib diterjemahkan *'Perintah kami'* (karena `أَمْر` adalah Ism / Kata Benda), BUKAN *'Kami memerintah'* (yang merupakan kata kerja / Fi'il). Demikian pula `رَبِّكِ` adalah *'Tuhanmu (wanita)'*, bukan *'Tuhannya'*."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d5_phonetic_harmony",
                  "question": "Mengapa pada lafaz 'بِهِ' dan 'فِيهِ' dhamir dibaca dengan kasrah ('hi') dan bukan dhommah ('hu')?",
                  "options": [
                    {
                      "text": "Demi keselarasan fonetik (Phonetic Harmony) setelah harakat kasrah / huruf Ya",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena statusnya berubah menjadi Rafa'",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena kata bendanya berbentuk jamak",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Perubahan harakat dhamir 'hu' menjadi 'hi' adalah kaidah fonetik bangsa Arab agar pelafalan mengalir harmonis setelah kasrah atau ya."
                }
              ]
            },
            {
              "id": "i2-d5-mengenal-special-mudhaf",
              "number": "02",
              "title": "Mengenal Special Mudhaf (Zharf Tempat & Waktu): Mengapa Mereka ISM?",
              "icon": "fa-compass",
              "readTime": "15 menit",
              "summary": "Membedah kelompok Special Mudhaf (Zharf) yang selalu menjadi Mudhaf tanpa perlu pembuktian rumit dan alasan mengapa mereka adalah ISM.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di halaman 22, kita mempelajari kelompok kata yang disebut **Special Mudhaf (Mudhaf Khusus / Zharf)**. Kata-kata ini memiliki keistimewaan luar biasa:"
                },
                {
                  "type": "card_grid",
                  "title": "Daftar Special Mudhaf Utama dalam Al-Qur'an",
                  "items": [
                    {
                      "icon": "fa-arrow-down",
                      "title": "تَحْتَ (Tahta)",
                      "desc": "Artinya: 'Di bawah'. Contoh: `تَحْتَ الشَّجَرَةِ` (di bawah pohon — QS. Al-Fath: 18)."
                    },
                    {
                      "icon": "fa-arrow-up",
                      "title": "فَوْقَ (Fawqa)",
                      "desc": "Artinya: 'Di atas'. Contoh: `يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ` (Tangan Allah di atas tangan mereka — QS. Al-Fath: 10)."
                    },
                    {
                      "icon": "fa-arrows-left-right",
                      "title": "بَيْنَ (Bayna)",
                      "desc": "Artinya: 'Di antara'. Contoh: `بَيْنَ أَخَوَيْكُمْ` (di antara kedua saudaramu), `بَيْنَهُمَا` (di antara keduanya)."
                    },
                    {
                      "icon": "fa-user-group",
                      "title": "مَعَ (Ma'a)",
                      "desc": "Artinya: 'Bersama'. Contoh: `مَعَ الصَّابِرِينَ` (bersama orang-orang yang sabar), `مَعَنَا` (bersama kami)."
                    },
                    {
                      "icon": "fa-ban",
                      "title": "دُونَ (Doona)",
                      "desc": "Artinya: 'Selain / Tanpa / Di bawah level'. Contoh: `مِنْ دُونِ اللَّهِ` (selain Allah), `دُونَ ذَلِكَ` (selain itu)."
                    },
                    {
                      "icon": "fa-clock-rotate-left",
                      "title": "قَبْلَ & بَعْدَ (Qabla & Ba'da)",
                      "desc": "Artinya: 'Sebelum' & 'Sesudah'. Contoh: `مِنْ قَبْلِكُمْ` (sebelum kalian), `مِنْ بَعْدِ مَوْتِهَا` (setelah kematiannya)."
                    },
                    {
                      "icon": "fa-location-dot",
                      "title": "عِنْدَ & لَدُنْ ('Inda & Ladun)",
                      "desc": "Artinya: 'Di sisi / Pada / Memiliki'. Contoh: `عِنْدَ اللَّهِ` (di sisi Allah), `مِنْ لَدُنَّا` (khusus dari sisi Kami)."
                    }
                  ]
                },
                {
                  "type": "callout",
                  "style": "moss",
                  "title": "Bukti Bahwa Special Mudhaf adalah ISM (Bukan Harf)",
                  "text": "Banyak buku modern salah mengira kata-kata ini sebagai preposisi (Harf). Bukti mutlak bahwa mereka adalah **ISM**: mereka bisa dimasuki Harf Jar (`مِنْ بَعْدِهِ`, `مِنْ دُونِ اللَّهِ`, `مِنْ عِنْدِنَا`). Harf Jar tidak pernah bisa memukul Harf lain; Harf Jar HANYA bisa memukul ISM!"
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d5_special_mudhaf_proof",
                  "question": "Bagaimanakah kita membuktikan secara tata bahasa bahwa kata 'بَعْدَ' (Ba'da) adalah Ism dan bukan Harf?",
                  "options": [
                    {
                      "text": "Karena bisa dimasuki Harf Jar seperti pada 'مِنْ بَعْدِهِ' dan berstatus Jar",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena memiliki 5 huruf",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena selalu bertanwin",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Kemampuan kata menerima Harf Jar (seperti Min Ba'dihi) adalah bukti tak terbantahkan bahwa kata tersebut adalah Ism."
                }
              ]
            },
            {
              "id": "i2-d5-empat-pengecualian-special-mudhaf",
              "number": "03",
              "title": "4 Kata Fleksibel Special Mudhaf (Ayyu, Ghayru, Kullu, Ba'dhu)",
              "icon": "fa-scale-balanced",
              "readTime": "15 menit",
              "summary": "Memahami 4 kata yang 99% menjadi Mudhaf namun kehilangan status Mudhaf jika bertanwin.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di bagian bawah halaman 22, terdapat 4 kata khusus yang 99% menjadi Mudhaf, namun memiliki fleksibilitas:"
                },
                {
                  "type": "comparison_table",
                  "title": "4 Kata Fleksibel: Kapan Mudhaf vs Kapan Lepas",
                  "headers": [
                    "Kata",
                    "Ketika Bertindak Sebagai MUDHAF (Ringan)",
                    "Ketika BUKAN Mudhaf (Bertanwin / Mandiri)"
                  ],
                  "rows": [
                    [
                      "`كُلُّ` (Kullu - Setiap/Semua)",
                      "`كُلُّ شَيْءٍ` ('Setiap sesuatu' - Mudhaf)",
                      "`كُلٌّ فِي فَلَكٍ يَسْبَحُونَ` ('Masing-masing beredar...' - Bertanwin `كُلٌّ` = BUKAN Mudhaf!)"
                    ],
                    [
                      "`بَعْضُ` (Ba'dhu - Sebagian)",
                      "`بَعْضُكُمْ` ('Sebagian kalian' - Mudhaf)",
                      "`بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ` ('...sebagian yang lain' - Bertanwin `بَعْضٍ` = BUKAN Mudhaf!)"
                    ],
                    [
                      "`غَيْرُ` (Ghayru - Selain/Bukan)",
                      "`غَيْرِ الْمَغْضُوبِ` ('Bukan orang yang dimurkai' - Mudhaf)",
                      "`إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ` ('amal yang tidak saleh' - Sifah)"
                    ],
                    [
                      "`أَيُّ` (Ayyu - Mana saja/Yang mana)",
                      "`أَيُّكُمْ` ('Siapakah di antara kalian' - Mudhaf)",
                      "`أَيًّا مَا تَدْعُوا` ('Nama mana saja yang kamu seru' - Mandiri)"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d5_kullun_mudhaf",
                  "question": "Apakah kata 'كُلٌّ' pada ayat `كُلٌّ فِي فَلَكٍ يَسْبَحُونَ` (QS. Yasin: 40) bertindak sebagai Mudhaf?",
                  "options": [
                    {
                      "text": "Bukan Mudhaf, karena bertanwin (Heavy), sedangkan syarat Mudhaf wajib Ringan (Light)",
                      "isCorrect": true
                    },
                    {
                      "text": "Ya, selalu Mudhaf dalam segala kondisi",
                      "isCorrect": false
                    },
                    {
                      "text": "Bertindak sebagai Harf Jar",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Syarat mutlak Mudhaf adalah Ringan (Light / tanpa tanwin). Kata 'Kullun' bertanwin, sehingga bukan Mudhaf."
                }
              ]
            },
            {
              "id": "i2-d5-anatomi-mawshuf-sifah-jarak-jauh",
              "number": "04",
              "title": "Anatomi Mawshuf & Sifah: Keserasian 4 Sifat & Sifat yang Berjarak",
              "icon": "fa-arrows-split-up-and-left",
              "readTime": "15 menit",
              "summary": "Memahami 4 sifat wajib serasi antara kata benda (Mawshuf) dan sifat (Sifah), serta fleksibilitas Sifah yang boleh terpisah beberapa kata.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Berbeda dengan Idhafah (Mudhaf-Mudhaf Ilayh) yang tidak perlu mencocokkan sifat, **Mawshuf (Kata Benda yang Disifati) dan Sifah (Kata Sifat)** WAJIB COCOK DALAM KE-4 SIFATNYA (Status, Number, Gender, Type):"
                },
                {
                  "type": "comparison_table",
                  "title": "Karakteristik Hubungan Mawshuf dan Sifah",
                  "headers": [
                    "Pola Mawshuf",
                    "Pola Sifah (Pengikut)",
                    "Contoh Ayat Al-Qur'an",
                    "Terjemahan"
                  ],
                  "rows": [
                    [
                      "Tunggal Maskulin Rafa' Nakirah",
                      "Tunggal Maskulin Rafa' Nakirah",
                      "`قَوْلٌ ثَقِيلٌ`",
                      "Perkataan yang berat"
                    ],
                    [
                      "Tunggal Feminin Rafa' Ma'rifah",
                      "Tunggal Feminin Rafa' Ma'rifah",
                      "`الطَّامَّةُ الْكُبْرَى`",
                      "Malapetaka yang sangat besar"
                    ],
                    [
                      "Dual Maskulin Jar Nakirah",
                      "Dual Maskulin Jar Nakirah",
                      "`لِغُلَامَيْنِ يَتِيمَيْنِ`",
                      "Bagi dua anak yatim laki-laki"
                    ],
                    [
                      "Jamak Taksir Tidak Berakal (1F)",
                      "Tunggal Feminin (1F)",
                      "`سُرُرٌ مَرْفُوعَةٌ`\n`كُتُبٌ قَيِّمَةٌ`",
                      "Dipan-dipan yang ditinggikan\nKitab-kitab yang lurus"
                    ]
                  ]
                },
                {
                  "type": "deep_dive",
                  "title": "Perbedaan Karakter Antara Idhafah vs Mawshuf-Sifah",
                  "items": [
                    {
                      "type": "1. Mudhaf & Mudhaf Ilayh Tidak Boleh Terpisah",
                      "examples": "Mudhaf dan Mudhaf Ilayh harus menempel berdampingan erat, tidak boleh diselingi kata lain."
                    },
                    {
                      "type": "2. Sifah Boleh Berjarak dari Mawshuf-nya!",
                      "examples": "Contoh pada QS. Al-Baqarah: 49: `بَلَاءٌ مِنْ رَبِّكُمْ عَظِيمٌ` ➔ Kata `عَظِيمٌ` (Sifah) berjarak 2 kata dari `بَلَاءٌ` (Mawshuf), namun keduanya tetap bersambung sebagai Mawshuf-Sifah (*'Ujian yang besar dari Tuhanmu'*)."
                    }
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d5_sifah_distance",
                  "question": "Mengapa kata 'عَظِيمٌ' pada frasa 'بَلَاءٌ مِنْ رَبِّكُمْ عَظِيمٌ' menjadi kata sifat (Sifah) bagi 'بَلَاءٌ' meskipun terpisah frasa 'مِنْ رَبِّكُمْ'?",
                  "options": [
                    {
                      "text": "Karena Sifah boleh berjarak asalkan ke-4 sifatnya (R1MC) tetap cocok sempurna dengan Mawshuf",
                      "isCorrect": true
                    },
                    {
                      "text": "Karena 'Azheem' adalah Harf Jar",
                      "isCorrect": false
                    },
                    {
                      "text": "Karena 'Rabbikum' adalah kata kerja",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Sifat (Sifah) memiliki fleksibilitas dalam balaghah Al-Qur'an untuk ditempatkan berjarak dari kata yang disifati asalkan ke-4 sifatnya tetap cocok sempurna."
                }
              ]
            },
            {
              "id": "i2-d5-tiga-hukum-benturan-struktur",
              "number": "05",
              "title": "Hukum Benturan Struktur: Dua Kata Hanya Boleh Memiliki 1 Hubungan",
              "icon": "fa-shield-halved",
              "readTime": "15 menit",
              "summary": "Memahami aturan emas sintaksis: dua kata tidak boleh merangkap dua hubungan gramatika sekaligus (hanya salah satu: Idhafah, Mawshuf-Sifah, Harf Jar, atau Harf Nasb).",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Banyak pemula bertanya: *'Bisakah dua kata menjadi Mudhaf-Mudhaf Ilayh sekaligus menjadi Mawshuf-Sifah?'* Jawabannya adalah **TIDAK BISA PERNAH (IMPOSSIBLE)**!"
                },
                {
                  "type": "comparison_table",
                  "title": "Proses Eliminasi Hubungan Antara Dua Kata",
                  "headers": [
                    "Hubungan Gramatika",
                    "Ciri Khas Bentuk",
                    "Apakah Ada Kata 'of'?"
                  ],
                  "rows": [
                    [
                      "1. Idhafah (Mudhaf + Mudhaf Ilayh)",
                      "Kata ke-1 Ringan (tanpa Al/Tanwin), kata ke-2 JAR.",
                      "YA (Kecuali Special Mudhaf)"
                    ],
                    [
                      "2. Mawshuf + Sifah (Noun + Adjective)",
                      "Kedua kata 100% cocok dalam 4 Sifat (SNGT).",
                      "TIDAK (Diterjemahkan kata ke-2 lalu kata ke-1)"
                    ],
                    [
                      "3. Jar + Majroor (Harf Jar + Ism)",
                      "Harf Jar diikuti Ism Majroor.",
                      "Tergantung arti Harf Jar"
                    ],
                    [
                      "4. Harf Nasb + Ism-nya",
                      "Harf Nasb (`إِنَّ` dkk) diikuti Ism Mansub.",
                      "Tergantung arti Harf Nasb"
                    ]
                  ]
                },
                {
                  "type": "quiz",
                  "id": "q_i2_d5_single_relationship",
                  "question": "Apakah hubungan antara dua kata 'كِتَابُ الْحَقِّ' (Kitabul Haqqi)?",
                  "options": [
                    {
                      "text": "HANYA Mudhaf & Mudhaf Ilayh ('Buku kebenaran'), tidak bisa menjadi Mawshuf-Sifah",
                      "isCorrect": true
                    },
                    {
                      "text": "Bisa menjadi Mawshuf-Sifah sekaligus Mudhaf",
                      "isCorrect": false
                    },
                    {
                      "text": "Harf Jar dan Majroor",
                      "isCorrect": false
                    }
                  ],
                  "explanation": "Antara dua kata hanya boleh ada satu jenis hubungan gramatika. Karena kata pertama tidak ber-Al dan kata kedua ber-Al serta Jar, hubungannya mutlak Idhafah."
                }
              ]
            },
            {
              "id": "i2-d5-mukjizat-simetri-ar-rahim-al-ghafur",
              "number": "06",
              "title": "Mukjizat Balaghah: Mengapa Ar-Rahim Mendahului Al-Ghafur pada QS. Saba': 2?",
              "icon": "fa-heart-circle-bolt",
              "readTime": "15 menit",
              "summary": "Menyingkap keajaiban simetri arsitektur Al-Qur'an pada QS. Saba' [34]: 2 dalam penempatan nama Ar-Rahim Al-Ghafur.",
              "content": [
                {
                  "type": "paragraph",
                  "text": "Di lebih dari 70 tempat dalam Al-Qur'an, Allah selalu mendahulukan nama pengampunan sebelum kasih sayang: `الْغَفُورُ الرَّحِيمُ` (*Al-Ghafuur Ar-Rahiim*). Namun, hanya ada **SATU AYAT TUNGGAL** di seluruh Al-Qur'an di mana Allah membalik urutannya menjadi `الرَّحِيمُ الْغَفُورُ` (*Ar-Rahiim Al-Ghafuur*), yaitu pada **Surah Saba' [34]: 2**!"
                },
                {
                  "type": "case_study",
                  "title": "Bedah Simetri Sempurna Surah Saba' [34]: 2",
                  "points": [
                    {
                      "label": "Teks Ayat:",
                      "desc": "`يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنْزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا وَهُوَ الرَّحِيمُ الْغَفُورُ`"
                    },
                    {
                      "label": "1. Komponen Pertama — Butuh Kasih Sayang (Ar-Rahim):",
                      "desc": "• *Apa yang masuk ke dalam bumi:* Air dan benih tanaman (serta jenazah manusia saat wafat) ➔ Membutuhkan pemeliharaan penuh cinta (*Loving Care / Rahmah*).\n• *Apa yang turun dari langit:* Hujan dan rezeki kehidupan ➔ Manifestasi kasih sayang Allah (*Rahmah*)."
                    },
                    {
                      "label": "2. Komponen Kedua — Butuh Pengampunan (Al-Ghafur):",
                      "desc": "• *Apa yang keluar dari bumi:* Manusia dibangkitkan pada hari kiamat ➔ Sangat membutuhkan ampunan (*Maghfirah*).\n• *Apa yang naik ke langit:* Roh manusia dan catatan amal perbuatan setiap hari ➔ Sangat membutuhkan ampunan (*Maghfirah*)."
                    },
                    {
                      "label": "3. Simetri Ilahi yang Menggetarkan Hati:",
                      "desc": "Karena dua hal pertama (`يَلِجُ فِي الْأَرْضِ` & `يَنْزِلُ مِنَ السَّمَاءِ`) berkaitan dengan Kasih Sayang (*Rahmah*), sedangkan dua hal kedua (`يَخْرُجُ مِنْهَا` & `يَعْرُجُ فِيهَا`) berkaitan dengan Pengampunan (*Maghfirah*), maka ayat ini ditutup secara presisi dengan: **وَهُوَ الرَّحِيمُ (Maha Pengasih) الْغَفُورُ (Maha Pengampun)**!"
                    }
                  ]
                },
                {
                  "type": "summary_card",
                  "title": "Rangkuman Spektakuler Intensive 2 Day 5! 🌟",
                  "points": [
                    "Perubahan harakat dhamir (Kitabuhu ➔ Kitabihi) terjadi demi keselarasan fonetik (Phonetic Harmony).",
                    "Special Mudhaf (Tahta, Fawqa, Bayna, Ma'a, Doona, Qabla, Ba'da, 'Inda, Ladun) adalah ISM karena bisa dimasuki Harf Jar.",
                    "4 Kata Fleksibel: Kullu, Ba'dhu, Ghayru, Ayyu (kehilangan status mudhaf jika bertanwin).",
                    "Mawshuf dan Sifah wajib cocok dalam 4 Sifat (SNGT); Sifah boleh berjarak dari Mawshuf.",
                    "Hukum Benturan Struktur: Antara dua kata hanya boleh ada SATU hubungan gramatika.",
                    "Keajaiban simetri Surah Saba': 2 membuktikan bahwa Al-Qur'an adalah firman Allah yang maha sempurna dan presisi."
                  ]
                }
              ]
            }
          ],
          "videoUrl": "https://www.youtube.com/live/hueo7GbJxSs?si=EbxzRwnBHUolCu5C",
          "pdfUrl": "https://drive.google.com/open?id=1Vy2N3WhgvlejtiW5m3xAamWtRe3fso5v&usp=drive_copy"
        }
      ]
    }
  ]
};
