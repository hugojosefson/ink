console.log(
  "In ../yoga-layout-wasm, run `make yoga-with-header && npx serve.`",
);
// const yogaMjs =
//   new URL("./vendor/yoga-layout-wasm/yoga-with-header.mjs", import.meta.url).href;
// const yogaWasm =
//   new URL("./vendor/yoga-layout-wasm/yoga.wasm", import.meta.url).href;
// const entryJs =
//   new URL("./vendor/yoga-layout-wasm/entry-common.js", import.meta.url).href;
const yogaMjs = "http://localhost:3000/build/yoga-with-header.mjs";
const yogaWasm = "http://localhost:3000/build/yoga.wasm";
import entry from "../yoga-layout-wasm/yoga/javascript/sources/entry-node.ts";
console.log({ yogaMjs, yogaWasm });

console.log("fetching wasm...");
const wasm = fetch(yogaWasm);
console.log("fetching wasm...DONE.");
// console.log("awaiting wasm...");
// await wasm;
// console.log(`awaiting wasm...DONE. ${(await wasm).bodyUsed}`);

console.log("constructing yoga...");
const yoga = await (await import(yogaMjs)).default({
  wasm,
});
console.log("constructing yoga...DONE.");

console.log("calling entry...");
await entry((key: string, value: CallableFunction) => {
  yoga[key] = value.bind(yoga);
}, yoga);
console.log("calling entry...DONE.");
export { yoga };
export type { default as Yoga } from "https://cdn.skypack.dev/@types/yoga-layout?dts";
