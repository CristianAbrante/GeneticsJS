/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { FloatingIndividual } from '../../../individual/numeric/floating/';
import { NumericNonUniformMutation, NumericNonUniformMutationParams } from '../base/';

class NonuniformMutation extends NumericNonUniformMutation<FloatingIndividual> {
  protected getDeltaValue(params: NumericNonUniformMutationParams): number {
    return Generator.generateNormalDistributionValue(0.0, params.stepSize, params.engine);
  }
}

export default NonuniformMutation;
