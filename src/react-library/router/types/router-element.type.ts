import type { ReactElement } from "react";

import type { RouterElementProps } from "./router-element-props.type";

export type RouterElement = (props: RouterElementProps) => ReactElement;
