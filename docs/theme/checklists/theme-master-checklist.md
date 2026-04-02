# Theme Migration Master Checklist

Bu dosya tema gecis planinin tek kaynak durum takibidir.

## Genel Durum Ozeti

- Durum: Kismen tamamlandi
- Strateji: Amber gorunumu korunarak guvenli gecis
- Son teknik durum: Lint ve build geciyor

## Phase 0 - Baseline Lock

- [x] Amber gorunumu koruma karari netlesti
- [x] Kapsam: toplu amber -> brand degisimi yasaklandi
- [ ] Gorsel baseline kaydi (desktop/mobile ekran goruntuleri) dosyaya alinmadi

## Phase 1 - Token Foundation

- [x] src/app/globals.css icinde aktif token katmani tanimlandi
- [x] src/app/globals.css icinde future token katmani eklendi (brand-next)
- [x] tailwind.config.ts icinde brand namespace tanimlandi
- [x] tailwind.config.ts icinde brandNext namespace tanimlandi
- [x] surface/text/success semantic namespace tanimlandi
- [x] docs/theme/foundation/theme-system-phase1.md dokumani olusturuldu

## Phase 2 - Primitive Safety

- [x] src/components/ui/button.tsx amber davranisina stabilize edildi
- [x] src/components/ui/badge.tsx amber davranisina stabilize edildi
- [x] Hero CTA override amber ile uyumlu hale getirildi
- [x] Menu filter, expand/collapse ve badge regressyonlari giderildi
- [x] Offers View Menu butonu amber outline olacak sekilde duzeltildi

## Phase 3 - High-Risk Components

- [x] src/components/common/Navbar.tsx tekrar eden classlar merkezi sabitlere tasindi
- [x] src/components/sections/OffersSection.tsx string split tabanli renk yapisi kaldirildi
- [x] src/components/sections/OffersSection.tsx typed colorKey + OFFER_COLOR_THEMES yapisina gecildi
- [x] src/components/sections/TestimonialsSection.tsx tekrar eden kritik classlar merkezi sabitlere tasindi
- [x] Offers image onError fallback renk mantigi guvenli hale getirildi

## Phase 4 - Medium/Low Risk Components

- [x] src/components/MenuClient.tsx tekrar eden amber classlar merkezi sabitlere tasindi
- [x] src/components/sections/AboutSection.tsx tekrar eden amber classlar merkezi sabitlere tasindi
- [x] src/components/sections/ContactSection.tsx tekrar eden amber classlar merkezi sabitlere tasindi
- [x] src/components/common/Footer.tsx tekrar eden classlar merkezi sabitlere tasindi
- [ ] src/components/common/FloatingButtons.tsx icin ek sertlestirme gerekirse backlog
- [ ] src/components/common/LoadingSkeleton.tsx icin ek sertlestirme gerekirse backlog

## Phase 5 - Verification

- [x] Lint kontrolleri tekrarli olarak calistirildi ve gecti
- [x] Build kontrolleri tekrarli olarak calistirildi ve gecti
- [x] Kalici visual regression checklist dokumani olusturuldu
- [ ] Desktop + mobile ekran kayitlari checklist ile birlikte arsivlenmedi

## Scope ve Dosya Gercegi

- [x] HomePage aktif sectionlari dogrulandi: Hero, About, Offers, Testimonials, Contact
- [x] ChefPicksSection aktif degil (HomePage icinde yorum satiri)
- [x] TestimonialsSection_new dosyasi mevcut degil

## Kalan Isler (Net Backlog)

- [ ] Visual baseline paketi olustur (desktop + mobile, ana kritik bolumler)
- [x] Formal visual regression checklist dosyasi olustur
- [ ] brandNext icin gercek yeni palet degerlerini urun karari ile netlestir
- [x] Semantic bridge rollout plani: dusuk riskli metin/border alanlarinda kontrollu deneme
- [x] Rollback playbook dosyasi olustur (hangi dosya bozulursa hangi adim geri alinacak)

## Olusturulan Operasyon Dokumanlari

- [x] docs/theme/checklists/visual-regression-checklist.md
- [x] docs/theme/runbooks/theme-rollback-playbook.md
- [x] docs/theme/plans/semantic-bridge-rollout-plan.md
- [x] docs/theme/checklists/visual-baseline-manifest.md

## Sonuc

- Tamamlanan kisim: Temel altyapi ve riskli bolgelerde stabilizasyon buyuk oranda tamam
- Tamamlanmayan kisim: Formal gorsel test artefaktlari ve gercek brandNext devreye alma asamasi
