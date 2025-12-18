import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WHATSAPP_PHONE, PRICE_PER_REVIEW, MIN_REVIEWS, MAX_REVIEWS } from '@/config/constants';
import { Slider } from '@/components/ui/slider';

const CalculatorSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [quantity, setQuantity] = useState(20);
  const [link, setLink] = useState('');
  const [showError, setShowError] = useState(false);

  const total = quantity * PRICE_PER_REVIEW;

  const handleOrder = () => {
    if (!link.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const message =
      language === 'ru'
        ? `Салам! Хочу подключить сопровождение по сбору реальных отзывов в 2GIS. Кол-во: ${quantity}. Сумма: ${total.toLocaleString()} ₸. Ссылка на точку: ${link}`
        : `Сәлем! 2GIS-те нақты пікірлер жинау бойынша сүйемелдеуді қосқым келеді. Саны: ${quantity}. Сома: ${total.toLocaleString()} ₸. Нүктеге сілтеме: ${link}`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-24 relative sparkle-bg overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-mint-light/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-10 h-10 text-primary" />
            {t('calc.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            {/* Quantity Slider */}
            <div className="mb-10">
              <label className="block text-lg font-medium text-foreground mb-4">
                {t('calc.quantity')}
              </label>
              <div className="flex items-center gap-6 mb-4">
                <Slider
                  value={[quantity]}
                  onValueChange={(value) => setQuantity(value[0])}
                  min={MIN_REVIEWS}
                  max={MAX_REVIEWS}
                  step={1}
                  className="flex-1"
                />
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || MIN_REVIEWS;
                    setQuantity(Math.min(Math.max(val, MIN_REVIEWS), MAX_REVIEWS));
                  }}
                  className="w-24 h-12 text-center text-xl font-bold bg-secondary border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground"
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{MIN_REVIEWS}</span>
                <span>{MAX_REVIEWS}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between p-6 bg-primary/5 rounded-2xl mb-8">
              <span className="text-xl text-foreground">{t('calc.total')}</span>
              <span className="text-3xl md:text-4xl font-bold text-primary font-display">
                {total.toLocaleString()} ₸
              </span>
            </div>

            {/* Link Input */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-foreground mb-3">
                {t('calc.link.label')} <span className="text-destructive">*</span>
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                  if (showError) setShowError(false);
                }}
                placeholder={t('calc.link.placeholder')}
                className={`w-full h-14 px-5 text-lg bg-secondary border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground placeholder:text-muted-foreground transition-colors ${
                  showError ? 'border-destructive' : 'border-border'
                }`}
              />
              {showError && (
                <div className="flex items-center gap-2 mt-2 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {t('calc.required')}
                </div>
              )}
            </div>

            {/* Order Button */}
            <button onClick={handleOrder} className="whatsapp-button w-full text-lg py-5">
              <MessageCircle className="w-6 h-6" />
              {t('calc.order')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
