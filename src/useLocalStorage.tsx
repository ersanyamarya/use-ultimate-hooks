import { useState } from 'react'
/**
 * It takes a key and an initial value, and returns an array with the current value and a function to
 * set the value
 * @param {string} key - The key to store the value in localStorage under.
 * @param {T | null} [initialValue] - The initial value to be stored in localStorage.
 * @returns An array with two elements. The first element is the value stored in localStorage, and the
 * second element is a function that takes a new value and sets it in localStorage.
 */
export default function useLocalStorage<T>(key: string, initialValue?: T | null): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key)
      switch (typeof initialValue) {
        case 'string':
          if (value) return value as unknown as T
          else {
            if (initialValue) window.localStorage.setItem(key, initialValue)
            return initialValue as unknown as T
          }
        case 'boolean':
          if (value) return getBooleanFromString(value) as unknown as T
          else {
            if (initialValue) window.localStorage.setItem(key, getStringFromBoolean(initialValue))
            return initialValue as unknown as T
          }
        case 'number':
          if (value) return getNumberFromString(value) as unknown as T
          else {
            if (initialValue) window.localStorage.setItem(key, getStringFromNumber(initialValue))
            return initialValue as unknown as T
          }
        case 'object':
          if (value) return getJsonFromString(value) as unknown as T
          else {
            if (initialValue) window.localStorage.setItem(key, getStringFromJson(initialValue as unknown as object))
            return initialValue as unknown as T
          }
        default:
          return initialValue as unknown as T
      }
    } catch (error) {
      return initialValue as unknown as T
    }
  })
  /**
   * It takes a new value, and if it's not null, it sets the value in localStorage to the stringified
   * version of the new value
   * @param {T} newValue - The new value to be stored in localStorage.
   */
  const setValue = (newValue: T) => {
    try {
      if (newValue) {
        switch (typeof newValue) {
          case 'string':
            window.localStorage.setItem(key, newValue)
            break
          case 'boolean':
            window.localStorage.setItem(key, getStringFromBoolean(newValue))
            break
          case 'number':
            window.localStorage.setItem(key, getStringFromNumber(newValue))
            break
          case 'object':
            window.localStorage.setItem(key, getStringFromJson(newValue as unknown as object))
            break
          default:
            break
        }
      } else window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
    setStoredValue(newValue)
  }
  return [storedValue, setValue]
}

/**
 * It takes a string and returns an object
 * @param {string | null} value - string | null
 * @returns An object
 */
const getJsonFromString = (value: string | null): object => {
  try {
    return JSON.parse(value || '')
  } catch (error) {
    return {}
  }
}

/**
 * It takes an object and returns a string
 * @param {object} value - The value to be converted to a string.
 * @returns A string
 */
const getStringFromJson = (value: object): string => {
  try {
    return JSON.stringify(value)
  } catch (error) {
    return ''
  }
}

/**
 * It returns true if the value is 'true', 'True', or 'TRUE', and false otherwise
 * @param {string | null} value - string | null
 * @returns A boolean
 */
const getBooleanFromString = (value: string | null): boolean => {
  try {
    return ['true', 'True', 'true'].includes(value || '')
  } catch (error) {
    return false
  }
}

/**
 * This function takes a boolean and returns a string.
 * @param {boolean} value - boolean - this is the value that we're going to convert to a string
 */
const getStringFromBoolean = (value: boolean): string => value.toString()

/**
 * If the value is a string, convert it to a number, otherwise return 0.
 * @param {string | null} value - string | null
 * @returns the number value of the string.
 */
const getNumberFromString = (value: string | null): number => {
  try {
    return Number(value)
  } catch (error) {
    return 0
  }
}

const getStringFromNumber = (value: number): string => value.toString()
