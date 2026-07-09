# 🚀 Инструкция по деплою

**Эта папка готова к загрузке в Git!**

---

## ✅ Что в этой папке

```
FOR_GIT/                    ← Это корень репозитория!
├── index.html              ✅ Главная страница
├── features.html           ✅ Возможности
├── download.html           ✅ Скачивание
├── docs.html               ✅ Документация
├── faq.html                ✅ FAQ
├── README.md               ✅ Описание проекта
├── .gitignore              ✅ Git ignore файл
│
├── css/
│   ├── style.css           ✅ Основные стили
│   └── animations.css      ✅ Анимации
│
├── js/
│   ├── main.js             ✅ Основной JS
│   └── animations.js       ✅ Анимации JS
│
└── images/
    ├── logo.svg            ✅ Логотип
    └── favicon.svg         ✅ Иконка
```

**Всего:** 15 файлов (~60 KB)

---

## 🚀 Как загрузить на GitHub

### Шаг 1: Открой эту папку в PowerShell/CMD

```cmd
cd "c:\Users\admin\Desktop\DeepAtom_Build\release\src\website\FOR_GIT"
```

### Шаг 2: Инициализируй Git

```cmd
git init
git add .
git commit -m "DeepAtom website v1.0"
```

### Шаг 3: Создай репозиторий на GitHub

1. Открой https://github.com/new
2. **Repository name:** `deepatom-website`
3. **Description:** `Official website for DeepAtom Antivirus - AI-powered malware detection`
4. **Public** (чтобы Cloudflare Pages мог подключиться)
5. **НЕ** добавляй README, .gitignore, license (они уже есть)
6. Нажми **Create repository**

### Шаг 4: Залей код на GitHub

Скопируй команды из GitHub (они появятся после создания репозитория):

```cmd
git remote add origin https://github.com/[твой-username]/deepatom-website.git
git branch -M main
git push -u origin main
```

**Замени `[твой-username]` на свой GitHub username!**

---

## 🌐 Как подключить Cloudflare Pages

### Шаг 1: Открой Cloudflare Dashboard

https://dash.cloudflare.com/

### Шаг 2: Создай Pages проект

1. **Workers & Pages** → **Create application**
2. **Pages** → **Connect to Git**
3. Авторизуй GitHub (если не авторизован)

### Шаг 3: Выбери репозиторий

1. Найди `deepatom-website` в списке
2. Нажми **Begin setup**

### Шаг 4: Настрой деплой

**Build settings:**
- **Project name:** `deepatom` (или любое имя)
- **Production branch:** `main`
- **Framework preset:** `None`
- **Build command:** (оставь пустым)
- **Build output directory:** `/` (корень)

**Environment variables:** Не требуются

Нажми **Save and Deploy**

### Шаг 5: Дождись деплоя

- Cloudflare автоматически задеплоит сайт
- Занимает 1-2 минуты
- URL будет типа: `https://deepatom.pages.dev`

---

## 📦 Загрузка .exe файла

Поскольку `.exe` файл слишком большой (69 MB), загрузи его отдельно:

### GitHub Releases:

1. В репозитории на GitHub → **Releases** → **Create a new release**
2. **Tag version:** `v2.1`
3. **Release title:** `DeepAtom 2.1`
4. **Description:**
   ```
   DeepAtom Antivirus v2.1
   
   - Machine Learning Engine (85-90% accuracy)
   - Proactive Defense (Ring-3 behavioral)
   - Real-Time Guard (24/7 protection)
   - YARA Scanner (5,255+ rules)
   - Sandbox Analysis
   
   System Requirements:
   - Windows 7/8/10/11 (x64)
   - Python 3.8+
   - 2 GB RAM (min), 4 GB (recommended)
   ```
5. **Attach files:** Перетащи `DeepAtom-2.1-Setup.exe`
6. **Publish release**

**Ссылка будет:**
```
https://github.com/[username]/deepatom-website/releases/download/v2.1/DeepAtom-2.1-Setup.exe
```

### Обнови download.html:

1. Открой `download.html`
2. Найди строку с `href="downloads/..."`
3. Замени на ссылку GitHub Releases
4. Закоммить:
   ```cmd
   git add download.html
   git commit -m "Update download link to GitHub Releases"
   git push
   ```

Cloudflare Pages автоматически обновит сайт!

---

## ⚡ Автоматические деплои

После подключения к Cloudflare Pages:

**Каждый `git push` автоматически обновляет сайт!**

```cmd
# Внеси изменения
git add .
git commit -m "Update homepage"
git push

# Cloudflare автоматически задеплоит за 1-2 минуты
```

---

## ✅ Проверка после деплоя

Открой: `https://deepatom.pages.dev`

Проверь:
- ✅ Главная страница загружается
- ✅ Темная тема работает
- ✅ Навигация работает
- ✅ Все страницы доступны
- ✅ Анимации плавные
- ✅ Mobile версия адаптивная

---

## 🎯 Кастомный домен (опционально)

Если у тебя есть домен:

1. В Cloudflare Pages → **deepatom** → **Custom domains**
2. **Add a custom domain**
3. Введи домен (например `deepatom.com`)
4. Cloudflare настроит DNS автоматически

URL станет: `https://deepatom.com`

---

## 🐛 Если что-то не работает

**Проблема:** Стили не загружаются  
**Решение:** Проверь, что пути относительные (`css/style.css`, не `/css/style.css`)

**Проблема:** Изображения не отображаются  
**Решение:** Проверь, что SVG файлы в `images/` и пути правильные

**Проблема:** JavaScript не работает  
**Решение:** Открой консоль браузера (F12) и проверь ошибки

---

## 📝 Итого

**Команды:**

```cmd
# 1. Перейди в папку
cd "c:\Users\admin\Desktop\DeepAtom_Build\release\src\website\FOR_GIT"

# 2. Git init
git init
git add .
git commit -m "DeepAtom website v1.0"

# 3. Создай репозиторий на GitHub
# https://github.com/new

# 4. Push (замени [username])
git remote add origin https://github.com/[username]/deepatom-website.git
git branch -M main
git push -u origin main

# 5. Подключи Cloudflare Pages
# https://dash.cloudflare.com/ → Connect to Git

# 6. Готово!
# Сайт будет на: https://deepatom.pages.dev
```

---

**Готово! Эта папка готова к загрузке в Git!** 🚀
