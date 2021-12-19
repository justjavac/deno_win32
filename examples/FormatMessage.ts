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
  new Deno.UnsafePointer(0n),
  new Deno.UnsafePointer(0n),
  new Deno.UnsafePointer(0n),
  new Deno.UnsafePointer(0n),
);

console.log("CreateWindow: %d", windowID);

const dwMessageId = win32.GetLastError();

console.log("GetLastError: %d", dwMessageId)

const lpMsgBuf = new Uint8Array(100);

win32.FormatMessage(
  0x00000100 | 0x00001000 | 0x00000200,
  new Deno.UnsafePointer(0n),
  dwMessageId,
  0,
  Deno.UnsafePointer.of(lpMsgBuf),
  0,
  new Deno.UnsafePointer(0n),
);

console.log(lpMsgBuf);
console.log(new TextDecoder().decode(lpMsgBuf));
