---
title: "The Essential Identity & Access Management (IAM) – #2 : Access Control, Governance və Zero Trust Perspektivindən Kompleks Yanaşma"
source: https://cyberhub.az/management-iam-hiss%c9%99-2-acl-governance-v%c9%99-zero-trust/
author:
  name: Guljannat R.
  role: Writer
date: 09.12.2025
description: IAM-in giriş yazısında identiklik anlayışı, direktoriyaların rolu, atributların idarə edilməsi, SSO və MFA kimi təbəqələrin təhlükəsizlik arxitekturasında oynadığı əsas funksiyadan bəhs etmişdik. Həmin hissədə IAM-in yalnız “kimdir?” sualına cavab verən bir modul yox ...
category: Infosec
---

#### Access Control Modelleri, Governance və Real Ssenarilər

![identity-amp-access-management-iam-hissə-2-access-control-governance-və-zero-trust](https://cyberhub.az/wp-content/uploads/2025/12/identity-amp-access-management-iam-hiss%C9%99-2-access-control-governance-v%C9%99-zero-trust.webp)

identity-amp-access-management-iam-hissə-2-access-control-governance-və-zero-trust

## 1\. Qısa xatırlatma: Harada qalmışdıq?

IAM(Identity & Access Management)-in giriş yazısında identiklik anlayışı, direktoriyaların rolu, atributların idarə edilməsi, SSO və MFA kimi təbəqələrin təhlükəsizlik arxitekturasında oynadığı əsas funksiyadan bəhs etmişdik. Həmin hissədə IAM-in yalnız “kimdir?” sualına cavab verən bir modul yox, bütövlükdə təşkilatdaxili proseslərin mərkəzi idarəetmə mexanizmi olduğu vurğulanırdı.

Bu mərhələdən sonra isə daha geniş və praktiki suallar qarşımıza çıxır:

- **Kim hansı məlumatı görə və hansı əməliyyatı yerinə yetirə bilər?**
- **Təşkilat üçün ən uyğun yanaşma hansı modeldir: rol əsaslı, atribut əsaslı, yoxsa hər ikisinin sintezi?**
- **İstifadəçi şirkətə daxil olduğu andan offboard olunana qədər hesablar necə idarə edilməlidir?**
- **IAM iş proseslərini çətinləşdirmədən, əksinə, onların daha nizamlı və nəzarət edilə bilən olmasına necə kömək edir?**

Beləliklə, IAM konsepti daha əməliyyat yönümlü forma alır və giriş hüquqlarının müəyyənləşdirilməsi həm informasiya təhlükəsizliyinin, həm də iş axınının əsas tələblərindən birinə çevrilir.

## 2\. IAM-in daxili qərar mexanizmi: Access Control nəyi həll edir?

Identifikasiya və autentifikasiya istifadəçinin kimliyini müəyyənləşdirir, lakin təhlükəsizlik burada bitmir. Sistem bundan sonra əsas məsələni həll etməlidir:

**Bu şəxs hansı resursa və nə dərəcədə giriş əldə edə bilər?**

Access control-un məqsədi subyektlə obyekt arasında baş verən bütün qarşılıqlı əlaqələri müəyyən olunmuş siyasətlər çərçivəsində qiymətləndirməkdir. Bu mexanizm hər əməliyyatı dörd əsas kriteriya üzrə ölçən strukturlaşdırılmış qərarvermə modeli əsasında işləyir.

### Kim? — Subyektin identifikasiyası

Buradakı subyekt sadəcə istifadəçi deyil. O, həmçinin:

- xidmət hesabı,
- sistem prosesi,
- API client,
- IoT və ya digər cihaz,
- hətta başqa bir tətbiq ola bilər.

IAM real təhlükəsizlik üçün yalnız insan identliyinə deyil, bütün **funksional subyektlərə** nəzarəti zəruri hesab edir.

### Nəyə? — Obyektin müəyyən edilməsi

Obyekt, subyektin üzərində əməliyyat icra etdiyi istənilən resurs ola bilər:

- data field (məlumat sahəsi)
- fayl və sənəd,
- verilənlər bazası strukturu,
- application component,
- server və ya şəbəkə seqmenti,
- fiziki giriş nöqtəsi.

Obyektin dəyəri və həssaslığı bu siyasətlərin sərtlik səviyyəsini müəyyənləşdirir.

### Necə? — İcazə növü və əməliyyat sərhədləri

Access control icazəsi hər zaman əməliyyatla birlikdə dəyərləndirilir:

- oxuma,
- yazma,
- dəyişiklik etmək,
- silmək,
- təsdiq etmək,
- administrativ konfiqurasiya.

Siyasətlərin təməl prinsipi “ **Least Privilege** ” anlayışına əsaslanır. Praktikada artıq və dəqiqləşdirilməmiş səlahiyyətlərin verilməsi çox vaxt ciddi təhlükəsizlik boşluqlarına səbəb olur. Bu səbəbdən hər bir əməliyyat üçün səlahiyyətlərin dəqiq müəyyən edilməsi access control-un əsas tələblərindən biridir.

### Nə zaman və haradan? — Kontekst və şəraitə əsaslanan qərarvermə

Müasir IAM sistemləri statik qaydalara əsaslanmır. Kontekst daim qiymətləndirilir:

- daxilolma vaxtı,
- istifadəçinin və cihazın lokasiyası,
- şəbəkə növü,
- cihazın təhlükəsizlik vəziyyəti,
- proses mərhələsi.

Bu mexanizm Zero Trust modelinin də əsas fəlsəfəsini təşkil edir: **etibar avtomatik verilmir — sübut olunmalıdır.**

### Fasiləsiz nəzarət

Access control “bir dəfə təsdiq et və keç” prinsipi ilə işləmir. Sessiya boyunca subyektin statusu və davranışı davamlı qiymətləndirilir. Kontekst dəyişdikcə icazə də dinamiki şəkildə dəyişə bilər.

Bu, IAM-in ən kritik və çox zaman unudulan hissəsidir.

## 3\. Access Control modelləri: DAC, MAC, RBAC, ABAC

Access control təsadüfi qaydalarla deyil, yaxşı qurulmuş modellərlə idarə olunmalıdır. Dörd əsas model mövcuddur və hər biri fərqli ehtiyaclara cavab verir.

### 3.1. DAC – Discretionary Access Control

**Prinsip:** resursa sahib olan şəxs onun üzərində səlahiyyətə malikdir.

**İstifadə sahəsi:** kiçik komandalar, çevik mühitlər.

**Üstünlükləri:**

- elastiklik,
- istifadədə rahatlıq.

**Çatışmazlıqları:**

- böyük təşkilatlarda nəzarətsiz paylaşma,
- audit üçün zəiflik,
- hüquqların izlənməsi çətin.

### 3.2. MAC – Mandatory Access Control

**Prinsip:** bütün qərarlar mərkəzi siyasətlə idarə olunur, istifadəçilər icazə verə bilməz.

**İstifadə sahəsi:** dövlət strukturları, hərbi təşkilatlar, tənzimlənən sektorlar.

**Üstünlükləri:**

- yüksək nəzarət,
- minimal risk.

**Çatışmazlıqları:**

- adaptasiya qabiliyyəti zəifdir,
- siyasətlərin saxlanması və idarə olunması yüksək resurs tələb edir.

### 3.3. RBAC – Role-Based Access Control

**Prinsip:** istifadəçilər rolarla əlaqələndirilir, rollar isə icazə dəstlərinə bağlanır.

**İstifadə sahəsi:** orta və böyük təşkilatların əksəriyyəti.

**Üstünlükləri:**

- idarəetmənin sadələşməsi,
- audit üçün ideal struktur.

**Risklər:**

- rolların çoxalması (“role explosion”),
- istifadəçilərin lazım olanda artıq hüquqlarının olması (“privilege creep”).

### 3.4. ABAC – Attribute-Based Access Control

**Prinsip:** qərar atributların kombinasiyasına əsaslanır – istifadəçi, obyekt və kontekst məlumatı birlikdə analiz edilir.

**Üstünlükləri:**

- yüksək dəqiqlik,
- Zero Trust yanaşması ilə uyğunluq,
- bulud və dinamik infrastrukturda ideal uyğunluq.

**Nümunə:**  
Həssas məlumat yalnız:

- HR şöbəsində çalışan,
- şirkət daxilindən daxil olan,
- təsdiqlənmiş cihazdan istifadə edən,
- iş saatları daxilində olan subyektlərə açıqdır.

## 4\. IAM həyat dövrü: kimlik sistemdə “doğulur”, “böyüyür” və ləğv olunur

IAM yalnız giriş anından ibarət deyil — identiklik həyat dövrü ilə idarə olunur.

### Onboarding – hesabın yaradılması

- HR sistemində yeni əməkdaş qeydə alınır.
- IAM avtomatik olaraq direktoriyada hesab yaradır.
- Rola uyğun icazələr təyin olunur.
- MFA aktivləşdirilir.

### Daxili rotasiya – rol və funksiyanın dəyişməsi

- Şöbə və ya vəzifə dəyişikliyində rol yenilənir.
- Köhnə rolların silinməsi mütləqdir.
- Silinməyən icazələr sonradan böyük risk yaradır.

### Offboarding – girişin tam bağlanması

- İşçi işdən ayrılan gün bütün girişlər deaktiv edilməlidir.
- AD, VPN, SaaS, inteqrasiya tokenləri – hamısı eyni anda.
- Unudulmuş hesablar uzunmüddətli hücum vektorudur.

IAM-lə HR/ERP inteqrasiyası bu dövrün problemsiz idarə olunmasının əsas şərtidir.

## 5\. Identity Governance & Administration (IGA)

### IAM-in görünməyən, lakin ən kritik qatı

IGA sualları çox sadə, amma təhlükəsizlik baxımından əsas rol oynayır:

- **Kimin hansı resurslara çıxışı var?**
- **Bu icazə nə vaxt verilib və hələ də lazımdırmı?**
- **Eyni insanda iki riskli səlahiyyət toplanıbmı?**

Əsas proseslər:

### Access Recertification

Hər rübdə rəhbərlərə siyahı təqdim olunur:  
“Bu əməkdaşların bu icazələri var – təsdiqləyirsiniz, yoxsa silinir?”

### Segregation of Duties (SoD)

Bir şəxsin həm əməliyyatı daxil edib, həm təsdiqləməsi qadağandır.  
Xüsusilə maliyyə və dövlət sistemlərində bu prinsip pozula bilməz.

### Policy-Based Role Design

Rollar təsadüfi şəkildə deyil, siyasət əsasında formalaşdırılır:  
“Bu rolda olanlar yalnız öz ölkəsinin məlumatına baxa bilər”,  
“Contractor rolları kritik sistemlərdə yazma səlahiyyəti almamalıdır”.

IGA olmadan IAM idarə olunan ekosistem deyil, xaotik matrisə çevrilir.

## 6\. Real ssenari: kiçik onlayn mağazada IAM çatışmazlığı nəyə gətirir?

Tutaq ki, artan müştəri bazası olan online mağaza idarə edirsiniz. Komandada müştəri xidmətləri, anbar heyəti, marketinq, maliyyə və IT var.

IAM zəif qurularsa:

- Müştəri xidməti əməkdaşı həm çatdırılma detallarını, həm də kart məlumatını görə bilər.
- Anbar işçisi stokla yanaşı qiymətləri də dəyişə bilər.
- Marketinq mütəxəssisi tam müştəri bazasını şəxsi e-mailinə köçürə bilər.
- Aylar əvvəl işdən çıxmış developerin prod serverə SSH girişi qalır.

IAM düzgün qurularsa:

- Hər kəs yalnız iş funksiyasına uyğun məlumatı görür.
- Həssas əməliyyatlar yalnız xüsusi rollarla məhdudlaşdırılır.
- Offboarding avtomatik aparılır.
- Audit izləri tam və ardıcıldır.

Bu, həm təhlükəsizlik, həm əməliyyat sabitliyi, həm də reputasiya məsələsidir.

## 7\. Zero Trust yanaşması və IAM-in mərkəzi rolu

Müasir infrastrukturda “daxili = etibarlı” anlayışı bitib.  
Zero Trust-ın prinsipi sadədir:

**Heç kimə avtomatik etibar edilmir.  
Hər sorğu ayrıca doğrulanır.**

Bu modeldə:

- identiklik,
- atributlar,
- kontekst,
- risk dəyərləndirməsi

IAM sisteminin üzərinə düşür. IAM olmadan Zero Trust sadəcə nəzəriyyədir.

## 8\. Kiçik və Orta Şirkətlər üçün Praktik Yol Xəritəsi

1. **Source of Truth-u seçin** – HR, AD və ya bulud direktoriyası.
2. **İstifadəçiləri qruplaşdırın** – şöbə, rol, lokasiya.
3. **Minimum rol qrupları yaradın** – 7–10 əsas rol kifayətdir.
4. **Least Privilege tətbiq edin** – artıq hər şey riskdir.
5. **MFA və SSO tətbiq edin** – xüsusilə yüksək səlahiyyətli hesablarda.
6. **Onboarding/Offboarding-i avtomatlaşdırın.**
7. **Rüblük icazə yoxlamalarını tətbiq edin.**
8. **IAM siyasətini sənədləşdirin.**

Bu addımlar hər ölçülü şirkət üçün təhlükəsiz və idarəolunan identiklik sistemi yaradır.

## 9\. Nəticə

IAM artıq sadəcə “login mexanizmi” deyil.  
O, təşkilatın:

- təhlükəsizlik səviyyəsini,
- əməliyyat mədəniyyətini,
- məlumat axınını,
- risk idarəetməsini,
- uyğunluq proseslərini

yönləndirən əsas idarəetmə mexanizmidir..

Access control modelləri, IGA, həyat dövrü yanaşması və Zero Trust konsepsiyası birlikdə IAM-i müasir təşkilatların ayrılmaz hissəsinə çevirir.

👉 Əgər **məqalənin birinci hissəsini** oxumamısınızsa, buradan tanış ola bilərsiniz:

[https://cyberhub.az/identity-and-access-management-iam/](https://cyberhub.az/identity-and-access-management-iam/)