import type {
	IIndeterminate,
	ISelected,
	ITotal
} from "@react-library/common";

/**
 * Type for checkbox group selected counts
 */
export type CheckboxGroupSelectedCounts = (
	IIndeterminate<number> &
	ISelected<number> &
	ITotal<number>
);
