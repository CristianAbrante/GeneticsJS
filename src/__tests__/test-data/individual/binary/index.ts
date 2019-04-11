/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import MutableIndividualMock from '../MutableIndividualMock';
import { BinaryIndividual } from './../../../../lib/individual/binary';
import * as BinaryMock from './mock';

interface Mock {
  [key: string]: MutableIndividualMock<BinaryIndividual, boolean>;
}

const mocks: Mock = {
  ...BinaryMock,
};

export default mocks;
