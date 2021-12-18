import { cstr2ptrW } from "../util.ts";
import { dll } from "./dll.ts";

/**
 * Displays a modal dialog box that contains a system icon, a set of buttons,
 * and a brief application-specific message, such as status or error
 * information.
 * The message box returns an integer value that indicates which button the user clicked.
 *
 * @see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messagebox
 *
 * @param hWnd A handle to the owner window of the message box to be created.
 *        If this parameter is `NULL`, the message box has no owner window.
 * @param lpText The message to be displayed. If the string consists of more than one line,
 *        you can separate the lines using a carriage return and/or linefeed character between each line.
 * @param lpCaption The dialog box title. If this parameter is NULL, the default title is Error.
 * @param uType The contents and behavior of the dialog box.
 *        This parameter can be a combination of flags from the following groups of flags.
 * @returns If a message box has a **Cancel** button, the function returns the **IDCANCEL**
 *          value if either the ESC key is pressed or the **Cancel** button is selected.
 *
 *          If the message box has no **Cancel** button, pressing ESC will no effect - unless
 *          an **MB_OK** button is present.
 *
 *          If an **MB_OK** button is displayed and the user presses ESC, the return value will be **IDOK**.
 *
 *          If the function fails, the return value is zero. To get extended error information, call [GetLastError]().
 */
export function MessageBox(
  hWnd: Deno.UnsafePointer,
  lpText: string,
  lpCaption: string,
  uType: number,
): number {
  return dll.symbols.MessageBoxW(
    hWnd,
    cstr2ptrW(lpText),
    cstr2ptrW(lpCaption),
    uType,
  ) as number;
}

/// ==================
/// To indicate the buttons displayed in the message box, specify one of the following values.
///===================

/** The message box contains three push buttons: **Abort**, **Retry**, and **Ignore**. */
export const MB_ABORTRETRYIGNORE = 0x00000002;

/**
 * The message box contains three push buttons: **Cancel**, **Try Again**,
 * **Continue**. Use this message box type instead of MB_ABORTRETRYIGNORE.
 */
export const MB_CANCELTRYCONTINUE = 0x00000006;

/**
 * Adds a **Help** button to the message box. When the user clicks the Help
 * button or presses F1, the system sends a [WM_HELP][] message to the owner.
 *
 * [WM_HELP]: https://docs.microsoft.com/en-us/windows/desktop/shell/wm-help
 */
export const MB_HELP = 0x00004000;

/** The message box contains one push button: **OK**. This is the default. */
export const MB_OK = 0x00000000;

/** The message box contains two push buttons: **OK** and **Cancel**. */
export const MB_OKCANCEL = 0x00000001;

/** The message box contains two push buttons: **Retry** and **Cancel**. */
export const MB_RETRYCANCEL = 0x00000005;

/** The message box contains two push buttons: **Yes** and **No**. */
export const MB_YESNO = 0x00000004;

/** The message box contains three push buttons: **Yes**, **No**, and **Cancel**. */
export const MB_YESNOCANCEL = 0x00000003;

/// ==================
/// To display an icon in the message box, specify one of the following values.
///===================

/** An exclamation-point icon appears in the message box. */
export const MB_ICONEXCLAMATION = 0x00000030;

/** An exclamation-point icon appears in the message box. */
export const MB_ICONWARNING = 0x00000030;

/** An icon consisting of a lowercase letter i in a circle appears in the message box. */
export const MB_ICONINFORMATION = 0x00000040;

/** An icon consisting of a lowercase letter i in a circle appears in the message box. */
export const MB_ICONASTERISK = 0x00000040;

/**
 * A question-mark icon appears in the message box. The question-mark
 * message icon is no longer recommended because it does not clearly
 * represent a specific type of message and because the phrasing of a
 * message as a question could apply to any message type. In addition,
 * users can confuse the message symbol question mark with Help information.
 * Therefore, do not use this question mark message symbol in your message boxes.
 * The system continues to support its inclusion only for backward compatibility.
 */
export const MB_ICONQUESTION = 0x00000020;

/** A stop-sign icon appears in the message box. */
export const MB_ICONSTOP = 0x00000010;

/** A stop-sign icon appears in the message box. */
export const MB_ICONERROR = 0x00000010;

/** A stop-sign icon appears in the message box. */
export const MB_ICONHAND = 0x00000010;

/// ==================
/// To indicate the default button, specify one of the following values.
///===================

/**
 * The first button is the default button.
 * **MB_DEFBUTTON1** is the default unless **MB_DEFBUTTON2**, **MB_DEFBUTTON3**,
 * or **MB_DEFBUTTON4** is specified.
 */
export const MB_DEFBUTTON1 = 0x00000000;

/** The second button is the default button. */
export const MB_DEFBUTTON2 = 0x00000100;

/** The third button is the default button. */
export const MB_DEFBUTTON3 = 0x00000200;

/** The fourth button is the default button. */
export const MB_DEFBUTTON4 = 0x00000300;

/// ==================
/// To indicate the modality of the dialog box, specify one of the following values.
///===================

/**
 * The user must respond to the message box before continuing work in the window
 * identified by the hWnd parameter. However, the user can move to the windows of
 * other threads and work in those windows.
 * 
 * Depending on the hierarchy of windows in the application, the user may be able
 * to move to other windows within the thread. All child windows of the parent of
 * the message box are automatically disabled, but pop-up windows are not.
 * 
 * `MB_APPLMODAL` is the default if neither `MB_SYSTEMMODAL` nor `MB_TASKMODAL` is specified.
 */
export const MB_APPLMODAL = 0x00000000;

/**
 * Same as **MB_APPLMODAL** except that the message box has the **WS_EX_TOPMOST** style.
 * Use system-modal message boxes to notify the user of serious, potentially damaging
 * errors that require immediate attention (for example, running out of memory). 
 * This flag has no effect on the user's ability to interact with windows other than
 * those associated with `hWnd`.
 */
export const MB_SYSTEMMODAL = 0x00001000;

/**
 * Same as `MB_APPLMODAL` except that all the top-level windows belonging to the
 * current thread are disabled if the hWnd parameter is `NULL`. 
 * Use this flag when the calling application or library does not have a window
 * handle available but still needs to prevent input to other windows in the
 * calling thread without suspending other threads.
 */
export const MB_TASKMODAL = 0x00002000;

/// ==================
/// To specify other options, use one or more of the following values.
///===================

// TODO

/// ==================
/// Return value
///===================

/** The **OK** button was selected. */
export const IDOK = 1;

/** The **Cancel** button was selected. */
export const IDCANCEL = 2;

/** The **Abort** button was selected. */
export const IDABORT = 3;

/** The **Retry** button was selected. */
export const IDRETRY = 4;

/** The **Ignore** button was selected. */
export const IDIGNORE = 5;

/** The **Yes** button was selected. */
export const IDYES = 6;

/** The **No** button was selected. */
export const IDNO = 7;

/** The **Try Again** button was selected. */
export const IDTRYAGAIN = 10;

/** The **Continue** button was selected. */
export const IDCONTINUE = 11;
