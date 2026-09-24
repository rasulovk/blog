---
title: "Fişinq riskini minimuma endirən autentifikasiya: Passkeys"
source: https://cyberhub.az/passkeys/
author:
  name: Kamil R.
  role: Writer
date: 2025-10-12
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: Infosec
---

Kriptoqrafiya deyiləndə çoxları ilk növbədə məlumatın şifrələnməsini — yəni onun gizli saxlanmasını nəzərdə tutur. Amma az adam düşünür ki, ən azı bunun qədər vacib olan bir məsələ də var: məlumatın həqiqiliyinə və mənbənin etibarlılığına əmin olmaq.  
İllərdir parollar istifadəçilərin tanıdılması üçün əsas vasitədir, lakin onlar həm fişinq hücumlarına, həm də məlumat sızıntılarına qarşı çox həssasdır.  
Məhz buna görə də müasir təhlükəsizlik tələblərinə cavab verən passkeys — yəni giriş açarları — getdikcə daha vacib rol oynamağa başlayır. Onlar ənənəvi parol sistemlərinin zəif tərəflərini aradan qaldırır və istifadəçilərə daha yüksək səviyyədə təhlükəsizlik təqdim edir.

### Passkeys nədir?

Passkeys — bu, əslində, kriptoqrafik açar cütüdür: biri publik (açıq), digəri isə privat (gizli). Sən bir saytda passkey (parol açarı) yaratdıqda, sayt yalnız publik açarı və bu açarla əlaqəli xüsusi identifikatoru özündə saxlayır.

Sonra sən sayta daxil olmağa çalışanda, o, sənə privat açarla imzalanmalı xüsusi bir tapşırıq (challenge) göndərir. Cavabla birlikdə sən identifikatoru da göndərirsən ki, sayt hansı publik açardan istifadə edərək yoxlama aparacağını bilsin. Əgər imza düzgündürsə — giriş icazə verilir.

Kriptoqrafiya baxımından burada hər şey sadədir. Qapalı açar (private key) sənin şəxsiyyətini təsdiqləyir, amma serverə hücumçuya lazım ola biləcək heç bir həssas məlumat getmir.

Server tapşırığı düzgün yaradarsa, məsələn 32 baytlıq təsadüfi ardıcıllıq kimi, bu, brute-force hücumlarından qoruyur. Server yalnız açıq açarı saxlayır və sən ora vacib bir şey göndərmədiyin üçün, server sındırılsa belə, heç bir məlumat sızması baş vermir.

Məhz buna görə də passkeys elə bir spesifikasiya əsasında yaradılıb ki, o, əsas kriptoqrafiyaya vacib qorunma mexanizmləri əlavə edir.  
Gəlin araşdıraq ki, WebAuthn bu sadə kriptoqrafik fıçıları necə fişinqə davamlı autentifikasiya sisteminə çevirir.

