---
title: "DFIR: Windows Rəqəmsal Forensikası"
source: https://cyberhub.az/dfir-windows-forensik/
author:
  name: Kamil R.
  role: Writer
date: 27.10.2025
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: Digital Forensic
---

**“Rəqəmsal izlər görünməz qalır, amma doğru alətlər və metodlarla onlar istifadəçi fəaliyyətini və şübhəli əməliyyatları ortaya çıxarır.”**

Bu gün mən sizə **DFIR metodologiyası və alətləri** üzərindən addım-addım keçməyi və tövsiyə olunan praktik addımları göstərəcəyəm. İnsident araşdırmalarında ilk və ən vacib addım **diskin surətini çıxarmaq** dır — bu, bütün sübutları qorumaq və təhlili etibarlı aparmaq üçün əsasdır. Bunun üçün Unix sistemlərində `dd`, `Clonezilla`, Windows üçün isə pulsuz `FTK Imager` və ya Microsoft-un `Disk2vhd` alətindən istifadə etmək olar. Disk şəkillərini yaratdıqdan sonra onları istənilən yerdə saxlamaq və Windows-da asanlıqla mount etmək mümkündür.

### Qovluq və fayl istifadəsinin tarixçəsinin təhlili

İstifadəçinin keçmişdə açdığı qovluqlar və fayllar haqqında məlumatı öyrənmək üçün `Windows Registry` -də yerləşən aşağıdakı hissədən istifadə olunur:

```
Computer\HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell
```

Bu bölmədə istifadəçinin sistemdə hansı qovluqlara və fayllara daxil olduğunu göstərən **binary** formatlı məlumatlar saxlanılır. Bu məlumatlar **`Shellbag`** adlanır və istifadəçinin sistemdəki fəaliyyət ardıcıllığını bərpa etməyə imkan verir. Məlumatlar kodlaşdırılmış formada olduğundan, onların təhlili üçün **`Shellbag Explorer`** və ya **`ShellbagsView`** kimi alətlərdən istifadə etmək mümkündür. Bu vasitələr həmçinin **offline** analiz üçün `registry` faylını yükləməyə də imkan verir.

Bundan əlavə, istifadəçinin son açdığı proqramlar və faylların siyahısını **`JumpList`** məlumatları vasitəsilə əldə etmək mümkündür. Bunun üçün ya **JumpList Viewer** kimi alətlərdən yararlanmaq, ya da əllə aşağıdakı ünvanı yoxlamaq olar:

```
cd C:\Users\mamed\AppData\Roaming\Microsoft\Windows\Recent
dir /a
```

`JumpList` faylları istifadəçinin hansı proqramları işlətdiyini və hansı sənədlərlə əlaqədə olduğunu göstərir. Bu məlumatları `Shellbag` məlumatları ilə birləşdirərək istifadəçinin fəaliyyətinə dair daha dolğun **timeline** (zaman ardıcıllığı) yaratmaq mümkündür. Hər iki artefakt istifadəçi səviyyəsində toplanır və **`DFIR`** (Digital Forensics and Incident Response) araşdırmalarında vacib sübut mənbəyi hesab olunur.

### Windows Search Indexing və File History təhlili

`Windows Search Indexing` istifadəçinin sistemdə axtardığı fayllar və sənədlərlə bağlı vacib **forensik artefaktlar** təqdim edir. Lakin işlək vəziyyətdə olan sistemdə bu bazaya (`Indexing Options > Advanced Options > Current location`) birbaşa giriş mümkün deyil, çünki **indeks bazası** hal-hazırda sistem tərəfindən istifadə olunur. Bunun əvəzinə həmin verilənlər bazasının **Shadow Copy** (kölgə nüsxəsi) yaradılaraq təhlil edilməsi mümkündür.

**Indexing Database (windows.edb) əldə edilməsi və analiz**

Bu prosesi həyata keçirmək üçün **PowerShell** skriptlərindən istifadə olunur:

