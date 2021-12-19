const dll = Deno.dlopen("kernel32.dll", {
  GetLastError: {
    parameters: [],
    result: "i64",
  },
  FormatMessageW: {
    parameters: ["i64", "pointer", "i64", "i64", "pointer", "i64", "pointer"],
    result: "i64",
  },
});

function close() {
  dll.close();
}

export { close, dll };
