---
title: "Computer Forensics: Rəqəmsal Dəlillərin Elmi və Kibertəhlükəsizliyin Görünməz Qalxanı"
source: https://cyberhub.az/computer-forensics/
author:
  name: Guljannat R.
  role: Writer
date: 08.11.2025
description: Computer Forensics — rəqəmsal dəlillərin aşkarlanması, qorunması və təhlili elmi. Kibercinayətlərin izlərini aşkarlayaraq məlumat təhlükəsizliyini təmin edir.
category: Digital Forensic
---

Texnologiyanın sürətli inkişafı həyatımızı inanılmaz dərəcədə asanlaşdırsa da, eyni zamanda **cinayətlərin xarakterini tamamilə dəyişib**. Əgər bir vaxtlar cinayət səhnəsi fiziki məkanda — evdə, ofisdə və ya küçədə baş verirdisə, bu gün həmin səhnə çox vaxt **rəqəmsal müstəvidə** yaranır.

Artıq məlumat oğurluqları, saxtalaşdırma halları, sistemlərə icazəsiz girişlər, phishing kampaniyaları və korporativ kiberhücumlar gündəlik reallığa çevrilib. Bu hücumların bəziləri saniyələr içində baş verir, izlər isə görünməz şəkildə sistemlərdə, şəbəkə trafikində və ya bulud hesablarında gizlənir.

Bütün bu hadisələrin ortaq cəhəti isə **digital evidence**, yəni **rəqəmsal dəlildir** — sistemlərdə, cihazlarda və şəbəkələrdə qalan hər bir elektron iz. Bu dəlillər bəzən bir e-poçt başlığı, bir IP ünvanı, bəzən də silinmiş faylın bərpa olunmuş fraqmenti ola bilər.

Məhz bu dəlilləri **aşkarlamaq, qorumaq, təhlil etmək və hüquqi baxımdan etibarlı şəkildə təqdim etmək** elmi **Computer Forensics** adlanır. Bu sahə artıq təkcə kibercinayətlərin araşdırılmasında deyil, həm də informasiya təhlükəsizliyinin ümumi idarəetməsində mühüm rol oynayır.

Əslində, hər ciddi təhlükəsizlik hadisəsinin arxasında bir **forensik mütəxəssisin** izi olur — çünki o, sistemin səssiz şahidlərini danışdırmağı bacarır. O, log fayllarını oxuyaraq, disk sektorlarını analiz edərək və məlumat zəncirini sənədləşdirərək “nə baş verdi, necə baş verdi və kim etdi” suallarına cavab tapır.

### 📘 Rəqəmsal Dəlillərin Araşdırılması: Computer Forensics-in Mahiyyəti

**Computer Forensics** — elektron cihazlarda saxlanılan və ya ötürülən məlumatların **hüquqi baxımdan etibarlı şəkildə əldə edilməsi, qorunması, təhlili və təqdimatı** prosesidir.  
Sadə dildə desək, bu, **rəqəmsal dəlillərin elmi araşdırılması** deməkdir.

Amma məqsəd təkcə “hacker kim idi?” sualını cavablandırmaq deyil. Əsas məqsəd — **məlumatın orijinallığını və dəyişdirilməzliyini sübut etməkdir.**  
Yəni, təqdim olunan dəlil nə dəyişdirilib, nə təsadüfən əldə olunub, nə də manipulyasiya olunub.

Computer Forensics həm **texniki bilikləri**, həm **hüquqi prosedurları**, həm də **analitik təfəkkürü** birləşdirir.  
Bu sahənin mərkəzində isə **beş mərhələdən ibarət klassik forensik model** dayanır:

- **Identification**

İlk addım dəlilin harada yerləşdiyini müəyyən etməkdir. Bu mənbələr kompüterlər, serverlər, smartfonlar, cloud hesabları, sosial media profilləri və e-poçt serverləri ola bilər.  
Məqsəd — potensial sübut daşıyıcılarını müəyyənləşdirib, **nəyi, haradan və necə çıxarmaq lazım olduğunu planlaşdırmaqdır.**

