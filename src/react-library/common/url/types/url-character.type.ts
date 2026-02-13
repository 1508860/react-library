import type { AlphabetLowercase, AlphabetUppercase } from "../../alphabet";
import type { NumberDecimal } from "../../number";

/**
 * Describes URL safe characters that don't need encoding
 */
export type UrlCharacter = (
	AlphabetLowercase |
	AlphabetUppercase |
	NumberDecimal |
	UrlSpecial
)

type UrlSpecial = ("-" | "." | "_" | "~");
