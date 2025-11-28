import initialData from '../assets/store/storage.json'
import './types'

const STORAGE_KEY = 'pomodhero_data'

/**
 * Initializes the local and session storage with default data if not already present
 */
export function initStorage() {
  const existingData = localStorage.getItem(STORAGE_KEY)
  
  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
  }
  sessionStorage.setItem("userLoggedIn", "false");
}

/**
 * Clears the local storage data
 */
export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Checks if a user is logged in
 * @returns {boolean} True if a user is logged in, false otherwise
 */
export function isUserLoggedIn() {
  const userLoggedIn = sessionStorage.getItem("userLoggedIn");
  return userLoggedIn === "true";
}

/**
 * Reads data from local storage
 * @returns {import('./types').AppData | null} The application data
 */
export function getData() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : null
}

/**
 * Writes data to local storage
 * @param {import('./types').AppData} data - The data to save
 */
export function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
