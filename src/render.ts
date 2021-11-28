import { ReactElement } from "../deps.ts";
import Ink, { Options as InkOptions } from "./ink.tsx";
import instances from "./instances.ts";
import { StdErr, StdIn, StdOut } from "./stdio.ts";

export interface RenderOptions {
  /**
   * Output stream where app will be rendered.
   *
   * @default process.stdout
   */
  stdout?: StdOut;
  /**
   * Input stream where app will listen for input.
   *
   * @default process.stdin
   */
  stdin?: StdIn;
  /**
   * Error stream.
   * @default process.stderr
   */
  stderr?: StdErr;
  /**
   * If true, each update will be rendered as a separate output, without replacing the previous one.
   *
   * @default false
   */
  debug?: boolean;
  /**
   * Configure whether Ink should listen to Ctrl+C keyboard input and exit the app. This is needed in case `process.stdin` is in raw mode, because then Ctrl+C is ignored by default and process is expected to handle it manually.
   *
   * @default true
   */
  exitOnCtrlC?: boolean;

  /**
   * Patch console methods to ensure console output doesn't mix with Ink output.
   *
   * @default true
   */
  patchConsole?: boolean;
}

export interface Instance {
  /**
   * Replace previous root node with a new one or update props of the current root node.
   */
  rerender: Ink["render"];
  /**
   * Manually unmount the whole Ink app.
   */
  unmount: Ink["unmount"];
  /**
   * Returns a promise, which resolves when app is unmounted.
   */
  waitUntilExit: Ink["waitUntilExit"];
  cleanup: () => void;

  /**
   * Clear output.
   */
  clear: () => void;
}

type RenderFunction = <Props, K extends StdOut | RenderOptions>(
  tree: ReactElement<Props>,
  options?: K,
) => Instance;

/**
 * Mount a component and render the output.
 */
const render: RenderFunction = (node, options): Instance => {
  const inkOptions: InkOptions = {
    stdout: new StdOut(),
    stdin: new StdIn(),
    stderr: new StdErr(),
    debug: false,
    exitOnCtrlC: true,
    patchConsole: true,
    ...getOptions(options),
  };

  const instance: Ink = getInstance(
    inkOptions.stdout,
    () => new Ink(inkOptions),
  );

  instance.render(node);

  return {
    rerender: instance.render,
    unmount: () => instance.unmount(),
    waitUntilExit: instance.waitUntilExit,
    cleanup: () => instances.delete(inkOptions.stdout),
    clear: instance.clear,
  };
};

export default render;

const getOptions = (
  stdout: StdOut | RenderOptions | undefined = {},
): RenderOptions => {
  if (stdout instanceof StdOut) {
    return {
      stdout,
      stdin: new StdIn(),
    };
  }

  return stdout;
};

const getInstance = (
  stdout: StdOut,
  createInstance: () => Ink,
): Ink => {
  let instance: Ink;

  if (instances.has(stdout)) {
    instance = instances.get(stdout);
  } else {
    instance = createInstance();
    instances.set(stdout, instance);
  }

  return instance;
};
