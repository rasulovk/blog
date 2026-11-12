---
title: Bir sendmail baqı necə spam dövranı yaratdı və SPF, DKIM, DMARC-a gətirib çıxardı
date: 2026-11-12T00:00:00
tags:
  - email-security
  - spam
  - sendmail
  - spf
  - dkim
  - dmarc
  - dns
  - phishing
description: 1978-ci ildən başlayaraq sendmail-in çevik dizaynı, Morris qurdu, yaşıl kartlar dəfəsi və PayPal-ın problemləri necə SPF, DKIM və DMARC standartlarının yaranmasına səbəb oldu — və bu gün e-poçt təhlükəsizliyini necə qoruyur
excerpt:
pubDate: 2026-11-12
category: Infosec
author:
  name: Kamil R
  role: Writer
featured: false
draft: false
---

## Giriş

1978-ci ilin may ayında Digital Equipment Corporation-dan olan marketoloq Qari Tyuerk, ARPANET-dəki 400 əməkdaşa DECSYSTEM-20 kompüterlərinin təqdimatına dəvət göndərdiyi zaman, spam e-poçt marketinqi sənayesinin atası olacağını bilmirdi.

Bununla belə, spam erası Tyuerkin özündən deyil, Erik Ollmenin mühəndislik həllindən başladı — o, üç uyğunsuz şəbəkəni vahid poçt çatdırılması sistemində birləşdirməyə çalışırdı. Aşağıda sendmail-in spam epidemiyasına necə gətirib çıxardığından və hazırda poçtda işləyən müdafiə mexanizmlərindən bəhs edəcəyəm.

## «Açıq» olduqda «yaxşı» demək idi

1970–1980-ci illərdə Berklidəki Universitetdən (RF-də arzuolunmaz elan edilmişdir) amerikalı proqramçı Erik Ollmen INGRES layihəsi üzərində işləyirdi. O, üç şəbəkə arasında məktubları ötürməyə kömək edəcək poçt demonu yazırdı: ARPANET (internetqabaqcıl halda), UUCP (UNIX sistemləri arasında kopiyalama) və BerkNet (universitet kampusu üçün sadə lokal şəbəkə). Hər şəbəkə üçün artıq öz proqram təminatı var idi, amma vahid həll yox idi.

1979-cu ilin sonunda Ollmen **delivermail** proqramını yazıb başa çatdırdı. O işləyirdi, amma pis işləyirdi, çünki konfiqurasiyası bütün mənbə kodlarına yazılmışdı və müxtəlif şəbəkələrdə ünvan formatları fərqli idi. ARPANET NCP-dən TCP/IP-ə keçdikdə və onunla birlikdə FTP-dən yeni SMTP protokoluna keçdikdə, köhnə protokollara söykənməyən poçt proqramları üçün yol açıldı.

Nəticədə, DNS host siyahılarını əvəz etdikdən sonra, delivermail tədricən **sendmail**-ə çevrildi və 1983-cü ildə ilk dəfə TCP/IP protokollarını ehtiva edən BSD 4.1c ilə birlikdə təchiz edildi.

Ollmen qərara gəldi ki, yeni poçt agenti qəribə mesajları rədd etməyəcək, əksinə onları ünvana çatdırmağa çalışacaq. Yanlış ünvan, qeyri-adi başlıq, başqa marşrutlaşdırma formatı — hamısı qayda yazma sistemi vasitəsilə keçir və təyinat şəbəkəsinin başa düşə biləcəyi formaya çevrilirdi. Nəticədə istənilən gələn mesaja dözümlülük açıq relyalar mədəniyyətini yaratdı — serverlər yalnız öz istifadəçiləri üçün deyil, istənilən şəxs üçün poçtu qəbul edir və yenidən göndərirdi.

Bu mühəndislik uyğunluğu möcüzəsinə görə sendmail dünya standartına çevrildi. 1990-cı illərin sonuna qədər onun üzərindən dünya üzrə bütün e-poçt trafikinin 70–80%-i keçirdi. Və bu serverlərin hər biri ona qoşula bilən hər kəs üçün məktubu yenidən göndərməyə hazır idi. Bu gün buna zəiflik deyərdilər, amma o dövrdə bu xüsusiyyət idi.

