---
title: "Effektiv Təşkilati İdarəetmə və Risk İdarəetməsi Enterprise Mühitində Access Control: Struktur, Mexanizmlər və Texniki İdarəetmə – 3 Hissə"
source: https://cyberhub.az/idar%c9%99etm%c9%99-v%c9%99-risk-enterprise-access-control-iii/
author:
  name: Guljannat R.
  role: Writer
date: 2026-02-06
description: Bu məqalə enterprise access control-u yalnız təhlükəsizlik nəzarəti kimi yox, risk və idarəetmə aləti kimi izah edir.
category: Risk Management
---

![photo 5201679693449465076 w](https://cyberhub.az/wp-content/uploads/2026/02/photo_5201679693449465076_w.jpg "Effektiv Təşkilati İdarəetmə və Risk İdarəetməsi Enterprise Mühitində Access Control: Struktur, Mexanizmlər və Texniki İdarəetmə – 3 Hissə 1")

Əvvəlki hissələrdə risk idarəetməsinin təşkilati və strateji səviyyədə necə formalaşdığını, RACI modelinin məsuliyyət bölgüsündə oynadığı rolu və risk mədəniyyətinin əhəmiyyətini izah etdik. Bu hissədə isə diqqət **enterprise mühitində access control-un texniki olaraq necə qurulduğuna, hansı mexanizmlər üzərində işlədiyinə və bu mexanizmlərin niyə birbaşa risk yarada bildiyinə** yönəlir.

Bu məqalə **enterprise access control-u yalnız təhlükəsizlik nəzarəti kimi yox, risk və idarəetmə aləti kimi** izah edir.

## 1\. Enterprise Access Control nədir və niyə fərqlidir?

Enterprise mühitində access control:

- fərdi istifadəçi səviyyəsində yox,
- **təşkilat miqyasında** dizayn edilir.

Bu o deməkdir ki, access control:

- minlərlə istifadəçi,
- müxtəlif biznes prosesləri,
- çoxsaylı tətbiqlər,
- daxili və xarici istifadəçilər,
- xidmət və sistem hesabları

üzərində **vahid, lakin çevik şəkildə** işləməlidir.

## 2\. Access Control-un əsas komponentləri (Enterprise kontekstində)

Enterprise access control aşağıdakı komponentlərin birlikdə işləməsini tələb edir:

### 2.1 Policies (Siyasətlər)

Siyasətlər təşkilatın:

- hansı resursların qorunduğunu,
- kimlərin hansı şərtlərlə giriş əldə etdiyini,
- hansı risklərin qəbul olunduğunu

müəyyən edən **yüksək səviyyəli qaydalardır**.

Siyasət texniki sənəd deyil. O, biznes qərarının texniki mühitdə ifadəsidir.

### 2.2 Procedures (Prosedurlar)

Prosedurlar siyasətlərin **həyata keçirilmə mexanizmidir**:

- istifadəçi necə yaradılır,
- access necə təsdiqlənir,
- səlahiyyət necə dəyişdirilir,
- hansı hallarda istisna mümkündür.

Prosedur yoxdursa, access control **insandan insana dəyişən praktikaya çevrilir**.

### 2.3 Tools (Texniki vasitələr)

Enterprise mühitində istifadə olunan əsas vasitələr:

- IAM / IGA platformaları
- Directory services (AD, LDAP)
- MFA sistemləri
- PAM həlləri
- Logging və monitoring alətləri

**Tool siyasəti əvəz etmir. Tool yalnız onu enforce edir.**

## 3\. Identity Lifecycle Management (Enterprise-in əsası)

Access control-un təməlində identiklik dayanır. Enterprise mühitində identiklik yalnız insan deyil:

- İşçi
- Vendor
- Müştəri
- Sistem
- Proses
- Tətbiq (Application)

ola bilər.

### 3.1 Joiner

Yeni identikliyin yaradıldığı mərhələ, əslində access control risklərinin ilkin toxumunun səpildiyi nöqtədir. Təcrübədə tez-tez rast gəlinən səhv ondan ibarətdir ki, yeni istifadəçiyə “işini rahat görə bilsin” deyə **lazım olandan daha geniş səlahiyyətlər verilir**.

Peşəkar yanaşmada Joiner mərhələsində aşağıdakı prinsiplər əsas götürülməlidir:

- **Minimum səlahiyyət prinsipi (Least Privilege):**  
	Yeni identiklik yalnız ilkin tapşırıqları yerinə yetirmək üçün zəruri olan səlahiyyətlərlə təmin edilməlidir. “Sonra daraldarıq” yanaşması enterprise mühitində demək olar ki, heç vaxt işləmir.
- **Default access-in məhdudlaşdırılması:**  
	Sistemlərdə avtomatik olaraq təyin edilən default rollar çox zaman artıq səlahiyyətlər ehtiva edir. Bu səbəbdən default access-lər mütəmadi olaraq nəzərdən keçirilməli və minimuma endirilməlidir.
- **Biznes təsdiqinin əsas rolu:**  
	Texniki olaraq istifadəçini IT yaratsa da, onun hansı resurslara giriş əldə edəcəyinə qərar verən tərəf **biznes sahibi** olmalıdır. IT yalnız icraçı rolunda çıxış etməlidir.

Təcrübə göstərir ki, Joiner mərhələsində verilən səhv səlahiyyətlər sonradan ya unudulur, ya da heç vaxt geri alınmır və bu da uzunmüddətli riskə çevrilir.

### 3.2 Mover

Enterprise mühitində identiklik risklərinin ən yüksək olduğu mərhələ **Mover** mərhələsi- Yəni istifadəçi təşkilat daxilində rol, şöbə və ya funksiya dəyişdişməsi

Bu mərhələdə baş verən tipik problemlər:

- köhnə səlahiyyətlərin saxlanılması,
- yeni rol üçün əlavə səlahiyyətlərin verilməsi,
- nəticədə isə səlahiyyətlərin yığılıb qalması.

Peşəkar ILM yanaşmasında Mover mərhələsi aşağıdakı qaydalarla idarə olunmalıdır:

- **Köhnə səlahiyyətlərin avtomatik geri alınması:**  
	Rol dəyişdikdə əvvəlki rol ilə bağlı bütün access-lər avtomatik olaraq ləğv edilməlidir. Bu proses manual olduqda, gecikmələr və unudulmalar qaçılmazdır.
- **Yeni səlahiyyətlərin risk baxımından qiymətləndirilməsi:**  
	Yeni rol üçün tələb olunan access-lər avtomatik təsdiqlənməməli, onların yaratdığı risk ayrıca qiymətləndirilməlidir.

Mover mərhələsi enterprise breach-lərin **ən çox baş verdiyi nöqtədir**.

### 3.3 Leaver

Leaver mərhələsi istifadəçinin təşkilatdan ayrıldığı anı əhatə edir. Təcrübədə bu mərhələ çox vaxt “sadə proses” kimi qəbul edilir və ən çox diqqətdən kənarda qalan hissə də məhz buradır.

Effektiv Leaver prosesi aşağıdakı addımları əhatə etməlidir:

- **Bütün hesabların vaxtında deaktiv edilməsi:**  
	Yalnız əsas istifadəçi hesabı deyil, e-mail, VPN, cloud platformalar, lokal sistemlər daxil olmaqla bütün giriş nöqtələri eyni vaxtda bağlanmalıdır.
- **Federativ və üçüncü tərəf girişlərinin bağlanması:**  
	SSO və federativ identikliklər bağlanmadıqda istifadəçi dolayı yollarla sistemlərə giriş əldə etməyə davam edə bilər.
- **Service account-ların yoxlanması:**  
	Ayrılan istifadəçi ilə əlaqəli və ya onun tərəfindən yaradılmış service account-lar ayrıca nəzərdən keçirilməlidir. Bu hesablar çox vaxt ən uzunömürlü və görünməyən risk mənbəyinə çevrilir.

Leaver prosesində buraxılan boşluq sadəcə prosedur pozuntusu deyil, **birbaşa kompromis riski** deməkdir. Bir deaktiv edilməmiş hesab bəzən aylarla, hətta illərlə təşkilat üçün açıq qapı rolunu oynaya bilər.

## 4\. Authentication: Enterprise mühitində kimliyə sübut

Access control mexanizminin ilk mərhələsi autentifikasiyadır. Yəni sistemin qarşısındakı istifadəçinin, tətbiqin və ya prosesin **özünü kim kimi təqdim etdiyini sübut etməsi**. Autentifikasiya olmadan heç bir giriş qərarı verilə bilməz, lakin bu mərhələ təkbaşına təhlükəsizliyi təmin etmir. O, sadəcə access control zəncirinin başlanğıc nöqtəsidir.

Enterprise mühitində autentifikasiyanın tez-tez yanlış qiymətləndirildiyi müşahidə olunur. Güclü parol siyasəti və ya MFA tətbiq edildikdən sonra məsələ bağlanmış hesab edilir. Halbuki autentifikasiya yalnız “bu istifadəçi kimdir?” sualına cavab verir. İstifadəçinin sistem daxilində **nə etməyə icazəsi olduğu** isə tamam başqa bir mərhələnin – authorization prosesinin mövzusudur. Real risklərin böyük hissəsi də məhz bu iki anlayışın qarışdırıldığı nöqtədə yaranır.

### 4.1 Authentication faktorları

Enterprise mühitində autentifikasiya adətən bir və ya bir neçə faktorun birgə istifadəsinə əsaslanır. Bu faktorlar klassik olaraq üç əsas qrupa bölünür.

#### Something you know

- Bu kateqoriyaya istifadəçinin yalnız özünün bildiyi məlumatlar daxildir:
	- parollar
		- PIN kodlar
		- shared secret-lər (təhlükəsizlik sualları, kod frazalar və s.)
	Texniki baxımdan tətbiqi asan olsa da, enterprise risklərinin əhəmiyyətli hissəsi məhz bu autentifikasiya metodu ilə bağlıdır. İstifadəçilər çox zaman zəif parollar seçir, eyni parolu bir neçə sistemdə istifadə edir və ya phishing hücumlarının qurbanına çevrilir.

#### Something you have

- Bu yanaşma istifadəçinin fiziki və ya rəqəmsal olaraq sahib olduğu bir vasitəyə əsaslanır. Enterprise mühitində ən geniş yayılmış nümunələr bunlardır:
	- smart kartlar
		- hardware token-lər
		- mobil autentifikasiya tətbiqləri və OTP generatorlar
	Bu metodun əsas üstünlüyü ondadır ki, hücumçu təkcə məlumatı bilməklə kifayətlənmir, eyni zamanda fiziki və ya məntiqi olaraq həmin obyekti də əldə etməlidir. Bu isə hücum ehtimalını əhəmiyyətli dərəcədə azaldır.
	Lakin bu yanaşma da riskdən tam azad deyil. Token itkisi, mobil cihazların paylaşılması və ya istifadəçilərin autentifikasiya bildirişlərini düşünmədən təsdiqləməsi (“push fatigue”) təhlükəsizliyi zəiflədə bilər. Yəni sahiblik faktoru təhlükəsizliyi artırır, amma **insan davranışı bu üstünlüyü neytrallaşdıra bilər**.

#### Something you are

- Bu kateqoriya biometrik autentifikasiya metodlarını əhatə edir:
	- barmaq izi
		- iris və retina skanları
		- üz tanıma texnologiyaları
		- səs nümunələri
	Biometrik metodların əsas üstünlüyü onların unikal olmasıdır. Parol dəyişdirilə, token itirilə bilər, lakin biometrik xüsusiyyətlər istifadəçiyə məxsusdur. Bu isə identikliyin güclü şəkildə təsdiqlənməsinə imkan yaradır.
	Eyni zamanda biometrika bir sıra ciddi risklər də yaradır. Məxfilik və hüquqi məsuliyyət məsələləri, yanlış tanıma halları (false positive və false negative) və ən vacibi – biometrik məlumat sızdıqda onun dəyişdirilə bilməməsi bu metodun əsas zəif tərəfləridir. Buna görə biometrik autentifikasiya adətən enterprise mühitində **əlavə faktor kimi** istifadə olunur.

### 4.2 Single-factor vs Multi-factor authentication

Enterprise mühitində tək faktorlu autentifikasiya artıq müasir təhlükə mənzərəsi üçün qəbuledilən hesab edilmir. Bir parol, bir PIN və ya tək bir token kritik sistemlərin qorunması üçün kifayət deyil.

Xüsusilə:

- maliyyə sistemləri,
- HR və məxfi məlumatlarla işləyən tətbiqlər,
- uzaqdan giriş və cloud mühitləri

üçün **Multi-Factor Authentication (MFA)** minimum təhlükəsizlik tələbi kimi qəbul edilməlidir.

Bununla yanaşı, burada çox vacib bir məqam var: MFA istifadəçinin kimliyini daha güclü şəkildə təsdiqləyir, lakin istifadəçiyə **artıq və ya səhv səlahiyyət verilməsini aradan qaldırmır**. İstifadəçi kimliyini düzgün sübut etsə belə, ona normadan artıq access verilibsə, MFA bu riski həll etmir.

### 4.2 Authentication Faktorlarının Geniş Yanaşması və Kontekstin Rolu

Müasir enterprise sistemlərdə autentifikasiya təkcə təqdim olunan faktorlara yox, **girişin hansı şərtlər daxilində baş verdiyinə** də əsaslanır. Burada söhbət yeni autentifikasiya faktorlarından yox, **etibarlılığı artıran kontekstual siqnallardan** gedir. Bu yanaşma autentifikasiyanı statik yoxlamadan çıxarıb, risk əsaslı qərar mexanizminə çevirir.

#### Məkan faktoru – giriş haradan edilir

Enterprise təhlükəsizlik arxitekturasında girişin həyata keçirildiyi məkan mühüm rol oynayır. Bu məkan həm məntiqi, həm də fiziki ola bilər.

Məntiqi məkan dedikdə IP ünvanları, subnet-lər, VLAN-lar, MAC ünvanları və VPN zonaları nəzərdə tutulur. Fiziki məkan isə konkret bina, ofis sahəsi və ya təhlükəsiz zonanı ifadə edir. Eyni istifadəçi şirkət daxili şəbəkəsindən daxil olduqda normal qəbul edilən fəaliyyət, tanınmayan şəbəkədən və ya fərqli coğrafi bölgədən baş verdikdə riskli kimi qiymətləndirilə bilər.

Bu yanaşma xüsusilə yüksək həssaslıqlı sistemlərdə əlavə autentifikasiya tələblərinin avtomatik aktivləşdirilməsinə imkan yaradır və giriş qərarlarını daha məntiqli edir.

#### Zaman və davranış konteksti

Autentifikasiya qərarlarında zaman amili də az əhəmiyyət daşımır. İstifadəçinin qeyri-adi saatlarda sistemə daxil olması, xüsusilə də bu davranış onun əvvəlki istifadə nümunələrinə uyğun gəlmədikdə, risk göstəricisi kimi dəyərləndirilir.

Daha inkişaf etmiş enterprise mühitlərdə isə sistemlər istifadəçi davranışını uzunmüddətli müşahidə əsasında tanıyır. İstifadəçinin adətən hansı resurslara çıxış etdiyi, hansı tezliklə fəaliyyət göstərdiyi və tipik iş ardıcıllığı nəzərə alınaraq anomal davranışlar müəyyən edilir. Belə hallarda giriş cəhdi avtomatik olaraq əlavə yoxlamalara yönləndirilə bilər.

Bu yanaşma autentifikasiyanı sadə fakt yoxlamasından çıxarıb **davranışın təsdiqi** səviyyəsinə qaldırır.

#### “Dördüncü” və “beşinci” faktor anlayışına real baxış

Praktikada bəzən autentifikasiya faktorlarının dörd və ya beş kateqoriyaya bölünməsindən danışılır. Əslində burada məqsəd yeni faktor növləri yaratmaq deyil. Bu anlayış giriş qərarına təsir edən **əlavə kontekstual siqnalların** ümumiləşdirilmiş ifadəsidir.

İstifadəçi tanış cihazdan, etibarlı şəbəkədən və gözlənilən davranış modeli ilə daxil olduqda sistem daha yüksək etibar səviyyəsi formalaşdırır. Əksinə, bu siqnallardan biri dəyişdikdə autentifikasiya prosesi avtomatik sərtləşdirilir. Beləliklə autentifikasiya artıq sabit qaydalar yox, **dinamik risk qiymətləndirməsi** üzərində qurulur.

### 4.3 Kerberos – Enterprise Mühitində Mərkəzləşdirilmiş və Şəffaf Autentifikasiya

Enterprise şəbəkələrində ən geniş yayılmış mərkəzləşdirilmiş autentifikasiya mexanizmlərindən biri Kerberos protokoludur. Kerberos-un əsas məqsədi istifadəçinin parolunun şəbəkə üzərindən ötürülməsinin qarşısını almaq və sistemlər arasında qarşılıqlı etibarı təmin etməkdir.

Kerberos arxitekturasında əsas rol **Key Distribution Center (KDC)** -yə məxsusdur. KDC identikliklərin təsdiqlənməsi və xidmətlər üçün giriş icazələrinin (ticket-lərin) paylanmasına cavabdehdir. İstifadəçi ilk dəfə sistemə daxil olduqda onun identikliyi KDC tərəfindən yoxlanılır və bu identiklik üçün müvafiq ticket yaradılır.

Bu ticket istifadəçiyə şəbəkə daxilində müxtəlif xidmətlərə müraciət etmək imkanı verir. Əhəmiyyətli məqam ondan ibarətdir ki, istifadəçi sonrakı xidmətlərə daxil olarkən öz parolunu təqdim etmir. Bunun əvəzinə əvvəldən alınmış ticket-lərdən istifadə olunur. Bu, parolun ələ keçirilməsi riskini əhəmiyyətli dərəcədə azaldır.

Kerberos mexanizmi aşağıdakı texniki prinsiplərə əsaslanır:

- hər giriş üçün müvəqqəti session key-lərin yaradılması,
- ticket-lərin timestamp ilə qorunması,
- serverlərin yalnız KDC tərəfindən yaradılmış ticket-lərə etibar etməsi.

Server öz gizli açarı ilə ticket-i aça bildikdə, sorğunun etibarlı mənbədən gəldiyini anlayır. Eyni zamanda ticket-ə əlavə edilmiş autentifikatorlar replay hücumlarının qarşısını alır.

Kerberos-un əsas üstünlüyü onun istifadəçi üçün demək olar ki, görünməz işləməsidir. İstifadəçi bir dəfə autentifikasiya olunur, sonrakı girişlər isə arxa planda avtomatik həyata keçirilir. Bu isə həm təhlükəsizliyi, həm də istifadə rahatlığını artırır.

Bununla yanaşı, Kerberos əməliyyat baxımından müəyyən tələblər qoyur. Şəbəkə üzərində işləyən bütün sistemlərin vaxtının sinxron olması vacibdir. KDC-nin əlçatanlığı isə kritik əhəmiyyət daşıyır, çünki bu komponentin sıradan çıxması autentifikasiya prosesini dayandıra bilər. Buna görə enterprise mühitində Kerberos infrastrukturu mütləq şəkildə ehtiyat mexanizmlərlə və yüksək əlçatanlıq prinsipləri ilə dizayn edilməlidir.

## 5\. Authorization: Enterprise risklərinin mərkəzi

Autentifikasiya istifadəçinin kim olduğunu təsdiqləyirsə, authorization onun sistem daxilində **nə etməyə icazəsi olduğunu** müəyyən edir. Enterprise mühitində real risklərin böyük hissəsi məhz bu mərhələdə formalaşır. Çünki səhv verilmiş səlahiyyət, düzgün autentifikasiya olunmuş istifadəçini belə risk mənbəyinə çevirə bilir.

Authorization mexanizmləri enterprise sistemlərində ən mürəkkəb və idarə edilməsi ən çətin sahələrdən biridir. Səbəb isə sadədir: authorization qərarları texniki yox, **biznes prosesləri və risk baxışı ilə birbaşa bağlıdır**. Bu qərarlar düzgün modelləşdirilmədikdə access control mexanizmi zəifləyir və uzunmüddətli risklər yaranır.

### 5.1 Access modelləri

Enterprise mühitində access qərarlarının verilməsi üçün bir neçə əsas model istifadə olunur. Hər bir modelin tətbiq sahəsi və yaratdığı risklər fərqlidir.

#### DAC

DAC modelində səlahiyyətlər əsasən resursun sahibi tərəfindən idarə olunur. Yəni istifadəçi özünə verilmiş access-i başqa istifadəçilərlə paylaşa bilir.

Bu yanaşma çevik görünsə də, enterprise mühitində ciddi risklər yaradır. Çünki access qərarları mərkəzi nəzarətdən çıxır və şəxsi təşəbbüslərə əsaslanır. Nəticədə kimə, nə vaxt və hansı səbəblə səlahiyyət verildiyini izləmək çətinləşir.

Bu səbəbdən DAC enterprise mühitləri üçün **zəif və nəzarətsiz model** hesab olunur və adətən yalnız məhdud ssenarilərdə istifadə edilir.

#### MAC

MAC modeli sərt və mərkəzləşdirilmiş nəzarət prinsipinə əsaslanır. Access qərarları istifadəçilər tərəfindən deyil, əvvəlcədən müəyyən edilmiş qaydalar və təsnifat səviyyələri əsasında verilir.

Bu model yüksək təhlükəsizlik təmin etsə də, çevikliyi azdır. Access dəyişiklikləri adətən mürəkkəb proseslərdən keçir və operativliyi aşağı salır. Məhz buna görə MAC daha çox dövlət, müdafiə və hərbi sistemlərdə tətbiq olunur.

Biznes yönümlü enterprise mühitlər üçün isə MAC çox zaman praktik hesab edilmir.

#### RBAC

RBAC enterprise sistemlərdə ən geniş yayılmış authorization modelidir. Bu yanaşmada istifadəçilərə birbaşa səlahiyyətlər yox, **rollar** təyin olunur və həmin rollar vasitəsilə access əldə edilir.

Düzgün dizayn edildikdə RBAC:

- miqyaslana bilir,
- idarə edilməsi asandır,
- biznes strukturu ilə uyğunlaşdırıla bilər.

Lakin praktikada RBAC ən çox səhv tətbiq olunan modellərdən biridir.

Əsas risklər bunlardır:

- **Role explosion:** zamanla rolların nəzarətsiz şəkildə artması,
- **Privilege creep:** istifadəçilərin keçmiş rollardan qalan səlahiyyətləri saxlaması,
- **İstisnaların rola daxil edilməsi:** müvəqqəti access-lərin daimi hala gəlməsi.

Bu problemlər RBAC-ı zamanla effektiv nəzarət mexanizmindən **risk generatoruna** çevirə bilər.

#### ABAC

ABAC modeli access qərarlarını statik rollara yox, **kontekstual atributlara** əsasən verir. Bu atributlara istifadəçinin rolu ilə yanaşı, aşağıdakılar da daxil ola bilər:

- yer (location),
- vaxt (time),
- cihazın vəziyyəti,
- risk səviyyəsi,
- sessiya konteksti.

ABAC yüksək çeviklik və dəqiqlik təklif etsə də, enterprise mühitində onu idarə etmək olduqca çətindir.

Əsas risklər:

- mürəkkəb siyasət strukturları,
- test və debug proseslərinin çətinliyi,
- güclü governance mexanizmi olmadıqda idarəolunmaz hala gəlməsi.

ABAC yalnız o halda effektiv ola bilər ki, arxasında yaxşı qurulmuş siyasətlər, aydın məsuliyyət bölgüsü və davamlı monitorinq olsun.

## 6\. Group-based access control

Enterprise mühitində access control fərdi istifadəçilər üzərindən yox, əsasən **qruplar** vasitəsilə idarə olunur. Bu yanaşma minlərlə istifadəçisi olan təşkilatlar üçün həm praktik, həm də miqyaslana bilən həll təqdim edir. İstifadəçi müvafiq qrupa əlavə edildikdə, ona ayrıca səlahiyyət verməyə ehtiyac qalmır – qrupun səlahiyyətləri avtomatik tətbiq olunur.

Group-based access control-un əsas üstünlüyü idarəetmənin sadələşdirilməsidir. Dəyişikliklər mərkəzləşdirilmiş şəkildə aparılır və bu, əməliyyat yükünü azaldır. Lakin bu rahatlıq eyni zamanda risk də yaradır. İstifadəçinin yanlış qrupa daxil edilməsi və ya vaxtında qrupdan çıxarılmaması ona normadan artıq access verilməsi ilə nəticələnir.

Bu səbəbdən qruplar mütəmadi olaraq nəzərdən keçirilməli, üzvlük siyahıları biznes sahibləri tərəfindən təsdiqlənməlidir. Enterprise mühitində “yanlış qrup üzvlüyü” çox vaxt “yanlış access” deməkdir.

## 7\. Privileged və Service Account-lar

Enterprise sistemlərdə ən böyük risk adətən insan istifadəçilərdən deyil, **privileged və service account-lardan** qaynaqlanır. Bu hesablar sistemlərin və avtomatlaşdırılmış proseslərin işləməsi üçün yaradılır və çox vaxt geniş səlahiyyətlərə malik olur.

Riskin əsas səbəbləri:

- bu hesabların çox vaxt MFA-dan kənarda qalması,
- bir neçə şəxs və ya proses tərəfindən shared istifadə olunması,
- əməliyyatların yetərincə izlənilməməsi,
- konkret sahibinin (owner) müəyyən edilməməsi.

Nəticədə bu hesablar uzun müddət dəyişdirilmədən və nəzarətsiz qalır. Təcrübə göstərir ki, enterprise təhlükəsizlik insidentlərinin böyük hissəsi məhz service identity üzərindən baş verir. Bu səbəbdən privileged və service account-lar ayrıca yüksək riskli identikliklər kimi idarə olunmalıdır.

## 8\. Separation of Duties (SoD)

Separation of Duties prinsipi access control-un ən vacib nəzarət mexanizmlərindən biridir. Onun əsas məqsədi bir şəxsin eyni proses üzərində həm qərar verən, həm icra edən, həm də nəzarət edən mövqedə olmasının qarşısını almaqdır. Bu yanaşma səhvlərin, sui-istifadə hallarının və xüsusilə fraud risklərinin azaldılmasına xidmət edir.

Enterprise mühitində SoD pozuntularına ən çox:

- ERP sistemlərində,
- maliyyə və mühasibatlıq tətbiqlərində,
- DevOps və CI/CD pipeline-larında

rast gəlinir. Bu pozuntular adətən texniki məhdudiyyətlərdən yox, operativlik və rahatlıq naminə verilmiş idarəetmə qərarlarından qaynaqlanır.

Vacib məqam odur ki, SoD problemi texniki məsələ deyil. Sistemlər SoD-ni enforce edə bilər, amma onu düzgün dizayn edən və tətbiq edən tərəf **idarəetmə strukturlarıdır**. SoD zəifdirsə, səbəb əksər hallarda yanlış və ya natamam idarəetmə qərarları olur.

## 9\. Logging, Accounting və Auditability

Enterprise access control yalnız girişin verilməsi ilə bitmir. Hər bir access qərarı və istifadə fəaliyyəti sonradan izlənilə və təhlil oluna bilməlidir. Bu nöqtədə accounting və auditability anlayışları ön plana çıxır.

Sadəcə “kim sistemə daxil oldu” sualına cavab tapmaq kifayət deyil. Effektiv nəzarət üçün aşağıdakılar da aydın olmalıdır:

- istifadəçi sistemdə **nə etdi**,
- hansı səbəblə həmin access-ə malik idi,
- access qərarı **kim tərəfindən və nə vaxt təsdiqlənmişdi**.

Bu məlumatlar olmadan loglar texniki baxımdan mövcud ola bilər, amma onlar real **audit trail** hesab edilmir. Audit zamanı əsas çətinlik də məhz burada ortaya çıxır: hadisə görünür, amma konteksti yoxdur.

## 10\. Access Control və Risk Governance inteqrasiyası

Enterprise mühitində access control düzgün idarə edilmədikdə, təhlükəsizliyi artırmaq əvəzinə ən böyük risk mənbələrindən birinə çevrilə bilər. Bunun səbəbi sadədir: access qərarları əslində **risk qərarlarıdır**.

Kimə hansı sistemə giriş verildiyi, hansı səlahiyyətlərin tanındığı və bu səlahiyyətlərin nə qədər müddətə qüvvədə olduğu birbaşa risk iştahası və təşkilati prioritetlərlə əlaqəlidir. Buna görə texniki nəzarətlər mütləq şəkildə governance mexanizmləri ilə bağlanmalıdır.

Bu inteqrasiyanın praktiki tərəfi ondan ibarətdir ki:

- access qərarlarında biznes sahibinin məsuliyyəti aydın olmalıdır,
- rollar və təsdiqlər RACI modeli əsasında bölüşdürülməlidir,
- IT icraçı rolunda çıxış etməli, risk qərarını təkbaşına verməməlidir.

## Nəticə

Enterprise mühitində access control-u yalnız texniki funksiya kimi dəyərləndirmək yanlış yanaşmadır. O, nə sadəcə bir IAM sistemi, nə də təhlükəsizlik checklist-də işarələnən bir maddədir. Access control əslində **risk idarəetməsinin texniki mühitdə həyata keçirilmə formasıdır**.

Bu mexanizm düzgün dizayn edilmədikdə və idarə edilmədikdə nəticələr gec-tez üzə çıxır. Auditlərdə uyğunsuzluqlar yaranır, compliance tələbləri pozulur və ən əsası, risklər nəzəri səviyyədən çıxaraq **real biznes problemlərinə** çevrilir.

Buna görə access control texnologiya layihəsi kimi yox, **idarəetmə və risk qərarlarının ayrılmaz hissəsi** kimi qurulmalı və davamlı şəkildə nəzarətdə saxlanılmalıdır.

👉 Əgər **məqalənin birinci və ikinci hissəsini** oxumamısınızsa, buradan tanış ola bilərsiniz:

[https://cyberhub.az/identity-and-access-management-iam/](https://cyberhub.az/identity-and-access-management-iam/)

[https://cyberhub.az/management-iam-hiss%c9%99-2-acl-governance-v%c9%99-zero-trust/](https://cyberhub.az/management-iam-hiss%c9%99-2-acl-governance-v%c9%99-zero-trust/ "The Essential Identity & Access Management (IAM) – #2 : Access Control, Governance və Zero Trust Perspektivindən Kompleks Yanaşma")