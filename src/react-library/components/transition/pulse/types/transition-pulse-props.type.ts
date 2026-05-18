import type {
	Callback,
	IDurationMs,
	IOnComplete,
	ITiming
} from "@react-library/common";

import type { TransitionTiming } from "../../shared/enums/transition-timing.type";

/**
 * Props for transition pulse component
 */
export type TransitionPulseProps = (
	IDurationMs<number> &
	Partial<IOnComplete<Callback<void>>> &
	ITiming<TransitionTiming>
);
