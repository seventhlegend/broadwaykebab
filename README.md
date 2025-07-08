# Broadway Kebab - Static Website

Bu proje, Broadway Kebab restoranı için statik Next.js uygulamasıdır. Otomatik optimizasyonlar ve performans iyileştirmeleri içerir.

## 🚀 Özellikler

- ✅ **Statik Export**: Tamamen statik HTML/CSS/JS çıktısı
- ✅ **Performans Optimizasyonu**: Lazy loading, image optimization, bfcache
- ✅ **Responsive Design**: Tüm cihazlarda uyumlu
- ✅ **SEO Optimized**: Meta tags ve sitemap
- ✅ **Modern Stack**: Next.js 15, React 19, Tailwind CSS

## 🛠️ Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Lint kontrolü
npm run lint
```

## 📦 Build ve Deploy

### Statik Build

```bash
# Statik build oluştur
npm run build

# Build çıktısı `out/` klasöründe olacak
```

### Deploy Seçenekleri

#### 1. Vercel Deploy

```bash
npm run deploy:vercel
# Vercel CLI ile: vercel --prod
```

#### 2. Netlify Deploy

```bash
npm run deploy:netlify
# out/ klasörünü Netlify'a yükle
```

#### 3. GitHub Pages Deploy

```bash
npm run deploy:github
# GitHub Actions otomatik deploy yapacak
```

#### 4. Manual Deploy

```bash
# Build sonrası out/ klasörünü herhangi bir statik hosting'e yükle
npm run build
```

## 🌐 Local Test

```bash
# Statik dosyaları local'de test et
npm run serve
# veya
npx serve out
```

## 📁 Dosya Yapısı

```
out/                    # Statik build çıktısı
├── index.html         # Ana sayfa
├── menu/index.html    # Menü sayfası
├── _next/static/      # Optimized assets
├── images/            # Resimler
├── .htaccess          # Apache yapılandırması
├── _redirects         # Netlify yapılandırması
└── .nojekyll          # GitHub Pages için
```

## ⚙️ Yapılandırma Dosyaları

- **next.config.ts**: Next.js statik export yapılandırması
- **vercel.json**: Vercel deploy yapılandırması
- **public/.htaccess**: Apache sunucu yapılandırması
- **public/\_redirects**: Netlify yapılandırması
- **.github/workflows/deploy.yml**: GitHub Actions CI/CD

## 🚀 Deploy URL'leri

Bu projeyi aşağıdaki platformlarda deploy edebilirsiniz:

- **Vercel**: [vercel.com](https://vercel.com)
- **Netlify**: [netlify.com](https://netlify.com)
- **GitHub Pages**: Repository Settings > Pages
- **AWS S3**: Static website hosting
- **Firebase Hosting**: `firebase deploy`

## 📋 Build Gereksinimleri

- Node.js 18+
- npm veya yarn
- 100MB+ disk alanı

## 🔧 Troubleshooting

### Build Hataları

```bash
# Cache temizle
rm -rf .next out node_modules
npm install
npm run build
```

### Image Optimization Hataları

- Resimler `public/images/` klasöründe olmalı
- `unoptimized: true` ayarı aktif
- Desteklenen formatlar: WEBP, AVIF, PNG, JPEG

## 📞 İletişim

Herhangi bir sorun için issue açabilirsiniz.
