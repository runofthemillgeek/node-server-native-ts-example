# node-server-native-ts-example

This is a minimal example of a Node.js server written in Typescript that runs without any build steps thanks to the native TypeScript support introduced in Node v22.x.

> [!WARNING]
>
> **Here be dragons!** This is not a production-ready example. You probably will need to tweak more stuff around Node error handling, input sanitization/validation, logging and more before going production.

## Development

1. Run `npm install`
2. Run `npm run setup`
3. Change `.env` file values as needed
4. Run `npm run dev`

## Deployment

1. Upload project directory to server
2. Run `npm install --production`
3. Configure environment variables via `.env` file or other means
4. Run `npm start`

## TODO

- Update tsconfig and package.json scripts once a new Node 22.x ships that unflags `--experimental-strip-types`
