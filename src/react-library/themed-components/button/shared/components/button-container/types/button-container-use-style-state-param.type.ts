import type { IColour, IConfig } from "@react-library/common";

import type { ButtonColourState } from "../../../types/button-colour-state.type";

/**
 * parameter type for button container style state hook
 */
export type ButtonContainerUseStyleStateParam<TConfig> = (
	IConfig<TConfig> &
	IColour<ButtonColourState>
);
