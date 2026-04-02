# Semantic Bridge Rollout Plan

Amaç: Amber gorunumu bozmadan semantic class gecisini kontrollu yapmak.

## Prensipler

- Toplu amber -> brand degisimi yok
- Her adim tek veya az sayida dosya
- Her adim sonunda lint + build + P0 gorsel kontrol

## Asama 1 - Dusuk Riskli Alanlar

Hedef:

- Sadece metin ve border gibi dusuk etkili kullanımlar

Aday dosyalar:

- src/components/common/Footer.tsx
- src/components/sections/AboutSection.tsx
- src/components/sections/ContactSection.tsx

Kural:

- Buton ana renkleri ve CTAlar bu asamada degismeyecek

## Asama 2 - Orta Riskli Alanlar

Hedef:

- Menu ve section kapsayici alanlarda kontrollu semantic gecis

Aday dosyalar:

- src/components/MenuClient.tsx
- src/components/sections/TestimonialsSection.tsx

Kural:

- Filter ve badge gorunumu birebir korunmali

## Asama 3 - Yuksek Riskli Alanlar

Hedef:

- Navbar ve Offers gibi kritik bolgelerde semantic gecis

Aday dosyalar:

- src/components/common/Navbar.tsx
- src/components/sections/OffersSection.tsx

Kural:

- Offers fallback ve CTA stilleri bozulmamalı
- Navbar desktop ve mobile birlikte test edilmeli

## Test Kapilari

Her asama sonunda:

- pnpm run lint
- pnpm run build
- docs/theme/checklists/visual-regression-checklist.md P0 maddeleri

## Durus Kriteri

Asagidaki durumlardan biri olursa rollout durdurulur:

- Header veya CTA butonlarinda kontrast kaybi
- Menu filtrelerinde griye kayma
- Offers View Menu outline regressyonu

Durdurma durumunda:

- docs/theme/runbooks/theme-rollback-playbook.md uygulanir
