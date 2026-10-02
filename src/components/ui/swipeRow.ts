/*
 * A row that phones swipe through (snapping card by card, bleeding to the screen edge) and that
 * becomes a normal grid from `sm` up — add the grid column classes alongside SWIPE_ROW.
 * The vertical padding leaves room for card shadows, which a scroll container would otherwise clip.
 */
export const SWIPE_ROW = "no-scrollbar -mx-4 -mb-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-8 pt-1 sm:mx-0 sm:mb-0 sm:grid sm:overflow-visible sm:p-0";
export const SWIPE_ITEM = "w-[82%] shrink-0 snap-start sm:w-auto";
