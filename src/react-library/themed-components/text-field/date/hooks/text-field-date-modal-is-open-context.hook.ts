import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT } from "../constants/text-field-date-modal-is-open-context.const";

/**
 * Returns context for {@link TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT} and ensures a non-null value
 */
export function useTextFieldDateModalIsOpenContext(): boolean {
	const result = useContext(TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
