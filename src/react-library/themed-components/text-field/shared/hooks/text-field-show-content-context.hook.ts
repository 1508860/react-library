import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_SHOW_CONTENT_CONTEXT } from "../constants/text-field-show-content-context.const";

/**
 * Returns context for {@link TEXT_FIELD_SHOW_CONTENT_CONTEXT} and ensures a non-null value
 */
export function useTextFieldShowContentContext(): boolean {
	const result = useContext(TEXT_FIELD_SHOW_CONTENT_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
