import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT } from "../constants/text-field-select-menu-on-clear.const";
import type { TextFieldSelectMenuOnClear } from "../types/text-field-select-menu-on-clear.type";

/**
 * Returns context for {@link TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT} and ensures a non-null value
 */
export function useTextFieldSelectMenuOnClearContext(): TextFieldSelectMenuOnClear {
	const result = useContext(TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
