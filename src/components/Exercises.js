import React, { useEffect, useRef } from "react";

import { LEVELS } from "../constants/levels";
import Level from "./Level";
import styled from "styled-components";
import SpotifyLogo from "./SpotifyLogo";

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
const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 50px;
`;

const Exercises = () => {
  const levelsRef = useRef(null);
  useEffect(() => {
    levelsRef.current.scrollTo({
      top: 0,
      left: levelsRef.current.scrollWidth,
      behavior: "smooth",
    });
  }, []);
  return (
    <Wrapper>
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
      <UL ref={levelsRef}>
        {LEVELS.map((level, index) => (
          <Level {...level} isFirst={index === 0} />
        ))}
      </UL>
    </Wrapper>
  );
};

export default Exercises;
