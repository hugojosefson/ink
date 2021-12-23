function noop() {}

const console_: Record<string, CallableFunction> = console as unknown as Record<
  string,
  CallableFunction
>;

function getConsoleMethodNames(): string[] {
  return Object.keys(console)
    .filter((key) => typeof console_[key] === "function");
}

export function patchConsole() {
  const oldMethods: [name: string, fn: CallableFunction][] =
    getConsoleMethodNames()
      .map((name) => [name, console_[name]]);

  getConsoleMethodNames()
    .forEach((name) => console_[name] = noop);

  return function restore() {
    oldMethods.forEach(([name, fn]) => console_[name] = fn);
  };
}
