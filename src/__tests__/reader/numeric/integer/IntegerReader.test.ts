/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import IntegerReaderData from '../../../resources/mocks/reader/data/IntegerReaderData';
import readerTestSuite from '../../../resources/suites/reader/ReaderTestSuite';

import Genetics from '../../../../index';
const { IntegerReader } = Genetics.reader;

const reader = new IntegerReader();
readerTestSuite(reader, IntegerReaderData);
