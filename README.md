## `zx` issue with colours

The problem is to do with node not streaming over a TTY. What I have found is the best way to handle it is to change the stdio prop on the spawn options which automatically pipes output to the process.

scripts:

- `yarn bug` - demonstrate the bug
- `yarn fix` - demonstrate a way you might fix it
