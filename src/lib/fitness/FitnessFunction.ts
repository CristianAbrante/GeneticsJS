/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../individual/base/BaseIndividual';

type FitnessFunction<I extends BaseIndividual<T>, T> = (individual: I, ...args: any[]) => number;

export default FitnessFunction;
