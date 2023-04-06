import { useState, useEffect } from 'react';

function useScrollToSection(ref) {
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    let timeout = null;

    function handleScroll() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const section = ref.current;
        const sectionCenter = section.offsetTop + (section.offsetHeight / 2);
        const userPosition = window.scrollY + (window.innerHeight / 2);    

        if (Math.abs(sectionCenter - userPosition) < (window.innerHeight / 4)) {
          setShouldScroll(true);
        } else {
          setShouldScroll(false);
        }
      }, 250);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [ref]);

  useEffect(() => {
    if (shouldScroll) {
      const sectionRect = ref.current.getBoundingClientRect();
      window.scroll({
        top: sectionRect.top + window.scrollY,
        behavior: 'smooth'
      });
      setShouldScroll(false);
    }
  }, [shouldScroll, ref]);

  return ref;
}

export default useScrollToSection;
