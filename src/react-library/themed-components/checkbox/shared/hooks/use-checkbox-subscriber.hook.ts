import { useSubscriber } from "@react-library/common";

import { useCheckboxSubscriberStateContextOptional } from "./checkbox-subscriber-state-context-optional.hook";
import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

/**
 * Custom hook for creating a subscriber for a checkbox state
 * @param value
 */
export function useCheckboxSubscriber(value: CheckboxSelectedState): void {

	const checkboxSubscriberState = useCheckboxSubscriberStateContextOptional();

	useSubscriber(checkboxSubscriberState, value);
}