- **Preservation**

Dəlilin dəyəri yalnız **orijinalı toxunulmaz qaldıqda** hüquqi əhəmiyyət daşıyır.  
Buna görə forensik mütəxəssislər **forensic imaging** və **write blocker** kimi texnologiyalardan istifadə edirlər.  
Beləliklə, dəlil daşıyıcısına heç bir dəyişiklik edilmədən onun eynisi üzərində işlənilir.

- **Collection**

Bu mərhələdə sübutlar sistemli şəkildə toplanır və sənədləşdirilir.  
Əsas prinsip **chain of custody** – yəni dəlilin əldə olunma və saxlanma tarixçəsinin şəffaf şəkildə izlənməsidir.  
Bu sənəd hər addımı – kim, nə vaxt, hansı dəlili əldə edib və necə saxlayıb – əks etdirir.

- **Analysis**

Burada artıq işin “elm” tərəfi başlayır.  
Mütəxəssis silinmiş faylları bərpa edir, metadata analiz edir, sistemdə baş verən dəyişiklikləri izləyir, malware davranışlarını tədqiq edir və **digital timeline** qurur.  
Bu mərhələnin nəticəsi — hadisənin tam xronologiyasını sübutlarla təsdiqləməkdir.

- **Presentation**

Forensik analiz nəticəsində əldə edilən məlumat yalnız texniki hesabat deyil — **hüquqi sənəddir.**  
Nəticələr obyektiv, başadüşülən və hüquqi baxımdan qəbul edilə bilən formada təqdim olunur.  
Bu hesabatın məqsədi “şübhə doğurmayan sübut bazası” yaratmaq və istintaqa aydınlıq gətirməkdir.

### 🧩 Computer Forensic Investigation Prosesi: Addım-Addım

Təcrübədə forensik analiz çox vaxt **post-incident response**, yəni hadisə baş verdikdən sonra həyata keçirilir.  
Bu mərhələnin uğuru texnologiyanın gücündən çox, **dəqiqliyə və intizama** bağlıdır.  
Kiçik bir səhv — məsələn, orijinal sübutun dəyişdirilməsi və ya sənədləşmənin natamamlığı — illərlə aparılan araşdırmanı hüquqi baxımdan etibarsız edə bilər.  
Ona görə də, hər bir istintaq **yüksək intizam və prosedural ardıcıllıqla** aparılmalıdır.

#### 🧱 1. Preservation: Digital Scene “Freeze”

İlk prinsip \\dəyişməzdir: **do not touch the original evidence.**  
Orijinal dəlilə müdaxilə etmək onun hüquqi dəyərini məhv edir.  
Buna görə mütəxəssislər **write blocker** istifadə edərək məlumat daşıyıcısına hər hansı yazma əməliyyatını tamamilə bloklayır və **bit-by-bit forensic image** çıxarırlar.  
Bu nüsxə rəqəmsal hadisə yerinin “dondurulmuş” formasıdır və bütün analizlər yalnız bu nüsxə üzərində aparılır.

Bu, sanki hadisə yerinin lentlə bağlanması kimidir — məqsəd səhnəni olduğu kimi saxlamaq və gələcəkdə hər addımı sübut edə bilməkdir.

#### 🧮 2. Collection: Rəqəmsal Dəlillərin Toplanması Prosesi

Sonrakı addım məlumatların planlı və sənədləşdirilmiş toplanmasıdır.  
Dəlil mənbələri müxtəlif ola bilər:

- Hard disk və SSD-lər
- RAM memory dumps
- Log files (Windows, Apache və s.)
- Network traffic (PCAP)
- Cloud və SaaS məlumatları
- Mobil cihaz dataları (SMS, WhatsApp, GPS və s.)

