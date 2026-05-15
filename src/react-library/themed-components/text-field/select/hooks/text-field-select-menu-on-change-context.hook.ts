import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT } from "../constants/text-field-select-menu-on-change.const";
import type { TextFieldSelectItemId } from "../types/text-field-select-item-id.type";
import type { TextFieldSelectMenuOnChange } from "../types/text-field-select-menu-on-change.type";

/**
 * Returns context for {@link TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT} and ensures a non-null value
 */
export function useTextFieldSelectMenuOnChangeContext<TId extends TextFieldSelectItemId>(): TextFieldSelectMenuOnChange<TId> {
	const result = useContext(TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