## Hər şeyi proqnozlaşdıran qurd

1988-ci il noyabrın 2-də Kornel aspirantı və NSA-dan kriptoqrafın oğlu Robert Tappan Morris, internetin ölçüsünü ölçməli olan proqramı işə saldı. Bir şey səhv getdi və qurd çoxalmağa başladı. O, 24 saat ərzində təxminən 6000 serveri sıradan çıxartdı — o dövrdə internetin ondan bir hissəsi.

Qeyd edək ki, Morris qurdu üç zəiflikdən istifadə edirdi:

- `fingerd` şəbəkə demonunda bufer daşması,
- `rsh`/`rexec` vasitəsilə zəif parollar,
- və sendmail-də «deşik».

Sendmail xüsusi debug rejiminə malik idi ki, bu da uzaq istifadəçiyə root hüquqları ilə shell əldə etməyə imkan verirdi. Qurd poçt serverinə qoşulurdu və aşağıdakı əmr ardıcıllığını ötürürdü:

```
DEBUGMAIL FROM:<nobody>
RCPT TO:<"| sed -e '1,/^$/d' | /bin/sh; exit 0">
DATA
```

Payp (`|`) ilə `RCPT TO` konstruksiyası sendmail-i məktubun gövdəsini birbaşa `/bin/sh` komanda interpreterinə ötürməyə məcbur edirdi. Bu «məktubun» gövdəsində həmin yükləyicini kompilyasiya və işə salan skript yerləşirdi. Server özü qurdun gövdəsini endirir, yığır və işə salırdı.

## «Yaşıl kartlar» erası

1994-cü il aprelin 12-də vəkillər Lorens Kanter və Marta Ziqel eyni anda Usenet daxilində 5500-dən çox mövzu sahəsinə yaşıl kartlar lotoreyası haqqında məlumat yerləşdirdilər. Bu, ilk iri miqyaslı kommersiya spamı idi, çünki aksiya onlara 25 000-dən çox ərizə və 100 000 min dollar gəlir gətirdi.

Kanter və Ziqel eyni mesajı müxtəlif insanlara göndərən skriptlə minlərlə qazanmağın mümkün olduğunu sübut etdilər. Sonradan onlar hətta «Information Superhighway-də necə var-dövlət qazanmaq olar»  kitabını yazdılar. O vaxtdan spam biznes modelinə çevrildi.

1990-cı illərin ortasında xüsusi skanerlər interneti gəzir, açıq retranslyasiya ilə sendmail serverlərini axtarır və milyonlarla məktub göndərmək üçün onlardan istifadə edirdi. Sizin server gündüz problemsiz işləyə bilərdi, amma axşam Vladivostokdan tanımadığınız bir adam onun vasitəsilə bəzi şeyləri böyütmək haqqında təkliflər göndərirdi. Nəticədə dolu növbələrin və qara siyahıların səbəblərini araşdıran adminlər əziyyət çəkirdi.

1996-cı ildə Pol Viksi (bəli, DNS server BIND implementasiyasını yazan elə o özü) MAPS RBL verilənlər bazasını yaratdı. Bu, spam göndərən IP ünvanlarının siyahısı idi və istənilən poçt serveri onu DNS vasitəsilə yoxlaya bilərdi. RBL ilk müdafiə xətti oldu, amma problemləri həll edə bilmədi.

## Spam-la mübarizənin səhv yolları

2003-cü ildə ABŞ Konqresi CAN-SPAM Act qəbul etdi — kommersiya elektron məktublarının göndərilməsi üçün ilk milli standartları müəyyən edən qanun. Bununla belə, spam-ın qadağan edilməsi əvəzinə qanun üç qaydaya əməl edildikdə onu leqallaşdırdı: məktubun düzgün mövzusu, göndərənin fiziki ünvanı və abunəlikdən çıxmaq üçün işlək link.

