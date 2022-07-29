import * as win32 from "../mod.ts";

const windowID = win32.CreateWindow(
  0,
  "hello xxx",
  "world xxx",
  0x00000000 | 0x00C00000 | 0x00080000 | 0x00040000 | 0x00020000 | 0x00010000,
  0,
  0,
  500,
  500,
  null,
  null,
  null,
  null,
);

console.log(windowID);
