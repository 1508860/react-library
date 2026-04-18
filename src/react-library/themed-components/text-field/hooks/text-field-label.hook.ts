import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

/**
 * Custom hook to resolve the text field label based on parameters
 * @param props
 */
export function useTextFieldLabelState(label: string, isRequired: boolean | undefined): string {

	const resolveState = useCallback<Callback<string>>(
		() => isRequired ? `${label}*` : label,
		[isRequired, label]
	);
	const state = useResolveState(resolveState);

	return state;
};
