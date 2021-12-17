/**
 * Windows represents Unicode characters using UTF-16 encoding, in which each
 * character is encoded as a 16-bit value.
 * UTF-16 characters are called **wide** characters, to distinguish them from
 * 8-bit ANSI characters.
 *
 * Windows providing two parallel sets of APIs, one for ANSI strings and the
 * other for Unicode strings. For example, there are two functions to displays
 * a modal dialog box:
 *
 * - `MessageBoxA` - takes an ANSI string.
 * - `MessageBoxW` - takes a Unicode string.
 *
 * Javascript already uses UTF-16 internally - use `charCodeAt()`  to get the values.
 */
export function cstr2ptrW(cstr: string) {
  const buffer = new ArrayBuffer((cstr.length + 1) * 2);
  const u16 = new Uint16Array(buffer);
  for (let i = 0; i <= cstr.length; i++) {
    u16[i] = cstr.charCodeAt(i);
  }
  return Deno.UnsafePointer.of(u16);
}
