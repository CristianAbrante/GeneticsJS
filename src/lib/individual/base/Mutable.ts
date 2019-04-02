/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from './index';

interface Mutable<I extends BaseIndividual<T>, T> {
  copy(other: I): void;
  deepCopy(other: I): void;
  copyWithin(target: number, start: number, end: number): void;
  set(geneIndex: number, gene: T): void;
  fill(gene: T, start: number, end: number): void;
  map(callback: (gene: T, geneIndex?: number, genotype?: T[]) => T): void;
  reverse(): void;
}

export default Mutable;
