
interface HistoricalEvent {
  year: number;
  event: string;
}

interface HistoricalData {
  fromYear: number;
  toYear: number;
  events: HistoricalEvent[];
}


export const historicalData: HistoricalData[] = [
  {
    fromYear: 1987,
    toYear: 1991,
    events: [
      {
        year: 1987,
        event: "В 1987 году Михаил Горбачев объявил о политике гласности.",
      },
      {
        year: 1988,
        event: "В 1988 году начался вывод советских войск из Афганистана.",
      },
      { year: 1989, event: "В 1989 году произошло падение Берлинской стены." },
      {
        year: 1990,
        event: "В 1990 году Михаил Горбачев получил Нобелевскую премию мира.",
      },
      { year: 1991, event: "В 1991 году распался Советский Союз." },
    ],
  },
  {
    fromYear: 1992,
    toYear: 1997,
    events: [
      {
        year: 1992,
        event: "В 1992 году была введена рыночная экономика в России.",
      },
      {
        year: 1993,
        event:
          "В 1993 году произошел политический кризис и расстрел Белого дома.",
      },
      { year: 1994, event: "В 1994 году началась первая чеченская война." },
      {
        year: 1995,
        event: "В 1995 году завершился конфликт в Боснии и Герцеговине.",
      },
      {
        year: 1996,
        event: "В 1996 году Борис Ельцин был переизбран президентом России.",
      },
      {
        year: 1997,
        event:
          "В 1997 году был подписан договор о дружбе между Россией и Украиной.",
      },
    ],
  },
  {
    fromYear: 1999,
    toYear: 2004,
    events: [
      {
        year: 1999,
        event:
          "В 1999 году Владимир Путин был назначен премьер-министром России.",
      },
      {
        year: 2000,
        event:
          "В 2000 году Владимир Путин стал президентом России после выборов.",
      },
      { year: 2001, event: "В 2001 году произошел теракт 11 сентября в США." },
      {
        year: 2002,
        event: "В 2002 году произошел захват театра на Дубровке в Москве.",
      },
      {
        year: 2003,
        event: "В 2003 году началась война в Ираке под руководством США.",
      },
      {
        year: 2004,
        event: "В 2004 году произошел теракт в Беслане в Северной Осетии.",
      },
    ],
  },
  {
    fromYear: 2005,
    toYear: 2010,
    events: [
      {
        year: 2005,
        event:
          "В 2005 году Россия праздновала 60-летие Победы во Второй мировой войне.",
      },
      {
        year: 2006,
        event: "В 2006 году произошло убийство журналистки Анны Политковской.",
      },
      {
        year: 2007,
        event:
          "В 2007 году Россия возобновила стратегическое патрулирование бомбардировщиков.",
      },
      {
        year: 2008,
        event: "В 2008 году произошел конфликт между Россией и Грузией.",
      },
      {
        year: 2009,
        event: "В 2009 году в России вступил в силу договор СНВ-1 с США.",
      },
      {
        year: 2010,
        event:
          "В 2010 году произошли пожары, охватившие большие территории России.",
      },
    ],
  },
  {
    fromYear: 2011,
    toYear: 2014,
    events: [
      {
        year: 2011,
        event:
          "В 2011 году начались массовые протесты после парламентских выборов в России.",
      },
      {
        year: 2012,
        event: "В 2012 году Владимир Путин снова стал президентом России.",
      },
      {
        year: 2013,
        event: "В 2013 году Эдвард Сноуден получил убежище в России.",
      },
      { year: 2014, event: "В 2014 году Россия аннексировала Крым." },
    ],
  },
  {
    fromYear: 2015,
    toYear: 2022,
    events: [
      {
        year: 2015,
        event: "В 2015 году Россия начала военную операцию в Сирии.",
      },
      {
        year: 2016,
        event:
          "В 2016 году был проведен референдум о выходе Великобритании из ЕС.",
      },
      {
        year: 2017,
        event: "В 2017 году Россия отметила 100-летие Октябрьской революции.",
      },
      {
        year: 2018,
        event: "В 2018 году в России прошел чемпионат мира по футболу.",
      },
      {
        year: 2019,
        event: "В 2019 году в Сибири произошли масштабные лесные пожары.",
      },
      { year: 2020, event: "В 2020 году началась пандемия COVID-19." },
      {
        year: 2021,
        event: "В 2021 году прошли выборы в Государственную думу России.",
      },
      { year: 2022, event: "В 2022 году начался конфликт на Украине." },
    ],
  },
];
