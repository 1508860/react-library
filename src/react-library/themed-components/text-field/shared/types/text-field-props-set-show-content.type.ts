import type { CallbackWithParameter, ISetShowContent } from "@react-library/common";

/**
 * Text field props relating to a set show content callback
 */
export type TextFieldPropsSetShowContent = (
	ISetShowContent<CallbackWithParameter<boolean, void>>
);
