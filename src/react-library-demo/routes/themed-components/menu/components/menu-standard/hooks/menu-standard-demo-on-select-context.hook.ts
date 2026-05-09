import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_STANDARD_DEMO_ON_SELECT_CONTEXT } from "../constants/menu-standard-demo-on-select-context.const";
import type { MenuStandardDemoOnSelect } from "../types/menu-standard-demo-on-select.type";

/**
 * Returns context for {@link MENU_STANDARD_DEMO_ON_SELECT_CONTEXT} and ensures a non-null value
 */
export function useMenuStandardDemoOnSelectContext(): MenuStandardDemoOnSelect {
	const result = useContext(MENU_STANDARD_DEMO_ON_SELECT_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
