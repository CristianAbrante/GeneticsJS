/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual } from '../../../individual/numeric';
import { BaseIndividualReader } from '../../base';

abstract class NumericReader<I extends NumericIndividual> extends BaseIndividualReader<I, number> {
  public tokenize(definition: string): string[] {
    return definition.split(/\s+/).filter(Boolean);
  }
}

export default NumericReader;
