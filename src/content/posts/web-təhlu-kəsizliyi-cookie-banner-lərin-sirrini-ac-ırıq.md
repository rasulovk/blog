---
title: "WEB təhlükəsizliyi: Cookie-banner-lərin sirrini açırıq"
source: https://cyberhub.az/web-cookie/
author:
  name: Kamil R
  role: Writer
date: 2026-11-20
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: Infosec
---

![Thirdparty_web_cookie](https://cyberhub.az/wp-content/uploads/2025/11/Web_cookie_.webp "WEB təhlükəsizliyi: Cookie-banner-lərin sirrini açırıq 1")

Siz onları yəqin ki, bir neçə dəfə görmüsünüz. Son illərdə cookie-banner-lər adi hala çevrilib. Bu məqalədə biz cookie-banner anlayışını, onun necə işlədiyini və niyə çox zaman istifadəçi təcrübəsini çətinləşdirdiyini araşdıracağıq. Əgər siz marketoloqsunuzsa və ya vebsayta cavabdehsinizsə, amma orada cookie-banner-in nə üçün lazım olduğunu başa düşmürsünüzsə, bu yazı sizə bütün vacib məqamları aydınlaşdıracaq. Təfərrüatlar aşağıda təqdim olunur.

### Niyə “cookie” lazımdır

Bu bildirişlər 2002-ci il e-Privacy Direktivi (bəzən “Avropa cookie qanunu” da deyilir) səbəbilə ortaya çıxıb. Əvvəllər cookie-lər sadəcə istifadəçi ilə sayt arasında qarşılıqlı əlaqəni asanlaşdırmaq üçün nəzərdə tutulmuşdu. Onlar şəxsi seçimləri, avtorizasiya statusunu, səbətdəki malları və analitika üçün davranış parametrlərini yadda saxlayırdı.

**Cookie-banner nədir?**  
Cookie-banner — bu, saytda istifadəçiyə saytın cookie fayllarından istifadə etdiyini bildirən açılan pəncərdir. Tipik nümunə belə səslənir: “Biz cookie-lərdən istifadə edirik, saytdan istifadə etməyə davam etməklə siz razılaşırsınız…”. Amma əslində banner sadəcə bildiriş deyil. O, həm də istifadəçidən rəsmi razılıq almaq üçün nəzərdə tutulmuş tam funksional bir mexanizmdir. Bunun səbəbi isə ondan ibarətdir ki, cookie faylları — xüsusilə də şəxsi məlumatların toplanmasına xidmət edənlər — tətbiq olunduqda, məxfilik və məlumatların qorunması ilə bağlı qanunvericilik tələbləri qüvvəyə minir.

**Cookie nədir?**  
Cookie — saytın ziyarətçinin brauzerində saxladığı kiçik mətn fayllarıdır. Onlarda adətən seçilən dil, səbətin məzmunu və s. kimi məlumatlar olur. Amma cookie fayllarında daha maraqlı məlumatlar da saxlamaq mümkündür — məsələn, identifikasiya məlumatları.

***Burda vacib bir məqam var***: cookie və brauzer keşini qarışdırmayın. Adətən brauzerlər keş və cookie fayllarını birlikdə silməyi təklif edir, bu da qarışıqlıq yaradır.

Keş — brauzerdə saytın “ağır” fayllarının — şəkillərin, videoların, stillərin, skriptlərin nüsxələrinin saxlandığı yerdir. Əgər onlar saxlanılırsa, səhifə daha sürətli yüklənir. Əsasən keş əl ilə silinir, amma brauzer parametrlərində avtomatik təmizləmə də qurmaq mümkündür.

Əgər keş vaxtınıza qənaət edirsə, cookie-lər isə internetdə gəzinməyi daha rahat edir və saytların düzgün işləməsini təmin edir.

### Cookie-lər məxfilikə nə dərəcədə kömək edir

Onların effektivliyi kifayət qədər məhduddur. Cookie-lərdən istifadə üçün verilən razılıq formal xarakter daşıyır. Bu razılıq saytın işləməsi üçün zəruri məlumatları (məsələn, sessiyanın və ya parametrlərin saxlanması üçün olanları) reklam və statistika üçün istifadə olunan trekerlərdən ayırır. Lakin banner daha inkişaf etmiş izləmə üsullarını — browser fingerprinting və server-side stitching kimi texnikaları — bloklamır, həmçinin LocalStorage və IndexedDB kimi digər klient-tərəfli yaddaş mexanizmləri üzərində də nəzarət funksiyasını yerinə yetirmir. Hətta banner vasitəsilə bütün cookie-ləri söndürsəniz belə, sayt istifadəçi identifikatorlarını və telemetriyanı alternativ yollarla toplaya bilər — ETAG, Canvas API və serverdə qurulmuş sessiya mexanizmləri daxil olmaqla.

Zərərli məqsədlərlə cookie-lərdən sui-istifadə olunma ehtimalı nəzəri baxımdan bir neçə formada baş verə bilər:

**Sessiya oğurluğu (Session Hijacking).** Əgər cookie-lər lazımi səviyyədə qorunmursa, hücumçu bu məlumatları şəbəkə üzərindən ələ keçirərək istifadəçinin hesabına icazəsiz daxil ola bilər.

**XSS hücumları (Cross-Site Scripting).** Əgər vebsayt XSS zəifliyinə malikdirsə, hücumçu zərərli skript yerləşdirərək cookie-ləri öz serverinə yönləndirə bilər. Bu halda sessiya məlumatları oğurlanır və istifadəçi hesabının təhlükəsizliyi pozulur.

**Cookie-lərdə təhlükəsizlik atributlarının olmaması.** Cookie-lərdə *HttpOnly* atributu olmadıqda, JavaScript vasitəsilə cookie-lərə çıxış mümkün olur ki, bu da zərərli skriptlərin onları oğurlamasına şərait yaradır. *Secure* atributu olmayan cookie isə qorunmamış (HTTP) bağlantılar üzərindən ötürülə bilər. Bu, xüsusilə ictimai Wi-Fi şəbəkələrində sessiya məlumatlarının ələ keçirilməsi və şəxsi məlumatların sızması riskini artırır.

**Alternativ yanaşmalar.** Cookie-lərə alternativ olaraq first-party analytics sistemləri (məsələn, Matomo, Plausible), aqreqasiya və fərqləndirməyə əsaslanan analitika (fərdi profillərsiz məhdudlaşdırılmış məlumat toplusu), kontekstual reklam və ümumi məlumat toplama minimallaşdırma prinsipi tətbiq olunur. Məqsəd yalnız xidmətin işləməsi üçün doğrudan lazım olan məlumatları toplamaq və əsaslı səbəb olmadıqca unikal identifikatorlardan istifadə etməməkdir.

**GDPR konteksti.** GDPR tələblərinə gəlincə, burada əsas diqqət “unique identifiers” anlayışına və istifadəçini digərlərindən fərqləndirməyə imkan verən istənilən məlumat növünə yönəlib (bu, yalnız cookie deyil, həm də e-poçt, cihaz identifikatoru — device id, fingerprint və s. ola bilər). GDPR fərdi məlumatların toplanması və emalı üçün istifadəçinin birmənalı və könüllü razılığını (“informed explicit consent”) tələb edir — bu razılıq məqsədlərin, istifadə üsullarının tam izahı və imtina hüququ ilə müşayiət olunmalıdır.

### Cookie-lərin söndürülməsi

Siz cookie-ləri söndürə bilərsiniz (amma saytların düzgün işləməsi üçün onların aktiv qalması tövsiyə olunur).

Məsəl ücun Chrome/Edge Brauzerinizin parametrlərində “Məxfilik” və ya “Təhlükəsizlik” bölməsini açın (bu ad brauzerdən asılı olaraq fərqli ola bilər).

Ve ya bu linki axtariş bölməsinə daxil edərək: edge://settings/privacy/cookies

![disable thirdparty cookie](https://cyberhub.az/wp-content/uploads/2025/11/disable_thirdparty_cookie.webp "WEB təhlükəsizliyi: Cookie-banner-lərin sirrini açırıq 2")

Əgər Web-brauzerin təhlükəsizlik parametrləri haqqında daha çox məlumat əldə etmək istəyirsinizsə, birinci postumla tanış ola bilərsiniz.

Ref: [https://cyberhub.az/chrome-tehlukesizliyi-cve-2025-5280/](https://cyberhub.az/chrome-tehlukesizliyi-cve-2025-5280/)