/**
 * Union type of all valid values for styling rotation transforms for an element using simple angle values
 */
export type StyleTransformRotateAngle = (
	`rotate(${number}deg)` |
	`rotate(${number}grad)` |
	`rotate(${number}rad)` |
	`rotate(${number}turn)`
);
