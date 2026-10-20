---
title: E-poçt Təhlükəsizliyinin Sirri Başlıq Analizi ilə Fişinq və Spam-a Qarşı Mübarizə
description:
excerpt:
date: 2026-10-20
category: Infosec
author:
  name: Kamil R.
  role: Writer
featured: false
draft: false
---

2024-cü ildə dünya üzrə gündəlik 347 milyarddan çox e-poçt göndərilir — və onların təxminən 45%-i spam və ya zərərli məzmun daşıyır. E-poçt hələ də kiberhücumların əsas vektorlarından biridir. Bu bələdçidə e-poçt başlıqlarını təhlil edərək özünüzü və   təşkilatınızı necə qoruyacağınızı öyrənəcəksiniz. 

##### SPF, DKIM, DMARC nədir?

**SPF** (Sender Policy Framework) — domenin bütün e-poçt göndərdiyi serverləri sadalayan bir üsuldur. Bunu, hansı işçinin təşkilatda işlədiyini təsdiq etməyə kömək edən ictimai işçi kataloqu kimi düşünün.

SPF record adətən belə görünür: `v=spf1 ip4:123.123.123.123 ~all`

SPF "yumşaq"(soft) və "sərt"(hard) uğursuzluqlar arasında fərq qoyur. Başlıqda `~all` yazmaq qeyri-qanuni göndərici ilə qarşılaşdıqda yumşaq uğursuzluq anlamına gəlir; `-all` isə qəbul edən serverə sərt uğursuzluq etməyi bildirir.

Sərt uğursuzluq ssenarisində e-poçt tamamilə rədd edilir. Yumşaq uğursuzluqlar e-poçtun alıcının spam qovluğuna çatdırılmasına icazə verə bilər. İndi DMARC geniş şəkildə mövcud olduğundan, adətən `~all` (yumşaq uğursuzluq) istifadəsi tövsiyə olunur. Bu, saxta müsbət nəticələri qarşısını alır, DMARC-a daha çox nəzarət verir və sonrakı doğrulama mərhələlərində debugging-ə kömək edir.

**DKIM** (DomainKeys Identified Mail) — domen sahiblərinə öz domenindən göndərilən e-poçtları avtomatik olaraq "imzalamağa" imkan verir, eləcə də çekdəki imza kimidir. **DKIM** "imzası" — e-poçtun domendən gəldiyini riyazi olaraq təsdiq edən rəqəmsal imzadır.

**DMARC** (Domain-based Message Authentication Reporting and Conformance) — qəbul edən e-poçt serverinə **SPF** və **DKIM** yoxlandıqdan sonra nə etməli olduğunu bildirir. Domenin **DMARC** siyasəti müxtəlif yollarla təyin edilə bilər — **SPF** və ya **DKIM** (və ya hər ikisi) uğursuz olan e-poçtları karantinə salmağı, rədd etməyi və ya çatdırılmasına icazə verməyi əmr edə bilər.

DMARC DNS record belə görünür: `v=DMARC1; p=none; rua=mailto:user@example.com`

**SPF** və **DKIM**-dən fərqli olaraq, **DMARC** domen sahiblərinə e-poçt serveri öz domenindən gəldiyini iddia edən mesaj aldıqda baş verdikdə nə baş verəcəyini göstərməyə imkan verir. Üç dəstəkli əməliyyat var:

- **none** — server mesajı çatdırmağa davam edə bilər
- **quarantine** — mesajı spam/junk qovluğuna göndərin
- **reject** — mesajı rədd edin və geri qaytarın

DMARC həmçinin hesabat mexanizmi təmin edir. Qəbul edən poçt serverlərinin öz domeninizdən gəldiyini iddia edən e-poçt aldıqda çağıracağı server endpointi göstərə bilərsiniz. Bu, domeninizdən göndərilən serverlər haqqında kəsişən internet baxışı verir.

##### SCL və BCL balları haqqında bilməli olduğumuz digər vacib hissə?

E-poçt axını qaydalarından istifadə edərək mesajlarda spam etibarlılıq səviyyəsini (**SCL**) təyin edin. SCL-ə bənzər şəkildə, kütləvi şikayət səviyyəsi (**BCL**) pis kütləvi e-poçtları (Gray mail olaraq da tanınır) müəyyən edir. Daha yüksək BCL göstəricisi kütləvi poçtun şikayət yaratması ehtimalının daha yüksək olduğunu göstərir (və buna görə də spam olması daha ehtimal edilir).

![](/images/obsidian/e-poc-t-t%C9%99hlu-k%C9%99sizliyinin-sirri-bas-l%C4%B1q-analizi-il%C9%99-fis-inq-v%C9%99-spam-a-qars-%C4%B1-mu-bariz%C9%99/Pasted%20image%2020261020085517.png)

