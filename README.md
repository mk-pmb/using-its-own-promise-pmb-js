
<!--#echo json="package.json" key="name" underline="=" -->
using-its-own-promise-pmb
=========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
For the really exotic cases in which an async function needs to refer to a
promise that resulted from its invocation.
<!--/#echo -->



API
---

This module ESM-exports one function:

### usingItsOwnPromise(func[, ...args])

Returns a promise `pr` for the result of deferredly invoking
async function `func` with arguments `(pr, ...args)`.



Usage
-----

You'll probably never need this, except maybe when writing a custom
task scheduler or resource manager.


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
