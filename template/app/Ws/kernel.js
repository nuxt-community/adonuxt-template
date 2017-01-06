'use strict'

const Ws = use('Ws')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| Global middleware are executed on every websocket request handshake and
| must be defined inside below array.
|
*/
const globalMiddleware = [
  'Adonis/Middleware/AuthInit'
]

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
|
| Named middleware are key/value pairs. Keys are later used on websocket
| channels.
|
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth'
}

/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Here we finally register our defined middleware to Middleware provider.
|
*/
Ws.global(globalMiddleware)
Ws.named(namedMiddleware)
