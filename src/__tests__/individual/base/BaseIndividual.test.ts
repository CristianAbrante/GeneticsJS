/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividualTest from '../../test-data/BaseIndividualTest';

describe('BaseIndividual tests', () => {
  BaseIndividualTest.forEach(individualTest => {
    const initialization = individualTest.initialization.value;
    const expectedGenotype = individualTest.initialization.genotype;
    const indType = individualTest.initialization.type;
    let individual = new indType(initialization);

    describe(`Individual ${individual.toString()} tests`, () => {
      beforeEach(() => {
        individual = new indType(initialization);
      });

      test('creation test', () => {
        expect(individual.genotype).toEqual(expectedGenotype);
      });

      test('length test', () => {
        if (individualTest.length !== undefined) {
          expect(individual.length()).toBe(individualTest.length.expected);
        }
      });

      test('toString test', () => {
        if (individualTest.toStringTest !== undefined) {
          expect(individual.toString()).toEqual(individualTest.toStringTest.expected);
        }
      });

      describe('get test', () => {
        test('naive get test', () => {
          expectedGenotype.forEach((expectedGene, geneIndex) => {
            expect(individual.get(geneIndex)).toBe(expectedGene);
          });
        });

        test('get test', () => {
          if (individualTest.get !== undefined) {
            individualTest.get.forEach(test => {
              expect(individual.get(test.params)).toEqual(test.expected);
            });
          }
        });

        test('get throws positive', () => {
          expect(() => individual.get(10000)).toThrow(RangeError);
        });

        test('get throws negative', () => {
          expect(() => individual.get(-10)).toThrow(RangeError);
        });
      });

      describe('inclusion methods', () => {
        const methods = {
          includes: (gene: any, index: number) => individual.includes(gene, index),
          indexOf: (gene: any, index: number) => individual.indexOf(gene, index),
          lastIndexOf: (gene: any, index: number) => individual.lastIndexOf(gene, index),
        };

        Object.keys(methods).forEach(methodName => {
          test(`${methodName} test`, () => {
            // @ts-ignore
            const method = methods[methodName];
            // @ts-ignore
            const methodTest = individualTest[methodName];
            if (methodTest !== undefined) {
              methodTest.forEach((test: any) => {
                const gene = test.params[0];
                const startIndex = test.params[1];
                expect(method(gene, startIndex)).toEqual(test.expected);
              });
            }
          });
        });
      });

      describe('iteration methods', () => {
        test(`Iteration test`, () => {
          let index = 0;
          for (const gene of individual) {
            expect(gene).toBe(expectedGenotype[index++]);
          }
        });

        const methods = {
          entries: {
            checkNext: (next: any, expectGene: any, geneIndex: number) => {
              expect(next.value[0]).toEqual(geneIndex);
              expect(next.value[1]).toEqual(expectGene);
            },
            getIterator: () => individual.entries(),
          },
          keys: {
            checkNext: (next: any, expectGene: any, geneIndex: number) => {
              expect(next.value).toEqual(geneIndex);
            },
            getIterator: () => individual.keys(),
          },
          values: {
            checkNext: (next: any, expectGene: any, geneIndex: number) => {
              expect(next.value).toEqual(expectGene);
            },
            getIterator: () => individual.values(),
          },
        };

        Object.keys(methods).forEach(method => {
          test(`${method} test`, () => {
            // @ts-ignore
            const currentMethod = methods[method];
            const iterator = currentMethod.getIterator();
            expectedGenotype.forEach((expectedGene, geneIndex) => {
              const next = iterator.next();
              currentMethod.checkNext(next, expectedGene, geneIndex);
              expect(next.done).toBeFalsy();
            });
            const nextOut = iterator.next();
            expect(nextOut.value).toBeUndefined();
            expect(nextOut.done).toBeTruthy();
          });
        });
      });

      describe('callback each methods', () => {
        test('naive every test', () => {
          let i = 0;
          expect(
            individual.every((gene: any) => {
              return gene === expectedGenotype[i++];
            }),
          ).toBeTruthy();
        });

        test('naive forEach test', () => {
          let i = 0;
          const result = individual.forEach((gene: any) => {
            expect(gene).toEqual(expectedGenotype[i++]);
          });
          expect(result).toBeUndefined();
        });

        const methods = {
          every: (params: any) => individual.every(params),
          find: (params: any) => individual.find(params),
          findIndex: (params: any) => individual.findIndex(params),
          some: (params: any) => individual.some(params),
        };

        Object.keys(methods).forEach(methodName => {
          test(`${methodName} test`, () => {
            // @ts-ignore
            const method = methods[methodName];
            // @ts-ignore
            const methodTest = individualTest[methodName];
            if (methodTest !== undefined) {
              methodTest.forEach((test: any) => {
                expect(method(test.params)).toEqual(test.expected);
              });
            }
          });
        });
      });
    });
  });
});
