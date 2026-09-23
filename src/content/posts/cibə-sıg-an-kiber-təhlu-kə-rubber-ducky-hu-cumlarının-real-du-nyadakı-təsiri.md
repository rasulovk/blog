---
title: "Cibə Sığan Kiber Təhlükə: Rubber Ducky Hücumlarının Real Dünyadakı Təsiri"
source: https://cyberhub.az/rubber-ducky/
author:
  name: Kamil R.
  role: Writer
date: 2026-01-12
description: Pico-Ducky və Rubber Ducky kimi cihazlar bunun bariz nümunəsidir. Adi USB fləşk kimi görünürlər, lakin əslində saniyələr içində avtomatik əmrlər yeridə bilən, kompüterə istifadəçi sanki klaviaturadan yazırmış kimi komanda göndərən gizli HID (Human Interface Device) qurğularıdır
category: ICS-SCADA
---

Fiziki təhlükəsizlik çox vaxt kibertəhlükəsizliyin kölgəsində qalır, amma reallıqda ən böyük risklərdən biri məhz kiçik, diqqət çəkməyən cihazlardan yarana bilər. Bir çox insan hücumu yalnız internet üzərindən təsəvvür edir, halbuki ofisdə masa üzərində qalan, yaxud qapıdan içəri “təsadüfən” düşən bir USB cihazı təşkilatın bütün infrastrukturuna giriş qapısı ola bilər.

Pico-Ducky və Rubber Ducky kimi cihazlar bunun bariz nümunəsidir. Adi USB fləşk kimi görünürlər, lakin əslində saniyələr içində avtomatik əmrlər yeridə bilən, kompüterə istifadəçi sanki klaviaturadan yazırmış kimi komanda göndərən gizli HID (Human Interface Device) qurğularıdır. Bu cihazlar çox ucuzdur, çox kiçikdir və çox təhlükəlidir — yəni real həyatda istismar olunmaları üçün bütün şərtlər mövcuddur.

### Pico-Ducky / Rubber Ducky nədir?

**Rubber Ducky** ilk dəfə “BadUSB” konsepti ilə məşhurlaşmış mini cihazdır. Xarici görünüşü adi USB yaddaşa bənzəsə də, içində tamamilə başqa bir mexanizm var: o, kompüterə qoşulan kimi **özünü klaviatura kimi təqdim edir** və əvvəlcədən yazılmış komanda ardıcıllığını dərhal icra edir.

**Pico-Ducky** isə bunun daha ucuz, daha yayılmış və GitHub-da açıq mənbə kimi paylaşılan versiyasıdır. Raspberry Pi Pico əsasında qurulur, çox asan proqramlaşdırılır və istənilən əməliyyat sistemində bir neçə saniyəyə yüzlərlə klaviatura əmri yeridə bilir.

Bu cihazlar təhlükəli sayılır, çünki:

- Kompüter USB klaviaturalara avtomatik etibar edir.
- Antivirus və EDR-lər HID klaviatura əmrlərini zərərli kimi tanıya bilmir.
- İstifadəçi müdaxiləsinə ehtiyac olmadan əmr yeridilə bilir.
- Hücum saniyələr içində baş verir və çox zaman heç kim fərqinə varmır.

Məsələn, bir Pico-Ducky cihazı qoşulan kimi:

- administrator-level commands icra edə,
- zərərli skript yükləyə,
- Windows-u RDP-ə açıq vəziyyətə gətirə,
- brauzerdən session tokenləri çıxara,
- yeni istifadəçi yarada bilər — özü də cəmi 3–5 saniyədə.

### Real hadisələr və nümunələr

Pico-Ducky və Rubber Ducky kimi cihazların yaratdığı risklər heç də nəzəri deyil — real həyatda sənədləşmiş çox sayda insident və böyük vendorların hesabatları bu təhlükəni təsdiqləyir. Bu tip hücumlar adətən fiziki girişin zəif olduğu yerlərdə, işçi diqqətsizliyindən, sosial mühəndislikdən və “USB zərərsizdir, nə ola bilər ki?” düşüncəsindən qaynaqlanır.

Məsələn:

