/**
 * Describes URL safe characters that don't need encoding
 */
export type UrlCharacter = (
	Lowercase<UrlLetter> |
	Uppercase<UrlLetter> |
	UrlNumber |
	UrlSpecial
)

type UrlLetter = ("a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z");

type UrlNumber = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9);

type UrlSpecial = ("-" | "." | "_" | "~");