Nəticədə 2004-cü ildə spam bütün e-poçt trafikinin təxminən 70–80%-ni təşkil edirdi. Sistem sınırda idi, buna görə də qanunvericilik deyil, texnoloji həll tələb olunurdu — və o, ortaya çıxdı.

## DNS poçtla danışmağa başladıqda

2003-cü ilin iyun ayında sinqapurlu sahibkar Men Von Vonq, gələcəkdə SPF olacaq texnologiyanın ilk layihəsini dərc etdi — bu, domain sahibinə hansı serverlərin həmin domain-də geri ünvanlarla poçt göndərmək hüququna malik olduğunu göstərməyə imkan verən texnologiya.

2004-cü ildə Microsoft-un **Caller ID for E-Mail** texnologiyasını (göndərəni yoxlamaq üçün antifraud mexanizmi) təqdim etməsindən sonra, IETF SPF və Caller ID-ni vahid **Sender ID** standartında birləşdirmək məqsədilə işçi qrupu yaratdı. Lakin layihə patent mübahisələri və lisenziya problemlərinə görə iflas etdi. İcmail SPF orijinal versiyaya qayıtdı və 2006-cı ildə o, eksperimental **RFC 4408** oldu.

Və budur, 2007-ci ildə Hotmail elan etdi ki, istifadəçilərinə poçt çatdırmaq üçün SPF lazımdır. Bu bəyanatdan sonra korporasiyalar və provayderlər SPF qeydlərini konfiqurasiya etməyə qaçdılar:

```dns
v=spf1 ip4:192.0.2.0/24 ip4:198.51.100.1 include:_spf.google.com -all
```

Ancaq SPF 100% idarə edə bilmirdi — o, SMTP əmrində göstərilən `MAIL FROM` ünvanını yoxlayırdı, amma istifadəçi məktubun başlığındakı `From` sahəsini görürdü. Spamerlər məhz bu sahəni saxtalaşdırmağa başladılar: məsələn, oraya «bank.com-dan» yazırdılar, `MAIL FROM`-da isə öz domain-lərini göstərirdilər, buna görə də spam SPF-i dolaşıq salırdı. Kriptoqrafiyaya ehtiyac var idi…

## Yahoo bütün poçtu imzalamağı necə həll etdi

2004-cü ildə Yahoo mühəndisi Mark Delani **DomainKeys** e-poçt autentifikasiya texnologiyasını təqdim etdi. Göndəricinin IP-ni yoxlamaq əvəzinə, domain hər bir çıxan məktubu kriptoqrafik olaraq imzalayırdı. Lakin texnologiya ideal deyildi, çünki bütün domain üçün cəmi bir açar var idi və rotasiya mexanizmi yox idi.

Təxminən eyni vaxtda Cisco **Identified Internet Mail** standartını işləyib hazırlayırdı. Cim Fenton və Maykl Tomas rəqəmsal imza sistemi yaratdılar ki, bu da oxşar məsələni həll edirdi, amma formata fərqli yanaşma ilə.

2007-ci ildə Yahoo və Cisco sahibləri birləşdi və **DKIM** ortaya çıxdı. Ona daxil oldu:

- **selectors** — domain-ə müxtəlif xidmətlər üçün bir neçə açar saxlamağa və onları asanlıqla dəyişdirməyə imkan verən mexanizm;
- **canonicalization** — yenidən göndərmə zamanı kiçik dəyişiklikləri nəzərə almamaq imkanı;
- **body hash** — yalnız başlıqları deyil, məktubun gövdəsinin bütövlüyünü yoxlama.

Bununla belə, DKIM domain-in məktubu imzaladığını yoxlayırdı, lakin imzanı istifadəçinin gördüyü ilə əlaqələndirmirdi. Başlıqdakı `From` DKIM imzasındakı `d=` ilə fərqli ola bilərdi. İndi siyasət lazım idi.

## PayPal həllin təşəbbüskarı kimi

