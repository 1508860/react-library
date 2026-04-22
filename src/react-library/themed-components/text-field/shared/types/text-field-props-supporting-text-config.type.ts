import type { IId, IIsErrored, ILeft, IRight, IText } from "@react-library/common";

import type { TextFieldSupportingTextLeftId } from "../enums/text-field-supporting-text-left-id.type";
import type { TextFieldSupportingTextRightId } from "../enums/text-field-supporting-text-right-id.type";

/**
 * Describes text field supporting text left config props
 */
export type TextFieldPropsSupportingTextConfig = (
	ILeft<TextFieldSupportingTextConfigsLeft> &
	IRight<TextFieldSupportingTextConfigsRight>
);

/**
 * Describes text field supporting text left config collection
 */
export type TextFieldSupportingTextConfigsLeft = Array<TextFieldSupportingTextConfigLeft>;

/**
 * Describes text field supporting text left config
 */
export type TextFieldSupportingTextConfigLeft = (
	IId<TextFieldSupportingTextLeftId> &
	IIsErrored<boolean> &
	IText<string>
);

/**
 * Describes text field supporting text left config collection
 */
export type TextFieldSupportingTextConfigsRight = Array<TextFieldSupportingTextConfigRight>;

/**
 * Describes text field supporting text right config
 */
export type TextFieldSupportingTextConfigRight = (
	IId<TextFieldSupportingTextRightId> &
	IIsErrored<boolean> &
	IText<string>
);

/**
 * Describes text field supporting text left config collection
 */
export type TextFieldSupportingTextConfigs = Array<TextFieldSupportingTextConfig>;

/**
 * Describes text field supporting text right config of left or right
 */
export type TextFieldSupportingTextConfig = (
	TextFieldSupportingTextConfigLeft |
	TextFieldSupportingTextConfigRight
);
