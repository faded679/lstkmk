import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Политика конфиденциальности — МАКСТИЛ",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-muted mb-10">
            Последнее обновление: 1 июня 2025 г.
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-foreground">

            <section>
              <h2 className="text-lg font-semibold mb-3">1. Общие положения</h2>
              <p className="text-muted">
                Настоящая Политика конфиденциальности регулирует порядок обработки и защиты
                персональных данных пользователей сайта <strong>1mcsteel.ru</strong>, принадлежащего
                ООО «ПромПрофиль» (торговая марка МАКСТИЛ), расположенного по адресу:
                Белгородский район, с. Репное, ул. Автодорожная, д. 2.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">2. Какие данные мы собираем</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted">
                <li>Имя и контактный телефон (при заполнении формы обратной связи)</li>
                <li>Адрес электронной почты</li>
                <li>Технические данные: IP-адрес, тип браузера, страницы посещений</li>
                <li>Cookie-файлы для улучшения работы сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">3. Цели обработки данных</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted">
                <li>Обработка заявок и обратная связь с потенциальными заказчиками</li>
                <li>Улучшение качества работы сайта и пользовательского опыта</li>
                <li>Аналитика посещаемости (Яндекс.Метрика)</li>
                <li>Соблюдение требований законодательства РФ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">4. Файлы cookie</h2>
              <p className="text-muted">
                Сайт использует файлы cookie — небольшие текстовые файлы, сохраняемые в браузере.
                Они помогают запоминать ваши предпочтения и анализировать посещаемость. Вы можете
                отключить cookie в настройках браузера, однако это может повлиять на работу
                отдельных функций сайта.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">5. Передача данных третьим лицам</h2>
              <p className="text-muted">
                Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением
                случаев, предусмотренных законодательством РФ, либо с вашего явного согласия.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">6. Хранение и защита данных</h2>
              <p className="text-muted">
                Персональные данные хранятся на защищённых серверах и обрабатываются в соответствии
                с Федеральным законом № 152-ФЗ «О персональных данных». Срок хранения — не дольше,
                чем необходимо для достижения целей обработки.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">7. Ваши права</h2>
              <p className="text-muted">
                Вы вправе в любой момент запросить доступ к своим данным, потребовать их исправления
                или удаления. Для этого направьте запрос на{" "}
                <a href="mailto:maxsteel31@bk.ru" className="text-accent-blue hover:underline">
                  maxsteel31@bk.ru
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">8. Контакты</h2>
              <p className="text-muted">
                ООО «ПромПрофиль» (ТМ МАКСТИЛ)<br />
                Белгородский район, с. Репное, ул. Автодорожная, д. 2<br />
                Тел.: <a href="tel:+79803211542" className="text-accent-blue hover:underline">+7 (980) 321-15-42</a><br />
                Email: <a href="mailto:maxsteel31@bk.ru" className="text-accent-blue hover:underline">maxsteel31@bk.ru</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
