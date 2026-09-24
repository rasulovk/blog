---
title: GenAI Risk Bələdçisi – Hissə 2
source: https://cyberhub.az/genai-part2-2/
author:
  name: Kamil R.
  role: Writer
date: 2025-06-20
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: GenAI Security
---

“Kibertəhlükəsizlik təkcə texnoloji alətlərlə bağlı deyil, həm də davamlı bir prosesdir.” — Bruce Schneier

Hissə 1 burda: [GenAI Risk Bələdçisi – Hissə 1](https://cyberhub.az/genai-part1-2/)

Cybersecurity framework haqqinda burda oxuya bilərsiniz: [Süni İntellekt (AI) Təhlükəsizliyində SAIF Çərçivəsi: 4 Əsas Sahə üzrə Risklərə Strateji Nəzarət](https://cyberhub.az/saif-suni-intellekt-tehlukesizliyi/)

Generativ AI tətbiqlərində mətnin formalaşdırılması əsasən **LLM-lər (Large Language Models)** vasitəsilə həyata keçirilir. Bu texnologiya müxtəlif imkanlar yaratmaqla yanaşı, müəyyən **təhlükəsizlik zəifliklərini** də özü ilə gətirir. Növbəti bölmədə bu zəifliklərin hər birini ətraflı təhlil edəcək və onlardan qorunmaq üçün tətbiq oluna biləcək effektiv müdafiə üsullarını təqdim edəcəyik. Aşağıda məhz mətn generasiyasına xas olan əsas risk kateqoriyaları göstərilmişdir:

### LLM OWASP Top 10

Generative AI sistemlərindən istifadə zamanı yarana biləcək təhlükəsizlik zəifliklərini araşdırmağa **mətn generasiyası** (text generation) sahəsindən başlayaq. Bu sahədə geniş istifadə olunan model növü **Large Language Models (LLMs)** – *Böyük Dil Modelləri* dir.

Əvvəlki bölmələrdə **ML əsaslı sistemlər üçün OWASP Top 10** siyahısına nəzər yetirdik. Oxşar yanaşma ilə OWASP təşkilatı, LLM əsasında işləyən tətbiqlərin yerləşdirilməsi və idarə olunması zamanı qarşıya çıxa biləcək spesifik təhlükəsizlik risklərini əhatə edən ayrıca bir siyahı –

📄 [**OWASP Top 10 for LLM Applications (PDF)**](https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-2023-v1_1.pdf) – dərc etmişdir.

Aşağıda bu siyahıda yer alan **10 əsas risk** qısa şəkildə təqdim olunur. Bu risklərin bir qismi ümumiyyətlə **ML əsaslı sistemlər üçün keçərlidir**, bəziləri isə **yalnız LLM-lərə və mətn generasiyası funksiyalarına xasdır**.

---

| **ID** | **Təsvir** |
| --- | --- |
| **LLM01** | **Prompt Injection** (Girişin Manipulyasiyası ilə Hücum): Hücumçular, LLM-ə birbaşa və ya dolayı yolla verilən girişləri manipulyasiya edərək modelin zərərli və ya qeyri-qanuni cavablar verməsinə səbəb olurlar. |
| **LLM02** | **Insecure Output Handling** (Çıxışın Təhlükəsiz Olmayan İdarəsi): LLM tərəfindən yaradılan çıxışlar lazımi təhlükəsizlik tədbirləri görülmədən istifadə olunur və bu da XSS, SQL Injection və Command Injection kimi hücumlara yol açır. |
| **LLM03** | **Training Data Poisoning** (Təlim Məlumatının Manipulyasiyası): Hücumçular LLM-in öyrənmə prosesində istifadə olunan məlumatlara zərərli nümunələr əlavə edərək modelin davranışını pozur və ya arxa qapılar yerləşdirirlər. |
| **LLM04** | **Model Denial of Service** (Xidmətin Dayandırılması Hücumu): Hücumçular LLM-ə məqsədli şəkildə yüksək hesablama resursları tələb edən mürəkkəb sorğular göndərərək sistemin ləngiməsinə və ya tamamilə əlçatmaz vəziyyətə düşməsinə səbəb ola bilərlər. |
| **LLM05** | **Supply Chain Vulnerabilities** (Təchizat Zəncirindəki Zəifliklər): LLM sisteminin istənilən mərhələsindəki zəifliklər – kitabxanalar, pre-trained modellər və s. – hədəfə çevrilə bilər. |
| **LLM06** | **Sensitive Information Disclosure** (Məxfi Məlumatların Sızması): Hücumçular, LLM-ə məqsədli və strukturlaşdırılmış sorğular göndərərək modelin cavabında şəxsi, məxfi və ya təşkilatdaxili məlumatların açıqlanmasına səbəb ola bilərlər. |
| **LLM07** | **Insecure Plugin Design** (Təhlükəli Plugin Dizaynı): LLM üçün hazırlanmış zəif qorunan plugin-lər təhlükə mənbəyi ola bilər və sistemə icazəsiz giriş imkanları yarada bilər. |
| **LLM08** | **Excessive Agency** (Nəzarətsiz Səlahiyyətlər): LLM-ə çox geniş və məhdudiyyətsiz icazələr verildikdə, hücumçular bu imtiyazlardan istifadə edərək sistemə zərər vura bilərlər. |
| **LLM09** | **Overreliance** (Həddindən Artıq Etibar): Təşkilatlar LLM çıxışlarına tənqidi qiymətləndirmə olmadan etibar etdikdə, modelin səhv və ya gözlənilməz davranışı ciddi biznes risklərinə səbəb ola bilər. |
| **LLM10** | **Model Theft** (Modelin Oğurlanması): Hücumçular modelə icazəsiz giriş əldə edərək intellektual mülkiyyəti ələ keçirə və maliyyə itkilərinə yol aça bilərlər. |

## LLM01: Prompt Injection (Girişin Manipulyasiyası ilə Hücum)

**Prompt Injection** – generative AI sistemlərində tez-tez rast gəlinən təhlükəsizlik zəifliklərindən biridir. Bu hücum zamanı **LLM-ə (Large Language Model)** verilən giriş (prompt) **manipulyasiya edilir**, nəticədə model **nəzərdə tutulmuş davranışdan kənara çıxır** və istənilməyən, bəzən isə zərərli nəticələr verir.

---

### 🧨 Hücum necə işləyir?

Hücumçu, modelə göndərilən sorğunu elə formalaşdıra bilər ki:

- Model **öz davranış qaydalarına zidd cavablar verir**;
- **Sistemdə quraşdırılmış təhlükəsizlik və məzmun filtrlərini** “aldadaraq” onları keçə bilir.

---

### 🎯 Mümkün nəticələr:

- Əvvəlcədən texniki dəstək üçün nəzərdə tutulmuş chatbot birdən **aşpazlıq resepti təqdim edə bilər**;
- Daha təhlükəli hallarda model:
	- **Yanlış və qərəzli məlumatlar** yayır,
		- **Nifrət nitqi**, **təhqiramiz və ya qeyri-qanuni məzmun** yaradır;
- Hücumçu bu üsulla **məxfi məlumatlara çıxış da əldə edə bilər** – əgər bu məlumatlar modelə öncədən ötürülübsə (bax: `LLM06`).

---

### ⚠️ Riskin Ciddiliyi:

Prompt injection hücumları adətən **çox sadə girişlər** vasitəsilə baş verir, lakin:

- **Aşkarlanması çətindir**, çünki model normal cavab verir kimi görünür;
- **Təhlükəsizlik testlərindən yayınır**, çünki filtrin özünü aşan dildə yazılmış sorğularla həyata keçirilir.

### 🛡️ Müdafiə və Tövsiyələr:

- Girişlərə qarşı **məzmun filtrinin özü də sabit və təhlükəsiz şəkildə qurulmalıdır**;
- **Sistem tərəfindən qəbul edilən sorğuların konteksti ayrılmalı və təmizlənməlidir**;
- Prompt injection-a qarşı **input sanitization**, **rol əsaslı cavab məhdudiyyətləri** və **dil səviyyəsində təlim mexanizmləri** tətbiq olunmalıdır.

## LLM02: Insecure Output Handling (Çıxışın Təhlükəsiz Olmayan İdarəsi)

**Insecure Output Handling**, yəni *çıxışların təhlükəsiz şəkildə idarə olunmaması*, **LLM-in (Large Language Model)** yaratdığı mətnin **etibarlı istifadəçi girişi kimi yox, potensial təhlükəli mənbə kimi** qəbul edilmədiyi hallarda ortaya çıxan ciddi zəiflikdir. **LLM-in verdiyi cavablar da, ən azı istifadəçi daxil etdiyi məlumat qədər yoxlanılmalı və qorunmalıdır.**

---

### ⚠️ Nə üçün bu təhlükəlidir?

Əgər LLM-in çıxışı:

- **Təhlil olunmadan birbaşa sistem komponentlərinə ötürülürsə**, və ya
- **Verilənlər bazasına, HTML səhifəsinə, komanda icrasına daxil edilirsə**,

…onda bu, **klassik veb zəifliklərinin aktivləşməsinə səbəb ola bilər**:

- **Cross-Site Scripting (XSS)**
- **SQL Injection**
- **Command/Code Injection**
- **Server-side Request Forgery (SSRF)** və s.

---

### 🎯 Praktik nümunə:

Tutaq ki, veb tətbiq LLM-i aşağıdakı məqsədlə istifadə edir:

1. İstifadəçi sorğu verir:  
	`Mənə blog post #3-ü göstər`
2. LLM cavab yaradır:  
	`SELECT content FROM blog WHERE id=3`
3. Tətbiq bu SQL sorğusunu **birbaşa işlədərək** nəticəni göstərir.

---

Əgər bu sistemdə:

- **Heç bir sintaks və məntiq yoxlaması aparılmırsa**, və
- İstifadəçi modelə belə bir prompt verərsə:  
	`DROP TABLE blog`

…onda LLM bu cavabı generasiya edə və sistem **bütün blog məlumatlarını itirə bilər**.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

1. **LLM çıxışı daima təhlükəli mənbə kimi qəbul olunmalıdır** – onun məzmunu yoxlanılmadan heç bir əməliyyatda istifadə edilməməlidir;
2. **Çıxışın kontekstdən kənara çıxmadığı yoxlanılmalıdır** – məsələn: əgər gözlənilən nəticə SQL sorğusudursa, sintaks, dəyərlər və əmrlər üzrə icazə verilmişlər siyahısı **(whitelisting)** tətbiq olunmalıdır;
3. **Parametrizə edilmiş sorğulardan istifadə olunmalıdır** – LLM çıxışı SQL əməliyyatlarına birbaşa daxil edilməməli, **hazır parametrlərlə icra edilməlidir**;
4. **İcra edilməzdən əvvəl çıxışın məntiqi yoxlaması aparılmalıdır** – nəyi soruşur, hansı sahəyə tətbiq edir, və bu davranış gözləniləndirmi?
5. **Çoxsəviyyəli təhlükəsizlik tədbirləri** – web tətbiqin özü də LLM çıxışının istifadə olunduğu nöqtələrdə təhlükəsizlik qatlarına sahib olmalıdır (input validation, output encoding, error handling və s.).

---

Unutmayın: LLM cavabı *“ağıllı” görünə bilər*, amma bu onun **təhlükəsiz olduğu anlamına gəlmir**. Bütün çıxışlar şübhəli mənbə kimi yoxlanmalı və məhdudlaşdırılmalıdır.

## LLM03: Training Data Poisoning (Təlim Məlumatının Manipulyasiyası)

**Training Data Poisoning** – yəni *təlim məlumatının manipulyasiyası*, **LLM-in (Large Language Model)** öyrənmə mərhələsində istifadə olunan məlumatların qəsdən təhrif edilməsi yolu ilə həyata keçirilən təhlükəli bir hücum növüdür. Bu hücumun məqsədi modelin **davranışına qərəz və ya səhv qərarverməyə səbəb ola biləcək istiqamətləndirici təsirlər əlavə etməkdir.**

---

### 🧠 LLM performansı nədən asılıdır?

Hər bir LLM-in funksionallığı və keyfiyyəti **təlim məlumatlarının düzgünlüyünə, obyektivliyinə və etibarlılığına** əsaslanır. Təlim məlumatında pozulma və ya manipulyasiya halları olduqda:

- Model **səhv nəticələr** verir;
- **Qərəzli və təhlükəli cavablar** yaradır;
- Bəzi hallarda isə **kod parçaları və tövsiyələr** vasitəsilə **digər sistemlərdə əlavə zəifliklərə** səbəb ola bilər.

---

### 🎯 Nümunəvi təhlükələr:

- Əgər LLM proqramlaşdırma mövzularında öyrədilibsə və təlim məlumatına **zərərli kod nümunələri** daxil edilibsə, model bu kodu istifadəçiyə tövsiyə edə bilər;
- Nəticədə istifadəçi **təhlükəli komponentləri real sistemə daxil edir**, bu isə **maliyyə və reputasiya risklərinə** gətirib çıxarır.

---

### 🔓 Hücumçunun məqsədi nədir və necə həyata keçirir?

- Hücumçu təlim məlumatına **birbaşa çıxış əldə etməlidir**;
- Bu çıxış, adətən, **ictimai verilənlər bazası** və ya **açıq mənbə kod repozitoriyaları** vasitəsilə mümkündür;
- Manipulyasiya edilmiş nümunələr daxil edilir və model **bu nümunələri “doğru davranış” kimi öyrənir**.

---

### 🛡️ Müdafiə və Tövsiyələr:

1. **Təlim məlumatlarının sanitizasiyası** – məlumatlar təlimdən əvvəl təmizlənməli və yoxlanmalıdır;
2. **Mənbələrin doğrulanması** – təlim verilənlərinin təchizat zənciri üzrə mənbələri **etibarlı və auditi mümkün** olmalıdır;
3. **Detallı yoxlama** – fərdi məlumat dəstləri üzərində **detallı keyfiyyət və qərəzə dair hərtərəfli yoxlamalar** aparılmalıdır**;**
4. **Yanlış və ya şübhəli nümunələrə qarşı filtr** – təlim prosesinə daxil olan məlumatlar **məntiq və struktur baxımından** yoxlanmalıdır.

---

Training Data Poisoning hücumu **gizli və uzunmüddətli təsirə malik** olmaqla yanaşı, **modelin özü ilə birlikdə digər tətbiqlərə də təhlükə daşıyır**. Bu səbəbdən, təlim mərhələsi **təhlükəsizlik nəzarətinin ən vacib nöqtələrindən biridir**.

## LLM04: Model Denial of Service ( Xidmətin Dayandırılması Hücumu)

**Model Denial of Service (DoS)** – LLM əsaslı sistemlərdə istifadəçilərin xidmətə çıxışını əngəlləmək məqsədi ilə aparılan hücum növüdür. Bu hücumun məqsədi **LLM-in əlçatanlığını (availability) azaltmaq** və nəticədə digər istifadəçilərin modeli istifadə etməsinin qarşısını almaqdır.

Ənənəvi IT sistemlərində olduğu kimi, LLM-lərə qarşı da **DoS hücumları** sistem resurslarını tükətmək yolu ilə həyata keçirilir.

---

### ⚙️ Hücum necə baş verir?

LLM-lər adətən **hesablama baxımından ağır və resurs tələb edən sistemlərdir**. Hücumçu:

- Xüsusi tərtib edilmiş mürəkkəb və uzun sorğular göndərir;
- Bu sorğular modelin **çox yüksək hesablama gücü** sərf etməsinə səbəb olur;
- Əgər sistemdə **resurs məhdudiyyəti** və ya **effektiv təhlükəsizlik tədbirləri** yoxdursa – xidmət **tamamilə dayanır** və ya **ciddi yavaşlayır**.

---

### 🎯 Təsiri nə ola bilər?

- **Xidmətin dayandırılması** və ya gecikməsi;
- **Xidmət keyfiyyətinin aşağı düşməsi**;
- **İş proseslərinin və avtomatlaşdırılmış sistemlərin dayanması**;
- **Maliyyə və nüfuz itkisi** – xüsusilə ödənişli və kritik tətbiqlər üçün.

---

### ❌ Sadəcə blacklisting kifayət deyil

- LLM-lərin **proqnozlaşdırılması çətin və qeyri-deterministik** olması, DoS hücumlarını sadəcə **müəyyən sorğuları qara siyahıya almaqla (blacklisting)** qarşısını almağı qeyri-mümkün edir;
- Hücumçular sorğunu hər dəfə fərqli formada tərtib edə bilər, lakin eyni nəticəyə – resursların tükənməsinə nail ola bilərlər.

---

### 🛡️ Tövsiyə olunan müdafiə mexanizmləri:

1. **Sorğu girişlərinin validasiyası** – istifadəçi sorğuları müəyyən məntiqə uyğun analiz olunmalı və filtrdən keçirilməlidir;
2. **Rate limiting** – hər istifadəçi üçün **saniyədə/müddət üzrə sorğu limiti** tətbiq olunmalıdır;
3. **Resurs istifadəsinin monitorinqi** – sistem real vaxtda CPU/GPU, RAM və model icra müddətinə nəzarət etməlidir;
4. **Anomal davranış aşkarlama** – şübhəli şəkildə resurs tələbi yaradan sorğular avtomatik kəsilməli və loglaşdırılmalıdır.

---

Model DoS hücumları xüsusilə **LLM-in açıq API vasitəsilə istifadə edildiyi mühitlərdə** kritik problemə çevrilə bilər. Buna görə **resursların idarəsi və müdafiə mexanizmləri LLM dizaynının ayrılmaz hissəsi olmalıdır**.

## LLM05: Supply Chain Vulnerabilities (Təchizat Zəncirindəki Zəifliklər)

**Supply Chain Vulnerabilities** – yəni *təchizat zənciri zəiflikləri*, **LLM (Large Language Model)** sistemlərinin qurulması və istifadəsində rol oynayan **bütün komponentləri əhatə edən təhlükəsizlik riskləridir**. Buraya yalnız modelin özü deyil, həm də onunla əlaqəli **məlumat mənbələri**, **pre-trained modellər**, **plugin-lər** və digər **inteqrasiya olunmuş sistemlər** daxildir.

---

### 🔄 LLM təchizat zəncirinə nələr daxildir?

- **Təlim məlumatları** (bax: `LLM03`);
- **Başqa provayderdən alınan pre-trained LLM-lər**;
- **Plugin-lər və API inteqrasiyaları** (bax: `LLM07`);
- **Modelin yerləşdirildiyi bulud infrastrukturu və arxitektur komponentlər**.

Bu elementlərdən hər hansı birində zəiflik mövcuddursa, hücumçular bu nöqtədən **bütün sistemə sızmaq imkanı əldə edə bilərlər**.

---

### 🎯 Potensial nəticələr:

- **Məlumat sızması** (data leak);
- **İntellektual mülkiyyətin oğurlanması** (model parametrləri, xüsusi təlim dəstləri);
- **Zəhərlənmiş plugin və ya kitabxana vasitəsilə arxa qapı yaradılması**;
- **Müxtəlif inteqrasiyalar üzərindən sistemin davranışının manipulyasiyası**.

Bu risklər həm **ML**, həm də **LLM əsaslı tətbiqlərdə** təşkilatlara ciddi hüquqi, maliyyə və texniki nəticələr doğura bilər.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

1. **Software Bill of Materials (SBOM)** – istifadə olunan komponentlər və onların mənbələri izlənməlidir;
2. **Plugin və kitabxanaların imzalanması və verifikasiya olunması** – yalnız etibarlı provayderlərdən istifadə edilməlidir;
3. **Təlim məlumatlarının və pre-trained modellərin audit edilməsi** – onların mənbəyi və orijinallığı yoxlanmalıdır;
4. **Zəncir boyu təhlükəsizlik nəzarət nöqtələri** – hər bir mərhələdə ayrıca təhlükəsizlik yoxlamaları həyata keçirilməlidir.

---

Unutmaq olmaz: **bir sistem yalnız ən zəif halqası qədər təhlükəsizdir**. LLM tətbiqlərində bu “ən zəif halqa” tez-tez təchizat zəncirindəki nəzərdən qaçan komponentlər olur.

## LLM06: Sensitive Information Disclosure (Məxfi Məlumatların Sızması)

**Sensitive Information Disclosure** – LLM sistemlərində **məxfi və həssas məlumatların istəmədən və ya manipulyasiya yolu ilə ifşa olunması** deməkdir. Bu, **istifadəçi sorğularına cavab verərkən** və ya **təlim zamanı daxil edilmiş məlumatlara əsaslanan cavablarda** baş verə bilər.

---

### 🔍 Riskin mahiyyəti nədir?

LLM:

- **Öncədən daxil edilmiş və ya fine-tuning zamanı öyrənilmiş məlumatlara** əsaslanaraq cavab verir;
- Bu məlumatlar arasında **şəxsi, kommersiya və ya hüquqi baxımdan kritik olanlar** ola bilər;
- Hücumçular bu zəiflikdən istifadə edərək **icazəsiz məlumatlara çıxış əldə edə** bilərlər.

---

### 🎯 Mümkün ssenarilər:

- LLM **müştəri məlumatlarını**, **daxili sənədləri** və ya **əməliyyat detalları** kimi **gizli məlumatları çıxışda əks etdirə bilər**;
- Əgər model **şəxsi məlumatlarla təlim olunubsa**, bu məlumatlar **çox spesifik suallarla və ya prompt injection hücumu ilə** (bax: `LLM01`) yenidən modeldən alınır;
- **“Bu məlumatı gizli saxla”** tapşırığı belə LLM-in cavabında bu məlumatın sızmasını tamamilə əngəlləmir.

---

### 🚨 Təsirlər:

- **Məxfilik pozuntuları** və **GDPR kimi normativ tələblərin pozulması**;
- **Maliyyə və hüquqi məsuliyyətlər**;
- **İctimaiyyət qarşısında nüfuz itkisi**;
- **Konkret biznes proseslərinin pozulması və ya rəqibə ötürülməsi riski**.

---

### 🛡️ Müdafiə və tövsiyələr:

1. **LLM-in giriş və çıxışlarına ciddi nəzarət tətbiq edilməlidir** – kim, nə zaman və hansı məqsədlə sorğu göndərə bilir?
2. **Modelin təlim məlumatları öncədən analiz olunmalı**, **həssas məlumatlar müəyyənləşdirilməli** və ya ümumiləşdirilməlidir;
3. **Əsasən müştəri məlumatları ilə işləyən modellər üçün əlavə çoxsəviyyəli təhlükəsizlik yanaşması** (RBAC, data masking, logging) tətbiq edilməlidir;
4. **Prompt Injection hücumlarına qarşı filtrlər** – istifadəçilərin sorğuları təhlil edilməli və şübhəli davranışlar bloklanmalıdır;
5. **LLM-in cavablarında məxfi məlumatların olub-olmaması avtomatik yoxlanmalıdır** (post-output content validation).

---

Qısaca desək, **LLM-lərin “unutmaq” qabiliyyəti yoxdur** – bir dəfə öyrəndiyi məlumatı çox hallarda qoruyur və lazım gəldikdə (hətta icazəsiz halda) çıxışda təqdim edə bilər.

## LLM07: Insecure Plugin Design (Təhlükəli Plugin Dizaynı)

**Insecure Plugin Design** – LLM əsaslı sistemlərə əlavə funksionallıq gətirmək üçün istifadə olunan **plugin-lərin zəif və nəzarətsiz şəkildə dizayn olunması** nəticəsində yaranan təhlükəsizlik boşluqlarını əhatə edir. LLM-lər tez-tez digər sistemlərlə inteqrasiya olunur və bu zaman **plugin-lər vasitəsilə xarici servislərlə qarşılıqlı əlaqə qururlar**.

---

### 🔌 Risk nədən ibarətdir?

Əgər plugin:

- **LLM-in verdiyi çıxışı kor-koranə qəbul edirsə**,
- Heç bir **doğrulama (validation)** və **sanitizasiya (input cleaning)** aparmırsa,

…onda bu, **sistemin ciddi təhlükələrə açıq qalmasına** səbəb olur.

---

### ⚠️ Yayılan zəiflik növləri:

Plugin-in konkret funksionallığından asılı olaraq aşağıdakı klassik veb zəifliklər meydana çıxa bilər:

- **Cross-Site Scripting (XSS):** LLM tərəfindən yaradılmış HTML/JS çıxışları istifadəçinin brauzerində icra olunur;
- **SQL Injection:** Plugin LLM-in verdiyi məlumatı birbaşa SQL sorğusuna yerləşdirir;
- **Server-Side Request Forgery (SSRF):** Plugin vasitəsilə LLM xarici serverlərə sorğu göndərərək daxili infrastruktur məlumatlarını aşkar edə bilər;
- **Remote Code Execution (RCE):** LLM-in cavabı icra edilən kod şəklində serverə ötürülürsə, hücumçu zərərli əmrlərlə sistemə sızır.

---

### 🔍 Niyə bu xüsusilə təhlükəlidir?

- LLM-lər qeyri-deterministikdir və **çox geniş spektrdə cavablar yarada bilirlər**;
- Plugin-lər isə əgər **standart təhlükəsizlik təbəqələrinə sahib deyilsə**, bu cavabları **icra edə və ya sistemlərə ötürə** bilər;
- Nəticədə **LLM cavabı sistemə hücum vasitəsinə çevrilir**.

---

### 🛡️ Müdafiə və tövsiyələr:

1. **LLM çıxışlarına əsaslanan plugin-lər mütləq validasiyadan keçməlidir** – heç bir cavab birbaşa icra olunmamalıdır;
2. **Məlumat sanitizasiyası** – istənilən istifadəçi və ya modeldən gələn cavabdan əvvəl təhlükəsiz struktur yoxlaması aparılmalıdır;
3. **Plugin funksiyaları minimum imtiyaz prinsipi ilə dizayn edilməlidir** (Principle of Least Privilege);
4. **Qara siyahı (blacklist) deyil, icazə verilmişlər siyahısı (whitelist) əsaslı sorğu və cavab tənzimləmələri** tətbiq edilməlidir;
5. **Plugin təhlükəsizliyi ayrıca audit olunmalı və OWASP-ın veb zəiflikləri ilə uyğun testlərdən keçirilməlidir**.

---

LLM-in özü nə qədər güclü olursa-olsun, ona qoşulan zəif plugin sistemi **bütün tətbiqin təhlükəsizliyini poza bilər**.

## LLM08: Excessive Agency (Nəzarətsiz Səlahiyyətlər)

**Excessive Agency**, yəni *nəzarətsiz və həddindən artıq səlahiyyətlərin verilməsi*, LLM-ə (Large Language Model) zəruri ehtiyacdan artıq icazə və funksionallıqların təqdim olunması nəticəsində yaranan təhlükəsizlik zəifliklərini əhatə edir. Bu hal, informasiya təhlükəsizliyində əsas prinsip sayılan **“minimum imtiyaz prinsipi”nə** (Principle of Least Privilege) ziddir və modelin istismar oluna biləcək hücum səthini əhəmiyyətli dərəcədə genişləndirə bilər.

---

### 🛠️ Riskin kökü nədədir?

LLM sistemləri aşağıdakı hallarda təhlükəli səlahiyyətlərə malik ola bilər:

- Xarici sistemlər və xidmətlərlə **birbaşa əlaqə qurmaq** imkanı olduqda;
- **Plugin-lər, API-lər, məlumat bazaları və əməliyyat sistemləri ilə inteqrasiya** edildikdə;
- Geniş əməliyyat imkanları **məhdudlaşdırılmadan tətbiqə verildikdə**.

---

### 🎯 Praktik ssenari:

Tutaq ki, bir LLM istifadəçinin sorğusuna uyğun məlumatı təqdim etmək üçün **SQL verilənlər bazasına qoşulub**. Əgər bu LLM-in girişləri və səlahiyyətləri məhdudlaşdırılmayıbsa, hücumçu:

- Modeli **aldadaraq** `DELETE`, `INSERT`, `DROP TABLE` kimi əmrləri **yerinə yetirməsinə səbəb ola bilər**;
- Bu isə verilənlər bazasının **bütövlüyünü pozur**, **məlumat itkisi**, **sistem sabitliyinin pozulması** və hətta **xidmətin dayandırılması** ilə nəticələnə bilər.

---

### ⚠️ Nəticələr:

- **Nəzarətsiz əmrlərin icrası**;
- **Təsadüfi və ya məqsədli məlumat dəyişiklikləri**;
- **Sistemdaxili səlahiyyətlərin istismar olunması**;
- **Rəqəmsal infrastruktura zərər verilməsi**.

---

### 🛡️ Müdafiə və tövsiyələr:

1. **Minimum imtiyaz prinsipi tətbiq edilməlidir** – LLM yalnız konkret tapşırığını yerinə yetirmək üçün lazım olan əmrləri icra edə bilməlidir;
2. **İcazə verilmişlər siyahısı (whitelisting)** – LLM yalnız **icazə verilmiş sistemlər və xidmətlər** ilə əlaqə qura bilməlidir;
3. **Verilənlər bazalarına giriş səlahiyyətləri ciddi şəkildə məhdudlaşdırılmalıdır** – sorğular yalnız `SELECT` səviyyəsində olmalıdır;
4. **Sistemdaxili əmrlərə qarşı filtr mexanizmləri** tətbiq edilməlidir;
5. **Audit və loqlaşdırma** vasitəsilə LLM-in etdiyi hər bir əməliyyat izlənməli və təhlil olunmalıdır.

---

Unutmaq olmaz: LLM nə qədər çox səlahiyyətə sahibdirsə, onun **istismar potensialı** da bir o qədər artır. Bu səbəbdən **funksionallıq və təhlükəsizlik arasında balans** düzgün qurulmalıdır.

## LLM09: Overreliance (Həddindən Artıq Etibar)

**Overreliance** – yəni *LLM-lərə həddindən artıq güvənmək*, təşkilatların **LLM çıxışlarına tənqidi yanaşmadan və yoxlamadan** güvəndikləri hallarda ortaya çıxan təhlükəsizlik zəifliyidir. LLM-lər təbiətcə **statistik proqnoz əsaslı işlədikləri üçün** onlar faktoloji səhvlərə, qeyri-dəqiq məlumatlara və zərərli nəticələrə səbəb ola bilərlər.

---

### ⚙️ LLM necə səhv edə bilər?

- **Faktual səhvlər:** Tarix, texniki detallar, hüquqi və ya tibbi məlumatlarda dəqiqlik zəifliyi;
- **Səhv kod parçaları:** İstifadəçiyə təklif olunan kodun **sintaksis və ya məntiq baxımından səhv** olması;
- **Uydurma cavablar (hallucination):** LLM-in qeyri-mövcud sənədlər, resurslar və ya anlayışlar təqdim etməsi.

---

### 🎯 Təhlükəli ssenarilər:

- Bir təşkilat LLM-in verdiyi məlumatı **doğrulamadan** daxili hesabatlarda, hüquqi sənədlərdə və ya müştəri ilə ünsiyyətdə istifadə edir;
- LLM tərəfindən yaradılmış **yanlış kod** birbaşa tətbiqə daxil edilir;
- Nəticədə **funksional pozuntular**, **məlumat itkisi**, **məxfi məlumatların səhv emalı** və **hüquqi məsuliyyətlər** yarana bilər.

---

### 📉 Nəticələr:

- **Qərarların səhv əsaslandırılması** – məsələn, səhv LLM çıxışına əsasən idarəetmə qərarları;
- **Avtomatlaşdırılmış proseslərdə pozuntu** – LLM çıxışına əsaslanan skript və ya sorğuların sistemə zərər vurması;
- **Nüfuz itkisi və hüquqi risklər** – xüsusilə səhv informasiya müştəri və ya tərəfdaşlara yönəldildikdə.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

1. **LLM çıxışları heç vaxt avtomatik və yoxlanılmadan istifadə edilməməlidir** – xüsusilə biznes-kritik qərarlarda;
2. **“İnsanın təsdiqi” (human-in-the-loop)** prinsipi tətbiq olunmalıdır – LLM tərəfindən verilən məlumat və ya cavab mütləq **ekspert tərəfindən yoxlanmalıdır**;
3. **Çıxışların məntiqi və faktoloji yoxlanması üçün daxili alətlər və skriptlər** tətbiq oluna bilər;
4. **LLM-lərin rol və məsuliyyətləri aydın şəkildə müəyyən olunmalıdır** – məsələn: “yazı tərtibi üçün köməkçi”, “ideya generatoru” və s., lakin **qəti informasiya mənbəyi kimi yox**;
5. **Təhlükəli kontekslərdə istifadə məhdudlaşdırılmalıdır** – hüquqi məsləhətlər, maliyyə qərarları, şəxsi məlumatların işlənməsi və s.

---

LLM-lər güclü alətlər olsa da, **tənqidi yanaşma olmadan onlara tam güvənmək ciddi risklər doğurur**. İnsan nəzarəti və strukturlaşdırılmış yoxlama olmadan LLM çıxışı **faydalı yox, təhlükəli nəticələrə** səbəb ola bilər.

## LLM10: Model Theft (Modelin Oğurlanması)

Model Theft – yəni modelin oğurlanması, hücumçunun **LLM-in** özünü, yəni **onun təlim nəticəsində formalaşmış parametrlərini və öyrənilmiş dəyərlərini (weights)** ələ keçirdiyi təhlükəli bir insident növüdür. Bu hücum nəticəsində hücumçu **LLM-i tam şəkildə klonlaya və ya istismar edə bilər** – özü isə həmin modeli yaratmaq üçün tələb olunan resurs, vaxt və maliyyətdən yan keçmiş olur.

---

### 🎯 Nə baş verir?

- Hücumçu modelin **öyrənilmiş parametrlərinə və arxitekturasına çıxış əldə edir**;
- Bu məlumatlar əsasında eyni davranışı verən **tam replikasiya olunmuş model** yaradır;
- Hücumçu eyni modeli **xidmət olaraq daha ucuz qiymətə təqdim edir**, çünki o:
	- nə təlim üçün hesablama resursuna pul xərcləyib,
		- nə də illərlə məlumat toplama və təhlil mərhələsinə vaxt sərf edib.

---

### 📉 Təsirlər:

- **İntellektual mülkiyyət itkisi** – yüz minlərlə dollar sərf edilərək yaradılmış LLM modeli sızır;
- **Reputasiya zərəri** – eyni modelin icazəsiz versiyası bazarda yayılır;
- **Ticarət üstünlüyünün itirilməsi** – rəqiblər hüquqsuz şəkildə eyni texnologiyanı istifadə edir;
- **Etimad pozuntusu** – müştərilər və partnyorlar üçün ciddi təhlükəsizlik siqnalıdır.

---

### 🛡️ Müdafiə və tövsiyələr:

1. **Sertifikatlı autentifikasiya sistemləri tətbiq edilməlidir** – yalnız icazəsi olan istifadəçilər LLM-ə giriş əldə edə bilməlidir;
2. **İstifadə səviyyəsində giriş məhdudiyyətləri və audit mexanizmləri** qurulmalıdır (kim nə zaman, hansı funksiyadan istifadə edib);
3. **Modelin konfiqurasiya faylları və təlim nəticəsində formalaşmış dəyərləri şifrələnməli və digər sistem komponentlərindən ayrılmış şəkildə qorunmalıdır;**
4. **Çıxış səviyyəsində watermarking (rəqəmsal izlər) və ya model davranış izləri** əlavə edilə bilər – bu, oğurlanmış modelin daha sonra aşkarlanmasına imkan yaradır;
5. **API istifadəsində sürət məhdudiyyəti və anomal davranış deteksiyası** tətbiq olunmalıdır – məsələn, modelin “sual-cavab davranışları” klonlanırsa, sistem bunu müəyyən edə bilər.

---

Unutmaq olmaz: LLM-lər həm **məlumat ehtiyatı, həm də hesablama gücü baxımından ciddi sərmayə tələb edən yüksək texnoloji sistemlərdir**. Bu modellərin ələ keçirilməsi sadəcə **adi bir məlumat sızması deyil** – bu, təşkilatın strateji intellektual kapitalının, bir növ **“beyninin” oğurlanması** deməkdir.