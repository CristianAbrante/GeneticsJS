/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Numeric from './../base/';
import BinaryReader from './BinaryReader';

const reader = new BinaryReader();

class BinaryIndividual extends Numeric.Individual<boolean> {
  constructor(representation: string|boolean[]) {
    const range = {firstElement: true, lastElement: false};

    if (typeof representation === 'string') {
      super([], range);
      this.copy(reader.read(representation));
    } else {
      super(representation as boolean[], range);
    }
  }
}

export default BinaryIndividual;