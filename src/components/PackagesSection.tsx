import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PACKAGES, PRICE_PER_REVIEW } from '@/config/constants';

const PackagesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="packages" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="section-title mb-4">{t('packages.title')}</h2>
          <p className="text-2xl font-semibold text-primary">
            {PRICE_PER_REVIEW} {t('packages.price')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass-card-hover p-8 text-center ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-3.5 h-3.5" />
                    {t('packages.popular')}
                  </span>
                </div>
              )}

              <div className="text-5xl font-bold text-foreground font-display mb-2">
                {pkg.reviews}
              </div>
              <div className="text-muted-foreground mb-6">{t('packages.reviews')}</div>

              <div className="flex items-center justify-center gap-2 text-xl font-semibold text-primary mb-6">
                <span>{t('packages.total')}</span>
                <span>{(pkg.reviews * PRICE_PER_REVIEW).toLocaleString()} ₸</span>
              </div>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                <Check className="w-5 h-5" />
                {t('hero.cta.order')}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground"
        >
          {t('packages.note')}
        </motion.p>
      </div>
    </section>
  );
};

export default PackagesSection;
