/**
 * Interface defining the structure and methods for a course-like object.
 */
interface Interface {
  param_1: string;    // A string parameter (e.g., course name)
  param_2: number;    // A numeric parameter (e.g., course price)

  /**
   * Returns a formatted string combining param_1 and param_2.
   * @returns A string combining param_1 and param_2
   */
  Method_One(): string;

  /**
   * Accepts a number and returns it unchanged.
   * @param param_3 - A number input
   * @returns The same number received as input
   */
  Method_Two(param_3: number): number;
}

/**
 * Factory function to create an object implementing the Interface.
 *
 * @param param_1 - The first parameter, typically a string
 * @param param_2 - The second parameter, typically a number
 * @returns An object that implements Interface with two methods
 */
function Function_One(param_1: string, param_2: number): Interface {
  return {
    param_1,      // Assign param_1 to the object property
    param_2,      // Assign param_2 to the object property

    // Method that returns a combined string of param_1 and param_2
    Method_One() {
      return `${this.param_1}, ${this.param_2}`;
    },

    // Method that returns the number passed in param_3
    Method_Two(param_3: number) {
      return param_3;
    }
  };
}