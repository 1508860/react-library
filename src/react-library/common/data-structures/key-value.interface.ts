/**
 * Describes key and value data for a {@link TValue} to be stored against a {@link TKey}
 */
export interface IKeyValue<TKey, TValue> {
	key: TKey;
	value: TValue;
}