import { useContext } from "react";

import { NullContextError } from "../../../errors";

import { COLOUR_SCHEME_CONTEXT } from "../constants/colour-scheme-context.const";
import type { ColourScheme } from "../types/colour-scheme.type";

/**
 * Returns context for {@link COLOUR_SCHEME_CONTEXT} and ensures a non-null value
 */
export function useColourSchemeContext(): ColourScheme {
	const result = useContext(COLOUR_SCHEME_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
