import { useMemo } from 'react';
import { ReactComponent as LogoImage } from '../assets/education-section/logo-black.svg';

function EducationSection() {
  const educationItems = useMemo(() => [
    {
      period: '2016-2021',
      desc: 'Национальный медицинский университет имени О.О.Богомольца в г.Киев'
    },
    {
      period: 'C 2021',
      desc: 'поступила на интернатуру при университете имени О.О.Богомольца'
    },
  ], []);

  const renderedList = educationItems.map((education, index) => {
    return (
      <li key={index} className='education-list--item'>
        <span className='period'>{education.period}</span>
        <span className='desc'>{education.desc}</span>
      </li>
    );
  }, educationItems);

  return (
    <section className="section alt education-section wrapper" id="education-section">
      {/* <div className="shadow-top"></div> */}
      <div className="content">
        <h2 className="title">Образование</h2>
        <div className="university">
          <a className='university-logo--outer' href='https://nmuofficial.com/' target='_blank' rel="noreferrer">
            <LogoImage className='university-logo' alt="university logo" />
          </a>
          <ul className='education-list'>
            {renderedList}
          </ul>
        </div>
      </div>
      {/* <div className="shadow-bottom"></div> */}
    </section>
  );
}

export default EducationSection;
