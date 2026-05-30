import type {
	Callback,
	CallbackWithParameter,
	IIncrementBy,
	IIndex,
	IIsDisabled,
	IIsOpen,
	ILabel,
	ILastIndex,
	IOnClick,
	IOnIncrement
} from "@react-library/common";

/**
 * Date picker selection props
 */
export type DatePickerSelectionProps = (
	IIncrementBy<number> &
	IIndex<number> &
	IIsDisabled &
	IIsOpen<boolean> &
	ILabel<number | string | undefined> &
	ILastIndex<number> &
	IOnClick<Callback<void>> &
	IOnIncrement<CallbackWithParameter<number, void>>
);
