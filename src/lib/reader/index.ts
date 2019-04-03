/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import * as Base from './base';
import * as Binary from './binary';
import * as Numeric from './numeric';

const reader = {
  ...Base,
  ...Binary,
  ...Numeric.default,
};

export default reader;
