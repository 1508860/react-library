import { useContext } from "react";

import { NullContextError } from "../errors";

import { FONT_CONTEXT } from "./font-context.const";
import type { Font } from "./font.type";

/**
 * Returns context for {@link FONT_CONTEXT} and ensures a non-null value
 */
export function useFontContext(): Font {
	const result = useContext(FONT_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
