import * as win32 from "../mod.ts";

const lastError = win32.GetLastError();

console.log("GetLastError: %d", lastError);
