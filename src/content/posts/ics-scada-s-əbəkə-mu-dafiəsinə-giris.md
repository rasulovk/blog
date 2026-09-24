---
title: "ICS-SCADA: Şəbəkə Müdafiəsinə Giriş"
source: https://cyberhub.az/ics-scada-giris/
author:
  name: Kamil R.
  role: Writer
date: 2025-09-11
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: ICS-SCADA
---

> “Kritik infrastrukturun qorunması = gələcəyimizin qorunmasıdır.”

Saytımızda OT ICS-SCADA hucum ssenarilər mövzusuna həsr olunmuş ayrıca bir məqalə mövcuddur. Mən bu mövzuda daha ətraflı məlumat təqdim etmək istərdim. Əgər həmin məqalə ilə hələ tanış olmamısınızsa, aşağıdakı linkə keçid edərək oxumağınızı tövsiyə edirəm.

[OT hucum ssenariləri](https://cyberhub.az/ot-muhendis-laptoplari/)

### ICS/SCADA Ümumi Baxış

**SCADA:** Supervisory Control and Data Acquisition sistemi (SCADA) bəlkə də daha geniş Sənaye İdarəetmə Sistemləri (ICS) termini ilə əlaqələndirilən ən çox istifadə olunan termindir. SCADA əsasən geniş coğrafi ərazidə bir çox ICS növünün qruplaşdırılmasını ifadə edir, şəkildəkı kimi. SCADA sistemi ümumi sistemi təşkil edən bütün fərdi idarəetmə və kommunikasiya komponentlərindən ibarətdir. SCADA mühitlərinin klassik nümunələrinə su təsərrüfatları, qaz kəmərləri və enerji ötürmə və paylama sistemləri daxildir.

**DCS:** Distributed Control Systems (DCS) adətən böyük müəssisələrdə, məsələn neft və qaz emalı zavodları və kimya zavodlarında minlərlə I/O nöqtəsini avtomatlaşdırmaq üçün istifadə olunan böyük sistemlərdir. DCS və SCADA arasındakı fərqlər çox azdır, amma ənənəvi olaraq SCADA daha çox coğrafi cəhətdən yayılmış əməliyyatlarda, məsələn su/çirkab su və ya enerji paylamasında istifadə olunmuşdur, DCS isə adətən bir zavodun dörd divarı daxilində yerləşir. DCS-lərin xüsusiyyətləri onu bir qədər unikal edir. DCS-lər adətən yüksək mühəndisliklə hazırlanmış və tədarükçü tərəfindən müəyyən edilmiş ciddi yerləşdirmə və arxitektura qaydalarına riayət edən dözümlü sistemlərdir. DCS-lər prosesi izləmək və idarə etmək üçün Unix, Linux və ya Microsoft əsaslı terminalları iş stansiyaları kimi birləşdirir və adətən yüksək əlçatanlığı təmin etmək üçün çoxsaylı şəbəkəli kompüterlər və şəbəkə switch texnologiyasını istifadə edən redundant şəbəkəyə qoşulur. DCS nümunələrinə Honeywell FTE və Emerson Delta VPLC daxildir.

### ICS-SCADA Təhlükəsizliyi

Bu bolümdə biz təhlükəsizlik modelinin komponentlərinə nəzər salacağıq. Baxmayaraq ki, əsas müzakirə mövzumuz Sənaye İdarəetmə Sistemləri (ICS) və Müşahidə və Məlumatların Toplanması Sistemləri (SCADA) olacaq, tələblərin böyük bir qismi İnformasiya Texnologiyaları (IT) sektorunda tətbiq olunan standart tələblərlə oxşarlıq təşkil edir.

ICS/SCADA sistemləri də daxil olmaqla istənilən şəbəkənin və ya sistemin əsas elementlərindən biri potensial təsir vektorlarıdır. Bu vektorlar şəbəkə və ya sistem üzərində riskləri müəyyənləşdirərək qiymətləndirmə aparmaq üçün istifadə olunur.

Oxşarlıqlar mövcud olsa da, ICS/SCADA sistemlərinin IT mühitindən əhəmiyyətli dərəcədə fərqləndiyi bir sıra məqamlar da var. Bu modulda biz həm həmin fərqlərə, həm də oxşar cəhətlərə diqqət yetirəcəyik.

## Tipik Təhlükəsizlik Modeli

![ICS-SCADA Şəbəkə Müdafiəsinə Giriş](https://cyberhub.az/wp-content/uploads/2025/09/ChatGPT-Image-Sep-10-2025-03_13_12-PM.png "ICS-SCADA: Şəbəkə Müdafiəsinə Giriş 1")

Bu modelə baxarkən başa düşmək vacibdir ki, yuxarıdakı nümunə bizim **normal məlumat axınımızdır**. Onu komponentlərə böləndə görürük ki, hücumçunun baxış bucağından yanaşdıqda üstünlük qazanmaq üçün istifadə edilə biləcək çoxsaylı sahələr mövcuddur.

**Autentifikasiya (Authentication):** İlk addım autentifikasiyadır – sistemə giriş əldə etmək üçün düzgün giriş məlumatlarını təqdim edə bilirikmi? Hücumçular isə bunu sui-istifadə edərək **“masquerade” (yalançı şəxsiyyət təqdim etmə)** hücumu ilə legitim istifadəçi kimi özlərini təqdim edə bilərlər.

**Məxfilik (Confidentiality):** Növbəti mərhələ sistemlərdə məxfilik prinsipinin qorunmasıdır. Burada əsas məqsəd ötürülən məlumatların müdafiəsini təmin etmək və onların üçüncü tərəflər tərəfindən ələ keçirilməsinin qarşısını almaqdır. Hücumçu perspektivindən isə bu, adətən **‘eavesdropping’ (dinləmə və məlumatların ələ keçirilməsi)** üsulu ilə həyata keçirilir ki, nəticədə istifadəçi ilə server arasında mübadilə olunan məlumatların məxfiliyi pozulur.

**Məlumatın bütövlüyü (Integrity):** İstifadəçi baxımından vacib olan digər amil məlumatın **düzgünlüyünün və dəyişməzliyinin** təmin olunmasıdır. Hücumçunun məqsədi isə həmin məlumatı dəyişdirmək – yəni **modifikasiya etmək** dir. Məsələn, bank əməliyyatı zamanı göndərilən məbləğ və ya hesab nömrəsinin dəyişdirilməsi məlumatın bütövlüyünü pozur.

**Əlçatanlıq (Availability):** Modelin sonuncu, eyni zamanda ən çətin qorunan komponenti isə **əlçatanlığın təmin olunmasıdır**. Burada məqsəd sistemin və ya xidmətin hər zaman əlçatan qalmasıdır. Hücumçunun yanaşması isə bu xidmətin dayandırılması və ya zəiflədilməsidir. Bu da əsasən **Denial of Service (DoS) hücumu** ilə həyata keçirilir. Hücumçu resursları çoxlu saxta sorğularla dolduraraq xidmətin əlçatanlığını pozur.

Əslində, çox vaxt hakerlər DoS hücumu ilə xidmətləri tamamilə sıradan çıxarmağa maraqlı olmur, çünki onların da həmin xidmətlərə ehtiyacı olur. Digər tərəfdən, yalnız resursları “flood” etməklə hücum etmək bəzən “ *zəifliyin göstəricisi* ” kimi qəbul edilir.

### Məlumat Təhlükəsizliyində CIA Triadası

**CIA triad (Confidentiality, Integrity, Availability)** — təşkilatlarda informasiya təhlükəsizliyinin qiymətləndirilməsi üçün istifadə olunan baza modelidir. Bu triada hər bir informasiya sistemində təhlükəsizliyin təmin olunması üçün üç əsas istiqaməti əhatə edir: **məxfilik (Confidentiality)**, **bütövlük (Integrity)** və **əlçatanlıq (Availability)**.

Bu modelin yaradılmasında məqsəd — istənilən sistemdən və ya təşkilatdan asılı olmayaraq informasiya təhlükəsizliyini qiymətləndirmək və tətbiq etmək üçün **vahid standart** təmin etməkdir. Hər bir komponent fərqli tələblərə və proseslərə malikdir:

### 🔒 Məxfilik (Confidentiality)

Məlumatların yalnız səlahiyyətli şəxslər tərəfindən əldə olunmasını təmin edir.  
Məxfilik üçün tətbiq olunan əsas üsullar:

- İstifadəçi identifikatorları (User ID) və parollar
- Girişə nəzarət siyahıları (Access Control Lists – ACL)
- Siyasətə əsaslanan təhlükəsizlik yanaşmaları

### ✅ Bütövlük (Integrity)

Məlumatların bütövlüyü onların etibarlı qalmasını və yalnız səlahiyyətli şəxslər tərəfindən dəyişdirilməsini təmin edir. Hətta məlumat saxlanma vəziyyətində olduqda belə, orijinal forması qorunur. Bütövlüyü qorumaq üçün əsas üsullar:

- Məlumatların şifrələnməsi
- Hashing alqoritmləri

### 🌐 Əlçatanlıq (Availability)

Məlumat və sistemlərin **lazım olan vaxtda əlçatan** olmasını təmin edir.  
Mövcudluğu qorumaq üçün əsas tədbirlər:

- Avadanlıq baxımı (hardware maintenance)
- Proqram təminatının yenilənməsi və təhlükəsizlik düzəlişlərinin tətbiqi
- Şəbəkə optimizasiyası

### Avtorizasiya (Authorization)

Müxtəlif təhlükəsizlik modellərini nəzərdən keçirdikdən sonra diqqət yetirməli olduğumuz vacib bir məsələ qalır: **sistemə daxil olduqdan sonra nə baş verir?**

Məhz buna görə müxtəlif **girişə nəzarət sistemləri (Access Control Systems)** mövcuddur. Onların əsas məqsədi istifadəçilərin hansı resurslara icazəsinin olub-olmamasını müəyyən etməkdir. Əsas modellər bunlardır:

- **DAC – Discretionary Access Control (İxtiyari Girişə Nəzarət)**  
	Bu model istifadəçilərin səlahiyyətlərinə əsaslanaraq fərqli hüquqlar vermək prinsipi üzərində qurulub.
- **MAC – Mandatory Access Control (Məcburi Girişə Nəzarət)**  
	Daha yüksək səviyyədə qoruma təmin edir. Bu sistemdə hətta sistem sahibi belə icazələri dəyişə bilmir. Nümunələr: **AppArmor** və **SELinux**.
- **RBAC – Role Based Access Control (Rolla Əsaslanan Girişə Nəzarət)**  
	İstifadəçiyə müəyyən vəzifəni icra etmək və ya rolu yerinə yetirmək üçün daha yüksək səlahiyyətlər verilir. Məsələn, istifadəçinin öz parolunu dəyişməsi prosesi.

**Nəticə:**  
Sistemə autentifikasiya (Authentication) yolu ilə daxil olduqdan sonra, istifadəçilərin nəyə icazəsinin olub-olmamasını müəyyənləşdirmək **avtorizasiya (Authorization)** prosesinin mahiyyətini təşkil edir.

## Purdue Modeli

Gəlin Purdue modeli üzərində dayanaraq NIST standartında müəyyən edilmiş təhlükəsizlik səviyyələrinə nəzər salaq:

![ISC-SCADA Purdue model](https://cyberhub.az/wp-content/uploads/2025/09/ChatGPT-Image-Sep-10-2025-03_34_54-PM-1.webp "ICS-SCADA: Şəbəkə Müdafiəsinə Giriş 2")

#### Ref: Guide to Operational Technology (OT) Security

#### Level 5: Enterprise Zone

Enterprise Zone təchizat zəncirinin idarə olunduğu səviyyədir. Təchizat və tələbə cavab vermək üçün SAP və JD Edwards kimi ERP sistemlərindən istifadə olunur. Bu sistemlər bütün alt sistemlərdən, tez-tez bir neçə yer və ya müəssisə üzrə məlumat toplayaraq, ümumi təchizat, istehsal və tələbə baxır və iş sifarişlərini idarə edir. ICS-lər nadir hallarda birbaşa bu səviyyəyə qoşulur, amma müxtəlif OT şəbəkələri və ICS komponentlərindən dəqiq və vaxtında məlumat tələbi aydın şəkildə mövcuddur.

#### Level 4: Site Business Planning and Logistics

Level 5 adətən korporativ və ya çoxsaylı sayt baş qərargahında mövcud olsa da, Level 4 hər bir sayt, zavod və ya müəssisədə yerli müəssisənin əməliyyatını idarə etmək üçün istifadə olunan IT sistemlərini təmsil edir. Bu səviyyə Level 5-dən sifarişləri qəbul edir və aşağı səviyyələrdə əməliyyatların vəziyyətini, istehsal cədvəlinə qarşı performansı, yerli zavodda problemlərin idarəsini və Level 5-də müəssisə sistemlərinin yenilənməsini izləyir.

#### ICS-Demilitarized Zone

ICS-Demilitarized Zone (ICS-DMZ) informasiya texnologiyaları (IT) və əməliyyat texnologiyaları (OT) arasında təhlükəsiz məlumat mübadiləsi üçün nəzərdə tutulmuş aralıq qatdan ibarətdir. Bu, daha müasir bir arxitektur yanaşma sayılır və NIST Cybersecurity Framework, NIST SP 800-82, NERC CIP və ISA/IEC 62443 kimi beynəlxalq standartların tələbləri ilə uyğunlaşdırılır. ICS-DMZ mühitində adətən replikasiya serverləri, patch idarəetmə serverləri, mühəndis iş stansiyaları, həmçinin konfiqurasiya və dəyişikliklərin idarə olunması sistemləri yerləşdirilir. DMZ-nin əsas funksiyası IT sistemlərindən ötürülən məlumatların təhlükəsiz mübadiləsini təmin etməklə kritik səviyyədəki OT komponentlərini birbaşa kənar hücumlardan qorumaqdır. Bu yanaşma sənaye şəbəkələrinin təhlükəsizlik planlamasında əsas elementlərdən biri hesab olunur və sonrakı fəsillərdə daha geniş şəkildə təhlil ediləcəkdir.

#### Level 3: Site Manufacturing and Operations Control

Level 5 və 4 yalnız şəbəkənin IT tərəfində mövcud olsa da, DMZ “Oreo biskviti” kimi doldurucu rolunu oynayır, Level 3 və aşağı səviyyələr şəbəkənin OT tərəfindəki sistemləri müəyyən edir və təşkil edir. Level 3 adətən SCADA-nın nəzarət aspektini, DCS baxış və idarəetmə imkanlarını və ya OT şəbəkəsinin qalan hissəsini izləyən və monitorinq funksiyalarına malik idarəetmə otaqlarını əhatə edir. Bu operator səviyyəsində sistemlə qarşılıqlı əlaqə üçün əsas qatdır; operatorlar proses hadisələrini və trendləri izləyir, alertlərə və hadisələrə cavab verir, iş sifarişləri və digər funksiyalar vasitəsilə prosesin işləmə vaxtı və əlçatanlığını idarə edir və məhsul keyfiyyətini təmin edir.

#### Level 2: Area Supervisory Control

Level 2 Level 3-dəki funksiyaların bir çoxunu daşıyır, amma bu səviyyə əsasən proses hüceyrəsi və ya xətt səviyyəsində yerli nəzarət üçün mövcud olan səviyyədir. Bu səviyyə real ICS-lərin göründüyü səviyyə olaraq fərqlənir, məsələn PLC və Variable Frequency Drive (VFD) sistemləri. Bununla belə, bu səviyyədə əsas sistemlər HMI-ləri əhatə edir. Bu səviyyədə operatorlar HMI panelləri vasitəsilə canlı proses hadisələrini izləyir, proseslə qarşılıqlı əlaqədə olur və məntiqə əsaslanan komponentlər vasitəsilə prosesi avtomatik idarə edirlər.

#### Level 1: Basic Control

Level 2-də bəzi PLC, VFD və digər avadanlıqlar mövcud olsa da, Level 1 əsasən bu avadanlıqların yerləşdiyi səviyyədir. Bu səviyyə Basic Process Control Systems (BPCS) adlanan sistemi əhatə edir. BPCS termini təhlükəsizliklə əlaqəsi olmayan idarəetmə sistemlərini əhatə edir və aşağıdakı funksiyalar yerinə yetirilir və idarə olunur:

- BPCS-lər prosesi konfiqurasiya edilə bilən limitlər (set point) daxilində idarə edir.
- BPCS-lər operator səviyyəsində proseslə qarşılıqlı əlaqə üçün HMI-lərə real vaxt məlumatı təqdim edir.
- Operatorlar bu səviyyədə BPCS-in set point və məntiqi ilə qarşılıqlı əlaqədə olur və zavod əməliyyatlarını optimallaşdırır.
- Proses səviyyəli alarmlar və hadisələr bu səviyyədə idarə olunur və cavablandırılır. Level 2 cədvəl, alarm monitorinqi və prosesin idarə olunması barədə məlumat üçün Level 3 və yuxarı səviyyələrdən asılıdır.
- BPCS-lər həmçinin sensorlar, aktuatorlar, relələr və digər komponentləri əhatə edir ki, bunlar proses dəyərlərini Level 1-5-dəki PLC, DCS, SCADA və digər komponentlərə ötürür.

#### Level 0: Process

Equipment Under Control (EUC) səviyyəsi olaraq da tanınan bu səviyyə Level 1 tərəfindən idarə olunan fiziki avadanlıqların yerləşdiyi yerdir. Bunlar sürücülər, motorlar, klapanlar və faktiki prosesi təşkil edən digər komponentləri əhatə edir. Level 0-ın bütövlüyü təhlükəsiz və səmərəli əməliyyat üçün çox vacibdir, çünki prosesin faktiki fizikasının manipulyasiya edildiyi səviyyədir. Əgər BPCS və EUC düzgün işləməsə və ya proses vəziyyəti barədə məlumat səhvdirsə, operatorlar və ya BPCS proses şərtlərinə düzgün cavab verə bilməyəcək.

#### Safety Layer

Bütün bu səviyyələr (0–5) prosesi nəzərdə tutulmuş funksiyanı yerinə yetirməsini təmin etmək üçün qarşılıqlı əlaqədədir. Purdue Model-in hansı adaptasiyasını nəzərdən keçirdiyinizə görə, təhlükəsizlik qatı ya Process Level (Level 0) daxilində, ya da proses səviyyəsindən məntiqi olaraq aşağıda yerləşir. Təhlükəsizlik qatı, hardware qüsuru və ya digər entropik mənfi şərait səbəbi ilə ümumi sistemin pozulmasına və təhlükəli uğursuzluğa səbəb ola biləcək halları əhatə edir. Təhlükəsizlik qatında mühəndisliklə yaradılmış qoruyucu qatlar mövcuddur. Bunlar məntiqi kodlu “interlock”lardan, PLC-lərdə mənfi hadisələrə necə cavab verəcəyinə dair təlimatlara, Safety Instrumented Systems (SIS) və həddən artıq təzyiq kimi şərtlərin fiziki olaraq baş verməməsini təmin edən fiziki təhlükəsizlik nəzarətinə qədər əhatə edir.

### ICS/SCADA İdarəetmə Komponentləri

**Control Server:** Control server DCS və ya PLC nəzarət proqram təminatını host edir və aşağı səviyyəli idarəetmə cihazları ilə qarşılıqlı əlaqəni təmin etmək üçün nəzərdə tutulub. Server, ICS şəbəkəsi vasitəsilə alt səviyyəli idarəetmə modullarının əməliyyatlarını idarə edir.

**SCADA Server və ya Master Terminal Unit (MTU):** SCADA Server SCADA sistemində master rolunu oynayan cihazdır. Uzaq sahələrdə yerləşən Remote Terminal Unit-lər və PLC cihazları (aşağıda təsvir edildiyi kimi) adətən slave kimi fəaliyyət göstərir.

**Remote Terminal Unit (RTU):** RTU, həmçinin remote telemetry unit adlanır, SCADA uzaq stansiyalarını dəstəkləmək üçün nəzərdə tutulmuş xüsusi məqsədli məlumat toplama və idarəetmə vahididir. RTU-lər tez-tez simsiz radio interfeyslərlə təchiz olunmuş sahə cihazlarıdır və simli kommunikasiya mümkün olmayan uzaq yerlərdə istifadə olunur. Bəzən PLC-lər sahə cihazları kimi RTU funksiyasını yerinə yetirmək üçün tətbiq olunur; bu halda PLC tez-tez RTU kimi adlandırılır.

**Programmable Logic Controller (PLC):** PLC kiçik sənaye kompüteridir və əvvəlcə elektrik avadanlıqlarının (relelər, drum açarları və mexaniki taymer/sayğaclar) yerinə yetirdiyi məntiq funksiyalarını icra etmək üçün yaradılmışdır. PLC-lər mürəkkəb prosesləri idarə etmək qabiliyyətinə malik kontrollerlərə çevrilmiş və SCADA sistemləri və DCS-lərdə geniş istifadə olunur. Sahə səviyyəsində istifadə olunan digər kontrollerlər proses kontrollerləri və RTU-lardır; onlar PLC-lər kimi idarəetmə funksiyasını yerinə yetirir, lakin xüsusi idarəetmə tətbiqləri üçün nəzərdə tutulmuşdur. SCADA mühitində PLC-lər tez-tez sahə cihazları kimi istifadə olunur, çünki onlar xüsusi məqsədli RTU-lardan daha qənaətcil, çevik, elastik və konfiqurasiya edilə biləndir.

**Intelligent Electronic Devices (IED):** IED “ağıllı” sensor/aktuator olub məlumat toplamaq, digər cihazlarla ünsiyyət qurmaq və yerli işləmə və idarəetməni yerinə yetirmək üçün lazım olan intellektual imkanları ehtiva edir. IED bir cihazda analoq giriş sensoru, analoq çıxış, aşağı səviyyəli idarəetmə imkanları, kommunikasiya sistemi və proqram yaddaşını birləşdirə bilər. SCADA və DCS sistemlərində IED-lərin istifadəsi yerli səviyyədə avtomatik idarəetməyə imkan verir.

**Human-Machine Interface (HMI):** HMI proqram və hardware-dən ibarətdir və operatorlara idarə olunan prosesin vəziyyətini izləməyə, idarəetmə parametrlərini dəyişərək idarəetmə məqsədini tənzimləməyə və fövqəladə vəziyyətlərdə avtomatik idarəetməni əl ilə əvəzləməyə imkan verir. HMI həmçinin idarəetmə mühəndisi və ya operatora set point-ləri, idarəetmə alqoritmlərini və parametrləri kontrollerdə konfiqurasiya etməyə imkan verir. HMI operatorlar, administratorlar, menecerlər, biznes tərəfdaşları və digər səlahiyyətli istifadəçilər üçün proses vəziyyəti məlumatları, tarixi məlumatlar, hesabatlar və digər məlumatları göstərir. HMI-nin yerləşməsi, platforması və interfeysi çox fərqli ola bilər; məsələn, HMI idarəetmə mərkəzində xüsusi platforma, simsiz LAN üzərində laptop və ya İnternetə qoşulmuş hər hansı bir sistemdə brauzer ola bilər.

**Data Historian:** Data historian ICS daxilində bütün proses məlumatlarını qeyd edən mərkəzləşdirilmiş verilənlər bazasıdır. Bu verilənlər bazasında saxlanılan məlumat müxtəlif analizləri dəstəkləmək üçün əldə edilə bilər, statistik proses nəzarətindən müəssisə səviyyəli planlamaya qədər.

**Input/Output (IO) Server:** IO server PLC, RTU və IED kimi idarəetmə alt-komponentlərindən proses məlumatlarını toplamaq, tamponlamaq və onlara çıxış təmin etmək üçün məsul olan idarəetmə komponentidir. IO server control serverdə və ya ayrı bir kompüter platformasında yerləşə bilər. IO serverlər həmçinin üçüncü tərəf idarəetmə komponentləri, məsələn HMI və control server ilə interfeys üçün istifadə olunur.

### Mikrokontroller

Solid-state məntiq dövrələrinin yaranmasından əvvəl, məntiqi idarəetmə sistemləri yalnız elektromexaniki relelər ətrafında dizayn edilirdi və qurulurdu. Relelər müasir dizaynda köhnəlmiş hesab olunmasa da, məntiq səviyyəli idarəetmə cihazları kimi əvvəlki rollarının çoxunda əvəz olunmuş və ən çox yüksək cərəyan və/və ya yüksək gərginlik keçidinə tələb olunan tətbiqlərə aid edilmişdir.

“On/off” idarəetmə tələb edən sistemlər və proseslər müasir ticarət və sənayedə geniş yayılıb, amma bu cür idarəetmə sistemləri nadir hallarda elektromeхaniki relelərdən və ya ayrı-ayrı məntiq qapılarından qurulur. Bunun əvəzinə, müxtəlif məntiqi funksiyaları yerinə yetirmək üçün proqramlaşdırıla bilən rəqəmsal kompüterlər istifadə olunur.

PLC-lər 1964-cü ildə Dick Morley tərəfindən ixtira edilmişdir. O vaxtdan bəri PLC sənaye və istehsal sektorlarında inqilab yaratmışdır. PLC-lərin funksiyaları arasında vaxtlama, sayma, hesablama, müqayisə və müxtəlif analoq siqnalların işlənməsi kimi geniş imkanlar mövcuddur.

PLC-nin “hard-wired” idarəetmə sistemi üzərində əsas üstünlüyü odur ki, proqramlaşdırıldıqdan sonra onu geri dönüb dəyişmək mümkündür və bu, az xərc tələb edir (yalnız proqramçının vaxtı). Hard-wired idarəetmə sistemində isə əsasən bütün simləri çıxarıb sıfırdan başlamaq lazımdır ki, bu da daha baha və vaxt aparıcıdır.

Gəlin bu üstünlüyü daha yaxşı anlamaq üçün bir nümunəyə nəzər salaq. Tutaq ki, işıq lampası bir açara birləşdirilib və adətən iki vəziyyətdə – ON və OFF işləyir. Sizə tapşırıq verilir ki, açarı yandırdığınız zaman işıq yalnız 30 saniyə sonra yanmalıdır. Hard-wired (sabit simlərlə qurulmuş) arxitekturda bu funksiyanı həyata keçirmək məhdudiyyətlərlə müşayiət olunur; bunun yeganə yolu dövrəni tamamilə yenidən simləmək və əlavə vaxt rele tətbiq etməkdir. Belə kiçik bir dəyişiklik belə əhəmiyyətli əmək və resurs tələb edir.

Ladder məntiqi üçün standartları müəyyən edən şəxs və ya təşkilat **PLC Open** -dir. Ladder məntiqi yalnız PLC-lər üçün proqramlaşdırma dili deyil. O, standartlaşdırılmış PLC proqramlaşdırma dillərindən biridir. Bu, sadəcə olaraq o deməkdir ki, ladder məntiqi standartda təsvir olunub. Bu standart **IEC 61131-3** adlanır.