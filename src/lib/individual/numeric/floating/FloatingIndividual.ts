/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { FloatingReader } from '../../../reader/numeric/floating';
import { NumericIndividual, NumericRange } from '../base';

class FloatingIndividual extends NumericIndividual {
  constructor(representation: number[] | string, range?: NumericRange) {
    if (typeof representation === 'string') {
      super([], range);
      const reader = new FloatingReader();
      this.copy(reader.read(representation));
    } else {
      super(representation, range);
    }
  }
}

export default FloatingIndividual;
