# 🛡️ DeepAtom Antivirus - Official Website

Official website for **DeepAtom** - AI-powered antivirus for Windows with machine learning detection, proactive defense, and real-time monitoring.

## 🌐 Live Site

**Production:** https://deepatom.pages.dev

## 📊 About DeepAtom

DeepAtom is an advanced machine learning-powered antivirus solution for Windows that combines:

- 🧠 **ML Engine** - LightGBM RandomForest with 435 static features (85-90% accuracy)
- 🛡️ **Proactive Defense** - Ring-3 behavioral analysis (Ransomware, Injection, Tampering, Persistence)
- ⚡ **Real-Time Guard** - 24/7 protection with configurable scan intervals
- 🔍 **Multi-Layer Scanning** - SHA256 blacklist + YARA signatures + ML classification
- 🎯 **YARA AutoGen** - Automatically generates signature rules from ML detections
- 🔬 **Sandbox Analysis** - Isolated execution environment for dynamic malware analysis
- ☁️ **Cloud Integration** - Threat intelligence sharing

## 🚀 Tech Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Fonts:** Inter (Google Fonts)
- **Icons:** SVG
- **Hosting:** Cloudflare Pages
- **No frameworks** - Vanilla JS for maximum performance

## 🎨 Design

- **Theme:** Dark (#0d1117) with green accents (#238636, #2ea043)
- **Style:** Minimalist, modern, professional (inspired by Bitdefender/ESET)
- **Responsive:** Mobile-first design (375px+)
- **Animations:** Smooth scroll, fade-in effects, hover transitions
- **Typography:** Inter for headings and body, Fira Code for code blocks

## 📄 Pages

- **Home** (`index.html`) - Hero section, features overview, statistics
- **Features** (`features.html`) - Detailed description of 7 core capabilities
- **Download** (`download.html`) - Installation instructions, system requirements
- **Docs** (`docs.html`) - Documentation links, guides, API reference
- **FAQ** (`faq.html`) - 10 common questions and answers

## 📦 Project Structure

```
deepatom-website/
├── index.html              # Main landing page
├── features.html           # Features showcase
├── download.html           # Download page
├── docs.html               # Documentation hub
├── faq.html                # FAQ page
│
├── css/
│   ├── style.css           # Main styles (dark theme)
│   └── animations.css      # Animation definitions
│
├── js/
│   ├── main.js             # Core functionality (nav, mobile menu)
│   └── animations.js       # Scroll animations, counters
│
└── images/
    ├── logo.svg            # DeepAtom logo
    └── favicon.svg         # Browser favicon
```

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/[username]/deepatom-website.git
   cd deepatom-website
   ```

2. **Open in browser:**
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Or use a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   
   # PHP
   php -S localhost:8000
   ```

4. **Visit:** http://localhost:8000

## 📊 Statistics (Current)

- **Detection Accuracy:** 85-90% (known PE malware)
- **Threat Database:** 25,000+ SHA256 hashes
- **YARA Rules:** 5,255+ signatures
- **ML Features:** 435 static features
- **Scan Speed:** 2-3 seconds per 10MB file
- **Block Time:** 2.5 seconds (Real-Time Guard)

## 🚀 Deployment

This site is automatically deployed to **Cloudflare Pages** via GitHub integration.

**Every push to `main` triggers an automatic deployment.**

### Manual Deploy

1. Visit [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select **deepatom** project
3. Click **Create deployment**
4. Upload files or connect Git

## 🌐 Custom Domain

To set up a custom domain:

1. Go to Cloudflare Pages → **deepatom** → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `deepatom.com`)
4. Cloudflare will automatically configure DNS

## 📝 SEO

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, Twitter)
- ✅ Canonical URLs
- ✅ Favicon
- ✅ Semantic HTML5
- ✅ Mobile-friendly
- ✅ Fast loading (<1s)

## 🔧 Optimization

- **Minified CSS/JS** - Cloudflare auto-minifies
- **SVG images** - Vector graphics for scalability
- **Lazy loading** - Images load on demand
- **CDN** - Cloudflare global CDN
- **Caching** - Aggressive browser caching

## 📈 Performance

- **PageSpeed Score:** 95+ (Desktop), 90+ (Mobile)
- **First Contentful Paint:** <0.5s
- **Time to Interactive:** <1s
- **Total Size:** ~60 KB (without .exe)

## 🐛 Troubleshooting

### Styles not loading?
Check that paths are relative: `css/style.css` (not `/css/style.css`)

### Images not displaying?
Verify SVG files are in `images/` folder and paths are correct

### Navigation not working?
Open browser console (F12) to check for JavaScript errors

## 📄 License

© 2026 DeepAtom. All rights reserved.

## 🤝 Contributing

This is the official DeepAtom website. For issues or suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Support

- **Website Issues:** Open an issue on GitHub
- **DeepAtom Software:** See [documentation](docs.html)
- **Email:** [Your support email]

## 🔗 Links

- **Live Site:** https://deepatom.pages.dev
- **GitHub:** https://github.com/[username]/deepatom-website
- **Download:** [GitHub Releases](https://github.com/[username]/deepatom-website/releases)

---

**Built with ❤️ for cybersecurity**

**Version:** 1.0  
**Last Updated:** July 9, 2026