Toplanmış dəlillərin hər biri **chain of custody** sənədi ilə izlənir — bu, dəlilin kim tərəfindən və necə idarə olunduğunu hüquqi olaraq təsdiqləyir.  
Zəncir qırılarsa, sübut məhkəmədə qüvvəsini itirə bilər.

#### 🔬 3. Analysis: Truth in the Data

Bu mərhələdə rəqəmsal sükut danışmağa başlayır.  
Mütəxəssis silinmiş faylları bərpa edir (file carving), metadata və log məlumatlarından dəyişiklik tarixçəsini müəyyənləşdirir, hash comparison vasitəsilə fayl bütövlüyünü təsdiqləyir və istifadəçi fəaliyyətinin **digital timeline** -ını qurur.  
Burada məqsəd — **nə baş verdi, nə vaxt və necə baş verdi** suallarına sübutlarla cavab tapmaqdır.

Ən çox istifadə olunan analiz üsullarına daxildir:

- Registry analysis
- Keyword search
- Email header analysis
- Malware reverse engineering

Bu mərhələ həm texniki bacarıq, həm də intellektual analiz tələb edir — çünki hər log sətiri bir şahid ifadəsi kimidir.

#### 🧾 4. Presentation: From Data to Evidence

Forensik mütəxəssisin işi yalnız sübut tapmaqla bitmir.  
Əldə olunan nəticələr **strukturlaşdırılmış, hüquqi baxımdan etibarlı** və **asan anlaşılan** şəkildə təqdim edilməlidir.  
Burada texniki məlumat hüquqi dilə çevrilir və istintaq orqanlarına və ya korporativ rəhbərliyə təqdim olunur.  
Bu mərhələdə məqsəd — **məlumatı dəlilə, dəlili isə etimada çevirməkdir.**

### 🧠 Əsas Forensik Alətlər

Müasir forensik təcrübə müxtəlif professional alətlərə əsaslanır. Onların hər biri konkret mərhələ üçün ixtisaslaşıb:

| **Alət** | **Əsas Funksiya** |
| --- | --- |
| **EnCase** | Disk imaging və comprehensive analysis |
| **FTK (Forensic Toolkit)** | File recovery, indexing, e-mail analysis |
| **Autopsy** | Açıq mənbəli GUI əsaslı investigation platforması |
| **Volatility** | RAM dump analiz və memory forensics |
| **Wireshark** | Network capture və protocol təhlili |
| **Cellebrite UFED** | Mobil cihaz forensikası və data extraction |

Bu alətlərin çoxu **“court-admissible”** – yəni məhkəmədə qəbul edilə bilən nəticələr yaradır. Çünki onların metodologiyası sənaye standartları və beynəlxalq sertifikasiyalarla təsdiqlənmişdir.  
Forensik mütəxəssis üçün bu proqramlar sadəcə texniki vasitə deyil, **hüquqi məsuliyyət daşıyan iş alətləridir.**

