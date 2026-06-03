import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Страница не найдена | МАКСТИЛ",
  description: "Запрашиваемая страница не найдена. Перейдите на главную или в разделы сайта.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-accent-blue mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
            Страница не найдена
          </h2>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">
            Запрашиваемая страница не существует или была удалена.
            Попробуйте найти нужную информацию через наши разделы:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <Link
              href="/"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Главная</h3>
              <p className="text-sm text-muted">О компании и услуги</p>
            </Link>
            <Link
              href="/articles/"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Статьи</h3>
              <p className="text-sm text-muted">Полезные материалы</p>
            </Link>
            <Link
              href="/vacancies/"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Вакансии</h3>
              <p className="text-sm text-muted">Работа в компании</p>
            </Link>
            <Link
              href="/#calculator"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Калькулятор</h3>
              <p className="text-sm text-muted">Расчёт стоимости</p>
            </Link>
            <Link
              href="/#contacts"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Контакты</h3>
              <p className="text-sm text-muted">Связаться с нами</p>
            </Link>
            <a
              href="https://vk.ru/mcsteel31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-lg hover:border-accent-blue transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">Мы во ВКонтакте</h3>
              <p className="text-sm text-muted">vk.ru/mcsteel31</p>
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex h-12 items-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
}
