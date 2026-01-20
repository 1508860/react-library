import { useContext } from "react";

import { NullContextError } from "../../../errors";

import { COLOUR_SCHEME_CONTEXT } from "../constants/colour-scheme-context.const";
import type { IColourScheme } from "../interfaces/colour-scheme.interface";

/**
 * Returns context for {@link COLOUR_SCHEME_CONTEXT} and ensures a non-null value
 */
export function useColourSchemeContext(): IColourScheme {
	const result = useContext(COLOUR_SCHEME_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
