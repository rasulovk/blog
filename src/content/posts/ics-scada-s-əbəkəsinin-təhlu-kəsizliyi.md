---
title: "ICS SCADA: Şəbəkəsinin Təhlükəsizliyi"
source: https://cyberhub.az/ics-scada-network-tehlukesizliyi/
author:
  name: Kamil R.
  role: Writer
date: 2025-09-25
description: Əsas məqsəd – ICS/SCADA şəbəkəsinin əlçatanlğını (availability) təmin etməkdir. Bu səbəbdən fiziki təhlükəsizlik yalnız qorunmalı deyil, həm də davamlı nəzarət altında saxlanılmalıdır. Çünki hər hansı icazəsiz müdaxilə təkcə avadanlıqlara zərər vermir, həm də bütün ICS/SCADA şəbəkəsinin fasiləsiz işləməsini risk altına qoyur.
category: ICS-SCADA
---

> “Kritik infrastrukturun qorunması = gələcəyimizin qorunmasıdır.”

Bu bölmədə təhlükəsizlik mövzusu haqqında daha ətraflı izah etməyə çalışacağam. Mövzuya ümumi baxışı əvvəlki yazımda təqdim etmişdim. Əgər oxumamısınızsa, aşağıdakı linkdən tanış ola bilərsiniz.”

