// -*- coding: utf-8, tab-width: 2 -*-

import pImmediate from 'p-immediate';

export default function usingItsOwnPromise(func, ...args) {
  let pr;
  async function soon() {
    // Promising funcs are executed immediately, to save overhead in cases
    // where they don't need to wait for anything. The "always defer" rule
    // only applies to chaining (.then). Thus, our first action is to
    // explicitly suspend, to "wait" so we're able to receive the promise.
    await pImmediate();
    if (!pr) { throw new Error('Unexpected control flow'); }
    return func(pr, ...args);
  };
  pr = soon();
  return pr;
};
