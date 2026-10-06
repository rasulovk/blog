---
title: "GRC və Red Team Əməkdaşlığı: Kiber Təhlükəsizlikdə Effektiv Risk Analizi"
date: 2026-10-06
tags:
  - GRC
  - Cybersecurity
  - Compliance
description: GRC (Governance, Risk, and Compliance) və Red Team yanaşmalarının kiber risk analizində necə birgə işlədiyini öyrənin. Hər iki metodologiyadan effektiv istifadə üçün praktiki tövsiyələr.
excerpt:
pubDate: 2026-10-06
category: Infosec
author:
  name: Kamil Rasulov
  role: Writer
featured: false
draft: false
---


Kiber təhlükəsizlik sahəsində iki fərqli yanaşma tez-tez müzakirə obyektinə çevrilir: **GRC (Governance, Risk, and Compliance)** — idarəetmə, risk və uyğunluq — və **Red Team** fəaliyyətləri, o cümlədən penetration testlər. Bir çox təşkilatda bu iki sahə bir-birinə qarşı deyil, bir-birini tamamlayan yanaşmalar kimi qəbul edilməlidir.

## GRC və Red Team: Rolların Müəyyənləşdirilməsi

### GRC-nin Rolu

GRC mütəxəssisləri adətən təşkilat daxilində **nəyin edilməli** olduğunu müəyyənləşdirirlər. Onlar:

- **Siyasətlər** hazırlayırlar (məsələn, "Admin hesabları üçün parol uzunluğu ən azı 15 simvol olmalıdır")
- **Çərçivələr** tətbiq edirlər (NIST, ISO 27001, CIS Benchmarks və s.)
- **Risk qiymətləndirməsi** aparırlar
- **Uyğunluq tələblərini** izləyirlər

Ed Capizzi'nin qeyd etdiyi kimi, "GRC insanları tez-tez deyir ki, bəzi əsas kiber gigiyena şeyləri edilməlidir — bu, sadəcə basic cyber hygiene deyil, həm də tam uyğunluq vəziyyətidir."

### Red Team-in Rolu

Red Team əməliyyatçıları isə **həqiqətən nəyin baş verdiyini** yoxlayırlar. Onlar:

- **Penetration testlər** həyata keçirirlər
- **Sistemlərdə zəiflikləri** aşkar edirlər
- **Hücum ssenarilərini** simulyasiya edirlər
- **Texniki nəzarətlərin effektivliyini** test edirlər

Derek Banks'in dediyi kimi: "Mən şeyləri sındırıram, qura bilirəm və yenidən sındıra bilirəm. Amma əsas məsələ odur ki, texniki nəzarətlər həqiqətən işləyirmi?"

## Niyə Yalnız Bir Yanaşma Kifayət Deyil

### "Checkbox" Yanaşmasının Təhlükələri

Çox vaxt təşkilatlar ya yalnız GRC-yə, ya da yalnız Red Team testlərinə etibar edirlər. Hər iki halda problemlər var:

**Yalnız GRC-yə etibar edən təşkilatlar:**
- Siyasətlər mövcud ola bilər, amma onlar reallıqda tətbiq edilməyə bilər
- "Just because you're compliant doesn't mean you're secure" — uyğunluq təmin etmir ki, təhlükəsizlik təmin edilir
- Siyasət var, amma texniki nəzarət yoxdur

**Yalnız Red Team-ə etibar edən təşkilatlar:**
- Zəifliklər aşkar edilir, amma onları aradan qaldırmaq üçün resurs və ya motivasiya yoxdur
- Texniki tapıntılar var, amma biznes konteksti və risk çərçivəsi yoxdur
- Maliyyələşdirmə üçün siyasət çərçivəsi yoxdur

Tom Smith-in vurğuladığı kimi: "Siz bir tərəfi digəri olmadan edə bilməzsiniz. Siyasət texniki nəzarət tətbiqi olmadan işləmir və texniki testlər nəticələri idarəetməyə çatdırmaq üçün siyasət çər Eyni sikkənin iki üzü"

## Access Control Nümunəsi: Praktiki Tətbiq

Vebinarda müzakirə edilən konkret nümunə **Access Control** (Girişə Nəzarət) idi.

### GRC Yanaşması

Ed Capizzi'nin açıqlamasına görə, əksər hallarda insanlar access control-ı ancaq parol siyasətləri ilə məhdudlaşdırırlar:

> "Təəssüf ki, bir çox hallarda access control-ın uyğunluq kimi başa düşülməsi ilk növbədə insanlar 'Siz kifayət qədər uzun və mürəkkəb parollara maliksinizmi?' sualına atlayırlar və orada dayanırlar."

Amma GRC yanaşması **tam lifecycle**-ı əhatə etməlidir:

