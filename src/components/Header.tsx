import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">TopRate</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.packages')}
            </a>
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.calculator')}
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.faq')}
            </a>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setLanguage('ru')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'ru'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('kz')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'kz'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              KZ
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
