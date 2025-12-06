/**
 * @typedef {Object} User
 * @property {string} username - Username
 * @property {string} email - User's email
 * @property {string} password - User's password
 * @property {string} profilePicture - Profile picture URL or path
 */

/**
 * @typedef {Object} Ingredient
 * @property {string} name - Ingredient name
 * @property {string} quantity - Ingredient quantity
 */

/**
 * @typedef {Object} Recipe
 * @property {number} id - Unique recipe ID
 * @property {string} title - Recipe title
 * @property {Ingredient[]} ingredients - List of ingredients
 */

/**
 * @typedef {Object} Day
 * @property {string} name - Day name (e.g. "Monday", "Tuesday")
 * @property {number[]} lunch - Array of recipe IDs for lunch
 * @property {number[]} dinner - Array of recipe IDs for dinner
 */

/**
 * @typedef {Object} MarketItem
 * @property {string} name - Item name
 * @property {string} quantity - Item quantity
 * @property {string} user - User who added the item
 * @property {number} price - Item price
 * @property {string} uploadDate - Upload date (YYYY-MM-DD)
 * @property {string} expirationDate - Expiration date (YYYY-MM-DD)
 * @property {string} image - Item image in base64
 */

/**
 * @typedef {Object} AppData
 * @property {User} user - User data
 * @property {Day[]} days - Weekly meal planning
 * @property {Recipe[]} recipes - List of all available recipes
 * @property {MarketItem[]} market - Shopping list
 */

export {}
