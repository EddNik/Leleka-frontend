import css from './DiaryPage.module.css';
import DiaryList from '@/components/Diary/DiaryList/DiaryList';
import DiaryEntryDetails from '@/components/Diary/DiaryEntryDetails/DiaryEntryDetails';
import GreetingBlock from '@/components/Diary/GreetingBlock/GreetingBlock';
import { Diary } from '@/types/diary';
import EmptyMessage from '@/components/EmptyMessage/EmptyMessage';

const diaries: Diary[] = [
  {
    _id: "65b901a1c9f1a7b201000001",
    title: "Перші відчуття",
    description: "Сьогодні зранку відчула легку нудоту, але водночас було дивне тепло і радість всередині.",
    date: "2025-01-01",
    emotions: [
      { _id: "e5", title: "Нудота" },
      { _id: "e8", title: "Радість" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000002",
    title: "Більше любові",
    description: "Весь день відчувала сильну любов до малюка, хоч він ще зовсім маленький.",
    date: "2025-01-02",
    emotions: [
      { _id: "e2", title: "Любов" },
      { _id: "e9", title: "Щастя" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000003",
    title: "Дивні смаки",
    description: "Захотілося солоних огірків з медом — ніколи такого раніше не було.",
    date: "2025-01-03",
    emotions: [
      { _id: "e3", title: "Дивні бажання" },
      { _id: "e7", title: "Апетит" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000004",
    title: "Енергійний день",
    description: "Було багато енергії, зробила багато справ і відчувала підйом.",
    date: "2025-01-04",
    emotions: [
      { _id: "e4", title: "Енергія" },
      { _id: "e8", title: "Радість" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000005",
    title: "Тривожні думки",
    description: "Трохи хвилювалась за майбутнє, але намагалась заспокоїтись.",
    date: "2025-01-05",
    emotions: [
      { _id: "e6", title: "Тривога" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000006",
    title: "Сильний апетит",
    description: "Сьогодні хотілось їсти частіше, ніж зазвичай.",
    date: "2025-01-06",
    emotions: [
      { _id: "e7", title: "Апетит" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000007",
    title: "Спокій і радість",
    description: "Відчувала гармонію і спокій, день був дуже приємний.",
    date: "2025-01-07",
    emotions: [
      { _id: "e8", title: "Радість" },
      { _id: "e9", title: "Щастя" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000008",
    title: "Натхнення",
    description: "Зʼявилось багато ідей, як підготуватися до народження малюка.",
    date: "2025-01-08",
    emotions: [
      { _id: "e1", title: "Натхнення" },
      { _id: "e4", title: "Енергія" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b201000009",
    title: "Втома і нудота",
    description: "До вечора стало трохи погано, але я знаю що це тимчасово.",
    date: "2025-01-09",
    emotions: [
      { _id: "e5", title: "Нудота" },
      { _id: "e6", title: "Тривога" }
    ]
  },
  {
    _id: "65b901a1c9f1a7b20100000a",
    title: "Щасливий день",
    description: "Сьогодні відчула справжнє щастя, думаючи про нашу сімʼю.",
    date: "2025-01-10",
    emotions: [
      { _id: "e9", title: "Щастя" },
      { _id: "e2", title: "Любов" }
    ]
  }
];


export default function Diary() {
  return (
    <section className={css.sectionContainer}>
      <GreetingBlock />
      <div className={css.contentContainer}>
        {diaries.length ?
          <>
            <DiaryList diaries={diaries} />
            <DiaryEntryDetails diary={diaries[0]} className={css.entryDetails} />
          </> : <EmptyMessage message="Наразі записи у щоденнику відсутні" />
        }
      </div>
    </section>
  );
} 
