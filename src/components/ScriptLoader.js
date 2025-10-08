// src/components/ScriptLoader.js
import { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    const scripts = [
      "/assets/js/plugins/jquery-3.5.1.min.js",
      "/assets/js/plugins/popper.min.js",
      "/assets/js/plugins/bootstrap.bundle.min.js",
      "/assets/js/plugins/bootstrap-select.min.js",
      "/assets/js/plugins/swiper-bundle.min.js",
      "/assets/js/plugins/fontawesome.js",
      "/assets/js/plugins/owl.carousel.min.js",
      "/assets/js/plugins/countdownTimer.js",
      "/assets/js/plugins/infiniteslidev2.js",
      "/assets/js/plugins/jquery.zoom.min.js",
      "/assets/js/plugins/slick.min.js",
      "/assets/js/plugins/nouislider.js",
      "/assets/js/main.js",
      "/assets/js/demo-1.js",
    ];

    const scriptElements = scripts.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // Preserve order
      document.body.appendChild(script);
      return script;
    });

    return () => {
      // Clean up scripts on unmount if needed
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScriptLoader;
