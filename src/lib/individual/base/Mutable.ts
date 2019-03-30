/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Individual } from './index';

interface Mutable<I extends Individual<T>, T> {
  copyWithin(target: number, start: number, end: number): I;
  set(geneIndex: number, gene: T): void;
  fill(gene: T, start: number, end: number): I;
  map(callback: (gene: T, geneIndex?: number, genotype?: T[]) => T): I;
  reverse(): I;
}

export default Mutable;
