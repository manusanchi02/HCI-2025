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

/**
 * Gets all chats from storage
 * @returns {Array} Array of chat objects
 */
export function getChats() {
  const data = getData()
  return data?.chat || []
}

/**
 * Gets a specific chat by username
 * @param {string} username - The username to search for
 * @returns {object | null} The chat object or null if not found
 */
export function getChatByUsername(username) {
  const chats = getChats()
  return chats.find(chat => chat.name.toLowerCase() === username.toLowerCase()) || null
}

/**
 * Gets messages for a specific username
 * @param {string} username - The username to get messages for
 * @returns {Array} Array of messages
 */
export function getMessages(username) {
  const chat = getChatByUsername(username)
  if (!chat) return []
  
  // Calculate time for messages marked as "10 minutes ago"
  return chat.messages.map(msg => {
    if (msg.time === "10 minutes ago") {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000)
      return {
        ...msg,
        time: tenMinutesAgo.getHours().toString().padStart(2, '0') + ':' + 
              tenMinutesAgo.getMinutes().toString().padStart(2, '0')
      }
    }
    return msg
  })
}

/**
 * Adds a message to a specific chat
 * @param {string} username - The username to add the message to
 * @param {object} message - The message object {type, text, time}
 */
export function addMessage(username, message) {
  const data = getData()
  if (!data) return
  
  const chatIndex = data.chat.findIndex(chat => chat.name.toLowerCase() === username.toLowerCase())
  
  if (chatIndex !== -1) {
    data.chat[chatIndex].messages.push(message)
  } else {
    // Create new chat if it doesn't exist
    data.chat.push({
      name: username,
      messages: [message]
    })
  }
  
  setData(data)
}
