import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WHATSAPP_PHONE } from '@/config/constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(t('whatsapp.message'))}`;

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo / Badge */}
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-semibold">TopRate</span>
          </div>

          {/* Contact Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-colors mb-10"
          >
            <MessageCircle className="w-5 h-5" />
            {t('footer.contact')}
          </a>

          {/* Disclaimer */}
          <p className="text-background/60 max-w-xl leading-relaxed mb-8">
            {t('footer.disclaimer')}
          </p>

          {/* Copyright */}
          <div className="text-background/40 text-sm">
            © {new Date().getFullYear()} 2GIS Reviews Service. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
