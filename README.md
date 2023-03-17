# `proload-plugin-json5`

Enables the loading of `[namespace].config.json5` files using [`@proload/core`](https://github.com/natemoo-re/proload).

```js
import load from '@proload/core';
import json from '@proload/plugin-json5';

load.use([json5]);
await load('namespace');
```
