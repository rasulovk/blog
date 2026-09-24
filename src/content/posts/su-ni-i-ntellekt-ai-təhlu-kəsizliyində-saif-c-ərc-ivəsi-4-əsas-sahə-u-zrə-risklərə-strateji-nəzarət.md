---
title: "🔐Süni İntellekt (AI) Təhlükəsizliyində SAIF Çərçivəsi: 4 Əsas Sahə üzrə Risklərə Strateji Nəzarət"
source: https://cyberhub.az/saif-suni-intellekt-tehlukesizliyi/
author:
  name: Guljannat R.
  role: Writer
date: 2025-06-19
description: Süni intellektin (AI) tətbiqi texnoloji transformasiyanın hüdudlarını aşaraq, idarəetmə, risk və uyğunluq strukturunda məlumat axınlarının sistemli şəkildə tənzimlənməsini zəruri edir.
category: GenAI Security
---

Süni intellekt (AI) texnologiyalarının tətbiqi təşkilatlara yeni imkanlar qazandırmaqla yanaşı, ciddi təhlükəsizlik və məxfilik riskləri də yaradır. Məhz bu risklərin effektiv idarəsi məqsədilə Google tərəfindən hazırlanan Secure AI Framework (SAIF), süni intellekt sistemlərinin dizaynından istismara qədər bütün mərhələlərində təhlükəsizliyin və məxfiliyin əsas prinsip kimi tətbiqinə yönəlmiş strateji yanaşma təklif edir.

SAIF, OWASP-ın təqdim etdiyi texniki zəiflik siyahısından fərqli olaraq, AI sistemlərinin həyat dövrü boyunca – məlumat toplanmasından modelin istifadəsinə qədər – təhlükəsizlik və məxfilik tələblərinin necə inteqrasiya edilməli olduğunu sistemli şəkildə izah edir.

