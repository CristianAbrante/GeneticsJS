/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import IndividualReader, { IndividualToken } from './../../base/IndividualReader';
import NumericIndividual from './NumericIndividual';
import { NumericType } from './NumericType';

abstract class NumericReader<I extends NumericIndividual<T>, T extends NumericType>
  implements IndividualReader<I, T>{

  public abstract readonly tokenDefinition: Array<IndividualToken<T>>;

  public convertToken(token: string): T{
    this.tokenDefinition.forEach(tokenDefinition => {
      if (tokenDefinition.token.test(token)) {
        return tokenDefinition.value(token);
      }
    });
    throw new Error(`Definition error: unexpected token ${token}`);
  }

  public getGenotype(tokens: string[]): T[] {
    const individualValues: T[] = [];
    tokens.forEach(token => {
      individualValues.push(this.convertToken(token));
    });
    return individualValues;
  }

  public abstract read(definition: string): I;

  public abstract tokenize(definition: string): string[];
}

export default NumericReader;