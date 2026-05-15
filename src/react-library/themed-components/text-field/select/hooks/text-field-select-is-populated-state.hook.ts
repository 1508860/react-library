import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { TextFieldIsPopulatedState } from "../../shared/types/text-field-is-populated-state.type";

import { TextFieldSelectInteraction } from "../enums/text-field-select-interaction.type";
import type { TextFieldSelectItemId } from "../types/text-field-select-item-id.type";
import type { TextFieldSelectProps } from "../types/text-field-select-props.type";

/**
 * Custom hook to resolve if the input text value is populated based on parameters
 * @param props
 */
export function useTextFieldSelectIsPopulatedState<TId extends TextFieldSelectItemId>(props: TextFieldSelectProps<TId>): TextFieldIsPopulatedState {

	const resolveState = useCallback<Callback<TextFieldIsPopulatedState>>(
		() => {
			if (props.interaction === TextFieldSelectInteraction.Multi) {

				let isDefault: boolean = true;

				if (props.defaultValue === undefined || props.defaultValue.length === 0) {
					if (props.value.length > 0) isDefault = false;
				} else if (props.defaultValue.length === props.value.length) {
					for (let index = 0; index < props.defaultValue.length; index++) {
						const value = props.defaultValue[index];
						if (props.value.findIndex(x => x !== value)) {
							isDefault = false;
							break;
						}
					}
				}

				return ({
					isDefault: isDefault,
					isPopulated: props.value.length > 0
				});
			}

			return ({
				isDefault: props.defaultValue === props.value,
				isPopulated: props.value !== undefined
			});
		},
		[props.defaultValue, props.interaction, props.value]
	);
	const state = useResolveState(resolveState);

	return state;
};
