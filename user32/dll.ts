const dll = Deno.dlopen("user32.dll", {
  MessageBoxW: {
    parameters: ["pointer", "pointer", "pointer", "u64"],
    result: "i32",
  },
});

function close() {
  dll.close();
}

export { close, dll };
