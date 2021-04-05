import React, { useEffect, useRef } from "react";

import { LEVELS } from "../constants/levels";
import Level from "./Level";
import styled from "styled-components";

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 50px;
`;

const Exercises = ({ currentLevel, startDate }) => {
  const levelsRef = useRef(null);
  useEffect(() => {
    if (!levelsRef.current) return;
    const levelRatio = (currentLevel - 1) / LEVELS.length;
    levelsRef.current.scrollTo({
      top: 0,
      left: levelsRef.current.scrollWidth * levelRatio,
      behavior: "smooth",
    });
  }, [currentLevel, levelsRef]);
  return (
    <>
      <UL ref={levelsRef}>
        {LEVELS.map((level, index) => (
          <Level {...level} isFirst={index === 0} startDate={startDate} />
        ))}
      </UL>
    </>
  );
};

export default Exercises;
