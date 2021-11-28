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
