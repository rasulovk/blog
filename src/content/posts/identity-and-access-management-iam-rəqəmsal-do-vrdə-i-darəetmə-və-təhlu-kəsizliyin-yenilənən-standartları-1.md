---
title: "Identity and Access Management (IAM): Rəqəmsal Dövrdə İdarəetmə və Təhlükəsizliyin Yenilənən Standartları #1"
source: https://cyberhub.az/identity-and-access-management-iam/
author:
  name: Guljannat R.
  role: Writer
date: 2026-12-05
description: Rəqəmsal transformasiyanın tempi artdıqca, təşkilatların identiklik və giriş idarəetməsinə (Identity and Access Management – IAM) yanaşması köklü şəkildə yenilənmək məcburiyyətində qalır. Dünənə qədər tək-tək sistemlər üçün istifadəçi hesabı açmaq “idarəetmə” kimi qəbul olunurdusa
category: Infosec
---

Rəqəmsal transformasiyanın tempi artdıqca, təşkilatların identiklik və giriş idarəetməsinə (Identity and Access Management – IAM) yanaşması köklü şəkildə yenilənmək məcburiyyətində qalır. Dünənə qədər tək-tək sistemlər üçün istifadəçi hesabı açmaq “idarəetmə” kimi qəbul olunurdusa, bu gün çoxsaylı bulud xidmətləri, mobil platformalar, inteqrasiya olunmuş korporativ ekosistemlər və sərt audit tələbləri fonunda IAM artıq sadə texniki funksiya deyil — **biznesin davamlılığı və təhlükəsizliyini müəyyən edən strateji dayaqlardan birinə çevrilib.**

## 🔎 İdentiklik (identity) idarəetməsinin mahiyyəti: Niyə bu mövzu bu qədər kritikdir?

Rəqəmsal sistemlərdə həyata keçirilən bütün əməliyyatların bünövrəsində birinci və ən vacib mərhələ dayanır: istifadəçinin **identikliyinin** dəqiq müəyyən olunması. Əgər sistem daxil olan şəxsin kimliyini tam dəqiqliklə təsdiq edə bilmirsə və həmin identikliyə bağlı səlahiyyətlər dəqiq şəkildə tənzimlənmirsə, tətbiq edilən heç bir təhlükəsizlik mexanizmi etibarlı hesab oluna bilməz. Məhz buna görə **identiklik və giriş idarəetməsi (IAM)** müasir təhlükəsizlik arxitekturasının strateji komponentinə çevrilib.

IAM-in əsasında iki fundamental sual dayanır:

- **“Bu istifadəçinin identikliyi necə təsdiqlənir?”** – autentifikasiya.  
	Autentifikasiya mərhələsi parol mexanizmlərindən tutmuş çoxfaktorlu identifikasiya (MFA), biometrik texnologiyalar, token əsaslı giriş və passkey həllərinə qədər geniş spektrdə üsullarla icra edilə bilər.
- **“Bu identiklik hansı resurslara çıxış əldə edə bilər?”** – avtorizasiya.  
	Avtorizasiya qərarları təşkilatın siyasətlərinə, istifadəçinin roluna, vəzifəsinə, təhlükəsizlik tələblərinə və kontekstual faktorlara əsaslanır.

Səthi baxışda sadə görünən bu iki prinsip əslində geniş infrastrukturun idarə edilməsi üçün çox mürəkkəb mexanizmlər yaradır. Korporativ mühitlərdə:

- minlərlə istifadəçi və cihaz,
- müxtəlif bulud və hibrid platformalar,
- onlarla daxili biznes tətbiqi,
- yüzlərlə rol və səlahiyyət kombinasiyası  
	eyni vaxtda mövcuddur və daim dəyişir.

Bu cür kompleks ekosistemdə təhlükəsizliyi təmin etmək üçün IAM aşağıdakı imkanları təqdim etməlidir:

🔗identiklik məlumatının mərkəzləşdirilmiş idarə olunması,

📜siyasət əsaslı idarəetmə (policy-based governance),

⚙️hesabların avtomatlaşdırılmış yaradılması və deaktiv edilməsi (provisioning/deprovisioning),

🔁identiklik həyat dövrü ərzində rolların dinamik yenilənməsi,

🧠risk əsaslı və kontekstual avtorizasiya,

📊audit izlərinin tam şəkildə saxlanması və hesabatlılıq.

Bu mexanizmlər olmadan identiklik idarəetməsi nəzarətsiz səlahiyyət artımına, uyğunsuzluq problemlərinə, daxili və xarici təhlükəsizlik risklərinə, həmçinin çox yüksək əməliyyat xərcinə səbəb olur.

IAM isə bu çətinliyi həll edərək identikliklərin dəqiq, təhlükəsiz və çevik şəkildə idarə olunmasını təmin edən əsas strateji çərçivəyə çevrilir. Məhz buna görə identiklik idarəetməsi təkcə texniki proses deyil — rəqəmsal təhlükəsizliyin və əməliyyat davamlılığının mərkəzi elementidir.

