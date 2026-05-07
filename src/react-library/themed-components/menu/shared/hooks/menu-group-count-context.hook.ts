import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { MENU_GROUP_COUNT_CONTEXT } from "../constants/menu-group-count-context.const";

/**
 * Returns context for {@link MENU_GROUP_COUNT_CONTEXT} and ensures a non-null value
 */
export function useMenuGroupCountContext(): number {
	const result = useContext(MENU_GROUP_COUNT_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