1. **PowerShell ISE** -ni administrator kimi açın.
2. Aşağıdakı əmrləri icra edin:
```
$myguid=(New-Guid).ToString()
mkdir "C:\$myguid"

# Kölgə nüsxəsinin yaradılması və linklənməsi
$s1 = (gwmi -List Win32_ShadowCopy).Create("C:\", "ClientAccessible")
$s2 = gwmi win32_ShadowCopy | ? { $_.ID -eq $s1.ShadowID }
$d = $s2.DeviceObject + "\"
$l = "C:\$myguid\shadowcopy"
cmd /c mklink /d "$l" "$d"
```
3. Daha sonra **CMD** -ni administrator rejimində açın və verilənlər bazasını kopyalayın:
```
dir C:\<PowerShell çıxışındakı ad>\shadowcopy\ProgramData\Microsoft\windows.edb /a/s/b
copy C:\<PowerShell çıxışındakı ad>\shadowcopy\ProgramData\Microsoft\windows.edb \
```
4. Faylın sağlamlığını yoxlamaq və təmir etmək üçün:
```
esentutl /p windows.edb
```
5. Sonra verilənlər bazasını analiz etmək üçün PowerShell skriptindən istifadə edin:  
	[ExtractFilenamesFromWindowsEDB.ps1](https://raw.githubusercontent.com/rasulovk/Digital-Forensic-Scripts/refs/heads/main/ExtractFilenamesFromWindowsEDB.ps1)
6. Fayl tarixçəsi üçün **File History** proqramından istifadə edə bilərik. Onun necə işlədiyini rəsmi sənəddən öyrənmək olar. Ref: [filehistory.md](https://github.com/rasulovk/Digital-Forensic-Scripts/blob/main/filehistory.md)

Bu üsulla istifadəçinin sistemdə hansı sənədləri axtardığı və hansı faylların indeksləndiyi müəyyən edilə bilər.

**File History təhlili**

File History Windows-da avtomatik ehtiyat nüsxə sistemidir və dəyişiklikləri izləyir. Bu məlumatlar da forensik analiz üçün əhəmiyyətlidir. Rəsmi sənədlərə əsaslanaraq işləmə prinsipi ilə tanış ola bilərsiniz:  
File History Documentation

Analiz üçün aşağıdakı PowerShell skripti istifadə edilə bilər:  
[FileHistoryDB2CSV.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/FileHistoryDB2CSV.ps1)

Bu skript File History verilənlər bazasındakı məlumatları CSV formatına ixrac etməyə imkan verir. Hətta istifadəçi bəzi faylları silsə belə, bu üsul vasitəsilə onların izlərini tapmaq mümkündür. Bu, araşdırmanı daha dərindən aparmağa şərait yaradır.

Qeyd: File History funksiyası standart olaraq deaktiv olur.  
Lakin Search Indexing (axtarış indeksləşməsi) funksiyası defolt şəkildə aktivdir və onun məlumatları da oxşar üsulla Shadow Copy vasitəsilə çıxarılıb analiz edilə bilər.

Bunun üçün aşağıdakı PowerShell skriptindən istifadə etmək mümkündür:  
[Analyze\_EntClientDb.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/Analyze_EntClientDb.ps1)

### Avadanlıq izlərinin təhlili

Avadanlıqların (USB, monitor və s.) cihazla nə vaxt və necə qoşulduğunu təhlil etmək mümkündür. Qoşulmuş cihazların məlumatları, çıxarıldıqda belə, sistemdə izlər (artefaktlar) saxlayır və bunlardan aşağıdakı yollarla istifadə olunur.

Qoşulmuş USB cihazlarını tapmaq üçün registrdəki uyğun qovluq:

```
Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR
```

Burada cihazların `friendly name` və digər xüsusiyyətləri saxlanılır.

- Mont edilmiş sürücüləri görmək üçün:
```
Computer\HKEY_LOCAL_MACHINE\SYSTEM\MountedDevices
```

Burada tarix yoxdur — yalnız sürücü məlumatları. Qoşulma tarixlərini istifadəçi ilə əlaqələndirmək üçün aşağıdakı qeyd də faydalıdır:

```
Computer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2
```
- Asan vizual baxış üçün `USBview` tövsiyə olunur — GUI vasitəsilə qoşulma məlumatlarını göstərir.
- Şəbəkə profillərinə bağlı izləri araşdırmaq üçün PowerShell skripti:  
	`Analyze-NetworkProfiles.ps1`
- `Amcache` və yüklenen drayverlərin tarixi üçün yaxşı mənbədir; oxumaq üçün:  
	[`AmCacheDrivers.md`](https://github.com/rasulovk/Digital-Forensic-Scripts/blob/main/AmCacheDrivers.md)
- Faylların işlək sistemdə oxunmaması səbəbindən əvvəlcə **shadow copy** (kölgə nüsxəsi) yaratmaq lazımdır. Məsələn:
```
#Create and link shadowcopy:
$s1 = (gwmi -List Win32_ShadowCopy).Create("C:\", "ClientAccessible") 
$s2 = gwmi Win32_ShadowCopy | ? { $_.ID -eq $s1.ShadowID } 
$d  = $s2.DeviceObject + "\" 
$l = "C:\"+$myguid+"\shadowcopy"
cmd /c mklink /d "$l" "$d"

cmd /c reg load "HKLM\$myguid" "C:\$myguid\shadowcopy\Windows\AppCompat\Programs\AmCache.hve"
```

Bu, `AmCache.hve` və `amcache.edb` kimi faylları etibarlı şəkildə yükləməyə və təhlil etməyə imkan verir.

- `amcache.edb` faylında sistemdə yüklənmiş drayverlər və proqramlarla bağlı tarixçə var; analiz üçün PowerShell skripti:  
	[`AmCacheDrivers.ps1`](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/AmCacheDrivers.ps1)

Bu metodlarla təkcə cihazların siyahısını əldə etmirik — həm də cihazların qoşulma/çıxarılma tarixçəsini və maşının ümumi tarixçəsini daha dərindən araşdırmaq mümkündür.

### Brauzer tarixçəsinin təhlili

`Edge` brauzerinin tarixçəsi və profilləri hər istifadəçi üçün ayrıca saxlanılır — araşdırma zamanı profillərin sayını və hər profilin saxladığı məlumatları (parollar, tarixçə və s.) nəzərə almaq vacibdir. Məsələn, `Edge` -in cache qovluğu belədir:

```
C:\Users\mamed\AppData\Local\Microsoft\Edge\User Data\Default\Cache\Cache_Data
```
- **Şəkil cache-ləri və görüntülər:** `ImageCacheViewer` alətindən istifadə edib `Options > Advanced options` -da yuxarıdakı qovluğu göstərin. Buradan istifadəçinin ziyarət etdiyi saytlara aid şəkillər, tarix və vaxt, istifadəçi məlumatları və s. tapıla bilər. Bu faylları kopyalayıb digər alətlərlə əlavə təhlil etmək olar.
- **Yükləmələr:** Yüklənən faylların tarixi, adı və yeri üçün `BrowserDownloadsView` istifadə edin — bu, hansı faylların, nə vaxt və hara endirildiyini göstərir.
- **Ümumi tarixçə:** `BrowsingHistoryView` vasitəsilə müxtəlif brauzerlərdə (Edge, Chrome, Firefox və s.) saxlanmış linkləri və hansı brauzerdə açıldığını görə bilərsiniz. **Private/Incognito** rejimdəki sessiyalar adətən müvəqqətidir və bağlandıqda tarixçəyə daxil edilmir — buna görə həmin məlumatlar çıxarılmaya bilər.
- **Saxlanmış parollar:** `ChromePass` kimi alətlərlə yalnız `Chrome` -da saxlanmış parolları çıxarmaq mümkündür. Bu verilənlərə giriş üçün istifadəçi hesabının parolu tələb oluna bilər; korporativ mühitdə bu parol `AD` -də (Active Directory) idarə oluna və ya digər mərkəzləşdirilmiş siyasətlərlə qoruna bilər.
- **Cookies və sessiya məlumatları:** `EdgeCookiesView` ilə kukilər və sessiya məlumatlarını analiz etmək olar — kukilər ziyarət edilən səhifələri, skriptlərlə yüklənən resursları və avtomatik yüklənən məzmunu göstərir. Kukilər həm performans məqsədi ilə istifadə olunur, həm də forensik baxımdan istifadəçinin konkret saytlarla əlaqəsini təsdiqləməkdə faydalıdır.

Bu artefaktları `Edge` profilləri və cache faylları ilə birlikdə təhlil etmək istifadəçinin brauzer fəaliyyətinin zaman xəritəsini yaratmağa kömək edir və `DFIR` araşdırmalarında mühüm rol oynayır.

### SRUM (System Resource Usage Monitor) verilənlər bazasının əldə edilməsi

Sistem fəaliyyətinə dair məlumatlar `SRUDB.dat` faylında saxlanılır. Lakin bu fayl işlək vəziyyətdə sistem tərəfindən istifadə olunur, buna görə **Shadow Copy** yaradılmalıdır.

```
$myguid=(New-Guid).ToString()
mkdir "C:\$myguid"

# Kölgə nüsxəsinin yaradılması və linklənməsi:
$s1 = (gwmi -List Win32_ShadowCopy).Create("C:\", "ClientAccessible")
$s2 = gwmi Win32_ShadowCopy | ? { $_.ID -eq $s1.ShadowID }
$d = $s2.DeviceObject + "\"
$l = "C:\$myguid\shadowcopy"
cmd /c mklink /d "$l" "$d"
```

Sonra **CMD** -də aşağıdakı yeri yoxlayın:

```
C:\Windows\System32\SRUDB.dat
```

**2\. SRUM verilənlər bazasının təhlili**

Analiz üçün **Eric Zimmerman** tərəfindən hazırlanmış `SrumECmd` adlı açıq mənbəli alətdən istifadə olunur (DotNet 6 tələb edir).  
Aləti buradan əldə etmək mümkündür:  
[https://github.com/EricZimmerman/Srum](https://github.com/EricZimmerman/Srum)

İcra nümunəsi:

```
SrumECmd.exe -f "C:\SRUDB.dat" --csv "C:\temp\analyze_reports"
```

Yekunda yaradılan hesabatda sistemdə işlədilmiş **icra olunan faylların (executable files)** siyahısı, fəaliyyət tarixçəsi və əlaqəli tətbiqlər əks olunur. Lazımsız məlumatları filtrasiya etməklə analiz prosesi daha səmərəli hala gətirilə bilər.

**3\. Şəbəkə istifadəsinin təhlili**

`NetworkUsageView` aləti SRUM verilənlərindən şəbəkə əlaqələri və tətbiqlərlə bağlı məlumatları çıxarmağa imkan verir. Bu məlumat bazası forensik baxımdan çox dəyərlidir, çünki hansı tətbiqin hansı şəbəkəyə nə vaxt qoşulduğunu müəyyən etməyə kömək edir.

**4\. Uyğunluq keşinin (AppCompatCache) təhlili**

Windows həmçinin tətbiqlərin uyğunluq (compatibility) məlumatlarını keşdə saxlayır. Burada sistemdə işə salınmış tətbiqlərin siyahısı mövcuddur. Bu məlumatları çıxarmaq üçün `AppCompatCacheParser` alətindən istifadə olunur:

```
C:\Users\admin\Desktop\net6\AppCompatCacheParser.exe --csv C:\temp\cache_reports
```

Bu hesabat tətbiqlərin müəyyən hissəsi haqqında məlumat verir — hər zaman tam və etibarlı nəticə təqdim etməsə də, **araşdırma zamanı əlavə kontekst** təmin edir və digər mənbələrlə birlikdə sistem tarixçəsini bərpa etməyə kömək edir.

### Sistem fayllarındakı artefaktların təhlili

Hər bir fayl və qovluq Windows sistemində yaradılma, dəyişdirilmə və son istifadə tarixi kimi **metadata** saxlayır. Bu məlumatlara həm **PowerShell**, həm də faylın **Properties** bölməsindən baxmaq mümkündür:

```
dir .\file_name | select *
# test məqsədilə tarix dəyişmək
(dir .\file_name).CreationTime = (Get-Date).AddDays(-100)
```

Ancaq hücum edənlər (attacker) bu tarixləri dəyişdirə bilər. Buna baxmayaraq, **Windows Journal** sistemi fayl sistemində baş verən bütün dəyişiklikləri qeydə alır və bu, real yaradılma tarixini müəyyən etməyə imkan verir.

**1\. NTFS USN Journal vasitəsilə analiz**

USN (Update Sequence Number) Journal — NTFS fayl sistemindəki bütün dəyişikliklərin qeydiyyatını aparan daxili mexanizmdir. Jurnalı oxumaq üçün aşağıdakı əmrlərdən istifadə olunur:

```
fsutil usn
fsutil usn queryjournal C:
fsutil usn readjournal C:
```

**2\. Faylın qovluq yerini müəyyənləşdirmək**

USN jurnalı faylın tam yolunu saxlamır, lakin hər fayl üçün **File ID** və **Parent ID** (valideyn qovluğun identifikatoru) mövcuddur. Faylın yerini tapmaq üçün:

```
fsutil file queryFileNameById <FileID>
```

Bu əmr faylın sistemdəki qovluq yerini göstərir.

**3\. USN Journal vaxt möhürləri (timestamps)**

Jurnaldakı hər bir qeyd öz **timestamp** -i ilə saxlanılır və bu tarixlər sistem tərəfindən qorunur — onları manipulyasiya etmək mümkün deyil. Əgər faylın yaradılma tarixi dəyişdirilərsə, bu saxtalaşdırma USN ardıcıllığında fərq kimi görünəcək.  
Məsələn, köhnə tarixli USN qeydi, yeni tarixli qeyddən sonra gəlirsə, bu, **saat manipulyasiyası** və ya sistem vaxtında dəyişiklik olduğunu göstərə bilər.

Bu məqsədlə **`checkUSNmonotonicity`** alətindən istifadə edilir:  
Ref: [CheckUsnMonotonicity.exe](https://github.com/rasulovk/Digital-Forensic-Scripts/blob/main/CheckUsnMonotonicity.exe)

Bu alət administrator hüquqları tələb etmir, istənilən istifadəçi jurnalı oxuya bilər. Nəticədə sistem saatında dəyişiklik olub-olmadığı aydın görünür.

**4\. Real-time dəyişikliklərin izlənməsi**

Aşağıdakı əmr jurnalda baş verən dəyişiklikləri canlı şəkildə göstərir:

```
fsutil usn readjournal C: wait tail
```

Bu rejimdə istənilən faylın açılması, dəyişdirilməsi və ya silinməsi anında izlənilə bilər.

**5\. Silinmiş faylların müəyyənləşdirilməsi**

Silinmiş faylları jurnaldan bərpa etmək və ya onların siyahısını çıxarmaq üçün **`FDiJ`** alətindən istifadə olunur:  
Ref: [FDiJ.exe](https://github.com/rasulovk/Digital-Forensic-Scripts/blob/main/FDiJ.exe)

```
.\FDiJ.exe \\.c\
.\FDiJ.exe \\.c\ > C:\temp\report_deletion_journal.txt
```

Bu alət jurnalda qeyd olunmuş bütün **silinmə hadisələrini (deletion events)** göstərir. Format sadə olsa da, hər bir silinmiş faylın qeydini aşkar etmək mümkündür.

```
dir C:\windows\prefetch
```

Bu qovluqda hər bir icra olunan fayl üçün `.pf` uzantılı fayllar olur. Hər `.pf` faylı həmin icra faylına aid sabit adla yaradılır; fayl vaxt-ilə yenilənə və ya yenisi yarana bilər. Windows 10-dan başlayaraq bəzi `prefetch` faylları sıxılmış ola bilər — onları parse (ayırd etmək) üçün `WinPrefetchView` alətindən istifadə etmək rahatdır (`Nir Sofer` tərəfindən). Alət faylları avtomatik yükləyib analiz edir və aşağıdakı forensik məlumatları təqdim edə bilər: icranın tam yolu, son işə salınma tarixi və saatı, işə salınma sayı, müvəqqəti faylların və `msi` /quraşdırma fayllarının izi və s.

Məhdudiyyətlər və tövsiyələr:

- `prefetch` faylları silinə və ya prefetch xidməti söndürülə bilər — buna görə nəticəni digər artefaktlarla korelyasiya etmək vacibdir.
- Təhlil üçün orijinal `.pf` fayllarının nüsxəsini çıxarıb offline alətlərdə işləmək məsləhətdir.
- `prefetch` artefaktlarını digər mənbələr (USN jurnal, `AppCompatCache`, SRUM və s.) ilə birlikdə toplayaraq daha güvənli timeline qurmaq olar.

Qısa və məqsədəuyğun yığılıb-təhlil edilməsini təmin etmək üçün mümkün qədər çox `prefetch` faylını və əlaqəli artefaktları toplayın.

### Windows Recycle Bin — silinmiş faylların təhlili

`Recycle Bin` (zibil qutusu) təkcə istifadəçilərin sildiyi faylları deyil, həm də sistemin avtomatik silmələri zamanı yaradılan məlumatları da saxlayır. Sistem səviyyəsində bu qovluq aşağıdakı yerdə yerləşir:

```
dir /a C:
C:\$Recycle.Bin
```

Bu qovluğun içərisində hər bir istifadəçiyə məxsus ayrıca alt qovluqlar olur və onların adları müvafiq `SID` identifikatoru ilə göstərilir. Öz `SID` -inizi öyrənmək üçün aşağıdakı əmrdən istifadə edə bilərsiniz:

```
whoami /all
```

Hər silinmiş fayl üçün `Recycle Bin` iki fayl yaradır:

- `$R` ilə başlayan fayl — orijinal faylın **məzmununu** saxlayır
- `$I` ilə başlayan fayl — orijinal faylın **adı, silinmə tarixi və faylın əvvəlki yeri** barədə metadata saxlayır

Hər iki fayl orijinal genişlənmə ilə saxlanılır, lakin adları sistem tərəfindən təsadüfi olaraq yaradılır.

Bu fayllar vasitəsilə silinmiş sənədlərin bərpası və ya silinmə prosesinin təhlili mümkündür. Məsələn, `$I` faylının içində qeyd olunan **orijinal yol** və **vaxt nişanı** (`timestamp`) forensik araşdırma zamanı vacib sübut rolunu oynaya bilər.

Əlavə olaraq, fayl məzmununa baxmaq və hexdump analiz aparmaq üçün `HxD64` kimi alətlərdən istifadə etmək mümkündür. Bu, silinmiş faylların hissələrini oxumağa, həmçinin məlumatın nə dərəcədə bərpa oluna biləcəyini müəyyən etməyə kömək edir.

### Windows loglarının təhlili

Windows loglarını təhlil etmək üçün daxili **Event Viewer** istifadə olunur, lakin qeydiyyat bəzi loglar standart olaraq aktiv olmaya bilər. Köhnə logları toplamaq və analiz etmək üçün PowerShell skripti istifadə oluna bilər:  
[Get-OldestEvents.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/Get-OldestEvents.ps1)

- Təhlükəsizlik logları üçün **retention period** və log ölçüsünü artırmaq tövsiyə olunur.
- Loglar özləri məhdud məlumat saxlayır, daha ətraflı analiz üçün onları lokal saxlamaq lazımdır.
- Digər maraqlı loglar: `C:\Windows\Logs`, IIS server logları və boot vaxtı logları. Boot logları üçün skript:  
	[Extract-BootTimes.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/Extract-BootTimes.ps1)
- PowerShell ilə logları oxumaq:
```
Get-WinEvent
```
- Daha dərindən monitorinq üçün **Sysmon** quraşdırıla bilər:
```
.\Sysmon.exe -i
```

Sonra PowerShell skripti ilə CSV formatına ixrac edə və analiz etmək olar:  
[Sysmon2CSV.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/Sysmon2CSV.ps1)

### Windows qeydiyyat bazasının (registry) təhlili

`Registry` çoxlu faydalı məlumat saxlayır. Aşağıdakı əsas məqamları qısa və konkret şəkildə qeyd edək.

- Cari idarəetmə dəsti (Current Control Set) yalnız sistem işlədikdə mövcuddur:  
	`Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet`  
	Xarici media ilə sistem yüklənəndə və ya registr faylları başqa maşına köçürüləndə burada boş görünə bilər.
- Sistem registr faylları adətən bu qovluqdadır:  
	`C:\windows\system32\config`
- Bəzi registr qovluqları boş görünə bilər — bu, adətən icazə (permission) məhdudiyyətləri ilə əlaqədardır; bəzi açarlar hətta administrator hesabı ilə belə oxunmaya bilər.
- Cari istifadəçi registr hive-ni tapmaq üçün `cmd` -də `set` əmrindən istifadə edib müvafiq dəyişənləri yoxlamaq olar.
- Başqa istifadəçi hesabının registrini təhlil etmək üçün həmin istifadəçinin `NTUSER.dat` faylını onun profili altından kopyalayın (məs. `C:\Users\other_user\NTUSER.dat`) və offline olaraq yükləyib analiz edin.

Qısa və məqsədəuyğun: registr fayllarını offline nüsxə ilə təhlil edin, icazələri və hive yerlərini nəzərə alın.

### İstifadəçi profillərinin təhlili

Forensik baxımdan istifadəçi profilləri çox dəyərli məlumatlar təqdim edir. Digər istifadəçi profillərini təhlil etmək üçün registrdə aşağıdakı açar yoxlanılır:

```
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList
```
- Hər profil öz **SID** -i ilə qeyd olunur və tam istifadəçi profili və ya qonaq profili ola bilər.
- İstifadəçi sistemə daxil olduqda, defolt profil yüklənir və həmin istifadəçi üçün tətbiq olunur.
- Həm **yüklənmiş**, həm də **yüklənməmiş** profilləri analiz edərək istifadəçinin girişlərini müəyyən etmək mümkündür.

Profilin dəqiq zamanını təhlil etmək üçün PowerShell skripti istifadə olunur, çünki Windows sistemində bu zaman məlumatları **nanosekundlarda** və 1601-ci ildən başlanaraq saxlanılır. Skript:  
[DateTimeRegFinder.ps1](https://github.com/rasulovk/Digital-Forensic-Scripts/raw/refs/heads/main/DateTimeRegFinder.ps1)

### PE fayllarının (executable) araşdırılması

Hücum zamanı zərərli proqram (PE) faylları sistemə düşür və ya C2C komandaları vasitəsilə yayıla bilər. Onların mövcudluğunu və mənbəyini təhlil etmək üçün PowerShell istifadə edilə bilər:

```
Get-AuthenticodeSignature C:\Windows\System32\notepad.exe | select *
```

Maraqlı PE-ləri seçmək üçün skript nümunəsi:

```
$dir = dir *.exe
foreach ($f in $dir)
{
    if ((Get-AuthenticodeSignature $f).IsOSBinary)
    {
        continue
    }
    $f
}
```
- `IsOSBinary = True` olan fayllar sistem tərəfindən etibarlı hesab olunur; zərərli proqramlar bu flag ilə düşmür.
- PE fayllarını əlavə analiz üçün `signtool.exe` (SDK tərkibində) və ya `sigcheck.exe` (Microsoft aləti) istifadə etmək mümkündür.
- İmzalanmamış tətbiqlər üçün **hash** hesablamaq və VirusTotal kimi xidmətlərdə yoxlamaq tövsiyə olunur:
```
Get-FileHash ./notepad.exe
```
```
sc sdshow spooler

D:(A;;CCLCSWLOCRRC;;;AU)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWRPWPDTLOCRRC;;;SY)
```

Buradakı `DC` kimi göstərilən sahələr istifadəçiyə xidməti yenidən konfiqurasiya etmək imkanı verə və nəticədə xidmət başladıqda zərərli kodun işə düşməsinə səbəb ola bilər.

- Mürəkkəb davamlılıq üsullarını aşkarlamaq üçün `Persistence Snipper` istifadə edin (məlum və riskli xidmət/parametr nümunələrini axtarır).
- Sistem və istifadəçi səviyyəsində avtomatik işə düşən elementləri yoxlamaq üçün `Autoruns` ilə skan edin; `Autorun Scan Option` vasitəsilə fayl/hes-in `VirusTotal` -a göndərməni və qeydləri saxlamağı unutmayın.
- Yekun tövsiyə: müəyyən edilmiş şübhəli dəyişiklikləri fayllayaraq (export) başqa maşınlarla müqayisə edin və xidmət icazələri, autorun-lar və quraşdırılmış proqramların imzalarını korelyasiya edin.

### Volatil məlumatların toplanması

İnsident reaksiya zamanı uçucu məşğuliyyəti düzgün saxlamaq çox vacibdir — əks halda məlumatlar itə və ya analiz çətinləşə bilər. Aşağıdakı məlumatlar **shutdown** etməzdən əvvəl qorunmalıdır (qısa siyahı):

- OS detalları (istifadəçi, maşın adı, versiya)
- Proseslər (PID, ad, PPID, yol, cmdline, thread sayı, IO sayçıları, vaxtlar)
- Yüklənmiş DLL-lər və drayverlər
- Ətraf mühit (environment) və root sertifikatlar (user və machine)
- Açıq handle-lar (fayl, registry və s.)
- ARP cache, IP konfiqurasiyası, DNS cache
- Aktiv TCP/IP bağlantıları (ünvanlar, portlar, PID, qurulma vaxtı)
- Aktiv logon sessiyaları
- Kernel yaddaşı və yaddaşda saxlanmış açarlar (məs. BitLocker recovery şifrələri daxil olmaqla)

Alətlər və tövsiyələr:

- Faydalı məullamatlar: [`VolatileDataCollector`](https://github.com/rasulovk/Digital-Forensic-Scripts/tree/main/VolatileDataCollector)
- Proses dump üçün `procdump.exe`:
```
procdump.exe -i
procdump.exe -ma PID
```
- Bəzi proseslər qorunur — bunu `Process Explorer` -də `Protected` sütunu ilə yoxlayın.
- Yaddaşın tam saxlanması üçün hibernate rejimini aktiv etmək və sonra `deep sleep windows` /fiziki nəqliyyatla maşını daşımadan əvvəl saxlamaq tövsiyə olunur.

Qısa və konkret: uçucu məlumatları sistem söndürülməzdən əvvəl strukturlaşdırılmış şəkildə çıxarın və etibarlı şəkildə saxlayın.