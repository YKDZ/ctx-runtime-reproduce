1. npm install
2. npm run dev
3. see console and find:

```text
Server running at http://localhost:3000/
10:45:40 [vike][request-1] HTTP request  → /
{
  runtime: 'node',
  env: undefined,
  ctx: undefined,
  req: undefined, <-----
  res: undefined, <-----
  adapter: 'hono',
  params: { _: undefined },
  hono: Context {
    env: undefined,
    finalized: false,
    error: undefined,
    render: [Function: render],
    setLayout: [Function: setLayout],
    getLayout: [Function: getLayout],
    setRenderer: [Function: setRenderer],
    header: [Function: header],
    status: [Function: status],
    set: [Function: set],
    get: [Function: get],
    newResponse: [Function: newResponse],
    body: [Function: body],
    text: [Function: text],
    json: [Function: json],
    html: [Function: html],
    redirect: [Function: redirect],
    notFound: [Function: notFound]
  }
}
```