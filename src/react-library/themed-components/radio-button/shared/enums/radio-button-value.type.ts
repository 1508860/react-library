/**
 * Radio button values
 */
export const RadioButtonValue = {
	Value1: "value-1",
	Value2: "value-2",
	Value3: "value-3",
	Value4: "value-4",
	Value5: "value-5",
	Value6: "value-6",
	Value7: "value-7",
	Value8: "value-8",
	Value9: "value-9",
	Value10: "value-10",
	Value11: "value-11",
	Value12: "value-12",
	Value13: "value-13",
	Value14: "value-14",
	Value15: "value-15",
	Value16: "value-16",
	Value17: "value-17",
	Value18: "value-18",
	Value19: "value-19",
	Value20: "value-20"
} as const satisfies Record<string, string>;

/**
 * Type for {@link RadioButtonValue}
 */
export type RadioButtonValue = (typeof RadioButtonValue)[keyof typeof RadioButtonValue];
