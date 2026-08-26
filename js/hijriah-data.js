/**
 * Basis Data & Logika Kalender Hijriah, Fase Bulan Astronomis, dan Tarikh Islam
 * Disusun untuk edukasi publik & konten serial TikTok Jundi Abdullah
 */

window.HIJRI_DATA = {
  // Serial Tracker TikTok (Patokan: 24 Agustus 2026 = 11 Rabiul Awal 1448 H / Hari ke-217)
  tiktok_series: {
    anchor_masehi: "2026-08-24",
    anchor_day_count: 217,
    anchor_hijri_day: 11,
    anchor_hijri_month: 3, // 3 = Rabiul Awal
    anchor_hijri_year: 1448,
  },

  // Daftar 12 Bulan Hijriah dengan makna etimologis & keutamaan
  months: [
    {
      id: 1,
      name: "Muharram",
      arabic: "مُحَرَّم",
      meaning: "Bulan yang disucikan / diharamkan berbuat zalim dan berperang",
      isHaram: true,
      description: "Bulan pertama dalam kalender Hijriah dan salah satu dari empat bulan haram (mulia). Di dalamnya terdapat amalan puasa Asyura (10 Muharram).",
    },
    {
      id: 2,
      name: "Shafar",
      arabic: "صَفَر",
      meaning: "Kosong / menguning",
      isHaram: false,
      description: "Dinamakan Shafar karena perkampungan bangsa Arab dahulu menjadi kosong saat penduduknya pergi merantau, berdagang, atau berperang setelah bulan Muharram berlalu.",
    },
    {
      id: 3,
      name: "Rabi'ul Awwal",
      arabic: "رَبِيع الأَوَّل",
      meaning: "Musim semi pertama / awal tumbuhnya rerumputan",
      isHaram: false,
      description: "Bulan bersejarah kelahiran (Maulid), peristiwa Hijrah ke Madinah, dan wafatnya Rasulullah shallallahu 'alaihi wa sallam.",
    },
    {
      id: 4,
      name: "Rabi'ul Akhir",
      arabic: "رَبِيع الآخِر",
      meaning: "Musim semi kedua / akhir musim semi",
      isHaram: false,
      description: "Kelanjutan dari musim berseminya padang gembala di jazirah Arab kuno.",
    },
    {
      id: 5,
      name: "Jumadil Ula",
      arabic: "جُمَادَى الأُولَى",
      meaning: "Musim beku / kemarau dingin pertama",
      isHaram: false,
      description: "Dinamakan demikian karena pada saat penamaan bulan ini bertepatan dengan musim dingin saat air mulai membeku (jumud).",
    },
    {
      id: 6,
      name: "Jumadil Akhirah",
      arabic: "جُمَادَى الآخِرَة",
      meaning: "Musim beku / dingin kedua",
      isHaram: false,
      description: "Bulan penutup musim dingin sebelum memasuki bulan-bulan mulia menyambut musim ibadah.",
    },
    {
      id: 7,
      name: "Rajab",
      arabic: "رَجَب",
      meaning: "Mengagungkan / memuliakan",
      isHaram: true,
      description: "Salah satu dari empat bulan haram yang dimuliakan sejak masa pra-Islam. Terkenal dengan peristiwa agung Isra' dan Mi'raj Rasulullah SAW.",
    },
    {
      id: 8,
      name: "Sya'ban",
      arabic: "شَعْبَان",
      meaning: "Bercabang-cabang / berpencar",
      isHaram: false,
      description: "Bulan di mana bangsa Arab berpencar mencari sumber air, serta gerbang persiapan ruhiyah kaum muslimin menyongsong bulan suci Ramadhan.",
    },
    {
      id: 9,
      name: "Ramadhan",
      arabic: "رَمَضَان",
      meaning: "Panas membakar / menggembleng",
      isHaram: false,
      description: "Bulan suci penuh berkah, diturunkannya Al-Qur'an (Nuzulul Qur'an), kewajiban ibadah puasa, dan malam kemuliaan Lailatul Qadr.",
    },
    {
      id: 10,
      name: "Syawwal",
      arabic: "شَوَّال",
      meaning: "Peningkatan / mengangkat ekor unta",
      isHaram: false,
      description: "Bulan kemenangan Hari Raya Idul Fitri dan anjuran ibadah puasa sunnah enam hari di bulan Syawwal.",
    },
    {
      id: 11,
      name: "Dzulqa'dah",
      arabic: "ذُو القَعْدَة",
      meaning: "Bulan untuk duduk beristirahat",
      isHaram: true,
      description: "Bulan haram ke-3, di mana bangsa Arab menahan diri dari peperangan dan mulai mempersiapkan perbekalan perjalanan ibadah Haji ke Makkah.",
    },
    {
      id: 12,
      name: "Dzulhijjah",
      arabic: "ذُو الحِجَّة",
      meaning: "Bulan pelaksanaan Ibadah Haji",
      isHaram: true,
      description: "Puncak musim haji, 10 hari pertama yang paling dicintai Allah, puasa hari Arafah (9 Dzulhijjah), Idul Adha, dan hari-hari Tasyriq (11-13 Dzulhijjah).",
    },
  ],

  /**
   * Konfigurasi Manual Awal Bulan Hijriah (Tabel Rukyat/Hisab)
   * Setiap bulan dimulai dari tanggal Masehi di bawah ini.
   * Anda dapat dengan mudah mengubah tanggal 1 Masehi jika terjadi perbedaan sidang isbat/rukyat!
   */
  hijri_month_starts: {
    1448: {
      1: { start: "2026-06-16", days: 30 }, // 1 Muharram 1448
      2: { start: "2026-07-16", days: 29 }, // 1 Shafar 1448
      3: { start: "2026-08-14", days: 30 }, // 1 Rabiul Awal 1448 (11 Rabiul Awal = 24 Agustus, 12 Rabiul Awal = 25 Agustus)
      4: { start: "2026-09-13", days: 29 }, // 1 Rabiul Akhir 1448
      5: { start: "2026-10-12", days: 30 }, // 1 Jumadil Awal 1448
      6: { start: "2026-11-11", days: 29 }, // 1 Jumadil Akhir 1448
      7: { start: "2026-12-10", days: 30 }, // 1 Rajab 1448
      8: { start: "2027-01-09", days: 29 }, // 1 Sya'ban 1448
      9: { start: "2027-02-07", days: 30 }, // 1 Ramadhan 1448
      10: { start: "2027-03-09", days: 29 }, // 1 Syawwal 1448
      11: { start: "2027-04-07", days: 30 }, // 1 Dzulqa'dah 1448
      12: { start: "2027-05-07", days: 29 }, // 1 Dzulhijjah 1448
    },
  },

  /**
   * Data Fase Bulan Berdasarkan Hari Hijriah (Hari 1 s.d. 30)
   * Menggabungkan sains Astronomi ITB dan kaitan ibadah syar'i.
   */
  moon_phases: {
    1: {
      phase_name: "Hilal Awal (Waxing Crescent)",
      arabic_phase: "الهِلَال",
      illumination: 2,
      type: "crescent",
      astro_info: "Bulan baru terbit tipis beberapa saat setelah Matahari terbenam (sunset) di ufuk barat. Sudut elongasi Bulan-Matahari mulai membesar (> 6°).",
      worship_info: "Penanda masuknya 1 bulan baru dalam kalender Hijriah berdasarkan visibilitas rukyatul hilal.",
    },
    2: {
      phase_name: "Bulan Sabit Muda (Waxing Crescent)",
      arabic_phase: "الهِلَال",
      illumination: 6,
      type: "crescent",
      astro_info: "Hilal semakin tebal dan terbenam lebih lambat (~45 menit setelah matahari terbenam).",
      worship_info: "Bulan sabit terlihat jelas dengan mata telanjang di langit barat saat senja.",
    },
    3: {
      phase_name: "Bulan Sabit Berkembang",
      arabic_phase: "الهِلَال المُتَنَامِي",
      illumination: 12,
      type: "crescent",
      astro_info: "Lengkungan cahaya putih mengarah ke barat. Cahaya bumi (earthshine) sering terlihat memantul di bagian gelap bulan.",
      worship_info: "Masa awal bulan, dianjurkan memperbanyak doa dan amal shalih.",
    },
    7: {
      phase_name: "Kuartir Pertama (First Quarter / Tarbi' Awwal)",
      arabic_phase: "التَّرْبِيع الأَوَّل",
      illumination: 50,
      type: "quarter",
      astro_info: "Tepat separuh piringan bulan bagian barat tampak terang benderang. Bulan berada di titik kulminasi tertinggi saat matahari terbenam.",
      worship_info: "Menandai 1/4 perjalanan bulan mengitari bumi dalam siklus sinodis.",
    },
    8: {
      phase_name: "Kuartir Pertama (Tarbi' Awwal)",
      arabic_phase: "التَّرْبِيع الأَوَّل",
      illumination: 58,
      type: "gibbous",
      astro_info: "Bulan melewati sudut kuadratur (90° dari matahari). Iluminasi terus bertambah menuju cembung.",
      worship_info: "Bulan mulai bersinar terang sejak sore hari hingga tengah malam.",
    },
    11: {
      phase_name: "Bulan Cembung Awal (Waxing Gibbous)",
      arabic_phase: "الأَحْدَب المُتَنَامِي",
      illumination: 82,
      type: "gibbous",
      astro_info: "Piringan bulan tampak lebih dari 3/4 penuh. Berada di langit timur saat maghrib.",
      worship_info: "Mendekati hari-hari putih (Ayyamul Bidh).",
    },
    12: {
      phase_name: "Bulan Cembung Mendekati Purnama",
      arabic_phase: "الأَحْدَب المُتَنَامِي",
      illumination: 90,
      type: "gibbous",
      astro_info: "Hanya tersisa sedikit tepi timur bulan yang belum tersinari cahaya matahari langsung.",
      worship_info: "Persiapan ibadah puasa sunnah Ayyamul Bidh (13, 14, 15).",
    },
    13: {
      phase_name: "Ayyamul Bidh I (Malam Terang)",
      arabic_phase: "أَيَّام البِيض (البَدْر)",
      illumination: 96,
      type: "full",
      astro_info: "Bulan hampir purnama sempurna. Efek pasang surut air laut (spring tide) mulai meningkat akibat tarikan gravitasi Bulan dan Matahari yang searah.",
      worship_info: "🌟 Hari Pertama Puasa Sunnah Ayyamul Bidh (Hari-hari Putih di mana malam diterangi sinar rembulan).",
    },
    14: {
      phase_name: "Purnama Penuh (Full Moon / Badr)",
      arabic_phase: "البَدْر (القَمَر الكَامِل)",
      illumination: 100,
      type: "full",
      astro_info: "Bulan berada tepat berseberangan 180° dengan Matahari (oposisi). Terbit persis saat matahari terbenam dan bersinar sepanjang malam sampai fajar.",
      worship_info: "🌟 Hari Kedua Puasa Sunnah Ayyamul Bidh — Puncak malam purnama.",
    },
    15: {
      phase_name: "Ayyamul Bidh III (Purnama Akhir)",
      arabic_phase: "أَيَّام البِيض",
      illumination: 98,
      type: "full",
      astro_info: "Piringan bulan masih terlihat sangat bundar dan terang, mulai mengalami fase penyusutan (waning) tipis di tepi barat.",
      worship_info: "🌟 Hari Ketiga Puasa Sunnah Ayyamul Bidh.",
    },
    21: {
      phase_name: "Kuartir Akhir (Last Quarter / Tarbi' Tsani)",
      arabic_phase: "التَّرْبِيع الثَّانِي",
      illumination: 50,
      type: "quarter",
      astro_info: "Separuh piringan bulan bagian timur tampak terang. Bulan baru terbit sekitar tengah malam dan tampak tinggi di langit saat waktu Subuh.",
      worship_info: "Menandai 3/4 perjalanan fase bulan dalam kalender Hijriah.",
    },
    22: {
      phase_name: "Kuartir Akhir (Tarbi' Tsani)",
      arabic_phase: "التَّرْبِيع الثَّانِي",
      illumination: 42,
      type: "quarter",
      astro_info: "Bulan menyusut menjadi sabit tua, tampak terang di langit timur menjelang fajar.",
      worship_info: "Sangat indah disaksikan saat qiyamul lail (sepertiga malam terakhir).",
    },
    28: {
      phase_name: "Hilal Tua (Waning Crescent)",
      arabic_phase: "العُرْجُون القَدِيم",
      illumination: 5,
      type: "crescent",
      astro_info: "Bulan sabit sangat tipis menyerupai tandan tua (Al-'Urjun Al-Qadim). Hanya tampak beberapa menit sebelum matahari terbit di ufuk timur.",
      worship_info: "Disebutkan dalam Al-Qur'an Surat Yasin ayat 39: 'Hingga (setelah dia sampai ke fase terakhir) kembalilah dia seperti bentuk tandan yang tua.'",
    },
    29: {
      phase_name: "Hari Rukyatul Hilal (Hari ke-29)",
      arabic_phase: "يَوْم الشَّكّ / المُرَاقَبَة",
      illumination: 1,
      type: "crescent",
      astro_info: "Bulan berada sangat dekat dengan garis Matahari. Saat matahari terbenam hari ini, para astronom & perukyat mengamati ufuk barat untuk melihat apakah hilal baru sudah wujud dan imkanur rukyat.",
      worship_info: "Jika hilal terlihat saat maghrib, malam ini masuk tanggal 1 bulan berikutnya. Jika tidak terlihat, bulan disempurnakan (istikmal) menjadi 30 hari.",
    },
    30: {
      phase_name: "Istikmal (Penyempurnaan 30 Hari)",
      arabic_phase: "الإِسْتِكْمَال (المُحَاق)",
      illumination: 0,
      type: "new",
      astro_info: "Fase konjungsi / bulan mati (New Moon / Ijtima'). Bulan berada di antara Bumi dan Matahari sehingga sisi yang menghadap bumi tidak tersinari sama sekali.",
      worship_info: "Hari ke-30 sebagai penyempurna hitungan bulan sebagaimana sabda Nabi: 'Bila tertutup awan, maka genapkanlah bilangan bulan menjadi tiga puluh hari.' (HR. Bukhari & Muslim).",
    },
  },

  /**
   * Ensiklopedi Peristiwa Sejarah Islam (Tarikh & As-Sirah Kredibel)
   * Disusun berdasarkan bulan dan tanggal Hijriah
   */
  historical_events: {
    // 1. MUHARRAM
    "1-1": {
      title: "Tahun Baru Hijriah & Penetapan Kalender Islam",
      category: "Peradaban Islam",
      source: "Tarikh At-Thabari & Al-Bidayah wan Nihayah",
      blurb: "Awal dimulainya tahun baru dalam kalender Islam yang diresmikan oleh Khalifah Umar bin Khattab r.a. pada tahun 16 H dengan menjadikan peristiwa Hijrah Rasulullah SAW sebagai tonggak permulaan penanggalan.",
    },
    "1-10": {
      title: "Hari Asyura & Kemenangan Nabi Musa 'alaihissalam",
      category: "Sejarah Kenabian & Tragedi Karbala",
      source: "Shahih Bukhari & Muslim, Al-Bidayah wan Nihayah (Ibnu Katsir)",
      blurb: "Hari diselamatkannya Nabi Musa a.s. dan Bani Israil dari kejaran Fir'aun di Laut Merah. Pada tanggal ini pula di tahun 61 H, cucu Rasulullah SAW, Sayyidina Husain bin Ali r.a., syahid di padang Karbala.",
    },

    // 2. SHAFAR
    "2-1": {
      title: "Perang Al-Abwa' (Waddan)",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum & Sirah Ibnu Hisyam",
      blurb: "Ghazwah (ekspedisi militer) pertama yang dipimpin langsung oleh Rasulullah SAW pada bulan Shafar tahun 2 H untuk menjalin perjanjian damai dengan Bani Dhamrah.",
    },
    "2-27": {
      title: "Malam Keberangkatan Hijrah dari Makkah",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum (Syaikh Shafiyyurrahman Al-Mubarakfuri)",
      blurb: "Rasulullah SAW meninggalkan rumah beliau yang dikepung pemuda Quraisy, sementara Ali bin Abi Thalib r.a. tidur menggantikan beliau di pembaringan. Rasulullah bersama Abu Bakar Ash-Shiddiq r.a. menuju Gua Tsur.",
    },

    // 3. RABIUL AWAL
    "3-1": {
      title: "Rasulullah SAW Berada di Gua Tsur",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum & Shahih Al-Bukhari",
      blurb: "Hari-hari persembunyian Rasulullah SAW dan Abu Bakar Ash-Shiddiq r.a. di dalam Gua Tsur selama 3 malam sebelum melanjutkan perjalanan agung menuju Yatsrib (Madinah).",
    },
    "3-8": {
      title: "Tiba di Quba & Membangun Masjid Pertama",
      category: "Sirah Nabawiyah",
      source: "Tarikh At-Thabari & Ar-Rahiq Al-Makhtum",
      blurb: "Rombongan Hijrah Rasulullah SAW tiba di perkampungan Quba pada hari Senin, 8 Rabi'ul Awwal tahun 1 H. Di sanalah beliau meletakkan batu pertama pembangunan Masjid Quba, masjid pertama yang dibangun atas dasar takwa.",
    },
    "3-11": {
      title: "Persiapan Masuk Kota Yatsrib (Madinah Munawwarah)",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum & Al-Bidayah wan Nihayah",
      blurb: "Setelah beberapa hari tinggal di Quba membina jamaah dan menanti kedatangan Ali bin Abi Thalib r.a., Rasulullah SAW bersiap memasuki jantung kota Yatsrib yang disambut penuh kerinduan oleh kaum Anshar dengan lantunan 'Thala'al Badru 'Alayna'.",
    },
    "3-12": {
      title: "Maulid Nabi SAW, Masuk Madinah, & Wafatnya Rasulullah",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum, Al-Bidayah wan Nihayah, Sirah Ibnu Hisyam",
      blurb: "Tanggal paling bersejarah dalam Islam: kelahiran Nabi Muhammad SAW (Tahun Gajah), tibanya beliau di Madinah dan salat Jumat pertama di Lembah Ranuna, serta wafatnya beliau pada hari Senin 12 Rabi'ul Awwal 11 H.",
    },

    // 7. RAJAB
    "7-27": {
      title: "Peristiwa Agung Isra' dan Mi'raj & Pembebasan Al-Quds",
      category: "Mukjizat Kenabian & Sejarah Islam",
      source: "Shahih Bukhari & Muslim, Wafayat Al-A'yan",
      blurb: "Perjalanan malam Rasulullah SAW dari Masjidil Haram ke Masjidil Aqsha lalu naik ke Sidratul Muntaha menerima perintah salat 5 waktu. Pada tanggal yang sama di tahun 583 H (1187 M), Shalahuddin Al-Ayyubi membebaskan kembali kota suci Al-Quds (Yerusalem).",
    },

    // 8. SYA'BAN
    "8-15": {
      title: "Malam Nisfu Sya'ban & Pengalihan Arah Kiblat",
      category: "Syariat & Ibadah",
      source: "Tafsir Ibnu Katsir & Sunan At-Tirmidzi",
      blurb: "Malam pertengahan bulan Sya'ban yang penuh ampunan. Pada bulan Sya'ban tahun 2 H, turun wahyu perintah peralihan arah kiblat kaum muslimin dari Baitul Maqdis menuju Ka'bah di Masjidil Haram (QS. Al-Baqarah: 144).",
    },

    // 9. RAMADHAN
    "9-17": {
      title: "Nuzulul Qur'an & Kemenangan Perang Badar Al-Kubra",
      category: "Sirah Nabawiyah & Al-Qur'an",
      source: "Ar-Rahiq Al-Makhtum & Al-Qur'an (QS. Al-Anfal: 41)",
      blurb: "Hari Al-Furqan (pembeda yang haq dan bathil): terjadinya perang besar pertama umat Islam di Badar pada 17 Ramadhan 2 H dengan kemenangan gemilang 313 mujahidin atas 1.000 kaum musyrikin Makkah.",
    },
    "9-20": {
      title: "Fathu Makkah (Pembebasan Kota Makkah)",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum & Shahih Al-Bukhari",
      blurb: "Rasulullah SAW bersama 10.000 pasukan muslimin memasuki kota Makkah tanpa pertumpahan darah pada 20 Ramadhan 8 H, menghancurkan 360 berhala di sekitar Ka'bah, dan mengumumkan pengampunan massal.",
    },

    // 10. SYAWWAL
    "10-1": {
      title: "Hari Raya Idul Fitri 1 Syawwal",
      category: "Hari Raya Islam",
      source: "Shahih Bukhari & Muslim",
      blurb: "Hari kemenangan setelah sebulan penuh berpuasa Ramadhan. Pertama kali disyariatkan dan dirayakan pada tahun 2 H setelah kemenangan di Perang Badar.",
    },
    "10-6": {
      title: "Perang Uhud (Ghazwah Uhud)",
      category: "Sirah Nabawiyah",
      source: "Ar-Rahiq Al-Makhtum & Al-Bidayah wan Nihayah",
      blurb: "Pertempuran di kaki bukit Uhud pada hari Sabtu, bulan Syawwal 3 H, di mana 70 sahabat terbaik gugur sebagai syuhada, termasuk paman Nabi, Hamzah bin Abdul Muththalib r.a. (Sayyidus Syuhada).",
    },

    // 12. DZULHIJJAH
    "12-9": {
      title: "Hari Wukuf di Arafah & Khutbah Wada'",
      category: "Ibadah Haji & Sirah",
      source: "Shahih Muslim (Hadits Jabir r.a. tentang Sifat Haji Nabi)",
      blurb: "Puncak ibadah haji di mana jutaan jamaah berkumpul di padang Arafah. Pada 9 Dzulhijjah 10 H, Rasulullah SAW menyampaikan Khutbah Perpisahan (Khutbatul Wada') yang meletakkan pilar hak asasi manusia dan kesempurnaan agama Islam.",
    },
    "12-10": {
      title: "Hari Raya Idul Adha (Yaumun Nahr)",
      category: "Hari Raya & Qurban",
      source: "Al-Qur'an (QS. Ash-Shaffat: 102-107) & Kitab Fiqih Sunnah",
      blurb: "Hari penyembelihan qurban mengenang keikhlasan dan keteladanan Nabi Ibrahim a.s. dan putranya Nabi Ismail a.s. dalam mentaati perintah Allah SWT.",
    },
  },

  // Mutiara Faedah Harian (Fallback bila tanggal tidak memiliki peristiwa khusus)
  daily_reflections: [
    {
      theme: "Karakter Waktu dalam Islam",
      text: "Waktu dalam Islam tidak sekadar angka yang berjalan linier, melainkan amanah umur yang berputar bersama keteraturan kosmos ciptaan Allah.",
      reference: "QS. Yunus: 5 — 'Dialah yang menjadikan matahari bersinar dan bulan bercahaya, dan Dialah yang menetapkan tempat-tempat orbitnya, agar kamu mengetahui bilangan tahun dan perhitungan (waktu).'",
    },
    {
      theme: "Keutamaan Puasa Sunnah",
      text: "Amalan puasa sunnah di hari-hari terang (Ayyamul Bidh 13, 14, 15) membersihkan jiwa dan menyeimbangkan ritme biologis tubuh bertepatan dengan tarikan pasang surut purnama.",
      reference: "HR. An-Nasa'i no. 2418 — 'Jika engkau berpuasa tiga hari dalam sebulan, maka berpuasalah pada tanggal tiga belas, empat belas, dan lima belas.'",
    },
    {
      theme: "Tadabbur Astronomi & Iman",
      text: "Mempelajari peredaran benda langit adalah salah satu jalan paling jernih untuk merasakan keagungan ilmu dan ketelitian Sang Maha Pencipta.",
      reference: "QS. Ali 'Imran: 190 — 'Sesungguhnya dalam penciptaan langit dan bumi, dan pergantian malam dan siang terdapat tanda-tanda (kebesaran Allah) bagi orang-orang yang berakal.'",
    },
  ],

  /**
   * Helper Functions
   */
  getHijriDateFromMasehi(dateObj) {
    const today = dateObj instanceof Date && !isNaN(dateObj) ? dateObj : new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");
    const dateStr = `${y}-${m}-${d}`;

    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const formattedMasehi = `${dayNames[today.getDay()]}, ${today.getDate()} ${monthNames[today.getMonth()]} ${y} M`;

    // Cari di tabel konfigurasi tahun 1448
    const yearConfig = this.hijri_month_starts[1448];
    if (yearConfig) {
      for (let monthId = 12; monthId >= 1; monthId--) {
        const mInfo = yearConfig[monthId];
        if (mInfo && dateStr >= mInfo.start) {
          const startD = new Date(mInfo.start + "T00:00:00");
          const curD = new Date(dateStr + "T00:00:00");
          const diffMs = curD - startD;
          const dayDiff = Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1;
          if (dayDiff >= 1 && dayDiff <= (mInfo.days || 30)) {
            return {
              day: dayDiff,
              monthId: monthId,
              year: 1448,
              masehiStr: formattedMasehi,
              isoDate: dateStr,
            };
          }
        }
      }
    }

    // Default fallback bila tidak tercakup
    return {
      day: 12,
      monthId: 3,
      year: 1448,
      masehiStr: formattedMasehi,
      isoDate: dateStr,
    };
  },

  getMoonPhaseForDay(day) {
    const d = Math.max(1, Math.min(30, Number(day) || 1));
    if (this.moon_phases[d]) {
      return this.moon_phases[d];
    }
    // Interpolasi bila hari tertentu belum ada entri spesifik
    if (d >= 4 && d <= 6) {
      return {
        phase_name: "Bulan Sabit Awal (Waxing Crescent)",
        arabic_phase: "الهِلَال المُتَنَامِي",
        illumination: Math.round(15 + (d - 4) * 10),
        type: "crescent",
        astro_info: "Piringan sabit bulan semakin membesar di langit barat.",
        worship_info: "Masa awal bulan Hijriah.",
      };
    } else if (d >= 9 && d <= 10) {
      return {
        phase_name: "Bulan Cembung Awal (Waxing Gibbous)",
        arabic_phase: "الأَحْدَب المُتَنَامِي",
        illumination: Math.round(65 + (d - 9) * 12),
        type: "gibbous",
        astro_info: "Lebih dari separuh piringan bulan bersinar terang.",
        worship_info: "Beberapa hari menjelang malam purnama dan puasa Ayyamul Bidh (13, 14, 15).",
      };
    } else if (d >= 16 && d <= 20) {
      return {
        phase_name: "Bulan Cembung Akhir (Waning Gibbous)",
        arabic_phase: "الأَحْدَب المُتَنَاقِص",
        illumination: Math.round(90 - (d - 16) * 9),
        type: "gibbous",
        astro_info: "Bulan terbit semakin malam setelah Isya, piringan terang perlahan menyusut dari sisi barat.",
        worship_info: "Fase pasca purnama.",
      };
    } else if (d >= 23 && d <= 27) {
      return {
        phase_name: "Bulan Sabit Tua (Waning Crescent)",
        arabic_phase: "الهِلَال المُتَنَاقِص",
        illumination: Math.round(35 - (d - 23) * 7),
        type: "crescent",
        astro_info: "Bulan sabit tampak melengkung menghadap timur saat dini hari dan fajar.",
        worship_info: "Menjelang akhir siklus bulan sinodis.",
      };
    }
    return this.moon_phases[1];
  },

  getHistoricalEvent(monthId, day) {
    const key = `${monthId}-${day}`;
    if (this.historical_events[key]) {
      return {
        found: true,
        ...this.historical_events[key],
      };
    }
    // Fallback bila tanggal belum memiliki peristiwa khusus
    const mInfo = this.months.find((m) => m.id === Number(monthId));
    const randomReflection = this.daily_reflections[day % this.daily_reflections.length];
    return {
      found: false,
      title: `Bulan ${mInfo ? mInfo.name : "Hijriah"} & Refleksi Waktu`,
      category: "Tadabbur & Makna Bulan",
      source: randomReflection.reference,
      blurb: `${mInfo ? mInfo.description + " " : ""}${randomReflection.text}`,
    };
  },

  getTikTokSeriesDay(masehiDateStr) {
    const anchorDate = new Date(this.tiktok_series.anchor_masehi + "T00:00:00");
    const targetDate = new Date((masehiDateStr || new Date().toISOString().split("T")[0]) + "T00:00:00");
    const diffDays = Math.round((targetDate - anchorDate) / (1000 * 60 * 60 * 24));
    return this.tiktok_series.anchor_day_count + diffDays;
  },
};
