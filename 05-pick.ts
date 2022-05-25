/**
 * Pick<T, K> - From T, pick a set of properties whose keys are in the union K
 *
 * - Mapped Types
 * - `keyof` & Index Access
 * - Parameter Constraints
 */

{
  type User = {
    id: string;
    name: string;
    password: string;
  };

  type PublicUser = Pick<User, "id" | "name">;

  const user: User = {
    id: "0",
    name: "John Doe",
    password: "123456",
  };

  const publicUser = user as PublicUser;

  publicUser.id;
  publicUser.name;
  publicUser.password;
}

// Open to the class!
// Any suggestions?

// type LNL_Pick
