import type { IConfig, IIsHovered, IIsPressed } from "@react-library/common";

/**
 * parameter type for button container colour state hook
 */
export type ButtonContainerUseColourStateParam<TConfig> = (
	IConfig<TConfig> &
	IIsHovered<boolean> &
	IIsPressed<boolean>
);
