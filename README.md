# Broadway Kebab

Broadway Kebab icin gelistirilmis, statik export odakli bir Next.js 15 uygulamasi.
Proje, restoran tanitim sayfasi + menu + online rezervasyon akislarini hızlı ve platformlar arasi tasinabilir sekilde sunar.

## 1. Proje Ozeti

Bu uygulama:

- Next.js App Router kullanir.
- Build sonunda tamamen statik cikti uretir.
- Ana veri kaynagini kod icerisindeki sabit verilerden alir.
- TheFork rezervasyon widget entegrasyonu icerir.
- pnpm tabanli gelistirme ve deploy akisina sahiptir.

Canli sayfalar:

- / (Ana sayfa)
- /menu (Menu sayfasi)
- /booking (Rezervasyon sayfasi)

## 2. Teknoloji Yigini

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- pnpm

## 3. Mimari ve Veri Akisi

### 3.1 Statik Export Yaklasimi

Proje static export modunda calisir.
Build sirasinda sayfalar prerender edilir ve out klasorune yazilir.

Onemli noktalar:

- next.config.ts icinde output: export tanimlidir.
- Dist klasoru out olarak ayarlanmistir.
- Image optimizasyonu static export ile uyumlu olacak sekilde unoptimized: true kullanir.

### 3.2 Veri Kaynagi

Uygulama runtime asamasinda public/data altindaki JSON dosyalarini okumaz.
Icerik ve menu verisi src/lib/static-data.ts icindeki sabitlerden gelir.

Bu sayede:

- Deploy sonrasi dosya okuma bagimliligi azalir.
- Static hosting ortamlariyla uyum artar.

### 3.3 Rezervasyon Akisi

/booking sayfasi TheFork iframe widget gosterir.
Iframe yuklenmezse kullanici 5 saniye icinde TheFork baglantisina otomatik yonlendirilir.

## 4. Proje Dizin Yapisi

Temel klasorler:

- src/app: App Router sayfalari
- src/components: UI ve sayfa bolumleri
- src/lib: Sabit veri ve yardimci dosyalar
- public: Statik dosyalar, deploy yardimci dosyalari
- out: Build sonrasi statik cikti

## 5. Gereksinimler

- Node.js 18 veya ustu
- pnpm

Opsiyonel:

- Vercel CLI
- Wrangler

## 6. Kurulum

```bash
pnpm install
```

## 7. Gelistirme Ortami

### 7.1 Development Server

```bash
pnpm run dev
```

Varsayilan olarak http://localhost:3000 uzerinden calisir.

### 7.2 Lint Kontrolu

```bash
pnpm run lint
```

## 8. Build ve Lokal Calistirma

### 8.1 Uretim Build

```bash
pnpm run build
```

Bu komut:

1. Next.js static build olusturur.
2. public altindaki deploy yardimci dosyalarini out klasorune kopyalar:
   - \_headers
   - \_redirects
   - vercel.json
   - \_functions/[[path]].js

### 8.2 Build Ciktisini Lokal Sunma

```bash
pnpm run serve
```

veya

```bash
pnpm run start
```

Not: start scripti out klasorunu 3000 portunda serve eder.

### 8.3 Zip Release Paketi Olusturma

Asagidaki komut release tipi bir zip olusturur:

- Once build alir
- out/images/menu klasorunu siler
- out klasorunun kendisini degil, sadece icerigini zipler
- Tarih-saat iceren dosya adi uretir (ornek: broadwaykebab-static-build-20260402-1927.zip)

```bash
pnpm run release:zip
```

## 9. Test Rehberi

Bu projede formal test framework scripti yoktur.
Pratik test sureci lint + build + manuel smoke test seklindedir.

### 9.1 Hızlı Dogrulama

```bash
pnpm run lint && pnpm run build
```

### 9.2 Lokal Smoke Test

1. Build al:

```bash
pnpm run build
```

2. Static ciktıyı calistir:

```bash
pnpm run start
```

3. Asagidaki sayfalari tarayicida kontrol et:

- /
- /menu
- /booking

