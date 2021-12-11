import { iterateReader } from "https://deno.land/std@0.116.0/streams/conversion.ts";

try {
  Deno.setRaw(Deno.stdin.rid, true);
  for await (const chunk of iterateReader(Deno.stdin)) {
    console.log("CHUNK!");
    console.log(chunk);
  }
} finally {
  Deno.setRaw(Deno.stdin.rid, false);
}
