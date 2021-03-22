import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  transition: max-height 600ms ease, background-color 200ms ease;
  max-height: ${(p) => (p.expanded ? "100vh" : "70px")};
  height: calc(100% - 120px);
  background-color: ${(p) => p.backgroundColor};
  border-top: 1px solid #282c34;
`;
const Content = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: margin-top 600ms ease;
  margin-top: ${(p) => (p.expanded ? 0 : "50px")};
`;
const Expand = styled.button`
  height: 70px;
  font-size: 26px;
  font-weight: 700;
  background-color: inherit;
  color: #fff;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  z-index: 99;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  cursor: pointer;
  span {
    display: block;
  }
`;
const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 6px;
  background-color: inherit;
  color: #fff;
  width: 55%;
  max-width: 350px;
  cursor: pointer;
`;
const Start = styled(Button)`
  margin-top: 20px;
`;
const SmallButton = styled(Button)`
  width: 115px;
  margin-left: 20px;
  ${(p) =>
    p.toggled &&
    `
    background-color: #ffffff;
    color: #222222; 
  `}
`;
const Arrow = styled.span`
  transition: transform 800ms ease;
  transform: ${(p) => `rotate(${p.isUp ? "180deg" : "0"})`};
`;
const Time = styled.p`
  margin: 0 0 0 calc(5px + 3vmin);
  letter-spacing: 3px;
  font-size: ${(p) => (p.small ? "14px" : "calc(20px + 8vmin)")};
  display: flex;
`;
const N = styled.span`
  display: inline-block;
  width: ${(p) => (p.small ? "auto" : "calc(15px + 6vmin)")};
  text-align: center;
`;
const Divider = styled.span`
  display: inline-block;
  width: ${(p) => (p.small ? "auto" : "calc(15px + 2vmin)")};
  text-align: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Motivation = styled.label`
  margin: 5px 5px 3vh;
  font-size: 40px;
  color: orange;
  text-align: center;
`;

const getState = (count) => {
  if (count === 1) return "START";
  if (count === 100 || count === 200 || count === 400 || count === 500)
    return "PROGRESS";
  if (count === 300 || count === 600) return "DONE";
  return "";
};

const formatTime = (count) => {
  const secondsCount = Math.floor(count / 10);
  const seconds = secondsCount % 60;
  const state = getState(count);
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
    state,
  };
};

// const playTone = (frequency = 440, type = "sine", audio) => {
//   const oscillator = audio.createOscillator();
//   const gain = audio.createGain();
//   gain.connect(audio.destination);

//   const attack = 100;
//   const decay = 450;
//   const noteTime = attack + decay;
//   const now = audio.currentTime;
//   oscillator.type = type;
//   oscillator.frequency.setValueAtTime(frequency, now); // value in hertz

//   gain.gain.linearRampToValueAtTime(1, now + attack / 1000);
//   gain.gain.linearRampToValueAtTime(0, now + decay / 1000);
//   oscillator.connect(gain);
//   oscillator.start(0);
//   setTimeout(() => {
//     oscillator.stop(0);
//     oscillator.disconnect(gain);
//     gain.disconnect(audio.destination);
//   }, noteTime);
// };

// const getFrequency = (secondsString) => {
//   const seconds = Number(secondsString);
//   if (seconds % 3 === 0) {
//     return 880;
//   }
//   return seconds % 2 === 0 ? 220 : 440;
// };

const getRandomMotivation = () => {
  const motivationalQuotes = [
    "Go go go!",
    "You can do it!",
    "AWESOME!",
    "Don't wuzz out!",
    "Thrive where others fail!",
    "BEAST MODE ACTIVATED!",
    "You can beat Nemer, easily...",
    "Dennis doesn't stand a chance against you!",
    "Success is my only motherfuckin' option, failures not...",
    "FEED THE FIRE!",
    "The successful warrior is the average man, with laser-like focus.",
    "You miss 100% of the shots you never take.",
    "The climb is tough, but the view from the top is worth it.",
  ];
  return motivationalQuotes[
    Math.floor(Math.random() * motivationalQuotes.length)
  ];
};

const Timer = () => {
  // const [audio, setAudio] = useState(
  //   new (window.AudioContext || window.webkitAudioContext)()
  // );
  // const [mute, setMute] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [latest10, setLatest10] = useState(undefined);
  const [backgroundColor, setBackgroundColor] = useState("#222");
  const [motivation, setMotivation] = useState("");

  const handleExpand = () => {
    const body = document.getElementsByTagName("body")[0];
    if (!expanded) {
      body.style.height = "100%";
      body.style.overflow = "hidden";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      body.style.height = "auto";
      body.style.overflow = "scroll";
    }

    setExpanded(!expanded);
  };
  // const toggleMute = () => {
  //   if (audio.state === "running") {
  //     audio.suspend().then(function () {
  //       setMute(true);
  //     });
  //   } else if (audio.state === "suspended") {
  //     audio.resume().then(function () {
  //       setMute(false);
  //     });
  //   }
  // if (mute) {
  //   audio.resume();
  //   console.log({ audio });
  //   return;
  // }
  // audio.suspend();
  // setMute(true);
  // };
  // useEffect(() => {
  //   return () => {
  //     audio.close();
  //     setAudio(undefined);
  //   };
  // }, [audio]);
  useEffect(() => {
    if (!start) return;
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [start, count]);
  // useEffect(() => {
  //   if (!start) return;
  //   playTone(220, "sine", audio);
  // }, [start, audio]);
  const { minutes, seconds, centiseconds, state } = formatTime(count);
  useEffect(() => {
    if (seconds.left !== latest10) {
      setLatest10(seconds.left);
      // const frequency = getFrequency(seconds.left);
      // playTone(frequency, "sine", audio);
    }
  }, [seconds, latest10]);
  useEffect(() => {
    if (!state) {
      setBackgroundColor("#222");
    }
    if (state === "START") {
      setMotivation(getRandomMotivation());
      setBackgroundColor("green");
    }
    if (state === "PROGRESS") {
      setMotivation(getRandomMotivation());
      setBackgroundColor("#888");
    }
    if (state === "DONE") {
      setMotivation(getRandomMotivation());
      setBackgroundColor("red");
    }
  }, [state]);

  return (
    <Wrapper expanded={expanded} backgroundColor={backgroundColor}>
      <Expand onClick={handleExpand}>
        <Left>
          Timer{" "}
          {!start && count > 0 && (
            <SmallButton
              onClick={(e) => {
                e.stopPropagation();
                setMotivation("");
                setCount(0);
              }}
            >
              Clear
            </SmallButton>
          )}
          {/* <SmallButton
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            toggled={mute}
          >
            Mute
          </SmallButton> */}
        </Left>
        {!expanded && (
          <Time small>
            <N small>{minutes.left}</N>
            <N small>{minutes.right}</N>
            <Divider small>:</Divider>
            <N small>{seconds.left}</N>
            <N small>{seconds.right}</N>
            <Divider small>:</Divider>
            <N small>{centiseconds.left}</N>
            <N small>{centiseconds.right}</N>
          </Time>
        )}
        <Arrow isUp={expanded}>&uarr;</Arrow>
      </Expand>
      <Content expanded={expanded}>
        {start && expanded && <Motivation>{motivation}</Motivation>}
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
        <Start onClick={() => setStart(!start)}>
          {start ? "Stop" : "Start"}
        </Start>
      </Content>
    </Wrapper>
  );
};

export default Timer;
