/**
 * Partial<T> - Make all properties in T optional
 *
 * - Mapped Types
 *   - Adding modifiers
 * - Introduce `keyof` & Index Access
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
