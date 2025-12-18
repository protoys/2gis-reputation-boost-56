import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'kz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'badge.premium': 'Премиум-качество сервиса',
    'nav.about': 'О нас',
    'nav.packages': 'Пакеты',
    'nav.calculator': 'Калькулятор',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'Поднимем доверие к вашему бизнесу в 2GIS',
    'hero.subtitle': 'Помогаем выстроить поток реальных отзывов, улучшить карточку и повысить конверсию из поиска.',
    'hero.cta.order': 'Заказать',
    'hero.cta.whatsapp': 'Написать в WhatsApp',
    'hero.stat.experience': 'Опыт 5+ лет',
    'hero.stat.location': 'Казахстан',
    'hero.stat.languages': 'RU/KZ тексты',
    
    // Why Reviews
    'why.title': 'Почему отзывы влияют на продажи',
    'why.trust.title': 'Доверие',
    'why.trust.desc': 'Клиенты доверяют реальным отзывам больше, чем рекламе',
    'why.competition.title': 'Выбор среди конкурентов',
    'why.competition.desc': 'Высокий рейтинг выделяет вас на фоне других',
    'why.conversion.title': 'Конверсия',
    'why.conversion.desc': 'Больше отзывов = больше обращений и продаж',
    'why.visibility.title': 'Видимость',
    'why.visibility.desc': 'Алгоритмы 2GIS продвигают карточки с отзывами',
    'why.social.title': 'Соц. доказательство',
    'why.social.desc': 'Люди следуют за выбором других покупателей',
    'why.doubts.title': 'Снижение сомнений',
    'why.doubts.desc': 'Отзывы отвечают на вопросы до обращения к вам',
    
    // How We Work
    'how.title': 'Как мы работаем',
    'how.step1.title': 'Анализ карточки 2GIS',
    'how.step1.desc': 'Изучаем текущее состояние вашего профиля и выявляем точки роста',
    'how.step2.title': 'Рекомендации по улучшению',
    'how.step2.desc': 'Советы по фото, описанию, категориям и оформлению карточки',
    'how.step3.title': 'Сценарий сбора отзывов',
    'how.step3.desc': 'QR-коды, ссылки, скрипты для получения отзывов от реальных клиентов',
    'how.step4.title': 'Контроль и ответы',
    'how.step4.desc': 'Мониторим динамику и помогаем отвечать на отзывы',
    
    // Packages
    'packages.title': 'Пакеты',
    'packages.price': '₸ за отзыв',
    'packages.reviews': 'отзывов',
    'packages.total': 'Итого:',
    'packages.note': 'Публикации постепенно, рост выглядит естественно',
    'packages.popular': 'Популярный',
    
    // Calculator
    'calc.title': 'Калькулятор заказа',
    'calc.quantity': 'Количество отзывов',
    'calc.total': 'Итого:',
    'calc.link.label': 'Ссылка на вашу точку в 2GIS',
    'calc.link.placeholder': 'https://2gis.kz/almaty/firm/...',
    'calc.order': 'Заказать в WhatsApp',
    'calc.required': 'Обязательное поле',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Это боты?',
    'faq.a1': 'Нет, работаем только с реальными клиентскими сценариями и честной репутацией.',
    'faq.q2': 'Сколько по времени?',
    'faq.a2': 'Зависит от темпа, обычно публикации идут постепенно для естественного роста.',
    'faq.q3': 'Какие гарантии?',
    'faq.a3': 'Гарантия качества сопровождения и рекомендаций. Поддержка на всех этапах.',
    
    // Footer
    'footer.disclaimer': 'Мы не продаём фейковые отзывы. Помогаем выстроить честный сбор обратной связи и улучшить карточку.',
    'footer.contact': 'Связаться с нами',
    
    // WhatsApp message
    'whatsapp.message': 'Салам! Хочу подключить сопровождение по сбору реальных отзывов в 2GIS.',
  },
  kz: {
    // Header
    'badge.premium': 'Премиум сапалы қызмет',
    'nav.about': 'Біз туралы',
    'nav.packages': 'Пакеттер',
    'nav.calculator': 'Калькулятор',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': '2GIS-те бизнесіңізге сенімді арттырамыз',
    'hero.subtitle': 'Нақты пікірлер ағынын құруға, карточканы жақсартуға және іздеуден конверсияны арттыруға көмектесеміз.',
    'hero.cta.order': 'Тапсырыс беру',
    'hero.cta.whatsapp': 'WhatsApp-қа жазу',
    'hero.stat.experience': '5+ жыл тәжірибе',
    'hero.stat.location': 'Қазақстан',
    'hero.stat.languages': 'RU/KZ мәтіндер',
    
    // Why Reviews
    'why.title': 'Неліктен пікірлер сатылымға әсер етеді',
    'why.trust.title': 'Сенім',
    'why.trust.desc': 'Клиенттер нақты пікірлерге жарнамадан көп сенеді',
    'why.competition.title': 'Бәсекелестер арасында таңдау',
    'why.competition.desc': 'Жоғары рейтинг сізді басқалардан ерекшелейді',
    'why.conversion.title': 'Конверсия',
    'why.conversion.desc': 'Көп пікір = көп өтініш және сатылым',
    'why.visibility.title': 'Көріну',
    'why.visibility.desc': '2GIS алгоритмдері пікірлері бар карточкаларды алға жылжытады',
    'why.social.title': 'Әлеуметтік дәлел',
    'why.social.desc': 'Адамдар басқа сатып алушылардың таңдауына еріп жүреді',
    'why.doubts.title': 'Күмәнді азайту',
    'why.doubts.desc': 'Пікірлер сізге хабарласпай-ақ сұрақтарға жауап береді',
    
    // How We Work
    'how.title': 'Біз қалай жұмыс істейміз',
    'how.step1.title': '2GIS карточкасын талдау',
    'how.step1.desc': 'Профильіңіздің ағымдағы жағдайын зерттеп, өсу нүктелерін анықтаймыз',
    'how.step2.title': 'Жақсарту бойынша ұсыныстар',
    'how.step2.desc': 'Фото, сипаттама, санаттар және карточканы безендіру бойынша кеңестер',
    'how.step3.title': 'Пікір жинау сценарийі',
    'how.step3.desc': 'Нақты клиенттерден пікір алу үшін QR-кодтар, сілтемелер, скрипттер',
    'how.step4.title': 'Бақылау және жауаптар',
    'how.step4.desc': 'Динамиканы бақылап, пікірлерге жауап беруге көмектесеміз',
    
    // Packages
    'packages.title': 'Пакеттер',
    'packages.price': '₸ бір пікір үшін',
    'packages.reviews': 'пікір',
    'packages.total': 'Барлығы:',
    'packages.note': 'Жарияланымдар біртіндеп, өсу табиғи көрінеді',
    'packages.popular': 'Танымал',
    
    // Calculator
    'calc.title': 'Тапсырыс калькуляторы',
    'calc.quantity': 'Пікірлер саны',
    'calc.total': 'Барлығы:',
    'calc.link.label': '2GIS-тегі нүктеңізге сілтеме',
    'calc.link.placeholder': 'https://2gis.kz/almaty/firm/...',
    'calc.order': 'WhatsApp-та тапсырыс беру',
    'calc.required': 'Міндетті өріс',
    
    // FAQ
    'faq.title': 'Жиі қойылатын сұрақтар',
    'faq.q1': 'Бұл боттар ма?',
    'faq.a1': 'Жоқ, тек нақты клиенттік сценарийлермен және адал беделмен жұмыс істейміз.',
    'faq.q2': 'Қанша уақыт алады?',
    'faq.a2': 'Қарқынға байланысты, әдетте жарияланымдар табиғи өсу үшін біртіндеп жүреді.',
    'faq.q3': 'Қандай кепілдіктер бар?',
    'faq.a3': 'Сүйемелдеу мен ұсыныстардың сапасына кепілдік. Барлық кезеңдерде қолдау.',
    
    // Footer
    'footer.disclaimer': 'Біз жалған пікірлер сатпаймыз. Адал кері байланыс жинауға және карточканы жақсартуға көмектесеміз.',
    'footer.contact': 'Бізбен байланысу',
    
    // WhatsApp message
    'whatsapp.message': 'Сәлем! 2GIS-те нақты пікірлер жинау бойынша сүйемелдеуді қосқым келеді.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
