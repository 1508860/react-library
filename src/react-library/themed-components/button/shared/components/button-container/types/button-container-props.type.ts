import type { CSSProperties, PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IIsDisabled,
	IOnClick,
	IOnHover,
	IOnPress,
	IRefCallback,
	IStyle
} from "@react-library/common";

import type { ButtonClickTarget } from "../../../types/button-click-target.type";

/**
 * Props for button container props
 */
export type ButtonContainerProps = (
	IIsDisabled &
	IOnClick<ButtonClickTarget> &
	Partial<IOnHover<CallbackWithParameter<boolean, void>>> &
	Partial<IOnPress<CallbackWithParameter<boolean, void>>> &
	PropsWithChildren &
	Partial<IRefCallback<ButtonClickTarget | null>> &
	IStyle<CSSProperties>
);
