import styled from "styled-components";

const SVG = styled.svg``;
const Line = styled.line``;

const StickMan = ({
  frontColor = "#ffffff",
  middleColor = "#cccccc",
  backColor = "#888888",
  bodyPosition = {
    torso: { upper: { x: 50, y: 15 }, lower: { x: 50, y: 60 } },
    leftArm: {
      elbow: {
        x: 50,
        y: 40,
      },
      hand: {
        x: 50,
        y: 55,
      },
    },
    rightArm: {
      elbow: {
        x: 50,
        y: 40,
      },
      hand: {
        x: 50,
        y: 55,
      },
    },
    leftLeg: {
      knee: {
        x: 50,
        y: 75,
      },
      foot: {
        x: 50,
        y: 90,
      },
    },
    rightLeg: {
      knee: {
        x: 50,
        y: 75,
      },
      foot: {
        x: 50,
        y: 90,
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
        />
        <Line
          name="lower-left-arm"
          x1={leftArm.elbow.x}
          x2={leftArm.hand.x}
          y1={leftArm.elbow.y}
          y2={leftArm.hand.y}
        />
      </g>
      <g name="left-leg" stroke={backColor} strokeWidth="5">
        <Line
          name="upper-left-leg"
          x1={torso.lower.x}
          x2={leftLeg.knee.x}
          y1={torso.lower.y}
          y2={leftLeg.knee.y}
        />
        <Line
          name="lower-left-leg"
          x1={leftLeg.knee.x}
          x2={leftLeg.foot.x}
          y1={leftLeg.knee.y}
          y2={leftLeg.foot.y}
        />
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
        />
      </g>
      <g name="right-arm" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-arm"
          x1={torso.upper.x}
          x2={rightArm.elbow.x}
          y1={torso.upper.y}
          y2={rightArm.elbow.y}
        />
        <Line
          name="lower-right-arm"
          x1={rightArm.elbow.x}
          x2={rightArm.hand.x}
          y1={rightArm.elbow.y}
          y2={rightArm.hand.y}
        />
      </g>
      <g name="right-leg" stroke={frontColor} strokeWidth="5">
        <Line
          name="upper-right-leg"
          x1={torso.lower.x}
          x2={rightLeg.knee.x}
          y1={torso.lower.y}
          y2={rightLeg.knee.y}
        />
        <Line
          name="lower-left-leg"
          x1={rightLeg.knee.x}
          x2={rightLeg.foot.x}
          y1={rightLeg.knee.y}
          y2={rightLeg.foot.y}
        />
      </g>
    </SVG>
  );
};

export default StickMan;
