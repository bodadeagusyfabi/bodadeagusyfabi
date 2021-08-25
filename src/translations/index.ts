import en from './en.json'

/**
 * Supported translations messages by language code
 */
const LOCALES: Record<string, Record<string, string>> = {
  en: en
}

/**
 * List of supported languages and their name in their own language
 */
const LANG_NAMES: Record<string, string>[] = [
  {text:"English", code: "en"}
]

export {LOCALES, LANG_NAMES}