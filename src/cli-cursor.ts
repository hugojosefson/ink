import { Writer } from "./stdio.ts";

function writeIfTty(string: string): (writer: Writer) => void {
  return function (writer: Writer): void {
    if (!writer.isTTY) {
      return;
    }
    writer.write(string);
  };
}

export const show: (writer: Writer) => void = writeIfTty("\u001B[?25h");
export const hide: (writer: Writer) => void = writeIfTty("\u001B[?25l");
