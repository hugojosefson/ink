import { StringWriter } from "./string-writer.ts";
export { getDefaultStdOut } from "./get-default-std-io.ts";

export interface StdOut extends StringWriter {
  get rows(): number;
  get columns(): number;
}
