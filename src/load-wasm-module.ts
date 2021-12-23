export async function loadWasmModule(url: string | URL) {
  const importObject = {
    a: {
      a: () => 0,
      b: () => 0,
      c: () => 0,
      d: () => 0,
      e: () => 0,
      f: () => 0,
      g: () => 0,
      h: () => 0,
      i: () => 0,
      j: () => 0,
      k: () => 0,
      l: () => 0,
      m: () => 0,
      n: () => 0,
      o: () => 0,
      p: () => 0,
      q: () => 0,
      r: () => 0,
      s: () => 0,
      t: () => 0,
      u: () => 0,
      v: () => 0,
      w: () => 0,
      x: () => 0,
      y: () => 0,
      z: () => 0,
      A: () => 0,
      B: () => 0,
      C: () => 0,
      D: () => 0,
      E: () => 0,
      F: () => 0,
      G: () => 0,
      H: () => 0,
      I: () => 0,
      J: () => 0,
      K: () => 0,
      L: () => 0,
      M: () => 0,
      N: () => 0,
      O: () => 0,
      P: () => 0,
      Q: () => 0,
      R: () => 0,
      S: () => 0,
      T: () => 0,
      U: () => 0,
      V: () => 0,
      W: () => 0,
      X: () => 0,
      Y: () => 0,
      Z: () => 0,
    },
  };

  // const response: Response = await fetch(url);
  //
  // if (!response.ok) {
  //   throw new Error(
  //     `ERROR: Could not load wasm module from ${url}, because ${response.status} ${response.statusText}.`,
  //   );
  // }
  // const wasmCode: Uint8Array = new Uint8Array(await response.arrayBuffer());
  // const wasmModule: WebAssembly.Module = new WebAssembly.Module(wasmCode);
  // const wasmInstance: WebAssembly.Instance = new WebAssembly.Instance(
  //   wasmModule,
  //     {
  //       imports: {
  //         a: function(){}
  //       }
  //     }
  // );
  // const exports: WebAssembly.Exports = wasmInstance.exports;
  // return exports;
  const obj = await WebAssembly.instantiateStreaming(fetch(url), importObject);
  // const {instance} = obj
  // console.log(instance.exports)
  // const {I, K, L, M, N, O} = instance.exports
  // console.log({
  //     default: instance.exports.default,
  //     Yoga: instance.exports.Yoga,
  //     Node: instance.exports.Node,
  //     I: I.create,
  //     K: K.create,
  //     L: L.create,
  //     M: M.create,
  //     N: N.create,
  //     O: O.create,
  // })
  return obj;
}
