import { type Context, createContext } from "react";

import type { CheckboxSubject } from "../types/checkbox-subject.type";

/**
 * Context to provide {@link CheckboxSubject}
 */
export const CHECKBOX_SUBJECT_CONTEXT: Context<CheckboxSubject | null> = createContext<CheckboxSubject | null>(null);
