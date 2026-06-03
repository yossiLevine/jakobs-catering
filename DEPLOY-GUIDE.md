# 🚀 גיידלעבור העלאה ל-Vercel

## דרך 1: דרך GitHub (מהיר ומוטוב)

### שלב 1: עלו ל-GitHub
1. היכנסו לwww.github.com או אתרו "create account"
2. בחרו שם משתמש (למשל: `yossi-catering`)
3. הזינו את המייל שלכם: `chaburot@gmail.com`

### שלב 2: דחוף את הקוד
בטרמינל (Command Prompt):
```bash
cd "C:\Users\User\פרויקטים\קייטרינג ג"
git remote add origin https://github.com/YOUR-USERNAME/jakobs-catering.git
git branch -M main
git push -u origin main
```

### שלב 3: צירוף ל-Vercel
1. היכנסו ל- **https://vercel.com/sign-up**
2. לחצו "Continue with GitHub"
3. התרשמו עם GitHub
4. לחצו "Import Project"
5. בחרו את ה-repository: `jakobs-catering`
6. לחצו **Deploy** 🎉

---

## דרך 2: Deploy ישיר דרך CLI
```bash
cd "C:\Users\User\פרויקטים\קייטרינג ג"
vercel login
vercel deploy --prod
```

---

## ✅ בסוף:
- קבלו URL: `jakobs-catering-xxxxx.vercel.app`
- צרו דומיין מותאם: `jakobscatering.co.il`
  - בדף הפרויקט ב-Vercel: Settings → Domains
  - הדביקו את ה-DNS records

**ווידאו + כל הסקשנים יופיעו אוטומטית!** 🎬
