import StickManBoatHold from "../svgs/StickManBoatHold";
import StickManHipThrusters from "../svgs/StickManHipThrusters";
import StickManLunge from "../svgs/StickManLunge";
import StickManPlank from "../svgs/StickManPlank";
import StickManPushup from "../svgs/StickManPushup";
import StickManRunning from "../svgs/StickManRunning";
import StickManSidePlank from "../svgs/StickManSidePlank";
import StickManSitup from "../svgs/StickManSitup";
import StickManSquat from "../svgs/StickManSquat";

export const LEVELS = [
  {
    name: "Level 1",
    title: "Day 1 - 2021-01-02",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
    ],
  },
  {
    name: "Level 2",
    title: "Day 20 - 2021-01-21",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
    ],
    newChallenge: {
      name: "30 seconds plank",
      svg: <StickManPlank color="white" />,
    },
  },
  {
    name: "Level 3",
    title: "Day 30 - 2021-01-31",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
    ],
    newChallenge: {
      name: "20 hip thrusters",
      svg: <StickManHipThrusters color="white" />,
    },
  },
  {
    name: "Level 4",
    title: "Day 40 - 2021-02-10",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
      {
        name: "20 hip thrusters",
        svg: <StickManHipThrusters color="white" />,
      },
    ],
    newChallenge: {
      name: "20 squats",
      svg: <StickManSquat color="white" />,
    },
  },
  {
    name: "Level 5",
    title: "Day 50 - 2021-02-20",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      {
        name: "20 squats",
        svg: <StickManSquat color="white" />,
      },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
      {
        name: "20 hip thrusters",
        svg: <StickManHipThrusters color="white" />,
      },
    ],
    newChallenge: {
      name: "30 seconds boat hold",
      svg: <StickManBoatHold color="white" />,
    },
  },
  {
    name: "Level 6",
    title: "Day 60 - 2021-03-02",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      {
        name: "20 squats",
        svg: <StickManSquat color="white" />,
      },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
      {
        name: "20 hip thrusters",
        svg: <StickManHipThrusters color="white" />,
      },
      {
        name: "30 seconds boat hold",
        svg: <StickManBoatHold color="white" />,
      },
    ],
    newChallenge: {
      name: "20 sit-ups",
      svg: <StickManSitup color="white" />,
    },
  },
  {
    name: "Level 7",
    title: "Day 70 - 2021-03-12",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      {
        name: "20 squats",
        svg: <StickManSquat color="white" />,
      },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
      {
        name: "20 hip thrusters",
        svg: <StickManHipThrusters color="white" />,
      },
      {
        name: "30 seconds boat hold",
        svg: <StickManBoatHold color="white" />,
      },
      {
        name: "20 sit-ups",
        svg: <StickManSitup color="white" />,
      },
    ],
    newChallenge: {
      name: "30 seconds side plank x2",
      svg: <StickManSidePlank color="white" />,
    },
  },
  {
    name: "Level 8",
    title: "Day 80 - 2021-03-22",
    challenges: [
      { name: "1.6km running", svg: <StickManRunning color="white" /> },
      {
        name: "20 squats",
        svg: <StickManSquat color="white" />,
      },
      { name: "20 push-ups", svg: <StickManPushup color="white" /> },
      {
        name: "30 seconds plank",
        svg: <StickManPlank color="white" />,
      },
      {
        name: "30 seconds side plank x2",
        svg: <StickManSidePlank color="white" />,
      },
      {
        name: "20 hip thrusters",
        svg: <StickManHipThrusters color="white" />,
      },
      {
        name: "30 seconds boat hold",
        svg: <StickManBoatHold color="white" />,
      },
      {
        name: "20 sit-ups",
        svg: <StickManSitup color="white" />,
      },
    ],
    newChallenge: {
      name: "20 lunges per leg",
      svg: <StickManLunge color="white" />,
    },
  },
];
