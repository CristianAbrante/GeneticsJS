/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../index';

const { BinaryIndividual, IntegerIndividual } = Genetics.individual;
const { BitwiseMutation, CreepMutation } = Genetics.mutation;

const a = new BinaryIndividual([true, false, false, true, true, false, false, true]);
const b = new BinaryIndividual([true, false, true, true]);

const mutation = new BitwiseMutation();

console.log(a);
mutation.mutate(a, 0.9);
console.log(a);
mutation.mutate(b);
console.log(b);

const c = new IntegerIndividual([1, 5, 6, 9, -3]);
const mut2 = new CreepMutation();

console.log(c);
mut2.mutate(c, 1);
console.log(c);
