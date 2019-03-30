/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../index';

const { BinaryIndividual } = Genetics.individuals;

export default [
  {
    every: [
      {
        expected: false,
        params: (gene: boolean) => gene,
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
    toString: {
      expected: '0 1 0 0 1 0 0 0',
    },
  },
];
