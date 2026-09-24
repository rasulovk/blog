---
title: "Müasir Kriptografiya 1#: Rəqəmsal Etibarlılığın və Təhlükəsizlik Arxitekturasının Strateji Təməli"
source: https://cyberhub.az/kriptografiya-strateji-reqemsal-tehlukesizlik/
author:
  name: Guljannat R.
  role: Writer
date: 2025-11-17
description: Kriptografiya bu gün rəqəmsal etimadın, məlumat bütövlüyünün, identifikasiya proseslərinin və ümumi təhlükəsizliyin riyazi-institusional dilidir.
category: Infosec
---

***Riyazi təhlükəsizlik mexanizmlərinin idarəetmə, risk və məlumat bütövlüyü üzərində formalaşdırdığı görünməz arxitektura***

## Niyə Kriptografiya Müasir Təşkilatların Təhlükəsizlik və Etibarlılığının Əsasını Təşkil Edir?

![Müasir Kriptografiya: Rəqəmsal Etibarlılığın və Təhlükəsizlik Arxitekturasının Strateji Təməli](https://cyberhub.az/wp-content/uploads/2025/11/cryptography_security.webp)

Müasir Kriptografiya: Rəqəmsal Etibarlılığın və Təhlükəsizlik Arxitekturasının Strateji Təməli

Bu gün informasiya məkanında fəaliyyət göstərən hər bir təşkilat — istər böyük korporasiya, istər dövlət qurumu, istərsə də rəqəmsal xidmət təminatçısı — təhlükəsizlik qərarlarını yalnız texnologiyaya deyil, onun arxasında dayanan **etimad prinsiplərinə** əsaslandırmalıdır. Bu etimadın riyazi təməlini isə kriptografiya yaradır.

Ənənəvi yanaşmalarda kriptografiya bəzən yalnız “məlumatı şifrələmək” kimi izah edilir. Lakin həm akademik mənbələr, həm də real sistemlərin davranışı göstərir ki, bu sahə bundan daha geniş bir riyazi və idarəedici çərçivə yaradır. Müasir kriptografiya:

- yalnız məxfiliyi qoruyan texniki vasitə olmaqla kifayətlənmir,
- sistemlərə yönəlmiş hücumların qarşısını alan müdafiə səthindən ibarət deyil,
- şifrə və açar əməliyyatlarının mexaniki toplusu kimi də qiymətləndirilmir.

Kriptografiya bu gün rəqəmsal etimadın, məlumat bütövlüyünün, identifikasiya proseslərinin və ümumi təhlükəsizliyin elmi–təşkilati təməl dilidir.

Bu səbəblə kriptografiya təkcə texniki element kimi deyil, həm də təşkilatların idarəetmə, nəzarət, uyğunluq və risk proseslərinin mərkəzi komponenti kimi çıxış edir. Çünki kripto mexanizmlər olmadan:

- istifadəçi kimliyinin doğruluğuna etibar etmək,
- məlumatın dəyişməzliyini təsdiqləmək,
- rabitənin təhlükəsizliyini təmin etmək,
- rəqəmsal əməliyyatlara dair hüquqi və idarəetmə qərarları vermək

praktiki olaraq mümkün deyil.

Beləliklə, kriptografiya yalnız informasiya qorunması üçün deyil, həm də ədalətli, şəffaf və yoxlanıla bilən rəqəmsal mühitin fəaliyyətini təmin edən riyazi-intellektual infrastruktur kimi qiymətləndirilməlidir.

Bu infrastrukturun əsas elementlərinə daxildir:

- **rəqəmsal imzalar** — sənədlərin hüquqi qüvvəsini müəyyənləşdirir,
- **hash funksiyaları** — dəyişikliklərin qarşısını alır,
- **təhlükəsiz şəbəkə protokolları** — rabitənin bütövlüyünü və məxfiliyini qoruyur,
- **açar idarəetmə mexanizmləri** — məlumat dövriyyəsinin etibarlılığını təmin edir,
- **autentifikasiya mexanizmləri** — identifikasiya və audit proseslərini qoruyur.

Nəticə etibarilə, müasir təşkilatların qarşılaşdığı risklərin idarə olunması, uyğunluq tələblərinin yerinə yetirilməsi və məlumatın bütövlüyünün qorunması məhz kriptografiya üzərində qurulur. Kripto mexanizmlər yalnız bir texnologiya deyil — təşkilati qərarların doğruluğunu qoruyan görünməyən konstruksiyadır.

## 🧩 1. Kriptografiyanın Fundamental Elementləri — Təhlükəsizlik Arxitekturasının Riyazi Bünövrəsi

Kriptografiyanın gücü yalnız alqoritmlərdən ibarət deyil — bu alqoritmlərin əsaslandığı riyazi prinsiplər rəqəmsal təhlükəsizliyin skeletini formalaşdırır. Bu prinsiplər gizlilik, bütövlük, identifikasiya və inkarolunmazlıq kimi əsas təhlükəsizlik tələblərini təmin edən təməl funksiyalardır.

Aşağıda bu funksional sütunların ən vacib elementləri ümumiləşdirilir.

### 🔹Simmetrik Şifrələmə

Simmetrik şifrələmə məlumatı həm şifrələmək, həm də açmaq üçün eyni açardan istifadə edən modeldir. Bu yanaşma xüsusilə böyük həcmli fayllar, real vaxt rejimində verilənlər və yüksək sürətli sistemlər üçün idealdır.

Əsas tətbiq sahələri:

- serverlərarası məlumat mübadiləsi,
- daxili məlumat bazalarının qorunması,
- real vaxt rejimində işləyən sistemlər.

Əsas risk açarın gizliliyinin qorunmasıdır — zəif açar idarəetməsi hətta güclü şifrələməni təsirsiz edə bilər.

### 🔹Assimmetrik Şifrələmə

Assimmetrik sistemlərdə şifrələmə və açma əməliyyatları iki fərqli, lakin bir-biri ilə riyazi bağlı açarla icra olunur. Bu model müasir elektron identifikasiya, təhlükəsiz rabitə və rəqəmsal imza infrastrukturlarının əsas dayağıdır.

Bu mexanizm müasir:

- elektron identifikasiya,
- rəqəmsal imza,
- sertifikat infrastrukturu

kimi sistemlərin təməlidir.

Assimmetrik şifrələmə olmadan təhlükəsiz onlayn əməliyyatlar mümkün olmazdı.

### 🔹Hash Funksiyaları

Hash funksiyaları məlumatdan dəyişməz uzunluqda unikal riyazi iz yaradır. Bir bayt belə dəyişsə, nəticə tamamilə fərqli olur.  
Hash funksiyaları:

- bütövlüyü qoruyur,
- logların etibarlılığını müəyyən edir,
- rəqəmsal imza mexanizmlərinin ayrılmaz hissəsidir.

### 🔹Rəqəmsal İmzalar

Rəqəmsal imzalar hüquqi və texniki baxımdan məlumatın:

- kim tərəfindən göndərildiyini,
- dəyişib-dəyişmədiyini,
- sonradan inkar edilə bilməyəcəyini

təsdiqləyən mexanizmdir.

Onlar elektron ticarət, bankçılıq, dövlət xidmətləri və korporativ idarəetmənin əsas struktur elementidir.

## ⚙️ 2. Kripto Protokollar — Təhlükəsiz Rabitənin İdarəedici Mexanizmi

Kriptografiya nəzəri cəhətdən nə qədər güclü olsa da, onun real təsiri tətbiq olunduğu protokollardan asılıdır. Protokollar məlumat axınının hansı qaydada qorunacağını, hansı alqoritmlərin nə zaman tətbiq ediləcəyini və proseslərin necə idarə olunacağını müəyyən edir.

Əsas protokollar:

### 🔹TLS / SSL

TLS (Transport Layer Security) və onun tarixi versiyası SSL veb brauzerlərlə serverlər arasında şifrəli rabitə təmin edən protokollardır. Bu gün onlayn bankçılıqdan tutmuş korporativ platformalara qədər hər bir HTTPS bağlantısının təhlükəsizliyi məhz TLS üzərində qurulub.

TLS təmin edir:

- məlumatın gizliliyi,
- server və istifadəçinin identifikasiyası,
- dəyişikliklərin aşkarlanması.

#### Praktiki risklər:

TLS özlüyündə güclü olsa da, real təhdidlər əsasən bu səbəblərdən yaranır:

- protokolun səhv konfiqurasiya edilməsi,
- zəif və ya köhnə cipher suite-lərin istifadəsi,
- təhlükəsiz olmayan TLS versiyalarının saxlanması,
- sertifikat idarəetməsində boşluqlar.

Digər sözlə, **kriptografiya etibarlıdır, lakin tətbiq prosesi insan səhvlərinə həssasdır**.

### 🔹IPsec

IPsec (Internet Protocol Security) şəbəkə səviyyəsində çalışan protokoldur və məlumat paketlərini göndərilmə anından qəbul olunana qədər tam şəkildə qoruyur. Bu mexanizm korporativ infrastrukturda geniş yayılıb və əksər VPN-lərin əsas açar texnologiyasıdır.

IPsec-in üstünlükləri:

- bütün trafik səviyyəsində şifrələmə,
- paket səviyyəsində identifikasiya və bütövlük,
- təhlükəsiz uzaqdan giriş.

Lakin IPsec-in düzgün işləməsi yenə də konfiqurasiyadan asılıdır. Şəbəkə arxitekturasında yanlış parametrlər təhlükəsizlik boşluqları yarada bilər.

### 🔹PGP və S/MIME

E-poçt sistemləri struktur olaraq ən zəif təhlükəsizlik həlqələrindən biridir. Çünki mesajlar çox mərhələli marşrutdan keçir, müxtəlif serverlərdə müvəqqəti saxlanılır və üçüncü tərəflərə açıq ola bilən protokollarla ötürülür.

Bu problemi həll etmək üçün iki böyük protokol ailəsi mövcuddur:

- **PGP (Pretty Good Privacy)** — individual istifadəçilər və yüksək təhlükəsizlik tələbi olan təşkilatlar üçün,
- **S/MIME (Secure/Multipurpose Internet Mail Extensions)** — korporativ və dövlət strukturları üçün standartlaşmış model.

Bu protokollar:

- e-poçtun məxfiliyini,
- göndərənin identifikasiyasını,
- mesajın dəyişdirilmədiyini

təmin edir. Lakin doğru açar idarəetməsi olmadıqda effektivlik azalır.

Təhlükəsizliyin qəliblənmiş prinsipi burda da dəyişmir:  
**“Güclü kripto alqoritmləri yalnız doğru protokollarla tətbiq edildikdə real qoruma yaradır.”**

## 🧱 3. Kripto İnfrastrukturu: Etimad Arxitekturasının Görünməyən Skeleti

Kriptografiya yalnız alqoritmlərdən ibarət deyil — onun real gücü düzgün qurulmuş **etimad arxitekturasından**, yəni kripto infrastrukturundan asılıdır. Bu infrastruktur təşkilatın bütün məlumat axınını, identifikasiya proseslərini və rəqəmsal sertifikat idarəetməsini tənzimləyən strateji ekosistemdir.

Bu memarlığın əsas elementləri bir-biri ilə koordinasiyalı şəkildə işləməlidir:

- **Root CA və Intermediate CA-lar** – bütün sertifikatların etibarlılığını təmin edən iyerarxik struktur
- **Certificate Transparency jurnalları** – saxtalaşdırılmış və ya yetkisiz sertifikatların aşkarlanması üçün açıq nəzarət mexanizmi
- **HSM-lər (Hardware Security Modules)** – kritik əhəmiyyətli kripto açarlarını təhlükəsiz mühitdə saxlayan və idarə edən modul sistemlər
- **Açar dövriyyəsi və rotasiya qaydaları** – açarların yaradılması, saxlanması, yenilənməsi və silinməsi üçün nizamlanmış və standartlaşdırılmış prosedurlar

Bu ekosistemdə ən kiçik uyğunsuzluq belə sistemin bütövlüyünə təsir göstərir. Təcrübədə təsdiqlənmiş bir yanaşma var ki,:

**“Kriptografiya mükəmməl ola bilər, amma zəif açar idarəetməsi hər şeyi çökdürür.”**

Yəni:  
🔸 zəif idarəetmə → əməliyyat boşluqları  
🔸 əməliyyat boşluğu → audit uyğunsuzluğu  
🔸 uyğunsuzluq → hüquqi və reputasiya riski

Bu səbəbdən kripto infrastrukturu təhlükəsizlik deyil, həm də korporativ etimadın mərkəzi sütunu hesab olunur.

## ⚖️ 4. Normativ Uyğunluq — Kriptografiyanın Hüquqi Ölçüsü

Tənzimləyici çərçivələr kriptografiyanın yalnız mövcudluğunu deyil, onun idarə olunma keyfiyyətini də tələb edir.  
Əsas qiymətləndirilən elementlər:

- açarların yenilənmə qaydaları,
- kripto modulların sertifikasiyası,
- insident zamanı açarların məhv prosedurları,
- audit izlərinin bütövlüyü,
- istehsal və test mühitlərinin fərqləndirilməsi.

Tətbiq sahəsindən asılı olmayaraq — maliyyə, dövlət, səhiyyə və ya ödəniş sistemləri — şifrələmə yalnız texniki proses kimi deyil, həm də **təşkilati məsuliyyət** kimi dəyərləndirilir.

Məhz buna görə kriptografiya bütün uyğunluq standartlarının ayrılmaz hissəsidir.

## 🧬 5. Risk İdarəetməsi — Kriptografiyanın Real Təhlükəsizlik Perspektivi

Kriptografiyada risk təkcə alqoritmlərin zəifliyindən yaranmır — riskin böyük hissəsi səhv tətbiqdən, proses uyğunsuzluğundan və insan faktorundan qaynaqlanır. Müasir yanaşmada risklər bir neçə əsas kateqoriyaya bölünür:

### 1\. İmplementasiya riskləri

Bu kateqoriya ən böyük hissəyə malikdir. Düzgün implementasiya edilməyən ən güclü kripto belə təsirsiz hala gələ bilər.

Məsələn:

- yanlış protokol parametrləri,
- zəif şifrələmə rejimləri,
- təhlükəsiz olmayan API istifadə formaları.

### 2\. Zəif və ya proqnozlaşdırıla bilən RNG (Random Number Generator)

Random generasiya kripto sistemlərinin əsasıdır. Zəif RNG:

- açarların,
- nonce-ların,
- session ID-lərin  
	təhlükəsizliyini sıradan çıxarır.

### 3\. Açar sızmaları

İtkilər aşağıdakı səbəblərlə baş verir:

- yanlış saxlanma,
- zəif qorunan sistemlər,
- HSM olmayan mühitlər,
- insan səhvləri.

### 4\. Köhnəlmiş protokollar

Təşkilatlarda tez-tez rast gəlinir:

- TLS 1.0 / 1.1 istifadəsi,
- zəif cipher suite-lər,
- outdated PKI strukturları.

### 5\. Post-quantum təhlükələri

Kvant hesablamaları ənənəvi RSA və ECC ailəsini risk altına salır. Buna görə bir çox təşkilatlar artıq PQC (Post-Quantum Cryptography) hazırlıqlarına başlayıb.

### 6\. İdarəetmə, proses və insan faktoru

Risk yalnız texniki deyil:

- zəif sənədləşmə
- departamentlərarası uyğunsuzluq
- prosedur boşluqları

kriptografiyanın effektivliyini azaldan kritik amillərdir.

## 🧭 6. Post-Kvant Dövrü — Yeni Təhlükəsizlik Çağırışı

Son illərdə kvant texnologiyalarının inkişafı informasiya təhlükəsizliyində tamamilə yeni mərhələ açıb. Ənənəvi kriptosistemlərin böyük bir hissəsi — xüsusilə geniş istifadə olunan **RSA**, **ECC** və **Diffie–Hellman** ailəsi — kvant hücumlarına qarşı nəzəri olaraq zəif sayılır. Kvant kompüterləri mövcud alqoritmlərin hesablama mürəkkəbliyini əsaslı şəkildə dəyişə bilər, bu da uzunmüddətli təhlükəsizlik və məlumatın gələcəkdə ifşa riski üçün ciddi təhdid yaradır.

Bu reallıq fonunda təşkilatlar üçün artıq aşağıdakı öhdəliklər strateji əhəmiyyət kəsb edir:

### 🔸 Post-kvant kriptografiyasına keçid strategiyası

Mövcud sistemlərdə hansı alqoritmlərin istifadə edildiyini, hansı məlumatların uzunömürlü qorunmaya ehtiyacı olduğunu və nə dərəcədə risk altında olduğunu qiymətləndirmək vacibdir.

### 🔸 Kripto aktivlərinin inventarizasiyası

Bu mərhələ bütün sertifikatların, açarların, protokolların və kripto mexanizmlərinin xəritələndirilməsini tələb edir. İnventarizasiya olmadan keçid planı hazırlamaq mümkün deyil.

### 🔸 Miqrasiya planlaması

Yeni alqoritmlərə keçid təkcə texniki məsələ deyil — həm də idarəetmə, proseslərin yenilənməsi, müqavilə öhdəlikləri və uyğunluq tələbləri ilə bağlı kompleks bir keçişdir. Əgər bu keçid vaxtında və planlı şəkildə edilməzsə, təşkilatlar “kriptqrafik borc” adlanan vəziyyətə düşə bilər.

## 🌐 7. Etika, Şəffaflıq və Kripto Mədəniyyəti

Kriptografiya uzun illər yalnız texniki bir sahə kimi qəbul edilsə də, bu gün o, eyni zamanda sosial məsuliyyət və idarəetmə məsələlərinə toxunan geniş konsepsiyadır. Güclü şifrələmə təkcə sistemləri qorumaq üçün deyil, həm də istifadəçilərin hüquqlarını, məxfiliyini və məlumat sahibliyini müdafiə etmək üçün mövcuddur.

Əsas müzakirə mövzuları:

🔸 **“Backdoor” tələbləri və dövlət müdaxiləsi**

Bəzi dövlət qurumları təhlükəsizlik səbəbi ilə şifrələmə sistemlərində arxa qapılar tələb edir. Lakin belə yanaşma təkcə sui-istifadə üçün qapı açmır — həm də bütün ekosistemin etibarlılığını sarsıdır.

🔸 **Təşkilatların daxili monitorinqi**

Kriptografiya nəzarəti gücləndirmək üçün deyil, məlumatın bütövlüyü, məxfiliyi və səlahiyyətli istifadəsini təmin etmək üçün tətbiq edilməlidir. Düzgün idarə olunmayan kripto mexanizmləri işçi hüquqlarının pozulmasına və şəffaflıq problemlərinə səbəb ola bilər.

🔸 **Məxfiliyin qorunması**

Şifrələmə istifadəçi məlumatlarını yalnız üçüncü tərəflərdən deyil, həm də daxili sui-istifadə risklərindən qoruyur. Bu səbəbdən şəxsi məlumatların şifrələnməsi həm etik, həm də hüquqi bir tələbdir.

🔸 **Süni intellekt və avtomatlaşdırılmış qərarvermə**

AI sistemlərinin kripto siyasətləri üzərində təsiri artır. Lakin şifrələmə qərarlarının avtomatlaşdırılması təhlükəsizlik və etik balansın qorunmasını tələb edir. AI yardımçı ola bilər, lakin kripto qərarlarını insanların nəzərindən kənarlaşdırmaq ciddi risk yaradır.

Bu perspektivdən yanaşdıqda, kriptografiya təkcə texniki mexanizm deyil — təşkilati mədəniyyətin, şəffaflıq prinsipinin və sosial etimadın bir hissəsidir.

## 🧠 8. Nəticə — Kriptografiya Müasir Təhlükəsizliyin Riyazi Arxitekturasıdır

Kriptografiya bu gün:

- gizlilik,
- bütövlük,
- identifikasiya və inkarolunmazlıq,
- hüquqi uyğunluq,
- audit izlənməsi

kimi fundamental tələblərin bütününü təmin edən mexanizmdir.

Qısa desək:

**Kriptografiya olmadan təhlükəsizlik natamamdır, idarəetmə isə etibarsızdır.**

Digər məqalələrim:

[DFİR](https://cyberhub.az/computer-forensics/)

[ISO 27001 Audit](https://cyberhub.az/iso-27001-auditinin-pesekar-icrasi/)