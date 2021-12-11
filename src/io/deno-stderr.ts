import { StdErr } from "./stderr.ts";
import { DenoStdOut } from "./deno-stdout.ts";

export class DenoStdErr extends DenoStdOut implements StdErr {
  constructor(stderr: Deno.WriterSync & { rid: number } = Deno.stderr) {
    super(stderr);
  }
}
