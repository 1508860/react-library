import type { Callback, IOnDismiss } from "@react-library/common";

/**
 * Describes modal dismiss event
 */
export type ModalOnDismiss = IOnDismiss<Callback<void>>;