[ICS-SCADA: Şəbəkə Müdafiəsinə Giriş](https://cyberhub.az/ics-scada-giris/)

### Fiziki Təhlükəsizlik

Fiziki təhlükəsizlik hər bir şəbəkədə mühüm yer tutur, lakin **SCADA şəbəkələri** üçün bu, xüsusilə vacibdir.

Əsas məqsəd – **ICS/SCADA şəbəkəsinin əlçatanlğını (availability) təmin etməkdir.** Bu səbəbdən fiziki təhlükəsizlik yalnız qorunmalı deyil, həm də davamlı nəzarət altında saxlanılmalıdır. Çünki hər hansı icazəsiz müdaxilə təkcə avadanlıqlara zərər vermir, həm də bütün ICS/SCADA şəbəkəsinin fasiləsiz işləməsini risk altına qoyur. İT mühitində tez-tez deyilən bir ifadə var: *“Əgər biz qutuya (serverə) toxunmaq imkanına malikiksə, deməli ona sahibik.”* Bu, ICS/SCADA üçün də keçərlidir.

Operatorlar nəzarəti və ya görüntünü itirdikdə, yeganə real seçim **dayandırma** olur – manual və ya təcili shutdown. Lakin planlaşdırılmamış dayandırmalar:

- məhsuldarlıq itkisinə,
- maliyyə zərərlərinə,
- insan xəsarəti və ya ölüm riskinə səbəb ola bilər.

---

### Əsas Təsir: Məxfilik → Fasiləsizlik

ICS mühitində **düzgünlüyün (integrity) pozulması** birbaşa **əlçatanlığın (availability) itirilməsinə** səbəb ola bilər. Buna görə də *integrity* çox vaxt *availability* ilə yanaşı ən kritik faktor kimi qəbul olunur.

---

### Təhlükəsizlik və İnsan Amili

IT ilə ICS arasındakı üçüncü əsas fərq – **təhlükəsizlik (safety)** məsələsidir.

🔹 ICS mühitləri təhlükəli ola bilər, sistemlərin sıradan çıxması **insan həyatına risk** yaradır.  
🔹 Bir çox sənaye obyektləri kütləvi dağıntı potensialına malikdir.  
🔹 Bu baxımdan ICS-də **təhlükəsizlik mədəniyyəti** olduqca güclüdür və işçilərin sağlamlığı birinci yerdə dayanır.

---

### Təhlükəsizlik Sistemləri və PLC-lər

- Təhlükəsizlik sistemlərinin bir çoxu **PLClər üzərindən idarə olunur**, bəzən isə eyni şəbəkədə həm istehsal, həm də təhlükəsizlik prosesləri idarə edilir.
- Bu isə hücum səthini genişləndirir və **təhlükəsizlik sistemlərinin də müdafiəsini** zəruri edir.
- ICS təşkilatları üçün təhlükəsizlik yalnız əməliyyat deyil, həm də **mədəniyyət məsələsidir.**

## ICS Protokollarının Təhlükəsizliyi

**Always On VPN** uzaqdan qoşulma üçün vahid və çevik həll təqdim edir. Bu texnologiya domenə qoşulmuş, qoşulmamış (workgroup), Azure AD üzvü və hətta şəxsi cihazları dəstəkləyir. Always On VPN ilə bağlantı növü yalnız istifadəçi və ya yalnız cihaz əsaslı olmur, hər ikisinin kombinasiyası ola bilər.  
Məsələn:

- Uzaqdan cihaz idarəçiliyi üçün cihaz autentifikasiyasını aktivləşdirmək,
- Şirkət daxili resurslara qoşulmaq üçün isə istifadəçi autentifikasiyasını tətbiq etmək mümkündür.

---

### Always On VPN-in İnfrastruktur Tələbləri

Quraşdırma üçün aşağıdakı komponentlər lazımdır:

- NPS (RADIUS) server
- Certification Authority (CA) server
- Remote Access (Routing/VPN) server

İnfrastruktur qurulduqdan sonra:

1. Müştəri cihazları sertifikatla qeydiyyatdan keçirilir,
2. Daxili şəbəkəyə təhlükəsiz qoşulmaq üçün müvafiq şəbəkə dəyişiklikləri edilir.

---

### Windows RRAS tərəfindən dəstəklənən VPN Protokolları

- IKEv2 (RFC7296) – IPsec əsaslı, ən təhlükəsiz və məhsuldar seçimdir.
- SSTP (Microsoft) – TLS əsaslı, firewall-dostu, miqyaslama üçün əlverişli.
- L2TP/IPsec (RFC2661) – köhnə protokol, ciddi üstünlüyü yoxdur.
- PPTP (RFC2637) – köhnəlmiş və zəifliklərlə dolu, istifadəsi qətiyyən tövsiyə olunmur.

---

### Protokolların Təhlili

#### IKEv2

🔹 **Üstünlüklər:** Ən yüksək təhlükəsizlik və performans, mobil mühitlərdə stabil.  
🔹 **Çatışmazlıqlar:** Firewall-lar lazım olan UDP portlarını bloklaya bilər.

#### SSTP

🔹 **Üstünlüklər:** TLS üzərində qurulduğu üçün firewall-dan rahat keçir, balanslaşdırma üçün uyğundur.  
🔹 **Çatışmazlıqlar:** Təhlükəsizlik baxımından IKEv2 qədər güclü deyil.

#### L2TP/IPsec

🔹 **Üstünlüklər:** Əsaslı üstünlüyü yoxdur.  
🔹 **Çatışmazlıqlar:** Firewallda UDP portlarının bloklanma riski.

#### PPTP

🔹 **Üstünlüklər:** Heç biri.  
🔹 **Çatışmazlıqlar:** Çoxsaylı məlum zəifliklər, istifadəsi təhlükəlidir.

## Təhlükə Müdafiəsi (Threat Protection)

### Windows Sandbox

Windows Sandbox – təcrid olunmuş masaüstü mühiti təqdim edir. Burada etibarsız proqramları əsas sisteminizə təsir etmədən işə sala bilərsiniz.

---

### Mikrofon Məxfilik Parametrləri

Yeni məxfilik funksiyası ilə **mikrofon ikonası** bildiriş sahəsində görünür. Bu sayədə hansı tətbiqlərin mikrofonu istifadə etdiyini real vaxtda izləmək mümkündür.

---

### Windows Defender Application Guard (WDAG) Təkmilləşmələri

- Fərdi istifadəçilər: Artıq qeydiyyat dəyişikliyi etmədən WDAG parametrlərini qura və idarə edə bilirlər.
- Korporativ istifadəçilər: Administrasiyanın təyin etdiyi parametrləri yoxlaya bilirlər.
- Brauzer dəstəyi: WDAG artıq Google Chrome və Mozilla Firefox üçün də mövcuddur. Hibrid mühitdə olan istifadəçilər Chrome və Firefox-a WDAG extension əlavə edərək etibarsız saytlara keçidi avtomatik Edge Application Guard-da aça bilirlər.

**İstifadə qaydası:**

1. Cihazınızda WDAG siyasətlərini konfiqurasiya edin.
2. Chrome Web Store və ya Firefox Add-ons-dan *Application Guard* extension quraşdırın.
3. Setup səhifəsində əlavə parametrləri tamamlayın.
4. Cihazı yenidən başladın.
5. Chrome və ya Firefox-da etibarsız sayta daxil olun – avtomatik olaraq WDAG mühitində açılacaq.

🔹 **Dynamic Navigation**: İndi istifadəçi WDAG mühitindən etibarlı saytları ziyarət edərkən avtomatik olaraq öz əsas brauzerinə yönləndirilir. Əvvəllər bu cəhdlərdə xəta səhifəsi görünürdü.

---

### Windows Defender Application Control (WDAC)

**Windows 10, versiya 1903** ilə WDAC yeni imkanlarla təmin olunub:

- Çoxsaylı siyasət dəstəyi – eyni cihazda bir neçə siyasət paralel tətbiq oluna bilər (enforce və audit yanaşı).
- Path-Based Rules – tətbiqlər fayl sistemindəki və ya şəbəkədəki yerləşmə ünvanına görə müəyyən edilir. İdarəçilər yalnız istifadəçi tərəfindən dəyişdirilə bilməyən direktoriyalardan kod icrasına icazə verə bilərlər. Bu, AppLocker-dən fərqli olaraq daha yüksək səviyyəli təhlükəsizlik təmin edir.
- COM Object Registration – yeni funksiya ilə administratorlar WDAC siyasətinə xüsusi COM obyektlərini GUID vasitəsilə əlavə edə bilərlər.

---

### System Guard

**System Guard** bu versiyada **SMM Firmware Measurement** funksiyasını təqdim edir. Bu, **Secure Launch** üzərində qurulub və **System Management Mode (SMM)** firmware-in sağlam işlədiyini yoxlamağa imkan verir. Məqsəd – **OS yaddaşını və gizli məlumatları SMM təsirlərindən qorumaqdır.**

Hazırda bu funksiyanı dəstəkləyən avadanlıqlar bazarda yoxdur, amma yaxın aylarda istifadəyə veriləcək.

## Serverin İzolyasiyası

Domen izolyasiyası siyasətində siz şəbəkənizdəki cihazları yalnız eyni izolyasiya olunmuş domenin üzvü kimi autentifikasiya olunan cihazlardan gələn bağlantıları qəbul edəcək şəkildə konfiqurasiya edirsiniz.  
Bu dizayn üçün siz daha sonra bağlantı təhlükəsizliyi və IPsec qaydaları əlavə edərək izolyasiya olunmuş domen daxilindəki cihazları yalnız həmin domenin üzvü kimi autentifikasiya olunan digər cihazlardan şəbəkə trafiki qəbul edəcək şəkildə tənzimləyirsiniz. Yeni qaydalar tətbiq edildikdən sonra, cihazlarınız izolyasiya olunmuş domenin üzvü olmayan cihazlardan gələn icazəsiz şəbəkə trafikinə cavab vermir.

İzolyasiya olunmuş domen tək bir Active Directory domeni olmaya da bilər. Bu, bir Active Directory forest (meşə) daxilindəki bütün domenlərdən və ya iki tərəfli etimad əlaqələri qurulmuş ayrı-ayrı meşələrdəki domenlərdən ibarət ola bilər.  
IPsec-ə əsaslanan bağlantı təhlükəsizliyi qaydalarından istifadə etməklə, siz eyni fiziki şəbəkə seqmentinə qoşulmuş olsalar belə, cihazlar arasında məntiqi baryer yaradırsınız.

Şəbəkə üzərindən həssas məlumat mübadiləsi aparan cihazlar üçün Windows Defender Firewall with Advanced Security bütün bu şəbəkə trafikinin şifrələnməsini tələb etməyə imkan verir. Şifrələmədən istifadə etmək Federal Information Security Management Act of 2002 (FISMA), Sarbanes-Oxley Act of 2002, Health Insurance Portability and Accountability Act of 1996 (HIPAA) və digər hökumət və sənaye tənzimləmələri kimi normativ və qanuni tələblərə uyğunluğu təmin etməyə kömək edə bilər. Həssas məlumat saxlayan və mübadilə edən cihazlara tətbiq olunan bağlantı təhlükəsizliyi qaydaları yaradaraq, həmin məlumatların məxfiliyini şifrələmə yolu ilə qoruya bilərsiniz.

Bu məqsəd aşağıdakı üstünlükləri təmin edir:

- Şifrələmə zonasındakı cihazlar digər cihazlarla əlaqə qurmaq üçün autentifikasiyanı tələb edir.
- Bu, domen izolyasiyası məqsədi və dizaynından heç də fərqlənmir.
- Şifrələmə zonasındakı cihazlar bütün daxil olan və xaricə gedən şəbəkə trafikin şifrələnməsini tələb edir.

Əgər bir təşkilat şəbəkədəki digər cihazların dinləməsindən qorunmalı olan həssas müştəri məlumatlarını emal etməlidirsə, bağlantı təhlükəsizliyi qaydaları bütün trafikin kifayət qədər mürəkkəb şifrələmə alqoritmi ilə qorunmasını tələb edir.

Şifrələmə zonasındakı cihazlar tez-tez server izolyasiyası üçün yaxşı namizədlərdir. Bu halda giriş yalnız icazəli giriş qrupunun üzvü olan kompüter hesabları və istifadəçi hesabları ilə məhdudlaşdırılır. Bir çox təşkilatlarda şifrələmə zonası və server izolyasiya zonası eyni anlayışı ifadə edir.

## ICS Zəifliklərinin Qiymətləndirilməsi

Əgər məqsədiniz ICS avadanlıqları və proqram təminatının təhlükəsizliyini qorumaq, onları ən son patchlər və müvəqqəti həllərlə aktual saxlamaqdırsa, iki seçiminiz var. Birincisi, vendorların və ICS-CERT saytlarını mütəmadi olaraq izləyərək yeni versiyalar, patchlər və təhlükəsiz qalmaq üçün tövsiyə olunan addımlar barədə bildirişlər əldə etməkdir. Bu, təhlükəsizliyə reaktiv yanaşmadır. İkincisi isə, zəiflikləri özünüz axtarıb tapmaqdır.

Hər iki yanaşmanın üstünlükləri və çatışmazlıqları mövcuddur. İkinci üsulun əsas üstünlüyü ondan ibarətdir ki, siz yalnız vendorların və ya beynəlxalq təhlükəsizlik tədqiqatçılarının mərhəmətinə qalmırsınız. Zəiflikləri ilk siz tapa və dərhal reaksiya verə bilərsiniz. ICS-CERT-də zəiflik dərc olunana qədər artıq kimsə bu prosesi keçmiş olur: vendorla əlaqə saxlayır, problem barədə məlumat verir, təhlükəsizlik patch-i hazırlayır və ICS-CERT-ə dərcin “təhlükəsiz” olduğunu bildirir. Bu, “pis niyyətli” şəxslər həmin zəifliyi kəşf edib istismar etməyə başlamayana qədər təhlükəsiz görünə bilər. Zəifliklərin araşdırılması isə vaxt aparan və resurs tələb edən prosesdir, buna görə də hər zaman təşkilatın özü tərəfindən həyata keçirilməsi məqsədəuyğun olmaya bilər. Lakin əgər şirkət ICS avadanlığı və proqram təminatı istehsalçısıdırsa, məhsul bazara çıxmadan öncə zəifliklərin yoxlanılması həm istifadəçilər üçün faydalı, həm də biznes üçün dəyərli olar.

**Zəifliklərin araşdırılması (Vulnerability research)**, çox vaxt reverse engineering adlandırılır (hərçənd bu, zəiflik araşdırmasının yalnız bir hissəsidir). Bu, əksər insanlar üçün illərin təcrübəsini tələb edən texniki sahədir. Buna görə də bir çox təşkilatlar artıq mövcud resurslardan istifadə etməyə üstünlük verir.

**Zəifliklər** – istər açıq elan olunmuş, istərsə də gizli qalan – sənaye şəbəkələri üçün real və ciddi risk təşkil edir.

Artıq aydın olur ki, ICS komponentlərinin təhlükəsizlik araşdırması və zəifliklərin müəyyənləşdirilməsi xüsusi əhəmiyyət kəsb edən sahəyə çevrilib. Məsələn, Black Hat və DEFCON kimi ənənəvi informasiya təhlükəsizliyi konfranslarında artıq ICS mövzuları, xüsusi sessiyalar və təlimlər geniş yer alır.

Əlavə olaraq, əməliyyat təhlükəsizliyi yalnız birbaşa ICS aktivlərini deyil, həm də ICS tərəfindən idarə olunan resursları – istehsalat zavodunu, mexaniki avadanlıqları, müəssisədə çalışan əməkdaşları, ətraf mühiti və yerli icmanı da əhatə edir. ICS-ə qarşı kiberhücumların nəticələri çox vaxt birbaşa sistemin özünə deyil, onun idarə etdiyi proseslərə təsir göstərir. Bu isə məhsulun keyfiyyətinə, istehsal sürətinə, hətta zavodun dayanmasına səbəb ola bilər. Hətta mexaniki zədələnmələr baş verərək bahalı təmir və avadanlıq dəyişikliklərinə və uzunmüddətli fasilələrə gətirib çıxara bilər.

#### ICS Risklərin İdarə Edilməsi (ICS Risk Management )

Əməliyyat təhlükəsizliyi riskləri yalnız fiziki və məntiqi ICS aktivləri ilə məhdudlaşmır, həm də ICS komponentləri tərəfindən idarə olunan istehsalat müəssisəsini də əhatə edir.

Beynəlxalq miqyasda tanınmış sənədlər hazırlayan təşkilatlara **Avropa İttifaqının Şəbəkə və İnformasiya Təhlükəsizliyi Agentliyi (ENISA)**, **Beynəlxalq Standartlaşdırma Təşkilatı (ISO)**, **ABŞ Milli Standartlar və Texnologiyalar İnstitutu (NIST)** və digər qurumlar daxildir. Biz bu sənədlərin bir çoxunu **Altıncı Modul** da müzakirə etmişdik.

Bu sənədlərin əksəriyyəti bənzər tələbləri ehtiva edir, yalnız istifadə olunan terminlərdə və ya ardıcıllıqda kiçik fərqlər ola bilər. Aydın olur ki, onların çoxu əsas istiqamətlər üzrə eyni tövsiyələri təqdim edir. Bu əsas tələblərə aşağıdakılar daxildir:

- Aktivlərin identifikasiyası (Asset identification )
- Təhdidlərin identifikasiyası (Threat Identification)
- Zəifliklərin identifikasiyası (Vulnerability identification)
- Mövcud təhlükəsizlik nəzarətlərinin identifikasiyası (Existing security controls identification )
- Nəticələrin identifikasiyası (Consequence identification)
- Nəticələrin təhlili (Consequence analysis)
- Risklərin qiymətləndirilməsi və prioritetləşdirilməsi (Risk ranking)
- Təhlükəsizlik nəzarətlərinin tətbiqi ilə bağlı tövsiyələr (Security controls recommendations)

### ICS CERT Cybersecurity Evaluation Tool (CSET)

![isc scada cert](https://cyberhub.az/wp-content/uploads/2025/09/isc-scada_cert.webp "ICS SCADA: Şəbəkəsinin Təhlükəsizliyi 1")

Kiber Təhlükəsizlik Qiymətləndirmə Aləti ([Cyber Security Evaluation Tool \[CSET®\]](https://www.cisa.gov/resources-tools/services/cyber-security-evaluation-tool-cset)) ABŞ Daxili Təhlükəsizlik Departamenti (Department of Homeland Security \[DHS\]) məhsuludur və təşkilatlara əsas milli kiber aktivlərini qorumaqda kömək edir. Bu alət DHS Sənaye Nəzarət Sistemi Kiber Təcili Reaksiya Komandası (ICS-CERT) rəhbərliyi altında, kibertəhlükəsizlik üzrə mütəxəssislər tərəfindən və Milli Standartlar və Texnologiya İnstitutu (National Institute of Standards and Technology \[NIST\]) dəstəyi ilə hazırlanmışdır. Bu alət istifadəçilərə kiber sistemlər və şəbəkələrinin təhlükəsizlik mövqeyini qiymətləndirmək üçün sistemli və təkrarlana bilən yanaşma təqdim edir. Buraya bütün sənaye nəzarət və İT sistemləri ilə bağlı həm yüksək səviyyəli, həm də ətraflı suallar daxildir.

**Məqsəd**  
CSET, istifadəçiləri addım-addım proseslə idarə edən bir masaüstü proqram alətidir ki, onların nəzarət sistemi və informasiya texnologiyaları şəbəkəsinin təhlükəsizlik təcrübələrini tanınmış sənaye standartları ilə müqayisə etsin. CSET-in çıxışı təşkilatın müəssisə və sənaye nəzarət kiber sistemlərinin kibertəhlükəsizlik mövqeyini yaxşılaşdırmaq üçün prioritetləşdirilmiş tövsiyələr siyahısıdır. Alət tövsiyələri kibertəhlükəsizlik standartları, qaydaları və təcrübələr bazasından çıxarır. Hər bir tövsiyə kibertəhlükəsizlik nəzarətlərini gücləndirmək üçün tətbiq oluna biləcək tədbirlər dəsti ilə bağlıdır.

CSET ayrıca asan quraşdırma və istifadəyə uyğun olaraq, müstəqil noutbuk və ya iş stansiyasında işləmək üçün hazırlanmışdır. Alət, NIST, Şimali Amerika Elektrik Etibarlılığı Korporasiyası (North American Electric Reliability Corporation \[NERC\]), Nəqliyyat Təhlükəsizliyi İdarəsi (Transportation Security Administration \[TSA\]), ABŞ Müdafiə Nazirliyi (U.S. Department of Defense \[DoD\]) və digər təşkilatlardan mövcud standartları əhatə edir. İstifadəçi bir və ya bir neçə standartı seçdiyi zaman CSET cavablandırılacaq suallar dəstini açır. Bu suallara verilən cavablar seçilmiş təhlükəsizlik təminatı səviyyəsi ilə müqayisə edilir və potensial təkmilləşdirmə sahələrini göstərən ətraflı hesabat hazırlanır. CSET, nəzarət sistemi mühitinin təhlükəsizlik mövqeyinin özünü qiymətləndirməsi üçün əla bir vasitədir.

**Əsas Faydalar**

- CSET təşkilatın risk idarəetməsi və qərar qəbuletmə prosesinə töhfə verir.
- Təşkilat daxilində kibertəhlükəsizlik mövzusunda məlumatlılığı artırır və müzakirələri təşviq edir.
- Təşkilatın sistemlərindəki zəiflikləri göstərir və bu zəiflikləri aradan qaldırmaq yolları barədə tövsiyələr verir.
- Təşkilatın güclü tərəflərini və tətbiq olunan ən yaxşı təcrübələri müəyyən edir.
- Kiber sistemlərdə təkmilləşməni sistemli şəkildə müqayisə və izləmək üçün metod təqdim edir.
- Kiber sistemləri qiymətləndirmək üçün ümumi sənaye aləti təmin edir.

CSET alətinin bir çox təşkilat üçün dəyəri ondadır ki, qiymətləndirmə apararkən yüksək səviyyədə ardıcıllıq təmin edir, çünki eyni standart tələblərinə əsaslanaraq eyni suallar verilmiş olur. Gələcək CSET buraxılışı istifadəçilərə öz sual dəstlərini daxil etmək imkanı da verəcək ki, bu suallar daxili və ya xüsusi kibertəhlükəsizlik təcrübələrinə əsaslanaraq sistemləri qiymətləndirsin, hansılar ki, alətə daxil edilmiş standartlar və ən yaxşı təcrübələrlə tam uyğun olmaya bilər.