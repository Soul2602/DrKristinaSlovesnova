import { useEffect } from "react";

function useEventOnScroll(ref, onScroll, pixelsBeforeStart = window.innerHeight / 2) {
  useEffect(() => {
    if (!ref) {
      return;
    }

    function handleScroll() {
      const sectionTop = ref.current.getBoundingClientRect().top;

      if (sectionTop < pixelsBeforeStart) {
        onScroll();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [ref, onScroll, pixelsBeforeStart]);
}

export default useEventOnScroll;
