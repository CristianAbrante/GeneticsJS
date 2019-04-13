/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../../../../lib/individual/binary';
import BinaryIndividualMock from '../BinaryIndividualMock';

// 0 1 0 0 1 0 0 0
export const I: BinaryIndividualMock = {
  copy: [
    {
      change: [{ geneIndex: 1, gene: true }, { geneIndex: 3, gene: true }],
      other: new BinaryIndividual('0010'),
    },
  ],
  copyWithin: [
    {
      expected: [false, true, false, false, true, false, false, false],
      params: {
        end: 0,
        start: 0,
        target: 4,
      },
    },
  ],
  creation: {
    representation: '0 1 0 0 1 0 0 0',
  },
  deepCopy: [
    {
      change: [{ geneIndex: 1, gene: true }, { geneIndex: 3, gene: true }],
      other: new BinaryIndividual('0010'),
    },
  ],
  every: [
    {
      callback: (gene: boolean) => gene,
      expected: false,
    },
  ],
  expectedGenotype: [false, true, false, false, true, false, false, false],
  fill: [
    {
      expected: [true, true, true, true, true, false, false, false],
      params: {
        end: 4,
        gene: true,
        start: 0,
      },
    },
  ],
  find: [
    {
      callback: (gene: boolean) => gene === true,
      expected: true,
    },
    {
      callback: (gene: boolean) => gene === false,
      expected: false,
    },
  ],
  findIndex: [
    {
      callback: (gene: boolean) => gene === true,
      expected: 1,
    },
    {
      callback: (gene: boolean) => gene === false,
      expected: 0,
    },
  ],
  get: [
    {
      expected: false,
      params: 0,
    },
    {
      expected: false,
      params: 7,
    },
    {
      expected: false,
      params: 2,
    },
  ],
  includes: [
    {
      expected: true,
      params: { gene: false },
    },
    {
      expected: true,
      params: { gene: true },
    },
    {
      expected: false,
      params: { gene: true, startIndex: 5 },
    },
  ],
  indexOf: [
    {
      expected: 0,
      params: {
        gene: false,
      },
    },
    {
      expected: 1,
      params: {
        gene: true,
      },
    },
    {
      expected: -1,
      params: {
        gene: true,
        startIndex: 5,
      },
    },
    {
      expected: 4,
      params: {
        gene: true,
        startIndex: 2,
      },
    },
    {
      expected: 1,
      params: {
        gene: true,
        startIndex: 1,
      },
    },
  ],
  lastIndexOf: [
    {
      expected: 7,
      params: { gene: false },
    },
    {
      expected: 4,
      params: { gene: true },
    },
    {
      expected: 4,
      params: { gene: true, fromIndex: 5 },
    },
    {
      expected: 1,
      params: { gene: true, fromIndex: 2 },
    },
    {
      expected: 1,
      params: { gene: true, fromIndex: 1 },
    },
    {
      expected: 0,
      params: { gene: false, fromIndex: 0 },
    },
    {
      expected: 4,
      params: { gene: true, fromIndex: 6 },
    },
  ],
  length: {
    expected: 8,
  },
  map: [
    {
      callback: (gene: boolean) => !gene,
      expected: [true, false, true, true, false, true, true, true],
    },
  ],
  reverse: {
    expected: [false, false, false, true, false, false, true, false],
  },
  set: [
    {
      params: {
        gene: true,
        geneIndex: 0,
      },
    },
    {
      params: {
        gene: false,
        geneIndex: 2,
      },
    },
    {
      params: {
        gene: false,
        geneIndex: 4,
      },
    },
    {
      params: {
        gene: true,
        geneIndex: 7,
      },
    },
  ],
  some: [
    {
      callback: (gene: boolean) => gene === true,
      expected: true,
    },
    {
      callback: (gene: boolean) => gene === false,
      expected: true,
    },
    {
      callback: (gene: boolean) => typeof gene === 'string',
      expected: false,
    },
  ],
  toStringTest: {
    expected: '0 1 0 0 1 0 0 0',
  },
};

export default I;