## 📚Direktoriyalar: İdentiklik Arxitekturasının Əsas Komponenti

IAM ekosisteminin əsasını uzun illərdir **identiklik məlumatlarının saxlandığı direktoriyalar** təşkil edir. Bu sistemlər istifadəçilərə dair atributların saxlanıldığı, yüksək performanslı və strukturlaşdırılmış məlumat anbarları kimi fəaliyyət göstərir. Ənənəvi direktoriyalar aşağıdakı üstünlükləri ilə seçilir:

- böyük həcmli oxu sorğularını emal etməkdə yüksək performans;
- xüsusilə LDAP daxil olmaqla, standartlaşdırılmış protokollar sayəsində geniş uyğunluq;
- çoxsaylı tətbiqlər tərəfindən paylaşılan stabil və mərkəzi identiklik mənbəyi;
- parolların və əsas atributların vahid mərkəzdən idarə olunması.

Bu yanaşma onilliklər boyu effektivliyini sübut edib və hələ də təşkilatların identiklik infrastrukturlarında mühüm rol oynamaqda davam edir. Lakin nəzərə almaq lazımdır ki, direktoriyalar təbiətcə **statik sistemlərdir**: onlar yalnız məlumatı saxlamaq və təqdim etmək funksiyalarını yerinə yetirir, lakin identiklik siyasətlərini şərh etmir, hesabların həyat dövrünü idarə etmir və avtorizasiya ilə bağlı qərarlar qəbul etmir. Məhz bu səbəbdən onlar müasir rəqəmsal arxitekturalarda təkbaşına həll kimi yox, daha geniş IAM çərçivəsinin yalnız bir komponenti kimi çıxış edirlər.

## 🔐Access Management: Giriş İdarəetməsinin İnkişaf Məntiqi

Direktoriyaların formalaşdırdığı identiklik bazası ilə yanaşı, paralel olaraq **Access Management** sistemləri də inkişaf edib və giriş proseslərinin necə həyata keçirildiyini idarə edən əsas təbəqəyə çevrilib. Bu platformalar istifadəçi identifikasiyasının texniki icrasını təmin edir və aşağıdakı funksionallıqları bir araya gətirir:

- vahid giriş (SSO) mexanizmləri;
- çoxfaktorlu autentifikasiya (MFA);
- sessiya və token idarəetməsi;
- federativ identiklik protokolları (SAML, OAuth, OIDC);
- müxtəlif tətbiqlər üçün mərkəzləşdirilmiş giriş nəzarəti.

Access Management-in əsas rolu istifadəçinin kimliyini təsdiqləmək və konkret resursa giriş hüququnun olub-olmadığını müəyyənləşdirməkdir. Bununla belə, bu sistemlər **identity məlumatını yaratmır, dəyişdirmir və formalaşdırmır** — onlar yalnız artıq mövcud olan məlumat əsasında qərar verirlər.

Bu isə kritik sualları gündəmə gətirir:

❓ identity məlumatı haradan yaranır?  
❓ səlahiyyətlər necə formalaşır?  
❓ rollar hansı qayda ilə hesablanır?  
❓ əməkdaşın statusu dəyişəndə girişlər necə yenilənir?

Bu sualların cavabı isə Access Management-in hüdudlarından kənarda, daha geniş identiklik ekosistemində – identity məlumatının yaradılması, yenilənməsi və idarə olunmasına cavabdeh sistemlərdə formalaşır.

## 🧠Identity Management və IGA: İdentiklik ekosisteminin “beyni”

IAM arxitekturasının ən mürəkkəb və strateji komponenti **Identity Management** səviyyəsidir. Bu təbəqə artıq yalnız məlumat saxlayan struktur olmaqdan çıxaraq, identity ilə bağlı bütün əməliyyat axınlarını koordinasiya edən idarəetmə mexanizminə çevrilir. Bu çərçivədə:

👤yeni istifadəçi təşkilata daxil olduqda müxtəlif sistemlərdə hesabların avtomatik yaradılması,

🔄vəzifə və şöbə dəyişiklikləri zamanı rolların və əlaqəli səlahiyyətlərin yenilənməsi,

🚫əməkdaşın təşkilatdan ayrılması halında hesabların və giriş hüquqlarının vaxtında və tam şəkildə deaktiv edilməsi,

⚙️rol modellərinin, qrupların və siyasətlərin avtomatlaşdırılmış şəkildə tətbiqi,

🔗HR, ERP və digər identity mənbələri ilə inteqrasiya əsasında məlumatın ardıcıl və dəqiq sinxronizasiyası

kimi proseslər vahid idarəetmə mexanizminin bir hissəsinə çevrilir.

Bu səviyyənin üzərində isə **Identity Governance (IG)** funksionallığı formalaşır. IG daha geniş nəzarət və uyğunluq çərçivəsini təmin edərək:

