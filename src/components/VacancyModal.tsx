"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, PaperPlaneRight, User, Phone, Envelope, FileText, ChatText } from "@phosphor-icons/react";

interface VacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  vacancyTitle: string;
}

export default function VacancyModal({ isOpen, onClose, vacancyTitle }: VacancyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Формируем письмо
    const subject = `Отклик на вакансию: ${vacancyTitle}`;
    const body = `Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Опыт работы: ${formData.experience || "Не указан"}

Сообщение:
${formData.message || "Нет"}`;

    // Показываем успех
    setIsSuccess(true);

    // Открываем почтовый клиент через 500мс
    setTimeout(() => {
      window.location.href = `mailto:maxsteel31@bk.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 500);

    // Закрываем через 3 сек
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", experience: "", message: "" });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Затемнение фона */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Модальное окно */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Шапка */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Отклик на вакансию</h3>
                  <p className="text-sm text-muted mt-1">{vacancyTitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} weight="bold" className="text-muted" />
                </button>
              </div>

              {/* Форма */}
              {isSuccess ? (
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PaperPlaneRight size={32} weight="bold" className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Отправлено!</h4>
                  <p className="text-sm text-muted">Мы рассмотрим вашу кандидатуру и свяжемся с вами.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* ФИО */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <User size={14} className="inline mr-1" />
                      ФИО *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иванов Иван Иванович"
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Телефон */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <Phone size={14} className="inline mr-1" />
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (900) 123-45-67"
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <Envelope size={14} className="inline mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Опыт работы */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <FileText size={14} className="inline mr-1" />
                      Опыт работы
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Выберите вариант</option>
                      <option value="Нет опыта">Нет опыта</option>
                      <option value="До 1 года">До 1 года</option>
                      <option value="1-3 года">1-3 года</option>
                      <option value="3-5 лет">3-5 лет</option>
                      <option value="Более 5 лет">Более 5 лет</option>
                    </select>
                  </div>

                  {/* Сообщение */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <ChatText size={14} className="inline mr-1" />
                      О себе / Сопроводительное письмо
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Расскажите о своем опыте, почему хотите работать у нас..."
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 flex items-center justify-center gap-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <PaperPlaneRight size={18} weight="bold" />
                        Отправить отклик
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center">
                    Или отправьте резюме напрямую на{" "}
                    <a href="mailto:maxsteel31@bk.ru" className="text-accent-blue hover:underline">
                      maxsteel31@bk.ru
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
