# OneClickFiller ⚡

> Fill your college feedback form in a single click.
> Built with 💜 by students of **Amity University**.

OneClickFiller is a funky, modern Chrome extension that auto-fills repetitive college feedback forms. Pick a vibe (Strongly Agree → Strongly Disagree), choose Yes/No, drop a comment, and hit **Fill the Form**. Done in a blink.

---

## ✨ Features

- 🎯 **One-click fill** for rating-scale questions (Strongly Agree → Strongly Disagree)
- 👍 **Yes / No** quick selection
- 💬 **Custom feedback comment** auto-filled into every textarea
- 🚀 **Auto-submit** toggle (optional)
- 🎨 **Funky modern UI** — gradients, glassmorphism, animated logo
- 💾 **Remembers your last selection** via `chrome.storage.local`
- 🌐 **Works on any feedback form** that uses standard radio buttons + labels

---

## 🌍 Browser & Device Support

| Browser           | Windows | macOS | Linux | ChromeOS | Mobile |
| ----------------- | :-----: | :---: | :---: | :------: | :----: |
| Chrome            |   ✅    |  ✅   |  ✅   |    ✅    |   ❌   |
| Edge              |   ✅    |  ✅   |  ✅   |    —     |   ❌   |
| Brave             |   ✅    |  ✅   |  ✅   |    —     |   ❌   |
| Arc               |   ✅    |  ✅   |   —   |    —     |   ❌   |
| Opera / Vivaldi   |   ✅    |  ✅   |  ✅   |    —     |   ❌   |
| Firefox           |  ⚠️*   | ⚠️*  | ⚠️*  |    —     |   ❌   |
| Safari            |   ❌    |  ❌   |   —   |    —     |   ❌   |

\* Firefox: works as a temporary add-on via `about:debugging`.
Mobile browsers don't support extensions — desktop only.

---

## 📦 Installation

1. **Download** the latest `oneclickfiller.zip` from the website or this repo.
2. **Unzip** it anywhere on your computer (keep the folder safe).
3. Open `chrome://extensions` in your browser.
4. Enable **Developer mode** (top-right toggle).
5. Click **Load unpacked** and select the unzipped `oneclickfiller` folder.
6. Pin the extension to your toolbar via the 🧩 puzzle icon.
7. Open your feedback form → click the OneClickFiller icon → fill → submit. 🎉

> If Chrome says *"Manifest file is missing or unreadable"*, you picked the wrong folder — select the folder that **contains** `manifest.json`, not its parent.

---

## 🛠 Tech Stack

- **Extension:** Manifest V3, vanilla JS, vanilla CSS
- **Landing page:** TanStack Start (React 19) + Tailwind CSS v4 + Vite 7
- **Hosting:** Lovable Cloud

---

## 📁 Project Structure

```
├── extension/              # The Chrome extension source
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.css
│   ├── popup.js
│   └── icon.png
├── public/
│   └── oneclickfiller.zip  # Packaged extension (downloadable)
└── src/                    # Landing-page website
    └── routes/
        └── index.tsx
```

---

## 🧪 Development

```bash
# install deps
bun install

# run the landing page
bun run dev

# repackage the extension after editing files in /extension
cd extension && zip -r ../public/oneclickfiller.zip .
```

After repackaging, reload the extension in `chrome://extensions` to see your changes.

---

## ⚠️ Disclaimer

OneClickFiller is a student-built helper. Please use a **fair and honest decision** while submitting your feedback. Your responses shape your teachers and your college — give feedback that genuinely reflects your experience.

The makers are **not responsible** for misuse, dishonest submissions, or any consequences arising from automated form filling. Use responsibly.

---

## 👨‍🎓 Made By

Students of **Amity University** — for students, by students. 💜

---

## 📄 License

MIT — free to use, modify, and share.

---

## 🏷 Suggested GitHub Repo Description

> ⚡ OneClickFiller — A funky Chrome extension that auto-fills college feedback forms in one click. Pick your rating, write a comment, hit fill. Built by students of Amity University.

**Suggested topics:** `chrome-extension` `manifest-v3` `feedback-form` `productivity` `student-project` `amity-university` `javascript` `auto-fill`
