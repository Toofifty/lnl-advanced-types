/**
 * Parameters<T> - Obtain the parameters of a function type in a tuple
 *
 * - Introduce `infer`
 * - Recap `typeof`
 * - Conditional Types
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */

{
  const save = (...args: any) => {};

  const fetchData = (url: string, queryParams: Record<string, string>) => {
    /*...*/
  };

  const fetchAndSaveData = (...args: Parameters<typeof fetchData>) => {
    const data = fetchData(...args);
    save(data);
  };
}

// How `infer` works - why it's not the same as inference

// type LNL_Parameters
