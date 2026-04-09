
import type { IKeyValue } from "@react-library/common";

export type DemoItemConfig = IKeyValue<string, (boolean | number | string)>;

export type DemoItemConfigCollection = Array<DemoItemConfig>;
