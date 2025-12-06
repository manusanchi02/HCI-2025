import initialData from '../assets/store/storage.json'
import './types'

const STORAGE_KEY = 'pomodhero_data'
const TUTORIAL_COMPLETED_KEY = 'pomodhero_tutorial_completed'

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
 * Checks if the tutorial has been completed
 * @returns {boolean} True if tutorial has been completed, false otherwise
 */
export function isTutorialCompleted() {
  const completed = localStorage.getItem(TUTORIAL_COMPLETED_KEY);
  return completed === "true";
}

/**
 * Marks the tutorial as completed
 */
export function setTutorialCompleted() {
  localStorage.setItem(TUTORIAL_COMPLETED_KEY, "true");
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
