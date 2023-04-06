import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { Animated } from "react-animated-css";
import { TypeAnimation } from "react-type-animation";

function TextBlock(props) {
  return (
    <TypeAnimation
      sequence={[
        props.text,
        () => {
          props.onTextTypeEnd();
        }
      ]}
      wrapper="p"
      cursor={false}
      speed={{type: "keyStrokeDelayInMs", value: 5}}
    />
  );
}

function AboutMeSection() {
  const sectionRef = useRef(null);
  const texts = useMemo(() => {
    return [
      "Решение о выборе специальности было предсказано с пеленок. Как и полагается дочери стоматологов в 4 поколении, все детство я проводила в стоматологических клиникаю.",
      "В 2015 году, с целью практики языка и более глубокого осваивании предметов я изучала Биологию, Химию и Математику в Великобритании-Wycliffe college, Stonehouse, Gloucesterhire на курсе Year 12.",
      "Параллельно с обучением в университете, я активно участвовала в студенческой жизни, посещала курсы, мастер классы, являлась ассистентом представителя и лектора международной компании Dentsply Sirona в Украине Попова Романа Викторовича, изучала литературу и вебинары по темам ортопедическая и терапевтическая стоматология, практиковала навыки на фантомах с использованием разных материалов для изучения их особенностей.",
      "Как человек активный, коммуникабельный, целеустремленный, я всегда рада обучаться чему-то новому, общаться с интересными людьми, беседовать с коллегами, помогать в работе, совершенствовать мануальные навыки."
    ];
  }, []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);
  const [isKissVisible, setIsKissVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (typingStarted) {
        return;
      }

      const sectionTop = sectionRef.current.offsetTop
      const userPosition = window.scrollY + (window.innerHeight / 2);

      if (userPosition > sectionTop) {
        setTypingStarted(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [typingStarted]);

  const renderedTexts = useMemo(() => {
    if (!typingStarted) {
      return [];
    }

    if (currentTextIndex >= texts.length) {
      setIsKissVisible(true)
    }

    let textBlocks = [];
    const maxI = Math.min(texts.length, currentTextIndex + 1);

    for (let i = 0; i < maxI; i++) {
      textBlocks.push(
        <TextBlock text={texts[i]} key={i} onTextTypeEnd={() => {setCurrentTextIndex(currentTextIndex + 1)}} />
      );
    }

    return textBlocks;
  }, [typingStarted, texts, currentTextIndex]);

  return (
    <div className="about-me-section" id="about-me-section" ref={sectionRef}>
      <div className="shadow-top"></div>
      <div className="content wrapper">
        <h2 className="title">Обо мне</h2>
        {renderedTexts}
      </div>
      <Animated className="kiss-outer"
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInDelay={700}
        isVisible={isKissVisible}
      >
        <img src={require("../assets/about-section/kiss.png")} alt="kiss" />
      </Animated>
      <div className="shadow-bottom"></div>
    </div>
  );
}

export default AboutMeSection;
