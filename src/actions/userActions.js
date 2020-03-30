import { CLICK_FILTER, CLICK_MORE_THAN_ZERO } from "../constants";

export const clickFilter = clickFilter => ({
  type: CLICK_FILTER,
  clickFilter
});
export const clickMoreThanZero = clickMoreThanZero => ({
  type: CLICK_MORE_THAN_ZERO,
  clickMoreThanZero
});
