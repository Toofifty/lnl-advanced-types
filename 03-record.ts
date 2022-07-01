/**
 * Record<K, T> - Construct a type with a set of properties K of type T
 *
 * - Introduce Mapped Types
 *   - Iteration using `in`
 * - Introduce Parameter Constraints
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */

{
  type Address = { streetNumber: number; street: string };
  type UserAddresses = Record<string, Address>;

  const addresses: UserAddresses = {
    "Marge Simpson": { streetNumber: 123, street: "Fake St" },
    "Homer Simpson": "742 Evergreen Terrace",
  };

  addresses["Ned Flanders"] = {
    streetNumber: 744,
    street: "Evergreen Terrace",
  };
}

// Creating mapped types

// Iterating the type

// Enforcing a constraint on the type parameter

// type LNL_Record
