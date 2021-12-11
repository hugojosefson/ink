import { ansiEscapes } from "../deps.ts";
import { cliCursor } from "../deps.ts";
import { StringWriter } from "./io/string-writer.ts";

export interface LogUpdate {
  clear: () => void;
  done: () => void;
  (str: string): void;
}

const create = (
  writer: StringWriter,
  { showCursor = false } = {},
): LogUpdate => {
  let previousLineCount = 0;
  let previousOutput = "";
  let hasHiddenCursor = false;

  const render = (str: string) => {
    if (!showCursor && !hasHiddenCursor) {
      cliCursor.hide(writer);
      hasHiddenCursor = true;
    }

    const output = str + "\n";
    if (output === previousOutput) {
      return;
    }

    previousOutput = output;
    writer.write(ansiEscapes.eraseLines(previousLineCount) + output);
    previousLineCount = output.split("\n").length;
  };

  render.clear = () => {
    writer.write(ansiEscapes.eraseLines(previousLineCount));
    previousOutput = "";
    previousLineCount = 0;
  };

  render.done = () => {
    previousOutput = "";
    previousLineCount = 0;

    if (!showCursor) {
      cliCursor.show(writer);
      hasHiddenCursor = false;
    }
  };

  return render;
};

export default { create };
