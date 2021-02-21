import styled from "styled-components";

const SVG = styled.svg`
  transform: rotate(90deg);
`;
const Line = styled.line``;
const Circle = styled.circle``;

const StickManHipThrusters = ({
  frontColor = "#ffffff",
  middleColor = "#cccccc",
  backColor = "#888888",
  bodyPosition = {
    torso: { upper: { x: 50, y: 15 }, lower: { x: 50, y: 60 } },
    leftArm: {
      elbow: {
        x: 52,
        y: 30,
      },
      hand: {
        x: 50,
        y: 50,
      },
    },
    rightArm: {
      elbow: {
        x: 52,
        y: 30,
      },
      hand: {
        x: 50,
        y: 50,
      },
    },
    leftLeg: {
      knee: {
        x: 30,
        y: 75,
      },
      foot: {
        x: 46,
        y: 92,
      },
    },
    rightLeg: {
      knee: {
        x: 30,
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
          y1={torso.upper.y}
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
          x1={torso.lower.x}
          x2={leftLeg.knee.x}
          y1={torso.lower.y}
          y2={leftLeg.knee.y}
          strokeLinecap="round"
        >
          <animate
            attributeName="x1"
            values="50;35;50"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="71;80;71;"
            dur="2s"
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
            attributeName="y1"
            values="71;80;71;"
            dur="2s"
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
            values="50;51;50"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="50;35;50"
            dur="2s"
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="right-arm" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-arm"
          x1={torso.upper.x}
          x2={rightArm.elbow.x}
          y1={torso.upper.y}
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
        >
          <animate
            attributeName="x2"
            values="51;54;51;"
            dur="2s"
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
            attributeName="x1"
            values="50;35;50"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="73;78;73;"
            dur="2s"
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
            attributeName="y1"
            values="73;80;73;"
            dur="2s"
            repeatCount="indefinite"
          />
        </Line>
      </g>
      <g name="head">
        <Circle
          cx={torso.upper.x}
          cy={torso.upper.y - 7}
          r="6"
          fill={middleColor}
        >
          <animate
            attributeName="cx"
            values="50;51;50"
            dur="2s"
            repeatCount="indefinite"
          />
        </Circle>
      </g>
    </SVG>
  );
};

export default StickManHipThrusters;
