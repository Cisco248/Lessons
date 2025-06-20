// An object representing a user
const User = {
    name: "cisco",
    email: "cisco@dev.com",
    isActive: true
};


// ----- Object Methods -----

/**
*
* 1. Object.keys(obj)
* Returns an array of the object's own property names.
* @returns ["name", "email", "isActive"]
*
*/
console.log(Object.keys(User));

/**
*
* 2. Object.values(obj)
* Returns an array of the object's own property values
* @returns ["cisco", "cisco@dev.com", true]
*
*/
console.log(Object.values(User));

/**
*
* 3. Object.entries(obj)
* Returns an array of key-value pairs.
* @returns [["name", "cisco"], ["email", "cisco@dev.com"], ["isActive", true]]
*
*/
console.log(Object.entries(User));

/**
*
* 4. hasOwnProperty()
* Checks if the object has a specific property (not from prototype chain).
* @returns true || false
*
*/
console.log(User.hasOwnProperty("email"))
console.log(User.hasOwnProperty("password"))

/**
*
* 5. Access and modify properties
* Change object access modifications.
* @returns false
*
*/
User.isActive = false;

/**
*
* 6. delete property
* Change object access modifications.
* @returns not found
*
*/
// delete User.email
console.log(User.email)

/**
*
* 7. Object.freeze(obj)
* Prevents modification of the object properties.
* @returns This will not change the name in strict mode
*
*/
Object.freeze(User)
User.name = "newname"
