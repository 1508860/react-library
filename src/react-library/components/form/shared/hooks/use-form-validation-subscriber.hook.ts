import { useSubscriber } from "@react-library/common";

import { useFormValidationSubscriberStateContext } from "./form-validation-subscriber-state-context.hook";

/**
 * Custom hook for creating a subscriber for a form validation state
 * @param value
 */
export function useFormValidationSubscriber(value: boolean): void {

	const formValidationSubscriberState = useFormValidationSubscriberStateContext();

	useSubscriber(formValidationSubscriberState, value);
}
