/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import * as Base from './base';
import * as Floating from './floating';
import * as Integer from './integer';

const numericReaders = {
  ...Base,
  ...Floating,
  ...Integer,
};

export default numericReaders;
