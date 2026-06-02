import { useCallback, useState } from "react";

import type { Callback } from "@react-library/common";

import { TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT } from "../../constants/text-field-date-modal-is-open-context.const";

import type { TextFieldDateModalProviderProps } from "./types/text-field-date-modal-provider-props.type";
import { TEXT_FIELD_ON_CLICK_CONTEXT } from "../../../shared/constants/text-field-on-click-context.const";

/**
 * Text field date modal provider component
 */
export function TextFieldDateModalProvider(props: TextFieldDateModalProviderProps) {

	const [isModalOpen, setIsModalOpen] = useState<boolean>(() => false);
	const toggleIsModalOpen = useCallback<Callback<void>>(() => setIsModalOpen(prev => !prev), []);

	return (
		<TEXT_FIELD_ON_CLICK_CONTEXT value={toggleIsModalOpen}>
			<TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT value={isModalOpen}>
				{props.children}
			</TEXT_FIELD_DATE_MODAL_IS_OPEN_CONTEXT>
		</TEXT_FIELD_ON_CLICK_CONTEXT>
	);
}
