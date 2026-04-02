# Theme Rollback Playbook

Bu dosya tema degisikliklerinde regressyon olursa hizli ve kontrollu geri donus adimlarini tanimlar.

## Hedef

- Tam repo rollback yerine yalnizca sorunlu fazi geri almak
- Kullaniciya gorunen bozulmayi hizli sekilde durdurmak

## Faz Bazli Geri Donus Kapsami

## Phase 1 (Token Foundation)

Dosyalar:

- src/app/globals.css
- tailwind.config.ts
- docs/theme/foundation/theme-system-phase1.md

Geri donus karari:

- Yalniz token degisikligi kaynakli problem varsa

## Phase 2 (Primitive Safety)

Dosyalar:

- src/components/ui/button.tsx
- src/components/ui/badge.tsx
- src/components/sections/HeroSection.tsx

Geri donus karari:

- Buton, badge, odak ring veya hero CTA rengi bozulduysa

## Phase 3 (High Risk)

Dosyalar:

- src/components/common/Navbar.tsx
- src/components/sections/OffersSection.tsx
- src/components/sections/TestimonialsSection.tsx

Geri donus karari:

- Header, offers CTA, gradient fallback veya testimonials gorunumu bozulduysa

## Phase 4 (Medium/Low)

Dosyalar:

- src/components/MenuClient.tsx
- src/components/sections/AboutSection.tsx
- src/components/sections/ContactSection.tsx
- src/components/common/Footer.tsx

Geri donus karari:

- Menu filtre, section kartlari veya footer stilleri bozulduysa

## Operasyon Akisi

1. Sorunu scope et

- Hangi sayfa veya komponent bozuk netlestir
- Hangi faz dosyalarina denk geldigini bul

2. Son degisiklik halkasini geri al

- Once en son degisen dosyalardan basla
- Birden fazla faza ayni anda dokunma

3. Teknik dogrulama

- pnpm run lint
- pnpm run build

4. Gorsel dogrulama

- docs/theme/checklists/visual-regression-checklist.md uzerinden P0 maddeleri kontrol et

5. Karar

- Sorun cozulduysa rollback tamam
- Cozulmediyse bir onceki faz dosyalarina ilerle

## Acil Durum Kriteri

- Header tamamen bozuk
- CTA butonlari gri veya okunamaz
- Beyaz ekran veya kritik contrast sorunu

Bu durumda:

- En son faz degisiklikleri hemen geri alinir
- Sonrasinda faz-faz tekrar uygulanir

## Son Not

- Toplu mass replace asla rollback stratejisi olarak kullanilmaz.
- Her rollback sonrasi lint ve build zorunludur.
