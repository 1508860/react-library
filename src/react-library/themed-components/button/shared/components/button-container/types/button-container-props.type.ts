import type { MouseEventHandler, PropsWithChildren } from "react";

import type {
	CallbackWithParameter,
	IIsDisabled,
	IOnClick,
	IRefCallback,
	IUseColourState,
	IColourStateConfig
} from "@react-library/common";

import type { ButtonClickTarget } from "../../../types/button-click-target.type";
import type { ButtonColourState } from "../../../types/button-colour-state.type";
import type { ButtonContainerUseColourStateParam } from "./button-container-use-colour-state-param.type";

/**
 * Props for button container
*/
export type ButtonContainerProps<TUseColourStateConfig> = (
	IColourStateConfig<TUseColourStateConfig> &
	IIsDisabled &
	IOnClick<MouseEventHandler<ButtonClickTarget>> &
	PropsWithChildren &
	Partial<IRefCallback<ButtonClickTarget | null>> &
	IUseColourState<CallbackWithParameter<ButtonContainerUseColourStateParam<TUseColourStateConfig>, [ButtonColourState]>>
);
