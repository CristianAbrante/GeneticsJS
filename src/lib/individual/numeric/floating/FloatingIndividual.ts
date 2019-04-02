/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual, NumericRange } from '../base';

class FloatingIndividual extends NumericIndividual {
  constructor(representation: number[] | string, range?: NumericRange) {
    super(representation as number[], range);
  }
}

export default FloatingIndividual;
