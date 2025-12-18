import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, QrCode, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowWeWorkSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, titleKey: 'how.step1.title', descKey: 'how.step1.desc', step: 1 },
    { icon: Lightbulb, titleKey: 'how.step2.title', descKey: 'how.step2.desc', step: 2 },
    { icon: QrCode, titleKey: 'how.step3.title', descKey: 'how.step3.desc', step: 3 },
    { icon: BarChart3, titleKey: 'how.step4.title', descKey: 'how.step4.desc', step: 4 },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{t('how.title')}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card-hover p-8 relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-button">
                  {step.step}
                </div>

                <div className="flex items-start gap-5 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-display">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
