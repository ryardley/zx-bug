## `zx` issue with colours

The problem is to do with the way piping has been handled. What happens is that somewhere when strings are buffered and unbuffered they loose their special character encoding if you just rely on a 'data' handler. What I have found is the best way to handle it is to change the stdio prop on the spawn options which automatically pipes output to the process.

scripts:

- `yarn bug` - demonstrate the bug
- `yarn fix` - demonstrate a way you might fix it
