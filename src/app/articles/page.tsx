// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const articles = [
  {
    id: 201,
    title: "Коровник на 50 голов из ЛСТК под ключ",
    excerpt:
      "Проектирование и строительство коровников на 50 голов из ЛСТК. Быстровозводимые фермы под ключ: цена, сроки, технологии. Вентиляция, утепление, ветеринарные требования.",
    image: "/knowledge/cow-farm-2.jpg",
    date: "16 июня 2026",
    readTime: "8 мин",
    category: "Сельхозздания",
    slug: "korovnik-na-50-golov",
  },
  {
    id: 202,
    title: "Коровник на 100 голов из ЛСТК: проект и строительство",
    excerpt:
      "Коммерческий проект коровника на 100 голов КРС. Доильный зал, система навозоудаления, вентиляция с рекуперацией. Строительство под ключ от 4,5 млн рублей.",
    image: "/knowledge/cow-farm-3.jpg",
    date: "16 июня 2026",
    readTime: "9 мин",
    category: "Сельхозздания",
    slug: "korovnik-na-100-golov",
  },
  {
    id: 203,
    title: "Коровник на 200 голов: промышленная молочная ферма",
    excerpt:
      "Строительство крупных коровников на 200 голов. Промышленные молочные фермы с автоматизацией: проектирование, доильный зал 16 мест, климат-контроль.",
    image: "/knowledge/cow-farm-1.jpg",
    date: "16 июня 2026",
    readTime: "10 мин",
    category: "Сельхозздания",
    slug: "korovnik-na-200-golov",
  },
  {
    id: 301,
    title: "Гараж из металлоконструкций: проект, размеры, стоимость",
    excerpt:
      "Гараж на 1, 2, 4 машины и для грузовиков из ЛСТК: размеры, типовые проекты, материалы, утепление, цены под ключ. Сравнение с боксом в ГСК.",
    image: "/articles/metallokonstrukcii-belgorod.jpg",
    date: "20 июня 2026",
    readTime: "8 мин",
    category: "Объекты",
    slug: "garazh-iz-metallokonstrukcij",
  },
  {
    id: 302,
    title: "Освещение в ангаре и на складе: нормы, расчёт, LED",
    excerpt:
      "Нормы освещённости по СНиП, расчёт мощности, выбор LED-светильников, светопрозрачные вставки в кровле. Полное руководство по освещению промышленных зданий.",
    image: "/articles/ventilators.jpg",
    date: "20 июня 2026",
    readTime: "7 мин",
    category: "Инженерия",
    slug: "osveshchenie-v-angare",
  },
  {
    id: 303,
    title: "Ворота для ангара: какие выбрать и сколько стоят",
    excerpt:
      "Распашные, откатные, секционные, рулонные и скоростные ворота: сравнение цен, размеров и сферы применения. Какие ворота подойдут для склада, цеха и СТО.",
    image: "/articles/sandwich.jpg",
    date: "20 июня 2026",
    readTime: "8 мин",
    category: "Технологии",
    slug: "vorota-dlya-angara",
  },
  {
    id: 304,
    title: "Полы в ангаре: бетон, армирование, упрочнители",
    excerpt:
      "Толщина бетонной плиты, армирование, топпинг и эпоксидные покрытия. Расчёт нагрузок от стеллажей и техники, стоимость м² промышленного пола.",
    image: "/articles/stroitelnaya-ploshadka.jpg",
    date: "20 июня 2026",
    readTime: "9 мин",
    category: "Технологии",
    slug: "poly-v-angare",
  },
  {
    id: 305,
    title: "Договор на строительство ангара: что должно быть",
    excerpt:
      "Обязательные пункты договора подряда, гарантии, штрафы, приёмка работ. Чек-лист для проверки договора с подрядчиком и защиты заказчика.",
    image: "/articles/kak-vybrat-podryadchika-metallokonstrukcii.jpg",
    date: "19 июня 2026",
    readTime: "10 мин",
    category: "Советы заказчику",
    slug: "dogovor-na-stroitelstvo-angara",
  },
  {
    id: 306,
    title: "Профнастил или сэндвич-панели для ангара",
    excerpt:
      "Сравниваем профнастил и сэндвич-панели для стен и кровли ангара. Цена, теплоизоляция, срок службы, монтаж. Когда какой материал выгоднее.",
    image: "/articles/sandwich.jpg",
    date: "19 июня 2026",
    readTime: "8 мин",
    category: "Материалы",
    slug: "profnastil-ili-sendvich-paneli-dlya-angara",
  },
  {
    id: 307,
    title: "Реконструкция и расширение ангара: как сделать",
    excerpt:
      "Пристройка к ангару, увеличение высоты, замена кровли, усиление каркаса. Этапы реконструкции металлоконструкций без остановки производства.",
    image: "/articles/montazh-metallokonstrukcij-hero.jpg",
    date: "19 июня 2026",
    readTime: "9 мин",
    category: "Строительство",
    slug: "rekonstrukciya-i-rasshirenie-angara",
  },
  {
    id: 308,
    title: "Зернохранилище из ЛСТК: типы и проектирование",
    excerpt:
      "Силосы, напольные склады, элеваторы из ЛСТК. Расчёт объёма хранения, вентиляция, термометрия, погрузо-разгрузочное оборудование, цены.",
    image: "/articles/angar-dlya-selskogo-hozyajstva.jpg",
    date: "19 июня 2026",
    readTime: "10 мин",
    category: "Объекты",
    slug: "zernohranilishche-iz-lstk",
  },
  {
    id: 309,
    title: "Автосервис из металлоконструкций: проект и стоимость",
    excerpt:
      "Автосервис на 2-6 постов из ЛСТК под ключ: проектирование, требования к высоте, воротам, инженерным системам. Цены, сроки, типовые планировки.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "19 июня 2026",
    readTime: "9 мин",
    category: "Объекты",
    slug: "avtoservis-iz-metallokonstrukcij",
  },
  {
    id: 310,
    title: "Снеговая нагрузка на кровлю ангара: расчёт",
    excerpt:
      "Снеговые районы РФ, расчёт нагрузки по СП 20, влияние формы кровли. Как избежать обрушения и экономить на металле без потери прочности.",
    image: "/articles/fundament-pod-bystrovozvodimoe-zdanie.jpg",
    date: "19 июня 2026",
    readTime: "8 мин",
    category: "Технологии",
    slug: "snegovaya-nagruzka-na-krovlyu-angara",
  },
  {
    id: 311,
    title: "Производственный цех из ЛСТК под ключ",
    excerpt:
      "Цех из ЛСТК: проект, кран-балки, инженерные сети, отопление, освещение. Сколько стоит и сколько строится производство на 500-3000 м².",
    image: "/articles/metallokonstrukcii-belgorod-proekt.jpg",
    date: "18 июня 2026",
    readTime: "10 мин",
    category: "Объекты",
    slug: "proizvodstvennyj-ceh-iz-lstk-pod-klyuch",
  },
  {
    id: 312,
    title: "Холодный или тёплый ангар: что выбрать",
    excerpt:
      "В чём разница между холодным и тёплым ангаром, во сколько обходится утепление и когда оно окупается. Сравнение по стоимости и эксплуатации.",
    image: "/articles/uteplenie-bystrovozvodimogo-zdaniya.jpg",
    date: "18 июня 2026",
    readTime: "7 мин",
    category: "Технологии",
    slug: "holodnyj-ili-tyoplyj-angar",
  },
  {
    id: 313,
    title: "Ангар под склад: какой выбрать и сколько стоит",
    excerpt:
      "Типы складских ангаров, оптимальные размеры, требования к полу и потолку, цены за м² под ключ. Полное руководство по складскому строительству.",
    image: "/articles/sroki-stroitelstva-angara.jpg",
    date: "18 июня 2026",
    readTime: "9 мин",
    category: "Объекты",
    slug: "angar-pod-sklad-kakoj-vybrat",
  },
  {
    id: 314,
    title: "Стоимость строительства ангара за м² в 2026 году",
    excerpt:
      "Реальные цены на ангары и склады в 2026 году: разбор по типам, регионам и материалам. Что входит в стоимость и от чего она зависит.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "18 июня 2026",
    readTime: "9 мин",
    category: "Советы заказчику",
    slug: "stoimost-stroitelstva-angara-za-m2",
  },
  {
    id: 101,
    title: "Как выбрать участок под строительство ангара: на что обратить внимание",
    excerpt:
      "Категория земли, ВРИ, геология, коммуникации, охранные зоны — разбираем все критерии выбора земельного участка под промышленное здание или склад.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "9 июня 2026",
    readTime: "8 мин",
    category: "Этапы строительства",
    slug: "kak-vybrat-uchastok-pod-angar",
  },
  {
    id: 102,
    title: "Нужно ли разрешение на строительство ангара из металлоконструкций",
    excerpt:
      "Когда нужно разрешение на строительство ангара или склада, а когда достаточно уведомления. Полный порядок согласования и риски самостроя — разбираем по закону.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "9 июня 2026",
    readTime: "9 мин",
    category: "Этапы строительства",
    slug: "razreshenie-na-stroitelstvo-angara",
  },
  {
    id: 103,
    title: "Индивидуальный проект vs типовой: чем отличаются и что выбрать",
    excerpt:
      "В чём разница между типовым и индивидуальным проектом ангара? Когда типовой достаточен, а когда без индивидуального расчёта не обойтись. Плюсы, минусы и риски.",
    image: "/articles/sandwich.jpg",
    date: "9 июня 2026",
    readTime: "8 мин",
    category: "Этапы строительства",
    slug: "individualnyj-proekt-vs-tipovoj",
  },
  {
    id: 1,
    title: "Конструкции из сэндвич-панелей: виды, применение и монтаж",
    excerpt:
      "Разбираем конструкции из сэндвич-панелей: стены, кровля, перегородки. Технология монтажа, типы замков, толщины и сферы применения. Полное руководство 2025.",
    image: "/articles/sandwich.jpg",
    date: "7 июня 2026",
    readTime: "10 мин",
    category: "Материалы",
    slug: "konstrukcii-iz-sendvich-panelej",
  },
  {
    id: 2,
    title: "Большепролётные здания: проекты и технологии строительства",
    excerpt:
      "Проекты большепролётных зданий без колонн: ангары, склады, цеха. Технологии ЛСТК и ферм, расчёт пролётов до 60 м, цены и сроки строительства.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "7 июня 2026",
    readTime: "11 мин",
    category: "Технологии",
    slug: "bolsheproletnye-zdaniya-proekty",
  },
  {
    id: 3,
    title: "Технология ЛСТК в строительстве: преимущества и применение",
    excerpt:
      "Технология ЛСТК (лёгкие стальные тонкостенные конструкции): принципы, профили, преимущества перед традиционным строительством. Области применения ЛСТК в 2025 году.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "7 июня 2026",
    readTime: "9 мин",
    category: "Технологии",
    slug: "tehnologiya-lstk",
  },
  {
    id: 4,
    title: "ЛСТК или горячекатаный прокат: что выбрать для склада?",
    excerpt:
      "Сравниваем два подхода к строительству складских помещений — лёгкие стальные конструкции и традиционный горячекатаный каркас. Плюсы, минусы и когда какой вариант выгоднее.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "28 мая 2026",
    readTime: "7 мин",
    category: "Технологии",
    slug: "lstk-vs-goryachekatanyj-prokat",
  },
  {
    id: 2,
    title: "Как подготовить площадку под быстровозводимое здание",
    excerpt:
      "Пошаговая инструкция: от геологических изысканий до устройства фундамента. Какие ошибки допускают заказчики и как их избежать.",
    image: "/articles/stroitelnaya-ploshadka.jpg",
    date: "15 мая 2026",
    readTime: "5 мин",
    category: "Строительство",
    slug: "podgotovka-ploshchadki",
  },
  {
    id: 3,
    title: "Сэндвич-панели: обзор материалов и толщин",
    excerpt:
      "Разбираем типы наполнителей (минвата, ПИР, пенополистирол), рекомендованные толщины для разных регионов и климатических зон.",
    image: "/articles/sandwich.jpg",
    date: "2 мая 2026",
    readTime: "6 мин",
    category: "Материалы",
    slug: "sendvich-paneli-obzor",
  },
  {
    id: 4,
    title: "Вентиляция в производственных зданиях из металлоконструкций",
    excerpt:
      "Как правильно организовать воздухообмен в цехах и складах. Нормы СНиП, типы систем и практические решения.",
    image: "/articles/ventilators.jpg",
    date: "18 апреля 2026",
    readTime: "8 мин",
    category: "Инженерия",
    slug: "ventilyaciya-v-proizvodstvennyh-zdaniyah",
  },
  {
    id: 5,
    title: "5 причин выбрать ЛСТК для промышленного строительства",
    excerpt:
      "Почему лёгкие стальные тонкостенные конструкции выигрывают у традиционных материалов: скорость, экономия, надёжность и экологичность.",
    image: "/articles/5-variants-lstk.jpg",
    date: "5 апреля 2026",
    readTime: "8 мин",
    category: "Технологии",
    slug: "preimushchestva-lstk-stroitelstva",
  },
  {
    id: 6,
    title: "Антикоррозийная защита металлоконструкций: методы и сроки",
    excerpt:
      "Горячее цинкование, порошковая окраска, грунт-эмали — сравниваем стоимость, долговечность и применимость для разных условий эксплуатации.",
    image: "/articles/anticorossion-def.jpg",
    date: "20 марта 2026",
    readTime: "6 мин",
    category: "Технологии",
    slug: "antikorrozijnaya-zashchita",
  },
  {
    id: 7,
    title: "Что такое ЛСТК: полный разбор технологии",
    excerpt:
      "ЛСТК — лёгкие стальные тонкостенные конструкции. Простым языком о том, из чего состоит технология, где применяется и чем отличается от кирпича, бетона и дерева.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "4 июня 2026",
    readTime: "7 мин",
    category: "Технологии",
    slug: "chto-takoe-lstk",
  },
  {
    id: 8,
    title: "Фундамент под быстровозводимое здание: как выбрать и не ошибиться",
    excerpt:
      "Свайный, ленточный, плита — разбираем типы фундаментов под металлокаркас, критерии выбора по грунту и типичные ошибки, которые стоят дороже всего.",
    image: "/articles/fundament-pod-bystrovozvodimoe-zdanie.jpg",
    date: "4 июня 2026",
    readTime: "8 мин",
    category: "Строительство",
    slug: "fundament-pod-bystrovozvodimoe-zdanie",
  },
  {
    id: 9,
    title: "Сроки строительства ангара: реальные цифры по этапам",
    excerpt:
      "Сколько времени занимает каждый этап — проектирование, производство, фундамент, монтаж. Что замедляет стройку и как сократить общий срок без потери качества.",
    image: "/articles/sroki-stroitelstva-angara.jpg",
    date: "4 июня 2026",
    readTime: "6 мин",
    category: "Строительство",
    slug: "sroki-stroitelstva-angara",
  },
  {
    id: 10,
    title: "Как выбрать подрядчика для строительства из металлоконструкций",
    excerpt:
      "Чеклист для заказчика: как проверить юрлицо, оценить опыт, что спросить у менеджера и какие пункты договора нельзя игнорировать.",
    image: "/articles/kak-vybrat-podryadchika-metallokonstrukcii.jpg",
    date: "4 июня 2026",
    readTime: "7 мин",
    category: "Советы заказчику",
    slug: "kak-vybrat-podryadchika-metallokonstrukcii",
  },
  {
    id: 11,
    title: "Металлоконструкции в Белгороде: от заказа до сдачи объекта",
    excerpt:
      "Полный разбор процесса строительства изнутри: этапы, реальные сроки, типичные проблемы и лайфхаки от практикующих инженеров с 14-летним опытом работы в регионе.",
    image: "/articles/metallokonstrukcii-belgorod.jpg",
    date: "5 июня 2026",
    readTime: "12 мин",
    category: "Строительство",
    slug: "metallokonstrukcii-belgorod",
  },
  {
    id: 12,
    title: "Ангар для сельского хозяйства: виды, размеры, требования",
    excerpt:
      "Зернохранилища, коровники, птичники, навесы — какие конструктивные решения применяются в АПК и чем сельхозангар отличается от промышленного.",
    image: "/articles/angar-dlya-selskogo-hozyajstva.jpg",
    date: "5 июня 2026",
    readTime: "7 мин",
    category: "Строительство",
    slug: "angar-dlya-selskogo-hozyajstva",
  },
  {
    id: 12,
    title: "Утепление быстровозводимого здания: нормы и практика",
    excerpt:
      "Какой слой утеплителя нужен для отапливаемого склада, цеха или СТО. Расчёт по СП 50, типичные ошибки монтажа и как они влияют на теплопотери.",
    image: "/articles/uteplenie-bystrovozvodimogo-zdaniya.jpg",
    date: "5 июня 2026",
    readTime: "8 мин",
    category: "Материалы",
    slug: "uteplenie-bystrovozvodimogo-zdaniya",
  },
  {
    id: 13,
    title: "Пожарная безопасность металлических зданий: требования и решения",
    excerpt:
      "Огнезащитная обработка металлоконструкций, классы огнестойкости, требования МЧС — что нужно знать ещё на этапе проектирования.",
    image: "/articles/pozharnaya-bezopasnost-metallicheskih-zdanij.jpg",
    date: "5 июня 2026",
    readTime: "6 мин",
    category: "Безопасность",
    slug: "pozharnaya-bezopasnost-metallicheskih-zdanij",
  },
  {
    id: 401,
    title: "Ангар 20×40 м: проект, стоимость, сроки",
    excerpt:
      "Типовой проект ангара 20×40 м: площадь 800 м², каркас ЛСТК, кровля и стены. Сколько стоит построить под ключ в 2026 году, какой фундамент выбрать, сроки монтажа.",
    image: "/articles/sroki-stroitelstva-angara.jpg",
    date: "21 июня 2026",
    readTime: "8 мин",
    category: "Объекты",
    slug: "angar-20-na-40",
  },
  {
    id: 402,
    title: "Ангар 12×24 м: цена под ключ и что в неё входит",
    excerpt:
      "Небольшой ангар 12×24 м — самый популярный размер для мастерской, автосервиса, малого склада. Разбираем состав работ, материалы и цену под ключ.",
    image: "/articles/metallokonstrukcii-belgorod-proekt.jpg",
    date: "21 июня 2026",
    readTime: "7 мин",
    category: "Объекты",
    slug: "angar-12-na-24",
  },
  {
    id: 403,
    title: "Кран-балка в ангаре: установка, расчёт, стоимость",
    excerpt:
      "Как встроить кран-балку в металлокаркасный ангар: подкрановые балки, грузоподъёмность 1–10 т, высота подъёма. Расчёт нагрузок, цены на установку.",
    image: "/articles/montazh-fermy-vysota.jpg",
    date: "21 июня 2026",
    readTime: "9 мин",
    category: "Инженерия",
    slug: "kran-balka-v-angare",
  },
  {
    id: 404,
    title: "Отопление ангара и склада: способы и стоимость",
    excerpt:
      "Газовое, дизельное, электрическое отопление ангара. Тепловые завесы, тепловые пушки, водяной контур. Что выгоднее при разных площадях и режимах работы.",
    image: "/articles/uteplenie-bystrovozvodimogo-zdaniya.jpg",
    date: "21 июня 2026",
    readTime: "9 мин",
    category: "Инженерия",
    slug: "otoplenie-angara-i-sklada",
  },
  {
    id: 405,
    title: "Птичник из металлоконструкций: требования и проектирование",
    excerpt:
      "Строительство птичников из ЛСТК для кур, бройлеров, индеек. Вентиляция, освещение, утепление, нормы посадки. Типовые размеры и стоимость под ключ.",
    image: "/articles/angar-dlya-selskogo-hozyajstva.jpg",
    date: "21 июня 2026",
    readTime: "9 мин",
    category: "Сельхозздания",
    slug: "ptichnik-iz-metallokonstrukcij",
  },
  {
    id: 406,
    title: "Склад класса А и Б: требования к зданию",
    excerpt:
      "Что такое склад класса А, А+, Б, В: высота потолков, полы, ворота, доки, пожарная безопасность. Как построить склад нужного класса из металлоконструкций.",
    image: "/articles/kak-vybrat-podryadchika-metallokonstrukcii.jpg",
    date: "21 июня 2026",
    readTime: "8 мин",
    category: "Объекты",
    slug: "sklad-klassa-a-i-b",
  },
  {
    id: 407,
    title: "Быстровозводимые здания: что это и как строятся",
    excerpt:
      "Что такое быстровозводимые здания, из чего состоят, сколько строятся. Сравнение технологий: арочные ангары, ЛСТК, модульные конструкции. Плюсы и минусы каждого типа.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "21 июня 2026",
    readTime: "8 мин",
    category: "Технологии",
    slug: "bystrovozvodimye-zdaniya",
  },
  {
    id: 408,
    title: "Металлоконструкции для склада: как рассчитать и заказать",
    excerpt:
      "Как рассчитать металлоконструкции для склада самостоятельно: нагрузки, шаг рам, высота. Что входит в комплект, как читать КМД и на что смотреть при приёмке.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "21 июня 2026",
    readTime: "10 мин",
    category: "Советы заказчику",
    slug: "metallokonstrukcii-dlya-sklada",
  },
  {
    id: 409,
    title: "Свинарник из ЛСТК: проектирование и строительство",
    excerpt:
      "Свинарники из лёгких металлоконструкций: вентиляция, навозоудаление, утепление полов, зонирование. Типовые размеры, цены, сроки строительства под ключ.",
    image: "/articles/angar-dlya-selskogo-hozyajstva.jpg",
    date: "21 июня 2026",
    readTime: "9 мин",
    category: "Сельхозздания",
    slug: "svinarnik-iz-lstk",
  },
  {
    id: 410,
    title: "Навес из металлоконструкций: виды, цены, монтаж",
    excerpt:
      "Навесы из металлоконструкций для парковки, техники, производства, торговли. Односкатные, двускатные, арочные, консольные. Стоимость м² и сроки установки.",
    image: "/articles/stroitelnaya-ploshadka.jpg",
    date: "21 июня 2026",
    readTime: "7 мин",
    category: "Объекты",
    slug: "naves-iz-metallokonstrukcij",
  },
  {
    id: 14,
    title: "Монтаж металлоконструкций: 10 типичных ошибок и способы их избежать",
    excerpt:
      "Технология монтажа металлоконструкций: типичные ошибки при монтаже колонн и ферм, контроль качества, приёмка металлоконструкций. Практические советы по монтажу металлического каркаса и ангаров.",
    image: "/articles/montazh-metallokonstrukcij-hero.jpg",
    date: "5 июня 2026",
    readTime: "12 мин",
    category: "Строительство",
    slug: "montazh-metallokonstrukcij-oshibki",
  },
];

const categories = ["Все", ...new Set(articles.map(a => a.category))];

export default function ArticlesPage() {
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredArticles = selectedCategory === "Все" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          На главную
        </Link>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Статьи и руководства
          </h1>
          <p className="mt-4 text-base text-muted max-w-lg leading-relaxed">
            Полезные материалы о строительстве из металлоконструкций: технологии,
            материалы, расчёты, практический опыт.
          </p>
        </motion.div>

        {/* Табы с категориями */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}/`}
              className="block"
            >
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-lg border border-border bg-white hover:border-accent-blue/30 transition-all duration-300 overflow-hidden cursor-pointer h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent-blue transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} weight="bold" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} weight="bold" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
