import "https://deno.land/std@0.116.0/node/global.ts";
import Readable from "https://deno.land/std@0.116.0/node/_stream/readable.ts";
import { StdIn, StringListener } from "./stdin.ts";

type NodeJsReadable = Readable & {
  get isTTY(): boolean;
  setRawMode(value: boolean): void;
};
export class NodeStdIn implements StdIn {
  readonly isDefault: boolean;
  readonly #readableStream: NodeJsReadable;

  constructor(
    readableStream: NodeJsReadable = process?.stdin as NodeJsReadable,
  ) {
    this.#readableStream = readableStream;
    this.isDefault = this.#readableStream === process?.stdin as NodeJsReadable;
  }
  setEncoding(encoding: "utf8"): void {
    this.#readableStream.setEncoding(encoding);
  }
  resume(): void {
    this.#readableStream.resume();
  }
  pause(): void {
    this.#readableStream.pause();
  }

  on(eventName: "data", cb: StringListener): void {
    this.#readableStream.on(eventName, cb);
  }

  off(eventName: "data", cb: StringListener): void {
    this.#readableStream.off(eventName, cb);
  }

  get isTTY(): boolean {
    return this.#readableStream.isTTY;
  }

  setRawMode(value: boolean): void {
    this.#readableStream.setRawMode(value);
  }
}
