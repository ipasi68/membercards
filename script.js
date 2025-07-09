console.log("Thank you page loaded successfully!");

// Translations object
const translations = {
  en: {
    title: "Thank You for Stopping By!",
    intro: "I truly appreciate you taking a moment to visit this page. If you've found value in the app I created and feel like saying thank you in a small but meaningful way, buying me a coffee is a wonderful gesture.",
    description: "This project has been a labor of love — countless hours of coding, testing, and refining to bring something useful and thoughtful into the world. Every coffee shared helps fuel the passion and energy needed to keep going, improving, and building more.",
    closing: "Thank you from the bottom of my heart for your support — whether it's through a kind message, sharing the app, or this generous little token. It means more than you know.",
    "support-title": "Support This Project",
    "support-subtitle": "Choose your preferred way to show support:",
    "promptpay-title": "PromptPay QR",
    "promptpay-desc": "Scan QR code with your Thai banking app",
    "scan-qr": "Scan QR Code",
    "truemoney-title": "True Money",
    "truemoney-desc": "Popular e-wallet in Thailand",
    "truemoney-donate": "Scan QR Code",
    "international-title": "PayPal",
    "international-desc": "If you cannot use Thai payment methods above",
    "international": "International",
    "thai-preferred": "For Thai and Thailand resident users",
    "coming-soon-title": "More Options Coming Soon",
    "coming-soon-desc": "Additional payment methods will be available here",
    "coming-soon": "Coming Soon",
    "preferred": "Preferred",
    "footer-text": "Made with ❤️ and lots of coffee",
    disclaimer: "Please note: this donation is entirely voluntary and not required to use any feature of the app.",
    "buy-coffee": "Buy Me a Coffee"
  },
  it: {
    title: "Grazie per essere passato!",
    intro: "Apprezzo davvero che tu abbia dedicato un momento per visitare questa pagina. Se ti è piaciuta l'app che ho creato e ti va di dimostrarlo con un piccolo ma significativo gesto, offrirmi un caffè sarebbe davvero meraviglioso.",
    description: "Questo progetto è nato da una vera passione: ci ho dedicato innumerevoli ore tra programmazione, test e perfezionamenti, con l'obiettivo di creare qualcosa di utile e ben pensato. Ogni caffè offerto è un modo per alimentare quella passione, darmi energia e motivarmi a continuare, migliorare e costruire ancora.",
    closing: "Ti ringrazio di cuore per il tuo supporto — che sia attraverso un messaggio gentile, la condivisione dell'app o anche solo questo gesto simbolico. Significa più di quanto tu possa immaginare.",
    "support-title": "Supporta Questo Progetto",
    "support-subtitle": "Scegli il modo preferito per mostrare il tuo supporto:",
    "promptpay-title": "PromptPay QR",
    "promptpay-desc": "Scansiona il codice QR con la tua app bancaria thailandese",
    "scan-qr": "Scansiona QR",
    "truemoney-title": "True Money",
    "truemoney-desc": "Portafoglio elettronico popolare in Thailandia",
    "truemoney-donate": "Scansiona QR",
    "international-title": "PayPal",
    "international-desc": "Se non puoi usare i metodi di pagamento thailandesi sopra",
    "international": "Internazionale",
    "thai-preferred": "Per utenti thai e residenti in Thailandia",
    "coming-soon-title": "Altre Opzioni in Arrivo",
    "coming-soon-desc": "Altri metodi di pagamento saranno disponibili qui",
    "coming-soon": "Prossimamente",
    "preferred": "Preferito",
    "footer-text": "Fatto con ❤️ e tanto caffè",
    disclaimer: "Nota: questa donazione è completamente volontaria e non richiesta per utilizzare qualsiasi funzionalità dell'app.",
    "buy-coffee": "Offrimi un Caffè"
  },
  th: {
    title: "ขอบคุณที่แวะมา!",
    intro: "ฉันซาบซึ้งจริงๆ ที่คุณสละเวลามาเยี่ยมชมหน้านี้ หากคุณพบคุณค่าในแอปที่ฉันสร้างขึ้นและต้องการกล่าวขอบคุณในวิธีเล็กๆ แต่มีความหมาย การซื้อกาแฟให้ฉันเป็นท่าทีที่ยอดเยี่ยม",
    description: "โปรเจกต์นี้เป็นงานที่ทำด้วยความรัก — ชั่วโมงนับไม่ถ้วนของการเขียนโค้ด ทดสอบ และปรับปรุงเพื่อนำสิ่งที่มีประโยชน์และคิดมาอย่างรอบคอบมาสู่โลก ทุกแก้วกาแฟที่แบ่งปันช่วยเติมเชื้อเพลิงให้กับความหลงใหลและพลังงานที่จำเป็นในการเดินหน้าต่อ ปรับปรุง และสร้างสรรค์มากขึ้น",
    closing: "ขอบคุณจากก้นบึ้งของหัวใจสำหรับการสนับสนุนของคุณ — ไม่ว่าจะเป็นผ่านข้อความที่ใจดี การแชร์แอป หรือโทเค็นเล็กๆ ที่ใจกว้างนี้ มันมีความหมายมากกว่าที่คุณจะรู้",
    "support-title": "สนับสนุนโปรเจกต์นี้",
    "support-subtitle": "เลือกวิธีที่คุณต้องการแสดงการสนับสนุน:",
    "promptpay-title": "พร้อมเพย์ QR",
    "promptpay-desc": "สแกน QR code ด้วยแอปธนาคารของคุณ",
    "scan-qr": "สแกน QR",
    "truemoney-title": "ทรูมันนี่",
    "truemoney-desc": "กระเป๋าเงินอิเล็กทรอนิกส์ยอดนิยมในประเทศไทย",
    "truemoney-donate": "สแกน QR",
    "international-title": "PayPal",
    "international-desc": "หากคุณไม่สามารถใช้วิธีชำระเงินของไทยข้างต้นได้",
    "international": "ระหว่างประเทศ",
    "thai-preferred": "สำหรับคนไทย",
    "coming-soon-title": "ตัวเลือกเพิ่มเติมเร็วๆ นี้",
    "coming-soon-desc": "วิธีการชำระเงินเพิ่มเติมจะพร้อมใช้งานที่นี่",
    "coming-soon": "เร็วๆ นี้",
    "preferred": "แนะนำ",
    "footer-text": "สร้างด้วย ❤️ และกาแฟมากมาย",
    disclaimer: "โปรดทราบ: การบริจาคนี้เป็นไปโดยสมัครใจทั้งหมดและไม่จำเป็นต้องใช้คุณสมบัติใดๆ ของแอป",
    "buy-coffee": "ซื้อกาแฟให้ฉัน"
  }
};

// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
  // Check if language exists
  if (!translations[lang]) {
    console.error(`Language ${lang} not found in translations`);
    return;
  }
  
  // Prevent switching to the same language
  if (currentLanguage === lang) {
    return;
  }
  
  currentLanguage = lang;
  
  // Update active language indicator
  document.querySelectorAll('.language-option').forEach(option => {
    const isActive = option.getAttribute('data-lang') === lang;
    option.setAttribute('data-active', isActive);
  });
  
  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-translate]');
  
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      const translation = translations[lang][key];
      
      // Handle elements with icons
      if (element.innerHTML.includes('<i class=')) {
        const iconMatch = element.innerHTML.match(/<i[^>]*>.*?<\/i>/g);
        if (iconMatch) {
          element.innerHTML = translation + ' ' + iconMatch.join('');
        } else {
          element.textContent = translation;
        }
      } else {
        element.textContent = translation;
      }
    }
  });
  
  // Save language preference
  localStorage.setItem('preferred-language', lang);
  
  // Update page title
  const titles = {
    en: "Thank You – Buy Me a Coffee",
    it: "Grazie – Offrimi un Caffè",
    th: "ขอบคุณ – ซื้อกาแฟให้ฉัน"
  };
  document.title = titles[lang] || titles.en;
}

// Add smooth scrolling and interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Add click animation to payment buttons
  const paymentButtons = document.querySelectorAll('.payment-button:not(.disabled)');
  
  paymentButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add hover effects to payment methods
  const paymentMethods = document.querySelectorAll('.payment-method');
  
  paymentMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
      if (!this.classList.contains('coming-soon')) {
        this.style.transform = 'translateY(-4px) scale(1.02)';
      }
    });
    
    method.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add loading animation for the coffee icon
  const coffeeIcon = document.querySelector('.coffee-icon');
  if (coffeeIcon) {
    coffeeIcon.addEventListener('click', function() {
      this.style.transform = 'rotate(360deg) scale(1.1)';
      setTimeout(() => {
        this.style.transform = 'rotate(0deg) scale(1)';
      }, 600);
    });
  }

  // Remove intersection observer that was causing language switching issues
  // Payment methods will be visible immediately without animation

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusedElement = document.activeElement;
      if (focusedElement.classList.contains('payment-button')) {
        focusedElement.click();
      }
    }
  });

  // Add analytics tracking (optional)
  function trackPaymentClick(method) {
    // You can add Google Analytics or other tracking here
    console.log(`Payment method clicked: ${method}`);
  }

  // Track payment button clicks
  paymentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const methodName = this.closest('.payment-method').querySelector('h3').textContent;
      trackPaymentClick(methodName);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .payment-button {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Language selector functionality
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (languageOptions.length > 0) {
    // Load saved language preference or detect browser language
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (browserLang === 'it' ? 'it' : (browserLang === 'th' ? 'th' : 'en'));
    
    // Initialize with default language
    currentLanguage = defaultLang;
    switchLanguage(defaultLang);
    
    // Add click event listeners
    languageOptions.forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        localStorage.setItem('preferred-language', lang);
        switchLanguage(lang);
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    });
  }
});

// Add service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful');
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed');
      });
  });
}
