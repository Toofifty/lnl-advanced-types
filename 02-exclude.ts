/**
 * Exclude<T, U> - Exclude from T those types that are assignable to U
 *
 * - Type Parameters
 * - Conditional Types
 *   - Test against a type parameter
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

{
  type URL = "home" | "account/create" | "account/edit";
  type PublicURL = Exclude<URL, "account/edit">;

  const publicURL: PublicURL = "account/edit";
}

// Open to the class!
// Any suggestions?

// type LNL_Exclude
