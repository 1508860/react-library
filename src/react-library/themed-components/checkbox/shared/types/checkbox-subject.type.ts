import type { Subject } from "@react-library/common";

import type { CheckboxSelectedState } from "../enums/checkbox-selected-state.type";

/**
 * Subject for broadcasting a state change to a checkbox group value
 */
export type CheckboxSubject = Subject<CheckboxSelectedState>;
