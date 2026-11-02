---
title: "Məlumat İtkilərinin Qarşısının Alınması (DLP): Prinsiplər, Topologiyalar və Bulud Mühitində Tətbiq"
source: https://isc2.obrizum.io/org/ccsp-education/classroom/5493fc33-a05a-4bfe-8de8-63f6aedede1f?n=85bd8cd5-05d8-4027-bd81-52c66098e208
author:
  name: Kamil R
  role: Writer
date: 2026-11-02T00:00:00
description: DLP nədir? Məlumat itkilərinin qarşısının alınmasının üç komponenti (aşkarlanma, monitorinq, məcbur etmə), üç topologiyası, bulud mühitində tətbiq qaydaları və ən vacib hesab olunan amillər.
excerpt:
category: Infosec
featured: false
draft: false
---

**Məlumat itkilərinin qarşısının alınması** (Data Loss Prevention – DLP) və **məlumat sızmasının qarşısının alınması** (data leakage prevention) terminləri bir-birinin əvəzi kimi istifadə oluna bilər.

DLP təşkilatın bütün növ məlumatların (strukturlaşdırılmış və ya strukturlaşdırılmamış) siyasətlərə, standartlara və prosedurlara uyğun şəkildə təşkilatın nəzarəti altında qalmasını təmin etmək üçün istifadə etdiyi nəzarət mexanizmləri və texnologiyaları ifadə edir.

DLP texnologiyası adətən məlumatı avtomatik şəkildə aşkarlamaq və təsniflandırmaq üçün məlumatın aşkarlanma mexanizmi (data discovery) əhatə edir — potensial olaraq məlumat hərəkətdə olan zamanı real vaxt rejimində. DLP həmçinin məlumatın necə saxlanıla, ötürülə və ya istifadə oluna biləcəyini müəyyən edən, məlumat siyasətinə əsaslanan qaydaları özündə əks etdirir. O, həmçinin mümkün siyasət pozuntularının baş verib-vermədiyini müəyyən etmək üçün nəzarət etmək (pattern analysis) və davranış analitikası (behavioral analytics) vasitəsilə qabaqcı analitik imkanlara malik ola bilər.

Məlumatı qoruyan nəzarət mexanizmləri təşkilatın təhlükəsizlik əsasını təşkil edir və təşkilatın tənzimləyici tələblərə və müvafiq qanunvericiliyə (məsələn, AB məlumat mühafizəsi direktivaları və ABŞ məxfilik aktları) uyğun gəlməsini təmin edir. DLP texnologiyaları və prosesləri bu nəzarət mexanizmlərinin qurulmasında mühüm rol oynayır, xüsusilə məlumatın insanlar tərəfindən əl ilə istifadə oluna, saxlanıla və ya ötürülə biləcəyi hallarda. DLP-nin düzgün tətbiqi və istifadəsi təşkilat üçün həm təhlükəsizlik, həm də tənzimləyici riskləri azaldacaq və daxili təhdidlərə qarşı effektiv nəzarət vasitəsi ola bilər.

DLP strategiyası təşkilat tərəfindən kontekstə uyğun şəkildə tətbiq edilməli olan çox müxtəlif və müxtəlif komponentlər və nəzarət mexanizmləri toplusunu təqdim edir və bu, adətən təşkilatın təhlükəsizlik arxitekturasında dəyişikliklər tələb edir. DLP həmçinin qaydaları tətbiq edəcəyi məlumatı etibarlı şəkildə aşkarlamaq imkanına yüksək dərədə asılıdır.

Əgər məlumatın aşkarlanması, təsniflandırılması və işarələnməsi (data labeling) təşkil olunmasa, DLP-nin tətbiqi xeyli daha çətin olar, çünki DLP texnologiyası özü məlumatın aşkarlanmasını və təsniflandırılmasını avtomatik qaydalar əsasında yerinə yetirməli olacaq və həmin qaydalar təşkilatın ehtiyaclarına tam uyğunlaşmayan ola bilər.

DLP mahiyyətcə bulud texnologiyası deyil. Lakin bir çox bulud təminatçısı DLP texnologiyalarını və ya DLP funksiyalarını yerinə yetirən daxili imkanları öz xidmətlərinə inteqrasiya edir. Əgər xidmət məlumatla işləmə qaydalarını və ya DLP-ni özünə inteqrasiya edirsə, bu, buludda bəzi DLP tətbiqlərini asanlaşdıra bilər. Əksinə, bulud xidməti DLP-ni inteqrasiya etmirsə və ya dəstəkləmirsə, effektiv DLP tətbiqini çətinləşdıra və ya mümkün etməzdən çıxara bilər, çünki bir çox DLP texnologiyası işləmək üçün tətbiqlərə və ya əməliyyat sistemə aşağı səviyyədə girişə əsaslanır.

---

DLP üç komponentdən ibarətdir:

