export { getDefaultStdIn } from "./get-default-std-io.ts";

export type StringListener = (data: string) => void;

export interface StdIn {
  setEncoding(encoding: "utf8"): void;
  resume(): void;
  pause(): void;
  get isDefault(): boolean;
  get isTTY(): boolean;
  setRawMode(value: boolean): void;
  on(eventName: "data", cb: StringListener): void;
  off(eventName: "data", cb: StringListener): void;
}
