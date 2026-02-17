/**
 * For a component that can have an touch id
 */
export interface ITouchId<TTouchId extends (number | string)> {
	touchId: TTouchId;
}
