/**
 * @typedef {Object} User
 * @property {string} username - Nome utente
 * @property {string} email - Email dell'utente
 * @property {string} password - Password dell'utente
 * @property {string} profilePicture - URL o path dell'immagine profilo
 */

/**
 * @typedef {Object} Ingredient
 * @property {string} name - Nome dell'ingrediente
 * @property {string} quantity - Quantità dell'ingrediente
 */

/**
 * @typedef {Object} Recipe
 * @property {number} id - ID univoco della ricetta
 * @property {string} title - Titolo della ricetta
 * @property {Ingredient[]} ingredients - Lista degli ingredienti
 */

/**
 * @typedef {Object} Day
 * @property {string} name - Nome del giorno (es. "Monday", "Tuesday")
 * @property {Recipe[]} lunch - Ricette per il pranzo
 * @property {Recipe[]} dinner - Ricette per la cena
 */

/**
 * @typedef {Object} MarketItem
 * @property {string} name - Nome dell'articolo
 * @property {string} quantity - Quantità da acquistare
 * @property {string} user - Utente che ha aggiunto l'articolo
 */

/**
 * @typedef {Object} AppData
 * @property {User} user - Dati dell'utente
 * @property {Day[]} days - Pianificazione settimanale dei pasti
 * @property {Recipe[]} recipes - Lista di tutte le ricette disponibili
 * @property {MarketItem[]} market - Lista della spesa
 */

export {}
