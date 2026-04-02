# Visual Regression Checklist

Bu dosya tema degisikliklerinden sonra manuel gorsel kontrol standardidir.

## Test Ortami

- Cihaz 1: Desktop 1440x900
- Cihaz 2: Mobile 390x844
- Tarayici: Chrome guncel surum
- Mod: Normal color mode

## Kritiklik Seviyesi

- P0: Header, Hero, Menu Filter, Offers CTA
- P1: Testimonials, Contact actions, Floating buttons
- P2: Footer, Loading skeleton, minor spacing

## Sayfa Bazli Kontrol

## 1) Ana Sayfa

- [ ] Header logo gradient desktop dogru
- [ ] Header CTA buton rengi amber dogru
- [ ] Mobile menu ac/kapa animasyonu normal
- [ ] Hero CTA amber gorunuyor
- [ ] Weekly Special Offers View Menu amber outline
- [ ] Offers Book Now gradient kart bazinda dogru
- [ ] Offers gorsel yuklenmezse gradient fallback dogru
- [ ] Testimonials gradient arkaplan ve kart contrast dogru
- [ ] Contact bolumunde 3 aksiyon butonu amber davranisi dogru
- [ ] Floating buttons renkleri ve konumlari dogru
- [ ] Footer metin kontrasti ve link hoverlari dogru

## 2) Menu Sayfasi

- [ ] Filter butonu amber outline
- [ ] Expand All amber outline
- [ ] Collapse All amber outline
- [ ] Secili filter badge amber dolu
- [ ] Secilsiz filter badge amber hover
- [ ] Vegetarian veya vegan badge amber tonunda
- [ ] Featured badge amber tonunda
- [ ] Kategori header amber arkaplan hover davranisi dogru

## 3) Booking Sayfasi

- [ ] Ana CTA ve ikincil aksiyonlar beklenen amber davranisinda
- [ ] Sayfa icindeki link ve odak ringleri bozulmamis

## Kabul Kriteri

- [ ] P0 maddelerde sifir hata
- [ ] P1 maddelerde kritik kontrast hatasi yok
- [ ] P2 maddeler notlanip sonraki iterasyona alinabilir

## Notlar

- Bu checklist her tema degisikligi PRinda tekrar kullanilir.
- Hata bulunduysa ilgili dosya yolu ve ekran goruntusu linki eklenir.
