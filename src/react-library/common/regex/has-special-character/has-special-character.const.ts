/**
 * A regular expression to determine if a string has a special character value
 */
export const REGEX_HAS_SPECIAL_CHARACTER: RegExp = new RegExp(/(?=.*[!@#$%^&*])/g);
