import type { ISegmentId } from "@react-library/common";

import type { RouterSegmentId } from "./router-segment-id.type";

export type RouterGuards = Array<(params: ISegmentId<RouterSegmentId>) => (boolean | Promise<boolean>)>;
