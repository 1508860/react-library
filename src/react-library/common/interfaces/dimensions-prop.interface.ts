import type { IDimensions } from "./dimensions.interface";

/**
 * For a component that can have a dimensions prop
 */
export interface IDimensionsProp<THeight, TWidth> {
	dimensions: IDimensions<THeight, TWidth>;
}
