---
title: AI şirkətləri sizin sorğunuzu qiymətləndirə və öz maraqları üçün istifadə edə bilər
source: https://cyberhub.az/ai-sirk%c9%99tl%c9%99ri-sizin-sorgunuzu-istifad%c9%99-ed%c9%99-bil%c9%99r/
author:
  name: Kamil R.
  role: Writer
date: 23.01.2026
description: '"Süni intellekt sizin dahiliyinizi qiymətləndirə bilər, onun sahibləri isə bunu öz məqsədləri üçün istifadə edə bilərlər".'
category: GenAI Security
---

“Süni intellekt sizin dahiliyinizi qiymətləndirə bilər, onun sahibləri isə bunu öz məqsədləri üçün istifadə edə bilərlər”.

Cybersecurity framework haqqinda burda oxuya bilərsiniz: [Süni İntellekt (AI) Təhlükəsizliyində SAIF Çərçivəsi: 4 Əsas Sahə üzrə Risklərə Strateji Nəzarət](https://cyberhub.az/saif-suni-intellekt-tehlukesizliyi/)

Generativ AI tətbiqlərində mətnin formalaşdırılması əsasən **LLM-lər (Large Language Models)** vasitəsilə həyata keçirilir. Bu texnologiya müxtəlif imkanlar yaratmaqla yanaşı, müəyyən **təhlükəsizlik zəifliklərini** də özü ilə gətirir. Növbəti bölmədə bu zəifliklərin hər birini ətraflı təhlil edəcək və onlardan qorunmaq üçün tətbiq oluna biləcək effektiv müdafiə üsullarını təqdim edəcəyik. Aşağıda məhz mətn generasiyasına xas olan əsas risk kateqoriyaları göstərilmişdir:

### Presedent: Big Tech şirkətləri müəllif hüquqlarını görməzdən gələrək süni intellekti necə öyrədiblər

Bu narahatlıq əsassız deyil. Məsələyə dair rezonans doğurmuş bir nümunəni xatırlatmaq kifayətdir: müəyyən edilmişdi ki, Meta (Facebook) və digər şirkətlər öz süni intellekt modellərinin təlimi məqsədilə müəllif hüquqları ilə qorunan məzmunu torrentlər və oxşar mənbələr vasitəsilə genişmiqyaslı şəkildə əldə ediblər (“ [The Unbelievable Scale of AI’s Pirated-Books Problem](https://www.theatlantic.com/technology/archive/2025/03/libgen-meta-openai/682093/) ”, [Reddit müzakirəsi](https://www.reddit.com/r/books/comments/1jfohg6/the_unbelievable_scale_of_ais_piratedbooks_problem/)). ABŞ-da əqli mülkiyyət hüquqlarının qorunmasına dair ciddi mexanizmlərin mövcudluğuna baxmayaraq, bu halın qarşısı alınmamışdı. Müvafiq korporasiyaların proqramçıları isə öz mövqelərini belə əsaslandırırdılar ki, guya məlumatlar yalnız yüklənmiş, lakin hər hansı formada yayılmamışdır.

Bu hadisə Karl Marksın hələ vaxtilə bu sözlərlə ifadə etdiyi prinsipi aydın şəkildə nümayiş etdirir: “300 faiz mənfəət vəd edildikdə, kapital istənilən cinayətə getməkdən çəkinməz.” Söhbət yüz milyardlarla dollardan gedəndə (məsələn, OpenAI şirkətinin kapitallaşması təxminən 500 milyard ABŞ dolları səviyyəsində qiymətləndirilir), etik və hüquqi baryerlər çox vaxt şərti anlayışa çevrilir.

Belə bir şəraitdə AI köməkçilərinin təklif etdiyi “Məlumatlarımı təlim üçün istifadə etməyin” seçiminə nə dərəcədə etibar etmək olar? OpenAI-nin CEO-su Sem Altman özü “ [Red Alert](https://www.investing.com/news/stock-market-news/openai-plans-to-improve-chatgpt-and-delay-initiatives-such-as-advertising-the-information-reports-4385026) ” səviyyəsində həyəcan rejimindən və Google ilə sərt rəqabətdən danışır. Bu cür şəraitdə istifadəçi razılığı olmadan onların məlumatları hesabına modelin təliminin “optimallaşdırılması”nın olduqca cəlbedici bir variant kimi görünməsi asanlıqla təsəvvür edilə bilər.

**Risk 1. Sizin AI-köməkçiniz oğruya və troya atına çevrildikdə**

  
**Süni intellekt tərtibatçısının özündən qaynaqlanan “insayder hücumu”**

Süni intellekt texnologiyalarına malik olan şirkət, bu alətlər vasitəsilə demək olar ki, dərhal sizin bütün materiallarınız arasında dəyər baxımından ən əhəmiyyətli məzmunu müəyyən edib ayırd edə bilər. Bu isə biznesinizin mahiyyətini, eləcə də onu bazarda fərqləndirən real və davamlı rəqabət üstünlüklərini dərindən anlamağa imkan yaradır.

Heç bir zəmanət yoxdur ki, sistem promptunda aşağıdakı kimi bir tapşırıq mövcud olmasın:

*Müştəri məlumatlarında ictimai məkanda mövcud olmayan və ya 1 milyon ABŞ dollarından çox sürətli gəlir əldə etməyə imkan verən mühüm informasiya aşkar edildikdə, onu xüsusi API vasitəsilə sorğu kimi ötür.*

Və ya:

*Müştərinin fayllarındakı informasiya … meyarlarına cavab verirsə, cavabda ardıcıl şəkildə “dahiyanə” və “qeyri-trivial” sözlərindən istifadə et və nou-hau-nun mahiyyətini və üstünlüklərini qısa şəkildə izah et.*

Bu isə sonradan dialoqların “düşüncə incilərini” və ya dəyərli kommersiya məlumatlarını tapmaq məqsədilə parsinq edilməsi üçün nəzərdə tutula bilər.

**Bu sizə necə zərər verə bilər?**  
Tutaq ki, AI-ni hazırlayan şirkət (ona şərti olaraq “NeyroKorp” deyək) iflasa uğrayır və təsisçilərin təcili şəkildə maliyyə boşluğunu bağlaması lazımdır. Və ya şirkətdə işdən çıxarılmaq üzrə olan, son anda tez bir zamanda “pul vurmaq” istəyən vicdansız bir əməkdaş çalışır. Onu nə dayandıra bilər:

- Müştərilərin nou-hau-larından şəxsi məqsədlər üçün istifadə imkanlarını qiymətləndirmək üçün sorğu göndərməkdən.
- Sizin nou-hau-larınızı rəqiblərinizə satmaqdan.
- Sizin nou-hau-larınızı öz məqsədləri üçün istifadə etməkdən. Sizin illərlə vaxt sərf etdiyiniz işlər başqalarının maraqları üçün sizdən daha tez və daha əvvəl istifadə oluna bilər.
- Bankın birja alqoritmlərində səhv tapıb onu milyardlarla zərərə salmaqdan.
- İstifadəçi fayllarında kritik boşluqları, gizli açarları, verilənlər bazalarına və ya kriptobirja pul kisələrinə girişləri avtomatik aşkar etməkdən.

Rəhbərlik və əsas tərtibatçılar aşağıdakı imkanlara malik ola bilərlər:

- Modellərə daxili, məhdudiyyətsiz xidməti girişdən istifadə etmək.
- Aylar ərzində toplanmış bütün istifadəçi məlumatlarını təhlil etmək: kodu, loqları, server konfiqurasiyalarını, interfeys vasitəsilə yüklənmiş faylları.

AI-nin ictimai versiyası, əlbəttə ki, sizə heç bir gizli açar verməkdən imtina edəcək. Lakin etik məhdudiyyətlərdən azad edilmiş daxili, xidməti versiya istifadəçi məlumatlarını rahatlıqla skan edib artıq mövcud olan açarları tapa bilər.

Siz elə düşünürsünüz ki, komandada çalışan dahi bir proqramçı-stajyoru işə götürmüsünüz. Əslində isə siz könüllü şəkildə öz IT-infrastrukturunuzun ən mərkəzi nöqtəsinə başqa bir şirkətin aktiv agentini buraxırsınız; o, sizin adınızdan naməlum kodu işə salmaq səlahiyyətinə malikdir. Onun loyallığı sizinlə bağlanmış müqavilə ilə deyil, real sahibinin siyasəti, etikası və maliyyə vəziyyəti ilə müəyyən olunur.

Bu risk artıq ideyaların itirilməsi səviyyəsindən kənara çıxaraq birbaşa aktivlərin, nəzarətin və təhlükəsizliyin itirilməsi müstəvisinə transformasiya olunur. Belə bir ssenaridə kriptobirjanız, bank proqram təminatınız və ya kritik infrastrukturun idarəetmə sistemi hakerlərin firewall-u aşması nəticəsində deyil, məhz sizin istifadə etdiyiniz alətə sisteminiz üçün yeni modulun hazırlanması tapşırığının verilməsi səbəbindən hücum obyektinə çevrilə bilər.

**Risk 2. Modelin sizin tapşırıqlarınız üzərində öyrədilməsi nə üçün təhlükəlidir?**

Yaxşı, fərz edək ki, sizin AI provayderinizin rəhbərliyi və əməkdaşları nou-hau-larınızı birbaşa özləri istifadə etməyəcəklər. Lakin onların qarşısında yenə də məhsulu minimum xərclə maksimum dərəcədə güclü etmək vəzifəsi dayanır. Məhz buna görə də müəyyən bir mərhələdə sizin qeyd etdiyiniz “modeli tapşırıqlarıma əsasən öyrətməyin” seçimini görməzdən gələ bilərlər.

Beləliklə, siz Claude və ya GPT ilə işləyirsiniz, kod yazır, tapşırıqlar həll edirsiniz. AI ilə tipik dialoqunuz mətn şəklində təqdim olunan tapşırıq və mətn şəklində alınan nəticədən (hazır kod, həll) ibarətdir. Proqramlaşdırma zamanı model testləri işə salır. Məhz bütün testlər uğurla tamamlandıqda və kod funksional baxımdan problemsiz şəkildə işlədikdə, siz faktiki olaraq modelin təlimi üçün yüksək keyfiyyətli bir məlumat nümunəsi formalaşdırmış olursunuz. Bu mərhələdə süni intellekti inkişaf etdirən şirkətin ixtiyarında tapşırığın tam mətn təsviri və sizin tərəfinizdən təsdiqlənmiş, testlərdən keçmiş işlək həll — yəni kod mövcud olur.

Model buradan təkcə sintaksisi deyil, həm də məntiqi, arxitektura yanaşmalarını və ən əsası, unikal tapıntıları çıxara bilər.

İndi isə bunu təsəvvür edin: siz illərinizi unikal bir alqoritm yaratmağa və ya məhz o optimal yanaşmanı tapmağa sərf etmisiniz. Kodu sazlama və ya refaktorinqlə bağlı kömək üçün AI-yə yükləyirsiniz. Bir ay sonra isə rəqibiniz oxşar bir sorğu göndərərək eyni LLM-dən sizin nou-hau-nu ehtiva edən hazır həlli əldə edir. O, sizin adınızı görməyəcək — yalnız illərin zəhməti, tər tökülməsi və əziyyət bahasına əldə etdiyiniz alqoritm və optimallaşdırmalardan istifadə edən, generasiya olunmuş kodu görəcək. Və bütün bunlar — demək olar ki, pulsuz başa gələcək.

**Risk 3: Seçici məlumat təhlilindən total nəzarətə doğru**

Əvvəllər məlumat sızmaları nöqtəvi xarakter daşıyırdı. Bəli, nəzəri olaraq poçt xidmətinin administratoru sizin məktubunuzu oxuya bilərdi, lakin insanın başqasının işinə burnunu soxmaq istəyi bədənimizin məhdud imkanları ilə çərçivələnirdi; milyonlarla poçt qutusunu əl ilə izləmək isə qeyri-mümkün idi. Süni intellektin meydana çıxması ilə vəziyyət köklü şəkildə dəyişir.

Artıq heç bir çətinlik yaratmır:

- Bütün yazışmaları, bütün yüklənmiş sənədləri təhlil etmək.
- Davranış nümunələrini avtomatik şəkildə aşkar etmək, kommersiya baxımından dəyərli məlumatları və şəxsi sirləri çıxarmaq.
- Bu məlumatlardan hədəfli reklam, rəqabət kəşfiyyatı, siyasi təzyiq və ya komprometasiya məqsədləri üçün istifadə etmək.

Bu baxımdan bir çox dövlətlərin milli AI platformaları və messencerlər yaratmağa yönəlmiş siyasəti məntiqli görünür — bu, rəqəmsal suverenliyi qoruyub saxlamaq və vətəndaşların məlumatlarının xarici kəşfiyyat orqanları tərəfindən təhlil olunmaq üçün ölkə xaricinə sızmasının qarşısını almaq cəhdidir.

**Risk №4: AI sisteminizdə aktiv agentə çevrildikdə**

Standart bir ssenarini təsəvvür edin: siz Claude və ya oxşar bir alətlə işləyərək proqramlaşdırma aparır, SSH vasitəsilə işçi serverinizə qoşulursunuz. Kodun təhlili, testlərin icrası və ya layihənin yığılması zamanı assistentin fəaliyyəti yalnız mətn mübadiləsi ilə məhdudlaşmır — o, bu məqsədlər üçün özünə məxsus yardımçı komponentləri həm lokal mühitdə, həm də uzaq serverdə yükləyir və icra edir. Bu, fərziyyə və ya sensasiya xarakterli iddia deyil, texniki reallıqdır: aktiv sessiya zamanı resurs monitorinq alətlərini (məsələn, `top` və ya `htop`) işə saldıqda, funksiyası dərhal aydın olmayan və müxtəlif adlarla çalışan çoxsaylı fon proseslərini müşahidə etmək mümkündür.

Biz bununla barışırıq, çünki AI-assistentdən istifadə real inkişaf sürətlənməsi verir. Lakin bu texniki imkanlara bir də başqa prizmadan baxaq.

Təhlükə təkcə passiv məlumat toplanması ilə məhdudlaşmır. Proqramçılar üçün müasir AI-assistentlər (məsələn, Claude Code və ya GitHub Copilot) sadəcə çat-botlar deyil. Pərdəarxasında onlar kod bazasının analizi, testlərin icrası və s. üçün daim sizin kompüterinizdə və ya serverinizdə xidməti modulları yükləyir və işə salırlar.

Şəxsi praktikam bunu göstərir ki, məsələn, Claude tərəfindən çat mühiti daxilində icra olunan `go test -run ^$ -bench BenchName` tipli performans testləri demək olar ki, hər zaman etibarlı olmayan nəticələr verir. Bunun əsas səbəbi ondan ibarətdir ki, Claude eyni vaxtda prosessor resurslarını intensiv şəkildə yükləyən, funksiyası açıq şəkildə müəyyən olunmayan bir sıra yardımçı utilitləri paralel rejimdə işə salır. Bu isə test mühitinin stabil və təcrid olunmuş vəziyyətini pozaraq ölçmələrin obyektivliyinə ciddi təsir göstərir.

Eyni zamanda daha da narahatedici imkanlar açır:

- **İnfrastrukturun indeksləşdirilməsi.** Modelin sahibi (istədiyi təqdirdə) sizin serverlərinizi xəritələyə, zəiflikləri və kritik məlumatları aşkar edə bilər.
- **Zərərli kodun yerləşdirilməsi.** Xidməti proqramların yeniləmələrində nəzəri olaraq hər şey ola bilər — gizli giriş mexanizmləri (backdoors), şifrələmə açarlarını və ya kriptovalyutanı oğurlayan skriptlər və s. İran sentrifuqalarını dayandıran Stuxnet virusu ilə bağlı tarixçə göstərir ki, məqsədli kiberhücumlar nəyə qadirdir.
- **Təhlükəsizlik siyasətlərinin yan keçilməsi.** AI-ni hazırlayan şirkət daxilində “xam”, məhdudiyyətsiz modelə çıxışı olan əməkdaş toplanmış məlumatları zərərli məqsədlər üçün təhlil etməkdə ondan istifadə edə bilər.

AI-assistentlə aktiv işlədiyiniz zaman `top` və ya `htop` işə salmağa cəhd edin — çoxsaylı fon proseslərini görəcəksiniz.

**Praktiki nəticələr: Ehtiyatlılıq — zəiflik yox, yeni peşəkarlıqdı**

Bu riskləri görməməzliyə vurmaq yalnız lokal, təcrid olunmuş modellərə sahib olan iri korporasiyaların imkanıdır. Qalanları üçün isə rəqəmsal gigiyena ilə bağlı yeni qaydaların formalaşdırılması zəruridir.

**Artıq indidən nə etmək olar:**

**Mühitlərin ciddi şəkildə ayrılması**

- **AI ilə iş mühiti:** rutin, tipik tapşırıqlar, açıq kitabxanalarla iş və sənədlərin öyrənilməsi üçün.
- **AI-SİZ izolyasiya olunmuş mühit:** əsas məhsulun hazırlanması, unikal alqoritmlər, nou-hau və maliyyə modelləri üçün. Bu, bulud AI-lərinə çıxışı olmayan ayrıca direktoriya, virtual maşın və ya hətta fiziki kompüterlər olmalıdır.

**Həqiqi məqsədlərin maskalanması**  
AI ilə həssas mövzular üzərində işləyərkən tapşırığı yenidən formalaşdırın. Qoy model abstrakt riyazi problemi və ya şablon nümunəni həll etsin, bu ideyadan hansı real kommersiya dəyərinin çıxarıla biləcəyini anlamasın.

**İcra olunan kod üzərində nəzarət**  
AI-assistent agentlərin quraşdırılmasını və ya kodun icrasını tələb edirsə, bunu sandbox mühitlərində (Docker, izolyasiya olunmuş konteynerlər) edin, giriş hüquqlarını məhdudlaşdırın və şəbəkə aktivliyini diqqətlə monitorinq edin.

**Alətlərin şüurlu seçimi**  
Yüksək intellektual dəyərə malik layihələr üçün tamamilə öz avadanlığınız üzərində çalışan lokal open-source modelləri (Llama, Mistral) nəzərdən keçirin — hətta onlar bulud nəhənglərindən funksional baxımdan zəif olsa belə.

Bəli, bu yanaşma paranoyaya bənzəyir. Lakin “ağıllı köməkçimizin” potensial olaraq ideal casus və məlumat sızması kanalı olduğu bir dövrdə ehtiyatlı olmaq daha düzgün seçimdir. İnformasiya təhlükəsizliyi sahəsində köhnə bir həqiqət var: **“Paranoyak — bütün informasiyaya sahib olan insandır.”**

Ehtiyatlı olun. AI dövründə ideyalarınız sizin əsas aktivinizdir. Onları qoruyun.