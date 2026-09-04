---
title: Analyze PDF file
description:
excerpt:
pubDate: 31.08.2026
category: Engineering
author:
  name: Your Name
  role: Writer
featured: false
draft: false
date: 2026-09-04
---



## Executive Summary

Each quarter, Cofense Intelligence has analyzed malware and credential phishing emails that reached users in environments protected by SEGs. This quarter we saw increases in credential phishing, Supermailer campaigns, NetSupport Manager RAT campaigns, and compromised domains to deliver malware via embedded URLs. In Q2 2023, Cofense Intelligence saw a slowdown in malicious email activity as prominent malware operators reduced or paused their campaigns. Despite the overall lower volume during this quarter, significant new phishing threats emerged.

### The key highlights for Q2 2023 include:

- Credential phishing indicators of compromise increased 10% in Q2 and increased 85% from the same quarter last year.
- A massive credential phishing campaign abusing the legitimate mailing software, Supermailer rose an impressive 87% in Q2.
- The use of compromised domains to deliver malware via embedded URLs increased by 25% in Q2.
- NetSupport Manager RAT re-appeared and increased by 82% in Q2.
- Malware delivery mechanism, JSDropper impressively rose 240%.
- PDF documents represented the most common malicious choice for threat actors representing 42.4% of all total malicious file attachments.
- More than half (51%) of malware-delivery URLs embedded in malicious emails abused compromised legitimate domains.

For a more detailed breakdown of this report, join Cofense’s Cyber Threat Intelligence Analysts on **Tuesday, August 1st at 11am ET**, as they walk through the key phishing threats, tactics and trends observed. Live attendees will have the opportunity to ask questions about the latest findings and observations.


## Delivery Mechanism Rundown

Two malware families served as trendsetters in delivery mechanism usage in Q2, JSDropper and PowerShell. JSDropper rose significantly by 240% in Q2. The threat actors behind QakBot followed a behavioral pattern from previous quarters, regularly cycling through different delivery mechanisms. In April they favored PDF attachments leading to WSF files, but in May they switched to JSDropper attachments. The other malware family was NetSupport Manager RAT, which was delivered using a chain of JSDroppers to PowerShell scripts. Together the two families made JSDroppers the most common delivery mechanism of the quarter, with malicious PowerShell scripts and PDF droppers in the top five as well.

Cofense Intelligence saw many exploits of CVE-2017-11882 in Q1 but then dropped in Q2. Agent Tesla represents much of the difference, as it had used CVE-2017-11882 heavily in Q1. Note, the overall volume of Agent Tesla emails decreased 47% in Q2, bringing CVE-2017-11882 usage down with it.

In Q1, Emotet put malicious OLE Package files and WSF Downloaders at the top of the list, but since the botnet was silent during Q2, those two delivery mechanisms saw relatively little use.

  

Cofense Intelligence saw many exploits of CVE-2017-11882 the 1st half of this year. This over a decade old Microsoft (OLE) vulnerability used to deliver these top malware families, formbook came in #1 at 33% and Agent Tesla a quick second place.

  

The Cybersecurity and Infrastructure Security Agency (CISA) and the Federal Bureau of Investigation (FBI) names CVE-2017-11882 as one of the top vulnerability’s and most frequently used by state-sponsored cyber actors from China, Iran, North Kore




More ref: 
https://github.com/filipi86/MalwareAnalysis-in-PDF
ref : https://sansorg.egnyte.com/dl/YrwOdFIm1I

Malware samples https://github.com/jstrosch/malware-samples