import { useMemo } from "react";
import ListBlock from "./blocks/ListBlock";
import { ReactComponent as ArrowRightImage } from "../assets/arrow-right.svg";

function ItemBox({ data, collapsed }) {
  return (
    <div className="item-box">
      <div className="column">
        <span className="item-title">{data.title}</span>
        {data.link ?
          <a href={data.link} className="item-link--outer" target="_blank" rel="noreferrer">
            <span className="item-link">{data.linkText}</span>
            <ArrowRightImage className="link-arrow" />
          </a>
          :
          <div className="item-link--outer">
            <span className="item-link">{data.linkText}</span>
          </div>
        }

      </div>
    </div>
  );
}

function CompletedCoursesSection() {
  const courses = useMemo(() => [
    {
      title: "Первичная эндодонтия",
      link: "https://www.instagram.com/vesna_vitaliy/",
      linkText: "Весна В"
    },
    {
      title: "Повторная эндодонтия",
      link: "https://www.dentsplysirona.com/ru-ru",
      linkText: "Попов Р.В, Densply Sirona"
    },
    {
      title: "Основы гнатологии",
      link: "https://pro.docos.one",
      linkText: "Лысейко Н.В, Професійна платформа"
    },
    {
      title: "Основы гигиенического приёма",
      link: "https://amelit.com.ua/ua/",
      linkText: "Кайгородова Е.О, Amelit"
    },
    {
      title: "Первая медицинская помощь",
      linkText: "Ярослав Вус"
    },
    {
      title: "Художественная реставрация зубов. Авторская стоматология",
      linkText: "Радлинский С.В, Аполлония"
    },
    {
      title: "Терапия. Цифровая стоматология. Имплантология. Протезирование",
      link: "https://www.dentsplysirona.com/ru-ru",
      linkText: "конференция Densply Sirona"
    },
    {
      title: "Прямая реставрация. Восстановление первичного дизайна улыбки",
      link: "https://www.instagram.com/bogachuk.dental.clinic/",
      linkText: "Богачук, онлайн-вебинар"
    },
    {
      title: "Реставрации фронтальной группы зубов",
      link: "https://albaapex.com/doctors/shherbakov-viktor-vladimirovich/",
      linkText: "Щербаков, онлайн-вебинар"
    },
    {
      title: "Реставрации жевательной группы зубов",
      link: "https://www.instagram.com/dr.karpenko/",
      linkText: "Карпенко, онлайн-вебинар"
    },
  ], []);

  return (
    <section className="section completed-courses-section" id="completed-courses-section">
      <div className="content">
        <h2 className="title wrapper">Пройденые курсы</h2>
        <ListBlock items={courses} ItemBox={ItemBox} />
      </div>
    </section>
  )
}

export default CompletedCoursesSection;