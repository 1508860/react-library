import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

/**
 * Custom hook to resolve the text field input label based on parameters
 * @param isRequired
 * @param label
 */
export function useTextFieldInputLabelState(label: string, isRequired: boolean | undefined): string {

	const resolveState = useCallback<Callback<string>>(
		() => isRequired ? `${label}*` : label,
		[isRequired, label]
	);
	const state = useResolveState(resolveState);

	return state;
};
