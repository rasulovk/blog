---
title: "OT mühəndis laptopları: Fiziki təchizatdan başlayan hücum ssenariləri"
source: https://cyberhub.az/ot-muhendis-laptoplari/
author:
  name: Vidadi Eyvazli
  role: Writer
date: 2025-07-23
description: Bu məqalədə bir çox müəssisənin görmədiyi, lakin hacker-ların çox yaxşı bildiyi kritik zəif nöqtəyə — OT mühəndislərinin portativ cihazlarına diqqət
category: ICS-SCADA
---

Zavodlarda, enerji stansiyalarında və sənaye obyektlərində **Operational Technology (OT)** sistemlərinin təhlükəsizliyi illərdir əsas müzakirə mövzusudur. Əksər təşkilatlar diqqəti firewall-lara, SCADA proqram təminatına və fiziki təcridə yönəldir. Lakin **real həyatda hücumların çoxu insanla — daha dəqiq desək, mühəndis laptopları ilə başlayır.**

Bu məqalədə bir çox müəssisənin görmədiyi, lakin hacker-ların çox yaxşı bildiyi kritik zəif nöqtəyə — **OT mühəndislərinin portativ cihazlarına** diqqət yetirəcəyik. Real hücum ssenarisinə əsaslanaraq izah edəcəyik ki, necə sadə bir laptop zavodun istehsalını dayandıra və ya kritik infrastruktura nüfuz edə bilər.

### 🧨 Hücum Ssenarisi: Zavoda zərərli proqram təminatı daşıyan vendor laptopu

> 🛠️ *Mühəndis bir vendor şirkətindən gəlir. O, PLC (Programmable Logic Controller) parametrlərini dəyişmək üçün öz Windows 7 laptopunu sistemə qoşur. Bu laptop sonuncu dəfə başqa bir müəssisədə istifadə olunub və orada zərərli proqram yüklənib. Antivirus sistemi yoxdur, Windows yenilənməyib. O, laptopu SCADA sisteminə Ethernet ilə birləşdirir. 5 dəqiqə sonra — zərərli proqram lokal şəbəkədə yayılmağa başlayır…*

Bu səhnə uydurma deyil. **2015-ci ildə Ukrayna elektrik şəbəkəsinə hücum zamanı istifadə olunan BlackEnergy zərərli proqramı**, ilk olaraq mühəndis cihazları vasitəsilə daxil edilmişdi. Sistem dayandı, işıqlar söndü, və əhali qaranlıqda qaldı.

📌 **Əsas fikir:** OT mühitinə daxil olan hər cihaz — bir Trojan atıdırsa, firewall heç nə edə bilməz.

---

### 🛑 OT mühitində bu qədər risk niyə mövcuddur?

#### 🔧 Texniki səbəblər:

- **Patch gecikdirilir və ya heç tətbiq olunmur** – çünki “sistem işləyir, dəymə”.
- **Antivirus sistemləri zəif və ya deaktivdir**, çünki bəzi SCADA proqramları ilə uyğun gəlmir.
- **USB portları açıqdır** – operatorlar, mühəndislər gündəlik bu portlardan istifadə edir.
- **Şəbəkə təhlil və loglama imkanları yoxdur**, çünki çox vaxt real-time sistemlərdə CPU və RAM məhduddur.

#### 👷♂️ İdarəetmə səbəbləri:

- Vendor mühəndislərinə çox geniş səlahiyyətlər verilir.
- Bəzi mühəndislər eyni laptopu **bir neçə müəssisədə istifadə edir**.
- IT və OT komandaları bir-birindən **tamamilə ayrıdır**, aralarında görünməz “sədd” var.
- **“Bizdə internet yoxdur, heç kim girə bilməz” düşüncəsi** — təhlükəli yanlışlıqdır.

---

### 🔍 Real Məsələlər və Təhlükə İzahı

| Hücum Mənbəyi | Real Təsiri |
| --- | --- |
| 💻 Mühəndis laptopu | Virus, trojan, ya da keylogger sistemə daşına bilər |
| 🔌 USB vasitəsilə infeksiya | SCADA və PLC konfiqurasiyaları dəyişdirilə bilər |
| 📶 Offline laptop + Ethernet | Air-gapped sistemlərə yol açılır |
| 🛜 VNC və ya TeamViewer | Uzaqdan nəzarət üçün “backdoor” buraxılır |

---

## 🔐 Müdafiə Yolları – Real Təcrübəyə Əsaslanan Yanaşmalar

### ✅ 1. İki Ayrı Mühəndis Laptopu – Funksional Ayrılıq və Rəqəmsal Gigiyena

Mühəndislərin eyni laptopla həm ofis işlərini (email, veb gəzinti), həm də sahədəki PLC və SCADA sistemlərini idarə etməsi böyük risk yaradır. Bu riski azaltmaq üçün:

- **“Təmiz laptop”**: Yalnız **offline mühəndislik işləri** üçün nəzərdə tutulur. Bu laptopda heç bir antivirus söndürülmür, internetə çıxış yoxdur, yalnız TIA Portal, Studio 5000 kimi proqramlar quraşdırılıb.
- **“Əlaqə laptopu”**: E-poçt, sənəd yükləmə və test məqsədli internet işləri üçün istifadə olunur. Bu cihaz mütəmadi antivirus ilə yoxlanılır və heç vaxt OT şəbəkəsinə qoşulmur.
- **USB data köçürməsi** yalnız antivirusla yoxlanılmış, **“USB Gateway”** ilə filtrasiya olunmuş mühitdə aparılır (məsələn: Kanguru Defender, Honeywell SMX Gateway kimi cihazlar istifadə olunur).