2009-cu ildə PayPal fişerlerin paypal.com adından milyonlarla məktub göndərdiyini, kredit kartı məlumatlarını oğurladığını, müştərilərin kütləvi şəkildə şikayət etdiyini və şirkətin hətta SPF və DKIM ilə belə heç nə edə bilmədiyini ilə üzləşdi.

Həll tapmaq üçün PayPal Google, Microsoft, Yahoo və digər böyük şirkətlərlə birləşdi **DMARC** protokolunu işləyib hazırlamaq məqsədilə. Bu, `From`-dakı domain-ə nisbətən SPF və/və ya DKIM yoxlamasından keçməyən məktublarla nə etmək barədə siyasət idi. DMARC-dan əvvəl SPF və DKIM tövsiyələr idi. Sonradan onlar öhdəliklərə çevrildi.

Məsələn, 2024-cü ildə Google və Yahoo kütləvi göndəricilər üçün yeni qaydalar tətbiq etdi — SPF, DKIM və DMARC konfiqurasiya edilmədən məktublar tez-tez spam-a düşürdü. İstənilən domain üçün SPF, DKIM və DMARC-u yoxlamaq olar:

```bash
# SPF
dig TXT gmail.com | grep "v=spf1"

# DKIM (seçici mütləq göstərilməlidir; məsələn, Google üçün adətən "google" və ya "default")
dig TXT google._domainkey.gmail.com

# DMARC
dig TXT _dmarc.gmail.com
```

## Epiloq

Hər dəfə siz bir məktub alıb o, fişinq deyildirsə, SPF, DKIM və DMARC işə düşür. Delivermail-dən, Morris qurdundan, yaşıl kartlar haqqında spam-dan və PayPal-ın problemlərindən doğan arxitektura bu gün də poçtunuzu qoruyur.

Hazırda spam e-poçt trafikinin təxminən 45–50%-ni təşkil edir, amma o, inkişaf edib. Viqara və Nigeriya şahzadələri əvəzinə «təhlükəsizlikçi həmkarlardan» fişinq, Claude-dan saxta hesab-fakturalar və dərhal pul köçürməyi xahiş edən «CEO»-dan məktublar alırıq. Autentifikasiya texnologiyaları domain fufinqilə mübarizə aparsalar da, sosial mühəndisliklə mübarizə apara bilmirlər — buna görə də indi iş sizdən asılıdır.

## Praktik tövsiyələr

- **SPF** qeydini qurmağa əmin olun və `-all` (hard fail) və ya `~all` (soft fail) ilə bitirin.
- **DKIM** üçün ən azı 2048 bitlik açar istifadə edin və açar rotasiyasını avtomatikləşdirin.
- **DMARC** siyasətini `p=none`-dən `p=quarantine`, sonra `p=reject`-ə keçirib **rua** və **ruf** alt domenlərini aktivləşdirin.
- SPF, DKIM və DMARC yoxlamalarının nəticələrini e-poçt başlıqlarında (`Authentication-Results`) mütləq yoxlayın.
- Göndərmə səhifələrinizdə real istifadəçiyə uyğun SPF/DKIM/DMARC rekordları barədə məlumat verin — bu, istifadəçi və təhlükəsizlik komandalarının reportlarından biridir.

## Nəticə

Biz heç vaxt tamamilə qalib gələcəyikmi, yoxsa bu daimi silah yarışıdır?

## İstinadlar

- [IETF — RFC 4408: Sender Policy Framework (SPF) for Authorizing Use of Domains](https://www.rfc-editor.org/rfc/rfc4408)
- [IETF — RFC 6376: DomainKeys Identified Mail (DKIM) Signatures](https://www.rfc-editor.org/rfc/rfc6376)
- [IETF — RFC 7489: Domain-based Message Authentication, Reporting, and Conformance (DMARC)](https://www.rfc-editor.org/rfc/rfc7489)
- [CISA — Email Security Best Practices](https://www.cisa.gov/email-security-best-practices)
- [Google — Email sender guidelines](https://support.google.com/a/answer/81126)

---

© 2026 МТ ФИНАНС MMC
