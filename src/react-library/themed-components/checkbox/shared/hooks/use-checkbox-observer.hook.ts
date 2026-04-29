import { useObserver, type CallbackWithParameter } from "@react-library/common";

import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

import { useCheckboxSubjectContextOptional } from "./checkbox-subject-context-optional.hook";

/**
 * Custom hook for creating a Observer for a checkbox state
 * @param update
 */
export function useCheckboxObserver(update: CallbackWithParameter<CheckboxSelectedState, void>): void {

	const checkboxObserver = useCheckboxSubjectContextOptional();

	useObserver(checkboxObserver, update);
}
