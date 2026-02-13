import type { AlphabetLowercase, AlphabetUppercase } from "../../alphabet";

/**
 * Describes URL safe characters that don't need encoding
 */
export type UrlCharacter = (
	AlphabetLowercase |
	AlphabetUppercase |
	UrlNumber |
	UrlSpecial
)

type UrlNumber = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9);

type UrlSpecial = ("-" | "." | "_" | "~");
