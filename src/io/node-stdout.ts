import "https://deno.land/std@0.116.0/node/global.ts";
import Writable from "https://deno.land/std@0.116.0/node/_stream/writable.ts";
import { StdOut } from "./stdout.ts";

type NodeJsWritable = Writable & {
  get isTTY(): boolean;
  get columns(): number;
  get rows(): number;
};

export class NodeStdOut implements StdOut {
  readonly #writableStream: NodeJsWritable;

  constructor(
    writableStream: Writable = process?.stdout,
  ) {
    this.#writableStream = writableStream as NodeJsWritable;
  }

  get isTTY(): boolean {
    return this.#writableStream.isTTY;
  }

  write(string: string): void {
    this.#writableStream.write(string);
  }

  get columns(): number {
    return this.#writableStream.columns;
  }

  get rows(): number {
    return this.#writableStream.rows;
  }
}
