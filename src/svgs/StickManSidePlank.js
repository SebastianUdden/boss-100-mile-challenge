import styled from "styled-components";

const SVG = styled.svg`
  transform: rotate(90deg);
`;
const Line = styled.line``;
const Circle = styled.circle``;

const StickManPlank = ({
  frontColor = "#ffffff",
  middleColor = "#cccccc",
  backColor = "#888888",
  bodyPosition = {
    torso: { upper: { x: 28, y: 15 }, lower: { x: 38, y: 60 } },
    leftArm: {
      elbow: {
        x: 47,
        y: 17,
      },
      hand: {
        x: 49,
        y: 19,
      },
    },
    rightArm: {
      elbow: {
        x: 18,
        y: 36,
      },
      hand: {
        x: 33,
        y: 42,
      },
    },
    leftLeg: {
      knee: {
        x: 44,
        y: 75,
      },
      foot: {
        x: 50,
        y: 92,
      },
    },
    rightLeg: {
      knee: {
        x: 39,
        y: 78,
      },
      foot: {
        x: 41,
        y: 93,
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
          x1={torso.upper.x + 4}
          x2={leftArm.elbow.x}
          y1={torso.upper.y + 1}
          y2={leftArm.elbow.y}
          strokeLinecap="round"
        ></Line>
        <Line
          name="lower-left-arm"
          x1={leftArm.elbow.x}
          x2={leftArm.hand.x}
          y1={leftArm.elbow.y}
          y2={leftArm.hand.y}
          strokeLinecap="round"
        />
      </g>
      <g name="left-leg" stroke={backColor} strokeWidth="5">
        <Line
          name="upper-left-leg"
          x1={torso.lower.x + 1}
          x2={leftLeg.knee.x}
          y1={torso.lower.y}
          y2={leftLeg.knee.y}
          strokeLinecap="round"
        ></Line>
        <Line
          name="lower-left-leg"
          x1={leftLeg.knee.x}
          x2={leftLeg.foot.x}
          y1={leftLeg.knee.y}
          y2={leftLeg.foot.y}
          strokeLinecap="round"
        ></Line>
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
        ></Line>
      </g>
      <g name="right-arm" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-arm"
          x1={torso.upper.x - 3}
          x2={rightArm.elbow.x}
          y1={torso.upper.y + 2}
          y2={rightArm.elbow.y}
          strokeLinecap="round"
        ></Line>
        <Line
          name="lower-right-arm"
          x1={rightArm.elbow.x}
          x2={rightArm.hand.x}
          y1={rightArm.elbow.y}
          y2={rightArm.hand.y}
          strokeLinecap="round"
        />
      </g>
      <g name="right-leg" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-leg"
          x1={torso.lower.x - 1}
          x2={rightLeg.knee.x}
          y1={torso.lower.y}
          y2={rightLeg.knee.y}
          strokeLinecap="round"
        ></Line>
        <Line
          name="lower-right-leg"
          x1={rightLeg.knee.x}
          x2={rightLeg.foot.x}
          y1={rightLeg.knee.y}
          y2={rightLeg.foot.y}
          strokeLinecap="round"
        ></Line>
      </g>
      <g name="head">
        <Circle
          cx={torso.upper.x}
          cy={torso.upper.y - 8}
          r="6"
          fill={middleColor}
        >
          <animate
            attributeName="cx"
            values="25;26;25"
            dur="2s"
            repeatCount="indefinite"
          />
        </Circle>
      </g>
    </SVG>
  );
};

export default StickManPlank;
