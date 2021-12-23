import { Yoga, yoga } from "../deps.ts";

export default (yogaNode: Yoga.YogaNode) => {
  return (
    yogaNode.getComputedWidth() -
    yogaNode.getComputedPadding(yoga.EDGE_LEFT) -
    yogaNode.getComputedPadding(yoga.EDGE_RIGHT) -
    yogaNode.getComputedBorder(yoga.EDGE_LEFT) -
    yogaNode.getComputedBorder(yoga.EDGE_RIGHT)
  );
};
