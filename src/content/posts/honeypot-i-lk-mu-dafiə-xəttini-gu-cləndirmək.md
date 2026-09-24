---
title: "Honeypot: İlk Müdafiə Xəttini Gücləndirmək"
source: https://cyberhub.az/honeypot/
author:
  name: Kamil R.
  role: Writer
date: 2025-08-11
description: Chrome təhlükəsizliyi ilə bağlı CVE-2025-5280 zəifliyi aşkarlanıb. Bu yazıda hücumun necə baş verdiyini və təhlükəsizlik ayarları ilə qorunma yollarını öyrənin.
category: Passive defence
---

**“Ən güclü müdafiə sistemi təkcə divarlarla deyil, düşmənin niyyətlərini və taktikasını öyrənməklə qurulur.”** — **Mikko Hypponen**,

### Honeypot

Müasir kibertəhlükə mühiti getdikcə daha mürəkkəb və hiyləgər xarakter alır. Ənənəvi təhlükəsizlik sistemləri isə bir çox hallarda hücumları yalnız təsirləri baş verdikdən sonra aşkar edə bilir. Bu kontekstdə **honeypotlar** — yəni tələ sistemləri — əvəzləyici deyil, **strateji müşahidə və erkən xəbərdarlıq vasitəsi** kimi ön plana çıxır. Onlar səssiz şəkildə hücumçuları cəlb edir, onların davranışlarını qeydə alır və real sistemlərə zərər vurulmamışdan əvvəl təhlükə barədə siqnal verir.

Bundan əlavə, honeypotlar vasitəsilə:

- **Şübhəli IP-lərin avtomatik olaraq siyahıya (blacklist) əlavə edilməsi,**
- **Hücum modelinin CTI (Cyber Threat Intelligence) kontekstində analiz olunması,**
- **SIEM, SOAR və ya mesajlaşma kanalları (məsələn, Telegram, Slack) üzərindən real vaxt bildirişlərin göndərilməsi**

kimi imkanlar yaradılır. Yəni, honeypot yalnız passiv müşahidəçi deyil, həm də təhlükənin aktiv şəkildə **aşkarlanması və məlumat bazalarına inteqrasiya olunması üçün açar komponent** rolunu oynayır.

### Honeypot nədir?

**Honeypot** – yəni “bal tələsi” – hücumçuları cəlb etmək üçün qurulan saxta sistem və ya xidmətdir. Bu sistemlər real istifadəçilər üçün nəzərdə tutulmur; məqsəd **hücumçının diqqətini yayındırmaq**, onu izləmək və hücum metodları barədə məlumat toplamaqdır.

### Honeypot Texnologiyasını Anlamaq və İstifadə Etmək: Lokal Bulud Mühitində Təcrübə

Kiberhücumların necə işlədiyini və honeypotların təhlükəsizlikdə necə faydalı olduğunu daha yaxşı anlamaq üçün, mən yerli bulud provayderlərindən birində öz honeypotumu qurdum. Məqsədim Azərbaycan üçün kiberhücumların davranışlarını izləmək və araşdırmaq idi. Bu təcrübə mənə çox maraqlı məlumatlar təqdim etdi: hücumların hansı ölkələrdən gəldiyi, ən çox istifadə olunan şifrə və istifadəçi adları kimi önəmli statistikalar ortaya çıxdı.