Texniki icra tərəfləri haqqında ətraflı məlumatı bu məqalədə oxuya bilərsiniz — [Windows DFIR.](https://cyberhub.az/dfir-windows-forensik/)

### ⚖️ Hüquqi və Etik Prinsiplər

Computer Forensics yalnız texnologiya üzərində qurulmur — o, **etik və hüquqi məsuliyyətin** də daşıyıcısıdır.  
Bir dəlilin səhv sənədləşdirilməsi və ya yanlış təqdimatı bütün istintaqın nəticəsini etibarsız edə bilər. Buna görə də hər bir forensik mütəxəssis aşağıdakı prinsiplərə sadiq qalmalıdır:

- **Integrity** – orijinal məlumat toxunulmaz qalmalıdır.
- **Accountability** – hər əməliyyat izlənilə bilməli və sənədləşdirilməlidir.
- **Objectivity** – nəticələr şəxsi fikir və təzyiqlərdən uzaq olmalıdır.
- **Confidentiality** – araşdırma zamanı əldə edilən bütün məlumatlar məxfi saxlanılmalıdır.

Bir çox ölkələrdə rəqəmsal dəlillərlə işləmək üçün hüquqi səlahiyyət və sertifikasiya tələb olunur. Məsələn:

- **CCE (Certified Computer Examiner)**
- **GCFA (GIAC Certified Forensic Analyst)**
- **CHFI (Computer Hacking Forensic Investigator)**

Bu sertifikatlar həm texniki, həm hüquqi, həm də etik aspektlərdə peşəkar səviyyəni təsdiqləyir.  
Çünki forensika yalnız “nə baş verdi” sualını cavablandırmır — həm də **bu cavabın məhkəmədə etibarlı olmasını** təmin edir.

### 🧬 Forensics Beyond Computers

Bu gün forensika artıq yalnız masaüstü kompüterlərlə məhdudlaşmır.  
**Digital Forensics** anlayışı çoxşaxələnib və aşağıdakı alt-sahələri əhatə edir:

- **Network Forensics** – şəbəkə trafiki, bağlantılar və hücum vektorlarının analizi
- **Mobile Device Forensics** – smartfon əməliyyat sistemləri və tətbiqlərin dəlil mənbələri
- **Cloud Forensics** – virtual mühitlərdə, SaaS və IaaS sistemlərində sübutların aşkarlanması
- **IoT Forensics** – smart cihazlardan və sensorlardan məlumatın bərpası
- **Malware Forensics** – zərərli proqramların davranış və kod səviyyəsində təhlili

Bu istiqamətlər bir daha göstərir ki, **forensika artıq kiberhücumların qarşısını almaqda və insidentlərin idarə edilməsində strateji vasitəyə** çevrilib.  
Artıq forensik mütəxəssis təkcə istintaq aparan şəxs deyil — o, **kibertəhlükəsizlik arxitekturasının əsas dayağıdır.**

### 🚀 Gələcəyin Forensikası: AI və Automation

Süni intellekt (AI) və machine learning artıq forensika dünyasının ayrılmaz hissəsinə çevrilməkdədir.  
Böyük həcmli məlumatların təhlili, pattern tanınması və anomaliya aşkarlanması kimi proseslərdə **AI analitiklərə sürət və dəqiqlik qazandırır.**

Avtomatlaşdırılmış log korelyasiya sistemləri (SIEM və SOAR inteqrasiyaları) artıq manual əməliyyatların bir hissəsini əvəz edir — bu da insidentlərin daha tez aşkarlanmasına şərait yaradır.  
Lakin unudulmamalıdır ki, **texnologiya istintaqa yardım edir, onu əvəz etmir.**

“Technology aids the investigator — it does not replace judgment.”

Yəni AI nəticə çıxara bilər, amma onu **dəyərləndirən və kontekstə salan** yenə də insandır.  
Forensikanın mahiyyəti dəyişmir — yalnız alətləri təkmilləşir.

### 🔚 Nəticə

**Computer Forensics** — texnologiyanın ən soyuq, amma ən insani tərəfini özündə birləşdirən elmdir.  
O, rəqəmsal xaosun içindən **həqiqətin səsini çıxarır**.

Bu sahə təkcə cinayətləri aşkar etmək üçün deyil, həm də **ədalət, etimad və şəffaflıq mədəniyyətini qorumaq üçün** vacibdir.  
Hər uğurlu forensik araşdırma — bir hadisənin izahı deyil, **gələcək hücumların qarşısını almaq üçün öyrənilmiş dərsdir.**

*Texnologiya inkişaf etdikcə, izlər dəyişir —*  
*amma həqiqət hələ də “log” faylında yazılı qalır.*

### 📖 İstinad Edilən Resurslar

*👉 Learn Computer Forensics — A Beginner’s Guide to Digital Investigation*  
Müəllif: William O. Green, 2022

👉 [Digital Investigation Techniques: A NIST Scientific Foundation Review](https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8354.pdf "Digital Investigation Techniques: A NIST Scientific Foundation Review")