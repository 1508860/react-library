import { useContext } from "react";

import { NullContextError, type Size } from "@react-library/common";

import { MENU_WIDTH_CONTEXT } from "../constants/menu-width-context.const";

/**
 * Returns context for {@link MENU_WIDTH_CONTEXT} and ensures a non-null value
 */
export function useWidthContext(): Size {
	const result = useContext(MENU_WIDTH_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
