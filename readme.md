# ink for deno

An attempt at making ink work with [Deno](https://deno.land/).

## TODO

### 1. Proof of concept

This PoC is for seeing how some basic functionality from `ink` can be made to
work with Deno.

- [x] Strip `ink` of everything but the code.
- [x] `deno fmt`
- [x] Make the syntax pass `./check-syntax`.
  - [x] If necessary, fork dependencies and make them work with Deno.
  - [x] If necessary, remove dependencies that are not needed if they cause any
        trouble.
  - [?] Replace `process.stdin` etc with
    [Standard Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API).
- [ ] Try using the library.
- [ ] ????
- [ ] Hopefully, get some basic `ink` functionality running with Deno.

### 2. Contribute upstream

- […] Evaluate if/how relevant parts of the PoC can be implemented properly
  upstream.
- [ ] Refactor out Node.js specific things, replace with a Standard Streams
      based API.
