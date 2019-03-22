/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from '../../base/individual';
import {IndividualGenerator, IndividualGeneratorParams} from '../../base/IndividualGenerator';
import BinaryIndividual from './BinaryIndividual';

class BinaryGenerator implements IndividualGenerator<boolean> {
  public generate(param: IndividualGeneratorParams<boolean>): BinaryIndividual {
    return new BinaryIndividual();
  }
}

export default BinaryGenerator;