import { writeAllSync } from "../../deps.ts";
import { StdOut } from "./stdout.ts";

export class DenoStdOut implements StdOut {
  readonly #rid: number;
  readonly #writer: Deno.WriterSync;

  constructor(stdout: Deno.WriterSync & { rid: number } = Deno.stdout) {
    this.#rid = stdout.rid;
    this.#writer = stdout;
  }

  get rows(): number {
    return Deno.consoleSize(this.#rid).rows;
  }

  get columns(): number {
    return Deno.consoleSize(this.#rid).columns;
  }

  get isTTY(): boolean {
    return Deno.isatty(this.#rid);
  }

  write(string: string) {
    writeAllSync(this.#writer, new TextEncoder().encode(string));
  }
}