4. Rezervasyon fallback senaryosu:

- /booking sayfasinda widget acilmadigi durumda yonlendirme calisiyor mu kontrol et.

### 9.3 Tip Kontrolu (Opsiyonel)

Projede ayri bir typecheck scripti olmasa da su komutla kontrol yapilabilir:

```bash
pnpm exec tsc --noEmit
```

## 10. Deploy Rehberi

### 10.1 Vercel

```bash
pnpm run deploy:vercel
```

Not: Komut build alir ve manuel upload hatirlatmasi basar.

### 10.2 Netlify

```bash
pnpm run deploy:netlify
```

Build sonrasi out klasorunu publish et.

### 10.3 GitHub Pages

```bash
pnpm run deploy:github
```

Bu komut out/.nojekyll dosyasini olusturur.
CI tarafinda .github/workflows/deploy.yml pnpm ile build alir.

### 10.4 Cloudflare Pages

```bash
pnpm run deploy:cloudflare
```

Cloudflare ayarlari:

- Build command: pnpm run build
- Build output directory: out
- Node.js: 18.x+

## 11. Konfigurasyon Dosyalari

- next.config.ts: static export ve performans ayarlari
- middleware.ts: guvenlik basliklari ve cache davranisi
- vercel.json: Vercel ayarlari
- wrangler.toml: Cloudflare Wrangler ayarlari
- public/\_headers: static host icin header tanimlari
- public/\_redirects: static host icin yonlendirme tanimlari

## 12. Guvenlik Notlari

Middleware katmaninda temel guvenlik basliklari eklenir:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

Not: /booking sayfasindaki TheFork entegrasyonu iframe yuklenemezse otomatik dis baglanti yonlendirmesi yaptigi icin kullanici akisinda kopma olmaz.

## 13. Icerik Guncelleme Rehberi

Menu, iletisim, hero, navbar ve testimonial iceriklerini guncellemek icin ana kaynak:

- src/lib/static-data.ts

Icerik degisikligi sonrasi onerilen adimlar:

1. pnpm run lint
2. pnpm run build
3. / ve /menu sayfalarini manuel kontrol et

## 14. Tema Dokumantasyonu

Tema gecisi ile ilgili tum operasyon dosyalari tek bir dizin altinda toplandi:

- [docs/theme/README.md](docs/theme/README.md)

Ana dokumanlar:

- Master durum takibi: [docs/theme/checklists/theme-master-checklist.md](docs/theme/checklists/theme-master-checklist.md)
- Visual regression checklist: [docs/theme/checklists/visual-regression-checklist.md](docs/theme/checklists/visual-regression-checklist.md)
- Visual baseline manifest: [docs/theme/checklists/visual-baseline-manifest.md](docs/theme/checklists/visual-baseline-manifest.md)
- Semantic rollout plani: [docs/theme/plans/semantic-bridge-rollout-plan.md](docs/theme/plans/semantic-bridge-rollout-plan.md)
- Rollback playbook: [docs/theme/runbooks/theme-rollback-playbook.md](docs/theme/runbooks/theme-rollback-playbook.md)
- Phase 1 foundation notlari: [docs/theme/foundation/theme-system-phase1.md](docs/theme/foundation/theme-system-phase1.md)

## 15. Sık Karsilasilan Sorunlar

### 15.1 Temiz Kurulum

```bash
rm -rf .next out node_modules
pnpm install
pnpm run build
```

### 15.2 Port Cakismasi

3000 portu doluysa dev komutunu farkli portla calistir:

```bash
pnpm exec next dev -p 3001
```

### 15.3 Build Sonrasi Dosya Eksigi

Build komutu, deploy dosyalarini out klasorune kopyalar.
CI veya lokal ortamda copy adimlarinin atlanmadigindan emin ol.

## 16. Komut Ozeti

```bash
pnpm install
pnpm run dev
pnpm run lint
pnpm run build
pnpm run release:zip
pnpm run serve
pnpm run start
pnpm run deploy:github
pnpm run deploy:netlify
pnpm run deploy:vercel
pnpm run deploy:cloudflare
```
