/**
 * Used to configure values for CSS variables to be loaded for an element
 */
export type StyleCssVariableLoaderVariables = {
	[key: StyleCssVariableLoaderVariableKey]: (string | null | undefined);
};

/**
 * Defines variable name key for {@link StyleCssVariableLoaderVariables}
 */
export type StyleCssVariableLoaderVariableKey = `--${string}`;
