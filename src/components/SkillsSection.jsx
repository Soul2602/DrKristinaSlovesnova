import { useMemo } from "react";
import ListBlock from "./blocks/ListBlock";


function SkillsSection() {
  const skills = useMemo(() => [
    'cвободное владение английским языком',
    'опыт работы в 4 руки с врачами-стоматологами 4 года',
    'оказание первой медицинской помощи',
    'владение базовыми программами компьютера (Exel, Word, Power Point)',
    'ведение стоматологических карточек в программе Cliniccards',
    {
      title: 'проведение рентген диагностики, а именно:',
      list: [
        'КТ челюстей',
        'суставов',
        'ортопантомограмм',
        'прицельных рентген снимков',
        'анализ рентген снимков'
      ]
    },
    {
      title: 'проведение стоматологического лечение, а именно:',
      list: [
        'профессиональная гигиена полости рта',
        'ортопедическое лечение (полное, частичное съемное протезирование, коронки, виниры, культевые вкладки)',
        'терапевтическое лечение(художественные реставрации)',
        'отбеливание зубов системой Beyond, Magic Smile',
        'проведение местной и проводниковой анестезий'
      ]
    },
    'заполнение медицинских карточек пациентов с составлением плана лечения',
    'навыки работы с 3Д сканером Densply Sirona',
    'проведение фотопротокола'
  ], []);

  return (
    <section className="section skills-section" id="skills-section">
      <div className="shadow-top"></div>
      <div className="content">
        <h2 className="title wrapper">Навыки</h2>
        <ListBlock items={skills} />
      </div>
      {/* <div className="shadow-bottom"></div> */}
    </section>
  )
}

export default SkillsSection;