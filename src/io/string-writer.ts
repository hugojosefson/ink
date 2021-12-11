export interface StringWriter {
  write(string: string): void;
  get isTTY(): boolean;
}
