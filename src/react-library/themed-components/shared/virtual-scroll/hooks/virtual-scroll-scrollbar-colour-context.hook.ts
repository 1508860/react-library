import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import type { ScrollColour } from "../../scroll";

import { THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT } from "../constants/virtual-scroll-colour-context.const";

/**
 * Returns context for {@link THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT} and ensures a non-null value
 */
export function useThemedVirtualScrollScrollbarColourContext(): ScrollColour {
	const result = useContext(THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
