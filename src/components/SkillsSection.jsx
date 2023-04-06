import { useCallback, useMemo, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import useEventOnScroll from "../hooks/useEventOnScroll";

function Skill({ data }) {
  const skillRef = useRef(null);
  const sublistRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEventOnScroll(skillRef, () => {
    setIsVisible(true);
  }, window.innerHeight);

  const onExpandBtnClick = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const skillsSublist = useMemo(() => {
    return data.list && data.list.map((subskill, index) => {
      return (
        <li key={index}>
          <span className="subskill-title">{subskill}</span>
        </li>
      );
    });
  }, [data]);

  if (typeof data === 'object') {
    const sublistElement = sublistRef.current && sublistRef.current.children[0];
    const sublistHeight = (collapsed && sublistElement.offsetHeight) || 0;

    return (
      <li className="skill wrapper clickable" ref={skillRef} onClick={onExpandBtnClick}>
        {isVisible ? <>
          <div className="skill-box">
            <TypeAnimation className="skill-title"
              sequence={[
                data.title
              ]}
              wrapper="span"
              cursor={false}
              speed={{ type: "keyStrokeDelayInMs", value: 15 }}
            />
            <div className="skill-expand-btn--outer">
              <div className={`skill-expand-btn ${collapsed ? 'collapsed' : ''}`}></div>
            </div>
          </div>
          <div className="skill-sublist--outer" ref={sublistRef} style={{ height: sublistHeight }}>
            <ul className="skill-sublist">
              {skillsSublist}
            </ul>
          </div>
        </> : null}
      </li>
    )
  } else if (typeof data === 'string') {
    return (
      <li className="skill wrapper" ref={skillRef}>
        {isVisible ? <TypeAnimation className="skill-title"
          sequence={[
            data
          ]}
          wrapper="span"
          cursor={false}
          speed={{ type: "keyStrokeDelayInMs", value: 15 }}
        /> : null}
      </li>
    )
  }
  return null;
}

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

  const renderedSkills = useMemo(() => {
    return skills.map((skillData, index) => {
      return <Skill data={skillData} key={index} is />
    });
  }, [skills]);

  return (
    <section className="section skills-section" id="skills-section">
      <div className="shadow-top"></div>
      <div className="content">
        <h2 className="title wrapper">Навыки</h2>
        <ul className="skills">
          {renderedSkills}
        </ul>
      </div>
      <div className="shadow-bottom"></div>
    </section>
  )
}

export default SkillsSection;