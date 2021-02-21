import styled from "styled-components";

const SVG = styled.svg``;
const Line = styled.line``;
const Circle = styled.circle``;

const StickManRunning = ({
  speed = "700ms",
  frontColor = "#ffffff",
  middleColor = "#cccccc",
  backColor = "#888888",
  bodyPosition = {
    torso: { upper: { x: 50, y: 15 }, lower: { x: 50, y: 55 } },
    leftArm: {
      elbow: {
        x: 40,
        y: 30,
      },
      hand: {
        x: 45,
        y: 45,
      },
    },
    rightArm: {
      elbow: {
        x: 45,
        y: 35,
      },
      hand: {
        x: 60,
        y: 45,
      },
    },
    leftLeg: {
      knee: {
        x: 50,
        y: 75,
      },
      foot: {
        x: 50,
        y: 92,
      },
    },
    rightLeg: {
      knee: {
        x: 50,
        y: 73,
      },
      foot: {
        x: 50,
        y: 95,
      },
    },
  },
}) => {
  const { torso, leftArm, rightArm, leftLeg, rightLeg } = bodyPosition;
  return (
    <SVG viewBox="0 0 100 100">
      <g name="left-arm" stroke={backColor} strokeWidth="5">
        <Line
          name="upper-left-arm"
          x1={torso.upper.x}
          x2={leftArm.elbow.x}
          y1={torso.upper.y + 2}
          y2={leftArm.elbow.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="50;52;50"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="55;35;55"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
        <Line
          name="lower-left-arm"
          x1={leftArm.elbow.x}
          x2={leftArm.hand.x}
          y1={leftArm.elbow.y}
          y2={leftArm.hand.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="55;35;55"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="68;40;68"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="30;42;30"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="left-leg" stroke={backColor} strokeWidth="5">
        <Line
          name="upper-left-leg"
          x1={torso.lower.x}
          x2={leftLeg.knee.x}
          y1={torso.lower.y}
          y2={leftLeg.knee.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x2"
            values="45;65;45"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="70;80;65;80;70"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
        <Line
          name="lower-left-leg"
          x1={leftLeg.knee.x}
          x2={leftLeg.foot.x}
          y1={leftLeg.knee.y}
          y2={leftLeg.foot.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="45;65;45"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values="70;80;65;80;70"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="30;45;65;42;30;"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="80;80;80;95;80;"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="body" zIndex="10">
        <Line
          name="body"
          x1={torso.upper.x}
          x2={torso.lower.x}
          y1={torso.upper.y}
          y2={torso.lower.y}
          stroke={middleColor}
          strokeWidth="5"
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="50;52;50"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="50;48;50"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="right-arm" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-arm"
          x1={torso.upper.x}
          x2={rightArm.elbow.x}
          y1={torso.upper.y + 2}
          y2={rightArm.elbow.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="50;52;50"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="40;50;40"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
        <Line
          name="lower-right-arm"
          x1={rightArm.elbow.x}
          x2={rightArm.hand.x}
          y1={rightArm.elbow.y}
          y2={rightArm.hand.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="40;50;40"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="55;63;55"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="45;30;45"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="right-leg" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-leg"
          x1={torso.lower.x}
          x2={rightLeg.knee.x}
          y1={torso.lower.y}
          y2={rightLeg.knee.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x2"
            values="65;45;65"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="65;80;70;80;65"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
        <Line
          name="lower-right-leg"
          x1={rightLeg.knee.x}
          x2={rightLeg.foot.x}
          y1={rightLeg.knee.y}
          y2={rightLeg.foot.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="65;45;65"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values="65;80;70;80;65"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="65;45;30;42;65;"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="80;95;75;80;80;"
            dur={speed}
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="head">
        <Circle
          cx={torso.upper.x}
          cy={torso.upper.y - 9}
          r="6"
          fill={middleColor}
        >
          <animate
            attributeName="cx"
            values="50;54;50"
            dur={speed}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="8;7;8;7;8"
            dur={speed}
            repeatCount="indefinite"
          />
        </Circle>
      </g>
    </SVG>
  );
};

export default StickManRunning;
