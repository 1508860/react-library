import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_ON_CLICK_CONTEXT } from "../constants/text-field-on-click-context.const";
import type { TextFieldOnClick } from "../types/text-field-on-click.type";

/**
 * Returns context for {@link TEXT_FIELD_ON_CLICK_CONTEXT} and ensures a non-null value
 */
export function useTextFieldOnClickContext(): TextFieldOnClick {
	const result = useContext(TEXT_FIELD_ON_CLICK_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
