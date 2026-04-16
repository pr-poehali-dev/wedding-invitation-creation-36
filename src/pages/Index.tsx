import { useState } from "react";
import Icon from "@/components/ui/icon";

const Ornament = () => (
  <div className="flex items-center justify-center gap-3 my-2">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(var(--gold)/0.6)]" />
    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold)/0.7)]" />
    <div className="w-2.5 h-2.5 rounded-full border border-[hsl(var(--gold)/0.5)]" />
    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold)/0.7)]" />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(var(--gold)/0.6)]" />
  </div>
);

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
        {/* Background blobs */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 20%, hsl(38 60% 80% / 0.45) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 75%, hsl(148 20% 70% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(36 30% 94% / 0.6) 0%, transparent 70%)
          `
        }} />

        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[hsl(var(--gold)/0.5)]" />

        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[hsl(var(--gold)/0.3)]" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[hsl(var(--gold)/0.3)]" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[hsl(var(--gold)/0.3)]" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[hsl(var(--gold)/0.3)]" />

        <div className="relative z-10 max-w-xl mx-auto">
          <p className="animate-fade-up font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
            вас приглашают на торжество
          </p>

          <Ornament />

          <div className="my-6">
            <h1 className="animate-fade-up-delay-1 font-display text-6xl md:text-8xl font-light leading-none">
              Максим
            </h1>
            <div className="animate-fade-up-delay-1 flex items-center justify-center gap-4 my-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold)/0.6)]" />
              <span className="font-display text-2xl italic text-gold">&</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold)/0.6)]" />
            </div>
            <h1 className="animate-fade-up-delay-1 font-display text-6xl md:text-8xl font-light leading-none">
              Дарья
            </h1>
          </div>

          {/* Photo with decorative frame */}
          <div className="animate-fade-up-delay-2 relative mx-auto mb-8 w-56 md:w-64">
            <div className="absolute -inset-2 border border-[hsl(var(--gold)/0.25)] rounded-sm" />
            <div className="absolute -inset-4 border border-[hsl(var(--gold)/0.12)] rounded-sm" />
            <div className="overflow-hidden rounded-sm shadow-xl" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://cdn.poehali.dev/projects/31cd5a93-4b9e-43a7-b4ec-a72c954ccd9b/bucket/6789154d-972e-40ec-a62e-2bd0284c08fa.jpg"
                alt="Максим и Дарья"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <Ornament />

          <p className="animate-fade-up-delay-3 font-display text-2xl font-light tracking-wide mt-4 mb-1">
            11 сентября 2026
          </p>
          <p className="animate-fade-up-delay-3 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Орёл, Россия
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-fade-up-delay-4">
          <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground/60">листайте вниз</span>
          <Icon name="ChevronDown" size={14} className="text-muted-foreground/60 animate-bounce" />
        </div>
      </section>

      {/* Date & Time */}
      <section className="py-24 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-14" />

          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">
            дата и время
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-2">
            11 сентября 2026
          </h2>
          <p className="font-display italic text-lg text-muted-foreground mb-12">пятница</p>

          <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
            {[
              { icon: "Users", label: "Сбор гостей", time: "14:30" },
              { icon: "Sparkles", label: "Церемония", time: "15:00" },
            ].map((item) => (
              <div key={item.label} className="relative bg-card border border-border/60 rounded-sm p-5 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border border-[hsl(var(--gold)/0.4)] flex items-center justify-center">
                  <Icon name={item.icon as "Users"} size={12} className="text-gold" />
                </div>
                <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mt-2 mb-2">{item.label}</p>
                <p className="font-display text-3xl font-light">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mt-14" />
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-6" style={{
        background: "linear-gradient(135deg, hsl(36 25% 95%) 0%, hsl(148 15% 94%) 100%)"
      }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">
            место проведения
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-1">
            Ресторан «Центральный»
          </h2>
          <p className="font-display italic text-xl text-foreground/50 mb-10">
            Банкетный зал
          </p>

          <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-border/50 rounded-sm px-7 py-5 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--gold)/0.12)] border border-[hsl(var(--gold)/0.35)] flex items-center justify-center shrink-0">
              <Icon name="MapPin" size={16} className="text-gold" />
            </div>
            <div className="text-left">
              <p className="font-body font-medium text-sm text-foreground">г. Орёл, ул. Ленина, 39</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">Ресторан «Центральный»</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-14" />

          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">
            дресс-код
          </p>
          <Ornament />

          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mt-6 mb-10">
            Мы будем рады видеть вас в нарядах цветовой гаммы — зелёных, оливковых,
            пудровых и бежевых оттенков. Белый цвет просим зарезервировать для невесты.
            Чёрный цвет доступен только для мужчин — в качестве костюма или брюк.
          </p>

          <div className="flex justify-center gap-4">
            {[
              { color: "#7BAE7F", label: "Зелёный" },
              { color: "#808A5A", label: "Оливковый" },
              { color: "#E8D5CC", label: "Пудра" },
              { color: "#D4C3A3", label: "Бежевый" },
              { color: "#2C2C2C", label: "Чёрный" },
            ].map((item) => (
              <div key={item.color} className="flex flex-col items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-body text-[9px] tracking-wide text-muted-foreground hidden sm:block">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mt-14" />
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6" style={{
        background: "linear-gradient(160deg, hsl(36 25% 96%) 0%, hsl(148 12% 95%) 100%)"
      }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">
              подтверждение участия
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-2">
              Будете ли вы?
            </h2>
            <Ornament />
            <p className="font-body text-xs text-muted-foreground mt-3">
              Просим подтвердить участие до 25 августа 2026
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-14 bg-white/60 backdrop-blur-sm border border-border/40 rounded-sm">
              <div className="w-16 h-16 rounded-full border border-[hsl(var(--gold)/0.5)] bg-[hsl(var(--gold)/0.08)] flex items-center justify-center mx-auto mb-5">
                <Icon name="Check" size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-3xl font-light mb-2">Спасибо!</h3>
              <p className="font-body text-sm text-muted-foreground">Мы получили ваш ответ и с нетерпением вас ждём.</p>
            </div>
          ) : (
            <div className="bg-white/60 backdrop-blur-sm border border-border/40 rounded-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="w-full bg-transparent border-b border-border py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground block mb-3">
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
                            : "border-border text-foreground hover:border-foreground/50 bg-transparent"
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
                      <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                        Количество гостей
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      >
                        <option value="1">1 гость (только я)</option>
                        <option value="2">2 гостя (я + партнёр)</option>
                        <option value="3">3 гостя</option>
                        <option value="4">4 гостя</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground block mb-3">
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
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                    Пожелания молодожёнам
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ваши тёплые слова..."
                    rows={3}
                    className="w-full bg-transparent border-b border-border py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-background font-body text-[10px] tracking-[0.4em] uppercase hover:bg-foreground/85 transition-colors"
                >
                  Отправить ответ
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, hsl(38 55% 75% / 0.6) 0%, transparent 65%)`
        }} />
        <div className="relative z-10">
          <Ornament />
          <p className="font-display italic text-4xl text-foreground/35 mt-4 mb-1">С любовью,</p>
          <p className="font-display text-3xl font-light text-foreground/55 mb-4">
            Максим & Дарья
          </p>
          <Ornament />
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground/40 mt-4">
            11 · 09 · 2026
          </p>
        </div>
      </footer>

    </div>
  );
};

export default WeddingInvitation;
