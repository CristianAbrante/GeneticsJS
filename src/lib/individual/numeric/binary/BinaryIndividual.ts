/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Numeric from './../base/';

class BinaryIndividual extends Numeric.Individual<boolean> {
  constructor(representation?: string|boolean[]) {
    super(representation as boolean[], {firstElement: true, lastElement: false});
  }
}

export default BinaryIndividual;