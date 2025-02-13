[@asyncapi/glee](../README.md) / [lib/glee](../modules/lib_glee.md) / default

# Class: default

[lib/glee](../modules/lib_glee.md).default

## Hierarchy

- `EventEmitter`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](lib_glee.default.md#constructor)

### Properties

- [\_adapters](lib_glee.default.md#_adapters)
- [\_clusterAdapter](lib_glee.default.md#_clusteradapter)
- [\_options](lib_glee.default.md#_options)
- [\_router](lib_glee.default.md#_router)
- [captureRejectionSymbol](lib_glee.default.md#capturerejectionsymbol)
- [captureRejections](lib_glee.default.md#capturerejections)
- [defaultMaxListeners](lib_glee.default.md#defaultmaxlisteners)
- [errorMonitor](lib_glee.default.md#errormonitor)

### Accessors

- [adapters](lib_glee.default.md#adapters)
- [clusterAdapter](lib_glee.default.md#clusteradapter)
- [options](lib_glee.default.md#options)

### Methods

- [\_execErrorMiddleware](lib_glee.default.md#_execerrormiddleware)
- [\_processError](lib_glee.default.md#_processerror)
- [\_processMessage](lib_glee.default.md#_processmessage)
- [addAdapter](lib_glee.default.md#addadapter)
- [addListener](lib_glee.default.md#addlistener)
- [connect](lib_glee.default.md#connect)
- [emit](lib_glee.default.md#emit)
- [eventNames](lib_glee.default.md#eventnames)
- [getMaxListeners](lib_glee.default.md#getmaxlisteners)
- [injectError](lib_glee.default.md#injecterror)
- [injectMessage](lib_glee.default.md#injectmessage)
- [listen](lib_glee.default.md#listen)
- [listenerCount](lib_glee.default.md#listenercount)
- [listeners](lib_glee.default.md#listeners)
- [off](lib_glee.default.md#off)
- [on](lib_glee.default.md#on)
- [once](lib_glee.default.md#once)
- [prependListener](lib_glee.default.md#prependlistener)
- [prependOnceListener](lib_glee.default.md#prependoncelistener)
- [rawListeners](lib_glee.default.md#rawlisteners)
- [removeAllListeners](lib_glee.default.md#removealllisteners)
- [removeListener](lib_glee.default.md#removelistener)
- [send](lib_glee.default.md#send)
- [setClusterAdapter](lib_glee.default.md#setclusteradapter)
- [setMaxListeners](lib_glee.default.md#setmaxlisteners)
- [syncCluster](lib_glee.default.md#synccluster)
- [use](lib_glee.default.md#use)
- [useOutbound](lib_glee.default.md#useoutbound)
- [getEventListeners](lib_glee.default.md#geteventlisteners)
- [listenerCount](lib_glee.default.md#listenercount)
- [on](lib_glee.default.md#on)
- [once](lib_glee.default.md#once)
- [setMaxListeners](lib_glee.default.md#setmaxlisteners)

## Constructors

### constructor

• **new default**(`options?`)

Instantiates Glee.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GleeConfig`](../modules/lib.md#gleeconfig) |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/lib/glee.ts:40](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L40)

## Properties

### \_adapters

• `Private` **\_adapters**: `AdapterRecord`[]

#### Defined in

[src/lib/glee.ts:32](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L32)

___

### \_clusterAdapter

• `Private` **\_clusterAdapter**: `ClusterAdapterRecord`

#### Defined in

[src/lib/glee.ts:33](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L33)

___

### \_options

• `Private` **\_options**: [`GleeConfig`](../modules/lib.md#gleeconfig)

#### Defined in

[src/lib/glee.ts:30](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L30)

___

### \_router

• `Private` **\_router**: [`default`](lib_router.default.md)

#### Defined in

[src/lib/glee.ts:31](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L31)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](adapters_cluster_redis.default.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:307

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](adapters_cluster_redis.default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:300

## Accessors

### adapters

• `get` **adapters**(): `AdapterRecord`[]

#### Returns

`AdapterRecord`[]

#### Defined in

[src/lib/glee.ts:52](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L52)

___

### clusterAdapter

• `get` **clusterAdapter**(): `ClusterAdapterRecord`

#### Returns

`ClusterAdapterRecord`

#### Defined in

[src/lib/glee.ts:56](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L56)

___

### options

• `get` **options**(): [`GleeConfig`](../modules/lib.md#gleeconfig)

#### Returns

[`GleeConfig`](../modules/lib.md#gleeconfig)

#### Defined in

[src/lib/glee.ts:48](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L48)

## Methods

### \_execErrorMiddleware

▸ `Private` **_execErrorMiddleware**(`emws`, `index`, `error`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emws` | [`ChannelErrorMiddlewareTuple`](../modules/lib_router.md#channelerrormiddlewaretuple)[] |
| `index` | `number` |
| `error` | `Error` |
| `message` | [`default`](lib_message.default.md) |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:261](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L261)

___

### \_processError

▸ `Private` **_processError**(`errorMiddlewares`, `error`, `message`): `void`

Starts executing the middlewares for the given error and message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorMiddlewares` | [`ChannelErrorMiddlewareTuple`](../modules/lib_router.md#channelerrormiddlewaretuple)[] | The error middlewares chain to execute. |
| `error` | `Error` | The error to pass to the middleware. |
| `message` | [`default`](lib_message.default.md) | The message to pass to the middlewares. |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:254](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L254)

___

### \_processMessage

▸ `Private` **_processMessage**(`middlewares`, `errorMiddlewares`, `message`): `void`

Starts executing the middlewares for the given message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middlewares` | [`ChannelMiddlewareTuple`](../modules/lib_router.md#channelmiddlewaretuple)[] | The middleware chain to execute. |
| `errorMiddlewares` | [`ChannelErrorMiddlewareTuple`](../modules/lib_router.md#channelerrormiddlewaretuple)[] | The middlewares chain to execute in case of error. |
| `message` | [`default`](lib_message.default.md) | The message to pass to the middlewares. |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:200](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L200)

___

### addAdapter

▸ **addAdapter**(`Adapter`, `__namedParameters`): `void`

Adds a connection adapter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `Adapter` | typeof [`default`](lib_adapter.default.md) |
| `__namedParameters` | `Object` |
| `__namedParameters.parsedAsyncAPI` | `AsyncAPIDocument` |
| `__namedParameters.server` | `Server` |
| `__namedParameters.serverName` | `string` |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:68](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L68)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### connect

▸ **connect**(): `Promise`<`any`[]\>

Tells the adapters to connect.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/lib/glee.ts:123](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L123)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:583

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](lib_glee.default.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### injectError

▸ **injectError**(`error`, `channel?`): `void`

Injects an error into the Glee inbound error middleware chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `Error` | The error. |
| `channel?` | `string` | - |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:171](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L171)

___

### injectMessage

▸ **injectMessage**(`message`, `serverName`, `connection`): `void`

Injects a message into the Glee inbound middleware chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`default`](lib_message.default.md) | The message you want to send. |
| `serverName` | `string` | The name of the server this message is coming from. |
| `connection` | [`default`](lib_connection.default.md) | - |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:153](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L153)

___

### listen

▸ **listen**(): `Promise`<`any`[]\>

Alias for `connect`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/lib/glee.ts:142](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L142)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:589

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:358

___

### once

▸ **once**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:623

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`default`](lib_glee.default.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`default`](lib_glee.default.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### send

▸ **send**(`message`): `void`

Send a message to the adapters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`default`](lib_message.default.md) | The payload of the message you want to send. |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:110](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L110)

___

### setClusterAdapter

▸ **setClusterAdapter**(`Adapter`): `void`

Sets the cluster adapter to use.

#### Parameters

| Name | Type |
| :------ | :------ |
| `Adapter` | typeof [`default`](lib_cluster.default.md) |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:77](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L77)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`default`](lib_glee.default.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`default`](lib_glee.default.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### syncCluster

▸ **syncCluster**(`message`): `void`

Synchronizes the other instances in the cluster with the message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`default`](lib_message.default.md) |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:184](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L184)

___

### use

▸ **use**(...`middlewares`): `void`

Use a middleware for inbound messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`GenericMiddleware`](../modules/lib_router.md#genericmiddleware)[] |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:88](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L88)

▸ **use**(`channel`, ...`middlewares`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `...middlewares` | [`GenericMiddleware`](../modules/lib_router.md#genericmiddleware)[] |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:89](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L89)

___

### useOutbound

▸ **useOutbound**(...`middlewares`): `void`

Use a middleware for outbound messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`GenericMiddleware`](../modules/lib_router.md#genericmiddleware)[] |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:99](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L99)

▸ **useOutbound**(`channel`, ...`middlewares`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `...middlewares` | [`GenericMiddleware`](../modules/lib_router.md#genericmiddleware)[] |

#### Returns

`void`

#### Defined in

[src/lib/glee.ts:100](https://github.com/asyncapi/glee/blob/87abc56/src/lib/glee.ts#L100)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:270

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:242

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:221

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:162

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20);
// Equivalent to
EventEmitter.defaultMaxListeners = 20;

const eventTarget = new EventTarget();
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget);
```

**`since`** v15.3.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |
| `...eventTargets` | (`DOMEventTarget` \| `EventEmitter`)[] |

#### Returns

`void`

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:290
