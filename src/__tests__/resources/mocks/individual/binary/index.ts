/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryIndividualMock from './BinaryIndividualMock';
import * as BinaryMock from './data';

interface Mock {
  [key: string]: BinaryIndividualMock;
}

const mocks: Mock = {
  ...BinaryMock,
};

export default mocks;
