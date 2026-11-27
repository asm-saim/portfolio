import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setLenis } from "../../motion/scroll";

// Mounts Lenis once for the whole app. It smooths wheel scrolling only —
// touch scrolling, keyboard scrolling, and scrollbars stay native, so there
// is no scroll hijacking. Users who ask for reduced motion get plain scrolling.
const SmoothScroll = () => {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis = null;

    const start = () => {
      if (lenis || media.matches) return;

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        autoRaf: true,
        anchors: true,
      });

      setLenis(lenis);
    };

    const stop = () => {
      if (!lenis) return;

      lenis.destroy();
      lenis = null;
      setLenis(null);
    };

    const handleChange = (event) => {
      if (event.matches) stop();
      else start();
    };

    start();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
      stop();
    };
  }, []);

  return null;
};

export default SmoothScroll;
