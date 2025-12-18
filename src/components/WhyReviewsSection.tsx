import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Eye, ThumbsUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Shield, titleKey: 'why.trust.title', descKey: 'why.trust.desc' },
    { icon: Users, titleKey: 'why.competition.title', descKey: 'why.competition.desc' },
    { icon: TrendingUp, titleKey: 'why.conversion.title', descKey: 'why.conversion.desc' },
    { icon: Eye, titleKey: 'why.visibility.title', descKey: 'why.visibility.desc' },
    { icon: ThumbsUp, titleKey: 'why.social.title', descKey: 'why.social.desc' },
    { icon: HelpCircle, titleKey: 'why.doubts.title', descKey: 'why.doubts.desc' },
  ];

  return (
    <section id="why" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{t('why.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                {t(reason.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(reason.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReviewsSection;
