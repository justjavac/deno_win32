import { dll } from "./dll.ts";

/**
 * Formats a message string. The function requires a message definition as input.
 * The message definition can come from a buffer passed into the function.
 * It can come from a message table resource in an already-loaded module.
 * Or the caller can ask the function to search the system's message table
 * resource(s) for the message definition. The function finds the message
 * definition in a message table resource based on a message identifier and a
 * language identifier. The function copies the formatted message text to an
 * output buffer, processing any embedded insert sequences if requested.
 *
 * @see https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-formatmessage
 *
 * @returns If the function succeeds, the return value is the number of TCHARs
 *          stored in the output buffer, excluding the terminating null character.
 */
export function FormatMessage(
  dwFlags: number,
  lpSource: bigint | null,
  dwMessageId: number,
  dwLanguageId: number,
  lpBuffer: bigint | null,
  nSize: number,
  Arguments: bigint | null,
): bigint {
  return dll.symbols.FormatMessageW(
    dwFlags,
    lpSource,
    dwMessageId,
    dwLanguageId,
    lpBuffer,
    nSize,
    Arguments,
  );
}
