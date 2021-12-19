import { dll } from "./dll.ts";

/**
 * Retrieves the calling thread's last-error code value. The last-error code is
 * maintained on a per-thread basis. Multiple threads do not overwrite each
 * other's last-error code.
 *
 * @see https://docs.microsoft.com/en-us/windows/win32/api/errhandlingapi/nf-errhandlingapi-getlasterror
 *
 * @returns The return value is the calling thread's last-error code.
 */
export function GetLastError(): number {
  return dll.symbols.GetLastError() as number;
}