- Google və universitet tədqiqatçılarının apardığı məşhur araşdırmada kampus ərazisində 297 USB yaddaş “təsadüfən düşürülmüş” kimi yerləşdirilib. Nəticədə, bu USB-lərin təxminən 45–98%-i istifadəçilər tərəfindən kompüterə taxılıb və bəziləri cəmi bir neçə dəqiqə ərzində qoşulub. Ref: [Google Research](https://research.google/pubs/users-really-do-plug-in-usb-drives-they-find/?utm_source=chatgpt.com)
	- > **“Aparılan eksperiment göstərdi ki, istifadəçilərin 45–98%-i tapdıqları USB-ni kompüterə taxır.”**  
		> *– Google Security Research, USB Behavioral Study*
		> **“İlk USB cəmi bir neçə dəqiqə ərzində istifadəçi tərəfindən qoşuldu.”**  
		> *– Google USB Drive User Study*
- Honeywell-in “Industrial Cybersecurity USB Threat Report” hesabatına görə isə sənaye mühitlərində aşkarlanan kibertəhlükələrin təxminən 52%-i birbaşa USB və digər çıxarıla bilən daşıyıcılar üzərindən yayılmaq üçün hazırlanıb və bu təhdidlərin əhəmiyyətli hissəsi kritik OT/ICS sistemlərini təsirləndirə biləcək gücdədir. Ref: [Honeywell](https://www.honeywell.com/us/en/news/2022/08/what-causes-the-majority-of-cybersecurity-threats?utm_source=chatgpt.com)
	- > **“Sənaye mühitlərində aşkarlanan kibertəhlükələrin 52%-i birbaşa USB və digər çıxarıla bilən cihazlar üzərindən yayılır.”**  
		> *– Honeywell Industrial Cybersecurity USB Threat Report*
		> **“BadUSB və HID əsaslı qurğular getdikcə daha çox sənaye sistemlərinə daxil olmağa çalışan əsas vektor kimi görünür.”**  
		> *– Honeywell ICS Security Analysis*
		Eyni zamanda **Stuxnet** virusu USB vasitəsilə kritik infrastrukturun sıradan çıxarılmasının ən məşhur nümunəsidir. Bu, BadUSB cihazı deyildi, amma metod eynidir: Bu gün bu metod USB yaddaşla deyil, HID cihazı ilə daha sürətli və aşkarlanmaz şəkildə icra edilə bilər.
		Daha ətraflı [ICS/SCADA](https://cyberhub.az/ics-scada-network-tehlukesizliyi/) qorunmaları haqqında əvvəlki paylaşımımda tanış ola bilərsiniz.
- Son elmi işlər BadUSB və HID əsaslı (klaviatura kimi davranan) cihazların fişinq kampaniyalarında istifadə olunduğunu, zərərli kodun birbaşa cihazın firmware-də gizlənməsi səbəbindən ənənəvi antivirus həllərindən yayınma qabiliyyətinə malik olduğunu göstərir. [SpringerLink](https://link.springer.com/article/10.1007/s44443-025-00067-6?utm_source=chatgpt.com)

Bu fonu nəzərə alanda, Pico-Ducky tipli bir cihazın sadəcə USB portuna taxılması kifayətdir ki, bütün hücum ssenarisi bir neçə saniyə içində avtomatik yerinə yetirilsin və istifadəçi heç nə başa düşməsin.

**“USB Drop Attacks” – Google tədqiqatı**

Google və akademik tədqiqatçılar tərəfindən aparılan məşhur “USB drop” araşdırmasında yüzlərlə USB müxtəlif yerlərdə “itirilmiş” kimi buraxılıb. Nəticələr:

- USB-lərin demək olar hamısı yerindən götürülüb;
- Təxminən istifadəçilərin yarısı bu USB-ləri kompüterə taxıb;
- İlk USB cəmi bir neçə dəqiqə içində qoşulub. [Google Research ScienceAlert](https://research.google/pubs/users-really-do-plug-in-usb-drives-they-find/?utm_source=chatgpt.com)

Bu, hücumçular üçün ideal ssenaridir: əgər həmin “itmiş” daşıyıcı əslində HID əsaslı Pico-Ducky olsaydı, kompüterə qoşulan anda:

- PowerShell və ya terminal açılıb
- hazır skriptlər işə salına,
- brauzer sessiya məlumatları və konfiqurasiya faylları çıxarıla,
- hətta yeni admin hesabı yaradılıb, sistem gələcək hücumlar üçün “hazır vəziyyətə” gətirilə bilərdi.

Bütün bunlar isə istifadəçinin cəmi bir klikindən — USB-ni porta taxmasından sonra, bir neçə saniyə ərzində baş verə bilər.

#### Aeroport və İctimai Məkanlarda Sınaqlar

Bir neçə təhlükəsizlik şirkəti aeroportlarda və universitet kampuslarında eksperimentlər edib. USB-lər məqsədli şəkildə yerə qoyulanda:

- İşçilər onları itirilmiş əşya hesab edib götürüb
- Bəziləri “bəlkə sahibini taparam” düşüncəsi ilə kompüterə taxıb
- Bir qismi isə sadəcə maraq üçün istifadə edib

Bu davranışların hamısı hücumçuların gözlədiyi fürsətdir.

#### Real təşkilatlarda baş verən Rubber Ducky insidentləri

Təhlükəsizlik auditi zamanı bir çox şirkətdə belə hadisələr qeydə alınıb:

- Təhlükəsizlik əməkdaşı tək bir Rubber Ducky ilə ofisə daxil olur
- Endpoint sistemi bu əməliyyatı adi klaviatura fəaliyyəti kimi görür
- İşçilər heç vaxt şübhələnmir

Bu insidentlər göstərir ki, hücum üçün qeyri-adi bacarıq lazım deyil — sadəcə kiçik bir cihaz və fiziki giriş kifayətdir.

## Organizasiya üçün risklər

Pico-Ducky və Rubber Ducky kimi cihazlar kiçik görünür, amma təşkilatlar üçün çox ciddi təhlükələr yarada bilər. Hücum saniyələr içində baş verdiyinə görə, çox vaxt nə EDR, nə antivirus, nə də istifadəçi bunu hiss edir.

Təşkilat üçün əsas risklər bunlardır:

- **Avtomatik və idarəolunmaz əmrlər**  
	Cihaz qoşulan kimi administrator səlahiyyətlərində komanda yeridə bilər. Məsələn, yeni hesab yaratmaq, firewall qaydasını dəyişmək, Windows ayarlarını manipulyasiya etmək.
- **Məlumat sızması**  
	Brauzer session cookie-ləri, parollar, VPN konfiqurasiyaları və ya lokal fayllar bir neçə saniyədə çıxarıla bilər.
- **Ransomware üçün ilkin giriş**  
	Hücumçu kompüterdə PowerShell vasitəsilə zərərli fayl endirib işə sala bilər — və bu, endpoint tərəfindən “klaviatura əməliyyatı” kimi qəbul olunduğu üçün çox zaman aşkarlanmaz.
- **Endpoint mühafizəsinin baypas edilməsi**  
	Antivirus USB klaviaturanı zərərli kimi tanımır. Bu səbəbdən HID əsaslı hücumlar praktiki olaraq “imzasız hücum” sayılır.
- **Sosial mühəndisliklərin güclənməsi**  
	Adi USB-lərin zərərsiz görünməsi hücumun effektivliyini artırır. İşçilər çox vaxt bu təhlükənin fərqində olmurlar.

## Qorunma yolları (işçilər üçün praktik tövsiyələr)

Bu hissə texniki səviyyəsi fərqli olan bütün əməkdaşlar üçün nəzərdə tutulub. Məqsəd qorxutmaq deyil, sağlam davranış qaydalarını formalaşdırmaqdır.

- **Tanımadığın USB-ni heç vaxt kompüterə taxma**  
	Əgər sənə aid deyilsə, içində nə olduğunu bilmirsənsə — istifadə etmə.
- **Şübhəli USB görsən, dərhal IT və ya təhlükəsizlik komandasına xəbər ver**  
	Tapılan hər USB potensial riskdir.
- **İş masasından uzaqlaşanda kompüteri kilidlə**  
	Hücum cəmi 3–5 saniyə çəkir — açıq qalan kompüter ideal hədəfdir.
- **Noutbuku nəzarətsiz qoyma**  
	Restoran, zal, iclas otağı — hamısı riskli mühitdir.
- **Ziyarətçilərə və podratçılara diqqətli yanaş**  
	Kənar şəxs USB qoşmaq istəsə, buna icazə vermə. Bu qayda kritikdir.
- **Sadə şüar: “Sən almamısansa, qoşma!”**  
	Bu, ən güclü və yadda qalan xəbərdarlıq üsullarından biridir.

Bu davranışlar texniki müdafiədən daha effektiv ola bilər — çünki hücumu tamamilə başlanğıcdan bloklayır.

### Pico-Ducky ilə Zərərsiz Sınaqlar

Məhz belə hallar üçün özümə bir **Raspberry Pico W** ayırmışdım və bunu nümunə kimi istifadə edəcəyəm. İstərdim ki, fiziki təhlükəsizliyin praktiki tərəfini daha yaxşı anlamaq və antivirus sistemlərinin real mühitdə (production) necə reaksiya verdiyini qiymətləndirmək üçün Pico-Ducky üzərində tam zərərsiz, təhlükəsiz bir sınaq aparım. Bu testin məqsədi heç bir zərərli fəaliyyət icra etmək deyil — sadəcə sistemin davranışını müşahidə etmək, fiziki giriş əsasında baş verə biləcək sürətli əmrlərə müdafiə mexanizmlərinin necə cavab verdiyini görmək və kiçik, zarafat xarakterli bir funksiyanı sınamaqdır.

Bizə lazım olacaq:

- Raspberry Pi Pico W
- Pico W üçün CircuitPython (mən adafruit-circuitpython-raspberry\_pi\_pico\_w-en\_US-XXXX.uf2 faylından istifadə etdim)
- Pico-ducky faylları (firmware + library + payload.dd)

5 dəqiqədən az vaxtda USB Rubber Ducky funksionallığını quraşdırın və işə salın, ref [Github Pico-Ducky](https://github.com/dbisu/pico-ducky/releases):

1. Pico-nu USB porta qoşun — **RPI-RP2** adlı çıxarıla bilən yaddaş kimi görünəcək.
2. **adafruit-circuitpython-raspberry\_pi\_pico\_w-en\_US-9.2.1.uf2** faylını RPI-RP2 root directory-nə kopyalayın. Pico yenidən başlayacaq və bir neçə saniyədən sonra **CIRCUITPY** kimi yenidən qoşulacaq.
3. Əgər **Pico 2W** istifadə edirsinizsə:  
	**adafruit-circuitpython-raspberry\_pi\_pico2\_w-en\_US-9.2.1.uf2** faylını kopyalayın.
4. **lib** qovluğunu CIRCUITPY root directory-nə kopyalayın.
5. Bütün **.py** fayllarını CIRCUITPY root directory-nə əlavə edin.
6. Payload faylınızı **payload.dd** adı ilə CIRCUITPY root directory-nə kopyalayın.
7. USB-dən ayırın.

Pico-Ducky istifadəyə hazırdır. 🙂

Test ucun sadə bir payload yaratmışam və bunu dostlarınızı və ya iş yoldaşlarınızı zarafatla “prank” etmək üçün istifadə edə bilərsiniz. Ref: [payload.dd](https://github.com/rasulovk/Pico-Ducky_payloads/tree/main) Payload-ın yüklənməsi üçün, icranı dayandırmaq məqsədilə PIN 1 və PIN 3 arasında jumper qoşmaq lazımdır.

![setup-mode](https://raw.githubusercontent.com/dbisu/pico-ducky/refs/heads/main/images/setup-mode.png "Cibə Sığan Kiber Təhlükə: Rubber Ducky Hücumlarının Real Dünyadakı Təsiri 1")

Əgər CIRCUITPY diski mount olunmursa, o halda aşağıdakı şəkildə göstərildiyi kimi jumper əlavə edin:

![usb-boot-mode](https://raw.githubusercontent.com/dbisu/pico-ducky/refs/heads/main/images/usb-boot-mode.png "Cibə Sığan Kiber Təhlükə: Rubber Ducky Hücumlarının Real Dünyadakı Təsiri 2")

USB-dən ayırın və setup jumper-ini çıxarın.

## Və sonda …

Pico-Ducky və Rubber Ducky kimi cihazlar göstərir ki, kibertəhlükəsizlik yalnız firewall, antivirus və bulud xidmətlərindən ibarət deyil. **Kiçik bir USB cihazı da bütün təşkilat üçün kritik təhlükə yarada bilər.**

Bu tip hücumlar son illərdə artan trendlərdən biridir, çünki:

- çox ucuzdur,
- asan əldə edilir,
- aşkar etmək çətindir,
- və işçilərin davranış zəifliklərindən istifadə edir.

Məqsəd panika yaratmaq deyil — məlumatlılıq formalaşdırmaqdır. Fiziki təhlükəsizlik qaydalarına əməl etməklə bu hücumların qarşısını tamamilə almaq mümkündür.