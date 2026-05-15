import type {
	CallbackWithParameter,
	IDefaultValue,
	IInteraction,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldSelectInteraction } from "../enums/text-field-select-interaction.type";

import type { TextFieldSelectItemId } from "./text-field-select-item-id.type";

type TextFieldSelectPropsInteractionBase<TInteraction extends TextFieldSelectInteraction> = (
	IInteraction<TInteraction>
);

/**
 * Describes props relating to a text field select component with a multi select interaction type
 */
export type TextFieldSelectPropsInteractionMulti<TId extends TextFieldSelectItemId> = (
	Partial<IDefaultValue<Array<TId>>> &
	IOnValueChange<CallbackWithParameter<Array<TId>, void>> &
	TextFieldSelectPropsInteractionBase<typeof TextFieldSelectInteraction.Multi> &
	IValue<Array<TId>>
);

/**
 * Describes props relating to a text field select component with a single select interaction type
 */
export type TextFieldSelectPropsInteractionSingle<TId extends TextFieldSelectItemId> = (
	Partial<IDefaultValue<TId>> &
	IOnValueChange<CallbackWithParameter<TId | undefined, void>> &
	TextFieldSelectPropsInteractionBase<typeof TextFieldSelectInteraction.Single> &
	IValue<TId | undefined>
);

/**
 * Describes props relating to a text field select component for all interaction types
 */
export type TextFieldSelectPropsInteractionAll<TId extends TextFieldSelectItemId> = (
	TextFieldSelectPropsInteractionMulti<TId> |
	TextFieldSelectPropsInteractionSingle<TId>
);