1. ***Aşkarlanma və təsniflandırma.*** Bulud əsaslı DLP texnologiyalarının böyük hissəsi əsasən DLP tətbiqinin birinci mərhələsinə yönelir, bu, həm də davamlı və təkrarlanan bir prosesdir. Aşkarlanma prosesi adətən bulud yaddaş xidmətləri və verilən bazalarındakı məlumatı xəritələyir və məlumat kateqoriyalarına (məsələn, tənzimlənən məlumat, kredit kartı məlumatı, ictimai məlumat) əsasən təsniflandırmanı mümkün edir.
2. ***Monitorinq / Müşahidə.*** Məlumatın istifadəsinin monitorinqi DLP-nin əsas funksiyasını təşkil edir. Effektiv DLP strategiyaları administratorlara bir və ya bir neçə istifadə siyasəti təyin etmək imkanı verərək məlumatın istifadəsini müxtəlif yerlər və platformalar boyunca izləyir. Monitorinq şəbəkə qapılarında (gateways), serverlərdə və yaddaşda, həmçinin iş stansiyalarında və son nöqtə qurğularında icra oluna bilər. DLP-nin tətbiqinə kömək edən xarici xidmətlərin qəbulu, bir çox bulud əsaslı DLP həlləri ilə birlikdə artmışdır. Monitorinq tətbiqi istifadəçilər üçün mövcud olan paylanma üsullarının (məsələn, e-poçt tətbiqləri, daşınabilir media, İnternet brauzeri) böyük hissəsini əhatə edə bilməli və siyasət pozuntuları barədə xəbərdarlıq verməlidir. Monitorinq həmçinin saxlanılan məlumatda baş verən dəyişiklikləri aşkarlaya bilər və məlumatın istifadəsini aktiv şəkildə izləyərək istifadə zamanı məlumat üçün bəzi mühafizə təmin edə bilər. İstifadə zamanı monitorinqin effektiv olması adətən ev sahibi əməliyyat sistemi və ya bulud xidməti ilə daha yüksək səviyyədə inteqrasiya tələb edir.
3. ***Məcbur etmə (Enforcement).*** Bir çox DLP alətləri məlumatı yoxlamaq və onun yerini, istifadəsini və ya ötürülmə destinasiyasını müəyyən edilmiş siyasətlər toplusu ilə müqayisə edərək məlumat itkisinin qarşısını almaq imkanı verir. Siyasət pozuntusu aşkarlanarsa, müəyyən edilmiş müvafiq məcbur etmə əməliyyatları avtomatik yerinə yetirilə bilər. Məcbur etmə variantları xəbərdarlıq və jurnal yazmaq, məlumat ötürülməsini bloklamaq, onu əlavə doğrulama üçün yenidən yönləndirmək və ya məlumatı təşkilat sərhədlərindən çıxarkən şifrələmək imkanlarını əhatə edə bilər.

DLP alətlərinin tətbiqləri adətən aşağıdakı topologiyalara uyğun olur:

1. ***Hərəkətdə olan məlumat (Data in motion).*** Bəzən şəbəkə əsaslı və ya qapı (gateway) DLP kimi də adlandırılır. Bu topologiyada monitorinq mühərriki təşkilatın şəbəkə qapısına yaxın yerləşdirilir və çıxış protokollarını — HTTP, HTTPS, Sadə Poçt Transfer Protokolu (SMTP) və Fayl Transfer Protokolu (FTP) — izləyir. Topologiya proksi əsaslı, körpü (bridge), şəbəkə kəsici (network-tapping) və ya SMTP relay-ləri qarışığı ola bilər. Şifrələnmiş HTTPS trafikin tədqiq olunması üçün sistem arxitekturasına uyğun şəkildə Secure Shell (SSH) müdafiəsi/müzakirəsi (interception/broker) mexanizmlərini təmin etmək lazımdır.
2. ***Saxlanılan məlumat (Data at rest).*** Bəzən yaddaş əsaslı DLP kimi də adlandırılır. Bu topologiyada DLP mühərriki məlumatın saxlandığı yerdə quraşdırılır — adətən bir və ya bir neçə yaddaş alt sistemi, fayl və tətbiq serverləri ilə birlikdə. Bu topologiya məlumatın aşkarlanması və istifadəsinin izlənməsində effektivdir, lakin siyasət məcbur etməsi üçün şəbəkə və ya son nöqtə əsaslı DLP ilə inteqrasiya tələb edə bilər.
3. ***İstifadə olunan məlumat (Data in use).*** Bəzən klient və ya son nöqtə əsaslı DLP kimi də adlandırılır; DLP tətbiqi istifadəçinin iş stansiyalarına və son nöqtə qurğularına quraşdırılır. Bu topologiya məlumatın istifadəçilər tərəfindən necə istifadə olunduğuna dair məlumat verir və şəbəkə DLP-nin təmin edə bilmədiyi əlavə mühafizənin əlavə edilməsi imkanını yaradır. Klient əsaslı DLP-nin çətinliyi onun bütün son nöqtə qurğularında, çox vaxt çoxsaylı yerləşmə və istifadəçi sayına görə həyata keçirilməsinin mürəkkəbliyi, vaxt və resurs tələbidir.