![SAIF çərçivəsi ilə süni intellekt təhlükəsizliyi və strukturlaşdırılmış müdafiə modeli](https://cyberhub.az/wp-content/uploads/2025/06/5377346531616751872.jpg)

SAIF çərçivəsi ilə süni intellekt təhlükəsizliyi və strukturlaşdırılmış müdafiə modeli

## SAIF nəyi əhatə edir?

SAIF, süni intellekt sistemlərinin təhlükəsiz inkişafını dörd əsas istiqamət üzrə strukturlaşdırır:

### 1\. Data

Bu sahə, məlumatların etibarlı mənbələrdən toplanması, uyğunluq və keyfiyyət baxımından qiymətləndirilməsi, eləcə də təlim məqsədilə strukturlaşdırılması proseslərini əhatə edir. Məhz bu mərhələdə “data poisoning” kimi hücumlar baş verə və modelin davranışına ciddi təsir göstərə bilər.

**[Fundamentals of Secure AI Systems with Personal Data](https://www.dpa.gr/sites/default/files/2025-03/Fundamentals%20of%20Secure%20AI%20Systems%20with%20Personal%20Data%20clear.pdf "Fundamentals of Secure AI Systems with Personal Data") –** Bu sənəd, şəxsi məlumatlarla işləyən AI sistemlərinin təhlükəsizliyi və hüquqi uyğunluğu kontekstində SAIF çərçivəsinə əlavə töhfələr verir. Xüsusilə “Data” və “Application” komponentlərinə yönələn bu sənəddə aşağıdakı əsas yanaşmalar vurğulanır:

- **Data sanitization:** AI sistemlərinə daxil edilən məlumatların məqsədəuyğun şəkildə təmizlənməsi və təsadüfən məxfi informasiyanın sızmasının qarşısının alınması;
- **Differential Privacy tətbiqi**: Fərdi məlumatların statistik analizə cəlb olunarkən fərdin şəxsiyyətinin qorunması üçün müasir məxfilik mexanizmlərindən istifadə olunması;
- **PETs (Privacy-Enhancing Technologies)**: Məsələn, Homomorphic Encryption və Federated Learning kimi texnologiyalarla fərdi məlumatların paylaşılmadan emalı;
- **Red teaming və etik monitorinq**: AI sistemlərinin etik standartlara uyğunluğunu təmin etmək və istifadədən əvvəl potensial təhlükələrin proaktiv şəkildə aşkar edilməsi;
- **Hüquqi uyğunluq və məqsəd məhdudiyyəti** – Toplanmış məlumatların yalnız əvvəlcədən müəyyən edilmiş məqsədlər üçün istifadəsini təmin etmək və GDPR kimi hüquqi tələblərə uyğun hərəkət etmək.

Bu yanaşmalar, SAIF-in “Data” sahəsindəki “Sensitive Data Disclosure” və “Excessive Data Handling” kimi risklərin aradan qaldırılmasına həm texniki, həm də hüquqi baxımdan sistemli yanaşma təqdim edir. Burada qeyd olunan tədbirlər yalnız texniki mühafizə vasitələri deyil, həm də etik və hüquqi uyğunluğun təmin olunmasına yönəlib. Bu çərçivədə tətbiq edilən fərdi məlumatların qorunmasına dair metodlar, təşkilatların məlumat emalında şəffaflıq və məsuliyyət prinsipinə əsaslanmasına kömək edir.

### 2\. Infrastructure

Bu sahə, modelin fəaliyyət göstərdiyi texniki infrastrukturu əhatə edir. Buraya bulud əsaslı platformalar, məlumatların saxlanması mühitləri (data storage), modelin təlim prosesi (training) və onun istifadə üçün yerləşdirilməsi (serving) mərhələləri daxildir.

### 3\. Model

Modelin özü və onun giriş (input) və çıxış (output) emalı bu sahədə qiymətləndirilir. Hücum edənlər bu mərhələdə “prompt injection” və “model evasion” texnikalarından istifadə edə bilər.

[Robust and Secure AI](https://insights.sei.cmu.edu/documents/609/2021_019_001_735346.pdf "Robust and Secure AI") – Bu sənəd, AI modellərinin istismar oluna biləcək zəifliklərə qarşı dayanıqlılığını təmin etmək üçün həm nəzəri, həm də praktik yanaşmalar təqdim edir. Xüsusilə SAIF-in “Model” komponenti ilə uyğunluq təşkil edən yanaşmalarda aşağıdakılar önə çıxır:

- **Distributional shift and adversarial examples**: Modelin öyrədildiyi məlumat dəsti ilə **praktiki tətbiq mühitində** qarşılaşdığı məlumatlar arasında uyğunsuzluq yarandıqda təhlükəsizlik riskləri meydana çıxa bilər. Sənəddə bu fərqlərin aşkarlanması və təsirinin azaldılması üçün tətbiq edilə biləcək metodlar geniş şəkildə izah olunur.
- **Certified robustness**: Modelin potensial hücumlar və standartdan kənar girişlər qarşısında sabit və etibarlı nəticələr verməsini təmin edən rəsmi metodlar toplusudur. Bu yanaşma, təşkilatlara modelin hansı şərtlərdə təhlükəsiz şəkildə işlədiyini dəqiq qiymətləndirməyə imkan verir.
- **Post-training defenses**: Model təlimini tamamladıqdan sonra tətbiq olunan əlavə qoruma tədbirləri, məsələn girişlərin filtrdən keçirilməsi, anomaliyaların aşkarlanması və nəticələrin izah oluna bilməsi (interpretability), modelin etibarlılığını və hücuma davamlılığını əhəmiyyətli dərəcədə artırır.

Bu metodlar SAIF çərçivəsində “Model Evasion”, “Model Exfiltration” və “Insecure Model Output” kimi risklərin idarə edilməsində dəyərli töhfə verir.

### 4\. Application

Bu sahə, AI sistemlərinin digər proqram təminatları ilə inteqrasiyasını əhatə edir. Buraya AI əsaslı tətbiqlər, inteqrasiya olunmuş agentlər və plugin-lər daxildir. Tətbiq səviyyəsində ortaya çıxan zəifliklər istismar üçün geniş imkanlar yarada və ümumi sistem təhlükəsizliyinə ciddi təsir göstərə bilər.

## ⚠️ SAIF Riskləri: Real Təhlükələr Hansılardır?

SAIF-ın təqdim etdiyi risk xəritəsi AI sistemlərinin müxtəlif mərhələlərində üzə çıxan konkret təhlükələri göstərir:

- **Data Poisoning** – Zərərli və ya yanıltıcı məlumatların təlim bazasına daxil edilməsi
- **Unauthorized Training Data** – Lisenziyasız və ya icazəsiz məlumatların təlimdə istifadəsi
- **Model Source Tampering** – Modelin parametrlərinin və mənbə kodunun dəyişdirilərək manipulyasiya edilməsi
- **Model Exfiltration** – Modelin qeyri-qanuni yolla əldə olunması
- **Prompt Injection** – Giriş məlumatlarının manipulyasiyası yolu ilə modelin nəzarətdən kənar və potensial riskli cavablar verməsi
- **Sensitive Data Disclosure / Inferred Sensitive Data** – Modelin məxfi məlumatları açıq və ya dolayı şəkildə paylaşması.
- **Denial of ML Service** – Resurs istismarı ilə xidmətin dayandırılması (DoS)
- **Model Evasion** – Giriş məlumatlarında cüzi dəyişikliklər etməklə modelin qərar mexanizmini çaşdıraraq səhv nəticələrin əldə olunması
- **Model Deployment Tampering** – Modelin yerləşdirilməsi mərhələsindəki komponentlərə müdaxilə

**🛡️** **SAIF Controls: Risklərə Qarşı Kim Nə Etməlidir?**

SAIF, hər bir risk üçün konkret **controls** (idarəetmə tədbirləri) təqdim edir və bu tədbirlərin icrasına görə məsul tərəfi müəyyənləşdirir – **Model Creators** (model yaradıcıları) və ya **Model Consumers** (model istifadəçiləri).

*Məsələn:*

💡 **Input Validation and Sanitization**

- Təhlükəli sorğuların aşkarlanması və qarşısının alınması.
- ***Əhatə etdiyi risklər:*** Prompt Injection
- ***Məsul tərəf:*** Həm yaradıcılar, həm istifadəçilər

🔍 **Output Validation and Sanitization**

- Modelin cavablarının yoxlanılması və emalı.
- ***Əhatə etdiyi risklər:*** Rogue Actions, Sensitive Data Disclosure
- ***Məsul tərəf:*** Hər iki tərəf

🧪 **Adversarial Training and Testing**

- Modelin hücuma davamlılığını artırmaq üçün təlim zamanı sınaqların tətbiqi.
- ***Əhatə etdiyi risklər:*** Model Evasion, Insecure Output
- ***Məsul tərəf:*** Model yaradıcıları və istifadəçilər

SAIF çərçivəsində bütün kontrol siyahısını [rəsmi mənbədən](https://saif.google/secure-ai-framework/controls) əldə edə bilərsiniz.

**[NIST SP 800-218A](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218A.pdf "NIST SP 800-218A")** – Bu sənəd, generativ süni intellekt sistemlərinin təhlükəsiz şəkildə inkişaf etdirilməsi üçün NIST tərəfindən hazırlanmış praktik və proses-əsaslı çərçivədir. SSDF (Secure Software Development Framework), SAIF-in təqdim etdiyi risklərə qarşı daha sistematik yanaşma təqdim edərək AI-nin həyat dövrü boyu təhlükəsizlik inteqrasiyasını gücləndirir:

- **Planlama** – Modelin əsas məqsədlərinin və təhlükəsizlik risklərinin erkən mərhələdə müəyyən edilməsi, bununla yanaşı model yaradıcıları ilə istifadəçiləri arasında məsuliyyət bölgüsünün dəqiq şəkildə təyin olunması.
- **Kodlama** – Giriş məlumatlarının təhlükəsizliyinin təmin edilməsi (input sanitization), strukturlaşdırılmış kod analizlərinin aparılması, təhlükəsizlik yönümlü kodlaşdırma standartlarına riayət və kodun müntəzəm auditlərdən keçirilməsi.
- **Test mərhələsi** – Hücum ssenarilərinə əsaslanan (məsələn, adversarial input-lar) çoxsəviyyəli təhlükəsizlik testləri və model davranışının müxtəlif şəraitlərdə qiymətləndirilməsi.
- **Monitorinq və Buraxılış** – Modelin real istifadə zamanı davamlı şəkildə izlənməsi, anomaliyaların operativ şəkildə aşkarlanması və təhlükəsizlik üzrə dövri auditlərin həyata keçirilməsi.

Bu yanaşma SAIF-də təqdim olunan “Prompt Injection”, “Model Evasion” və “Rogue Actions” kimi risklərə qarşı həm texniki, həm idarəetmə baxımından güclü cavab strategiyası təqdim edir.

## 🗺️ SAIF Risk Map: Təhlükələrin Vizual İnteraktiv Xəritəsi

**SAIF Risk Map**, çərçivənin əsas struktur elementlərindən biridir və süni intellekt sistemlərində təhlükələrin harada yarandığını, necə ortaya çıxdığını və hansı mərhələdə qarşısının alınmalı olduğunu vizual şəkildə təqdim edir. Bu xəritə vasitəsilə AI tətbiqlərinin müxtəlif komponentləri ilə əlaqəli risklər sistemli şəkildə analiz olunur və idarə olunur.

🧭 **Risklərin təsnifatı üç əsas mərhələyə bölünür:**

- Risk Introduction: Riskin ilkin mərhələdə sistemə daxil olduğu və ya formalaşdığı mərhələ
- Risk Exposure: Riskin istismar oluna biləcəyi mərhələ
- Risk Mitigation: Müvafiq təhlükəsizlik tədbirlərinin tətbiqi ilə riskin azaldıla və ya aradan qaldırıla biləcəyi mərhələ

**🎯** **Tactics, Techniques and Procedures (TTPs)**

Süni intellekt modellərinə qarşı hücum edən şəxslər konkret **Tactics, Techniques and Procedures (TTPs)** -dən istifadə edirlər. Tipik bir hücum aşağıdakı mərhələləri əhatə edir:

1. **Modeli Sınaqdan Keçirmək:** Çoxsaylı sorğular göndərərək modelin necə cavab verdiyini öyrənmək.
2. **Zəiflik Tapmaq:** Məsələn, prompt injection vasitəsilə modelin davranışını dəyişdirmək.
3. **Model extraction:** Model extraction hücumları ilə modelin strukturu və parametrləri barədə məlumat əldə etmək.

Bu texnikaların məqsədi modelin funksiyasını təkrarlamaq, təhlükəsizlik sistemlərini aldatmaq və ya zərərli məqsədlər üçün istifadə etməkdir.

## ✅ Nəticə: Niyə SAIF Yanaşması Vacibdir?

Süni intellektin təhlükəsiz şəkildə tətbiqi artıq lüks deyil – bu, təşkilatlar üçün strateji zərurətdir. SAIF çərçivəsi AI sistemlərinin bütün mərhələlərində təhlükəsizlik və məxfilik tədbirlərini praktik və sistemli şəkildə həyata keçirmək üçün əvəzsiz bələdçidir.

İstər model yaradasınız, istərsə də mövcud modeli tətbiq edəsiniz – **təhlükəsizlik və məsuliyyət bölüşülmüş öhdəlikdir**.🛡️🚀

Süni intellektin təhlükəsizliyi ilə bağlı digər aktual mövzularla bağlı aşağıdakı linklərə keçid edərək tanış ola bilərsiniz:

- [GenAI Risk Bələdçisi – Hissə 1](https://cyberhub.az/genai-part1-2/ "GenAI Risk Bələdçisi – Hissə 1")
- [Süni İntellektin Görünməyən Tərəfi: Məlumat İtkisi, Uyğunluq Boşluqları və Shadow AI Təhlükəsi](https://cyberhub.az/suni-intellektin-gorunm%c9%99y%c9%99n-t%c9%99hluk%c9%99si/ "Süni İntellektin Görünməyən Tərəfi: Məlumat İtkisi, Uyğunluq Boşluqları və Shadow AI Təhlükəsi")