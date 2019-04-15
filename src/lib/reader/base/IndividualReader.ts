/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base';

/**
 * Interface that defines the tokens
 * of the individuals that are
 * going to be read.
 */
export interface IndividualToken<T> {
  /**
   * Token expressed with a regular
   * expression.
   */
  token: RegExp;
  /**
   * Converter between a token
   * string an the value.
   * @param token
   */
  value: (token: string) => T;
}

/**
 * ## IndividualReader
 * This interface defines the most common
 * methods for creating an individual reader.
 * @typeparam I is the type of the generated individual.
 * @typeparam T is the value of the genes of the individual.
 */
export default interface IndividualReader<I extends BaseIndividual<T>, T> {
  /**
   * Array of tokens of the individuals.
   */
  readonly tokenDefinition: Array<IndividualToken<T>>;

  /**
   * Tokenize a string into several
   * tokens.
   * @param definition of the individual.
   * @return the tokenized string.
   */
  tokenize(definition: string): string[];

  /**
   * This method converts a token
   * into the value of the individual
   * genes.
   * @param token of the individual.
   * @return the value of the individual.
   */
  convertToken(token: string): T;

  /**
   * given an array of tokens this
   * method converts into an array
   * of individual values.
   * @param tokens
   * @return the genotype or array of
   *          values
   */
  getGenotype(tokens: string[]): T[];

  /**
   * Reads a definition and converts
   * into an individual.
   * @param definition of the individual.
   * @return the read individual.
   */
  read(definition: string): I;
}