🔎 *Praktik nümunə*: Bir neft emalı zavodu bu modeli tətbiq etdikdən sonra 2 fərqli zərərli fayl yalnız “əlaqə laptopu”nda aşkarlanmışdı. OT mühiti isə təsirlənməmişdi.

---

### ✅ 2. USB və Ethernet Portlarının İdarəedilməsi – Fiziki Port, Virtual Təhlükə

USB-lər və Ethernet portları zərərli proqramların və ya casus alətlərin sistemə daxil olması üçün “arxa qapıdır”. Bunun qarşısını almaq üçün:

- **Endpoint təhlükəsizlik agentləri (EDR/XDR)** istifadə olunur (məs. CrowdStrike, Trellix, BitDefender GravityZone).
- USB portları yalnız **ağ siyahıya salınmış** cihazlar üçün aktiv olur.
- **USB activity logs** real vaxtda izlənir və qeydə alınır. Şübhəli cihazlar avtomatik bloklanır.
- **Ethernet portları** NAC (Network Access Control) ilə avtomatik təyin olunur — tanımadığı MAC ünvanı ilə qoşulan cihazlara “karantin VLAN” verilir.

🔎 *Real ssenari*: Bir istehsalat müəssisəsində texnik cihaza “evdən gətirdiyi” USB ilə malware ötürmüşdü. NAC port scanning ilə bu cihazı 3 dəqiqə içində blokladı.

---

### ✅ 3. Virtual Mühəndislik Mühitləri (VDI) – “Hərəkət et, amma fiziki toxunma”

Ən təhlükəsiz metodlardan biri mühəndislərin **lokal laptopla yox, virtual mühitlə** işləməsidir:

- SCADA və mühəndis proqram təminatı (TIA Portal, WinCC və s.) **datacenter-dəki serverdə işləyir**
- Mühəndis yalnız RDP və ya Citrix üzərindən qoşulur. **RDP** idarə olunan IT mühitləri üçün uyğun ola bilər — amma **kritik OT sistemləri üçün heç də ideal seçim deyil**, əgər ciddi şəkildə sərtləşdirilməyibsə (hardened). **Citrix və ya ona bənzər VDI platformaları** isə **uzaqdan mühəndislik girişləri üçün daha təhlükəsiz və idarəolunan** alternativlərdir.
- Hər mühəndis üçün **fərdi sessiya**, dəyişiklik qeydləri, ekran görüntüləri və audit loglar tutulur
- Bütün sistem mütəmadi snapshot alınır – bir pozuntu olarsa, əvvəlki təmiz vəziyyətə qayıtmaq mümkündür

🔎 *Tətbiq nümunəsi*: Smart su təmizləmə zavodunda VDI sistemi sayəsində 5 mühəndis eyni anda sistemə daxil olur, lakin heç biri lokal SCADA sisteminə toxunmur.

---

### ✅ 4. Vendorlar üçün VLAN Ayrılması və Giriş Monitorinqi

Vendor cihazları çox vaxt ən böyük təhlükədir, çünki onlar həm müvəqqəti, həm də “etibarlı” hesab olunur. Amma:

- Hər vendor üçün **ayrı VLAN** ayrılır. Bu VLAN yalnız lazımi portlara çıxış əldə edir.
- Vendor girişləri **VPN + MFA ilə autentifikasiya edilir** və bütün sessiyalar **loglanır**.
- Vendor cihazı yalnız **“karantin şəbəkəsi”ndə test edildikdən sonra** əsas şəbəkəyə buraxılır.
- Əgər sistem buna imkan verirsə, **“jump server”** arxasından daxilolma təmin edilir (Vendor → Jump Server → SCADA/PLC)

🔎 *Real tətbiq*: Bir enerji stansiyası vendor laptoplarına xüsusi “Limited Access VLAN” yaratmışdı. Bu VLAN 443 və 502 portları ilə limitlənmişdi. Audit zamanı, bir cihazın TOR bağlantısı cəhdi bu sayədə aşkarlanıb.

---

### ✅ 5. Sanitasiya Zonasının Qurulması – “Qarşıdan gələnləri təmizləyin”

Sistemə daxil olan hər portativ cihazın əvvəlcə **təcrid zonasında** yoxlanılması — fiziki və ya virtual sədd yaratmaqla mümkündür:

- Cihaz əvvəlcə (sandbox) mühitində açılır.
- Antivirus skanları, EDR analizi və file integrity check aparılır.
- USB-lər xüsusi gateway cihazlarından (məs. Honeywell SMX, Garrison Data Diode) keçir.
- Yalnız **“pass” alan cihazlar** əsas sistemə fiziki və ya virtual olaraq çıxış əldə edir.

🔎 *Nümunə*: Təhlükəsizlik layihəsində SMX USB gateway vasitəsilə skan edilən 17 USB-dən 2-də zərərli makro-fayl aşkarlanıb. Onlar əsas sistemə çatmamış silinib.

---

### 📌 Nəticə

OT mühitində təhlükəsizlik sadəcə SCADA proqramı və firewall ilə təmin olunmur. **İnsanın özü** — xüsusilə də texniki personal və vendor mühəndisləri — hücum səthinin bir hissəsidir.

> **“Bir USB, bir portativ cihaz, bir tənbəllik — milyonlarla manatlıq istehsalı dayandıra bilər.”**

Bu səbəbdən OT mühəndis cihazları **kritik aktiv** kimi idarə olunmalı, nəzarət edilməli və qorunmalıdır.