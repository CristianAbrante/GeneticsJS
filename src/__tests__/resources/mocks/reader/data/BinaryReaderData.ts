/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../../../lib/individual/binary/';
import ReaderMock from '../ReaderMock';

const creation: ReaderMock<BinaryIndividual, boolean>['creation'] = [
  {
    expected: new BinaryIndividual([]),
    representation: '',
  },
  {
    expected: new BinaryIndividual([false]),
    representation: '0',
  },
  {
    expected: new BinaryIndividual([true]),
    representation: '1',
  },
  {
    expected: new BinaryIndividual([false]),
    representation: 'f',
  },
  {
    expected: new BinaryIndividual([true]),
    representation: 't',
  },
  {
    expected: new BinaryIndividual([false]),
    representation: 'F',
  },
  {
    expected: new BinaryIndividual([true]),
    representation: 'T',
  },
  {
    expected: new BinaryIndividual([false, true, false, false, true, false, true, true]),
    representation: '01001011',
  },
  {
    expected: new BinaryIndividual([true, false, false, true, true, false]),
    representation: 'tffttf',
  },
  {
    expected: new BinaryIndividual([true, false, false, true, true, true]),
    representation: 'TFFTTT',
  },
  {
    expected: new BinaryIndividual([false, false, true, true, false, true, true, false]),
    representation: '0fTtf1tF',
  },
  {
    expected: new BinaryIndividual([false, false, true, true, true, false]),
    representation: '  0 011 10',
  },
  {
    expected: new BinaryIndividual([false, true, true, false]),
    representation: '\n0\n1\n1\n0',
  },
  {
    expected: new BinaryIndividual([false, true, true, false]),
    representation: '\t\t0\tt\nt\t0\t\n',
  },
  {
    expected: new BinaryIndividual([false, true, true, true, true, false, false, false]),
    representation: '\r0T\nT\tt\nt\r 0F  0\t\n',
  },
];

const error: ReaderMock<BinaryIndividual, boolean>['error'] = ['other', '010011d', '  01 1o1', '\t\ts'];

const mock: ReaderMock<BinaryIndividual, boolean> = {
  creation,
  error,
};

export default mock;
