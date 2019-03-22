/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from '../../base/individual';
import BinaryGenerator from './BinaryGenerator';

class BinaryIndividual extends Individual<boolean> {
  constructor(representation?: string|boolean[]) {
    if (typeof representation === 'string') {

    } else {
      super(representation as boolean[]);
    }
  }
}

export default BinaryIndividual;