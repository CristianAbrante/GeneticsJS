/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryReader from '../../reader/binary/BinaryReader';
import MutableIndividual from '../base/MutableIndividual';

const reader = new BinaryReader();

class BinaryIndividual extends MutableIndividual<boolean> {
  constructor(representation: string | boolean[]) {
    if (typeof representation === 'string') {
      super([]);
      this.copy(reader.read(representation));
    } else {
      super(representation as boolean[]);
    }
  }
}

export default BinaryIndividual;
