const languages = {
    ar: "🇪🇬 عربي",
    en: "🇺🇸 English",
    fr: "🇫🇷 Français",
    de: "🇩🇪 Deutsch",
    tr: "🇹🇷 Türkçe",
    zh: "🇨🇳 中文",
    hi: "🇮🇳 हिंदी",
    es: "🇪🇸 Español",
    it: "🇮🇹 Italiano",
    ru: "🇷🇺 Русский"
  };
  
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    for (const code in languages) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = languages[code];
      langSelect.appendChild(opt);
    }
  }
  
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  