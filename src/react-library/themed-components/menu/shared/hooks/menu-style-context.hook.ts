import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_STYLE_CONTEXT } from "../constants/menu-style-context.const";
import type { MenuStyle } from "../enums/menu-style.type";

/**
 * Returns context for {@link MENU_STYLE_CONTEXT} and ensures a non-null value
 */
export function useMenuStyleContext(): MenuStyle {
	const result = useContext(MENU_STYLE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
