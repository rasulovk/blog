---
title: GenAI Risk Bələdçisi – Hissə 1
source: https://cyberhub.az/genai-part1-2/
author:
  name: Kamil R.
  role: Writer
date: 2025-06-13
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: GenAI Security
---

“Kibertəhlükəsizlik təkcə texnoloji alətlərlə bağlı deyil, həm də davamlı bir prosesdir.” — Bruce Schneier

Son dövrlərdə **lokal (on-premises)** formada **LLM (Large Language Model)** qurmaq tendensiyaya çevrilib. Bir çox təşkilat bu sistemləri “Əvvəl qur, sonra təhlükəsiz et” prinsipi ilə tətbiq edir. Lakin bu yanaşma – yəni ilkin mərhələdə təhlükəsizlik tədbirləri görüldükdən sonra mühitin nəzarətsiz qalması – **məlumat sızması**, **konfidensiallığın pozulması** və **data breach** kimi ciddi nəticələrə səbəb ola bilər.

Əslində isə süni intellekt sistemlərinin təhlükəsizliyi **bir dəfəlik tədbir deyil**, **davamlı nəzarət, audit və risk qiymətləndirməsi** tələb edən prosesdir. Bu kontekstdə **AI təhlükəsizlik strategiyaları**, xüsusilə **ML texnologiyasına əsaslanan sistemlərdə real təhlükələr** günümüzdə daha da aktuallaşıb.

