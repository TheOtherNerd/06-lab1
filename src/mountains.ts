import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (
  mountains: Mountain[]
): Mountain | undefined => {
  let tallest: Mountain = mountains[0];
  mountains.forEach((mountain) => {
    if (mountain.height > tallest.height) {
      tallest = mountain;
    }
  });
  return tallest;
};