---

Bulud əsaslı DLP üçün vacib hesab olunan bəzi amillər bunlardır:

1. ***Buluddakı məlumat tendensiya olaraq hərəkət edir və replikasia olunur.*** Bu, yerlər arasında, məlumat mərkəzləri arasında, ehtiyatlar arasında və ya təşkilatlar arasında olsun, replikasiya və hərəkət bulud xidməti ilə inteqrasiya olunmadıqda istənilən hər DLP tətbiqi üçün problem yarada bilər.
2. ***Buluddakı təşkilat məlumatına administrator girişi çətinlik yarada bilər.*** Bulud əsaslı yaddaş daxilində aşkarlanma və təsniflandırmanın necə aparılacağını başa düşmək vacibdir. DLP həlləri məlumatı aşkarlamaq və təsniflandırmaq üçün daxil ola bilməlidir, bu isə bulud xidmətinin dizaynı və ya təhlükəsizlik nəzarət mexanizmləri tərəfindən əngəllənə bilər.
3. ***DLP texnologiyası ümumi performansa təsir göstərə bilər.*** Şəbəkə və ya qapı DLP-si əvvəlcədən təyin edilmiş məzmun üzrə bütün trafiki skan edir və bu, şəbəkə performansına təsir edə bilər. Klient əsaslı DLP-lər isə iş stansiyalarında məlumata bütün girişləri skan edir; bu, iş stansiyalarının işləməsinə performans təsir göstərə bilər. Ümumi təsir test zamanı nəzərə alınmalıdır.

---

Məlumatın aşkarlanması və təsniflandırılması prosesindən başlayın. Bu proseslər bulud qurğularında daha yetkin olub məlumat təhlükəsizliyi prosesi üçün əhəmiyyətli dəyər təqdim edir.

Bulud DLP siyasəti aşağıdakıları əhatə etməlidir:

1. Buludda saxlanmasına icazə verilən məlumatın növü hansıdır?
2. Məlumat harada saxlanıla bilər (yurisdiksiya)?
3. Məlumat necə saxlanmalıdır (şifrələmə və yaddaşa giriş imkanlarının nəzərə alınması)?
4. Hansı növ məlumat girişinə icazə verilir?
5. Hansı qurğulara və hansı şəbəkələrə icazə verilir?
6. Hansı tətbiqlərə icazə verilir?
7. Hansı tunelə icazə verilir?
8. Məlumat buluddan hansı şərtlər altında çıxa bilər?

Şifrələmə metodları məlumatın formatına uyğun şəkildə diqqətlə nəzərdən keçirilməlidir. Formatı saxlayan şifrələmə (format-preserving encryption), məsələn rəqəmsal hüquqların idarə edilməsi (DRM), məlumatı IRM ilə qorunan faylın özü daxilində şifrələyir. Əgər DLP həlli IRM həlli ilə inteqrasiya etmir və IRM ilə qorunan faylın məzmununu deşifrələyə bilmirsə, o, bu tipli fayllar üzərində effektiv olmayacaq. DLP həllinin məlumatın şifrələnməmiş versiyasına daxil ola bilmədiyi hallarda digər texnologiyalar da oxşar problemlər yarada bilər.

Məlumat elementlərinin bloklanması və ya karantinə alınması üçün məhdudiyyətlərin və nəzarət mexanizmlərinin tətbiqi zamanı yalançı pozitiv hadisələr səbəbindən biznes proseslərinə zərər verməsinin qarşısını alacaq, eyni zamanda qanuni əməliyyat və proseslərin yerinə yetirilməsinə mane verməyəcək prosedurların yaradılması vacibdir. DLP-nin tətbiqində əsas çətinlik odur ki, o, həm dəyər bilər, əgər düzgün konfiqurasiya edilməsə, icazə verilməli olan, lakin aşkarlanma və ya təsniflandırmanın uğursuzluğu səbəbindən qadağan edilmiş qanuni funksiyalara mənfi təsir göstərəcək.

DLP, potensial tətbiqlərin buluda miqrasiyasını planlaşdırarkən və ya qiymətləndirərkən effektiv alət ola bilər. DLP aşkarlanması buluda gedən məlumatı məzmun baxımından təhlil edəcək və DLP aşkarlanma mühərriki məlumat miqrasiyası zamanı siyasət pozuntularını aşkarlaya bilər. DLP həmçinin səlahiyyətli girişi olan istifadəçilərin məlumatı qəsdən sui-istifadə etməsi və ya oğurlaması ilə bağlı daxili təhdidləri effektiv şəkildə həll edə bilən bir neçə texologiyadan biridir.
