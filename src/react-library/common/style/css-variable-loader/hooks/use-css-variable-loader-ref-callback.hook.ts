import { useCallback, type RefCallback } from "react";

import type { StyleCssVariableLoaderVariableKey, StyleCssVariableLoaderVariables } from "../types/css-variable-loader-variable.type";

/**
 * Hook to manage setting style CSS variables inline on an element
 * @param variables
 * @param refCallback optionlaly chain another ref callback to continue processing 
 */
export function useStyleCssVariableLoaderRefCallback<TElement extends ElementCSSInlineStyle>(
	variables: StyleCssVariableLoaderVariables,
	refCallback?: RefCallback<TElement>
): RefCallback<TElement> {
	const callback = useCallback<RefCallback<TElement>>(
		(element) => {
			if (element) {
				let key: StyleCssVariableLoaderVariableKey;
				for (key in variables) {
					element.style.setProperty(key, variables[key] ?? null);
				}
			}
			if (refCallback) refCallback(element);
		},
		[variables, refCallback]
	);

	return callback;
}
