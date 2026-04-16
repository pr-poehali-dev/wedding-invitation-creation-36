import { useState } from "react";
import Icon from "@/components/ui/icon";

const WeddingInvitation = () => {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    menu: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 30%, hsl(38 55% 82% / 0.5) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, hsl(148 18% 72% / 0.3) 0%, transparent 55%)`,
          }}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[hsl(var(--gold)/0.4)]" />

        <div className="relative z-10 max-w-xl mx-auto">
          <p className="animate-fade-up font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8">
            вас приглашают на торжество
          </p>

          <h1 className="animate-fade-up-delay-1 font-display text-7xl md:text-8xl font-light leading-none mb-2">
            Александр
          </h1>
          <div className="animate-fade-up-delay-1 flex items-center justify-center gap-4 my-4">
            <div className="divider-gold w-20" />
            <span className="font-display text-3xl italic text-gold">и</span>
            <div className="divider-gold w-20" />
          </div>
          <h1 className="animate-fade-up-delay-1 font-display text-7xl md:text-8xl font-light leading-none mb-10">
            Мария
          </h1>

          <p className="animate-fade-up-delay-2 font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            14 июня 2025
          </p>
          <p className="animate-fade-up-delay-2 font-display text-xl italic text-foreground/70">
            Москва, Россия
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">листайте вниз</span>
          <Icon name="ChevronDown" size={16} className="text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Date & Time */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="divider-gold mb-12" />
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
            дата и время
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-10">
            14 июня 2025
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-[hsl(var(--gold)/0.4)] flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={18} className="text-gold" />
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Сбор гостей</p>
              <p className="font-display text-2xl">16:00</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-[hsl(var(--gold)/0.4)] flex items-center justify-center mx-auto mb-3">
                <Icon name="Sparkles" size={18} className="text-gold" />
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Церемония</p>
              <p className="font-display text-2xl">17:00</p>
            </div>
          </div>
          <div className="divider-gold mt-12" />
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              место проведения
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-3">
              Ресторан «Белая ночь»
            </h2>
            <p className="font-display italic text-xl text-foreground/60">
              Банкетный зал «Зимний сад»
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-card border border-border rounded-sm p-6">
            <div className="w-12 h-12 rounded-full border border-[hsl(var(--gold)/0.4)] flex items-center justify-center shrink-0">
              <Icon name="MapPin" size={18} className="text-gold" />
            </div>
            <div>
              <p className="font-body font-medium text-foreground mb-1">
                г. Москва, ул. Пречистенка, 17
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Ближайшее метро — Кропоткинская (5 минут пешком)
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Парковка доступна на территории — бесплатно
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="divider-gold mb-12" />
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            дресс-код
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Элегантный вечерний
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
            Мы будем рады видеть вас в нарядах цветовой гаммы — нежных пастельных, шампань,
            бежевых и пудровых оттенков. Белый цвет просим зарезервировать для невесты.
          </p>

          <div className="flex justify-center gap-3">
            {["#F5EDD6", "#E8D5B7", "#C9B99A", "#D4C5A9", "#BDC8B3"].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-border/60 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="divider-gold mt-12" />
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 px-6 bg-secondary/40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            пожелания по подаркам
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Подарочный реестр
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
            Лучшим подарком для нас будет ваше присутствие. Если вы всё же хотите нас порадовать —
            мы составили небольшой список желаний или будем рады вкладу в наш «фонд путешествий».
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: "Gift", title: "Реестр подарков", desc: "Список в магазине «Цвет диванов» — попросите карточку у организатора" },
              { icon: "Plane", title: "Фонд путешествий", desc: "Мы мечтаем о свадебном путешествии в Японию — ваш вклад поможет осуществить мечту" },
              { icon: "Heart", title: "Ваше пожелание", desc: "Напишите нам тёплые слова — это будет самым ценным подарком" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-5">
                <div className="w-10 h-10 rounded-full border border-[hsl(var(--gold)/0.4)] flex items-center justify-center mb-3">
                  <Icon name={item.icon as "Gift"} size={16} className="text-gold" />
                </div>
                <p className="font-body font-medium text-sm mb-2">{item.title}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6">
        <div className="max-w-lg mx-auto">
          <div className="divider-gold mb-12" />
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              подтверждение
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-3">
              Будете ли вы?
            </h2>
            <p className="font-body text-sm text-muted-foreground">
              Просим подтвердить участие до 1 июня 2025
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full border border-[hsl(var(--gold)/0.4)] flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-3xl font-light mb-2">Спасибо!</h3>
              <p className="font-body text-muted-foreground">Мы получили ваш ответ и с нетерпением вас ждём.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Подтверждение
                </label>
                <div className="flex gap-3">
                  {[
                    { value: "yes", label: "Буду" },
                    { value: "no", label: "Не смогу" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setForm({ ...form, attendance: opt.value })}
                      className={`flex-1 py-3 text-sm font-body tracking-wider border transition-all ${
                        form.attendance === opt.value
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-foreground hover:border-foreground/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {form.attendance === "yes" && (
                <>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                      Количество гостей
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="1">1 гость (только я)</option>
                      <option value="2">2 гостя (я + партнёр)</option>
                      <option value="3">3 гостя</option>
                      <option value="4">4 гостя</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                      Предпочтения по меню
                    </label>
                    <div className="space-y-3">
                      {[
                        { value: "standard", label: "Стандартное меню" },
                        { value: "vegetarian", label: "Вегетарианское" },
                        { value: "vegan", label: "Веганское" },
                        { value: "gluten-free", label: "Без глютена" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                          <div
                            className={`w-4 h-4 border flex items-center justify-center transition-all shrink-0 ${
                              form.menu === opt.value
                                ? "border-foreground bg-foreground"
                                : "border-border group-hover:border-foreground/50"
                            }`}
                            onClick={() => setForm({ ...form, menu: opt.value })}
                          >
                            {form.menu === opt.value && (
                              <Icon name="Check" size={10} className="text-background" />
                            )}
                          </div>
                          <span className="font-body text-sm text-foreground">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Пожелания молодожёнам
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ваши тёплые слова..."
                  rows={3}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 bg-foreground text-background font-body text-xs tracking-[0.3em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Отправить ответ
              </button>
            </form>
          )}
          <div className="divider-gold mt-12" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className="font-display italic text-3xl text-foreground/40 mb-2">С любовью,</p>
        <p className="font-display text-2xl font-light text-foreground/60">
          Александр & Мария
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground/50 mt-6">
          14 · 06 · 2025
        </p>
      </footer>

    </div>
  );
};

export default WeddingInvitation;
