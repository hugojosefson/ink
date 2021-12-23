import "./src/global.d.ts";
import { hide, show } from "./src/io/cli-cursor.ts";
import { loadWasmModule } from "./src/load-wasm-module.ts";

export { decode, encode } from "https://deno.land/std@0.87.0/encoding/utf8.ts";
export {
  createContext,
  default as React,
  forwardRef,
  PureComponent,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "https://cdn.skypack.dev/react?dts";
export type {
  FC,
  Key,
  LegacyRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "https://cdn.skypack.dev/react?dts";
export { default as yoga } from "https://cdn.skypack.dev/@jaksmok-react-pdf/yoga?dts";
export type { default as Yoga } from "https://cdn.skypack.dev/@types/yoga-layout?dts";
export type {
  Except,
  LiteralUnion,
} from "https://cdn.skypack.dev/type-fest?dts";
export type { Boxes } from "https://cdn.skypack.dev/cli-boxes@^2.2.0?dts";
export { default as chalk } from "https://cdn.skypack.dev/chalk@^4.1.0?dts";
export type { ForegroundColor } from "https://cdn.skypack.dev/chalk@^4.1.0?dts";
export { default as widestLine } from "https://cdn.skypack.dev/widest-line@^3.1.0?dts";
export { default as indentString } from "https://cdn.skypack.dev/indent-string?dts";
export { default as sliceAnsi } from "https://cdn.skypack.dev/slice-ansi@^3.0.0?dts";
export { default as stringWidth } from "https://cdn.skypack.dev/string-width?dts";
export { default as cliBoxes } from "https://cdn.skypack.dev/cli-boxes@^2.2.0?dts";

export { default as wrapAnsi } from "https://cdn.skypack.dev/wrap-ansi?dts";
export { default as cliTruncate } from "https://cdn.skypack.dev/cli-truncate?dts";

export { default as signalExit } from "https://cdn.skypack.dev/signal-exit?dts";
export type { FiberRoot } from "https://cdn.skypack.dev/react-reconciler?dts";
export { patchConsole } from "./src/patch-console.ts";
export { default as throttle } from "https://cdn.skypack.dev/lodash.throttle";
export { default as originalIsCI } from "https://cdn.skypack.dev/is-ci?dts";
export { default as ansiEscapes } from "https://cdn.skypack.dev/ansi-escapes?dts";
export { default as autoBind } from "https://cdn.skypack.dev/auto-bind?dts";
export const cliCursor = { show, hide };
export { default as createReconciler } from "https://cdn.skypack.dev/react-reconciler?dts";
export {
  unstable_cancelCallback,
  unstable_scheduleCallback,
} from "https://cdn.skypack.dev/scheduler?dts";
export const env = await Deno.env.toObject();
export { writeAllSync } from "https://deno.land/std/streams/conversion.ts";
