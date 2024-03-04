This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install react, next, next-auth, mongodb & mongoose (maybe npm i will install all node_modules dependencies?)

Download perl from https://strawberryperl.com/
Download openssl from (https://github.com/openssl/openssl/blob/master/INSTALL.md)
find openssl.tar.gz
open folder containing openssl.tar.gz in terminal/command prompt
tar -xf openssl-3.0.13.tar.gz
cd openssl-3.0.13
perl Configure VC-WIN64A

Useful extensions:

- Prettier (Formats code on saving)
- Github Copilot (Suggested code blocks, saves time)
- ES7+ React/Redux/React-Native snippets (typing 'rafce' creates a react component, for example)
- MongoDb for VS Code (Needed for mongo connection)
- Tailwind CSS Intellisense (Suggests styles)
- YAML (Markup for github actions & tests)

Connect to Db following intructions on mongo. The URI is in the .env file.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
