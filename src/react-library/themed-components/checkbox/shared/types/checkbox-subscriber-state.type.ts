import type { SubscriberState } from "@react-library/common";

import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

/**
 * Subscriber state to monitor the state of all checkboxes within a checkbox group
 */
export type CheckboxSubscriberState = SubscriberState<CheckboxSelectedState>;
