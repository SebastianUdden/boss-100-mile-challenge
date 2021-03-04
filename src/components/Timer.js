import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  transition: max-height 600ms ease;
  max-height: ${(p) => (p.expanded ? "160px" : "70px")};
  height: 300px;
  background-color: #222;
  border-top: 1px solid #282c34;
`;
const Expand = styled.button`
  height: 70px;
  font-size: 26px;
  font-weight: 700;
  background-color: #222;
  color: #fff;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  span {
    display: block;
  }
`;
const Row = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;
const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 6px;
  background-color: #222;
  color: #fff;
  width: 55%;
  max-width: 350px;
  cursor: pointer;
`;
const SmallButton = styled(Button)`
  width: 115px;
  margin-left: 20px;
`;
const Arrow = styled.span`
  transition: transform 600ms ease;
  transform: ${(p) => `rotate(${p.isUp ? "180deg" : "0"})`};
`;
const Time = styled.p`
  margin: 0;
  letter-spacing: 3px;
  font-size: 22px;
`;
const Number = styled.span`
  display: inline-block;
  width: 18px;
`;
const Divider = styled.span`
  display: inline-block;
  width: 12px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const formatTime = (count) => {
  const secondsCount = Math.floor(count / 10);
  const seconds = secondsCount % 60;
  const minutes = Math.floor(secondsCount / 60);
  const cs = (count % 10) * 10;
  return {
    minutes: {
      left: minutes < 10 ? "0" : Math.floor(minutes / 10),
      right: minutes % 10,
    },
    seconds: {
      left: seconds < 10 ? "0" : Math.floor(seconds / 10),
      right: seconds % 10,
    },
    centiseconds: {
      left: cs === 0 ? "0" : Math.floor(cs / 10),
      right: cs % 10,
    },
  };
};

const Timer = () => {
  const [expanded, setExpanded] = useState(false);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [start, count]);
  const { minutes, seconds, centiseconds } = formatTime(count);
  return (
    <Wrapper expanded={expanded}>
      <Expand onClick={() => setExpanded(!expanded)}>
        <Left>
          Timer{" "}
          {!start && count > 0 && (
            <SmallButton
              onClick={(e) => {
                e.stopPropagation();
                setCount(0);
              }}
            >
              Clear
            </SmallButton>
          )}
        </Left>
        <Arrow isUp={expanded}>&uarr;</Arrow>
      </Expand>
      <Row>
        <Button onClick={() => setStart(!start)}>
          {start ? "Stop" : "Start"}
        </Button>
        <Time>
          <Number>{minutes.left}</Number>
          <Number>{minutes.right}</Number>
          <Divider>:</Divider>
          <Number>{seconds.left}</Number>
          <Number>{seconds.right}</Number>
          <Divider>:</Divider>
          <Number>{centiseconds.left}</Number>
          <Number>{centiseconds.right}</Number>
        </Time>
      </Row>
    </Wrapper>
  );
};

export default Timer;
