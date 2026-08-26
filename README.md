# Situs pribadi Jundi Abdullah

Situs statis (HTML, Tailwind CSS lewat CDN, Alpine.js) untuk GitHub Pages.

## Menjalankan secara lokal

Buka `index.html` di peramban, atau dari folder proyek:

```bash
npx --yes serve .
```

## Mengisi data asli

Sunting `js/site.js`:

- `github`, `linkedin`, `youtube`, `email`
- daftar `projects` (judul, tautan demo, repositori Laravel/web)
- daftar `kajian` (judul dan URL YouTube)
- daftar `materi` jika ingin menambah slide/pelatihan

Ganti `USERNAME` di tautan sebelum mempublikasikan.

## Deploy ke GitHub Pages

1. Buat repositori GitHub (contoh: `jundiabdullah.github.io` untuk situs pengguna, atau repositori proyek biasa).
2. Unggah seluruh isi folder ini ke cabang `main`.
3. Di GitHub: **Settings → Pages → Build and deployment**.
   - Source: **Deploy from a branch**
   - Branch: `main` / folder `/ (root)`
4. Setelah beberapa menit, situs tersedia di `https://<username>.github.io/` atau `https://<username>.github.io/<nama-repo>/`.

Jika repositori **bukan** `username.github.io`, tautan relatif (`./css`, `./js`) tetap berfungsi asal situs di-root-kan ke folder repositori tersebut.

## Catatan desain

Tipografi: Cormorant Garamond + Source Sans 3. Palet: kertas hangat, hijau tinta, aksen emas.
