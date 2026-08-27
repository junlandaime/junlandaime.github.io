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
          "pdfUrl": "https://drive.google.com/file/d/1TnvucVgLQpu2uDiKXnykSCu2NIINtrPS/view?usp=drive_link"
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
          ]
        }
      ]
    }
  ]
};
