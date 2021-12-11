import { StringWriter } from "./string-writer.ts";

function writeIfTty(string: string): (writer: StringWriter) => void {
  return function (writer: StringWriter): void {
    if (!writer.isTTY) {
      return;
    }
    writer.write(string);
  };
}

export const show: (writer: StringWriter) => void = writeIfTty("\u001B[?25h");
export const hide: (writer: StringWriter) => void = writeIfTty("\u001B[?25l");
