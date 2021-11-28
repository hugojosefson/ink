import "./src/global.d.ts";
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

export { default as Yoga } from "https://cdn.skypack.dev/yoga-layout?dts";
export type { YogaNode } from "https://cdn.skypack.dev/yoga-layout?dts";

export type {
  Except,
  LiteralUnion,
} from "https://cdn.skypack.dev/type-fest?dts";
export type { Boxes } from "https://cdn.skypack.dev/cli-boxes@^2.2.0?dts";
export {
  default as chalk,
  ForegroundColor,
} from "https://cdn.skypack.dev/chalk@^4.1.0?dts";
export { default as widestLine } from "https://cdn.skypack.dev/widest-line@^3.1.0?dts";
export { default as indentString } from "https://cdn.skypack.dev/indent-string?dts";
export { default as sliceAnsi } from "https://cdn.skypack.dev/slice-ansi?dts";
export { default as stringWidth } from "https://cdn.skypack.dev/string-width?dts";
export { default as cliBoxes } from "https://cdn.skypack.dev/cli-boxes@^2.2.0?dts";

export { default as wrapAnsi } from "https://cdn.skypack.dev/wrap-ansi?dts";
export { default as cliTruncate } from "https://cdn.skypack.dev/cli-truncate?dts";

export {
  existsSync,
  readFileSync,
} from "https://deno.land/std@0.116.0/node/fs.ts";
export { default as StackUtils } from "https://cdn.skypack.dev/stack-utils?dts";
export {
  default as codeExcerpt,
  ExcerptLine,
} from "https://cdn.skypack.dev/code-excerpt?dts";
export { cwd } from "https://deno.land/std@0.116.0/node/process.ts";
export { Stream, Writable } from "https://deno.land/std@0.116.0/node/stream.ts";
export { default as signalExit } from "https://cdn.skypack.dev/signal-exit?dts";
export { FiberRoot } from "https://cdn.skypack.dev/react-reconciler?dts";
export { default as patchConsole } from "https://cdn.skypack.dev/patch-console?dts";
export { DebouncedFunc, throttle } from "https://cdn.skypack.dev/lodash?dts";
export { default as originalIsCI } from "https://cdn.skypack.dev/is-ci?dts";
export { default as ansiEscapes } from "https://cdn.skypack.dev/ansi-escapes?dts";
export { default as autoBind } from "https://cdn.skypack.dev/auto-bind?dts";
export { default as cliCursor } from "https://cdn.skypack.dev/cli-cursor?dts";
export { createReconciler } from "https://cdn.skypack.dev/react-reconciler?dts";
export {
  unstable_cancelCallback,
  unstable_scheduleCallback,
} from "https://cdn.skypack.dev/scheduler?dts";
import {
  Readable,
  Writable,
} from "https://deno.land/std@0.116.0/node/stream.ts";
export namespace NodeJS {
  export class ReadStream extends Readable {
    setRawMode(value: boolean) {
      Deno.setRaw(this.rid, value);
    }
    get isTTY() {
      return Deno.isatty(this.rid);
    }
  }
  export class WriteStream extends Writable {
    get rows() {
      return Deno.consoleSize().rows;
    }

    get columns() {
      return Deno.consoleSize().columns;
    }
  }
}
