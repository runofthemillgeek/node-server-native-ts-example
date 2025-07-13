# node-server-native-ts-example

This is a minimal example of a Node.js server written in Typescript that runs without any build steps thanks to the native TypeScript support introduced in Node v22.x.

> [!WARNING]
>
> **Here be dragons!** This is not a production-ready example. You probably will need to tweak more stuff around Node error handling, input sanitization/validation, logging and more before going production.

## TODO

- Update tsconfig and package.json scripts once a new Node 22.x ships that unflags `--experimental-strip-types`
