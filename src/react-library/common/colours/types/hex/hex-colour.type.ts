/**
 * Constraints a string to a single hexadecimal value
 */
type HexDigit = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F");

/**
 * Constraints a string to a hexadecimal colour value
 * i.e. 0 - 255 decimal range
 */
export type HexColour = `${HexDigit}${HexDigit}`;
