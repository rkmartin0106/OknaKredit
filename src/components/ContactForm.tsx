"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: подключить к бэкенду / сервису email
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-brand-navy mb-2">Заявка отправлена!</h3>
        <p className="text-brand-gray">Мы перезвоним вам в течение 30 минут в рабочее время.</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm py-2 px-5">
          Отправить ещё
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Ваше имя *</label>
          <input
            {...register("name", { required: "Введите имя" })}
            placeholder="Иван Иванов"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Телефон *</label>
          <input
            {...register("phone", { required: "Введите номер телефона" })}
            placeholder="+7 (___) ___-__-__"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1">Email</label>
        <input
          {...register("email", {
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Некорректный email" },
          })}
          placeholder="ivan@example.ru"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1">Интересующая продукция</label>
        <select {...register("product")} className={inputClass}>
          <option value="">— Выберите тип —</option>
          <option value="pvh">ПВХ-окна (металлопластиковые)</option>
          <option value="alyuminiy">Алюминиевые окна</option>
          <option value="balkony">Остекление балкона / лоджии</option>
          <option value="dveri">Двери</option>
          <option value="other">Другое / не определился</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1">Комментарий</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Укажите адрес, количество окон, примерные размеры или другую информацию"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      <p className="text-xs text-brand-gray text-center">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Мы не передаём данные третьим лицам.
      </p>
    </form>
  );
}