Link: [https://honeypot.cyberhub.az/](https://honeypot.cyberhub.az/public-dashboards/f6c2775144024f378ad073a544b6430b)

![grafan_dashboard_honeypot_life](https://cyberhub.az/wp-content/uploads/2025/08/grafan_dashboard_honeypot_life.webp "Honeypot: İlk Müdafiə Xəttini Gücləndirmək 1")

**Qeyd:** İctimaiyyət üçün təqdim etdiyim dashboard-da təhlükəsizlik səbəbi ilə zaman aralığı kiçik və sabit olaraq məhdudlaşdırılıb. Bu, məlumatların qorunması və potensial risklərin azaldılması məqsədi daşıyır.

> *Əgər eyni sistemi qurmaq istəyirsinizsə, mənim nümunəmi götürüb təcrübə edə bilərsiniz. Lakin nəzərə alın ki, Grafana-nı ictimaiyyətə açmaq ciddi risklər yarada bilər. Mən bütün xidmətləri yalnız localhost üzərində qurmuşam və bunu sizə də tövsiyə edirəm. Təhlükəsizliyi təmin etmək üçün başqa üsullardan da istifadə edə bilərsiniz. Yalnız OpenCanary xidmətini ictimai şəbəkə interfeysinə bağlamaq məqbuldur.*

## OpenCanary-nin Docker vasitəsilə Qurulması

[**OpenCanary**](https://github.com/thinkst/opencanary) – SSH, HTTP, SMB, FTP və digər ümumi xidmətləri simulyasiya edən açıq mənbəli honeypotdur. Hər hansı şübhəli fəaliyyət zamanı log fayllarına qeyd aparır.

**Docker** vasitəsilə işlətmək ən **təhlükəsiz və sadə** yoldur. Niyə?

- **İzolyasiya:** Honeypot host sistemdən tam ayrılır.
- **Sadəlik:** Sistemdə əlavə asılılıqlara ehtiyac olmur.
- **Daşınma Asanlığı:** Hər bir mühitdə eyni şəkildə işləyir.
- **Təhlükəsizlik:** Resurs və şəbəkə məhdudiyyətləri asanlıqla tətbiq olunur.

Quraşdırma Addımları (Docker ilə)  
1\. OpenCanary Docker reposunu klonlayın:

```
git clone https://github.com/thinkst/opencanary
cd opencanary/docker
```

2\. Grafana konteyneri uğurla işə düşdükdən sonra, ona daxil olaraq mövcud dashboard-lara baxa bilərsiniz. İndi isə dashboard-u Grafana-ya yükləyə bilərik. Aşağıda hazır bir dashboard nümunəsi təqdim etmişəm. Yükləmə prosesindən sonra, hər bir vizuallaşdırmanın mənbəyinin InfluxDB olduğundan əmin olun.

Qeyd edək ki, burada yalnız “logger” üçün konfiqurasiya hissəsini təqdim edirəm. Tam konfiqurasiya faylını OpenCanary-nin GitHub səhifəsində tapa bilərsiniz.

```
...

    "logger": {
        "class": "PyLogger",
        "kwargs": {
            "formatters": {
                "plain": {
                    "format": "%(message)s"
                },
                "syslog_rfc": {
                    "format": "opencanaryd[%(process)-5s:%(thread)d]: %(name)s %(levelname)-5s %(message)s"
                }
            },
            "handlers": {
                "console": {
                    "class": "logging.StreamHandler",
                    "stream": "ext://sys.stdout"
                },
                "file": {
                    "class": "logging.FileHandler",
                    "formatter":"syslog_rfc",
                    "filename": "/var/tmp/opencanary.log"
                },
                "json-tcp": {
                    "class": "opencanary.logger.SocketJSONHandler",
                    "host": "127.0.0.1",
                    "port": 7070
                }
            }
        }
    },

...
```

3\. Docker image-i qurun:

`docker build -t opencanary .`

4\. Konteyneri portlarla birlikdə işə salın:

```
docker run -d --name honeypot \
-p 22:22 -p 80:80 \
-v $(pwd)/opencanary.conf:/root/.opencanary.conf \
opencanary
```

İstədiyiniz xidmətlərə uyğun olaraq əlavə portları da yönləndirə bilərsiniz (məsələn: 445, 21).

### Təhlükəsizlik üçün MAC ünvanını dəyişin

Bir çox hücumçular şəbəkədəki unikal MAC ünvanı vasitəsilə sistemləri izləyə və tanıya bilər. Honeypot-un məqsədi real sistemə bənzəmək olduğundan, **orijinal MAC ünvanının dəyişdirilməsi** onun aşkar olunma ehtimalını azaldır. Bu dəyişiklik xüsusilə Raspberry Pi və ya fiziki host üzərində OpenCanary qurularkən vacibdir.

1\. `macchanger` alətini quraşdırın:

```
sudo apt-get install macchanger
```

Soruşduqda “MAC ünvanını avtomatik dəyişdirək?” sualına “Xeyr” cavabını verin.

2\. Yeni skript yaradın:

```
sudo nano /etc/network/if-up.d/macchange
```

Aşağıdakı kodu daxil edin (NEWMACADDRESS hissəsini öz MAC ünvanınızla əvəz edin):

```
#!/bin/sh
if [ "$IFACE" = lo ]; then  
      exit 0  
fi  
sudo /usr/bin/macchanger -m NEWMACADDRESS wlan0
```

MAC ünvanı kolonlarla (:) ayrılmış formatda olmalıdır (məs: `00:11:22:33:44:55`). **`eth0`** əvəzinə istifadə etdiyiniz interfeysin adını yazmağı unutmayın (məs: `eth0`, `ens33` və s. — bunu `ifconfig` və ya `ip a` ilə yoxlaya bilərsiniz).

3\. Skripti icra edilə bilən edin:

```
sudo chmod 755 /etc/network/if-up.d/macchange
```

4\. Servis faylı yaradın:

```
sudo nano /lib/systemd/system/macchange.service
```

İçinə aşağıdakıları yazın:

```
[Unit]
Description=MAC Address change  
After=multi-user.target  
After=syslog.target  
After=network.target  

[Service]
Restart=always  
ExecStart=/etc/network/if-up.d/macchange  

[Install]
WantedBy=multi-user.target
```

**Diqqət**: WantedBy=mutli-user.target sətrində yazı səhvdirsə, multi-user.target olaraq düzəldin.

5\. İcazələri düzgün şəkildə konfiqurasiya edin və xidməti aktiv edin:

```
sudo chmod 644 /lib/systemd/system/macchange.service
sudo systemctl daemon-reload
sudo systemctl enable macchange.service
```

6\. Sistemi yenidən başladın:

```
sudo reboot
```

Yenidən başladıqdan sonra MAC ünvanı avtomatik olaraq təyin etdiyiniz ünvanla dəyişəcəkdir.

### OpenCanary Məlumatlarının Vizuallaşdırılması

Honeypot-dan maksimum fayda almaq üçün yalnız log-ları toplamaq kifayət deyil — onları analiz etmək və aydın şəkildə vizuallaşdırmaq lazımdır. Bunun üçün Python və Grafana mükəmməl tandem yaradır. Konsept belə olacaq:

- OpenCanary → log məlumatı yaradır
- Python skript (TCP Server) → log-ları qəbul edir, emal edir və **InfluxDB** -də saxlayır
- Grafana → verilənləri real vaxtda vizuallaşdırır
1. TCP Serverin Qurulması

OpenCanary-dən gələn JSON formatlı məlumatların qəbul edilməsi üçün bizə bir TCP server lazımdır. JSON ilə işləmək rahat olsun deyə, server tərəfdə Python istifadə edəcəyik.

İlk olaraq layihə üçün lazım olan kitabxanaları requirements.txt faylında qeyd edirik:

```
nano requirements.txt
```

Faylın içərisinə aşağıdakı sətirləri əlavə edin:

```
requests
influxdb-client
geohash2
python-geohash
```

Bu Python kitabxanaları vasitəsilə istifadə ediləcək:

- **requests** — HTTP sorğularının göndərilməsi üçün,
- **influxdb-client** — InfluxDB-yə məlumat yazmaq məqsədilə,
- **geohash2** və **python-geohash** — IP ünvanlarından coğrafi koordinatların geohash formatında emalı üçün.

Python script ucun yeni fayl yaradin:

```
nano main.py
```
```
import json
import geohash
import requests
import socket
from influxdb import InfluxDBClient
import config  # Import config.py

# Initialize InfluxDB Client using values from config.py
influx_client = InfluxDBClient(
    host=config.INFLUX_HOST,
    port=config.INFLUX_PORT,
    username=config.INFLUX_USER,
    password=config.INFLUX_PASSWORD,
    database=config.INFLUX_DB
)

# TCP Server Configuration
TCP_IP = "127.0.0.1"
TCP_PORT = 7070

# Start TCP Server
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((TCP_IP, TCP_PORT))
server.listen(5)

print(f"Listening for connections on {TCP_IP}:{TCP_PORT}...")

while True:
    conn, addr = server.accept()
    print(f"Connection from {addr}")

    try:
        data = conn.recv(1024).decode("utf-8")
        if not data:
            continue

        # Parse received JSON data
        message = json.loads(data)
        ip = message.get("ip")
        username = message.get("username")
        port = message.get("port")

        # Get Geolocation using API
        geo_api_url = f"{config.GEO_API_URL}/{ip}?access_key={config.GEO_API_KEY}"
        response = requests.get(geo_api_url)
        geo_data = response.json()

        if "latitude" in geo_data and "longitude" in geo_data:
            latitude = geo_data["latitude"]
            longitude = geo_data["longitude"]
            geo_hash = geohash.encode(latitude, longitude)

            # Write Data to InfluxDB
            json_body = [
                {
                    "measurement": "failed_ssh_attempts",
                    "tags": {
                        "geohash": geo_hash,
                        "username": username,
                        "ip": ip,
                        "port": port
                    },
                    "fields": {
                        "value": 1
                    }
                }
            ]

            influx_client.write_points(json_body)
            print(f"Logged SSH attempt: {username}, {ip}, {port}, {geo_hash}")

        else:
            print("Geolocation lookup failed.")

    except Exception as e:
        print(f"Error: {e}")

    finally:
        conn.close()
```

Məsələn, bizim nümunə kodumuzda **təhlükəsizlik məqsədilə** TCP serveri yalnız **localhost** (`127.0.0.1`) ünvanında və **7070** portunda dinləyəcək şəkildə quracağıq. Bu yanaşma, serverin yalnız eyni host üzərindən gələn bağlantıları qəbul etməsini təmin edir və xarici şəbəkələrdən icazəsiz giriş riskini azaldır.

**2\. Coğrafi xəritə (Geomap) vizuallaşdırması** üçün Grafana-da IP-lərin yerləşmə məlumatlarını əldə etməliyik. Bunun üçün [ipstack](http://api.ipstack.com/) xidmətində qeydiyyatdan keçərək **pulsuz API token** əldə edirik. Bu token vasitəsilə IP ünvanlarının ölkə, şəhər və koordinat məlumatlarını çəkərək, məlumatları xəritə üzərində dinamik şəkildə göstərə bilirik.

```
nano config.py
```
```
# Configuration file for the project

# InfluxDB Configuration
INFLUX_HOST = "HOST_IP"  # Change if your InfluxDB is running elsewhere
INFLUX_PORT = 8086  # Default InfluxDB HTTP API port
INFLUX_USER = "admin"  # InfluxDB username
INFLUX_PASSWORD = "PASS_"  # InfluxDB password
INFLUX_DB = "geo_logs"  # InfluxDB database name

# API Configuration
GEO_API_URL = "http://api.ipstack.com"
GEO_API_KEY = "API_"
```

### InfluxDB və Grafana-nın Docker üzərindən qurulması

Məlumatların saxlanılması və vizuallaşdırılması üçün ən rahat və təhlükəsiz üsullardan biri — konteyner mühitində işlətməkdir. Docker vasitəsilə həm InfluxDB (məlumat bazası), həm də Grafana (vizuallaşdırma platforması) tez bir zamanda quraşdırıla bilər. Bu yanaşma:
- Quraşdırma prosesini sadələşdirir
- Əlavə asılılıqları minimuma endirir
- Təhlükəsizliyi artırır, çünki hər bir xidmət ayrıca konteynerdə izolyasiya olunur

Məlumatların konteyner silindikdə itirilməməsi üçün “persistent storage” istifadə etmək vacibdir. Bu məqsədlə iki ayrıca qovluq yaratmaq lazımdır:

- `./influxdb-config:/var/lib/influxdb` — konfiqurasiya fayllarının saxlanması üçün
- `./influxdb_data:/var/lib/influxdb2` — verilənlər bazasının saxlanması üçün
- `./conf:/etc/grafana` — Grafana konfiqurasiya fayllarının saxlanması üçün

Bu yanaşma nəticəsində InfluxDB konteyneri yenidən işə salındıqda bütün məlumatlar qorunur və itmir.

Bu mərhələdə docker-compose.yml faylı vasitəsilə InfluxDB və Grafana konteynerlərini işə salırıq və lazımi portları (məsələn, InfluxDB üçün 8086, Grafana üçün 3000) açırıq. və konfiqurasiya parametrləri qorunub saxlanılır.

*Əgər Docker haqqında daha çox oxumaq istəyirsinizsə, təcrübəli həmkarımın bloq yazısını nəzərdən keçirə bilərsiniz:*  
[https://cyberhub.az/dockerde-tehlukesizlik-giris/](https://cyberhub.az/dockerde-tehlukesizlik-giris/)

```
# Get token after docker up : influx config ls --json
services:
  influxdb:
    image: influxdb:1.8
    container_name: influxdb
    network_mode: service:grafana
    volumes:
      - ./influxdb-config:/var/lib/influxdb  # Persist config
      - ./influxdb_data:/var/lib/influxdb2  # Persist database
    environment:
      # Once every 24 hours InfluxDB will report usage data to usage.influxdata.com. Change this option to true to
      # disable reporting.
      - INFLUXDB_REPORTING_DISABLED=true
      - INFLUXDB_DB=influx
      - INFLUXDB_ADMIN_USER=admin
      - INFLUXDB_ADMIN_PASSWORD=admin
      # The type of shard index to use for new shards. The default is an in-memory index that is recreated at startup.
      # A value of "tsi1" will use a disk based index that supports higher cardinality datasets.
      - INFLUXDB_DATA_INDEX_VERSION=tsi1

  grafana:
    container_name: grafana_honeypot
    image: grafana/grafana:9.5.21
    volumes:
      - ./conf/:/var/lib/grafana/
    ports:
      - "127.0.0.1:3000:3000"
      - "127.0.0.1:8086:8086"
    restart: always
```

3\. Docker Compose ilə konteynerləri işə salmaq üçün ilk addım “docker compose up” komandasını işlətməkdir. Bu əmrlə Docker, docker-compose.yml faylında müəyyən edilmiş bütün konteynerləri yükləyir və işə salır. Beləliklə, kompleks mühitləri sadə və səmərəli şəkildə idarə etmək mümkündür.

```
docker compose up -d
```

4\. İlk növbədə, InfluxDB konteynerinə daxil olaraq yeni bir verilənlər bazası yaradırıq. Məsələn, `geo_logs` adlı verilənlər bazasını yaratmaq üçün müvafiq əmrləri icra edirik. Verilənlər bazasının yaradılmasını tamamladıqdan sonra konteynerdən çıxışı təmin edirik.

```
docker exec -it influxdb /bin/bash
CREATE DATABASE geo_logs;
quit
```

### İndi Syslog Mesajlarını Qəbul Etmək Üçün Python Kodunu İşə Sala Bilərik

Artıq konteynerlər işə düşdüyünə görə, syslog mesajlarını qəbul etmək üçün Python kodunu işlətməyə başlaya bilərik. Bu kod sayəsində syslog məlumatlarını real vaxtda əldə edib emal etmək mümkün olacaq.

```
python -m venv ./py-env
pip install -r requirements.txt
source py-env/bin/activate
python main.py
```

### Grafana Uğurla İşə Düşdükdən Sonra Dashboard-a Giriş İmkanı Əldə Edirsiniz

Grafana konteyneri uğurla işə düşdükdən sonra ona daxil olaraq mövcud dashboard-ları nəzərdən keçirə bilərsiniz. Sonrakı addımda isə dashboard-u Grafana-ya yükləməkdir. Aşağıda hazır dashboard nümunəsini təqdim etmişəm. Yükləmə prosesindən sonra, hər bir vizuallaşdırmanın mənbəyinin **InfluxDB** olduğunu təsdiqləyin.

![grafan_dashboard_honeypotwebp](https://cyberhub.az/wp-content/uploads/2025/08/grafan_dashboard_honeypotwebp-1.webp "Honeypot: İlk Müdafiə Xəttini Gücləndirmək 2")

```
{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": {
          "type": "grafana",
          "uid": "-- Grafana --"
        },
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 1,
  "links": [],
  "liveNow": false,
  "panels": [
    {
      "datasource": {
        "type": "influxdb",
        "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 20,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "id": 1,
      "options": {
        "basemap": {
          "config": {},
          "name": "Layer 0",
          "type": "default"
        },
        "controls": {
          "mouseWheelZoom": true,
          "showAttribution": true,
          "showDebug": false,
          "showMeasure": false,
          "showScale": false,
          "showZoom": true
        },
        "layers": [
          {
            "config": {
              "showLegend": true,
              "style": {
                "color": {
                  "fixed": "semi-dark-red"
                },
                "opacity": 0.4,
                "rotation": {
                  "fixed": 0,
                  "max": 360,
                  "min": -360,
                  "mode": "mod"
                },
                "size": {
                  "fixed": 5,
                  "max": 15,
                  "min": 2
                },
                "symbol": {
                  "fixed": "img/icons/marker/circle.svg",
                  "mode": "fixed"
                },
                "textConfig": {
                  "fontSize": 12,
                  "offsetX": 0,
                  "offsetY": 0,
                  "textAlign": "center",
                  "textBaseline": "middle"
                }
              }
            },
            "location": {
              "mode": "auto"
            },
            "name": "Country",
            "tooltip": true,
            "type": "markers"
          }
        ],
        "tooltip": {
          "mode": "details"
        },
        "view": {
          "allLayers": true,
          "id": "zero",
          "lat": 0,
          "lon": 0,
          "zoom": 1
        }
      },
      "pluginVersion": "9.5.21",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
          },
          "groupBy": [
            {
              "params": [
                "geohash::tag"
              ],
              "type": "tag"
            }
          ],
          "measurement": "failed_ssh_attempts",
          "orderByTime": "ASC",
          "policy": "autogen",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "value"
                ],
                "type": "field"
              },
              {
                "params": [
                  "metric"
                ],
                "type": "alias"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "GeoSSH",
      "type": "geomap"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {
            "align": "auto",
            "cellOptions": {
              "type": "auto"
            },
            "inspect": false
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 12,
        "w": 12,
        "x": 12,
        "y": 0
      },
      "id": 2,
      "options": {
        "cellHeight": "sm",
        "footer": {
          "countRows": false,
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true
      },
      "pluginVersion": "9.5.21",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
          },
          "groupBy": [
            {
              "params": [
                "ip::tag"
              ],
              "type": "tag"
            },
            {
              "params": [
                "port::tag"
              ],
              "type": "tag"
            },
            {
              "params": [
                "username::tag"
              ],
              "type": "tag"
            }
          ],
          "measurement": "failed_ssh_attempts",
          "orderByTime": "ASC",
          "policy": "autogen",
          "refId": "A",
          "resultFormat": "logs",
          "select": [
            [
              {
                "params": [
                  "value"
                ],
                "type": "field"
              },
              {
                "params": [
                  "metric"
                ],
                "type": "alias"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "SSH Brute Force details",
      "type": "table"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {
            "fillOpacity": 69,
            "gradientMode": "opacity",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineWidth": 1
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 12
      },
      "id": 3,
      "options": {
        "bucketOffset": 0,
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        }
      },
      "pluginVersion": "9.5.21",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "fb1d9f88-e372-40f1-a86c-dba9d1c201dd"
          },
          "groupBy": [
            {
              "params": [
                "value::field"
              ],
              "type": "tag"
            }
          ],
          "measurement": "failed_ssh_attempts",
          "orderByTime": "ASC",
          "policy": "autogen",
          "refId": "A",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "value"
                ],
                "type": "field"
              },
              {
                "params": [
                  "metric"
                ],
                "type": "alias"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "SSH Entries",
      "transparent": true,
      "type": "histogram"
    }
  ],
  "refresh": "",
  "schemaVersion": 38,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "GeoSSH",
  "uid": "a3f82742-9c5f-4392-bc78-ce44bf2287cd",
  "version": 9,
  "weekStart": ""
}
```

### Son mərhələ

Bütün komponentlər tam işlək vəziyyətə gətirildikdən sonra, sadəcə oturub mənzərənin dadını çıxara bilərsiniz 🙂