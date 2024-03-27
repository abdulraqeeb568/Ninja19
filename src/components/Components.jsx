import "../css/css/style.css";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useAnimate,
  animate,
  useMotionValue,
  useSpring,
} from "framer-motion";
interface Props {
  children: JSX.Element;
  width?: "Fit-Content" | "100%";
  height?: "100%";
}
export const Reveal = ({
  children,
  width = "Fit-Content",
  height = "100%",
}: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const handleAnimate = async () => {
    await animate("#sliderGrows", { width: "100%" }, { duration: 0.5 });
    await animate("#content", { color: "white" }, { duration: 0.5 });
    await animate(
      "#sliderGrows",
      { left: "100%", width: 0 },
      { duration: 0.5 }
    );
  };
  useEffect(() => {
    if (isInView) handleAnimate();
  }, [isInView]);
  return (
    <div
      ref={scope}
      style={{
        position: "relative",
        overflow: "hidden",
        width,
        height,
      }}
      className="mx-auto text-center"
    >
      <div
        id="sliderGrows"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          width: 0,
          left: 0,
          right: 0,
          background: "var(--brand)",
          color: "transparent",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {children}
      </div>
      <div id="content" style={{ color: "transparent", height: "100%" }}>
        {children}
      </div>
    </div>
  );
};
export const RevealImage = ({
  children,
  width = "Fit-Content",
  height = "100%",
}: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const handleAnimate = async () => {
    await animate("#sliderGrows", { width: "100%" }, { duration: 0.5 });
    await animate("#content", { opacity: "100%" }, { duration: 0.5 });
    await animate(
      "#sliderGrows",
      { left: "100%", width: 0 },
      { duration: 0.5 }
    );
  };
  useEffect(() => {
    if (isInView) handleAnimate();
  }, [isInView]);
  return (
    <div
      ref={scope}
      style={{
        position: "relative",
        overflow: "hidden",
        width,
        height,
      }}
      className="mx-auto text-center"
    >
      <div
        id="sliderGrows"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          width: 0,
          left: 0,
          right: 0,
          background: "var(--brand)",
          color: "transparent",
          overflow: "hidden",
          height: "100%",
          zIndex: 200,
        }}
      >
        {}
      </div>
      <div id="content" style={{ opacity: "0", height: "100%" }}>
        {children}
      </div>
    </div>
  );
};
export const SlideContent = ({ children, width = "Fit-Content", delay }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const animateContent = async () => {
    await animate(
      `#contentSlider-${delay * 5}`,
      { left: "100%" },
      { duration: 0.5, delay: delay }
    );
  };
  useEffect(() => {
    if (isInView) animateContent();
  }, [isInView]);
  return (
    <div
      ref={scope}
      style={{
        position: "relative",
        overflow: "hidden",
        alignContent: "center",
        width,
      }}
      className="mx-auto text-center"
    >
      <div
        id={`contentSlider-${delay * 5}`}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          background: "black",
          color: "transparent",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <div id="content" style={{ color: "white" }}>
        {children}
      </div>
    </div>
  );
};
export const SlideLink = ({ children, width = "Fit-Content", delay }) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateContent = async () => {
    await animate(
      `#linkSlider-${delay * 5}`,
      { left: "100%" },
      { duration: 2, delay: delay }
    );
  };
  useEffect(() => {
    animateContent();
  }, [isInView]);
  return (
    <div
      ref={scope}
      style={{
        position: "relative",
        overflow: "hidden",
        alignContent: "center",
        width,
      }}
      className="mx-auto text-center"
    >
      <div
        id={`linkSlider-${delay * 5}`}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          background: "black",
          backgroundColor: "red",
          color: "transparent",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <div id="content" style={{ color: "white" }}>
        {children}
      </div>
    </div>
  );
};
export const Counter = ({
  value,
  direction = "up",
}: {
  value: number,
  direction?: "up" | "down",
}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("motion");
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span className="number number-counter" ref={ref} />;
};

export const AppearFromDown = ({
  children,
  width = "fit-content",
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const content = useAnimation();
  useEffect(() => {
    if (isInView) content.start("visible");
  }, [isInView]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: delay }}
        animate={content}
        initial="hidden"
        style={{ width }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
