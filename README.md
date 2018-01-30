# Console Implementation

This is an implementation of the [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console) API. It can be
easily extended to allow for overriding of the no-operation methods into methods that are actually useful when
using them with a library like Winston.

## Installation

```sh
npm install --save console-impl
```

## Usage

An example of a enter text field that alerts the user:

```js
import ConsoleImpl from 'console-impl';

class MyConsole extends ConsoleImpl {
    log(statementToLog) {
        window.alert(statementToLog);
    }
}
```

Obviously, you can use this without the ES6 syntax and with a less annoying output.

## Small Print

### License

`Material UI Submit Field` is released under the MIT license.

### Author

Mark Katerberg ([@diablomarcus](http://twitter.com/diablomarcus))
