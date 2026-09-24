---
title: "Gemma 3 27B RTX 3090: Step-by-Step Local AI Guide"
source: https://cyberhub.az/gemma-3-27b-rtx-3090-guide/
author:
  name: Mahir XXX
  role: Writer
date: 2025-05-29
description: Discover how to install the Gemma 3 27B RTX 3090 AI model on Ubuntu for optimal performance with llama.cpp CUDA and huggingface GGUF.
category: Opensource
---

Son zamanlar **açıq mənbə süni intellekt modelləri** arasında yüksək performansı ilə seçilən **Gemma 3 27B RTX 3090** modelini şəxsi kompüterimdə test etdim. Bu yazıda, **Ubuntu sistemində RTX 3090 GPU** istifadə edərək bu modeli **llama.cpp** vasitəsilə necə quraşdırıb işə salacağınızı addım-addım izah edəcəyəm.

> ✅ **Bonus:** Bu qurulumla siz **25-40 token/saniyə** sürəti əldə edə bilərsiniz – lokal şəkildə **GPT-4 səviyyəsində performans** deməkdir!

---

## Gemma 3 27B RTX 3090 Nədir?

**Gemma 3 27B**, Google DeepMind tərəfindən təqdim olunan, 27 milyard parametrə malik açıq mənbə dil modelidir. **GGUF (quantized)** formatında yayımlandığı üçün daha az resursla işləyir və RTX 3090 kimi oyun/seçmə GPU-lar üzərində yüksək sürətlə cavablar generasiya edə bilir.

## Sistem Tələbləri

| Komponent | Tövsiyə |
| --- | --- |
| Əməliyyat Sistemi | Ubuntu 20.04 və ya 22.04 |
| GPU | NVIDIA RTX 3090 (və ya 24 GB+ VRAM) |
| CUDA Toolkit | 11.8 və ya 12.x |
| Disk Sahəsi | Minimum 30 GB boş sahə |

## 1\. Əsas Paketlərin Quraşdırılması

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git build-essential cmake python3 python3-pip -y
```

## 2\. CUDA Dəstəyini Yoxlayın

```bash
nvidia-smi
nvcc --version
```

Əgər `nvcc` tapılmırsa, bu əmri icra edin:

```bash
sudo apt install nvidia-cuda-toolkit -y
```

## 3\. llama.cpp Deposunun Yüklənməsi və CUDA ilə Yığılması

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make LLAMA_CUDA=1 LLAMA_CUBLAS=1 -j$(nproc)
```

Bu addım `llama.cpp` -nin GPU dəstəyi ilə yığılmasını təmin edir.

## 4\. Gemma 3 27B Modelinin Yüklənməsi (GGUF formatında)

```bash
mkdir -p ~/llama_models/gemma-27b
cd ~/llama_models/gemma-27b
wget https://huggingface.co/google/gemma/resolve/main/gemma-27b.Q4_K_M.gguf -O gemma-27b.Q4_K_M.gguf
```

## 5\. Modeli İşə Salmaq

```bash
cd ~/llama.cpp
./main -m ~/llama_models/gemma-27b/gemma-27b.Q4_K_M.gguf -t 16 -ngl 35 -n 100 -p "Sual: Azərbaycanın paytaxtı haradır?\nCavab:"
```

### Parametrlərin İzahı:

- `-m`: Model faylının yolu
- `-t`: CPU thread sayı (RTX 3090 üçün 16 və ya 20)
- `-ngl`: GPU-da neçə layer-in istifadə olunacağı (35-40 arası tövsiyə olunur)
- `-n`: Generasiya ediləcək token sayı
- `-p`: Prompt (verilən sual)

## 6\. Nəticə və Performans

Bu konfiqurasiya ilə **Gemma 3 27B RTX 3090** modeli lokal olaraq **25-40 token/saniyə** sürətlə cavablar yaradır. Bu nəticə həm performans baxımından çox qənaətbəxşdir, həm də GPT-4 səviyyəsinə çox yaxınlaşır.

## Niyə Gemma 3 27B RTX 3090 Quraşdırmasını Seçməlisiniz?

- **Açıq mənbə və pulsuzdur**
- **GPT-4 səviyyəsində cavablar yaradır**
- **Lokal serverdə tam nəzarət imkanı verir**
- **Veri məxfiliyi maksimum səviyyədə qorunur**

## Əlavə Resurslar

- [AI Texnologiyaları Bölməsi](https://cyberhub.az/category/self-hosted/) – daxili keçid
- [llama.cpp GitHub Repository](https://github.com/ggerganov/llama.cpp)