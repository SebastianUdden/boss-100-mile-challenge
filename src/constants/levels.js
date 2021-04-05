import StickManBoatHold from "../svgs/StickManBoatHold";
import StickManHipThrusters from "../svgs/StickManHipThrusters";
import StickManLunge from "../svgs/StickManLunge";
import StickManPikePress from "../svgs/StickManPikePress";
import StickManPlank from "../svgs/StickManPlank";
import StickManPushupS from "../svgs/StickManPushup";
import StickManRunning from "../svgs/StickManRunning";
import StickManSidePlank from "../svgs/StickManSidePlank";
import StickManSitup from "../svgs/StickManSitup";
import StickManSquat from "../svgs/StickManSquat";

const RUNNING = {
  name: "1.6km running",
  svg: <StickManRunning color="white" />,
  fromLevel: 0,
  amount: 1.6,
  type: "km",
};
const PUSHUPS = {
  name: "20 push-ups",
  svg: <StickManPushupS color="white" />,
  fromLevel: 0,
  amount: 20,
  type: "reps",
};
const PLANK = {
  name: "30 seconds plank",
  svg: <StickManPlank color="white" />,
  fromLevel: 2,
  amount: 30,
  type: "seconds",
};
const HIP_THRUSTERS = {
  name: "20 hip thrusters",
  svg: <StickManHipThrusters color="white" />,
  fromLevel: 3,
  amount: 20,
  type: "reps",
};
const SQUAT = {
  name: "20 squats",
  svg: <StickManSquat color="white" />,
  fromLevel: 4,
  amount: 20,
  type: "reps",
};
const BOAT_HOLD = {
  name: "30 seconds boat hold",
  svg: <StickManBoatHold color="white" />,
  fromLevel: 5,
  amount: 30,
  type: "seconds",
};
const SITUPS = {
  name: "20 sit-ups",
  svg: <StickManSitup color="white" />,
  fromLevel: 6,
  amount: 20,
  type: "reps",
};
const SIDE_PLANK = {
  name: "30 seconds side plank x2",
  svg: <StickManSidePlank color="white" />,
  fromLevel: 7,
  amount: 30,
  type: "seconds",
};
const LUNGE = {
  name: "20 lunges per leg",
  svg: <StickManLunge color="white" />,
  fromLevel: 8,
  amount: 20,
  type: "reps",
};
const PIKE_PRESS = {
  name: "20 pike press",
  svg: <StickManPikePress color="white" />,
  fromLevel: 9,
  amount: 20,
  type: "reps",
};
export const LEVELS = [
  {
    name: "Level 1",
    title: "Day 1",
    level: 1,
    challenges: [RUNNING, PUSHUPS],
  },
  {
    name: "Level 2",
    title: "Day 20",
    level: 2,
    challenges: [RUNNING, PUSHUPS],
    newChallenge: PLANK,
  },
  {
    name: "Level 3",
    title: "Day 30",
    level: 3,
    challenges: [RUNNING, PUSHUPS, PLANK],
    newChallenge: HIP_THRUSTERS,
  },
  {
    name: "Level 4",
    title: "Day 40",
    level: 4,
    challenges: [RUNNING, PUSHUPS, PLANK, HIP_THRUSTERS],
    newChallenge: SQUAT,
  },
  {
    name: "Level 5",
    title: "Day 50",
    level: 5,
    challenges: [RUNNING, SQUAT, PUSHUPS, PLANK, HIP_THRUSTERS],
    newChallenge: BOAT_HOLD,
  },
  {
    name: "Level 6",
    title: "Day 60",
    level: 6,
    challenges: [RUNNING, SQUAT, PUSHUPS, PLANK, HIP_THRUSTERS, BOAT_HOLD],
    newChallenge: SITUPS,
  },
  {
    name: "Level 7",
    title: "Day 70",
    level: 7,
    challenges: [
      RUNNING,
      SQUAT,
      PUSHUPS,
      PLANK,
      HIP_THRUSTERS,
      BOAT_HOLD,
      SITUPS,
    ],
    newChallenge: SIDE_PLANK,
  },
  {
    name: "Level 8",
    title: "Day 80",
    level: 8,
    challenges: [
      RUNNING,
      SQUAT,
      PUSHUPS,
      PLANK,
      SIDE_PLANK,
      HIP_THRUSTERS,
      BOAT_HOLD,
      SITUPS,
    ],
    newChallenge: LUNGE,
  },
  {
    name: "Level 9",
    title: "Day 90",
    level: 9,
    challenges: [
      RUNNING,
      LUNGE,
      SQUAT,
      PUSHUPS,
      PLANK,
      SIDE_PLANK,
      HIP_THRUSTERS,
      BOAT_HOLD,
      SITUPS,
    ],
    newChallenge: PIKE_PRESS,
  },
];