##### E-poçtu Necə Təhlil Etməli:
Əvvəlcə e-poçtun haradan gəldiyini başa düşmək üçün bəzi vacib başlıqları nəzərdən keçirək. E-poçt başlıqlarını düzgün başa düşmək üçün onları aşağıdan yuxarıya oxumaq idealdır.

- **X-priority**: X-priority e-poçt spesifikasyasında e-poçtun prioritetini göstərmək üçün istifadə olunan isteğe bağlı parametrdir. Dəyərlər 1 (Ən yüksək), 2 (Yüksək), 3 (Normal), 4 (Aşağı) və ya 5 (Ən aşağı) ola bilər. Əgər sahə buraxılarsa, standart olaraq 3-dür. Əksər e-poçt proqramları onu aşağı və ya yüksək təyin etmədikcə doldurmur. 1 və ya 2olarsa, müştəri tərəfindən proqramlar gələn mesajı vurğulayacaq (!).

- **Content-Type**: Bu başlıq e-poçtdakı məzmun növünü göstərir. Əvvəlki e-poçt düz mətndir.

- **Reply-To**: Bu başlıq alıcı e-poçta cavab verəndə kiminə göndəriləcəyini göstərir.

- **Message-Id**: Message Id mesajı müəyyən etmək üçün istifadə edilə bilən unikal identifikatordur.

- **From**: Bu başlıq e-poçtun haradan göndərildiyini göstərmək üçün istifadə olunur. Qeyd edin ki, saxta e-poçtlar adətən tanış mənbədən gəlmiş kimi görünməsi üçün bu başlığı dəyişdirir.

- **Received**: Bu başlıq alıcı təfərrüatlarını təmsil edir. E-poçt bir neçə serverdən keçdiyi üçün bu başlığın çoxlu girişi ola bilər.

- **Received-SPF**: Bu başlıq Sender Policy Framework (**SPF**) nəticələrini təmsil edir, göndərənin icazəli göndərəni olub-olmadığını bildirir.

- **Delivered-To**: Bu başlıq e-poçtun çatdırıldığı təyinat e-poçt idini təmsil edir.

İndiyə qədər müzakirə edilən başlıqlara əlavə olaraq, aşağıda göstərildiyi kimi üç əlavə başlıq var.

- **ARC-Seal**
- **ARC-Message-Signature**
- **ARC-Authentication-Results**

ARC-XXXX başlıqları e-poçt autentifikasiya nəticələrini qoruyur və mesajı son təyinatına çatdırmaq üçün ötürən e-poçt vasitəçilərinin identikliyini təsdiqləyir.

- **ARC Authentication Results**: Bu başlıq SPF, DKIM və DMARC kimi e-poçt autentifikasiya nəticələrini ehtiva edir

- **ARC-Message-Signature**: Bu, DKIM-ə bənzər bir imzadır və mesaj başlıq məlumatlarının anlıq görüntüsünü götürür. Buna to, from, subject və body daxildir

- **ARC-Seal**: Bu başlıq ARC-Message Signature və ARC Authentication Results başlıq məlumatlarını ehtiva edən bir imza ehtiva edir.

##### E-poçt Məzmunu Təhlili: göndərən, mövzu, e-poçt mətni, daxil edilmiş URL/Əlavələr

E-poçtun nə haqqında olduğunu başa düşmək üçün mövzunu yoxlayın. Göndərən domenini Virus Total, Whois DomainTools, Urlscan.io, Browserling və Palo Alto Url Filtering-də yoxlayın. Şəxsi e-poçt ID-nizi sızıb-sızmadığını və ya təhlükəsiz olub-olmadığını yoxlamaq üçün Have I been Pwned-də test edə bilərsiniz. Buraya professional/korporativ e-poçt ID-si daxil etməyin — Have I been Pwned (ictimai repo olduğu üçün). Inspect element -> Network istifadəsi də yönləndirilmiş URL fəaliyyətini və Base/orijinal URL-in real niyyətini yoxlamaq üçün vacibdir.

Yoxlanılacaq sahələr: Subject, Sender, Sender Domain, Recipient, Recipient Domain, Network Message ID, Latest email delivery, Original email delivery.

Sonra e-poçt mətni/e-poçt məzmununun tonunu yoxlayın. E-poçtda hər hansı link (URL) və ya Əlavə varsa, URL/Əlavəni klikləmədən (onunla qarşılıqlı əlaqə qurmayın) çıxarın — bunun əvəzinə kopyalayın [Sağ klik -> Copy Hyperlink / Copy] və URL/Faylı Windows sandbox / Sandbox Mühitində və ya Əlavəni sandbox mühitində (misal — Windows sandbox) test edin.
