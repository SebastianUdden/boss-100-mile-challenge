import styled from "styled-components";

const SVG = styled.svg``;
const Line = styled.line``;

const StickMan = ({
  frontColor = "#ffffff",
  middleColor = "#cccccc",
  backColor = "#888888",
}) => {
  return (
    <SVG viewBox="0 0 100 100">
      <g name="left-arm" stroke={backColor} strokeWidth="5">
        <Line name="upper-left-arm" x1="50" x2="52" y1="30" y2="40" />
        <Line name="lower-left-arm" x1="52" x2="60" y1="40" y2="55" />
      </g>
      <g name="left-leg" stroke={backColor} strokeWidth="5">
        <Line name="upper-left-leg" x1="50" x2="48" y1="60" y2="75" />
        <Line name="lower-left-leg" x1="48" x2="43" y1="75" y2="95" />
      </g>
      <g name="body" zIndex="10">
        <Line
          name="body"
          x1="50"
          x2="50"
          y1="12"
          y2="60"
          stroke={middleColor}
          strokeWidth="5"
        />
      </g>
      <g name="right-arm" stroke={frontColor} strokeWidth="5">
        <Line name="upper-right-arm" x1="50" x2="42" y1="30" y2="40" />
        <Line name="lower-right-arm" x1="42" x2="42" y1="40" y2="55" />
      </g>
      <g name="right-leg" stroke={frontColor} strokeWidth="5">
        <Line name="upper-left-leg" x1="50" x2="53" y1="60" y2="75" />
        <Line name="lower-left-leg" x1="53" x2="52" y1="75" y2="95" />
      </g>
    </SVG>
  );
};

export default StickMan;
