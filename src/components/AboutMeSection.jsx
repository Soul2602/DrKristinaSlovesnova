import { useState, useRef, useMemo } from "react";
import { Animated } from "react-animated-css";
import useEventOnScroll from "../hooks/useEventOnScroll";

function TextBlock(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEventOnScroll(ref, () => {
    setIsVisible(true);
  }, window.innerHeight);

  return (
    <Animated isVisible={isVisible} animationIn="fadeInLeft" animationOut="fadeOutLeft">
      <p ref={ref}>{props.text}</p>
    </Animated>
  );
}

function AboutMeSection() {
  const sectionRef = useRef(null);
  // const kissRef = useRef(null);
  const texts = useMemo(() => {
    return [
      "Решение о выборе специальности было предсказано с пеленок. Как и полагается дочери стоматологов в 4 поколении, все детство я проводила в стоматологических клиникаю.",
      "В 2015 году, с целью практики языка и более глубокого осваивании предметов я изучала Биологию, Химию и Математику в Великобритании-Wycliffe college, Stonehouse, Gloucesterhire на курсе Year 12.",
      "Параллельно с обучением в университете, я активно участвовала в студенческой жизни, посещала курсы, мастер классы, являлась ассистентом представителя и лектора международной компании Dentsply Sirona в Украине Попова Романа Викторовича, изучала литературу и вебинары по темам ортопедическая и терапевтическая стоматология, практиковала навыки на фантомах с использованием разных материалов для изучения их особенностей.",
      "Как человек активный, коммуникабельный, целеустремленный, я всегда рада обучаться чему-то новому, общаться с интересными людьми, беседовать с коллегами, помогать в работе, совершенствовать мануальные навыки."
    ];
  }, []);
  // const [isKissVisible, setIsKissVisible] = useState(false);

  // useEventOnScroll(kissRef, () => {
  //   setIsKissVisible(true);
  // }, window.innerHeight);

  const renderedTexts = useMemo(() => {
    return texts.map((text, index) => <TextBlock text={text} key={index} />)
  }, [texts]);

  return (
    <section className="section about-me-section" id="about-me-section" ref={sectionRef}>
      <div className="shadow-top"></div>
      <div className="content wrapper">
        <h2 className="title">Обо мне</h2>
        {renderedTexts}
      </div>
      {/* <Animated className="kiss-outer"
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInDelay={700}
        isVisible={isKissVisible}
      >
        <img src={require("../assets/about-section/kiss.png")} alt="kiss" ref={kissRef} />
      </Animated> */}
      <div className="shadow-bottom"></div>
    </section>
  );
}

export default AboutMeSection;
