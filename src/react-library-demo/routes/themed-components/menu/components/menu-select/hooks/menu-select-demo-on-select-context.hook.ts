import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_SELECT_DEMO_ON_SELECT_CONTEXT } from "../constants/menu-select-demo-on-select-context.const";
import type { MenuSelectDemoOnSelect } from "../types/menu-select-demo-on-select.type";

/**
 * Returns context for {@link MENU_SELECT_DEMO_ON_SELECT_CONTEXT} and ensures a non-null value
 */
export function useMenuSelectDemoOnSelectContext(): MenuSelectDemoOnSelect {
	const result = useContext(MENU_SELECT_DEMO_ON_SELECT_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
