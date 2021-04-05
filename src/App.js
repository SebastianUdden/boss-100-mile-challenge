import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

import Exercises from "./components/Exercises";
import Timer from "./components/Timer";
import SpotifyLogo from "./components/SpotifyLogo";

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 0 50px;
`;
const Title = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: inline;
    margin-right: 5px;
  }
`;
const MusicLink = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  margin: 0 20px;
  font-size: 46px;
  letter-spacing: 16;
  text-align: center;
`;
const H2 = styled.h2`
  margin: 0 20px 20px;
  font-size: 26px;
  letter-spacing: 3px;
  text-align: center;
  color: orange;
`;
const Select = styled.select`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  background-color: #222;
  padding: 5px;
  border-radius: 6px;
`;

const getDay = () => {
  const startDate = localStorage.getItem("start-date");
  const today = new Date();
  if (!startDate) {
    localStorage.setItem("start-date", today);
  }
  const timeDiff = today - new Date(startDate);
  const days = timeDiff / 1000 / 60 / 60 / 24;
  return Math.ceil(days);
};
const saveDay = (day) => {
  const today = new Date();
  const startDate = new Date(today - 24 * 60 * 60 * 1000 * day);
  localStorage.setItem("start-date", startDate);
  return startDate;
};

function App() {
  const days = Array.from(Array(100).keys());
  const [level, setLevel] = useState(1);
  const [day, setDay] = useState(getDay());
  const [startDate, setStartDate] = useState(
    localStorage.getItem("start-date") || new Date()
  );

  useEffect(() => {
    if (day > 0 && day < 20) {
      setLevel(1);
    } else {
      const newLevel = Math.floor(day / 10);
      setLevel(newLevel);
    }
  }, [day]);

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setDay(newDay);
    setStartDate(saveDay(newDay - 1));
  };

  return (
    <div className="App">
      <Wrapper>
        <Select onChange={handleDayChange}>
          {days.map((d) => (
            <option selected={d + 1 === day} value={d + 1}>
              Day {d + 1}
            </option>
          ))}
        </Select>
        <MusicLink
          href="https://open.spotify.com/playlist/65CpnEvMCGB0gktBNyiNQj?si=ivivj2XoQ62gAB9kXSbRew"
          target="_blank"
          rel="norefferer noopener"
        >
          <Title>Awesome playlist</Title>
          <SpotifyLogo width="25px" />
        </MusicLink>
        <H1>BOSS</H1>
        <H2>100 MILE CHALLENGE</H2>
        <Exercises currentLevel={level} startDate={startDate} />
      </Wrapper>
      <Timer />
    </div>
  );
}

export default App;
