/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';

export interface IndividualToken<T> {
  token: RegExp;
  value: (token: string) => T;
}

export default interface IndividualReader<I extends BaseIndividual<T>, T> {
  readonly tokenDefinition: Array<IndividualToken<T>>;

  tokenize(definition: string): string[];

  convertToken(token: string): T;

  getGenotype(tokens: string[]): T[];

  read(definition: string): I;
}