Bu barədə daha geniş məlumatı bu məqalədə oxuya bilərsiniz:  
🔗 [Süni İntellektin Görünməyən Təhlükəsi](https://cyberhub.az/suni-intellektin-gorunm%c9%99y%c9%99n-t%c9%99hluk%c9%99si/)

### ML OWASP Top 10

[Web Applications](https://owasp.org/www-project-top-ten/) (Veb Tətbiqlər), [Web APIs](https://owasp.org/www-project-api-security/) (Veb API-lər) və [Mobile Applications](https://owasp.org/www-project-mobile-top-10/) (Mobil Tətbiqlər) üçün olduğu kimi, OWASP tərəfindən süni intellekt modelləri və maşın öyrənməsi (ML – Machine Learning) əsaslı sistemlərin yerləşdirilməsi və idarə olunması ilə bağlı təhlükəsizlik risklərini əhatə edən [Machine Learning Security Top 10](https://owasp.org/www-project-machine-learning-security-top-10/) (ML Təhlükəsizliyi üzrə Ən Çox Yayılan 10 Təhlükəsizlik Riski) siyahısı da dərc olunub.

Aşağıda OWASP tərəfindən təqdim edilən **ML əsaslı sistemlər üçün Top 10 Təhlükəsizlik Riski** (Top 10 for Machine Learning Security) siyahısı verilmişdir. Hər bir risk ML sistemlərinin yerləşdirilməsi və idarəsi zamanı qarşıya çıxa biləcək konkret təhlükəsizlik problemlərinə işarə edir:

| **ID** | **Təsvir** |
| --- | --- |
| **ML01** | **Input Manipulation Attack** (Giriş Məlumatlarının Manipulyasiyası Hücumu): Hücumçular modelin yanlış və ya zərərli nəticə verməsi üçün giriş məlumatlarını dəyişdirirlər. |
| **ML02** | **Data Poisoning Attack** (Təlim Məlumatlarının Məqsədli Təhrif Edilməsi Hücumu): Hücumçular təlim verilən məlumat dəstinə zərərli və ya yanıltıcı məlumatlar əlavə edərək modelin performansını zəiflədə və ya arxa qapı (backdoor) yarada bilərlər. |
| **ML03** | **Model Inversion Attack** (Modelin İnversiyası Hücumu): Hücumçular modelin çıxışlarını təhlil edərək giriş məlumatlarını yenidən yaratmağa çalışır, bu da məxfi məlumatların aşkar olunmasına səbəb ola bilər. |
| **ML04** | **Membership Inference Attack** (Üzvlüyün Müəyyənləşdirilməsi Hücumu): Hücumçular modelin davranışını təhlil edərək müəyyən bir məlumatın təlim dəstində olub-olmadığını aşkar edə bilərlər. Bu, şəxsi məlumatların sızmasına gətirib çıxara bilər. |
| **ML05** | **Model Theft** (Modelin Oğurlanması): Hücumçular orijinal model ilə qarşılıqlı əlaqə quraraq yeni model təlim etdirir və bu yolla intellektual mülkiyyəti oğurlayırlar. |
| **ML06** | **AI Supply Chain Attacks** (Süni İntellekt Təchizat Zənciri Hücumları): Hücumçular ML sistemlərinin təchizat zəncirindəki zəif nöqtələrdən istifadə edərək sistemə nüfuz edirlər. |
| **ML07** | **Transfer Learning Attack** (Transfer Öyrənmə Hücumu): Hücumçular əsas (pre-trained) modeli manipulyasiya edir və üçüncü tərəf bu modeli spesifik məqsədlər üçün yenidən uyğunlaşdırdıqda (fine-tuning) arxa qapılar və ya qeyri-obyektiv nəticələr ortaya çıxır. |
| **ML08** | **Model Skewing** (Modelin Yönləndirilməsi): Hücumçular təlim məlumat dəstini manipulyasiya edərək modelin qərar vermə meyarlarını qəsdən pozurlar. |
| **ML09** | **Output Integrity Attack** (Çıxış Nəticələrinin Təhrif Edilməsi Hücumu): Hücumçular çıxış nəticələrinin təhrif edilməsi ilə hücum həyata keçirir; bu zaman onlar modelin verdiyi cavabı sonrakı emaldan əvvəl dəyişdirir və sistemi sanki model fərqli nəticə təqdim etmiş kimi yönləndirirlər.” |
| **ML10** | **Model Poisoning** (Model Parametrlərinin Təhrif Edilməsi Hücumu): Hücumçular modelin daxili parametrlərini (weights) məqsədli şəkildə təhrif edərək onun fəaliyyətini pozur və ya təhlükəli arxa qapılar əlavə edirlər. |

### ML01: Input Manipulation Attack (Giriş Məlumatlarının Manipulyasiyası Hücumu)

Adından da göründüyü kimi, *Input Manipulation Attack* ML modelinə qarşı giriş məlumatlarının manipulyasiya olunması ilə həyata keçirilən hücum növüdür. Bu tip hücumların nəticəsi adətən modelin gözlənilməz və düzgün olmayan nəticələr verməsi olur, yəni modelin nəzərdə tutulmuş davranışından kənara çıxması ilə nəticələnir.

Bu cür hücumların təsiri modelin tətbiq olunduğu konkret ssenariyə və şəraitə əsasən dəyişə bilər. Zərərin miqyası isə sadə funksional problemlərdən başlayaraq maliyyə itkisinə, nüfuzun zədələnməsinə, hüquqi məsuliyyətə və ya hətta məlumat itkisinə qədər geniş bir spektri əhatə edə bilər.

**Reallıqda bu cür hücumlar necə baş verir?**  
Əksər hallarda, hücumçular zərərsiz görünən giriş məlumatlarına çox kiçik dəyişikliklər (perturbations – pozuntular) tətbiq edirlər. Bu dəyişikliklər insan gözü ilə fərq edilməyəcək qədər kiçik olur, lakin ML modeli üçün önəmli nəticələr doğurur – yəni sistem gözlənilməz şəkildə davranmağa başlayır.

**Məsələn:**  
Tutaq ki, bir avtonom avtomobil ML əsaslı sistemdən istifadə edərək yol nişanlarını təsnifləşdirir – sürət limiti, dayan nişanı və s. Hücumçu bu nişanlara azacıq dəyişikliklər əlavə edir: xüsusi yerləşdirilmiş toz, kiçik stikerlər və ya graffitilər. İnsan gözünə bu dəyişikliklər zərərsiz görünür, lakin model bu nişanları düzgün tanımaya bilər. Bu isə avtomobilin təhlükəli qərarlar verməsinə, sərnişinlər üçün ölümcül nəticələrə səbəb ola bilər.

Bu hücum növü sübut olunmuş real təhlükədir və aşağıdakı akademik məqalələrdə daha ətraflı izah olunur:

- [Adversarial Examples in the Physical World (Kurakin et al.)](https://arxiv.org/pdf/1707.08945)
- [Sticker Attacks on Vision Transformers (Ge et al.)](https://arxiv.org/pdf/2307.08278)

📌 **Nəticə:**  
*Input manipulation* hücumları ML modellərinin etibarlılığına ciddi təhdid yaradır. Bu səbəbdən kritik sahələrdə istifadə olunan ML sistemləri üçün müdafiə mexanizmlərinin (məsələn, adversarial training – hücuma davamlı təlim) tətbiqi vacibdir.

### ML02: Data Poisoning Attack (Təlim Məlumatlarının Məqsədli Təhrif Edilməsi Hücumu)

**Data Poisoning Attack** – ML əsaslı sistemlərə qarşı edilən hücum növüdür. Bu hücumda təlim verilən məlumat dəstinə bilərəkdən zərərli və ya yanıltıcı məlumatlar daxil edilir. Məqsəd modelin dəqiqliyini, performansını və ya davranışını pozmaqdır.

Bildiyimiz kimi, hər bir ML modelinin keyfiyyəti birbaşa təlim məlumatının keyfiyyətindən asılıdır. Buna görə də bu cür məlumatların məqsədli təhrif edilməsi hücumları nəticəsində model:

- **yanlış proqnozlar** verə bilər,
- **bəzi girişləri səhv təsnifləşdirə** bilər,
- və ya müəyyən ssenarilərdə **gözlənilməz davranışlar** sərgiləyə bilər.

Bu hücumlar xüsusilə o zaman daha effektiv olur ki, model **avtomatlaşdırılmış şəkildə müxtəlif mənbələrdən böyük həcmli məlumatlar toplayır**. Əgər bu mənbələr ictimai və ya doğrulanmamış mənbələrdirsə, təlim dəstinin manipulyasiyaya uğraması ehtimalı daha yüksəkdir.

---

### 🎯 Real nümunə ilə izah:

Tutaq ki, antivirus proqramında istifadə olunan bir ML modelinə təhrif edilmiş məlumat daxil edilir. Hücumçu bu modeli öyrətmək üçün istifadə olunan təlim dəstinə qəsdən saxta nümunələr əlavə edir. Beləliklə, modeldə **arxa qapı (backdoor)** yaradılır. Nəticədə:

- Hücumçu öz xüsusi yazdığı zərərli proqramı (*malware*) modelə təqdim edir,
- Model isə bu zərərli proqramı **zərərsiz fayl** kimi **təsnifləşdirir**.

Bu üsulla hücumçu sistemə sızmadan əvvəl modeli “aldatmağa” nail olur.

Daha ətraflı texniki izah və praktiki ssenarilər bu akademik məqalədə təqdim olunub:  
🔗 [Backdoor Poisoning in ML Models](https://arxiv.org/pdf/2408.13221)

---

📌 **Nəticə:**  
Data poisoning hücumları ML modellərinin təhlükəsizliyini sarsıda biləcək ən təhlükəli üsullardan biridir. Bu səbəbdən:

- **Mənbələrin etibarlılığı yoxlanmalıdır**,
- **Təlim verilmiş məlumatlar analiz edilməlidir**,
- **Anomaliya aşkarlama və məlumat təmizləmə (data sanitization)** mexanizmləri tətbiq olunmalıdır.

### ML03: Model Inversion Attack (Modelin İnversiyası Hücumu)

**Model Inversion Attack** – yəni *modelin inversiyası hücumu*, hücumçunun hədəf modelin çıxışları əsasında onun daxil olan məlumatları yenidən bərpa etməyə çalışdığı bir hücum növüdür. Hücumçu ayrıca bir ML modeli təlim etdirir və bu model hədəf sistemin çıxışlarına əsaslanaraq giriş məlumatlarını “tərsinə” bərpa edir.

Bu yanaşma hədəf modelin funksionallığını əks istiqamətdə tətbiq etdiyi üçün **“inversiya”** adlandırılır.

---

### 🎯 Təsir sahəsi:

Bu hücumlar xüsusilə o zaman təhlükəlidir ki:

- Hədəf model **məxfi və ya şəxsi məlumatlar** üzərində işləyir;
- Məsələn: **tibb sahəsində** istifadə olunan ML modelləri – xərçəng diaqnostikası, laborator nəticələrin təhlili və s.

Belə modellərdən çıxışları əldə edən bir hücumçu aşağıdakı riski yarada bilər:

- Modelin verdiyi nəticəyə əsasən, **pasiyentin sağlamlıq məlumatlarını bərpa edə** bilər;
- Bu isə **şəxsi məlumatların sızması** və məlumatların məxfiliyinin **pozulması** deməkdir.

---

### ⚙️ Texniki nüans:

- Əgər hədəf model çoxlu məlumat çıxışı verirsə (məsələn: ehtimalların hamısını göstərirsə), **inversiya daha asan olur**.
- Lakin əgər model yalnız **nəticəni (məsələn: ən yüksək ehtimallı sinifi)** qaytarırsa, bu hücumu həyata keçirmək **xeyli çətinləşir**.
- Yəni, **çıxışın həcm və dəqiqliyi** – inversiya hücumunun uğur şansını birbaşa təsir edir.

---

🔬 Model inversion hücumlarının **dil modellərinə** (Language Models – *LLM*) tətbiqi ilə bağlı ətraflı izah bu elmi işdə təqdim olunub:  
📄 [Language Model Inversion Paper](https://arxiv.org/pdf/2311.13647)

---

📌 **Nəticə və tövsiyələr:**

- Hədəf modelin çıxış məlumatlarını **məhdudlaşdırmaq** (yalnız ən yüksək ehtimallı nəticəni vermək) riskləri azalda bilər;
- **Differential privacy** (*diferensial gizlilik*) kimi metodlardan istifadə modelin məlumat “sızdırma” qabiliyyətini azaldır;
- Həssas məlumatlar üzərində təlim keçmiş modellər **gizlilik risklərinə qarşı xüsusi yoxlamalardan** keçirilməlidir.

### ML04: Membership Inference Attack (Üzvlüyün Müəyyənləşdirilməsi Hücumu)

**Membership Inference Attack** – ML modelinin təlimində müəyyən bir məlumat nümunəsinin istifadə olunub-olunmadığını təyin etməyə yönəlmiş hücum növüdür. Hücumçu modelə müxtəlif girişlər təqdim edərək onun cavablarını təhlil edir və bunun əsasında modelin “xatırladığı” məlumatları müəyyən etməyə çalışır.

Əgər model **məxfi məlumatlar** üzərində təlim keçibsə – məsələn:

- **Tibbi məlumatlar**
- **Maliyyə əməliyyatları**
- **Şəxsi məlumat bazaları**

…bu hücumlar **ciddi məxfilik riskləri** yaradır.

---

### 🎯 Hücum necə işləyir?

Model adətən təlimdə gördüyü məlumatlara qarşı:

- Daha **dəqiq və inamlı cavab** verir,
- Daha **aşağı xəta göstəricisi** sərgiləyir.

Hücumçu da bu fərqləri analiz edərək aşağıdakı nəticəyə gəlir:

- “Bu məlumat modeli təlim zamanı görüb.”
- Yəni, **məlumat dəstinə “üzv” olub-olmadığını** təyin edir.

---

### ☁️ Xüsusilə riskli mühitlər:

Bu hücumlar **bulud əsaslı modellər** və ya **MLaaS (Machine Learning as a Service)** kimi platformalarda daha təhlükəlidir. Çünki:

- Modellər **ictimaiyyətə açıq ola bilər**,
- Hücumçu **modelə asanlıqla giriş imkanı** əldə edə bilər.

---

### 🔍 Tətbiq və nümunə:

Bir dil modelini (LLM – *Large Language Model*) nəzərə alaq. Hücumçu modelə müəyyən fraqmentləri təqdim edir və cavabların **sərtliyi**, **təkrarlanması** və **əhvalı** üzərindən bu fraqmentin təlimdə olub-olmadığını müəyyənləşdirə bilər.

Bu hücum növünün dil modellərində necə işlədiyinə dair geniş təhlil aşağıdakı elmi məqalədə yer alır:  
📄 [Assessment of Membership Inference Attacks](https://arxiv.org/pdf/2402.07841)

---

📌 **Tövsiyələr və müdafiə üsulları:**

- Modelin çıxışları **məhdudlaşdırılmalıdır** – yəni bütün ehtimalları deyil, yalnız nəticəni qaytarmaq;
- **Regularization** və **dropout** kimi texnikalar **modelin “xatırlama” qabiliyyətini** azalda bilər;
- **Differential privacy** istifadə edilərək modelin təlim məlumatlarını “unutması” təmin edilə bilər.

### ML06: AI Supply Chain Attacks (Süni İntellekt Təchizat Zənciri Hücumları)

**AI Supply Chain Attacks** – yəni *təchizat zənciri hücumları*, ML əsaslı sistemlərin yaradılması, yerləşdirilməsi və saxlanılması prosesindəki müxtəlif mərhələləri hədəf alan hücumlardır. Bu hücumlar ML sistemlərinin formalaşmasında iştirak edən **kompleks və bir-biri ilə əlaqəli ekosistemdəki zəif nöqtələrdən** istifadə edir.

---

### 🧩 ML təchizat zənciri hansı hissələrdən ibarətdir?

Süni intellekt sistemləri ənənəvi IT sistemlərindən fərqli olaraq, aşağıdakı komponentlərə güclü şəkildə bağlıdır:

- **Üçüncü tərəf kitabxanaları** *(third-party libraries)*
- **Açıq mənbəli və ya ictimai verilənlər bazaları**
- **Əvvəlcədən təlim keçmiş modellər** *(pre-trained models)*
- **Məlumat toplama və etiketləmə xidmətləri**
- **Bulud infrastrukturları və MLaaS platformaları**

Bunların hər biri potensial zəiflik daşıyır və hücumçular üçün giriş nöqtəsinə çevrilə bilər.

---

### 🎯 Nümunəvi ssenarilər:

- Hücumçu təlim üçün istifadə olunan açıq verilənlər bazasına **zərərli və ya yanıltıcı nümunələr** yerləşdirir;
- Tərtibatçı tərəfindən istifadə edilən bir üçüncü tərəf kitabxanaya **zərərli kod** daxil edilir;
- Bulud servisləri üzərindən **əvvəlcədən qəsdən təhrif edilmiş model** tətbiqə inteqrasiya olunur.

Nəticədə, sistemdə **performans pozuntuları**, **etibarsız nəticələr** və ya **məxfi məlumatların sızması** baş verə bilər.

---

### 📈 Riskin böyümə səbəbi:

Bugünkü ML sistemləri:

- **Açıq mənbə alətlərindən**
- **İctimai verilənlərdən**
- və **xarici mənbədən gələn modellərdən** intensiv şəkildə istifadə edir.

Bu isə hücum səthini artırır və təchizat zənciri hücumlarını daha praktik və təhlükəli edir.

📌 **Tövsiyələr və müdafiə strategiyaları:**

- Yalnız **etibarlı və audit olunmuş mənbələrdən** istifadə edin;
- **Software Bill of Materials (SBOM)** tətbiq edin – istifadə olunan komponentlərin və asılılıqların tam siyahısını izləyin;
- **Model və kitabxana imzalanması** ilə dəyişikliklərə qarşı müdafiə olun;
- Təlimdən əvvəl verilənlər üzərində **təhrif olunma yoxlaması və təmizləmə (sanitization)** aparın.

## ML07: Transfer Learning Attack (Transfer Öyrənmə Hücumu)

**Transfer Learning Attack** – ML sistemlərində **əvvəlcədən təlim olunmuş modellərin** yenidən istifadə olunması zamanı baş verən təhlükəli bir hücum növüdür. Bugünkü real layihələrdə sıfırdan model təlim etdirmək yüksək resurs və zaman tələb etdiyi üçün **açıq mənbəli pre-trained modellər** (əvvəlcədən öyrədilmiş modellər) tez-tez başlanğıc nöqtəsi kimi istifadə olunur. Sonra isə bu model istifadəçinin konkret ehtiyacına uyğun **fine-tuning** (incə tənzimləmə) ilə uyğunlaşdırılır.

---

### 🎯 Hücum necə baş verir?

Bu hücumda, hücumçu əvvəlcədən təlim edilmiş modeli:

- **Manipulyasiya edir** (məsələn, arxa qapı – *backdoor* əlavə edir),
- Daha sonra bu model açıq platformalarda **digərləri tərəfindən istifadə olunur**.

Hətta sonradan tətbiq edilən **fine-tuning prosesi düzgün və zərərsiz məlumatlarla aparılsa belə**, modelin içindəki zərərli davranışlar dəyişmədən **son ML sisteminə daşıya bilər**.

---

### ☠️ Potensial təhlükələr:

- Hücumçu **istədiyi vəziyyətdə aktivləşən arxa qapı** qura bilər;
- Model **qərəzli qərarlar** verə bilər (məsələn: irq, cins və ya dil əsaslı diskriminasiya);
- İstifadəçi isə problemi **görmür**, çünki fine-tuning zamanı hər şey “normal” görünür.

---

### 📌 Nəticə və risklər:

Transfer learning sürətli və effektiv ML tətbiqləri qurmaq üçün əlverişlidir, lakin:

- **İstifadə edilən pre-trained modelin mənbəyi yoxlanmırsa**, bu ciddi təhlükə yaradır;
- **Zərərli kod və ya davranışlar** modelin dərin qatlarında gizli qala bilər;
- **Etibarlı olmayan açıq mənbələrdən istifadə** riski daha da artırır.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

- Yalnız **etibarlı, audit olunmuş mənbələrdən** pre-trained modellər istifadə edin;
- İstifadə etdiyiniz modelin **orijinallığını yoxlamaq üçün imza (hash/checksum) doğrulaması** aparın;
- **Transfer learning sonrası testlər** vasitəsilə modelin qərar davranışını analiz edin – normal görünməyən çıxışlar üçün xüsusi yoxlamalar aparın.

## ML08: Model Skewing (Modelin Yönləndirilməsi)

**Model Skewing** – yəni modelin yönləndirilməsi hücumu, ML modelinin nəticələrini **qəsdən yönlü və qərəzli şəkildə dəyişdirmək** məqsədi daşıyır. Hücumçular bu məqsədə **təlim məlumat dəstinə yanlış, yanıltıcı və ya qərəzli nümunələr əlavə etməklə** nail olurlar. Nəticədə modelin çıxışları hücumçunun maraqlarına uyğun şəkildə pozulur.

---

### 🎯 Hücum necə həyata keçirilir?

- Hücumçu modelin təlim dəstinə **sistemli şəkildə səhv etiketlənmiş və ya manipulyasiya olunmuş məlumatlar** əlavə edir;
- Bu manipulyasiya **modelin qərarvermə meyarlarını dəyişdirir**;
- Əldə edilən nəticələr isə **qərəzli, səhv və ya təhlükəli ola bilər**.

---

### 🔍 Praktik nümunə:

Gəlin daha əvvəl müzakirə etdiyimiz antivirus modelini yenidən nəzərdən keçirək. Bu model müəyyən bir binar faylın *malware* (zərərli proqram) olub-olmadığını təsnif edir.

- Hücumçu bu modelin təlim dəstinə **öz zərərli proqramını “benign” (zərərsiz)** kimi **səhv etiketləyib** daxil edir;
- Model bu zəhərli məlumatı öyrənir və gələcəkdə **oxşar zərərli proqramları zərərsiz kimi** qəbul etməyə başlayır;
- Beləliklə, hücumçu **aşkar olunmadan sistemə nüfuz edə bilir**.

---

### 📌 Nəticələr və Risklər:

- Modelin qərarları **qərəzli və ya təhrif olunmuş olur**;
- Təhlükəli nümunələr **filtrlənmir və ya aşkarlanmaz qalır**;
- Modelin **etibarlılığı və təhlükəsizliyi ciddi şəkildə pozulur**.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

- Təlim məlumat dəstində **etiketlərin düzgünlüyü ciddi yoxlanmalıdır**;
- Təlimdən əvvəl **verilənlərin təmizlənməsi (data sanitization)** və **anomal analiz** aparılmalıdır;
- Modelin nəticələri **davranış testlərindən** keçirilməlidir – qeyri-adi qərarlar diqqətlə araşdırılmalıdır;
- **Əl ilə yoxlanılmış (human-verified) məlumat dəstləri** ilə paralel yoxlamalar tətbiq olunmalıdır.

## ML09: Output Integrity Attack (Çıxış Nəticələrinin Təhrif Edilməsi Hücumu)

**Output Integrity Attack** – ML əsaslı sistemin **çıxış mərhələsinə yönəlmiş** bir hücum növüdür. Bu hücumda hədəf modelin özü deyil, onun **verdiyi nəticə (çıxış)** olur. Hücumçu modelin çıxışını **hədəf sistem tərəfindən emal olunmadan əvvəl** ələ keçirir və dəyişdirir.

Buradakı əsas təhlükə ondadır ki:

- Model **normal işləyir**,
- Ancaq **çıxış dəyişdirilir**,
- Və **bu dəyişiklik aşkarlanmaya bilər**.

---

### 🎯 Hücum necə həyata keçirilir?

- Modelin qərarı modelə **daxil edilmir**, əksinə **çıxış mərhələsində** manipulyasiya edilir;
- Hücumçu bu çıxışı **dəyişdirərək təhrif olunmuş nəticə** ötürür;
- Sistem isə **yanlış qərar qəbul edir**, çünki manipulyasiyanı fərq etmir.

---

### 🧪 Praktik nümunə:

Yenə də ML əsaslı antivirus modelini düşünək. Bu model:

- Binar faylı analiz edir,
- Əgər nəticə *malicious* (zərərli) çıxarsa, sistem bu faylı **avtomatik silir**.

Hücumçu isə:

- Faylı sistəmə **nüsxələyir**,
- Model onu düzgün şəkildə *malicious* kimi **təsnifləşdirir**,
- **Lakin hücumçu çıxışı dəyişərək “benign” (zərərsiz) kimi göstərir**.

Nəticədə sistem:

- Modelin düzgün qərar verdiyini düşünür,
- **Zərərli faylı silmir**, və beləliklə malware sistemdə qalır.

---

### ❗ Risklərin Çətinliyi:

Bu tip hücumların aşkarlanması çətindir:

- Model **sınaqdan keçəndə doğru cavab verir**;
- Lakin **çıxışa müdaxilə “arxa planda” baş verir**;
- **Ənənəvi təhlükəsizlik yoxlamaları** bunu müəyyən edə bilmir.

---

### 🛡️ Tövsiyələr və Müdafiə Yolları:

- Modelin çıxışı ilə onun **nəticəsinin emalı arasındakı əlaqə şifrələnməlidir**;
- **Output signing** və **təhlükəsiz tranzit protokolları** (məsələn: TLS) tətbiq edilməlidir;
- Sistemə **çıxış doğrulama (output validation)** mexanizmləri inteqrasiya olunmalıdır;
- **Tam auditable izləmə mexanizmi** qurulmalıdır – kim, nə vaxt, hansı nəticəni alıb?

## ML10: Model Poisoning (Model Parametrlərinin Təhrif Edilməsi Hücumu)

**Model Poisoning Attack** – ML sistemlərində **birbaşa modelin daxili parametrlərinə** (weights, biases və s.) yönəlmiş hücum növüdür. Əgər **Data Poisoning Attack** (ML02) zamanı hücumçu təlim məlumatını manipulyasiya edirdisə, **Model Poisoning** zamanı **birbaşa modelin özünə müdaxilə olunur**.

Bu cür hücumlar **çox daha dərinə nüfuz edir**, çünki artıq hücumçunun:

- Modelin **parametrlərinə birbaşa giriş imkanı** olmalıdır,
- Və həmin parametrləri **qəsdən və hədəfli şəkildə dəyişmək** qabiliyyəti olmalıdır.

---

### ⚙️ Hücum necə işləyir?

- Hücumçu modelin içindəki **öyrənilmiş parametrləri dəyişdirir**;
- Əgər bu dəyişiklik **rastgələ (arbitrary)** aparılarsa, model sadəcə zəif işləyər;
- Lakin məqsədli dəyişikliklərlə model:
	- **Yanlış proqnozlar verir**,
		- **Girişləri səhv təsnif edir**,
		- **Spesifik hallarda gözlənilməz davranışlar sərgiləyir**.

Bu, Data Poisoning hücumlarının təsiri ilə oxşardır, lakin **birbaşa model üzərində həyata keçirildiyi üçün daha kritik** nəticələrə səbəb ola bilər.

---

### 🧪 Texniki çətinliklər:

Modelin parametrlərini dəyişmək:

- **İncə və hədəfli manipulyasiya** tələb edir;
- Sadə dəyişikliklər **performansın düşməsinə** səbəb olsa da,
- Hədəfli şəkildə manipulyasiya edilən parametrlər **modelin funksional davranışını arxa qapılarla dəyişdirə bilər**.

---

### 🎯 Nəticə və risklər:

- Zərərli davranışlar sistemdə gizli şəkildə mövcud olur;
- ML modelindən istifadə edən qurumlar **gözlənilməz və təhlükəli nəticələrlə** qarşılaşa bilər;
- Təhlükənin aşkarlanması çətin olur, çünki **təlim və test nəticələri səthi olaraq normal görünə bilər**.

---

### 🛡️ Tövsiyələr və müdafiə yolları:

- Modelin parametrlərinə yalnız **etibarlı və məhdudlaşdırılmış giriş icazəsi** verilməlidir;
- **Model imzalanması (model signing)** və dəyişikliklərin yoxlanması üçün **hash doğrulaması** tətbiq olunmalıdır;
- Model yerləşdirilmədən əvvəl və sonra **təhlükəsizlik auditləri** aparılmalıdır;
- Modelin performansında **ani və qeyri-adi dəyişikliklər monitorinq edilməlidir**.

Ref: [https://cyberhub.az/chrome-tehlukesizliyi-cve-2025-5280/](https://cyberhub.az/chrome-tehlukesizliyi-cve-2025-5280/)