import React from "react";
import styled from "styled-components";
import { calculateDaysTime } from "../utils";

const Wrapper = styled.li`
  margin: 0 10px;
  min-width: 60vw;
  min-height: 550px;
  scroll-snap-align: start;
  border: 1px solid #fff;
  background-color: #222;
  border-radius: 12px;
  padding: 30px;
`;
const H2 = styled.h2`
  margin: 0 0;
  font-size: 22px;
`;
const P = styled.p`
  margin: 2px 0 20px;
  font-size: 14px;
  opacity: 0.6;
`;
const UL = styled.ul`
  padding: 0;
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 50%;
    }
  }
`;
const LI = styled.li`
  color: ${(p) => p.color || "inherit"};
  font-size: 13px;
  display: flex;
  margin: 0;
  align-items: center;
  font-weight: 500;
  @media (min-width: 600px) {
    font-size: 15px;
  }
`;
const IconWrapper = styled.div`
  width: 50px;
  margin-right: 10px;
  @media (min-width: 600px) {
    width: 100px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Total = styled.span`
  opacity: 0.5;
  font-size: x-small;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const getLevelDate = (startDate, value) => {
  if (value === 1) {
    return startDate;
  } else {
    const start = new Date(startDate);
    const current = calculateDaysTime(value * 10);
    start.setTime(start.getTime() + current);
    return start;
  }
};

const Level = ({
  isFirst,
  name,
  level,
  title,
  challenges,
  newChallenge,
  startDate,
}) => {
  const levelDate = getLevelDate(startDate, level);
  return (
    <Wrapper>
      <H2>{name}</H2>
      <P>
        {title} - {new Date(levelDate).toLocaleDateString()}
      </P>
      <UL>
        {challenges.map(({ name, svg, amount, type, fromLevel }) => {
          const levelDiff = level - fromLevel;
          const totalAmount = Math.floor(amount * levelDiff * 10);
          return (
            <LI color={isFirst ? "orange" : "white"}>
              {svg && <IconWrapper>{svg}</IconWrapper>}
              <Column>
                <span>{name}</span>
                {!isFirst && (
                  <Total>
                    Completed: {totalAmount} {type}
                  </Total>
                )}
              </Column>
            </LI>
          );
        })}
        {newChallenge && (
          <LI color="orange">
            {newChallenge.svg && <IconWrapper>{newChallenge.svg}</IconWrapper>}
            {newChallenge.name}
          </LI>
        )}
      </UL>
    </Wrapper>
  );
};

export default Level;
