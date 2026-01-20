import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { FONT_CONTEXT } from "./font-context.const";
import type { IFont } from "./font.interface";

/**
 * Returns context for {@link FONT_CONTEXT} and ensures a non-null value
 */
export function useFontContext(): IFont {
	const result = useContext(FONT_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
