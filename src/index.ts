/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import * as generator from './lib/generator';
import * as individual from './lib/individual';
import * as mutation from './lib/mutation';
import * as reader from './lib/reader';

export default {
  generator: generator.default,
  individual: individual.default,
  mutation: mutation.default,
  reader: reader.default,
};