Ref: [Passkeys technical details](https://www.passkeys.io/technical-details)

![Passkeys vs Passwords](https://cyberhub.az/wp-content/uploads/2025/11/passkeys_flow.webp "Fişinq riskini minimuma endirən autentifikasiya: Passkeys 1")

Yuxarıdakı sxemdə passkeys istifadə olunaraq autentifikasiya prosesinin necə işlədiyini görə bilərsən:

1. Sayt brauzer vasitəsilə avtorizasiya tələb edir.
2. Brauzer autentifikatorla əlaqə qurur.
3. Autentifikator login, parol və istifadəçinin mövcudluğunu yoxlayır.
4. Autentifikator imzalanmış cavabı geri göndərir.
5. Brauzer bu cavabı yoxlama üçün sayta göndərir.

Brauzerlə autentifikasiya cihazı arasındakı qarşılıqlı əlaqə daha ətraflı şəkildə başqa bir spesifikasiyada — FIDO Alliance protokolunda təsvir olunur. Biz hazırda anlaşıqlı olması üçün prosesi sadələşdiririk; WebAuthn spesifikasiyası daha çox istifadə variantı təqdim edir (məsələn, bütün proses sayt və ya brauzer əvəzinə mobil tətbiqdə də baş verə bilər). Amma mexanizmin ümumi başa düşülməsi üçün bu detallara ehtiyac yoxdur.

### FİŞİNQDƏN QORUNMA

WebAuthn fişinq problemini mənbəyə bağlılıq mexanizmi ilə həll edir. Spesifikasiyaya görə, brauzerlər autentifikatora sorğunun mənbəyi barədə məlumat ötürməyə borcludur — sadə desək, saytın domenini bildirirlər. Autentifikator isə passkeys-dən yalnız o halda istifadə edir ki, sorğunun gəldiyi sayt həmin açarın yaradıldığı saytla üst-üstə düşsün.

Bu, belə bir məna verir: əgər sən bank.com üçün giriş açarı yaratmısansa, fişinq məqsədilə hazırlanmış fake-bank.com kimi sayt həmin açardan istifadə edə bilməyəcək — autentifikator belə bir sorğunu dərhal rədd edəcək.  
Hər sayta özünə məxsus unikal açar cütü verilir və bu, parolların təkrar istifadəsi problemini tamamilə aradan qaldırır.

Spesifikasiya yalnız HTTPS istifadə edən mənbələrdən gələn sorğulara icazə verir. Bu isə o deməkdir ki, sorğu tələb olunan mənbə üçün keçərli sertifikata malik serverdən gəlir.

### AUTFENTİFİKATOR NÖVLƏRİ

Ümumiyyətlə, autentifikator dedikdə, sadəcə “sənin fiziki olaraq malik olduğun bir vasitə” nəzərdə tutulur.  
Autentifikatorlar istifadəçinin autentifikasiya zamanı həqiqətən mövcud olub-olmadığını yoxlamağa imkan verir. Bəziləri həmçinin “bildiyin bir şey” prinsipinə əsasən istifadəçini yoxlaya bilər, məsələn PIN-kod tələb etməklə, yaxud biometrik məlumat vasitəsilə sənin həqiqətən həmin şəxs olduğuna əmin olmağa çalışa bilər.

İki əsas autentifikator növü mövcuddur:

1. Onlar birbaşa sənin cihazının içində yerləşir. Platforma autentifikatorları.  
	• Nümunələr: iCloud Keychain, Google Password Manager, Windows Hello, 1Password.  
	• Üstünlüklər: istifadəsi rahatdır, çox vaxt bulud üzərindən backup imkanları olur.  
	• Çatışmazlıqlar: cihazın özü komprometasiya olunarsa, onlar da risk altına düşür.
2. Bunlar ayrıca yaradılmış ixtisaslaşmış cihazlardır. Portativ autentifikatorlar.  
	• Nümunələr: YubiKeys, Titan Security Keys, Feitian brelokları.  
	• Üstünlüklər: maksimum qorunma, cihazın sındırılmasına qarşı yüksək dayanıqlılıq.  
	• Çatışmazlıqlar: itirmək və ya sındırmaq asandır, adətən backup olmur.

Əgər platforma digər cihazlarla, məsələn Bluetooth vasitəsilə əlaqə qura bilirsə, onun autentifikatorlarından portativ kimi də istifadə etmək mümkündür.  
Amma məsələ xüsusilə vacib və həssas tətbiqlərlə bağlıdırsa, xüsusi hardware — yəni aparat əsaslı təhlükəsizlik açarlarından istifadə etmək daha doğru seçimdir. Bəzi autentifikatorlar imza yaradılan sorğunun detalları barədə məlumatı birbaşa sənə göstərə bilir. Əgər autentifikator bunu edə bilmirsə, həmin məlumatları brauzer göstərir. Autentifikasiya sorğusunu təsdiqləməzdən əvvəl bu məlumatı mütləq diqqətlə yoxlamağı unutma.

### PASSKEYS AÇARLARIN SAXLANMASI

İstifadəçi saytda passkeys vasitəsilə qeydiyyatdan keçəndə, autentifikator açar və identifikator (credential ID adlanan) yaradır. Sayt publik açarı və identifikatoru saxlayır və onları istifadəçi hesabı ilə əlaqələndirir.Beləliklə, sayt identifikatordan istifadə etməklə autentifikatora hansı açarın istifadə olunmalı olduğunu bildirə bilir.

Əgər autentifikatorunu itirsən və ya o sıradan çıxarsa, nə etməli? Təəssüf ki, onun idarə etdiyi bütün açarları itmiş hesab etməli olacaqsan. Çünki bu açarlar təsadüfi yaradılan kriptoqrafik cütlərdir və onları sonradan bərpa etmək mümkün deyil.

iCloud Keychain, Google Password Manager və 1Password kimi əksər platforma autentifikatorları açarları buluda yükləmək imkanı verir.  
Amma bu, əlbəttə ki, bir kompromisdir: bərpa edilə bilən açarlar daha geniş risk zonasına malikdir, çünki hücumçular bərpa mexanizmi vasitəsilə onları ələ keçirməyə cəhd göstərə bilərlər.

Backup imkanına sahib platforma autentifikatorlarından istifadə, əlbəttə ki, giriş açarlarının itirilməsi riskini azaldır, amma onu tam aradan qaldırmır. Əgər səni platformadan ban etsələr — açarlarla da vidalaşmalı olacaqsan. Üstəlik, platforma onları təsadüfən silə bilər.

Bundan əlavə, ailə üzvləri arasında açar paylaşımı kimi funksiyalar mövcuddursa — yəni bir neçə nəfər eyni açarlardan istifadə edə bilirsə — bu da əlavə risklər yaradır. Sayt isə bütün bu mümkün risklər haqqında istifadəçini mütləq əvvəlcədən xəbərdar etməlidir.

### TƏHLÜKƏ MODELİ

Passkeys — əlbəttə ki, təhlükəsizlik üçün universal həll deyil. Gəlin aydınlaşdıraq, passkeys bizi əslində hansı təhlükələrdən qoruyur.

Müəyyən olunmuş təhlükə modeli göstərir ki, passkeys standart parolların qoruduğu eyni təhdidlərdən qoruyur, həmçinin fişinq və parolların təkrar istifadəsi riskini aradan qaldırır. WebAuthn spesifikasiyasındakı Conformance bölməsi çox güclü bir iddia irəli sürür: spesifikasiyaya uyğun saytlar, brauzerlər və autentifikatorlar “zərərli fəaliyyətlərdən qorunmuş” hesab olunur.

Amma bu, bir qədər sadələşdirilmiş mənzərədir. Hələ də baş verə biləcək bir neçə real hücum var:

• Brauzer vasitəsilə hücumlar.  
Bəzi autentifikatorlarda, məsələn YubiKey 5C-də, daxil edilmiş displey olmur və onlar tam şəkildə brauzerə güvənir ki, sənə hansı saytda autentifikasiya olunduğunu göstərsin. Əgər brauzerə malvar və ya zərərli genişlənmə nəzarət edirsə, sənə ekranda “google.com” göstərilə bilər, halbuki əslində autentifikatora imzalamaq üçün “attacker.com” ünvanından sorğu göndərilir.

• Komprometasiya olunmuş autentifikatorlar.  
Parolların etibarlılığı birbaşa autentifikatorun privat açarları nə qədər yaxşı qorumasından asılıdır. Saxta autentifikator, yoluxmuş proqram təminatı və ya OS-in daxil edilmiş autentifikatoru kimi davranan malvar sənin privat açarlarını gizlicə ələ keçirə bilər. Məsələn, etibarsız satıcıdan guya YubiKey aldıqda, əslində açarlarının surətlərini üçüncü tərəfə ötürən bir qurğu ilə qarşılaşa bilərsən.

Passkeys çox effektiv mexanizmdir, lakin əgər cihazın artıq malvar və ya spyware ilə yoluxubsa, onlar səni xilas etməyəcək. Bununla belə, passkeys hücumları məhdudlaşdırmaq üçün yaxşı vasitədir — hücumçu hər hansı əməliyyatı imzalamaq istədikdə, autentifikatorla istifadəçi arasında ayrıca təsdiq mərhələsi tələb olunur. Üstəlik, giriş açarları saytın domeninə nəzarət edən hücumçuya qarşı müdafiə təmin etmir.

Bundan başqa, sayt sahiblərinin nəzərə almalı olduğu daha bir incəlik — hesab ID kolliziyalarıdır. Spesifikasiya tələb edir ki, onlar ehtimala əsasən unikal olsunlar. Bu o deməkdir ki, onlar çox kiçik olsa da, sıfır olmayan dublikat yaranma ehtimalı ilə təsadüfi şəkildə yaradılır, tıpkı UUID kimi.

**Bu niyə vacibdir?**  
İstifadəçi giriş açarı qeydiyyatdan keçirəndə, sayt bu açarı müəyyən etmək üçün istifadə olunan ID-ni saxlayır. Əgər haker hər hansı yolla qurbanla eyni ID-yə malik açar qeydiyyatdan keçirə bilsə, autentifikasiya zamanı qarışıqlıq yaranar.

Bu, ilk baxışda çox aşağı ehtimallı görünə bilər, amma aşağıdakı kimi vəziyyətləri təsəvvür et:

• Zərərli şəxsin qurbanın credential ID-sini (məsələn, şəbəkə trafikinə baxaraq) əldə etməsi və həmin ID ilə öz giriş açarını qeydiyyatdan keçirməyə cəhd etməsi.  
• Autentifikasiya üçün nəzərdə tutulmuş zərərli tətbiqin təsadüfilik protokoluna əməl etmək əvəzinə bilərəkdən təkrarlanan credential ID-lər yaratması.  
• Realizasiya səhvləri nəticəsində credential ID-lərin yaradılması zamanı təsadüfilik səviyyəsinin azalması.

Həll çox sadədir: əgər yeni açarın ID-si verilənlər bazasında artıq mövcud olan ID ilə üst-üstə düşürsə, sayt qeydiyyatı həmişə rədd etməlidir. Bu, identifikator kolliziyalarına qarşı “kim tezdirsə, o da qalibdir” prinsipi ilə sadə bir müdafiə yaradır.

### POTENSİAL PROBLEMLƏR

  
Brauzerdə tam başdan-başa təhlükəsizliyə nail olmaq olduqca çətindir və bir çox halda mümkün olmur. Çünki veb kriptoqrafiya serverdən yüklənən JavaScript üzərində işləyir və bu da o deməkdir ki, zərərli server açarları oğurlayan, şifrəsi açılmış məlumatları geri göndərən və s. kimi davranan zərərli JavaScript kodu ötürə bilər.

Daha pis tərəfi odur ki, zərərli server istifadəçilərin böyük əksəriyyətinə normal JavaScript göndərə bilər, amma hədəflənmiş konkret qurbana isə zərərli versiyanı ötürə bilər.

İnternetdə kod üçün bütövlük mexanizminin tətbiqi (məsələn, dərc edilən bütün versiyaların hash-larının etibarlı üçüncü tərəfdə saxlanılması) və ikili faylların şəffaflığı texnikaları (məsələn, açıq şəkildə yoxlanıla bilən, saxtalaşdırma cəhdlərini göstərən log) — bu problemin iki ümidverici həllidir.

Qeyd etmək lazımdır ki, spesifikasiya bütün genişlənmələrin opsional olduğunu bildirir. Bu isə o deməkdir ki, brauzerlərin və autentifikatorların həmin genişlənmələri dəstəkləyəcəyi ilə bağlı heç bir zəmanət yoxdur. Buna görə də saytlar əvvəlcə tələb olunan genişlənmələrin əlçatan olub-olmadığını yoxlamalıdır; əks halda istifadəçilər xidmətlərə giriş zamanı problemlərlə qarşılaşa bilər. Ümid edirik ki, gələcəkdə bütün əsas brauzerlər və autentifikatorlar bu funksiyanali dəstəkləyəcək.

Spesifikasiya sürətlə inkişaf edir və yaxın perspektivdə bir çox maraqlı genişlənmələr gözlənilir. Potensial yeniliklər arasında yeni kriptoqrafik primitivlər — məsələn, daha təkmilləşdirilmiş rəqəmsal imza sxemləri və ya zero-knowledge proof-lar da var. Diqqətəlayiq digər bir mexanizm isə rollback-dən qorunma mexanizmidir; o, şifrələnmiş faylların buludda və ya xarici yaddaşda əvvəlki vəziyyətinə qaytarılmasının qarşısını alır.

### Və sonda

İndi passkeys-dən istifadə etməyə başlamaq üçün ən ideal vaxtdır. Onların kriptoqrafik təməli yüksək səviyyədə təhlükəsizlik təmin edir və WebAuthn əsasında düzgün tətbiq olunduğu halda, müasir autentifikasiya sistemləri üçün əla seçim sayılır.

Bu mövzuyla bağlı daha əvvəl yazdığım maraqlı bir məqalə də var — Web cookie barədə: [Web cookie](https://cyberhub.az/web-cookie/)

Əlbəttə, passkeys universal həll deyil, amma onlar parolların illərlə yaratdığı bir çox ciddi problemi aradan qaldırır: serverə məxfi məlumat ötürülmür, giriş açarlarını müxtəlif saytlarda yenidən istifadə etmək mümkün olmur və domenə bağlılıq mexanizmi sayəsində fişinq hücumlarına qarşı etibarlı qoruma təmin olunur.

İstifadəçi kimi — giriş açarlarına keçərək yeni standarta uyğunlaşmaq artıq vaxtıdır. Aparat əsaslı təhlükəsizlik açarları xüsusilə yüksək dəyərə malik tətbiqləri qorumaq üçün ən effektli vasitədir. Cihazda inteqrə olunmuş autentifikatorlardan istifadə etmək rahatdır və backup imkanı da mövcuddur. Etibarsız bir cihazdan daxil olmalı olduqda isə avtorizasiya sorğularına nəzarət edə bilmək üçün displeyi olan başqa bir cihazdakı giriş açarlarından yararlanmaq daha təhlükəsizdir.

Əgər sən developer-sənsə, giriş açarlarına maksimum dəstək təqdim etməlisən. Passkeys itirilərsə, onları bərpa etmək mümkün olmadığından, hesab bərpası mexanizmlərinin düzgün şəkildə hazırlanması mütləq vacibdir. Hətta backup funksiyası olan inteqrə autentifikatorlar belə müəyyən risklər daşıyır və bunlar nəzərə alınmalıdır.

Passkeys həm birinci autentifikasiya faktoru, həm ikinci faktor, həm də çoxfaktorlu autentifikasiya üçün istifadə oluna bilər. Lakin developer-lər bu imkanları tətbiq edərkən ümumi təhlükə modelini də nəzərə almalıdırlar.

Zərərli serverlərdən qorunmaq üçün — xüsusilə E2EE istifadə olunan tətbiqlərdə — subresource integrity və binar fayl şəffaflığı kimi metodların tətbiqi vacibdir. WebAuthn davamlı şəkildə inkişaf edir; yeni genişlənmələr daha çox kriptoqrafik imkanlar yaradır. Amma nəzərə almaq lazımdır ki, onların dəstəklənməsi müxtəlif brauzerlər və autentifikatorlar arasında fərqlənə bilər.