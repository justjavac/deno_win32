import * as win32 from "../mod.ts";

const msgboxID = win32.MessageBox(
  0n,
  "Hello World\n你好，世界\nこんにちは世界\nBonjour le monde\nمرحبا بالعالم",
  "Deno FFI",
  win32.MB_YESNO | win32.MB_ICONWARNING,
);

switch (msgboxID) {
  case win32.IDYES:
    console.log("yes");
    break;
  case win32.IDNO:
    console.log("no");
    break;
  default:
    console.error("unreachable");
}
