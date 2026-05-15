import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_SELECT_REF_CONTEXT } from "../constants/text-field-select-ref-context.const";
import type { TextFieldSelectRef } from "../types/text-field-select-ref.type";

/**
 * Returns context for {@link TEXT_FIELD_SELECT_REF_CONTEXT} and ensures a non-null value
 */
export function useTextFieldSelectRefContext(): TextFieldSelectRef | undefined {
	const result = useContext(TEXT_FIELD_SELECT_REF_CONTEXT);
	if (!result) throw new NullContextError();
	return result ?? undefined;
};
