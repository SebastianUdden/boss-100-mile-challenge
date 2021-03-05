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
const N = styled.span`
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

const playTone = (frequency = 440, type = "sine") => {
  const audio = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  gain.connect(audio.destination);

  const attack = 100;
  const decay = 450;
  const noteTime = attack + decay;
  const now = audio.currentTime;
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now); // value in hertz

  gain.gain.linearRampToValueAtTime(1, now + attack / 1000);
  gain.gain.linearRampToValueAtTime(0, now + decay / 1000);
  oscillator.connect(gain);
  oscillator.start(0);
  setTimeout(() => {
    oscillator.stop(0);
    oscillator.disconnect(gain);
    gain.disconnect(audio.destination);
    audio.close();
  }, noteTime);
};

const getFrequency = (secondsString) => {
  const seconds = Number(secondsString);
  if (seconds % 3 === 0) {
    return 880;
  }
  return seconds % 2 === 0 ? 220 : 440;
};

const Timer = () => {
  const [expanded, setExpanded] = useState(false);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [latest10, setLatest10] = useState(undefined);
  useEffect(() => {
    if (!start) return;
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [start, count]);
  useEffect(() => {
    if (!start) return;
    playTone(220, "sine");
  }, [start]);
  const { minutes, seconds, centiseconds } = formatTime(count);
  useEffect(() => {
    if (seconds.left !== latest10) {
      setLatest10(seconds.left);
      const frequency = getFrequency(seconds.left);
      playTone(frequency, "sine");
    }
  }, [seconds, latest10]);
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
          <N>{minutes.left}</N>
          <N>{minutes.right}</N>
          <Divider>:</Divider>
          <N>{seconds.left}</N>
          <N>{seconds.right}</N>
          <Divider>:</Divider>
          <N>{centiseconds.left}</N>
          <N>{centiseconds.right}</N>
        </Time>
      </Row>
    </Wrapper>
  );
};

export default Timer;
