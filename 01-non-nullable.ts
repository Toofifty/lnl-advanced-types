/**
 * NonNullable<T> - Exclude null and undefined from T
 *
 * - Introduce Type Parameters
 * - Introduce Conditional Types
 * - Explain Distributive Conditional Types
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

{
  type FetchResponse = string | number | null | undefined;

  const fetchData = (url: string): NonNullable<FetchResponse> => {
    /* ... */
    return "valid response!";
  };

  const fetchMoreData = (url: string): NonNullable<FetchResponse> => {
    /* ... */
    return null; // invalid response
  };
}

// Using type parameters to create a generic type

// Using conditional types to add logic

// type LNL_NonNullable
