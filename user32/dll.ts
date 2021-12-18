const dll = Deno.dlopen("user32.dll", {
  MessageBoxW: {
    parameters: ["pointer", "pointer", "pointer", "u64"],
    result: "i32",
  },
  CreateWindowExW: {
    parameters: [
      "u64",
      "pointer",
      "pointer",
      "u64",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },
});

function close() {
  dll.close();
}

export { close, dll };
