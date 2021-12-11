import { Key, LegacyRef, ReactNode } from "../deps.ts";
import { Except } from "../deps.ts";
import { DOMElement } from "./dom.ts";
import { Styles } from "./styles.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ink-box": Ink.Box;
      "ink-text": Ink.Text;
    }
  }
  // namespace process {
  //   export const stdin: unknown;
  //   export const stdout: unknown;
  //   export const stderr: unknown;
  // }
  // namespace stream {
  //   export interface Readable {
  //     get isTTY(): boolean;
  //     setRawMode(value: boolean): void;
  //   }
  //   export interface Writable {
  //     get isTTY(): boolean;
  //     write(string: string): void;
  //     get columns(): number;
  //     get rows(): number;
  //   }
  // }
}

declare namespace Ink {
  interface Box {
    children?: ReactNode;
    key?: Key;
    ref?: LegacyRef<DOMElement>;
    style?: Except<Styles, "textWrap">;
  }

  interface Text {
    children?: ReactNode;
    key?: Key;
    style?: Styles;
    internal_transform?: (children: string) => string;
  }
}
