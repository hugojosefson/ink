import { StdErr } from "./stderr.ts";
import "https://deno.land/std@0.116.0/node/global.ts";
import Writable from "https://deno.land/std@0.116.0/node/_stream/writable.ts";
type NodeJsWritable = Writable & {
  get isTTY(): boolean;
};

export class NodeStdErr implements StdErr {
  readonly #writableStream: NodeJsWritable;

  constructor(
    writableStream: Writable = process?.stderr,
  ) {
    this.#writableStream = writableStream as NodeJsWritable;
  }

  get isTTY(): boolean {
    return this.#writableStream.isTTY;
  }

  write(string: string): void {
    this.#writableStream.write(string);
  }
}
