import type { StringListener } from "./stdin.ts";
import { StdIn } from "./stdin.ts";
import { decode } from "../../deps.ts";

export class DenoStdIn implements StdIn {
  readonly isDefault: boolean;
  readonly #rid: number;
  readonly #reader: Deno.Reader;
  #dataListeners: StringListener[] = [];
  #isReading: undefined | Promise<void> = undefined;
  #shouldStopReading = false;

  constructor(stdin: Deno.Reader & { rid: number } = Deno.stdin) {
    this.#rid = stdin.rid;
    this.#reader = stdin;
    this.isDefault = this.#rid === Deno.stdin.rid;
  }
  setEncoding(_encoding: "utf8"): void {
  }
  resume(): void {
  }
  pause(): void {
  }

  on(_eventName: "data", cb: StringListener): void {
    this.#dataListeners.push(cb);
    this.#startReadingIfNotAlready();
  }

  off(_eventName: "data", cb: StringListener): void {
    this.#dataListeners = this.#dataListeners.filter((listener) =>
      listener !== cb
    );
    if (this.#dataListeners.length === 0) {
      this.#shouldStopReading = true;
    }
  }

  get isTTY(): boolean {
    return Deno.isatty(this.#rid);
  }

  setRawMode(value: boolean): void {
    Deno.setRaw(this.#rid, value);
  }

  #startReadingIfNotAlready(): void {
    if (!this.#isReading && !this.#shouldStopReading) {
      this.#isReading = this.#startReading();
    }
  }

  async #startReading(): Promise<void> {
    while (!this.#shouldStopReading) {
      const buffer = new Uint8Array(1024);
      const length: number | null = await this.#reader.read(buffer);
      if (length === null) {
        this.#shouldStopReading = true;
        continue;
      }
      const bytes = buffer.subarray(0, length);
      this.#emit(decode(bytes));
    }
    this.#isReading = undefined;
  }

  #emit(data: string): void {
    for (const listener of this.#dataListeners) {
      listener(data);
    }
  }
}
