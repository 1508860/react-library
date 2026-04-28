import { useObserver, type CallbackWithParameter } from "@react-library/common";

import { useCheckboxSubjectContextOptional } from "./checkbox-subject-context-optional.hook";

/**
 * Custom hook for creating a Observer for a checkbox state
 * @param update
 */
export function useCheckboxObserver(update: CallbackWithParameter<boolean, void>): void {

	const checkboxObserver = useCheckboxSubjectContextOptional();

	useObserver(checkboxObserver, update);
}
