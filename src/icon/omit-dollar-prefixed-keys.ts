/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

export default function omitDollarPrefixedKeys(source: { [x: string]: any }) {
  const result = {};

  for (const key in source) {
    if (key[0] !== '$') {
      result[key] = source[key];
    }
  }

  return result;
}
