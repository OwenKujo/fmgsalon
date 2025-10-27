import React, { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'th';

type Translations = {
  [k: string]: {
    en: string;
    th: string;
  };
};

const translations: Translations = {
  'nav.home': { en: 'FMG Salon Studio', th: 'FMG Salon Studio' },
  'nav.wellness': { en: 'Matsenga Wellness', th: 'Matsenga Wellness' },
  'nav.blog': { en: 'Blog', th: 'บล็อก' },
  'nav.about': { en: 'About Us', th: 'เกี่ยวกับเรา' },
  'header.call': { en: 'Call Now', th: 'โทรออกเลย' },
  // Hero translations
  'hero.welcome': { en: 'Welcome To', th: 'ยินดีต้อนรับสู่' },
  'hero.brand': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'hero.subtitle1': {
    en:
      'Beauty and wellness destination that combines professional hair salon services and therapeutic massage treatments all delivered by certified experts. We use premium, high-quality products to ensure safe and effective results for every hair type and skin condition. Experience confidence and safety, from head to toe.',
    th:
      'ศูนย์รวมความงามและสุขภาพครบวงจร เรามีบริการดูแลเส้นผม สระผม ย้อมสีผม ผลิตภัณฑ์คุณภาพสูง ปลอดภัย เหมาะกับทุกสภาพผิวและเส้นผม และการนวดรักษาโดยแพทย์แผนไทยประยุกต์ เพื่อให้คุณรู้สึกมั่นใจ ปลอดภัยในทุกสัมผัส',
  },
  // retained but unused second subtitle left empty
  'hero.subtitle2': { en: '', th: '' },
  'hero.discover': { en: 'Discover Treatments', th: 'ค้นหาบริการ' },
  'hero.bookNow': { en: 'BOOK NOW', th: 'จองเลย' },
  'hero.hairSalon': { en: 'Hair Salon', th: 'ร้านเสริมสวย' },
  // Banner slides
  'banner.1.title': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'banner.1.description': { en: 'Professional hair repair and protection', th: 'การฟื้นฟูและปกป้องเส้นผมระดับมืออาชีพ' },
  'banner.2.title': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'banner.2.description': { en: 'Smooth and frizz-free hair', th: 'ผมเรียบลื่น ไร้ชี้ฟู' },
  'banner.3.title': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'banner.3.description': { en: 'Premium hair styling products', th: 'ผลิตภัณฑ์จัดแต่งทรงผมระดับพรีเมียม' },
  'banner.4.title': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'banner.4.description': { en: 'Expert coloring services', th: 'บริการย้อมสีโดยผู้เชี่ยวชาญ' },
  // Contact box on hero
  'hero.contact.title': { en: 'Ferovere Matsenga', th: 'Ferovere Matsenga' },
  'hero.contact.subtitle': { en: 'Hair & Nails Salon', th: 'ร้านทำผมและเล็บ' },
  'hero.contact.address': { en: 'Silom Edge (3rd floor)', th: 'Silom Edge (ชั้น 3)' },
  'hero.contact.phone': { en: 'Tel. 064 456 5145', th: 'โทร. 064 456 5145' },
  'hero.contact.hours': { en: 'Open Daily 11.00 AM - 09.00 PM', th: 'เปิดทุกวัน 11.00 น. - 21.00 น.' },
  // Products translations
  'products.title': { en: 'PRODUCTS WE USE', th: 'ผลิตภัณฑ์ที่เราใช้' },
  'products.olaplex.title': { en: 'Hair Treatment Olaplex', th: 'ผลิตภัณฑ์ Olaplex' },
  'products.olaplex.desc': { en: 'Olaplex treatment products for repairing and strengthening hair, restoring shine and resilience.', th: 'ผลิตภัณฑ์ Olaplex สำหรับการรักษาและซ่อมแซมเส้นผม ช่วยฟื้นฟูความแข็งแรงและความเงางามของเส้นผม' },
  'products.color.title': { en: 'Hair Color by Schwarzkopf and MILBON', th: 'การย้อมสีผม โดย Schwarzkopf และ MILBON' },
  'products.color.desc': { en: 'High-quality hair color from Schwarzkopf and MILBON for vibrant, long-lasting color that is hair-friendly.', th: 'สีย้อมผมคุณภาพสูงจาก Schwarzkopf และ MILBON ให้สีที่สดใส ทนทาน และปลอดภัยต่อเส้นผม' },
  'products.brazilian.title': { en: 'BRAZILIAN BLOWOUT', th: 'การรักษา Brazilian Blowout' },
  'products.brazilian.desc': { en: 'Brazilian Blowout smoothing treatment that reduces frizz and makes hair easier to style and manage.', th: 'การรักษาเส้นผมแบบ Brazilian Blowout ช่วยให้ผมเรียบลื่น ปราศจากไฟฟ้าสถิต และง่ายต่อการจัดแต่ง' },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({
  lang: 'en',
  setLang: () => {},
  t: (k: string) => k,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
