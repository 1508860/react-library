import type { Callback, Colour, IColour, IInset, IOnComplete } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Props for button pulse layer props
 */
export type ButtonPulseLayerProps = (
	IColour<Colour> &
	Partial<IInset<TransitionPulseInsetData>> &
	IOnComplete<Callback<void>>
);
