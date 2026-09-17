---
title: "Açıq Mənbə ilə İT İnfrastrukturun Qurulması: 9 Addım"
source: https://cyberhub.az/aciq-menbe-it-infrastruktur-qurulmasi/
author:
  name: Mahir XXX
  role: Writer
pubDate: 2025.06.20
description: Proxmox, OPNsense, Docker kimi alətlərlə self-hosted İT infrastrukturu necə qurulacağını addım-addım öyrənin. Təhlükəsizlik və performans təmin edin.
category: Opensource
date: 2026-09-17
---

### 1. İnfrastruktur Planlaması – Uğurlu Başlanğıcın Əsas Şərti

İT sisteminin dayanıqlı və çevik olması üçün ilk addım planlamadır. Aşağıdakı sualların cavablandırılması vacibdir:

- **İstifadəçi sayı:** (10, 100 və ya 1000?)
- **Tətbiq növləri:** CRM, ERP, LMS, veb servislər?
- **Əsas tələblər:** Performans, təhlükəsizlik, genişlənəbilənlik.
- **Resurslar:** Büdcə, hardware (Proxmox serveri və ya bulud VM-ləri).

Bu analizlər daha sonra şəbəkə topologiyası, VM ayrımı və xidmət rollarının düzgün bölüşdürülməsi üçün baza rolunu oynayır.

---

### 2\. Server Platforması – Açıq Mənbəli Virtualizasiya Gücü

#### Proxmox VE

- Açıq mənbəli hypervisor, VMware ESXi üçün alternativdir.
- Quraşdırma sonrası Web UI üzərindən VM və LXC konteynerlərin idarəsi.
- VLAN dəstəyi ilə şəbəkə ayrımı.

#### Alternativlər:

- **XCP-ng + Xen Orchestra** – yüksək performanslı hypervisor mühiti.
- **TrueNAS SCALE** – VM + Storage hibrid sistemi.
- **Harvester** – Kubernetes əsaslı genişlənən virtualizasiya.

---

### 3\. Şəbəkə Arxitekturası – Virtual Router və Təhlükəsizlik Divarınız

#### OPNsense və ya pfSense

- Router, firewall, VPN və VLAN idarəçiliyi üçün güclü sistemlərdir.
- LAN/WAN interfeysləri, VLAN-lar (VLAN10 – Veb, VLAN20 – Verilənlər bazası).
- OpenVPN və WireGuard ilə uzaqdan təhlükəsiz bağlantı.

#### Alternativlər:

- **VyOS** – CLI əsaslı tam router sistemi.
- **MikroTik CHR** – MikroTik funksionallığını virtual mühitdə əldə edin.

---

### 4\. Server Rolları – Hər Xidmət üçün Öz VM və ya Konteyner

| Server Növü | İstifadə Olunan Açıq Mənbə |
| --- | --- |
| Domain Controller | Samba AD və ya Zentyal |
| Web Server | Nginx və ya Apache |
| Application Server | Docker, Node.js,.NET Core |
| Database Server | PostgreSQL, MariaDB, MySQL |
| File Server | Nextcloud və ya Samba |

**Docker Compose** ilə mikroxidmət strukturu quraraq avtomatlaşdırma imkanı yarada bilərsiniz.

---

### 5\. Storage Həlləri – Fayl Paylaşımı və Backup

#### Nextcloud – Dropbox alternativi.

#### MinIO – Amazon S3 uyğun obyekt saxlama.

#### TrueNAS – ZFS ilə RAID qorunmalı NAS sistemi.

#### Backup Həlləri:

- **BorgBackup**, **Restic** – versiyalı ehtiyat nüsxələr.
- **Duplicati**, **UrBackup** – istifadəçi dostu interfeys.

---

### 6\. Monitorinq və Resursların İzlənməsi

#### Prometheus + Grafana – Metrik və dashboard əsaslı monitorinq.

#### Netdata – Real-time performans vizualizasiyası.

#### Zabbix / Icinga – Server və şəbəkə resurslarına nəzarət.

Backup üçün **Restic + Cron**, **Velero** (Kubernetes), **Duplicati** istifadə oluna bilər.

---

### 7\. Təhlükəsizlik və İcazə İdarəçiliyi

- **Vault (HashiCorp)** – Şifrələrin və secret-lərin idarəçiliyi.
- **Fail2Ban** – SSH və veb xidmətlər üçün brute-force qoruması.
- **WireGuard/OpenVPN** – Əlavə təhlükəsizlik üçün tunel bağlantısı.
- **Firewall** – OPNsense və ya iptables ilə segmentasiya və ACL-lər.
- **SELinux/AppArmor** – Əlavə OS-level qoruma qatları.

---

### 8\. DNS, Domain və E-poçt Sistemləri

#### DNS:

- **Pi-hole + Unbound** – Reklam bloklama və daxili DNS idarəsi.
- **CoreDNS** – Kubernetes istifadəçiləri üçün.

#### E-poçt:

- **Mailcow** – postfix + dovecot + rspamd inteqrasiya edilmiş.
- **Alternativlər:** Mailu, Modoboa

#### SSL & Domain:

- **Cloudflare DNS** və ya BIND ilə domain idarəçiliyi.
- **Caddy** və ya **Traefik** ilə avtomatik SSL (Let’s Encrypt dəstəyi).

---

### 9\. Avtomatlaşdırma və DevOps Axını

#### İnfrastruktur kodu ilə idarə et:

- **Ansible** – sistemlərin avtomatlaşdırılmış qurulması.
- **Terraform** – VM deployment avtomatlaşdırması.
- **Packer** – VM imiclərinin hazırlanması.

#### CI/CD Axını:

- **Drone CI**, **GitLab CI/CD**, **Jenkins**
- **Gitea / Forgejo** – self-hosted Git server
- **Harbor** – Docker Registry idarəçiliyi

---

## Tez-tez verilən suallar (FAQ)

**1\. Proxmox ilə neçə VM eyni vaxtda işləyə bilər?**  
– Bu, server resurslarından asılıdır. 32 GB RAM-li bir serverdə 4-6 yüngül VM rahat işləyə bilər.

**2\. Docker ilə virtualizasiya eynidirmi?**  
– Docker konteyner əsaslıdır və OS səviyyəsində paylaşılan resurslardan istifadə edir. VM-lərdən fərqli olaraq daha yüngüldür.

**3\. Mailcow nə qədər təhlükəsizdir?**  
– TLS, SPF, DKIM və Rspamd ilə təhlükəsizlik standartlarına cavab verir. Firewall ilə birgə istifadə tövsiyə olunur.

**4\. Backup üçün ən sadə açıq mənbə həll hansıdır?**  
– Restic və Duplicati həm CLI, həm də GUI üçün uyğundur. Cron ilə inteqrasiya edilə bilər.