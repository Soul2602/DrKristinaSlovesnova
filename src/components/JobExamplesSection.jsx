import { useCallback, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";

function JobExamplesSection() {
  const images = useMemo(() => {
    let images = [];

    for (let i = 1; i <= 4; i++) {
      images.push({
        before: require(`../assets/job-examples/before-${i}.jpeg`),
        after: require(`../assets/job-examples/after-${i}.jpeg`),
      });
    }

    return images;
  }, []);
  const [showAfter, setShowAfter] = useState(() => {
    let activeImages = [];

    for (let i = 0; i < images.length; i++) {
      activeImages.push(false);
    }

    return activeImages;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderedSlides = useMemo(() => {
    return images.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <img className={`before-img before-img--bg ${showAfter[index] ? '' : 'show'}`} src={item.before} alt="before treatment background" />
          <img className={`after-img after-img--bg ${showAfter[index] ? 'show' : ''}`} src={item.after} alt="after treatment background" />

          <img className={`before-img ${showAfter[index] ? '' : 'show'}`} src={item.before} alt="before treatment" />
          <img className={`after-img ${showAfter[index] ? 'show' : ''}`} src={item.after} alt="after treatment" />
        </SwiperSlide>
      );
    });
  }, [images, showAfter]);

  const renderedThumbs = useMemo(() => {
    return images.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <img className="thumb-img" src={item.after} alt="thumb" />
        </SwiperSlide>
      )
    });
  }, [images]);

  const setCurrentShowAfter = useCallback((value) => {
    let newShowAfter = [...showAfter];
    newShowAfter[currentIndex] = value;
    setShowAfter(newShowAfter);
  }, [showAfter, currentIndex]);

  return (
    <section className="section job-examples-section" id="job-examples-section">
      <div className="content">
        <h2 className="title wrapper">Примеры работ</h2>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="job-examples-section-slider--thumbs"
        >
          {renderedThumbs}
        </Swiper>
        <Swiper className='job-examples-section-slider'
          onSlideChange={(swiper) => { setCurrentIndex(swiper.activeIndex) }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Thumbs, EffectCreative]}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          {renderedSlides}
        </Swiper>
      </div>
      <div className="switch--outer">
        <span className={`before clickable ${showAfter[currentIndex] ? "" : "selected"}`} onClick={() => { setCurrentShowAfter(false) }}>ДО</span>
        <span className={`before clickable ${showAfter[currentIndex] ? "selected" : ""}`} onClick={() => { setCurrentShowAfter(true) }}>ПОСЛЕ</span>
      </div>
    </section>
  )
}

export default JobExamplesSection;
