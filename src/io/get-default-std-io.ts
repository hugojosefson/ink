import { DenoStdIn } from "./deno-stdin.ts";
import { DenoStdOut } from "./deno-stdout.ts";
import { DenoStdErr } from "./deno-stderr.ts";
import { NodeStdIn } from "./node-stdin.ts";
import { NodeStdOut } from "./node-stdout.ts";
import { NodeStdErr } from "./node-stderr.ts";
import { StdIn } from "./stdin.ts";
import { StdOut } from "./stdout.ts";
import { StdErr } from "./stderr.ts";

type HasStdIo = { stdin?: unknown; stdout?: unknown; stderr?: unknown };

type NodeJsGlobalThis = { process: HasStdIo };
type DenoGlobalThis = { Deno: HasStdIo };

function isNodeJs(_globalThis: unknown): _globalThis is NodeJsGlobalThis {
  return !!((globalThis as unknown as NodeJsGlobalThis)?.process?.stdin);
}

function isDeno(_globalThis: unknown): _globalThis is DenoGlobalThis {
  return !!(globalThis as unknown as DenoGlobalThis)?.Deno?.stdin;
}
class StdIoNotFoundError extends Error {
  constructor() {
    super(
      `Detected neither Deno nor Node.js, so could not use stdin, stdout, stderr.`,
    );
  }
}

export function getDefaultStdIn(): StdIn {
  if (isDeno(globalThis)) {
    return new DenoStdIn();
  }
  if (isNodeJs(globalThis)) {
    return new NodeStdIn();
  }
  throw new StdIoNotFoundError();
}

export function getDefaultStdOut(): StdOut {
  if (isDeno(globalThis)) {
    return new DenoStdOut();
  }
  if (isNodeJs(globalThis)) {
    return new NodeStdOut();
  }
  throw new StdIoNotFoundError();
}

export function getDefaultStdErr(): StdErr {
  if (isDeno(globalThis)) {
    return new DenoStdErr();
  }
  if (isNodeJs(globalThis)) {
    return new NodeStdErr();
  }
  throw new StdIoNotFoundError();
}
