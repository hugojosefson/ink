import { writeAllSync } from "../deps.ts";

export class StdIn {
  readonly #rid: number;
  readonly #reader: Deno.ReaderSync;
  readonly isDefault: boolean;

  constructor(stdin: Deno.ReaderSync & { rid: number } = Deno.stdin) {
    this.#rid = stdin.rid;
    this.#reader = stdin;

    this.isDefault = this.#rid === Deno.stdin.rid;
  }

  get isTTY(): boolean {
    return Deno.isatty(this.#rid);
  }

  setRawMode(value: boolean): void {
    Deno.setRaw(this.#rid, value);
  }
}

export interface Writer {
  write(string: string): void;
  isTTY: boolean;
}

export class StdOut implements Writer {
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

export class StdErr extends StdOut {
  constructor(stderr: Deno.WriterSync & { rid: number } = Deno.stderr) {
    super(stderr);
  }
}
