import { StringWriter } from "./string-writer.ts";
export { getDefaultStdErr } from "./get-default-std-io.ts";

export interface StdErr extends StringWriter {
}
