import React, { useEffect, useRef, useState } from "react";
import { generateCircles } from "../utilities/generateCircles";

const Transitions = () => {
  const AnimatedCircles = () => {
    const [visibleCircles, setVisibleCircles] = useState(generateCircles());
    useInterval(() => {
      setVisibleCircles(generateCircles());
    }, 2000);

    return (
      <svg viewbox="0 0 100 20">
        {allCircles.map((d) => (
          <AnimatedCircle
            key={d}
            index={d}
            isShowing={visibleCircles.includes(d)}
          />
        ))}
      </svg>
    );
  };

  const AnimatedCircle = ({ index, isShowing }) => {
    const wasShowing = useRef(false);

    useEffect(() => {
      wasShowing.current = isShowing;
    }, [isShowing]);

    const style = useSpring({
      config: {
        duration: 1200,
      },
      r: isShowing ? 6 : 0,
      opacity: isShowing ? 1 : 0,
    });

    return (
      <AnimatedCircle
        {...style}
        cx={index * 15 + 10}
        cy="10"
        fill={
          !isShowing
            ? "tomato"
            : !wasShowing.current
            ? "cornflowerblue"
            : "lightgrey"
        }
      />
    );
  };
};

export default Transitions;