1. **Ehtiyacın müəyyənləşdirilməsi:** Kimə nəyə ehtiyacı var?
2. **Provisioning prosesi:** Giriş necə təmin edilir?
3. **Qeydlərin aparılması:** Hər şey sənədləşdirilirmi?
4. **Dəyişikliklər:** İş dəyişdikdə giriş hüquqları yenilənirmi?
5. **Decommissioning:** İşçi ayrıldıqda giriş ləğv edilirmi?

### Red Team Yanaşması

Derek Banks isə texniki reallığı yoxlayır:

- MFA (Multi-Factor Authentication) həqiqətən hər yerdə tətbiq edilibmi?
- İstifadəçilər parol siyasətini dəyişə bilirmi?
- Admin hesabları üçün xüsusi nəzarətlər varmı?
- Keçmiş işçilərin hesabları bağlanıbmı?

Derek-in qeyd etdiyi əsas məsələ: "Siz MFA-nı xarici firewall-da tətbiq edə bilərsiniz, amma əgər qutuya baxmadınızsa, yaxşı şansınız yoxdur."

## Üç Kateqoriyada Birləşdirilmiş Yanaşma

Vebinarda GRC və Red Team-in üç əsas kateqoriyada bir araya gəldiyi vurğulanıb:

### 1. Məqsəd Birləşdiriciliyi

Hər iki yanaşmanın son məqsədi **eynidir**: təşkilatı qorumaq. Bu, çox vaxt unudulur. GRC deyir "bunu et", Red Team deyir "bunu etmisinizmi?" — amma hər ikisi eyni istiqamətə baxır.

### 2. Tamamlayıcı Mövqelər

GRC **proaktiv** yanaşır (nəyin edilməli olduğunu planlaşdırır), Red Team isə **reaktiv** yoxlamalarla bu planların reallığını təsdiqləyir.

### 3. Birgə Gücləndirmə

Derek-in dediyi kimi: "Əgər siz texniki insanlarla siyasət olmadan şəbəkənizdə təhlükəsizlik qiymətləndirmələri aparırsınızsa və idarəetmənin çəkə biləcəyi bir qol yoxdursa — GRC-nin etdiyi iş — demək olar ki, hər şeyi qaçırırsınız."

## Praktiki Tövsiyələr

### Təşkilatlar Üçün

1. **GRC və Red Team arasında körpü qurun:** GRC komandası Red Team hesabatlarını biznes risklərinə çevirməyi bacarmalıdır
2. **Silo mentality-dən uzaq durun:** "GRC checkbox üçündür, biz dərin texniki iş görürük" yanaşması zərərlidir
3. **Uyğunluq və təhlükəsizlik arasındakı fərqi anlayın:** "Compliant" olmaq "secure" olmaq demək deyil
4. **Hər iki perspektivi maliyyələşdirin:** Yalnız birinə investisiya kifayət deyil

### GRC Mütəxəssisləri Üçün

1. **Texniki detallara maraq göstərin:** Siyasətin arxasında nə baş verir?
2. **Red Team tapıntılarını öyrənin:** Zəifliklər niyə mövcuddur?
3. **Risk çərçivəsi ilə əlaqə qurun:** Texniki zəiflikləri biznes təsirinə çevirin

### Red Team Mütəxəssisləri Üçün

1. **GRC perspektivini anlayın:** Niye bu nəzarətlər var?
2. **Tapıntıları izah edin:** Texniki detalları qeyri-texniki audiensiyə çatdıra bilin
3. **"Anti-governance" düşüncədən uzaq durun:** Siyasətlər maneə deyil, rəhbərdir

## Nəticə

GRC və Red Team əslində **eyni sikkənin iki üzüdür**. GRC deyir "bunu etməlisən", Red Team deyir "bunu etmisinizmi və düzgün edemisinizmi?". Hər ikisi eyni məqsədə xidmət edir: təşkilatı kiber risklərdən qorumaq.

Tom Smith-in dediyi kimi: "Əsas odur ki, texniki nəzarətlər müstəqil şəkildə qurulur. Texniki enforcement olmalıdır, amma GRC olmadan bu enforcement-un arxasında maliyyə və dəstək yoxdur."

Uğurlu kiber təhlükəsizlik proqramı hər iki yanaşmanı bir araya gətirir. Yalnız bu halda real dünya riskləri effektiv şəkildə idarə edilə bilər.

---

## Mənbələr

- [Black Hills Information Security: GRC vs. Red Teaming: Better Together for Cyber Risk Analysis](https://www.youtube.com/watch?v=-RGDKIKzskk)
- NIST Cybersecurity Framework (CSF)
- ISO/IEC 27001:2022 — Information Security Management Systems
