import { useMemo, useRef, useState } from 'react';
import { Pagination, Controller, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import useScrollToSection from '../hooks/useScrollToSection';

function GallerySection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [gallerySwiper, setGallerySwiper] = useState(null);
  const sectionRef = useRef(null);

  useScrollToSection(sectionRef);

  const images = useMemo(() => [
    require("../assets/gallery-section/2.jpeg"),
    require("../assets/gallery-section/3.jpeg"),
    require("../assets/gallery-section/7.jpeg"),
    require("../assets/gallery-section/4.jpeg"),
    require("../assets/gallery-section/5.jpeg"),
    require("../assets/gallery-section/1.jpeg"),
  ], []);

  const renderedImageSlides = useMemo(() => {
    return images.map((image, index) => {
      return (
        <SwiperSlide key={index}>
          <img className='bg-image' src={image} alt="gallery bg" />
          <img className='image' src={image} alt="gallery" />
        </SwiperSlide>
      );
    });
  }, [images]);

  return (
    <section className="wrapper gallery-section" id="gallery-section" ref={sectionRef}>
      <div className='gradient'></div>
      <Swiper className='gallery-section-slider'
        modules={[Controller, Pagination, Autoplay]}
        onSwiper={setGallerySwiper}
        controller={{ control: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

        slidesPerView={1}
        loop={true}
        loopedSlides={6}

        noSwiping={true}
        noSwipingClass='swiper-slide'
        pagination={{
          el: ".swiper-pagination",
          clickable: true
        }}
      >
        {renderedImageSlides}
      </Swiper>
      <Swiper className='gallery-section-thumbs'
        modules={[Controller, Pagination, Autoplay]}
        onSwiper={setThumbsSwiper}

        controller={{ control: gallerySwiper && !gallerySwiper.destroyed ? gallerySwiper : null }}

        slidesPerView="auto"
        loop={true}

        spaceBetween={10}
        centeredSlides={false}
        slideToClickedSlide={true}
        autoplay={{
          delay: 2000
        }}
      >
        {renderedImageSlides}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default GallerySection;
