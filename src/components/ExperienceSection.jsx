import { useMemo } from "react";
import ListBlock from "./blocks/ListBlock";

function ItemBox({ data, collapsed }) {
  return (
    <div className="item-box">
      <div className="column">
        <span className="period">{data.period}</span>
        <span className="place">{data.place}</span>
        <span className="item-title">{data.title}</span>
      </div>
      <div className="item-expand-btn--outer">
        <div className={`item-expand-btn ${collapsed ? 'collapsed' : ''}`}></div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const skills = useMemo(() => [
    {
      period: '2019-2022',
      place: '“Art Smile” и “Ligatura”, г.Киев',
      title: 'Ассистент стоматолога',
      list: [
        'работа с врачом в 4-е руки',
        'подготовка рабочего места',
        'инвентаризация инструментов, материалов',
        'заполнение медицинских карточек',
        'проведение рентген снимков(КТ, ортопантомограмм, прицельных снимков)',
        'получение цифровых оттисков на 3Д сканере',
      ]
    },
    {
      period: '2021',
      place: 'Отделения челюстно-лицевой хирургии',
      title: 'Медсестра',
      list: [
        'транспортировка, сопровождение пациента в палату',
        'изучение общего гигиенического состояние пациента',
        'сбор анамнеза',
        'обход пациентов, сообщение об изменениях в состоянии здоровья пациентов',
        'проведение внутримышечных и внутривенных инъекций',
        'наложение и снятия швов',
        'типичное удаление зубов',
      ]
    },
    {
      period: '2021-2023',
      place: '“Ligatura”, г.Киев',
      title: 'стоматолог-терапевт/ортопед, стоматолог общего приема ',
      list: [
        'осмотр первичных пациентов',
        'проведение фотопротокола',
        'проведение профессиональной гигиены полости рта (Cavitron/ультразвук+ порошок Air Flow, кюретаж)',
        'проведение отбеливания системой Beyond,Magic Smile',
        'замена старых реставраций на новые',
        'проведение местной и проводниковой анестезий',
        'лечение кариозных поражений зубов',
        'снятие швов',
        'антисептическая обработка слизистых после хирургических вмешательств',
        'препарирование зубов под несъемное протезирование',
        'фиксация несъемных конструкций',
        'художественные реставрации зубов'
      ]
    },
  ], []);

  return (
    <section className="section experience-section" id="experience-section">
      {/* <div className="shadow-top"></div> */}
      <div className="content">
        <h2 className="title wrapper">Опыт работы</h2>
        <ListBlock items={skills} ItemBox={ItemBox} />
      </div>
      {/* <div className="shadow-bottom"></div> */}
    </section>
  )
}

export default ExperienceSection;
