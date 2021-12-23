import "./global.d.ts";
import renderNodeToOutput from "./render-node-to-output.ts";
import Output from "./output.ts";
import { DOMElement } from "./dom.ts";
import { Yoga, yoga } from "../deps.ts";

interface Result {
  output: string;
  outputHeight: number;
  staticOutput: string;
}

export default (node: DOMElement, terminalWidth: number): Result => {
  node.yogaNode!.setWidth(terminalWidth);

  if (node.yogaNode) {
    node.yogaNode.calculateLayout(undefined, undefined, yoga.DIRECTION_LTR);

    const output = new Output({
      width: node.yogaNode.getComputedWidth(),
      height: node.yogaNode.getComputedHeight(),
    });

    renderNodeToOutput(node, output, { skipStaticElements: true });

    let staticOutput;

    if (node.staticNode?.yogaNode) {
      staticOutput = new Output({
        width: node.staticNode.yogaNode.getComputedWidth(),
        height: node.staticNode.yogaNode.getComputedHeight(),
      });

      renderNodeToOutput(node.staticNode, staticOutput, {
        skipStaticElements: false,
      });
    }

    const { output: generatedOutput, height: outputHeight } = output.get();

    return {
      output: generatedOutput,
      outputHeight,
      // Newline at the end is needed, because static output doesn't have one, so
      // interactive output will override last line of static output
      staticOutput: staticOutput ? `${staticOutput.get().output}\n` : "",
    };
  }

  return {
    output: "",
    outputHeight: 0,
    staticOutput: "",
  };
};
