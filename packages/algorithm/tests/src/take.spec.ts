// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import { take } from '@lumino/algorithm';

import { testIterator } from './iter.spec';

describe('@lumino/algorithm', () => {
  describe('take() from an array', () => {
    testIterator(() => {
      return [take([1, 2, 3, 4, 5], 2), [1, 2]];
    });
  });

  describe('take() from an iterable iterator', () => {
    testIterator(() => {
      return [take([0, 1, 2, 3], 1), [0]];
    });
  });

  describe('take() with count=0', () => {
    testIterator(() => [take([0, 1, 2, 3], 0), []]);
  });

  describe('take() only takes as many as count or are left', () => {
    const it = [0, 1, 2, 3, 4, 5, 6][Symbol.iterator]();
    testIterator(() => [take(it, 2), [0, 1]]);
    testIterator(() => [take(it, 4), [2, 3, 4, 5]]);
    testIterator(() => [take(it, 25), [6]]);
  });
});
