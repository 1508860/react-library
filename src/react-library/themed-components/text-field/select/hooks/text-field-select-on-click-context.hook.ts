import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_SELECT_ON_CLICK_CONTEXT } from "../constants/text-field-select-on-click-context.const";
import type { TextFieldSelectOnClick } from "../types/text-field-select-on-click.type";

/**
 * Returns context for {@link TEXT_FIELD_SELECT_ON_CLICK_CONTEXT} and ensures a non-null value
 */
export function useTextFieldSelectOnClickContext(): TextFieldSelectOnClick {
	const result = useContext(TEXT_FIELD_SELECT_ON_CLICK_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
