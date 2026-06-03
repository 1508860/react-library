import { useSubscriber } from "@react-library/common";

import { useFormValidationSubscriberStateContextOptional } from "./form-validation-subscriber-state-context-optional.hook";

/**
 * Custom hook for creating a subscriber for a form validation state
 * - The subscriber state is optional so nothing will happen if this context isn't provided
 * @param value
 */
export function useFormValidationSubscriberOptional(value: boolean): void {

	const formValidationSubscriberState = useFormValidationSubscriberStateContextOptional();

	useSubscriber(formValidationSubscriberState, value);
}
