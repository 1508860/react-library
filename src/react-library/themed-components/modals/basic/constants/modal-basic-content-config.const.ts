import type { ModalContentConfig } from "@react-library/components";

import {
	MODAL_BASIC_SIZE_MAX_WIDTH,
	MODAL_BASIC_SIZE_MIN_WIDTH
} from "./modal-basic-size.const";

/**
 * Defines the amount of padding between items in the header or action components
 */
export const MODAL_BASIC_CONTENT_CONFIG: ModalContentConfig = {
	maxWidth: MODAL_BASIC_SIZE_MAX_WIDTH,
	minWidth: MODAL_BASIC_SIZE_MIN_WIDTH
};
