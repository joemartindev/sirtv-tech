========================================
  Sir TV — سير تيفي | sirtv.tech (ملخصات + أخبار)
========================================

موقع تلقائي: ملخصات يوتيوب + أخبار RSS + قمع تحميل التطبيق.
يعمل بنفس طريقة sirtv.io (Next.js على Vercel).

## النشر (نفس خطوات sirtv.io):
1) أنشئ مستودع GitHub جديد: sirtv-tech
2) ارفع هذا المشروع (GitHub Desktop → Publish، أو رفع الملفات)
3) Vercel → Add New → Import sirtv-tech → Deploy
4) أضف الدومين sirtv.tech في Vercel + سجل A في Dynadot (216.198.79.1)

## مفتاح يوتيوب:
مضمّن في lib/youtube.js. الأفضل لاحقاً وضعه كمتغير بيئة YT_API_KEY في Vercel.

## المحتوى (تلقائي بالكامل):
- الرئيسية: أحدث الملخصات + الأخبار + تحميل التطبيق
- /highlights: كل الملخصات (فيديو يوتيوب)
- /highlights/[slug]: صفحة ملخص واحد (فيديو مضمّن + schema)
- /highlights/comp/[league]: ملخصات كل بطولة
- /اهداف-اليوم /ملخصات-المباريات /اخبار-كرة-القدم ...: صفحات كلمات مفتاحية
- /news: أخبار كرة القدم (RSS)
- /download: تحميل التطبيق (QR للكمبيوتر، مباشر للأندرويد)
- sitemap.xml + robots.txt + VideoObject schema (صور مصغرة في نتائج البحث)

## SEO:
يستهدف كلمات مختلفة عن sirtv.io: "ملخص مباراة", "اهداف اليوم",
"ملخصات المباريات", "اخبار كرة القدم" — فلا ينافس موقعك الأول.

## الروابط:
- Play: com.sirtv.mobaryat_live_kora_mobachir
- Telegram: t.me/sirtvlive
- يربط إلى sirtv.io (يقوّي الموقعين)
