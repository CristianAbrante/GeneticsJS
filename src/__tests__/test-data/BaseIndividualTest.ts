/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../index';

const { BinaryIndividual } = Genetics.individual;

export default [
  // "
  {
    initialization: {
      genotype: [],
      type: BinaryIndividual,
      value: '',
    },
  },
  // 0
  {
    initialization: {
      genotype: [false],
      type: BinaryIndividual,
      value: 'f',
    },
  },
  // 1
  {
    initialization: {
      genotype: [true],
      type: BinaryIndividual,
      value: 't',
    },
  },
  // 0
  {
    initialization: {
      genotype: [false],
      type: BinaryIndividual,
      value: '  F  ',
    },
  },
  // 1
  {
    initialization: {
      genotype: [true],
      type: BinaryIndividual,
      value: '  T  ',
    },
  },
  // 0 1 0 1 1 1 1 0
  {
    initialization: {
      genotype: [false, true, false, true, true, true, true, false],
      type: BinaryIndividual,
      value: '0 1 f ttt\t\nt\rF',
    },
  },
  // 0 1 0 1
  {
    initialization: {
      genotype: [false, true, false, true],
      type: BinaryIndividual,
      value: [false, true, false, true],
    },
  },
  // 0 1 0 0 1 0 0 0
  {
    copy: [
      {
        change: [{ pos: 1, value: true }, { pos: 3, value: true }],
        expected: [false, false, true, false],
        params: new BinaryIndividual('0010'),
      },
    ],
    copyWithin: [
      {
        end: 4,
        expected: [false, true, false, false, false, true, false, false],
        start: 0,
        target: 4,
      },
    ],
    deepCopy: [
      {
        change: [{ pos: 1, value: true }, { pos: 3, value: true }],
        expected: [false, false, true, false],
        params: new BinaryIndividual('0010'),
      },
    ],
    every: [
      {
        expected: false,
        params: (gene: boolean) => gene,
      },
    ],
    fill: [
      {
        expected: [true, true, true, true, true, false, false, false],
        params: [true, 0, 4],
      },
    ],
    find: [
      {
        expected: true,
        params: (gene: boolean) => gene === true,
      },
      {
        expected: false,
        params: (gene: boolean) => gene === false,
      },
    ],
    findIndex: [
      {
        expected: 1,
        params: (gene: boolean) => gene === true,
      },
      {
        expected: 0,
        params: (gene: boolean) => gene === false,
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
        params: [false],
      },
      {
        expected: true,
        params: [true],
      },
      {
        expected: false,
        params: [true, 5],
      },
    ],
    indexOf: [
      {
        expected: 0,
        params: [false],
      },
      {
        expected: 1,
        params: [true],
      },
      {
        expected: -1,
        params: [true, 5],
      },
      {
        expected: 4,
        params: [true, 2],
      },
      {
        expected: 1,
        params: [true, 1],
      },
    ],
    initialization: {
      genotype: [false, true, false, false, true, false, false, false],
      type: BinaryIndividual,
      value: '01001000',
    },
    lastIndexOf: [
      {
        expected: 7,
        params: [false],
      },
      {
        expected: 4,
        params: [true],
      },
      {
        expected: 4,
        params: [true, 5],
      },
      {
        expected: 1,
        params: [true, 2],
      },
      {
        expected: 1,
        params: [true, 1],
      },
      {
        expected: 0,
        params: [false, 0],
      },
      {
        expected: 4,
        params: [true, 6],
      },
    ],
    length: {
      expected: 8,
    },
    map: [
      {
        expected: [true, false, true, true, false, true, true, true],
        params: (gene: boolean) => !gene,
      },
    ],
    reverse: {
      expected: [false, false, false, true, false, false, true, false],
    },
    set: [
      {
        expected: [true, true, false, false, false, false, false, true],
        params: [[0, true], [2, false], [4, false], [7, true]],
      },
    ],
    some: [
      {
        expected: true,
        params: (gene: boolean) => gene === true,
      },
      {
        expected: true,
        params: (gene: boolean) => gene === false,
      },
      {
        expected: false,
        params: (gene: boolean) => typeof gene === 'string',
      },
    ],
    toStringTest: {
      expected: '0 1 0 0 1 0 0 0',
    },
  },
];
