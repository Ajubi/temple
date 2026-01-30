import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" }
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number]["code"];

const resources = {
  en: {
    translation: {
      nav: { home: "Home", about: "About", events: "Events" },
      cta: { visit: "Visit Temple", donate: "Donate", timings: "Aarti Timings" },
      hero: {
        badge: "Spiritual × Modern × Minimal",
        title: "A calm, premium experience for devotion—anywhere in the world.",
        subtitle:
          "Experience darshan timings, upcoming festivals, and temple life through imagery—designed for calm, performance, and accessibility."
      },
      sections: {
        timingsTitle: "Daily Aarti & Darshan",
        timingsDesc:
          "A clear schedule that highlights what’s happening now and what’s coming next.",
        festivalsTitle: "Rituals & festivals",
        festivalsDesc: "Images first—short captions, warm glow, calm motion.",
        galleryTitle: "Temple life gallery",
        galleryDesc: "Lazy-loaded masonry with an accessible lightbox preview.",
        donateTitle: "Support seva",
        donateDesc: "UI-only donation presets (no payment logic).",
        contactTitle: "Location & contact",
        contactDesc: "Map placeholder + contact details (replace later)."
      }
    }
  },
  hi: {
    translation: {
      nav: { home: "होम", about: "परिचय", events: "उत्सव" },
      cta: { visit: "मंदिर दर्शन", donate: "दान करें", timings: "आरती समय" },
      hero: {
        badge: "आध्यात्मिक × आधुनिक × सरल",
        title: "भक्ति के लिए एक शांत, प्रीमियम अनुभव—दुनिया भर के लिए।",
        subtitle:
          "दर्शन समय, आने वाले उत्सव और मंदिर जीवन को दृश्यात्मक रूप से देखें—शांति, प्रदर्शन और सुगमता के साथ।"
      },
      sections: {
        timingsTitle: "दैनिक आरती व दर्शन",
        timingsDesc:
          "स्पष्ट समय-सारिणी—अभी क्या चल रहा है और आगे क्या है।",
        festivalsTitle: "अनुष्ठान व उत्सव",
        festivalsDesc: "चित्र प्रधान—छोटे कैप्शन, गर्म आभा, शांत गति।",
        galleryTitle: "मंदिर जीवन गैलरी",
        galleryDesc: "लेज़ी-लोडेड गैलरी + सुगम लाइटबॉक्स प्रीव्यू।",
        donateTitle: "सेवा में सहयोग",
        donateDesc: "केवल UI—दान प्रीसेट (कोई भुगतान लॉजिक नहीं)।",
        contactTitle: "स्थान व संपर्क",
        contactDesc: "मानचित्र प्लेसहोल्डर + संपर्क विवरण।"
      }
    }
  },
  mr: {
    translation: {
      nav: { home: "मुख्य", about: "माहिती", events: "उत्सव" },
      cta: { visit: "मंदिर दर्शन", donate: "दान", timings: "आरती वेळा" },
      hero: {
        badge: "आध्यात्मिक × आधुनिक × साधे",
        title: "भक्तीसाठी शांत, प्रीमियम अनुभव—जगभरातील भाविकांसाठी।",
        subtitle:
          "दर्शन वेळा, आगामी उत्सव आणि मंदिर जीवन अधिक दृश्यात्मक पद्धतीने—शांतता, परफॉर्मन्स आणि सुलभतेसह।"
      },
      sections: {
        timingsTitle: "दैनिक आरती व दर्शन",
        timingsDesc:
          "स्वच्छ वेळापत्रक—आत्ता काय सुरू आहे आणि पुढे काय आहे.",
        festivalsTitle: "अनुष्ठान व उत्सव",
        festivalsDesc: "प्रतिमा प्रथम—लहान कॅप्शन, उबदार ग्लो, शांत अ‍ॅनिमेशन.",
        galleryTitle: "मंदिर जीवन गॅलरी",
        galleryDesc: "लेझी-लोडेड मॅसनरी + सुलभ लाइटबॉक्स प्रीव्यू.",
        donateTitle: "सेवेस पाठबळ",
        donateDesc: "UI-फक्त दान प्रीसेट (पेमेंट लॉजिक नाही).",
        contactTitle: "स्थान व संपर्क",
        contactDesc: "नकाशा प्लेसहोल्डर + संपर्क तपशील."
      }
    }
  }
} as const;

export function initI18n() {
  if (i18n.isInitialized) return i18n;

  const saved = localStorage.getItem("temple:lang");
  const initialLng =
    saved === "en" || saved === "hi" || saved === "mr" ? saved : "en";

  i18n.use(initReactI18next).init({
    resources,
    lng: initialLng,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("temple:lang", lng);
  });

  return i18n;
}


