import styled from "styled-components";

const SVG = styled.svg`
  border: 1px solid red;
`;
const Line = styled.line``;

const Running = ({ color }) => {
  return (
    <SVG viewBox="0 0 100 100" fill={color}>
      <circle cx="65" cy="20" r="10" />
      <Line
        name="body"
        x1="58"
        x2="45"
        y1="35"
        y2="60"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* <Line
        name="upper-right-arm"
        x1="55"
        x2="62"
        y1="42"
        y2="52"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      /> */}
      {/* <Line
        name="lower-right-arm"
        x1="70"
        x2="62"
        y1="42"
        y2="52"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <Line
        name="upper-left-arm"
        x1="53"
        x2="40"
        y1="41"
        y2="40"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <Line
        name="lower-left-arm"
        x1="39"
        x2="35"
        y1="40"
        y2="50"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <Line
        name="upper-right-leg"
        x1="50"
        x2="60"
        y1="55"
        y2="70"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Line
        name="upper-left-leg"
        x1="50"
        x2="40"
        y1="55"
        y2="70"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      /> */}
    </SVG>
  );
};

export default Running;
