import type { CSSProperties, PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IIsDisabled,
	IOnClick,
	IRefCallback,
	IUseColourState,
	IColourStateConfig,
	IStyleConfig,
	IUseStyleState
} from "@react-library/common";

import type { ButtonClickTarget } from "../../../types/button-click-target.type";
import type { ButtonColourState } from "../../../types/button-colour-state.type";
import type { ButtonContainerUseColourStateParam } from "./button-container-use-colour-state-param.type";
import type { ButtonContainerUseStyleStateParam } from "./button-container-use-style-state-param.type";

/**
 * Props for button container
*/
export type ButtonContainerProps<TStyleConfig, TUseColourStateConfig> = (
	IColourStateConfig<TUseColourStateConfig> &
	IIsDisabled &
	IOnClick<ButtonClickTarget> &
	PropsWithChildren &
	Partial<IRefCallback<ButtonClickTarget | null>> &
	IStyleConfig<TStyleConfig> &
	IUseColourState<CallbackWithParameter<ButtonContainerUseColourStateParam<TUseColourStateConfig>, [ButtonColourState]>> &
	IUseStyleState<CallbackWithParameter<ButtonContainerUseStyleStateParam<TStyleConfig>, [CSSProperties]>>
);
