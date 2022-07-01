/**
 * Partial<T> - Make all properties in T optional
 *
 * - Mapped Types
 *   - Adding modifiers
 * - Introduce `keyof` & Indexed Access Types
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 * @see https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */

{
  type Options = {
    foo: string;
    bar: string;
    baz: number;
  };

  const defaultOptions = { foo: "foo", bar: "bar", baz: 123 };

  const doThing = (options: Partial<Options>) => {
    options = { ...defaultOptions, ...options };
  };

  doThing({ foo: "oof" }); // valid - all fields optional
  doThing({ rab: "rab" }); // invalid - extra field
}

// keyof & index access

// adding modifiers

// type LNL_Partial
