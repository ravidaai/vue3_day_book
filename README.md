# pettycash

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### Try this in your code:

import Foo from './Foo';
import Bar from './Bar';

### without default
export {
  Foo,
  Bar,
}
Btw, you can also do it this way:

### bundle.js
export { default as Foo } from './Foo'
export { default as Bar } from './Bar'
export { default } from './Baz'

#### and import somewhere..
import Baz, { Foo, Bar } from './bundle'
Using export

export const MyFunction = () => {}
export const MyFunction2 = () => {}

const Var = 1;
const Var2 = 2;

export {
   Var,
   Var2,
}


#### Then import it this way
import {
  MyFunction,
  MyFunction2,
  Var,
  Var2,
} from './foo-bar-baz';
The difference with export default is that you can export something, and apply the name where you import it:

// export default
export default class UserClass {
  constructor() {}
};

### import it
import User from './user'