- rəhbərlərə dövri səlahiyyət təsdiqləmə (access certification) imkanları təqdim edir,
- Segregation of Duties (SoD) kimi kritik siyasətlərin tətbiqini və pozuntuların aşkarlanmasını təşkil edir,
- yüksək risk daşıyan rolların və səlahiyyətlərin analitik təhlilini aparır,
- hər bir identity və əməliyyat üçün tam izlənəbilirlik yaradır ki, bu da audit proseslərini xeyli asanlaşdırır.

Bu funksionallıq toplusu direktoriyalar və Access Management kimi digər komponentlərin təkbaşına həll edə bilməyəcəyi mürəkkəb idarəetmə problemlərini aradan qaldırır. Identity Management və IGA birlikdə identity ekosisteminin **beyin mərkəzi** kimi çıxış edərək, siyasətlərin ardıcıl tətbiqini, təhlükəsizliyin davamlılığını və təşkilati nəzarətin tamlığını təmin edir.

## 🏗 IAM layihələrinin reallığı: Niyə ilkin mərhələdə düzgün arxitektura seçimi kritik əhəmiyyət daşıyır?

Bir çox təşkilatda identity idarəetməsi illər ərzində plansız şəkildə, müxtəlif sistemlərin təsadüfi formada əlavə olunması ilə formalaşır. Əvvəlcə HR sistemindən əldə olunan məlumat cədvəlləri, daha sonra Active Directory, ardınca SaaS platformaları, VPN həlləri, CRM alətləri və digər xidmətlər əlavə olunur. Nəticədə təsadüfi inteqrasiyalarla formalaşmış bu struktur zaman keçdikcə **idarəolunmayan və riskli bir identiklik ekosisteminə** çevrilir.

Belə mühitlərdə tipik problemlər aşağıdakı kimi üzə çıxır:

- **Giriş hüquqlarının mənşəyi və məntiqi aydın olmur** – hansı istifadəçiyə, nə vaxt, hansı səbəbdən səlahiyyət verildiyi izah edilə bilmir.
- **İşdən ayrılan əməkdaşlar üçün hesabların uzun müddət aktiv qalması** ciddi təhlükəsizlik boşluğu yaradır.
- **Fərqli sistemlərdə istifadəçi məlumatlarının uzlaşmaması** həm əməliyyat xətalarına, həm də tənzimləyici tələblərin pozulmasına səbəb olur.
- **Audit yoxlamaları zamanı uyğunsuzluqlar və proses boşluqları** təşkilat üçün əlavə risk və xərc yaradır.

IAM layihələrinin əsas məqsədi məhz bu dağınıq mühiti vahid, idarəolunan və siyasət əsaslı arxitekturaya çevirməkdir. Bununla belə, bir çox təşkilat IAM transformasiyasına ya çox gec başlayır, ya da seçdikləri platforma və yanaşma real ehtiyaclarla uyğunlaşmır. İnfrastruktur daha da böyüdükcə, həm **əməliyyat xərcləri**, həm də **təhlükəsizlik riskləri** kəskin şəkildə artır.

Doğru arxitektura seçimi isə bu problemlərin qarşısını vaxtında almağa, identity ekosistemini sabit, məsuliyyətli və auditə hazır vəziyyətə gətirməyə imkan yaradır. Buna görə IAM layihələrində başlanğıc mərhələ sadəcə texniki qərar deyil, təşkilatın uzunmüddətli təhlükəsizlik strategiyasını formalaşdıran **strateji seçim** hesab olunur.

**🎯Nəticə: IAM yalnız texniki təşəbbüs deyil – korporativ sabitliyin əsas şərtidir**

Rəqəmsal təhlükəsizlik artıq təkcə antivirus və firewall kimi klassik müdafiə vasitələri ilə məhdudlaşmır. Müasir təşkilatların ən vacib aktivlərindən biri olan informasiya məhz effektiv identiklik və giriş idarəetməsi vasitəsilə qorunur. IAM strategiyasının olmadığı mühitlərdə risklər sürətlə çoxalır:

⚠️daxili sui-istifadə ehtimalı yüksəlir;

⚠️tənzimləyici tələblərin pozulması baş verə bilər;

⚠️əməliyyat xərcləri nəzarətdən çıxmağa başlayır;

⚠️audit proseslərində ciddi uyğunsuzluqlar aşkarlanır;

⚠️sistemlər arasında məlumatın üst-üstə düşməməsi idarəetməni çətinləşdirir.

IAM-ə düzgün başlanğıc isə identity ekosisteminin:

🔒 təhlükəsiz,  
⚙️ avtomatlaşdırılmış,  
📊 auditə hazır,  
🏛 uzunmüddətli sabit

olmasını təmin edir.

Rəqəmsal ekosistemin davamlı və idarəolunan qalmasını istəyən təşkilatlar üçün diqqət yalnız giriş mexanizmlərində deyil — **identity idarəetməsinin ümumi çərçivəsində, siyasətlərdə və arxitekturasında olmalıdır.**

Digər məqalələrim:

[DFİR](https://cyberhub.az/computer-forensics/)

[ISO 27001 Audit](https://cyberhub.az/iso-27001-auditinin-pesekar-icrasi/)